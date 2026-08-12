import { useState } from "react";

import Vocabulary5Page from "./Vocabulary5Page";
import Phrases5Page from "./Phrases5Page";
import Grammar5Page from "./Grammar5Page";
import Reading5Page from "./Reading5Page";
import { saveActivityProgress } from "../services/progressService";

function Unit5Page({
  studentInformation,
  onBack,
}) {
  const [activeActivity, setActiveActivity] =
    useState(null);

  const saveProgress = async ({
    activityId,
    activityType,
    activityName,
    correctAnswers,
    totalQuestions,
  }) => {
    try {
      const result =
        await saveActivityProgress({
          unitId: "unit5",
          activityId,
          activityType,
          correctAnswers,
          totalQuestions,
        });

      window.alert(
        `Your ${activityName} score has been saved: ${result.scorePercent}%`
      );
    } catch (error) {
      console.error(
        `Unable to save ${activityName} progress:`,
        error
      );

      window.alert(
        error.message ||
          `Unable to save your ${activityName} score.`
      );
    }
  };

  const handleVocabularyComplete = ({
    correctAnswers,
    totalQuestions,
  }) =>
    saveProgress({
      activityId: "vocabulary",
      activityType: "vocabulary",
      activityName:
        "Experience Vocabulary",
      correctAnswers,
      totalQuestions,
    });

  const handlePhrasesComplete = ({
    correctAnswers,
    totalQuestions,
  }) =>
    saveProgress({
      activityId: "phrases",
      activityType: "phrasal-verbs",
      activityName:
        "Experience Phrases",
      correctAnswers,
      totalQuestions,
    });

  const handleGrammarComplete = ({
    correctAnswers,
    totalQuestions,
  }) =>
    saveProgress({
      activityId: "grammar",
      activityType: "grammar",
      activityName:
        "Present Perfect",
      correctAnswers,
      totalQuestions,
    });

  const handleReadingComplete = ({
    correctAnswers,
    totalQuestions,
  }) =>
    saveProgress({
      activityId: "reading",
      activityType: "reading",
      activityName: "Reading",
      correctAnswers,
      totalQuestions,
    });

  const activities = [
    {
      id: "vocabulary",
      icon: "🧭",
      title: "Experience Vocabulary",
      description:
        "Learn words about trips, outdoor activities, emotions, challenges, and personal growth.",
      level: "Basic → Advanced",
      available: true,
      background: "bg-[#F5F4F1]",
      accent: "text-[#9B7824]",
      buttonClass:
        "bg-[#9B7824] text-white hover:bg-[#81641E]",
    },
    {
      id: "phrases",
      icon: "🎒",
      title: "Experience Phrases",
      description:
        "Practise expressions such as go blank, by chance, go snorkeling, and put up tents.",
      level: "Basic → Advanced",
      available: true,
      background: "bg-[#F1F0EC]",
      accent: "text-[#9A7724]",
      buttonClass:
        "bg-[#9A7724] text-white hover:bg-[#82651F]",
    },
    {
      id: "grammar",
      icon: "✅",
      title: "Present Perfect",
      description:
        "Use have or has with past participles, since, for, ever, never, already, and yet.",
      level: "Basic → Advanced",
      available: true,
      background: "bg-[#EFEDE8]",
      accent: "text-[#8F6F22]",
      buttonClass:
        "bg-[#A98328] text-white hover:bg-[#8A6B20]",
    },
    {
      id: "reading",
      icon: "📖",
      title: "Reading",
      description:
        "Read and listen to a story about overcoming fear through preparation, support, and experience.",
      level: "Basic → Advanced",
      available: true,
      background: "bg-[#F7F6F5]",
      accent: "text-[#C1A156]",
      buttonClass:
        "bg-[#CAB071] text-white hover:bg-[#BF9E51]",
    },
    {
      id: "writing",
      icon: "🧱",
      title: "Writing Builder",
      description:
        "Build present perfect sentences and organise paragraphs or letters about experiences.",
      level: "Guided practice",
      available: false,
      background: "bg-[#FFF0EC]",
      accent: "text-[#C1A257]",
      buttonClass: "",
    },
    {
      id: "unit-challenge",
      icon: "🏆",
      title: "Unit Challenge",
      description:
        "Review vocabulary, phrases, grammar, reading, and writing from Unit 5.",
      level: "Mixed levels",
      available: false,
      background: "bg-[#F2F1ED]",
      accent: "text-[#9A7724]",
      buttonClass: "",
    },
  ];

  if (activeActivity === "vocabulary") {
    return (
      <Vocabulary5Page
        onBack={() =>
          setActiveActivity(null)
        }
        onComplete={
          handleVocabularyComplete
        }
      />
    );
  }

  if (activeActivity === "phrases") {
    return (
      <Phrases5Page
        onBack={() =>
          setActiveActivity(null)
        }
        onComplete={
          handlePhrasesComplete
        }
      />
    );
  }

  if (activeActivity === "grammar") {
    return (
      <Grammar5Page
        onBack={() =>
          setActiveActivity(null)
        }
        onComplete={
          handleGrammarComplete
        }
      />
    );
  }

  if (activeActivity === "reading") {
    return (
      <Reading5Page
        onBack={() =>
          setActiveActivity(null)
        }
        onComplete={
          handleReadingComplete
        }
      />
    );
  }

  return (
    <main className="min-h-screen bg-[#FCFCFC] px-4 py-6 text-[#685018] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-6xl">
        <header className="relative overflow-hidden rounded-[32px] border border-white bg-gradient-to-r from-[#F5F4F1] via-[#F7F7F6] to-[#EFEDE8] p-6 shadow-lg sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#CFB77D]/30" />

          <div className="pointer-events-none absolute bottom-8 right-44 h-20 w-20 rounded-full bg-[#EDEBE6]" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <button
                type="button"
                onClick={onBack}
                className="mb-4 rounded-xl bg-white px-4 py-2 font-bold text-[#9B7824] shadow-sm transition hover:-translate-y-0.5"
              >
                ← Back to Home
              </button>

              <p className="font-black uppercase tracking-[0.2em] text-[#9A7724]">
                English 9
              </p>

              <h1 className="mt-2 text-3xl font-black sm:text-5xl">
                Unit 5
              </h1>

              <h2 className="mt-2 text-2xl font-extrabold text-[#9B7824] sm:text-3xl">
                Our Experience
              </h2>

              <p className="mt-3 max-w-2xl text-base font-medium leading-7 text-[#C1952D]">
                Explore memorable trips,
                personal challenges, exciting
                activities, and lessons learned
                through experience.
              </p>
            </div>

            <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
              <p className="text-sm font-bold text-[#BD9C4D]">
                Student
              </p>

              <p className="mt-1 text-xl font-black text-[#685018]">
                {studentInformation?.fullName ||
                  "Student"}
              </p>

              <p className="mt-1 font-bold text-[#9A7724]">
                Class:{" "}
                {studentInformation?.studentClass ||
                  "Grade 9"}
              </p>
            </div>
          </div>
        </header>

        <section className="mt-8">
          <div className="mb-5">
            <p className="font-black uppercase tracking-[0.18em] text-[#D0B880]">
              Learning journey
            </p>

            <h3 className="mt-2 text-3xl font-black">
              Choose an activity
            </h3>

            <p className="mt-2 text-[#C1952D]">
              Turn every experience into a new
              English skill.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {activities.map(
              (activity, index) => (
                <article
                  key={activity.id}
                  className={`${activity.background} rounded-[28px] border border-white p-6 shadow-md transition ${
                    activity.available
                      ? "hover:-translate-y-1 hover:shadow-xl"
                      : "opacity-80"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                      {activity.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p
                          className={`text-sm font-black ${activity.accent}`}
                        >
                          Activity {index + 1}
                        </p>

                        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#C1952D]">
                          {activity.level}
                        </span>
                      </div>

                      <h4 className="mt-1 text-xl font-black text-[#685018]">
                        {activity.title}
                      </h4>

                      <p className="mt-2 leading-6 text-[#C1952D]">
                        {activity.description}
                      </p>

                      <button
                        type="button"
                        disabled={
                          !activity.available
                        }
                        onClick={() => {
                          if (
                            activity.available
                          ) {
                            setActiveActivity(
                              activity.id
                            );
                          }
                        }}
                        className={`mt-5 rounded-xl px-5 py-3 font-bold shadow-sm transition ${
                          activity.available
                            ? activity.buttonClass
                            : "cursor-not-allowed bg-white text-[#D1BA82]"
                        }`}
                      >
                        {activity.available
                          ? "Start"
                          : "Coming Soon"}
                      </button>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        <section className="mt-8 rounded-[28px] bg-white p-6 shadow-md">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F6F5] text-3xl">
              📚
            </div>

            <div>
              <h3 className="text-xl font-black text-[#685018]">
                Unit 5 progress
              </h3>

              <p className="mt-1 text-[#C1952D]">
                Vocabulary, Phrases, Present
                Perfect, and Reading are now
                available.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Unit5Page;