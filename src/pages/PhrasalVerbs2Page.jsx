import { useState } from "react";

const exerciseGroups = [
  {
    id: "meaning",
    title: "Task 1: Match the meaning",
    description:
      "Choose the correct meaning of each phrase.",
    questions: [
      {
        id: "meaning-1",
        level: "Basic",
        prompt: "get around",
        answer:
          "Travel from one place to another",
        options: [
          "Travel from one place to another",
          "Become ill with a disease",
          "Complete an investigation",
        ],
      },
      {
        id: "meaning-2",
        level: "Basic",
        prompt: "pick up",
        answer:
          "Collect someone from a place",
        options: [
          "Collect someone from a place",
          "Spend time relaxing with friends",
          "Become trapped in traffic",
        ],
      },
      {
        id: "meaning-3",
        level: "Basic",
        prompt: "on time",
        answer:
          "At the planned or correct time",
        options: [
          "Before something happens",
          "At the planned or correct time",
          "Later than expected",
        ],
      },
      {
        id: "meaning-4",
        level: "Intermediate",
        prompt: "packed with",
        answer:
          "Completely full of people or things",
        options: [
          "Completely full of people or things",
          "Very quiet and empty",
          "Easy to travel around",
        ],
      },
    ],
  },
  {
    id: "completion",
    title: "Task 2: Complete the sentences",
    description:
      "Choose the best phrase for each city situation.",
    questions: [
      {
        id: "completion-1",
        level: "Basic",
        prompt:
          "My father will ______ me from school at 4 p.m.",
        answer: "pick up",
        options: [
          "pick up",
          "carry out",
          "come down with",
        ],
      },
      {
        id: "completion-2",
        level: "Intermediate",
        prompt:
          "It is easy to ______ the city by metro.",
        answer: "get around",
        options: [
          "get stuck in",
          "get around",
          "hang out with",
        ],
      },
      {
        id: "completion-3",
        level: "Intermediate",
        prompt:
          "We should book our tickets ______ because the metro is busy.",
        answer: "in advance",
        options: [
          "on time",
          "packed with",
          "in advance",
        ],
      },
      {
        id: "completion-4",
        level: "Intermediate",
        prompt:
          "The local authority will ______ a survey about traffic congestion.",
        answer: "carry out",
        options: [
          "carry out",
          "pick up",
          "get around",
        ],
      },
    ],
  },
  {
    id: "situations",
    title: "Task 3: Choose the best response",
    description:
      "Read each situation and choose the most suitable phrase.",
    questions: [
      {
        id: "situation-1",
        level: "Intermediate",
        prompt:
          "The roads are extremely crowded, and our bus cannot move.",
        answer: "We are getting stuck in traffic.",
        options: [
          "We are getting stuck in traffic.",
          "We are getting around the city.",
          "We are arriving in advance.",
        ],
      },
      {
        id: "situation-2",
        level: "Advanced",
        prompt:
          "Mai has a sore throat and a runny nose.",
        answer:
          "She may be coming down with a cold.",
        options: [
          "She may be coming down with a cold.",
          "She may be carrying out a survey.",
          "She may be picking up a commuter.",
        ],
      },
      {
        id: "situation-3",
        level: "Advanced",
        prompt:
          "The entertainment centre is full of visitors this evening.",
        answer:
          "It is packed with visitors.",
        options: [
          "It is on time.",
          "It is packed with visitors.",
          "It is getting around visitors.",
        ],
      },
      {
        id: "situation-4",
        level: "Advanced",
        prompt:
          "At weekends, Nam spends time relaxing with his classmates downtown.",
        answer:
          "Nam hangs out with his classmates.",
        options: [
          "Nam picks up his classmates.",
          "Nam carries out his classmates.",
          "Nam hangs out with his classmates.",
        ],
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-emerald-300 bg-emerald-100 text-emerald-700",
  Intermediate:
    "border-amber-300 bg-amber-100 text-amber-700",
  Advanced:
    "border-violet-300 bg-violet-100 text-violet-700",
};

function PhrasalVerbs2Page({
  onBack,
  onComplete,
}) {
  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const allQuestions = exerciseGroups.flatMap(
    (group) => group.questions
  );

  const totalQuestions = allQuestions.length;

  const correctAnswers = allQuestions.filter(
    (question) =>
      selectedAnswers[question.id] ===
      question.answer
  ).length;

  const scorePercent = Math.round(
    (correctAnswers / totalQuestions) * 100
  );

  const handleSelect = (
    questionId,
    option
  ) => {
    if (submitted) return;

    setSelectedAnswers(
      (currentAnswers) => ({
        ...currentAnswers,
        [questionId]: option,
      })
    );

    setMessage("");
  };

  const handleSubmit = () => {
    if (
      Object.keys(selectedAnswers).length <
      totalQuestions
    ) {
      setMessage(
        "Please answer all questions before submitting."
      );
      return;
    }

    setSubmitted(true);
    setMessage("");

    if (onComplete) {
      onComplete({
        correctAnswers,
        totalQuestions,
      });
    }
  };

  const handleTryAgain = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-100 via-sky-50 to-violet-100 px-4 py-6 text-[#263758] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 p-6 text-white shadow-xl sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-20 h-60 w-60 rounded-full bg-white/20" />

          <div className="pointer-events-none absolute bottom-5 right-24 h-24 w-24 rounded-full bg-yellow-300/30" />

          <div className="relative">
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl bg-white px-4 py-2 font-black text-blue-600 shadow-md transition hover:-translate-y-0.5"
            >
              ← Back to Unit 2
            </button>

            <p className="mt-6 font-black uppercase tracking-[0.18em] text-yellow-200">
              Unit 2 · Activity 2
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-5xl">
              City Phrases
            </h1>

            <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-blue-50">
              Practise useful phrasal verbs and
              expressions for transport, health,
              and everyday city life.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-black text-emerald-700">
                🟢 Basic
              </span>

              <span className="rounded-full bg-yellow-200 px-4 py-2 text-sm font-black text-amber-800">
                🟡 Intermediate
              </span>

              <span className="rounded-full bg-violet-200 px-4 py-2 text-sm font-black text-violet-800">
                🟣 Advanced
              </span>
            </div>
          </div>
        </header>

        <section className="mt-7 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-2xl border border-white bg-white/80 p-5 shadow-md backdrop-blur-sm">
                <h2 className="text-2xl font-black text-blue-700">
                  {group.title}
                </h2>

                <p className="mt-1 font-semibold text-slate-600">
                  {group.description}
                </p>
              </div>

              <div className="space-y-5">
                {group.questions.map(
                  (question, index) => {
                    const selected =
                      selectedAnswers[
                        question.id
                      ];

                    const selectedIsCorrect =
                      selected ===
                      question.answer;

                    return (
                      <article
                        key={question.id}
                        className="rounded-[26px] border-2 border-white bg-white p-5 shadow-lg sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-black text-blue-600">
                            Question {index + 1}
                          </p>

                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-black ${levelStyles[question.level]}`}
                          >
                            {question.level}
                          </span>
                        </div>

                        <p className="mt-4 text-lg font-bold leading-7 text-[#2F446D]">
                          {question.prompt}
                        </p>

                        <div className="mt-4 grid gap-3">
                          {question.options.map(
                            (option) => {
                              const isSelected =
                                selected ===
                                option;

                              const isCorrect =
                                option ===
                                question.answer;

                              let optionStyle =
                                "border-sky-200 bg-sky-50 text-[#344B78] hover:border-blue-400 hover:bg-blue-50";

                              if (
                                isSelected &&
                                !submitted
                              ) {
                                optionStyle =
                                  "border-blue-500 bg-blue-100 text-blue-800";
                              }

                              if (
                                submitted &&
                                isCorrect
                              ) {
                                optionStyle =
                                  "border-emerald-500 bg-emerald-100 text-emerald-800";
                              }

                              if (
                                submitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionStyle =
                                  "border-rose-400 bg-rose-100 text-rose-700";
                              }

                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() =>
                                    handleSelect(
                                      question.id,
                                      option
                                    )
                                  }
                                  className={`rounded-2xl border-2 px-4 py-3 text-left font-bold leading-6 transition ${optionStyle}`}
                                >
                                  {option}
                                </button>
                              );
                            }
                          )}
                        </div>

                        {submitted && (
                          <p
                            className={`mt-4 font-black ${
                              selectedIsCorrect
                                ? "text-emerald-600"
                                : "text-rose-600"
                            }`}
                          >
                            {selectedIsCorrect
                              ? "✓ Correct"
                              : "✗ Check the green answer above"}
                          </p>
                        )}
                      </article>
                    );
                  }
                )}
              </div>
            </div>
          ))}
        </section>

        {message && (
          <p className="mt-7 rounded-2xl border border-orange-300 bg-orange-100 p-4 text-center font-black text-orange-700">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 p-6 text-center text-white shadow-xl">
            <p className="font-black uppercase tracking-[0.16em] text-yellow-100">
              Your result
            </p>

            <p className="mt-2 text-5xl font-black">
              {correctAnswers}/{totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-semibold">
              {scorePercent >= 85
                ? "Excellent! You can use city phrases confidently."
                : scorePercent >= 65
                  ? "Good work! Review the advanced situations."
                  : "Keep practising the meanings before trying again."}
            </p>
          </section>
        )}

        <div className="mt-7 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-black text-white shadow-lg transition hover:-translate-y-1 hover:from-blue-700 hover:to-violet-700"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 font-black text-white shadow-lg transition hover:-translate-y-1"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default PhrasalVerbs2Page;