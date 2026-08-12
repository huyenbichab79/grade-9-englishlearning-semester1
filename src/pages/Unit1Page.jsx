import { useState } from "react";

import Vocabulary1Page from "./Vocabulary1Page";
import PhrasalVerbs1Page from "./PhrasalVerbs1Page";
import Grammar1Page from "./Grammar1Page";
import Reading1Page from "./Reading1Page";
import UnitChallenge1Page from "./UnitChallenge1Page";
import { saveActivityProgress } from "../services/progressService";

function Unit1Page({
  studentInformation,
  onBack,
}) {
  const [activeActivity, setActiveActivity] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  const activities = [
    {
      id: "vocabulary-match",
      tabId: "vocabulary",
      number: "01",
      icon: "🧩",
      title: "Vocabulary Match",
      description:
        "Match local places, products, and community helpers.",
      level: "Interactive practice",
      activityType: "vocabulary",
      Component: Vocabulary1Page,
      reward: "+40 XP",
    },
    {
      id: "phrasal-verbs",
      tabId: "phrases",
      number: "02",
      icon: "🔗",
      title: "Phrasal Verbs",
      description:
        "Practise useful phrasal verbs about local communities.",
      level: "Interactive practice",
      activityType: "phrasal-verbs",
      Component: PhrasalVerbs1Page,
      reward: "+40 XP",
    },
    {
      id: "grammar",
      tabId: "grammar",
      number: "03",
      icon: "✍️",
      title: "Grammar",
      description:
        "Learn question words followed by to-infinitives.",
      level: "Interactive practice",
      activityType: "grammar",
      Component: Grammar1Page,
      reward: "+40 XP",
    },
    {
      id: "reading",
      tabId: "reading",
      number: "04",
      icon: "📖",
      title: "Reading",
      description:
        "Listen, read, and complete three short tasks.",
      level: "Interactive practice",
      activityType: "reading",
      Component: Reading1Page,
      reward: "+40 XP",
    },
    {
      id: "unit-challenge",
      tabId: "challenge",
      number: "05",
      icon: "🏆",
      title: "Unit Challenge",
      description:
        "Review vocabulary, phrasal verbs, grammar, and reading.",
      level: "Mixed levels",
      activityType: "unit-challenge",
      Component: UnitChallenge1Page,
      reward: "+40 XP",
    }
  ];

  const tabs = [
    {
      id: "dashboard",
      icon: "▦",
      label: "Dashboard",
    },
    {
      id: "vocabulary",
      icon: "🧩",
      label: "Vocabulary Match",
    },
    {
      id: "phrases",
      icon: "🔗",
      label: "Phrasal Verbs",
    },
    {
      id: "grammar",
      icon: "✍️",
      label: "Grammar",
    },
    {
      id: "reading",
      icon: "📖",
      label: "Reading",
    },
    {
      id: "challenge",
      icon: "🏆",
      label: "Unit Challenge",
    }
  ];

  const activeActivityConfig = activities.find(
    (activity) => activity.id === activeActivity
  );

  const selectedActivityCard =
    activeTab === "dashboard"
      ? null
      : activities.find((activity) => activity.tabId === activeTab);

  const saveProgress = async ({
    activityId,
    activityType,
    activityName,
    correctAnswers,
    totalQuestions,
  }) => {
    try {
      const result = await saveActivityProgress({
        unitId: "unit1",
        activityId,
        activityType,
        correctAnswers,
        totalQuestions,
      });

      window.alert(
        `Your ${activityName} score has been saved: ${result.scorePercent}%`
      );
    } catch (error) {
      console.error(`Unable to save ${activityName} progress:`, error);
      window.alert(
        error?.message || `Unable to save your ${activityName} score.`
      );
      throw error;
    }
  };

  if (activeActivityConfig?.Component) {
    const ActivityComponent = activeActivityConfig.Component;

    return (
      <ActivityComponent
        onBack={() => setActiveActivity(null)}
        onComplete={({ correctAnswers, totalQuestions }) =>
          saveProgress({
            activityId: activeActivityConfig.id,
            activityType: activeActivityConfig.activityType,
            activityName: activeActivityConfig.title,
            correctAnswers,
            totalQuestions,
          })
        }
      />
    );
  }

  const selectTopTab = (tab) => {
    setActiveTab(tab.id);
    setActiveActivity(null);

    window.requestAnimationFrame(() => {
      const target = document.getElementById(
        tab.id === "dashboard"
          ? "unit1-dashboard"
          : "unit1-activity-panel"
      );
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <main className="min-h-screen bg-[#FFF8F2] text-[#4D3429]">
      <header className="sticky top-0 z-30 border-b border-[#B46C42] bg-[#8A4F2A] px-4 py-4 shadow-[0_10px_28px_rgba(92,50,28,0.24)] sm:px-6">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-3xl shadow-sm">
                🏘️
              </div>

              <div className="leading-tight">
                <p className="whitespace-nowrap text-xl font-black uppercase tracking-[0.12em] text-white sm:text-2xl">
                  ENGLISH 9
                </p>

                <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="whitespace-nowrap text-xl font-black uppercase tracking-[0.1em] text-white sm:text-2xl">
                    UNIT 1
                  </span>

                  <span className="text-xl font-black uppercase tracking-[0.07em] text-[#FFDDBF] sm:text-2xl">
                    LOCAL COMMUNITY
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-white/90">
              Menu → Card → Start Activity
            </div>
          </div>

          <nav className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => selectTopTab(tab)}
                className={`rounded-xl px-3 py-3 text-sm font-black transition sm:text-base ${
                  activeTab === tab.id
                    ? "bg-[#C97A3D] text-[#FFFFFF] shadow-md"
                    : "bg-white/5 text-white/90 hover:bg-white/15 hover:text-white"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section id="unit1-dashboard" className="scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <section className="relative overflow-hidden rounded-[36px] border border-[#E4C4B0] bg-[#FCEADE] p-6 shadow-[0_20px_46px_rgba(120,74,47,0.12)] sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#F2C9AD]/55" />
            <div className="pointer-events-none absolute right-8 top-24 select-none text-[160px] font-black leading-none text-[#8A4F2A]/8">1</div>

            <div className="relative overflow-hidden rounded-[28px] border border-[#C17C4F] bg-[#9A5A31] p-5 shadow-[0_16px_36px_rgba(95,52,31,0.24)]">
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/35 bg-white/15 text-3xl shadow-md">👩‍🎓</div>
                  <div>
                    <p className="text-sm font-black text-white/85">Current student</p>
                    <p className="mt-1 text-2xl font-black tracking-wide text-white sm:text-3xl">
                      {studentInformation?.fullName || "Student"}
                    </p>
                    <div className="mt-2 inline-flex rounded-full border border-white/35 bg-white/15 px-3 py-1 text-sm font-black text-white">
                      Class: {studentInformation?.studentClass || "Grade 9"}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onBack}
                  className="inline-flex w-fit items-center gap-3 rounded-2xl border-2 border-[#C97A3D] bg-white px-6 py-3 text-base font-black text-[#8A4F2A] shadow-[0_9px_22px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:bg-[#FFF0E5] hover:shadow-[0_13px_28px_rgba(0,0,0,0.3)]"
                >
                  <span className="text-2xl">←</span>
                  Back to Home
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-black uppercase tracking-[0.2em] text-[#A66035]">English 9 · Unit 1</p>
                <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-[#5B3828] sm:text-5xl lg:text-6xl">Local Community</h1>
                <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-[#765D51] sm:text-lg">Explore places, people, products, and activities in your local community.</p>
              </div>

              <div className="min-w-[250px] rounded-[24px] border border-[#E4C4B0] bg-white/90 p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#88746A]">Unit status</p>
                <p className="mt-2 text-xl font-black text-[#5B3828]">All Activities Ready</p>
                <div className="mt-3 inline-flex rounded-full bg-[#F7E0D0] px-3 py-1.5 text-sm font-bold text-[#A66035]">5 activities connected</div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-[22px] border border-[#E4C4B0] bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#88746A]">Activities</p>
                <p className="mt-2 text-3xl font-black text-[#A66035]">5</p>
              </article>
              <article className="rounded-[22px] border border-[#E4C4B0] bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#88746A]">Available</p>
                <p className="mt-2 text-3xl font-black text-[#A66035]">5/5</p>
              </article>
              <article className="rounded-[22px] border border-[#E4C4B0] bg-[#FFF0E5] p-4 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#88746A]">Semester</p>
                <p className="mt-2 text-3xl font-black text-[#8A4F2A]">I</p>
              </article>
              <article className="rounded-[22px] border border-[#E4C4B0] bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#88746A]">Status</p>
                <p className="mt-2 text-lg font-black text-[#A66035]">Ready</p>
              </article>
            </div>
          </section>

          <section id="unit1-activity-panel" className="mt-9 scroll-mt-32">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-black uppercase tracking-[0.18em] text-[#A66035]">
                  {selectedActivityCard ? `Activity ${selectedActivityCard.number}` : "Learning route"}
                </p>
                <h2 className="mt-2 text-3xl font-black text-[#5B3828] sm:text-4xl">
                  {selectedActivityCard ? selectedActivityCard.title : "Choose an Activity"}
                </h2>
                <p className="mt-3 max-w-3xl font-medium leading-7 text-[#765D51]">
                  {selectedActivityCard ? "Review the activity information below, then press Start Activity." : "Select an activity from the two-row menu above."}
                </p>
              </div>
              <div className="rounded-full border border-[#E4C4B0] bg-white px-4 py-2 text-sm font-black text-[#A66035] shadow-sm">
                {selectedActivityCard ? selectedActivityCard.level : "5/5 activities ready"}
              </div>
            </div>

            {selectedActivityCard ? (
              <div className="mx-auto mt-7 max-w-3xl">
                <article className="relative overflow-hidden rounded-[30px] border border-[#E4C4B0] bg-white p-6 shadow-[0_12px_28px_rgba(120,74,47,0.12)] sm:p-8">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F7E0D0]" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7E0D0] text-3xl shadow-sm">{selectedActivityCard.icon}</div>
                      <span className="rounded-full bg-[#FFF0E5] px-3 py-1 text-xs font-black text-[#8A4F2A]">{selectedActivityCard.reward}</span>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-black uppercase tracking-[0.15em] text-[#A66035]">Activity {selectedActivityCard.number}</p>
                      <span className="rounded-full bg-[#F7E0D0] px-3 py-1 text-xs font-bold text-[#A66035]">{selectedActivityCard.level}</span>
                    </div>
                    <h3 className="mt-3 text-3xl font-black text-[#5B3828]">{selectedActivityCard.title}</h3>
                    <p className="mt-4 font-medium leading-8 text-[#765D51]">{selectedActivityCard.description}</p>
                    <button
                      type="button"
                      onClick={() => setActiveActivity(selectedActivityCard.id)}
                      className="mx-auto mt-6 block w-[220px] rounded-xl bg-[#C97A3D] px-5 py-3.5 text-center font-black text-[#FFFFFF] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Start Activity
                    </button>
                  </div>
                </article>
              </div>
            ) : (
              <div className="mt-7 rounded-[30px] border border-dashed border-[#E4C4B0] bg-white p-8 text-center shadow-sm">
                <div className="text-5xl">🏘️</div>
                <h3 className="mt-4 text-2xl font-black text-[#5B3828]">Select an activity from the top menu</h3>
                <p className="mx-auto mt-3 max-w-2xl font-medium leading-7 text-[#765D51]">Only the selected Unit 1 activity card will appear here.</p>
              </div>
            )}
          </section>

          <footer className="py-8 text-center text-sm font-medium text-[#88746A]">Unit 1 · Local Community · Grade 9 English · Semester I</footer>
        </div>
      </section>
    </main>
  );
}

export default Unit1Page;
