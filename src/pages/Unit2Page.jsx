import { useState } from "react";

import Vocabulary2Page from "./Vocabulary2Page";
import PhrasalVerbs2Page from "./PhrasalVerbs2Page";
import Grammar2Page from "./Grammar2Page";
import Reading2Page from "./Reading2Page";
import Writing2Page from "./Writing2Page";
import UnitChallenge2Page from "./UnitChallenge2Page";
import { saveActivityProgress } from "../services/progressService";

function Unit2Page({
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
      icon: "🏙️",
      title: "City Vocabulary",
      description:
        "Learn words about transport, buildings, public amenities, and common city problems.",
      level: "Basic → Advanced",
      activityType: "vocabulary",
      Component: Vocabulary2Page,
      reward: "+40 XP",
    },
    {
      id: "phrasal-verbs",
      tabId: "phrases",
      number: "02",
      icon: "🔗",
      title: "City Phrases",
      description:
        "Practise phrasal verbs and useful expressions in everyday city situations.",
      level: "Basic → Advanced",
      activityType: "phrasal-verbs",
      Component: PhrasalVerbs2Page,
      reward: "+40 XP",
    },
    {
      id: "grammar",
      tabId: "grammar",
      number: "03",
      icon: "✍️",
      title: "Double Comparatives",
      description:
        "Practise structures showing how two things change together.",
      level: "Basic → Advanced",
      activityType: "grammar",
      Component: Grammar2Page,
      reward: "+40 XP",
    },
    {
      id: "reading",
      tabId: "reading",
      number: "04",
      icon: "📖",
      title: "Reading",
      description:
        "Read about city problems, urban improvements, and more liveable communities.",
      level: "Basic → Advanced",
      activityType: "reading",
      Component: Reading2Page,
      reward: "+40 XP",
    },
    {
      id: "writing",
      tabId: "writing",
      number: "05",
      icon: "🧱",
      title: "Writing Builder",
      description:
        "Build sentences and organise ideas into a clear paragraph about city life.",
      level: "Guided practice",
      activityType: "writing",
      Component: Writing2Page,
      reward: "+40 XP",
    },
    {
      id: "unit-challenge",
      tabId: "challenge",
      number: "06",
      icon: "🏆",
      title: "Unit Challenge",
      description:
        "Review vocabulary, phrases, grammar, reading, and writing from Unit 2.",
      level: "Mixed levels",
      activityType: "challenge",
      Component: UnitChallenge2Page,
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
      icon: "🏙️",
      label: "City Vocabulary",
    },
    {
      id: "phrases",
      icon: "🔗",
      label: "City Phrases",
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
        unitId: "unit2",
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
          ? "unit2-dashboard"
          : "unit2-activity-panel"
      );
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <main className="min-h-screen bg-[#F6F8FC] text-[#323B4C]">
      <header className="sticky top-0 z-30 border-b border-[#70809F] bg-[#46546F] px-4 py-4 shadow-[0_10px_28px_rgba(50,61,82,0.24)] sm:px-6">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-3xl shadow-sm">
                🏙️
              </div>

              <div className="leading-tight">
                <p className="whitespace-nowrap text-xl font-black uppercase tracking-[0.12em] text-white sm:text-2xl">
                  ENGLISH 9
                </p>

                <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="whitespace-nowrap text-xl font-black uppercase tracking-[0.1em] text-white sm:text-2xl">
                    UNIT 2
                  </span>

                  <span className="text-xl font-black uppercase tracking-[0.07em] text-[#DCE5F6] sm:text-2xl">
                    CITY LIFE
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
                    ? "bg-[#66789D] text-[#FFFFFF] shadow-md"
                    : "bg-white/5 text-white/90 hover:bg-white/15 hover:text-white"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section id="unit2-dashboard" className="scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <section className="relative overflow-hidden rounded-[36px] border border-[#CBD3E0] bg-[#ECF0F7] p-6 shadow-[0_20px_46px_rgba(72,86,112,0.12)] sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#CCD5E5]/55" />
            <div className="pointer-events-none absolute right-8 top-24 select-none text-[160px] font-black leading-none text-[#46546F]/8">2</div>

            <div className="relative overflow-hidden rounded-[28px] border border-[#7585A2] bg-[#53627E] p-5 shadow-[0_16px_36px_rgba(58,69,91,0.24)]">
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
                  className="inline-flex w-fit items-center gap-3 rounded-2xl border-2 border-[#66789D] bg-white px-6 py-3 text-base font-black text-[#46546F] shadow-[0_9px_22px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:bg-[#EEF2F8] hover:shadow-[0_13px_28px_rgba(0,0,0,0.3)]"
                >
                  <span className="text-2xl">←</span>
                  Back to Home
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-black uppercase tracking-[0.2em] text-[#5F6E8A]">English 9 · Unit 2</p>
                <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-[#354158] sm:text-5xl lg:text-6xl">City Life</h1>
                <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-[#687184] sm:text-lg">Explore transport, public spaces, modern services, and smart ideas that can make cities greener, safer, and more enjoyable.</p>
              </div>

              <div className="min-w-[250px] rounded-[24px] border border-[#CBD3E0] bg-white/90 p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#7B8494]">Unit status</p>
                <p className="mt-2 text-xl font-black text-[#354158]">All Activities Ready</p>
                <div className="mt-3 inline-flex rounded-full bg-[#E4E9F2] px-3 py-1.5 text-sm font-bold text-[#5F6E8A]">6 activities connected</div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-[22px] border border-[#CBD3E0] bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#7B8494]">Activities</p>
                <p className="mt-2 text-3xl font-black text-[#5F6E8A]">6</p>
              </article>
              <article className="rounded-[22px] border border-[#CBD3E0] bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#7B8494]">Available</p>
                <p className="mt-2 text-3xl font-black text-[#5F6E8A]">6/6</p>
              </article>
              <article className="rounded-[22px] border border-[#CBD3E0] bg-[#EEF2F8] p-4 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#7B8494]">Semester</p>
                <p className="mt-2 text-3xl font-black text-[#46546F]">I</p>
              </article>
              <article className="rounded-[22px] border border-[#CBD3E0] bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#7B8494]">Status</p>
                <p className="mt-2 text-lg font-black text-[#5F6E8A]">Ready</p>
              </article>
            </div>
          </section>

          <section id="unit2-activity-panel" className="mt-9 scroll-mt-32">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-black uppercase tracking-[0.18em] text-[#5F6E8A]">
                  {selectedActivityCard ? `Activity ${selectedActivityCard.number}` : "Learning route"}
                </p>
                <h2 className="mt-2 text-3xl font-black text-[#354158] sm:text-4xl">
                  {selectedActivityCard ? selectedActivityCard.title : "Choose an Activity"}
                </h2>
                <p className="mt-3 max-w-3xl font-medium leading-7 text-[#687184]">
                  {selectedActivityCard ? "Review the activity information below, then press Start Activity." : "Select an activity from the two-row menu above."}
                </p>
              </div>
              <div className="rounded-full border border-[#CBD3E0] bg-white px-4 py-2 text-sm font-black text-[#5F6E8A] shadow-sm">
                {selectedActivityCard ? selectedActivityCard.level : "6/6 activities ready"}
              </div>
            </div>

            {selectedActivityCard ? (
              <div className="mx-auto mt-7 max-w-3xl">
                <article className="relative overflow-hidden rounded-[30px] border border-[#CBD3E0] bg-white p-6 shadow-[0_12px_28px_rgba(72,86,112,0.12)] sm:p-8">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E4E9F2]" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E4E9F2] text-3xl shadow-sm">{selectedActivityCard.icon}</div>
                      <span className="rounded-full bg-[#EEF2F8] px-3 py-1 text-xs font-black text-[#46546F]">{selectedActivityCard.reward}</span>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-black uppercase tracking-[0.15em] text-[#5F6E8A]">Activity {selectedActivityCard.number}</p>
                      <span className="rounded-full bg-[#E4E9F2] px-3 py-1 text-xs font-bold text-[#5F6E8A]">{selectedActivityCard.level}</span>
                    </div>
                    <h3 className="mt-3 text-3xl font-black text-[#354158]">{selectedActivityCard.title}</h3>
                    <p className="mt-4 font-medium leading-8 text-[#687184]">{selectedActivityCard.description}</p>
                    <button
                      type="button"
                      onClick={() => setActiveActivity(selectedActivityCard.id)}
                      className="mx-auto mt-6 block w-[220px] rounded-xl bg-[#66789D] px-5 py-3.5 text-center font-black text-[#FFFFFF] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Start Activity
                    </button>
                  </div>
                </article>
              </div>
            ) : (
              <div className="mt-7 rounded-[30px] border border-dashed border-[#CBD3E0] bg-white p-8 text-center shadow-sm">
                <div className="text-5xl">🏙️</div>
                <h3 className="mt-4 text-2xl font-black text-[#354158]">Select an activity from the top menu</h3>
                <p className="mx-auto mt-3 max-w-2xl font-medium leading-7 text-[#687184]">Only the selected Unit 2 activity card will appear here.</p>
              </div>
            )}
          </section>

          <footer className="py-8 text-center text-sm font-medium text-[#7B8494]">Unit 2 · City Life · Grade 9 English · Semester I</footer>
        </div>
      </section>
    </main>
  );
}

export default Unit2Page;
