import { useMemo, useState } from "react";

import ReviewActivityPage from "./ReviewActivityPage";
import { saveActivityProgress } from "../services/progressService";

function ReviewHeroIllustration({ reviewNumber, accent }) {
  return (
    <svg
      viewBox="0 0 420 250"
      className="h-full w-full"
      role="img"
      aria-label={`Review ${reviewNumber} illustration`}
    >
      <rect width="420" height="250" rx="34" fill="#FFF7F2" />
      <circle cx="350" cy="53" r="31" fill="#FFD867" />
      <path
        d="M350 28L357 45L375 47L361 59L365 77L350 68L334 77L338 59L324 47L343 45Z"
        fill="#FFFDF7"
      />

      <rect
        x="96"
        y="38"
        width="200"
        height="166"
        rx="24"
        fill="#FFFDF7"
        stroke={accent}
        strokeWidth="9"
      />
      <rect x="145" y="25" width="102" height="34" rx="16" fill="#E98312" />
      <rect x="160" y="34" width="72" height="15" rx="7" fill="#FFF0D5" />

      {[83, 119, 155].map((y) => (
        <g key={y}>
          <rect
            x="124"
            y={y}
            width="28"
            height="28"
            rx="7"
            fill="#FFF0F1"
            stroke={accent}
            strokeWidth="3"
          />
          <path
            d={`M132 ${y + 14}L141 ${y + 22}L153 ${y + 7}`}
            fill="none"
            stroke="#12B886"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="168" y={y + 4} width="91" height="8" rx="4" fill="#DDE8AF" />
          <rect x="168" y={y + 17} width="67" height="7" rx="3.5" fill="#EEF4CF" />
        </g>
      ))}

      <g transform="translate(274 136) rotate(28)">
        <rect width="23" height="82" rx="10" fill="#E98312" />
        <path d="M0 67H23L11.5 91Z" fill="#F1C18C" />
        <path d="M7 86H16L11.5 95Z" fill="#244B52" />
        <rect width="23" height="15" rx="7" fill={accent} />
      </g>

      <circle cx="61" cy="75" r="31" fill={accent} />
      <text
        x="61"
        y="86"
        textAnchor="middle"
        fontSize="33"
        fontWeight="900"
        fill="#FFFDF7"
      >
        {reviewNumber}
      </text>

      <path
        d="M34 200C84 174 123 187 164 172C219 152 282 177 386 144V250H34Z"
        fill="#DDE8AF"
        opacity="0.72"
      />
    </svg>
  );
}

export default function ReviewDashboardPage({
  reviewId,
  reviewNumber,
  units,
  title,
  summary,
  studentInformation,
  onBack,
  activities,
  accent = "#FF6B6B",
  accentDark = "#D94848",
  headerColor = "#155E75",
  headerTitleColor = "#FFD991",
}) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeActivityId, setActiveActivityId] = useState(null);

  const totalQuestions = useMemo(
    () =>
      activities.reduce(
        (total, activity) => total + activity.questions.length,
        0
      ),
    [activities]
  );

  const activeActivity = activities.find(
    (activity) => activity.id === activeActivityId
  );

  const selectedActivity =
    activeTab === "dashboard"
      ? null
      : activities.find((activity) => activity.tabId === activeTab);

  const saveProgress = async ({
    activityId,
    activityType,
    correctAnswers,
    totalQuestions: activityTotal,
  }) => {
    try {
      const result = await saveActivityProgress({
        unitId: reviewId,
        activityId,
        activityType,
        correctAnswers,
        totalQuestions: activityTotal,
      });

      window.alert(
        `Your result has been saved: ${result.scorePercent}%`
      );
    } catch (error) {
      console.error(`Unable to save ${activityId}:`, error);
      window.alert(
        error?.message ||
          "The activity was completed, but the result could not be saved."
      );
      throw error;
    }
  };

  if (activeActivity) {
    return (
      <ReviewActivityPage
        activity={activeActivity}
        reviewNumber={reviewNumber}
        accent={accent}
        accentDark={accentDark}
        onBack={() => setActiveActivityId(null)}
        onComplete={({ correctAnswers, totalQuestions: activityTotal }) =>
          saveProgress({
            activityId: activeActivity.id,
            activityType: activeActivity.activityType,
            correctAnswers,
            totalQuestions: activityTotal,
          })
        }
      />
    );
  }

  const tabs = [
    { id: "dashboard", icon: "▦", label: "Dashboard" },
    ...activities.map((activity) => ({
      id: activity.tabId,
      icon: activity.icon,
      label: activity.shortLabel,
    })),
  ];

  const selectTab = (tab) => {
    setActiveTab(tab.id);
    setActiveActivityId(null);

    window.requestAnimationFrame(() => {
      const target = document.getElementById(
        tab.id === "dashboard"
          ? `${reviewId}-dashboard`
          : `${reviewId}-activity-panel`
      );
      target?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <main className="min-h-screen bg-[#F5F9DC] text-[#244B52]">
      <header
        className="sticky top-0 z-30 border-b-2 px-4 py-4 shadow-[0_10px_28px_rgba(88,74,67,0.18)] sm:px-6"
        style={{
          borderColor: accent,
          backgroundColor: headerColor,
        }}
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-3xl shadow-sm">
                📚
              </div>

              <div className="leading-tight">
                <p className="whitespace-nowrap text-xl font-black uppercase tracking-[0.12em] text-white sm:text-2xl">
                  ENGLISH 9
                </p>

                <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="whitespace-nowrap text-xl font-black uppercase tracking-[0.1em] text-white sm:text-2xl">
                    REVIEW {reviewNumber}
                  </span>

                  <span
                    className="text-xl font-black uppercase tracking-[0.07em] sm:text-2xl"
                    style={{ color: headerTitleColor }}
                  >
                    {units}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-white/90">
              Menu → Card → Start Activity
            </div>
          </div>

          <nav className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => selectTab(tab)}
                className={`rounded-xl px-3 py-3 text-sm font-black transition sm:text-base ${
                  activeTab === tab.id
                    ? "text-white shadow-md"
                    : "bg-white/5 text-white/90 hover:bg-white/15 hover:text-white"
                }`}
                style={
                  activeTab === tab.id
                    ? { backgroundColor: accent }
                    : undefined
                }
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section
        id={`${reviewId}-dashboard`}
        className="scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <section className="overflow-hidden rounded-[36px] border-2 border-[#CBDD7C] bg-[#EEF4CF] p-5 shadow-[0_20px_46px_rgba(96,123,67,0.15)] sm:p-8">
            <div
              className="rounded-[28px] border p-5 shadow-[0_16px_36px_rgba(21,94,117,0.22)]"
              style={{
                borderColor: accent,
                backgroundColor: headerColor,
              }}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/35 bg-white/15 text-3xl shadow-md">
                    👩‍🎓
                  </div>

                  <div>
                    <p className="text-sm font-black text-white/80">
                      Current student
                    </p>
                    <p className="mt-1 text-2xl font-black text-white sm:text-3xl">
                      {studentInformation?.fullName || "Student"}
                    </p>
                    <div className="mt-2 inline-flex rounded-full border border-white/35 bg-white/15 px-3 py-1 text-sm font-black text-[#FFF1C9]">
                      Class:{" "}
                      {studentInformation?.studentClass || "Grade 9"}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onBack}
                  className="inline-flex w-fit items-center gap-3 rounded-2xl border-2 bg-white px-6 py-3 text-base font-black shadow-[0_9px_22px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:bg-[#FFF7EE]"
                  style={{
                    borderColor: accent,
                    color: accentDark,
                  }}
                >
                  <span className="text-2xl">←</span>
                  Back to Home
                </button>
              </div>
            </div>

            <div className="mt-7 grid gap-6 lg:grid-cols-[1.05fr_1.3fr] lg:items-center">
              <div className="h-[280px] overflow-hidden rounded-[30px] border-2 border-white bg-white shadow-md">
                <ReviewHeroIllustration
                  reviewNumber={reviewNumber}
                  accent={accent}
                />
              </div>

              <div>
                <p
                  className="font-black uppercase tracking-[0.2em]"
                  style={{ color: accentDark }}
                >
                  English 9 · Review {reviewNumber}
                </p>

                <h1 className="mt-3 text-4xl font-black leading-tight text-[#155E75] sm:text-5xl lg:text-6xl">
                  {title}
                </h1>

                <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-[#597173] sm:text-lg">
                  {summary}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <article className="rounded-[22px] border border-[#D3E18E] bg-white p-4 text-center shadow-sm">
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-[#7A904E]">
                      Activities
                    </p>
                    <p
                      className="mt-2 text-3xl font-black"
                      style={{ color: accentDark }}
                    >
                      {activities.length}
                    </p>
                  </article>

                  <article className="rounded-[22px] border border-[#D3E18E] bg-white p-4 text-center shadow-sm">
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-[#7A904E]">
                      Questions
                    </p>
                    <p className="mt-2 text-3xl font-black text-[#E98312]">
                      {totalQuestions}
                    </p>
                  </article>

                  <article className="rounded-[22px] border border-[#D3E18E] bg-white p-4 text-center shadow-sm">
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-[#7A904E]">
                      Available
                    </p>
                    <p className="mt-2 text-3xl font-black text-[#12B886]">
                      8/8
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section
            id={`${reviewId}-activity-panel`}
            className="mt-9 scroll-mt-32"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p
                  className="font-black uppercase tracking-[0.18em]"
                  style={{ color: accentDark }}
                >
                  {selectedActivity
                    ? `Activity ${selectedActivity.number}`
                    : `Review ${reviewNumber} route`}
                </p>

                <h2 className="mt-2 text-3xl font-black text-[#155E75] sm:text-4xl">
                  {selectedActivity
                    ? selectedActivity.title
                    : "Choose an Activity"}
                </h2>

                <p className="mt-3 max-w-3xl font-semibold leading-7 text-[#647A7C]">
                  {selectedActivity
                    ? "Review the activity information below, then press Start Activity."
                    : "Select an activity from the two-row menu above."}
                </p>
              </div>

              <div className="rounded-full border border-[#CBDD7C] bg-white px-4 py-2 text-sm font-black text-[#66804A] shadow-sm">
                {selectedActivity
                  ? selectedActivity.content
                  : `${activities.length}/${activities.length} activities ready`}
              </div>
            </div>

            {selectedActivity ? (
              <div className="mx-auto mt-7 max-w-3xl">
                <article
                  className="relative overflow-hidden rounded-[30px] border-2 bg-white p-6 shadow-[0_12px_28px_rgba(92,111,75,0.14)] sm:p-8"
                  style={{ borderColor: `${accent}88` }}
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full"
                    style={{ backgroundColor: `${accent}18` }}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-sm"
                        style={{ backgroundColor: `${accent}1F` }}
                      >
                        {selectedActivity.icon}
                      </div>

                      <span
                        className="rounded-full px-3 py-1 text-xs font-black"
                        style={{
                          backgroundColor: `${accent}20`,
                          color: accentDark,
                        }}
                      >
                        {selectedActivity.reward}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                      <p
                        className="text-sm font-black uppercase tracking-[0.15em]"
                        style={{ color: accentDark }}
                      >
                        Activity {selectedActivity.number}
                      </p>

                      <span className="rounded-full bg-[#EEF4CF] px-3 py-1 text-xs font-bold text-[#648043]">
                        {selectedActivity.level}
                      </span>
                    </div>

                    <h3 className="mt-3 text-3xl font-black text-[#155E75]">
                      {selectedActivity.title}
                    </h3>

                    <p className="mt-4 font-semibold leading-8 text-[#647A7C]">
                      {selectedActivity.description}
                    </p>

                    <div className="mt-5 inline-flex rounded-full border border-[#D8E4A0] bg-[#F8FBEA] px-4 py-2 text-sm font-black text-[#66804A] shadow-sm">
                      {selectedActivity.content}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveActivityId(selectedActivity.id)
                      }
                      className="mx-auto mt-6 block w-[220px] rounded-2xl px-5 py-3.5 text-center font-black text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                      style={{ backgroundColor: accent }}
                    >
                      Start Activity
                    </button>
                  </div>
                </article>
              </div>
            ) : (
              <div className="mt-7 rounded-[30px] border-2 border-dashed border-[#CBDD7C] bg-white p-8 text-center shadow-sm">
                <div className="text-5xl">📚</div>
                <h3 className="mt-4 text-2xl font-black text-[#155E75]">
                  Select an activity from the top menu
                </h3>
                <p className="mx-auto mt-3 max-w-2xl font-semibold leading-7 text-[#647A7C]">
                  Only the selected Review {reviewNumber} activity card will
                  appear here.
                </p>
              </div>
            )}
          </section>

          <footer className="py-8 text-center text-sm font-semibold text-[#7D918E]">
            Review {reviewNumber} · {units} · Grade 9 English · Semester I
          </footer>
        </div>
      </section>
    </main>
  );
}
