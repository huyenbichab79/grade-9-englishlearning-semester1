import { useState } from "react";

const miniPassage = `Last summer, Mai joined a project to protect an old communal house in her village. At first, she thought the building was only an old structure. However, while the village elders were sharing stories, Mai learned that many important ceremonies had taken place there.

The students interviewed local people face to face, collected old photographs, and created short videos about the communal house. They also organised an exhibition at school. Mai now takes pride in her village heritage. She wishes more young people understood why historic places should be safeguarded and passed down to future generations.`;

const exerciseGroups = [
  {
    id: "quick-review",
    title: "Part 1: Quick Review",
    instruction:
      "Choose the correct answer to review the key vocabulary and phrases.",
    questions: [
      {
        id: "basic-1",
        level: "Basic",
        category: "Vocabulary",
        prompt:
          "Which word means a person in your family who lived a long time ago?",
        answer: "ancestor",
        options: [
          "ancestor",
          "emperor",
          "visitor",
        ],
        explanation:
          "An ancestor is a family member from an earlier generation.",
      },
      {
        id: "basic-2",
        level: "Basic",
        category: "Vocabulary",
        prompt:
          "A structure built to remember an important person or event is a ______.",
        answer: "monument",
        options: [
          "monument",
          "takeaway",
          "serving",
        ],
        explanation:
          "A monument commemorates an important person, group, or historical event.",
      },
      {
        id: "basic-3",
        level: "Basic",
        category: "Phrases",
        prompt:
          "What does “pass down” mean?",
        answer:
          "Transfer something to a younger generation",
        options: [
          "Transfer something to a younger generation",
          "Destroy something from the past",
          "Start a war suddenly",
        ],
        explanation:
          "Families can pass down traditions, recipes, stories, and skills.",
      },
      {
        id: "basic-4",
        level: "Basic",
        category: "Phrases",
        prompt:
          "People who “take pride in” their culture feel ______ about it.",
        answer: "proud",
        options: [
          "proud",
          "worried",
          "confused",
        ],
        explanation:
          "To take pride in something means to feel proud of it.",
      },
    ],
  },
  {
    id: "application",
    title: "Part 2: Apply Your Knowledge",
    instruction:
      "Use vocabulary, phrases, and grammar in meaningful situations.",
    questions: [
      {
        id: "intermediate-1",
        level: "Intermediate",
        category: "Vocabulary",
        prompt:
          "Local authorities should ______ historic buildings from damage.",
        answer: "safeguard",
        options: [
          "safeguard",
          "occupy",
          "replace",
        ],
        explanation:
          "To safeguard something means to protect it from harm or damage.",
      },
      {
        id: "intermediate-2",
        level: "Intermediate",
        category: "Phrases",
        prompt:
          "Traditional festivals help ______ local customs and community values.",
        answer: "keep alive",
        options: [
          "keep alive",
          "break out",
          "take away",
        ],
        explanation:
          "Keeping a tradition alive means helping it continue to exist.",
      },
      {
        id: "intermediate-3",
        level: "Intermediate",
        category: "Grammar",
        prompt:
          "At 9 a.m. yesterday, the students ______ the historical exhibition.",
        answer: "were visiting",
        options: [
          "were visiting",
          "visited",
          "are visiting",
        ],
        explanation:
          "A continuing action at a specific time in the past uses the past continuous.",
      },
      {
        id: "intermediate-4",
        level: "Intermediate",
        category: "Grammar",
        prompt:
          "Choose the correct sentence.",
        answer:
          "While the elders were telling stories, the students were taking notes.",
        options: [
          "While the elders were telling stories, the students were taking notes.",
          "While the elders told stories, the students are taking notes.",
          "While the elders were tell stories, the students took notes.",
        ],
        explanation:
          "Two actions continuing at the same time in the past can both use the past continuous.",
      },
      {
        id: "intermediate-5",
        level: "Intermediate",
        category: "Grammar",
        prompt:
          "I cannot visit the ancient castle now. I wish I ______ visit it.",
        answer: "could",
        options: [
          "could",
          "can",
          "will",
        ],
        explanation:
          "Could is used after wish to express an ability that is not possible now.",
      },
    ],
  },
  {
    id: "final-challenge",
    title: "Part 3: Final Challenge",
    instruction:
      "Read the passage and complete the advanced questions.",
    passage: miniPassage,
    questions: [
      {
        id: "advanced-1",
        level: "Advanced",
        category: "Reading",
        prompt:
          "How did Mai’s opinion of the communal house change?",
        answer:
          "She realised that it had important historical and cultural meaning.",
        options: [
          "She realised that it had important historical and cultural meaning.",
          "She decided that it should be replaced by a modern building.",
          "She learned that it had never been used for community activities.",
        ],
        explanation:
          "The elders’ stories helped Mai understand the communal house’s cultural significance.",
      },
      {
        id: "advanced-2",
        level: "Advanced",
        category: "Grammar",
        prompt:
          "Which sentence correctly expresses Mai’s present wish?",
        answer:
          "Mai wishes more young people understood the value of historic places.",
        options: [
          "Mai wishes more young people understood the value of historic places.",
          "Mai wishes more young people understand the value of historic places.",
          "Mai wishes more young people will understood the value of historic places.",
        ],
        explanation:
          "A present wish uses the past simple to describe a situation that is not true now.",
      },
      {
        id: "advanced-3",
        level: "Advanced",
        category: "Writing",
        prompt:
          "Choose the best order for the paragraph.\n\nA. As a result, younger people can understand and value their cultural identity.\nB. Communities should work together to protect their cultural heritage.\nC. In conclusion, preserving the past helps connect generations.\nD. They can record local stories, safeguard historic buildings, and organise traditional festivals.",
        answer: "B → D → A → C",
        options: [
          "B → D → A → C",
          "A → C → B → D",
          "D → B → C → A",
        ],
        explanation:
          "The paragraph begins with the main idea, gives examples, states the result, and ends with a conclusion.",
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
    "border-[#EBE2DD] bg-[#F6F4F3] text-[#C47F5E]",
};

const categoryStyles = {
  Vocabulary:
    "bg-[#F2EEEC] text-[#825038]",
  Phrases:
    "bg-[#F6F4F3] text-[#925A3E]",
  Grammar:
    "bg-[#EFEAE8] text-[#714530]",
  Reading:
    "bg-[#F6F4F3] text-[#C47F5E]",
  Writing:
    "bg-[#F4F2F0] text-[#B36742]",
};

function UnitChallenge4Page({
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

          <div className="pointer-events-none absolute bottom-8 right-36 h-16 w-16 rounded-full bg-[#F2EEEC]" />

          <div className="relative">
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl bg-white px-4 py-2 font-bold text-[#925A3E] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Back to Unit 4
            </button>

            <p className="mt-6 font-black uppercase tracking-[0.18em] text-[#825038]">
              Unit 4 · Activity 6
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-5xl">
              Unit Challenge
            </h1>

            <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#A96848]">
              Complete the final challenge to
              review vocabulary, heritage
              phrases, grammar, reading, and
              writing.
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
                  5
                </p>

                <p className="mt-1 text-sm font-bold text-[#A96848]">
                  Learning areas
                </p>
              </div>

              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#C68464]">
                  3
                </p>

                <p className="mt-1 text-sm font-bold text-[#A96848]">
                  Advanced questions
                </p>
              </div>
            </div>
          </div>
        </header>

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

              {group.passage && (
                <article className="mb-5 rounded-[28px] border border-[#EBE2DD] bg-[#F6F4F3] p-5 shadow-md sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-black uppercase tracking-[0.14em] text-[#C47F5E]">
                        Short reading
                      </p>

                      <h3 className="mt-1 text-2xl font-black text-[#603B29]">
                        Protecting a Village
                        Memory
                      </h3>
                    </div>

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                      🏛️
                    </span>
                  </div>

                  <p className="mt-5 whitespace-pre-line text-[17px] font-medium leading-8 text-[#8F583D]">
                    {group.passage}
                  </p>
                </article>
              )}

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
                              className={`rounded-full px-3 py-1 text-xs font-bold ${categoryStyles[question.category]}`}
                            >
                              {question.category}
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
              Unit 4 result
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
                ? "Excellent! You have completed Unit 4 successfully."
                : scorePercent >= 65
                  ? "Good work! Review the explanations before moving to the next unit."
                  : "Review the Unit 4 activities before trying the challenge again."}
            </p>

            {scorePercent >= 85 && (
              <div className="mx-auto mt-5 max-w-lg rounded-2xl bg-[#EFEAE8] p-4">
                <p className="text-2xl">
                  🏆
                </p>

                <p className="mt-2 font-black text-[#714530]">
                  Unit 4 Heritage Champion
                </p>

                <p className="mt-1 text-sm font-medium text-[#A96848]">
                  You can describe past
                  memories and explain why
                  cultural heritage matters.
                </p>
              </div>
            )}
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#925A3E] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#774933]"
            >
              Submit Challenge
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

export default UnitChallenge4Page;