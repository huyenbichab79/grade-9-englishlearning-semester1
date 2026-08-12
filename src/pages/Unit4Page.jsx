import { useState } from "react";

import Vocabulary4Page from "./Vocabulary4Page";
import Phrases4Page from "./Phrases4Page";
import Grammar4Page from "./Grammar4Page";
import Reading4Page from "./Reading4Page";
import Writing4Page from "./Writing4Page";
import UnitChallenge4Page from "./UnitChallenge4Page";
import { saveActivityProgress } from "../services/progressService";

function Unit4Page({
  studentInformation,
  onBack,
}) {
  const [activeActivity, setActiveActivity] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  const activities = [
    {
      id: "vocabulary",
      tabId: "vocabulary",
      number: "01",
      icon: "🏛️",
      title: "Heritage Vocabulary",
      description:
        "Learn words about ancestors, dynasties, historical structures, and cultural heritage.",
      level: "Basic → Advanced",
      activityType: "vocabulary",
      Component: Vocabulary4Page,
      reward: "+40 XP",
    },
    {
      id: "phrases",
      tabId: "phrases",
      number: "02",
      icon: "📜",
      title: "Traditions & Heritage Phrases",
      description:
        "Practise expressions such as pass down, keep alive, and take pride in.",
      level: "Basic → Advanced",
      activityType: "phrasal-verbs",
      Component: Phrases4Page,
      reward: "+40 XP",
    },
    {
      id: "grammar",
      tabId: "grammar",
      number: "03",
      icon: "⏳",
      title: "Past Continuous & Wishes",
      description:
        "Describe actions in progress in the past and wishes about the present.",
      level: "Basic → Advanced",
      activityType: "grammar",
      Component: Grammar4Page,
      reward: "+40 XP",
    },
    {
      id: "reading",
      tabId: "reading",
      number: "04",
      icon: "📖",
      title: "Reading",
      description:
        "Read and listen to a text about students preserving local traditions and memories.",
      level: "Basic → Advanced",
      activityType: "reading",
      Component: Reading4Page,
      reward: "+40 XP",
    },
    {
      id: "writing",
      tabId: "writing",
      number: "05",
      icon: "🧱",
      title: "Writing Builder",
      description:
        "Build past continuous sentences, wishes, paragraphs, and short letters.",
      level: "Basic → Advanced",
      activityType: "writing",
      Component: Writing4Page,
      reward: "+40 XP",
    },
    {
      id: "unit-challenge",
      tabId: "challenge",
      number: "06",
      icon: "🏆",
      title: "Unit Challenge",
      description:
        "Review vocabulary, phrases, grammar, reading, and writing from Unit 4.",
      level: "Mixed levels",
      activityType: "challenge",
      Component: UnitChallenge4Page,
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
      icon: "🏛️",
      label: "Vocabulary",
    },
    {
      id: "phrases",
      icon: "📜",
      label: "Phrases",
    },
    {
      id: "grammar",
      icon: "⏳",
      label: "Grammar",
    },
    {
      id: "reading",
      icon: "📖",
      label: "Reading",
    },
    {
      id: "writing",
      icon: "🧱",
      label: "Writing Builder",
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
        unitId: "unit4",
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
          ? "unit4-dashboard"
          : "unit4-activity-panel"
      );
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <main className="min-h-screen bg-[#FBF8F4] text-[#42352F]">
      <header className="sticky top-0 z-30 border-b border-[#9A7763] bg-[#6B4A3A] px-4 py-4 shadow-[0_10px_28px_rgba(66,46,37,0.24)] sm:px-6">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-3xl shadow-sm">
                🏛️
              </div>

              <div className="leading-tight">
                <p className="whitespace-nowrap text-xl font-black uppercase tracking-[0.12em] text-white sm:text-2xl">
                  ENGLISH 9
                </p>

                <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="whitespace-nowrap text-xl font-black uppercase tracking-[0.1em] text-white sm:text-2xl">
                    UNIT 4
                  </span>

                  <span className="text-xl font-black uppercase tracking-[0.07em] text-[#EFDCCB] sm:text-2xl">
                    REMEMBERING THE PAST
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
                    ? "bg-[#9A765E] text-[#FFFFFF] shadow-md"
                    : "bg-white/5 text-white/90 hover:bg-white/15 hover:text-white"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section id="unit4-dashboard" className="scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <section className="relative overflow-hidden rounded-[36px] border border-[#D8C8BC] bg-[#F1E7DE] p-6 shadow-[0_20px_46px_rgba(91,69,57,0.12)] sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#DEC9B9]/55" />
            <div className="pointer-events-none absolute right-8 top-24 select-none text-[160px] font-black leading-none text-[#6B4A3A]/8">4</div>

            <div className="relative overflow-hidden rounded-[28px] border border-[#9D7861] bg-[#795744] p-5 shadow-[0_16px_36px_rgba(72,51,42,0.24)]">
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
                  className="inline-flex w-fit items-center gap-3 rounded-2xl border-2 border-[#9A765E] bg-white px-6 py-3 text-base font-black text-[#6B4A3A] shadow-[0_9px_22px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:bg-[#F8EEE6] hover:shadow-[0_13px_28px_rgba(0,0,0,0.3)]"
                >
                  <span className="text-2xl">←</span>
                  Back to Home
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-black uppercase tracking-[0.2em] text-[#84614E]">English 9 · Unit 4</p>
                <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-[#4D382F] sm:text-5xl lg:text-6xl">Remembering the Past</h1>
                <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-[#70615A] sm:text-lg">Explore historical places, family memories, and traditions passed down through generations.</p>
              </div>

              <div className="min-w-[250px] rounded-[24px] border border-[#D8C8BC] bg-white/90 p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#82736B]">Unit status</p>
                <p className="mt-2 text-xl font-black text-[#4D382F]">All Activities Ready</p>
                <div className="mt-3 inline-flex rounded-full bg-[#EDE0D5] px-3 py-1.5 text-sm font-bold text-[#84614E]">6 activities connected</div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-[22px] border border-[#D8C8BC] bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#82736B]">Activities</p>
                <p className="mt-2 text-3xl font-black text-[#84614E]">6</p>
              </article>
              <article className="rounded-[22px] border border-[#D8C8BC] bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#82736B]">Available</p>
                <p className="mt-2 text-3xl font-black text-[#84614E]">6/6</p>
              </article>
              <article className="rounded-[22px] border border-[#D8C8BC] bg-[#F8EEE6] p-4 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#82736B]">Semester</p>
                <p className="mt-2 text-3xl font-black text-[#6B4A3A]">I</p>
              </article>
              <article className="rounded-[22px] border border-[#D8C8BC] bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#82736B]">Status</p>
                <p className="mt-2 text-lg font-black text-[#84614E]">Ready</p>
              </article>
            </div>
          </section>

          <section id="unit4-activity-panel" className="mt-9 scroll-mt-32">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-black uppercase tracking-[0.18em] text-[#84614E]">
                  {selectedActivityCard ? `Activity ${selectedActivityCard.number}` : "Learning route"}
                </p>
                <h2 className="mt-2 text-3xl font-black text-[#4D382F] sm:text-4xl">
                  {selectedActivityCard ? selectedActivityCard.title : "Choose an Activity"}
                </h2>
                <p className="mt-3 max-w-3xl font-medium leading-7 text-[#70615A]">
                  {selectedActivityCard ? "Review the activity information below, then press Start Activity." : "Select an activity from the two-row menu above."}
                </p>
              </div>
              <div className="rounded-full border border-[#D8C8BC] bg-white px-4 py-2 text-sm font-black text-[#84614E] shadow-sm">
                {selectedActivityCard ? selectedActivityCard.level : "6/6 activities ready"}
              </div>
            </div>

            {selectedActivityCard ? (
              <div className="mx-auto mt-7 max-w-3xl">
                <article className="relative overflow-hidden rounded-[30px] border border-[#D8C8BC] bg-white p-6 shadow-[0_12px_28px_rgba(91,69,57,0.12)] sm:p-8">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#EDE0D5]" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EDE0D5] text-3xl shadow-sm">{selectedActivityCard.icon}</div>
                      <span className="rounded-full bg-[#F8EEE6] px-3 py-1 text-xs font-black text-[#6B4A3A]">{selectedActivityCard.reward}</span>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-black uppercase tracking-[0.15em] text-[#84614E]">Activity {selectedActivityCard.number}</p>
                      <span className="rounded-full bg-[#EDE0D5] px-3 py-1 text-xs font-bold text-[#84614E]">{selectedActivityCard.level}</span>
                    </div>
                    <h3 className="mt-3 text-3xl font-black text-[#4D382F]">{selectedActivityCard.title}</h3>
                    <p className="mt-4 font-medium leading-8 text-[#70615A]">{selectedActivityCard.description}</p>
                    <button
                      type="button"
                      onClick={() => setActiveActivity(selectedActivityCard.id)}
                      className="mx-auto mt-6 block w-[220px] rounded-xl bg-[#9A765E] px-5 py-3.5 text-center font-black text-[#FFFFFF] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Start Activity
                    </button>
                  </div>
                </article>
              </div>
            ) : (
              <div className="mt-7 rounded-[30px] border border-dashed border-[#D8C8BC] bg-white p-8 text-center shadow-sm">
                <div className="text-5xl">🏛️</div>
                <h3 className="mt-4 text-2xl font-black text-[#4D382F]">Select an activity from the top menu</h3>
                <p className="mx-auto mt-3 max-w-2xl font-medium leading-7 text-[#70615A]">Only the selected Unit 4 activity card will appear here.</p>
              </div>
            )}
          </section>

          <footer className="py-8 text-center text-sm font-medium text-[#82736B]">Unit 4 · Remembering the Past · Grade 9 English · Semester I</footer>
        </div>
      </section>
    </main>
  );
}

export default Unit4Page;
