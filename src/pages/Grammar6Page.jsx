import { useState } from "react";

const grammarSections = [
  {
    id: "to-infinitive",
    title: "Verbs + to-infinitive",
    formula: "Verb + to + base verb",
    examples: [
      "decide to study",
      "plan to travel",
      "promise to help",
      "manage to finish",
      "want to learn",
    ],
    note:
      "These verbs are normally followed by to and the base form of the next verb.",
    background: "bg-[#F0F2EC]",
    accent: "text-[#6F893B]",
  },
  {
    id: "gerund",
    title: "Verbs + V-ing",
    formula: "Verb + V-ing",
    examples: [
      "enjoy reading",
      "avoid arguing",
      "finish cleaning",
      "mind helping",
      "suggest taking",
    ],
    note:
      "These verbs are normally followed by the -ing form of the next verb.",
    background: "bg-[#E9ECE4]",
    accent: "text-[#7B9841]",
  },
  {
    id: "meaning-change",
    title: "Different Forms, Different Meanings",
    formula: "Verb + to-infinitive / V-ing",
    examples: [
      "remember to call",
      "remember meeting",
      "stop to rest",
      "stop talking",
      "try to open",
      "try opening",
    ],
    note:
      "Some verbs can use both forms, but the meaning changes.",
    background: "bg-[#F3F4F0]",
    accent: "text-[#96BC49]",
  },
];

const questionGroups = [
  {
    id: "basic",
    title: "Part 1: Grammar Foundations",
    instruction:
      "Choose the correct verb form.",
    questions: [
      {
        id: "basic-1",
        level: "Basic",
        prompt:
          "My pen pal decided ______ Vietnamese before moving to Hanoi.",
        options: [
          "to learn",
          "learning",
          "learned",
        ],
        answer: "to learn",
        explanation:
          "Decide is followed by a to-infinitive: decide to learn.",
      },
      {
        id: "basic-2",
        level: "Basic",
        prompt:
          "Many people enjoy ______ traditional clothing on special occasions.",
        options: [
          "wearing",
          "to wearing",
          "wear",
        ],
        answer: "wearing",
        explanation:
          "Enjoy is followed by the V-ing form: enjoy wearing.",
      },
      {
        id: "basic-3",
        level: "Basic",
        prompt:
          "Do you mind ______ me with these bags?",
        options: [
          "helping",
          "to help",
          "helped",
        ],
        answer: "helping",
        explanation:
          "Mind is followed by V-ing: mind helping.",
      },
      {
        id: "basic-4",
        level: "Basic",
        prompt:
          "Our teacher suggested ______ a short quiz.",
        options: [
          "doing",
          "to do",
          "do",
        ],
        answer: "doing",
        explanation:
          "Suggest is followed by V-ing: suggest doing.",
      },
    ],
  },
  {
    id: "intermediate",
    title: "Part 2: Apply the Structures",
    instruction:
      "Use the correct infinitive or gerund form in context.",
    questions: [
      {
        id: "intermediate-1",
        level: "Intermediate",
        prompt:
          "The students managed ______ the project before the deadline.",
        options: [
          "to finish",
          "finishing",
          "finish",
        ],
        answer: "to finish",
        explanation:
          "Manage is followed by a to-infinitive: manage to finish.",
      },
      {
        id: "intermediate-2",
        level: "Intermediate",
        prompt:
          "We should avoid ______ about small differences in the family.",
        options: [
          "arguing",
          "to argue",
          "argue",
        ],
        answer: "arguing",
        explanation:
          "Avoid is followed by V-ing: avoid arguing.",
      },
      {
        id: "intermediate-3",
        level: "Intermediate",
        prompt:
          "My parents promised ______ me a new bicycle.",
        options: [
          "to buy",
          "buying",
          "buy",
        ],
        answer: "to buy",
        explanation:
          "Promise is followed by a to-infinitive: promise to buy.",
      },
      {
        id: "intermediate-4",
        level: "Intermediate",
        prompt:
          "The workers finally finished ______ the living room.",
        options: [
          "painting",
          "to paint",
          "paint",
        ],
        answer: "painting",
        explanation:
          "Finish is followed by V-ing: finish painting.",
      },
      {
        id: "intermediate-5",
        level: "Intermediate",
        prompt:
          "I remember ______ that traditional game when I was a child.",
        options: [
          "playing",
          "to play",
          "play",
        ],
        answer: "playing",
        explanation:
          "Remember doing something means recalling a past experience.",
      },
    ],
  },
  {
    id: "advanced",
    title: "Part 3: Meaning Challenge",
    instruction:
      "Pay attention to how the verb form changes the meaning.",
    questions: [
      {
        id: "advanced-1",
        level: "Advanced",
        prompt:
          "Grandfather stopped ______ some water before continuing his walk.",
        options: [
          "to drink",
          "drinking",
          "drink",
        ],
        answer: "to drink",
        explanation:
          "Stop to do something means pausing one activity in order to do another.",
      },
      {
        id: "advanced-2",
        level: "Advanced",
        prompt:
          "The computer is running slowly. Try ______ some unnecessary programs.",
        options: [
          "closing",
          "to close",
          "close",
        ],
        answer: "closing",
        explanation:
          "Try doing something means testing a possible solution.",
      },
      {
        id: "advanced-3",
        level: "Advanced",
        prompt:
          "Choose the sentence with the same meaning.\n\nThe old house needs to be repaired.",
        options: [
          "The old house needs repairing.",
          "The old house needs to repairing.",
          "The old house needs repair by itself.",
        ],
        answer:
          "The old house needs repairing.",
        explanation:
          "Need + V-ing can have a passive meaning: needs repairing means needs to be repaired.",
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#CFDCB6] bg-[#F0F2EC] text-[#607633]",
  Intermediate:
    "border-[#BECF9C] bg-[#E9ECE4] text-[#688137]",
  Advanced:
    "border-[#C7D6A9] bg-[#F3F4F0] text-[#83A246]",
};

function Grammar6Page({
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
    questionGroups.flatMap(
      (group) => group.questions
    );

  const totalQuestions =
    allQuestions.length;

  const questionNumbers =
    Object.fromEntries(
      allQuestions.map(
        (question, index) => [
          question.id,
          index + 1,
        ]
      )
    );

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
    <main className="min-h-screen bg-[#EFF1EB] px-4 py-6 text-[#3F4E21] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="relative overflow-hidden rounded-[34px] border border-[#CFDCB6] bg-gradient-to-br from-[#FBFBFA] via-[#F0F2EC] to-[#E9ECE4] p-6 shadow-[0_14px_35px_rgba(66,82,35,0.13)] sm:p-8">
          <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-[#C5D4A6]/30" />

          <div className="pointer-events-none absolute bottom-8 right-40 h-20 w-20 rounded-full bg-[#A1C35E]/20" />

          <div className="pointer-events-none absolute right-8 top-20 select-none text-[130px] font-black leading-none text-[#425223]/10">
            06
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl border border-[#D7DEC8] bg-white px-4 py-2 font-bold text-[#425223] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F6F6F5]"
            >
              ← Back to Unit 6
            </button>

            <p className="mt-6 font-black uppercase tracking-[0.18em] text-[#6F893B]">
              Unit 6 · Activity 3
            </p>

            <h1 className="mt-2 font-serif text-4xl font-bold italic text-[#3F4E21] sm:text-5xl">
              Infinitives & Gerunds
            </h1>

            <p className="mt-4 max-w-3xl text-lg font-medium leading-7 text-[#777F68]">
              Learn when to use a
              to-infinitive, when to use a
              gerund, and how the form can
              change the meaning of a sentence.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <article className="rounded-[22px] border border-[#CFDCB6] bg-white/75 p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#425223]">
                  3
                </p>

                <p className="mt-1 text-sm font-bold text-[#777F68]">
                  Grammar areas
                </p>
              </article>

              <article className="rounded-[22px] border border-[#BECF9C] bg-[#E9ECE4] p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#7B9841]">
                  12
                </p>

                <p className="mt-1 text-sm font-bold text-[#777F68]">
                  Questions
                </p>
              </article>

              <article className="rounded-[22px] border border-[#C7D6A9] bg-[#F3F4F0] p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#96BC49]">
                  3
                </p>

                <p className="mt-1 text-sm font-bold text-[#777F68]">
                  Difficulty levels
                </p>
              </article>
            </div>
          </div>
        </header>

        <section className="mt-8">
          <p className="font-black uppercase tracking-[0.18em] text-[#6F893B]">
            Grammar guide
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold italic text-[#3F4E21]">
            Review the Key Structures
          </h2>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {grammarSections.map(
              (section) => (
                <article
                  key={section.id}
                  className={`rounded-[28px] border border-[#CFDCB6] ${section.background} p-5 shadow-[0_10px_24px_rgba(66,82,35,0.07)]`}
                >
                  <p
                    className={`text-sm font-black uppercase tracking-[0.12em] ${section.accent}`}
                  >
                    Grammar pattern
                  </p>

                  <h3 className="mt-2 text-xl font-black text-[#3F4E21]">
                    {section.title}
                  </h3>

                  <div className="mt-4 rounded-2xl bg-white/85 p-4 text-center">
                    <p className="font-serif text-xl font-bold italic text-[#425223]">
                      {section.formula}
                    </p>
                  </div>

                  <div className="mt-4 space-y-2">
                    {section.examples.map(
                      (example) => (
                        <p
                          key={example}
                          className="rounded-xl bg-white/65 px-3 py-2 font-semibold text-[#75913E]"
                        >
                          ✓ {example}
                        </p>
                      )
                    )}
                  </div>

                  <p className="mt-4 text-sm font-medium leading-6 text-[#777F68]">
                    {section.note}
                  </p>
                </article>
              )
            )}
          </div>
        </section>

        <section className="mt-10 space-y-9">
          {questionGroups.map((group) => (
            <div key={group.id}>
              <div className="rounded-[26px] border border-[#CFDCB6] bg-[#FBFBFA] p-5 shadow-sm">
                <h2 className="font-serif text-3xl font-bold italic text-[#3F4E21]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#777F68]">
                  {group.instruction}
                </p>
              </div>

              <div className="mt-5 space-y-5">
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
                        className="rounded-[28px] border border-[#CFDCB6] bg-[#FBFBFA] p-5 shadow-[0_10px_24px_rgba(66,82,35,0.07)] sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-black text-[#6F893B]">
                            Question{" "}
                            {
                              questionNumbers[
                                question.id
                              ]
                            }
                          </p>

                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-bold ${levelStyles[question.level]}`}
                          >
                            {question.level}
                          </span>
                        </div>

                        <p className="mt-4 whitespace-pre-line text-lg font-bold leading-7 text-[#3F4E21]">
                          {question.prompt}
                        </p>

                        <div className="mt-4 grid gap-3">
                          {question.options.map(
                            (option) => {
                              const isSelected =
                                selected === option;

                              const isCorrect =
                                option ===
                                question.answer;

                              let optionStyle =
                                "border-[#DEE4D1] bg-[#FCFCFC] text-[#75913E] hover:border-[#9DC156] hover:bg-[#F0F2EC]";

                              if (
                                isSelected &&
                                !submitted
                              ) {
                                optionStyle =
                                  "border-[#6F893B] bg-[#ECEEE8] text-[#4F622A]";
                              }

                              if (
                                submitted &&
                                isCorrect
                              ) {
                                optionStyle =
                                  "border-[#97BD4C] bg-[#EEF0EA] text-[#586D2F]";
                              }

                              if (
                                submitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionStyle =
                                  "border-[#B5C98E] bg-[#F3F4F0] text-[#83A246]";
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
                                ? "bg-[#EEF0EA]"
                                : "bg-[#F3F4F0]"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                selectedIsCorrect
                                  ? "text-[#586D2F]"
                                  : "text-[#83A246]"
                              }`}
                            >
                              {selectedIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this answer"}
                            </p>

                            <p className="mt-1 leading-6 text-[#777F68]">
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
          <p className="mt-7 rounded-2xl border border-[#BECF9C] bg-[#E9ECE4] p-4 text-center font-bold text-[#5C7131]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[30px] border border-[#CFDCB6] bg-[#FBFBFA] p-7 text-center shadow-[0_12px_28px_rgba(66,82,35,0.09)]">
            <p className="font-black uppercase tracking-[0.16em] text-[#6F893B]">
              Your result
            </p>

            <p className="mt-2 font-serif text-6xl font-bold italic text-[#425223]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#3F4E21]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#777F68]">
              {scorePercent >= 85
                ? "Excellent! You can use infinitives and gerunds accurately."
                : scorePercent >= 65
                  ? "Good work! Review the verbs that use different structures."
                  : "Review the grammar guide and pay attention to how each verb is used."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#425223] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#333F1B]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#A1C35E] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#8AAA49]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Grammar6Page;