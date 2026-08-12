import { useState } from "react";

const exerciseGroups = [
  {
    id: "grammar-basics",
    title: "Task 1: Grammar Basics",
    instruction:
      "Choose the correct form or structure.",
    questions: [
      {
        id: "basic-1",
        level: "Basic",
        topic: "Past Continuous",
        prompt:
          "At 8 p.m. yesterday, my mother ______ dinner.",
        answer: "was cooking",
        options: [
          "was cooking",
          "were cooking",
          "cooked",
        ],
        explanation:
          "My mother is singular, so we use was + cooking.",
      },
      {
        id: "basic-2",
        level: "Basic",
        topic: "Past Continuous",
        prompt:
          "Which is the correct affirmative structure of the past continuous?",
        answer:
          "Subject + was/were + verb-ing",
        options: [
          "Subject + was/were + verb-ing",
          "Subject + did + verb-ing",
          "Subject + has/have + verb-ing",
        ],
        explanation:
          "The past continuous is formed with was or were followed by the verb-ing form.",
      },
      {
        id: "basic-3",
        level: "Basic",
        topic: "Present Wish",
        prompt:
          "I wish I ______ enough time to visit the museum now.",
        answer: "had",
        options: [
          "had",
          "have",
          "will have",
        ],
        explanation:
          "A present wish uses the past simple to describe an unreal situation now.",
      },
      {
        id: "basic-4",
        level: "Basic",
        topic: "Present Wish",
        prompt:
          "She wishes she ______ at the traditional festival now.",
        answer: "were",
        options: [
          "were",
          "is",
          "will be",
        ],
        explanation:
          "In present wishes, were can be used for all subjects.",
      },
    ],
  },
  {
    id: "grammar-application",
    title: "Task 2: Apply the Grammar",
    instruction:
      "Choose the best answer for each situation.",
    questions: [
      {
        id: "intermediate-1",
        level: "Intermediate",
        topic: "Past Continuous",
        prompt:
          "We ______ around the ancient temple when it suddenly started raining.",
        answer: "were walking",
        options: [
          "were walking",
          "walked",
          "are walking",
        ],
        explanation:
          "The longer action was in progress when the shorter action started.",
      },
      {
        id: "intermediate-2",
        level: "Intermediate",
        topic: "Past Continuous",
        prompt:
          "Choose the correct sentence.",
        answer:
          "While the guide was explaining the history, we were taking notes.",
        options: [
          "While the guide was explaining the history, we were taking notes.",
          "While the guide explained the history, we are taking notes.",
          "While the guide was explain the history, we took notes.",
        ],
        explanation:
          "Two actions happening at the same time in the past can both use the past continuous.",
      },
      {
        id: "intermediate-3",
        level: "Intermediate",
        topic: "Past Continuous",
        prompt:
          "They ______ a documentary when the power went out.",
        answer: "were watching",
        options: [
          "were watching",
          "watched",
          "are watching",
        ],
        explanation:
          "The documentary was already in progress when the power went out.",
      },
      {
        id: "intermediate-4",
        level: "Intermediate",
        topic: "Present Wish",
        prompt:
          "I cannot play that traditional game now. I wish I ______ play it.",
        answer: "could",
        options: [
          "could",
          "can",
          "will",
        ],
        explanation:
          "Could is used in a present wish about an ability that the speaker does not have now.",
      },
      {
        id: "intermediate-5",
        level: "Intermediate",
        topic: "Past Continuous",
        prompt:
          "Which sentence correctly describes an action in progress at a specific time in the past?",
        answer:
          "At this time last year, they were building the stadium.",
        options: [
          "At this time last year, they were building the stadium.",
          "At this time last year, they are building the stadium.",
          "At this time last year, they build the stadium.",
        ],
        explanation:
          "At this time last year is a clear signal for the past continuous.",
      },
    ],
  },
  {
    id: "grammar-challenge",
    title: "Task 3: Grammar Challenge",
    instruction:
      "Choose the best correction or sentence.",
    questions: [
      {
        id: "advanced-1",
        level: "Advanced",
        topic: "Error Correction",
        prompt:
          "Which correction is best?\n\nMai visited an old castle at 8 a.m. yesterday.",
        answer:
          "Mai was visiting an old castle at 8 a.m. yesterday.",
        options: [
          "Mai was visiting an old castle at 8 a.m. yesterday.",
          "Mai were visiting an old castle at 8 a.m. yesterday.",
          "Mai is visiting an old castle at 8 a.m. yesterday.",
        ],
        explanation:
          "A specific time in the past suggests an action that was in progress, so was visiting is appropriate.",
      },
      {
        id: "advanced-2",
        level: "Advanced",
        topic: "Present Wish",
        prompt:
          "Choose the sentence with the same meaning.\n\nThey want to visit the castle, but they cannot visit it now.",
        answer:
          "They wish they could visit the castle now.",
        options: [
          "They wish they could visit the castle now.",
          "They wish they can visit the castle now.",
          "They wished they will visit the castle now.",
        ],
        explanation:
          "Could expresses an unreal present ability after wish.",
      },
      {
        id: "advanced-3",
        level: "Advanced",
        topic: "Past Continuous",
        prompt:
          "Which sentence correctly shows two actions happening at the same time in the past?",
        answer:
          "While the villagers were decorating the communal house, the children were singing folk songs.",
        options: [
          "While the villagers were decorating the communal house, the children were singing folk songs.",
          "While the villagers decorated the communal house, the children are singing folk songs.",
          "While the villagers were decorate the communal house, the children sang folk songs.",
        ],
        explanation:
          "Both actions were continuing at the same time, so both use was/were + verb-ing.",
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#E5DAD4] bg-[#F6F4F3] text-[#925A3E]",
  Intermediate:
    "border-[#E0D1CA] bg-[#F2EEEC] text-[#825038]",
  Advanced:
    "border-[#D3B3A4] bg-[#EFEAE8] text-[#714530]",
};

const topicStyles = {
  "Past Continuous":
    "bg-[#F6F4F3] text-[#925A3E]",
  "Present Wish":
    "bg-[#F6F4F3] text-[#C47F5E]",
  "Error Correction":
    "bg-[#F4F2F0] text-[#B36742]",
};

function Grammar4Page({
  onBack,
  onComplete,
}) {
  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const allQuestions =
    exerciseGroups.flatMap(
      (group) => group.questions
    );

  const questionNumbers =
    Object.fromEntries(
      allQuestions.map(
        (question, index) => [
          question.id,
          index + 1,
        ]
      )
    );

  const totalQuestions =
    allQuestions.length;

  const correctAnswers =
    allQuestions.filter(
      (question) =>
        selectedAnswers[question.id] ===
        question.answer
    ).length;

  const scorePercent = Math.round(
    (correctAnswers / totalQuestions) *
      100
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
    <main className="min-h-screen bg-[#FCFBFB] px-4 py-6 text-[#603B29] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="relative overflow-hidden rounded-[32px] border border-white bg-gradient-to-r from-[#F6F4F3] via-[#F9F8F7] to-[#EFEAE8] p-6 shadow-lg sm:p-8">
          <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#DED0C9]/70" />

          <div className="pointer-events-none absolute bottom-7 right-36 h-16 w-16 rounded-full bg-[#F2EEEC]" />

          <div className="relative">
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl bg-white px-4 py-2 font-bold text-[#925A3E] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Back to Unit 4
            </button>

            <p className="mt-6 font-black uppercase tracking-[0.18em] text-[#825038]">
              Unit 4 · Activity 3
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-5xl">
              Past Continuous & Wishes
            </h1>

            <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#A96848]">
              Describe actions happening in
              the past and express wishes about
              situations that are not true now.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#925A3E]">
                  12
                </p>

                <p className="mt-1 text-sm font-bold text-[#A96848]">
                  Questions
                </p>
              </div>

              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#825038]">
                  2
                </p>

                <p className="mt-1 text-sm font-bold text-[#A96848]">
                  Grammar points
                </p>
              </div>

              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#C68464]">
                  3
                </p>

                <p className="mt-1 text-sm font-bold text-[#A96848]">
                  Difficulty levels
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-7 grid gap-5 md:grid-cols-2">
          <article className="rounded-[26px] border border-[#EAE5E3] bg-[#F6F4F3] p-5 shadow-md sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                ⏳
              </span>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.12em] text-[#925A3E]">
                  Grammar 1
                </p>

                <h2 className="text-xl font-black text-[#603B29]">
                  Past Continuous
                </h2>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-white/85 p-4">
              <p className="font-black text-[#925A3E]">
                Subject + was/were + verb-ing
              </p>

              <p className="mt-2 leading-6 text-[#A96848]">
                Use it for an action that was
                happening at a particular time
                in the past.
              </p>

              <p className="mt-3 rounded-xl bg-[#FAFAFA] p-3 font-semibold text-[#8F583D]">
                We were visiting a monument at
                9 a.m. yesterday.
              </p>
            </div>
          </article>

          <article className="rounded-[26px] border border-[#EBE3DE] bg-[#F6F4F3] p-5 shadow-md sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                💭
              </span>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.12em] text-[#C47F5E]">
                  Grammar 2
                </p>

                <h2 className="text-xl font-black text-[#603B29]">
                  Present Wishes
                </h2>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-white/85 p-4">
              <p className="font-black text-[#C47F5E]">
                Subject + wish + past simple /
                were / could
              </p>

              <p className="mt-2 leading-6 text-[#A96848]">
                Use it for a situation that is
                not true or not possible at
                present.
              </p>

              <p className="mt-3 rounded-xl bg-[#FBFAFA] p-3 font-semibold text-[#8F583D]">
                I wish I could visit the
                castle now.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-8 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-[22px] bg-white p-5 shadow-md">
                <h2 className="text-2xl font-black text-[#925A3E]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#A96848]">
                  {group.instruction}
                </p>
              </div>

              <div className="space-y-5">
                {group.questions.map(
                  (question) => {
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
                        className="rounded-[26px] border border-[#EBE6E4] bg-white p-5 shadow-md sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-black text-[#825038]">
                              Question{" "}
                              {
                                questionNumbers[
                                  question.id
                                ]
                              }
                            </p>

                            <span
                              className={`rounded-full px-3 py-1 text-xs font-bold ${topicStyles[question.topic]}`}
                            >
                              {question.topic}
                            </span>
                          </div>

                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-bold ${levelStyles[question.level]}`}
                          >
                            {question.level}
                          </span>
                        </div>

                        <p className="mt-4 whitespace-pre-line text-lg font-bold leading-7 text-[#603B29]">
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
                                "border-[#EAE5E2] bg-[#FCFCFC] text-[#8F583D] hover:border-[#CAA491] hover:bg-[#F9F8F8]";

                              if (
                                isSelected &&
                                !submitted
                              ) {
                                optionStyle =
                                  "border-[#BC6F4A] bg-[#F6F4F3] text-[#7E4E36]";
                              }

                              if (
                                submitted &&
                                isCorrect
                              ) {
                                optionStyle =
                                  "border-[#BF7652] bg-[#F2EEEC] text-[#6C432F]";
                              }

                              if (
                                submitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionStyle =
                                  "border-[#CF997F] bg-[#F4F2F0] text-[#9E6144]";
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
                                  className={`rounded-2xl border px-4 py-3 text-left font-semibold leading-6 transition ${optionStyle}`}
                                >
                                  {option}
                                </button>
                              );
                            }
                          )}
                        </div>

                        {submitted && (
                          <div
                            className={`mt-4 rounded-2xl p-4 ${
                              selectedIsCorrect
                                ? "bg-[#F2EEEC]"
                                : "bg-[#F4F2F0]"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                selectedIsCorrect
                                  ? "text-[#6C432F]"
                                  : "text-[#9E6144]"
                              }`}
                            >
                              {selectedIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this answer"}
                            </p>

                            <p className="mt-1 leading-6 text-[#A96848]">
                              {
                                question.explanation
                              }
                            </p>
                          </div>
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
          <p className="mt-7 rounded-2xl border border-[#D3B3A4] bg-[#EFEAE8] p-4 text-center font-bold text-[#643E2B]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] border border-[#EAE5E3] bg-[#F6F4F3] p-7 text-center shadow-md">
            <p className="font-black uppercase tracking-[0.16em] text-[#825038]">
              Your result
            </p>

            <p className="mt-2 text-5xl font-black text-[#925A3E]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#603B29]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#A96848]">
              {scorePercent >= 85
                ? "Excellent! You can use the past continuous and present wishes confidently."
                : scorePercent >= 65
                  ? "Good work! Review the explanations for the difficult questions."
                  : "Review the grammar guide and try the activity again."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#925A3E] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#774933]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#825038] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#6A412D]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Grammar4Page;