import { useState } from "react";

const exerciseGroups = [
  {
    id: "sentence-choice",
    title: "Task 1: Choose the best sentence",
    instruction:
      "Choose the most suitable sentence for each writing situation.",
    questions: [
      {
        id: "choice-1",
        type: "choice",
        level: "Basic",
        prompt:
          "Which is the best topic sentence for a paragraph about healthy routines?",
        answer:
          "A healthy daily routine is important for every teenager.",
        options: [
          "A healthy daily routine is important for every teenager.",
          "My school has three large buildings.",
          "Yesterday, I bought a new notebook.",
        ],
        explanation:
          "A topic sentence clearly introduces the main idea of the paragraph.",
      },
      {
        id: "choice-2",
        type: "choice",
        level: "Basic",
        prompt:
          "Choose the correct first conditional sentence.",
        answer:
          "If you feel stressed, you should take a short break.",
        options: [
          "If you feel stressed, you should take a short break.",
          "If you will feel stressed, you should take a short break.",
          "If you felt stressed, you should takes a short break.",
        ],
        explanation:
          "The if-clause uses the present simple, and should is followed by the base verb.",
      },
      {
        id: "choice-3",
        type: "choice",
        level: "Basic",
        prompt:
          "Which sentence best supports the idea that sleep is important?",
        answer:
          "Getting enough sleep helps teenagers stay alert and focused in class.",
        options: [
          "Getting enough sleep helps teenagers stay alert and focused in class.",
          "Many students carry backpacks to school.",
          "Teenagers enjoy different kinds of music.",
        ],
        explanation:
          "The sentence gives a clear benefit of getting enough sleep.",
      },
      {
        id: "choice-4",
        type: "choice",
        level: "Basic",
        prompt:
          "Which is the best concluding sentence for a paragraph about managing stress?",
        answer:
          "By following these simple habits, teenagers can manage stress more effectively.",
        options: [
          "By following these simple habits, teenagers can manage stress more effectively.",
          "Some school subjects are difficult.",
          "My friend has an assignment tomorrow.",
        ],
        explanation:
          "A concluding sentence summarises the paragraph’s main message.",
      },
      {
        id: "choice-5",
        type: "choice",
        level: "Intermediate",
        prompt:
          "Choose the sentence that correctly expresses ability.",
        answer:
          "If teenagers manage their time properly, they can balance study and relaxation.",
        options: [
          "If teenagers manage their time properly, they can balance study and relaxation.",
          "If teenagers will manage their time, they can balanced study and relaxation.",
          "Teenagers can balance study if they will manage their time properly.",
        ],
        explanation:
          "Can expresses ability or a possible result, and the if-clause uses the present simple.",
      },
    ],
  },
  {
    id: "sentence-building",
    title: "Task 2: Build the sentences",
    instruction:
      "Click the parts in the correct order to form a complete sentence.",
    questions: [
      {
        id: "order-1",
        type: "order",
        level: "Intermediate",
        prompt:
          "Arrange the parts to make a sentence about sleep.",
        chunks: [
          "you should get",
          "If you want",
          "enough sleep.",
          "to stay alert,",
        ],
        correctOrder: [
          "If you want",
          "to stay alert,",
          "you should get",
          "enough sleep.",
        ],
        explanation:
          "The if-clause introduces the condition, and the main clause gives advice.",
      },
      {
        id: "order-2",
        type: "order",
        level: "Intermediate",
        prompt:
          "Arrange the parts to make a sentence about time management.",
        chunks: [
          "if they manage",
          "Teenagers may feel",
          "their time properly.",
          "less stressed",
        ],
        correctOrder: [
          "Teenagers may feel",
          "less stressed",
          "if they manage",
          "their time properly.",
        ],
        explanation:
          "The main clause can come before the if-clause.",
      },
      {
        id: "order-3",
        type: "order",
        level: "Intermediate",
        prompt:
          "Arrange the parts to make a sentence about completing schoolwork.",
        chunks: [
          "you can take",
          "If you finish",
          "a short break.",
          "your assignment early,",
        ],
        correctOrder: [
          "If you finish",
          "your assignment early,",
          "you can take",
          "a short break.",
        ],
        explanation:
          "Can shows what becomes possible after the assignment is completed.",
      },
      {
        id: "order-4",
        type: "order",
        level: "Intermediate",
        prompt:
          "Arrange the parts to make a sentence about a balanced routine.",
        chunks: [
          "study, exercise, rest,",
          "should include",
          "A well-balanced routine",
          "and social time.",
        ],
        correctOrder: [
          "A well-balanced routine",
          "should include",
          "study, exercise, rest,",
          "and social time.",
        ],
        explanation:
          "The sentence lists the important parts of a well-balanced routine.",
      },
      {
        id: "order-5",
        type: "order",
        level: "Advanced",
        prompt:
          "Arrange the parts to make a more complex conditional sentence.",
        chunks: [
          "their work",
          "If students give priority",
          "they may complete",
          "more effectively.",
          "to urgent tasks,",
        ],
        correctOrder: [
          "If students give priority",
          "to urgent tasks,",
          "they may complete",
          "their work",
          "more effectively.",
        ],
        explanation:
          "The condition is followed by a possible result using may.",
      },
    ],
  },
  {
    id: "paragraph-building",
    title: "Task 3: Build a good paragraph",
    instruction:
      "Choose the best order or the most logical paragraph.",
    questions: [
      {
        id: "paragraph-1",
        type: "choice",
        level: "Advanced",
        prompt:
          "Choose the best order for the sentences.\n\nA. As a result, they may feel more relaxed and focused.\nB. Managing stress is important for teenagers.\nC. They should take regular breaks, exercise, and talk to someone they trust.\nD. These habits can support both physical and mental health.",
        answer: "B → C → A → D",
        options: [
          "B → C → A → D",
          "A → D → B → C",
          "C → B → D → A",
        ],
        explanation:
          "The paragraph begins with the topic, gives advice, presents the result, and ends with a general conclusion.",
      },
      {
        id: "paragraph-2",
        type: "choice",
        level: "Advanced",
        prompt:
          "Which paragraph is the most logical and well organised?",
        answer:
          "Teenagers need enough sleep to stay healthy. If they follow a regular sleep schedule, they may feel more alert during the day. They should also keep phones away from their beds to avoid distractions. Therefore, good sleep habits can improve both health and school performance.",
        options: [
          "Teenagers need enough sleep to stay healthy. If they follow a regular sleep schedule, they may feel more alert during the day. They should also keep phones away from their beds to avoid distractions. Therefore, good sleep habits can improve both health and school performance.",
          "Teenagers need sleep. My phone is new. Schoolwork has deadlines. Therefore, breakfast is important.",
          "Good sleep is a conclusion. Teenagers may stay up. A routine is an assignment. Phones sleep at night.",
        ],
        explanation:
          "The correct paragraph has a topic sentence, supporting details, a conditional result, and a conclusion.",
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#DFC9D3] bg-[#F4EFF1] text-[#9B3B68]",
  Intermediate:
    "border-[#E3D0D9] bg-[#F5F2F3] text-[#B34277]",
  Advanced:
    "border-[#E3D0D9] bg-[#F4F0F2] text-[#9C3B68]",
};

function Writing3Page({
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
    chunkIndex
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
              (_, index) =>
                index !== chunkIndex
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

    setMessage("");
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
    <main className="min-h-screen bg-[#FAF9F9] px-4 py-6 text-[#732C4D] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="rounded-[32px] border border-white bg-[#F0EBED] p-6 shadow-lg sm:p-8">
          <button
            type="button"
            onClick={onBack}
            className="rounded-xl bg-white px-4 py-2 font-bold text-[#AD4274] shadow-sm transition hover:-translate-y-0.5"
          >
            ← Back to Unit 3
          </button>

          <p className="mt-6 font-bold uppercase tracking-[0.18em] text-[#C76693]">
            Unit 3 · Activity 5
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Writing Builder
          </h1>

          <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#A84070]">
            Build conditional sentences and
            organise ideas into a clear
            paragraph about healthy living.
          </p>

          <div className="mt-6 rounded-[24px] border border-[#E8D8DF] bg-white/80 p-5 shadow-sm">
            <p className="font-black uppercase tracking-[0.14em] text-[#C76693]">
              Writing plan
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-[#F4F0F2] p-4">
                <p className="font-black text-[#AD4274]">
                  1. Topic sentence
                </p>

                <p className="mt-2 text-sm font-medium leading-6 text-[#A84070]">
                  Introduce the healthy habit
                  or problem.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F5F2F3] p-4">
                <p className="font-black text-[#BA457C]">
                  2. Supporting ideas
                </p>

                <p className="mt-2 text-sm font-medium leading-6 text-[#A84070]">
                  Give advice, reasons, or
                  possible results.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F4F0F2] p-4">
                <p className="font-black text-[#9E3C6A]">
                  3. Conclusion
                </p>

                <p className="mt-2 text-sm font-medium leading-6 text-[#A84070]">
                  Summarise the main benefit
                  or message.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-[#F6F5F5] p-4">
              <p className="font-bold text-[#933862]">
                Useful pattern
              </p>

              <p className="mt-2 font-medium leading-6 text-[#A84070]">
                If + present simple, subject +
                will / can / may / might /
                should / must + base verb.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-8 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-[22px] border border-[#EBDDE4] bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-black text-[#AD4274]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#A84070]">
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
                        className="rounded-[26px] border border-[#EBDDE4] bg-white p-5 shadow-md sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-black text-[#C76693]">
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

                        <p className="mt-4 whitespace-pre-line text-lg font-bold leading-7 text-[#732C4D]">
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
                                  "border-[#E9DBE2] bg-[#FCFBFB] text-[#973A65] hover:border-[#D181A6] hover:bg-[#F6F2F4]";

                                if (
                                  isSelected &&
                                  !submitted
                                ) {
                                  optionStyle =
                                    "border-[#C15889] bg-[#F0EBED] text-[#8A345C]";
                                }

                                if (
                                  submitted &&
                                  isCorrect
                                ) {
                                  optionStyle =
                                    "border-[#C35E8D] bg-[#F1ECEE] text-[#813156]";
                                }

                                if (
                                  submitted &&
                                  isSelected &&
                                  !isCorrect
                                ) {
                                  optionStyle =
                                    "border-[#C990AB] bg-[#F3EEF0] text-[#AA4172]";
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
                            <div className="min-h-24 rounded-2xl border-2 border-dashed border-[#DDC6D1] bg-[#F8F7F7] p-4">
                              {Array.isArray(
                                selected
                              ) &&
                              selected.length >
                                0 ? (
                                <div className="flex flex-wrap gap-2">
                                  {selected.map(
                                    (
                                      chunk,
                                      chunkIndex
                                    ) => (
                                      <button
                                        key={`${chunk}-${chunkIndex}`}
                                        type="button"
                                        onClick={() =>
                                          handleRemoveChunk(
                                            question.id,
                                            chunkIndex
                                          )
                                        }
                                        className="rounded-xl border border-[#E9DAE1] bg-white px-3 py-2 font-bold text-[#8B355D] shadow-sm transition hover:bg-[#F6F2F4]"
                                      >
                                        {chunk}
                                      </button>
                                    )
                                  )}
                                </div>
                              ) : (
                                <p className="text-center font-medium text-[#9A838E]">
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
                                      className="rounded-xl border border-[#E4D3DB] bg-white px-3 py-2 font-semibold text-[#973A65] shadow-sm transition hover:border-[#D181A6] hover:bg-[#F6F2F4]"
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
                                className="mt-4 text-sm font-bold text-[#BE5083] underline"
                              >
                                Reset this sentence
                              </button>
                            )}

                            {submitted &&
                              !selectedIsCorrect && (
                                <div className="mt-4 rounded-2xl bg-[#F3EEF0] p-4">
                                  <p className="font-bold text-[#923862]">
                                    Correct order
                                  </p>

                                  <p className="mt-2 leading-7 text-[#A84070]">
                                    {question.correctOrder.join(
                                      " "
                                    )}
                                  </p>
                                </div>
                              )}
                          </div>
                        )}

                        {submitted && (
                          <div
                            className={`mt-4 rounded-2xl p-4 ${
                              selectedIsCorrect
                                ? "bg-[#F3EEF0]"
                                : "bg-[#F6F3F4]"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                selectedIsCorrect
                                  ? "text-[#923862]"
                                  : "text-[#B44378]"
                              }`}
                            >
                              {selectedIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this answer"}
                            </p>

                            <p className="mt-1 leading-6 text-[#A84070]">
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
          <p className="mt-7 rounded-2xl border border-[#D8ADC1] bg-[#F4EFF1] p-4 text-center font-bold text-[#88345B]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] border border-[#E4D2DA] bg-[#F3EEF0] p-7 text-center shadow-md">
            <p className="font-bold uppercase tracking-[0.16em] text-[#C76693]">
              Your result
            </p>

            <p className="mt-2 text-5xl font-black text-[#AD4274]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#732C4D]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#A84070]">
              {scorePercent >= 85
                ? "Excellent! You can build and organise healthy-living paragraphs confidently."
                : scorePercent >= 65
                  ? "Good work! Review sentence order and paragraph organisation."
                  : "Review the writing plan and conditional structure before trying again."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#AD4274] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#923761]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#C76693] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#BD4D81]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Writing3Page;