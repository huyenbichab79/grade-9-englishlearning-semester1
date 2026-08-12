import { useState } from "react";

const exerciseGroups = [
  {
    id: "sentence-choice",
    title: "Task 1: Choose the best sentence",
    instruction:
      "Choose the most suitable sentence for each part of a paragraph.",
    questions: [
      {
        id: "choice-1",
        type: "choice",
        level: "Basic",
        prompt:
          "Which is the best topic sentence for a paragraph about traffic congestion?",
        answer:
          "Traffic congestion is one of the biggest problems in modern cities.",
        options: [
          "Traffic congestion is one of the biggest problems in modern cities.",
          "My favourite colour is green.",
          "Many students enjoy playing sports after school.",
        ],
      },
      {
        id: "choice-2",
        type: "choice",
        level: "Basic",
        prompt:
          "Which sentence best supports the idea that traffic congestion causes inconvenience?",
        answer:
          "During rush hour, commuters may get stuck in traffic and arrive late.",
        options: [
          "During rush hour, commuters may get stuck in traffic and arrive late.",
          "The city has several beautiful parks.",
          "Local food is sometimes very delicious.",
        ],
      },
      {
        id: "choice-3",
        type: "choice",
        level: "Basic",
        prompt:
          "Choose the correct double comparative sentence.",
        answer:
          "The more people use public transport, the fewer cars there are on the roads.",
        options: [
          "The more people use public transport, the fewer cars there are on the roads.",
          "The more people use public transport, fewer cars are the roads.",
          "More people use transport, the cars become fewer.",
        ],
      },
      {
        id: "choice-4",
        type: "choice",
        level: "Intermediate",
        prompt:
          "Which is the best concluding sentence for a paragraph about improving city life?",
        answer:
          "For these reasons, both the authority and residents should work together to make the city more liveable.",
        options: [
          "For these reasons, both the authority and residents should work together to make the city more liveable.",
          "Yesterday, I bought a new notebook.",
          "The metro station is near my house.",
        ],
      },
    ],
  },
  {
    id: "sentence-building",
    title: "Task 2: Build the sentences",
    instruction:
      "Click the parts in the correct order to make a complete sentence.",
    questions: [
      {
        id: "order-1",
        type: "order",
        level: "Intermediate",
        prompt:
          "Arrange the parts to make a sentence about public transport.",
        chunks: [
          "people use.",
          "The more reliable",
          "the fewer private cars",
          "public transport becomes,",
        ],
        correctOrder: [
          "The more reliable",
          "public transport becomes,",
          "the fewer private cars",
          "people use.",
        ],
      },
      {
        id: "order-2",
        type: "order",
        level: "Intermediate",
        prompt:
          "Arrange the parts to make a sentence about the city authority.",
        chunks: [
          "regular surveys",
          "The city authority",
          "to understand residents' needs.",
          "should carry out",
        ],
        correctOrder: [
          "The city authority",
          "should carry out",
          "regular surveys",
          "to understand residents' needs.",
        ],
      },
      {
        id: "order-3",
        type: "order",
        level: "Intermediate",
        prompt:
          "Arrange the parts to make a double comparative sentence.",
        chunks: [
          "it becomes.",
          "a city provides,",
          "The more public amenities",
          "the more liveable",
        ],
        correctOrder: [
          "The more public amenities",
          "a city provides,",
          "the more liveable",
          "it becomes.",
        ],
      },
      {
        id: "order-4",
        type: "order",
        level: "Advanced",
        prompt:
          "Arrange the parts to make a complex sentence.",
        chunks: [
          "avoid traffic congestion",
          "Although the metro can be pricey,",
          "and arrive on time.",
          "it helps commuters",
        ],
        correctOrder: [
          "Although the metro can be pricey,",
          "it helps commuters",
          "avoid traffic congestion",
          "and arrive on time.",
        ],
      },
    ],
  },
  {
    id: "paragraph-building",
    title: "Task 3: Build a good paragraph",
    instruction:
      "Choose the best answer to complete or organise a paragraph.",
    questions: [
      {
        id: "paragraph-1",
        type: "choice",
        level: "Basic",
        prompt:
          "Which sentence should come first in a paragraph about public transport?",
        answer:
          "Public transport plays an important role in modern city life.",
        options: [
          "Public transport plays an important role in modern city life.",
          "As a result, fewer people may use private cars.",
          "In conclusion, the city should improve its transport system.",
        ],
      },
      {
        id: "paragraph-2",
        type: "choice",
        level: "Intermediate",
        prompt:
          "Choose the best supporting sentence after: “The city should build more cycling lanes.”",
        answer:
          "Cycling lanes can help residents travel safely and reduce traffic congestion.",
        options: [
          "Cycling lanes can help residents travel safely and reduce traffic congestion.",
          "Some people enjoy watching films at home.",
          "Rush hour usually happens twice a day.",
        ],
      },
      {
        id: "paragraph-3",
        type: "choice",
        level: "Advanced",
        prompt:
          "Choose the best order for the sentences.\n\nA. Therefore, the authority should provide more buses and metro services.\nB. Traffic congestion is a serious problem in many cities.\nC. Better public transport can make city life more convenient.\nD. Many commuters get stuck in traffic during rush hour.",
        answer: "B → D → A → C",
        options: [
          "B → D → A → C",
          "A → C → B → D",
          "D → B → C → A",
        ],
      },
      {
        id: "paragraph-4",
        type: "choice",
        level: "Advanced",
        prompt:
          "Which paragraph is the most logical and well organised?",
        answer:
          "City authorities should improve public transport. More reliable buses and metro services can help commuters get around more easily. The more convenient public transport becomes, the fewer private cars people use. Therefore, better transport can make a city more liveable.",
        options: [
          "City authorities should improve public transport. More reliable buses and metro services can help commuters get around more easily. The more convenient public transport becomes, the fewer private cars people use. Therefore, better transport can make a city more liveable.",
          "Public transport is useful. I like entertainment centres. Yesterday was Sunday. Cities have many buildings.",
          "Therefore, cities are liveable. Public transport is a problem. More cars are fewer. The metro is a construction site.",
        ],
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#C1CADA] bg-[#EBEDF1] text-[#324976]",
  Intermediate:
    "border-[#B5C2DB] bg-[#ECEEF1] text-[#364E7D]",
  Advanced:
    "border-[#CBD2E0] bg-[#EFF1F4] text-[#3E5A90]",
};

function Writing2Page({
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

  const isQuestionCorrect = (
    question
  ) => {
    const selected =
      selectedAnswers[question.id];

    if (question.type === "order") {
      if (!Array.isArray(selected)) {
        return false;
      }

      return (
        JSON.stringify(selected) ===
        JSON.stringify(
          question.correctOrder
        )
      );
    }

    return selected === question.answer;
  };

  const correctAnswers =
    allQuestions.filter(
      isQuestionCorrect
    ).length;

  const scorePercent = Math.round(
    (correctAnswers / totalQuestions) *
      100
  );

  const handleChoice = (
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

  const handleAddChunk = (
    questionId,
    chunk
  ) => {
    if (submitted) return;

    setSelectedAnswers(
      (currentAnswers) => {
        const currentOrder =
          currentAnswers[questionId] ||
          [];

        if (
          currentOrder.includes(chunk)
        ) {
          return currentAnswers;
        }

        return {
          ...currentAnswers,
          [questionId]: [
            ...currentOrder,
            chunk,
          ],
        };
      }
    );

    setMessage("");
  };

  const handleRemoveChunk = (
    questionId,
    index
  ) => {
    if (submitted) return;

    setSelectedAnswers(
      (currentAnswers) => {
        const currentOrder =
          currentAnswers[questionId] ||
          [];

        return {
          ...currentAnswers,
          [questionId]:
            currentOrder.filter(
              (_, chunkIndex) =>
                chunkIndex !== index
            ),
        };
      }
    );
  };

  const handleResetOrder = (
    questionId
  ) => {
    if (submitted) return;

    setSelectedAnswers(
      (currentAnswers) => ({
        ...currentAnswers,
        [questionId]: [],
      })
    );
  };

  const hasAnsweredQuestion = (
    question
  ) => {
    const selected =
      selectedAnswers[question.id];

    if (question.type === "order") {
      return (
        Array.isArray(selected) &&
        selected.length ===
          question.chunks.length
      );
    }

    return Boolean(selected);
  };

  const handleSubmit = () => {
    const allAnswered =
      allQuestions.every(
        hasAnsweredQuestion
      );

    if (!allAnswered) {
      setMessage(
        "Please complete all questions before submitting."
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
    <main className="min-h-screen bg-[#F6F6F7] px-4 py-6 text-[#2F446D] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="rounded-[32px] border border-white bg-[#EAECEF] p-6 shadow-lg sm:p-8">
          <button
            type="button"
            onClick={onBack}
            className="rounded-xl bg-white px-4 py-2 font-bold text-[#2F446D] shadow-sm transition hover:-translate-y-0.5"
          >
            ← Back to Unit 2
          </button>

          <p className="mt-6 font-bold uppercase tracking-[0.18em] text-[#6486C6]">
            Unit 2 · Activity 5
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Writing Builder
          </h1>

          <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#42609A]">
            Build clear sentences and organise
            ideas into a logical paragraph
            about city life.
          </p>

          <div className="mt-6 rounded-[24px] bg-white p-5 shadow-sm">
            <p className="font-black text-[#324976]">
              A good paragraph has:
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-[#ECEEF2] p-4">
                <p className="font-bold text-[#324976]">
                  1. Topic sentence
                </p>

                <p className="mt-2 text-sm leading-6 text-[#42609A]">
                  Introduces the main idea.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F2F3F5] p-4">
                <p className="font-bold text-[#3C588D]">
                  2. Supporting ideas
                </p>

                <p className="mt-2 text-sm leading-6 text-[#42609A]">
                  Give reasons, examples, or
                  solutions.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F1F2F5] p-4">
                <p className="font-bold text-[#4565A2]">
                  3. Concluding sentence
                </p>

                <p className="mt-2 text-sm leading-6 text-[#42609A]">
                  Summarises the main message.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-[22px] border border-[#E2E5EA] bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-black text-[#324976]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#42609A]">
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
                      isQuestionCorrect(
                        question
                      );

                    return (
                      <article
                        key={question.id}
                        className="rounded-[26px] border border-[#E2E5EA] bg-white p-5 shadow-md sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-black text-[#6486C6]">
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

                        <p className="mt-4 whitespace-pre-line text-lg font-bold leading-7 text-[#2F446D]">
                          {question.prompt}
                        </p>

                        {question.type ===
                        "choice" ? (
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
                                  "border-[#DBE0EA] bg-[#FBFBFB] text-[#395384] hover:border-[#7D99CF] hover:bg-[#F2F3F6]";

                                if (
                                  isSelected &&
                                  !submitted
                                ) {
                                  optionStyle =
                                    "border-[#4869A8] bg-[#E8EBEF] text-[#293B5E]";
                                }

                                if (
                                  submitted &&
                                  isCorrect
                                ) {
                                  optionStyle =
                                    "border-[#4869A8] bg-[#E6E8ED] text-[#2A3D61]";
                                }

                                if (
                                  submitted &&
                                  isSelected &&
                                  !isCorrect
                                ) {
                                  optionStyle =
                                    "border-[#9DAED0] bg-[#EEF0F3] text-[#44639F]";
                                }

                                return (
                                  <button
                                    key={option}
                                    type="button"
                                    onClick={() =>
                                      handleChoice(
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
                        ) : (
                          <div className="mt-5">
                            <div className="min-h-20 rounded-2xl border-2 border-dashed border-[#B2C0DA] bg-[#F6F7F8] p-4">
                              {Array.isArray(
                                selected
                              ) &&
                              selected.length >
                                0 ? (
                                <div className="flex flex-wrap gap-2">
                                  {selected.map(
                                    (
                                      chunk,
                                      index
                                    ) => (
                                      <button
                                        key={`${chunk}-${index}`}
                                        type="button"
                                        onClick={() =>
                                          handleRemoveChunk(
                                            question.id,
                                            index
                                          )
                                        }
                                        className="rounded-xl bg-white px-3 py-2 font-bold text-[#2F446D] shadow-sm"
                                      >
                                        {chunk}
                                      </button>
                                    )
                                  )}
                                </div>
                              ) : (
                                <p className="text-center font-medium text-[#597CC1]">
                                  Click the parts
                                  below to build
                                  the sentence.
                                </p>
                              )}
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {question.chunks
                                .filter(
                                  (chunk) =>
                                    !(
                                      selected ||
                                      []
                                    ).includes(
                                      chunk
                                    )
                                )
                                .map(
                                  (chunk) => (
                                    <button
                                      key={chunk}
                                      type="button"
                                      onClick={() =>
                                        handleAddChunk(
                                          question.id,
                                          chunk
                                        )
                                      }
                                      className="rounded-xl border border-[#D3D9E4] bg-white px-3 py-2 font-semibold text-[#395384] shadow-sm transition hover:bg-[#EFF0F3]"
                                    >
                                      {chunk}
                                    </button>
                                  )
                                )}
                            </div>

                            {!submitted && (
                              <button
                                type="button"
                                onClick={() =>
                                  handleResetOrder(
                                    question.id
                                  )
                                }
                                className="mt-4 text-sm font-bold text-[#4565A2] underline"
                              >
                                Reset this sentence
                              </button>
                            )}

                            {submitted &&
                              !selectedIsCorrect && (
                                <div className="mt-4 rounded-2xl bg-[#F0F1F4] p-4">
                                  <p className="font-bold text-[#324976]">
                                    Correct order:
                                  </p>

                                  <p className="mt-2 leading-7 text-[#395384]">
                                    {question.correctOrder.join(
                                      " "
                                    )}
                                  </p>
                                </div>
                              )}
                          </div>
                        )}

                        {submitted && (
                          <p
                            className={`mt-4 font-bold ${
                              selectedIsCorrect
                                ? "text-[#324976]"
                                : "text-[#446CB9]"
                            }`}
                          >
                            {selectedIsCorrect
                              ? "✓ Correct"
                              : "✗ Review the correct answer"}
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
          <p className="mt-7 rounded-2xl border border-[#ABBAD6] bg-[#F0F1F4] p-4 text-center font-bold text-[#375080]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] border border-[#D0D7E3] bg-[#EAECF0] p-7 text-center shadow-md">
            <p className="font-bold uppercase tracking-[0.16em] text-[#6486C6]">
              Your result
            </p>

            <p className="mt-2 text-5xl font-black text-[#324976]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#2F446D]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#42609A]">
              {scorePercent >= 85
                ? "Excellent! You can organise ideas into a clear paragraph."
                : scorePercent >= 65
                  ? "Good work! Review sentence order and paragraph structure."
                  : "Review the three parts of a paragraph before trying again."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#364E7D] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#2C4067]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#6486C6] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#4A71BC]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Writing2Page;