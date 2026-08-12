import { useState } from "react";

const exerciseGroups = [
  {
    id: "forms",
    title: "Task 1: Choose the correct form",
    instruction:
      "Choose the correct comparative form to complete each sentence.",
    questions: [
      {
        id: "form-1",
        level: "Basic",
        prompt:
          "The ______ the city becomes, the noisier it gets.",
        answer: "busier",
        options: [
          "busy",
          "busier",
          "more busy",
        ],
      },
      {
        id: "form-2",
        level: "Basic",
        prompt:
          "The ______ the road is, the slower the traffic moves.",
        answer: "more congested",
        options: [
          "congested",
          "more congested",
          "most congested",
        ],
      },
      {
        id: "form-3",
        level: "Basic",
        prompt:
          "The ______ the metro is, the more people use it.",
        answer: "more convenient",
        options: [
          "convenient",
          "more convenient",
          "convenienter",
        ],
      },
      {
        id: "form-4",
        level: "Intermediate",
        prompt:
          "The ______ public transport becomes, the less traffic congestion there is.",
        answer: "more reliable",
        options: [
          "reliabler",
          "more reliable",
          "most reliable",
        ],
      },
    ],
  },
  {
    id: "completion",
    title: "Task 2: Complete the double comparative",
    instruction:
      "Choose the best second half for each sentence.",
    questions: [
      {
        id: "completion-1",
        level: "Basic",
        prompt:
          "The more people use public transport, ...",
        answer:
          "the fewer private vehicles there are on the roads.",
        options: [
          "the fewer private vehicles there are on the roads.",
          "there are fewer the private vehicles.",
          "private vehicles are the fewer.",
        ],
      },
      {
        id: "completion-2",
        level: "Intermediate",
        prompt:
          "The higher the crime rate is, ...",
        answer:
          "the less safe people feel.",
        options: [
          "people feel less the safe.",
          "the less safe people feel.",
          "the people feel safest.",
        ],
      },
      {
        id: "completion-3",
        level: "Intermediate",
        prompt:
          "The more public amenities a city has, ...",
        answer:
          "the more liveable it becomes.",
        options: [
          "the more liveable it becomes.",
          "it becomes more the liveable.",
          "the liveabler it becomes.",
        ],
      },
      {
        id: "completion-4",
        level: "Intermediate",
        prompt:
          "The longer commuters wait for a bus, ...",
        answer:
          "the more impatient they become.",
        options: [
          "the more impatient they become.",
          "they become the most impatient.",
          "the impatienter they become.",
        ],
      },
    ],
  },
  {
    id: "advanced",
    title: "Task 3: Choose the best sentence",
    instruction:
      "Choose the sentence that uses the double comparative correctly.",
    questions: [
      {
        id: "advanced-1",
        level: "Intermediate",
        prompt:
          "Which sentence is correct?",
        answer:
          "The more crowded the city is, the higher the cost of living becomes.",
        options: [
          "More crowded the city is, higher the cost of living becomes.",
          "The more crowded the city is, the higher the cost of living becomes.",
          "The city is more crowded, the cost of living is more high.",
        ],
      },
      {
        id: "advanced-2",
        level: "Advanced",
        prompt:
          "Choose the sentence that correctly describes metro services.",
        answer:
          "The more frequent the trains are, the easier it is to get around.",
        options: [
          "The more frequent the trains are, the easier it is to get around.",
          "The frequenter the trains are, the easy it is to get around.",
          "More frequent trains are, easier people get around.",
        ],
      },
      {
        id: "advanced-3",
        level: "Advanced",
        prompt:
          "Choose the correct sentence about spending money.",
        answer:
          "The less money you spend, the more you can save.",
        options: [
          "The less money you spent, the more you can save.",
          "The fewer money you spend, the more you can save.",
          "The less money you spend, the more you can save.",
        ],
      },
      {
        id: "advanced-4",
        level: "Advanced",
        prompt:
          "Which sentence correctly expresses a general city-life rule?",
        answer:
          "The denser the population becomes, the more public services the city needs.",
        options: [
          "The denser the population becomes, the more public services the city needs.",
          "The more dense the population becomes, the city needs public services more.",
          "Denser the population becomes, more public services the city needs.",
        ],
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-emerald-300 bg-emerald-100 text-emerald-700",
  Intermediate:
    "border-amber-300 bg-yellow-100 text-amber-700",
  Advanced:
    "border-violet-300 bg-violet-100 text-violet-700",
};

function Grammar2Page({
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
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-yellow-50 to-fuchsia-100 px-4 py-6 text-[#2C3F66] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="relative overflow-hidden rounded-[34px] bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 p-6 text-white shadow-2xl sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/20" />

          <div className="pointer-events-none absolute bottom-5 right-24 h-28 w-28 rounded-full bg-yellow-300/35" />

          <div className="relative">
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl bg-white px-4 py-2 font-black text-violet-700 shadow-md transition hover:-translate-y-0.5"
            >
              ← Back to Unit 2
            </button>

            <p className="mt-6 font-black uppercase tracking-[0.18em] text-yellow-200">
              Unit 2 · Activity 3
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-5xl">
              Double Comparatives
            </h1>

            <p className="mt-3 max-w-2xl text-lg font-semibold leading-7 text-violet-50">
              Use double comparatives to show
              that two things change together.
            </p>

            <div className="mt-6 rounded-[24px] border border-white/50 bg-white/95 p-5 text-[#2C3F66] shadow-lg">
              <p className="font-black uppercase tracking-[0.14em] text-violet-700">
                Remember
              </p>

              <p className="mt-3 text-xl font-black text-purple-700">
                The + comparative + subject +
                verb, the + comparative +
                subject + verb.
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl bg-emerald-100 p-4">
                  <p className="font-black text-emerald-700">
                    Short adjective
                  </p>

                  <p className="mt-2 font-bold">
                    The busier the road is, the
                    noisier it becomes.
                  </p>
                </div>

                <div className="rounded-2xl bg-violet-100 p-4">
                  <p className="font-black text-violet-700">
                    Long adjective
                  </p>

                  <p className="mt-2 font-bold">
                    The more convenient the
                    metro is, the more popular
                    it becomes.
                  </p>
                </div>

                <div className="rounded-2xl bg-yellow-100 p-4">
                  <p className="font-black text-amber-700">
                    Noun
                  </p>

                  <p className="mt-2 font-bold">
                    The more amenities a city
                    has, the more liveable it
                    becomes.
                  </p>
                </div>
              </div>

              <p className="mt-4 rounded-xl bg-gradient-to-r from-yellow-300 to-orange-300 px-4 py-3 text-center text-lg font-black text-orange-900">
                The more you practise, the
                better you become!
              </p>
            </div>
          </div>
        </header>

        <section className="mt-8 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-[22px] border-2 border-white bg-white p-5 shadow-lg">
                <h2 className="text-2xl font-black text-violet-700">
                  {group.title}
                </h2>

                <p className="mt-2 font-semibold text-slate-600">
                  {group.instruction}
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
                          <p className="font-black text-fuchsia-600">
                            Question {index + 1}
                          </p>

                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-black ${levelStyles[question.level]}`}
                          >
                            {question.level}
                          </span>
                        </div>

                        <p className="mt-4 text-lg font-black leading-7 text-[#2C3F66]">
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
                                "border-violet-200 bg-violet-50 text-[#354D7C] hover:border-violet-500 hover:bg-violet-100";

                              if (
                                isSelected &&
                                !submitted
                              ) {
                                optionStyle =
                                  "border-violet-600 bg-violet-200 text-violet-900";
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
                                  "border-rose-500 bg-rose-100 text-rose-700";
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
          <p className="mt-7 rounded-2xl border-2 border-orange-300 bg-orange-100 p-4 text-center font-black text-orange-700">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[30px] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 p-7 text-center text-white shadow-2xl">
            <p className="font-black uppercase tracking-[0.16em] text-yellow-200">
              Your result
            </p>

            <p className="mt-2 text-6xl font-black">
              {correctAnswers}/{totalQuestions}
            </p>

            <p className="mt-2 text-xl font-black">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-semibold">
              {scorePercent >= 85
                ? "Excellent! You can use double comparatives confidently."
                : scorePercent >= 65
                  ? "Good work! Review the Intermediate and Advanced questions."
                  : "Keep practising the structure before trying again."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-1 hover:from-violet-700 hover:to-fuchsia-700"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-1"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Grammar2Page;