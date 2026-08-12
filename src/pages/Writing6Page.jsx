import { useState } from "react";

const questionGroups = [
  {
    id: "basic",
    title: "Part 1: Sentence Foundations",
    instruction:
      "Choose the sentence that is grammatically correct.",
    questions: [
      {
        id: "basic-1",
        type: "choice",
        level: "Basic",
        prompt:
          "Choose the correct sentence from the clues:\n\nNam / learn / speak French / by / watch videos / practise every day.",
        options: [
          "Nam learns to speak French by watching videos and practising every day.",
          "Nam learns speaking French by watch videos and practise every day.",
          "Nam learn to speak French by watched videos and practising every day.",
        ],
        answer:
          "Nam learns to speak French by watching videos and practising every day.",
        explanation:
          "After “by”, we use V-ing: by watching videos and practising every day.",
      },
      {
        id: "basic-2",
        type: "choice",
        level: "Basic",
        prompt:
          "Choose the correct sentence from the clues:\n\nAnna / not mind / cook / dinner / tonight.",
        options: [
          "Anna does not mind cooking dinner tonight.",
          "Anna does not mind to cook dinner tonight.",
          "Anna not minds cooking dinner tonight.",
        ],
        answer:
          "Anna does not mind cooking dinner tonight.",
        explanation:
          "Mind is followed by V-ing: mind cooking.",
      },
      {
        id: "basic-3",
        type: "choice",
        level: "Basic",
        prompt:
          "Choose the correct sentence from the clues:\n\nWe / plan / have / picnic / park / if / weather / nice.",
        options: [
          "We plan to have a picnic in the park if the weather is nice.",
          "We plan having a picnic in park if weather nice.",
          "We plan have a picnic at the park if the weather be nice.",
        ],
        answer:
          "We plan to have a picnic in the park if the weather is nice.",
        explanation:
          "Plan is followed by a to-infinitive: plan to have.",
      },
      {
        id: "basic-4",
        type: "choice",
        level: "Basic",
        prompt:
          "Choose the correct request.",
        options: [
          "Do you mind helping me carry these groceries upstairs?",
          "Do you mind to help me carrying these groceries upstairs?",
          "Are you mind helping me to carried these groceries upstairs?",
        ],
        answer:
          "Do you mind helping me carry these groceries upstairs?",
        explanation:
          "The correct structure is “Do you mind + V-ing?”",
      },
    ],
  },
  {
    id: "intermediate",
    title: "Part 2: Build the Sentences",
    instruction:
      "Click the chunks in the correct order. Click a selected chunk to remove it.",
    questions: [
      {
        id: "intermediate-1",
        type: "order",
        level: "Intermediate",
        prompt:
          "Build a sentence about a promise.",
        items: [
          {
            id: "a",
            text: "while riding my bike",
          },
          {
            id: "b",
            text: "I promise",
          },
          {
            id: "c",
            text: "in the park.",
          },
          {
            id: "d",
            text: "to be careful",
          },
        ],
        answer: ["b", "d", "a", "c"],
        correctVersion:
          "I promise to be careful while riding my bike in the park.",
        explanation:
          "Promise is followed by a to-infinitive: promise to be.",
      },
      {
        id: "intermediate-2",
        type: "order",
        level: "Intermediate",
        prompt:
          "Build a sentence about a leisure activity.",
        items: [
          {
            id: "a",
            text: "while studying.",
          },
          {
            id: "b",
            text: "My sister",
          },
          {
            id: "c",
            text: "fancies listening to",
          },
          {
            id: "d",
            text: "classical music",
          },
        ],
        answer: ["b", "c", "d", "a"],
        correctVersion:
          "My sister fancies listening to classical music while studying.",
        explanation:
          "Fancy is followed by V-ing: fancies listening.",
      },
      {
        id: "intermediate-3",
        type: "order",
        level: "Intermediate",
        prompt:
          "Build a sentence about a family decision.",
        items: [
          {
            id: "a",
            text: "the living room",
          },
          {
            id: "b",
            text: "ourselves.",
          },
          {
            id: "c",
            text: "We decided",
          },
          {
            id: "d",
            text: "to decorate",
          },
        ],
        answer: ["c", "d", "a", "b"],
        correctVersion:
          "We decided to decorate the living room ourselves.",
        explanation:
          "Decide is followed by a to-infinitive: decided to decorate.",
      },
      {
        id: "intermediate-4",
        type: "order",
        level: "Intermediate",
        prompt:
          "Build a sentence about home improvement.",
        items: [
          {
            id: "a",
            text: "their old kitchen.",
          },
          {
            id: "b",
            text: "They are considering",
          },
          {
            id: "c",
            text: "renovating",
          },
        ],
        answer: ["b", "c", "a"],
        correctVersion:
          "They are considering renovating their old kitchen.",
        explanation:
          "Consider is followed by V-ing: considering renovating.",
      },
      {
        id: "intermediate-5",
        type: "order",
        level: "Intermediate",
        prompt:
          "Build a sentence giving environmental advice.",
        items: [
          {
            id: "a",
            text: "because it is",
          },
          {
            id: "b",
            text: "We should avoid",
          },
          {
            id: "c",
            text: "a precious resource.",
          },
          {
            id: "d",
            text: "wasting water",
          },
        ],
        answer: ["b", "d", "a", "c"],
        correctVersion:
          "We should avoid wasting water because it is a precious resource.",
        explanation:
          "Avoid is followed by V-ing: avoid wasting.",
      },
    ],
  },
  {
    id: "advanced",
    title: "Part 3: Paragraph & Letter Builder",
    instruction:
      "Arrange the sentences to create a complete paragraph or letter.",
    questions: [
      {
        id: "advanced-1",
        type: "order",
        level: "Advanced",
        prompt:
          "Arrange the ideas into a paragraph about preserving culture.",
        items: [
          {
            id: "a",
            text:
              "In addition, cultural preservation creates a sense of community and belonging.",
          },
          {
            id: "b",
            text:
              "In conclusion, preserving culture is essential for building a strong and inclusive society.",
          },
          {
            id: "c",
            text:
              "It allows us to appreciate traditions, customs, and art passed down through generations.",
          },
          {
            id: "d",
            text:
              "To begin with, preserving culture helps us connect with our roots and understand our history.",
          },
          {
            id: "e",
            text:
              "It also allows people to learn from one another and appreciate different experiences.",
          },
          {
            id: "f",
            text:
              "Finally, cultural preservation promotes diversity and understanding between groups.",
          },
        ],
        answer: ["d", "c", "a", "f", "e", "b"],
        correctVersion:
          "To begin with → explanation → additional benefit → final benefit → supporting idea → conclusion.",
        explanation:
          "A clear paragraph begins with the main idea, develops supporting points, and ends with a conclusion.",
      },
      {
        id: "advanced-2",
        type: "order",
        level: "Advanced",
        prompt:
          "Arrange the sentences into a paragraph about changes in Vietnamese lifestyles.",
        items: [
          {
            id: "a",
            text:
              "Secondly, technology has transformed communication and entertainment.",
          },
          {
            id: "b",
            text:
              "Lastly, globalisation has introduced Vietnamese people to diverse cultures and ideas.",
          },
          {
            id: "c",
            text:
              "The lifestyle of Vietnamese people has changed significantly compared with the past.",
          },
          {
            id: "d",
            text:
              "In conclusion, Vietnamese lifestyles have become more modern, fast-paced, and globally connected.",
          },
          {
            id: "e",
            text:
              "Firstly, urbanisation and economic growth have created a faster-paced lifestyle.",
          },
        ],
        answer: ["c", "e", "a", "b", "d"],
        correctVersion:
          "Introduction → Firstly → Secondly → Lastly → Conclusion.",
        explanation:
          "Sequence markers organise the ideas logically.",
      },
      {
        id: "advanced-3",
        type: "order",
        level: "Advanced",
        prompt:
          "Arrange the sentences into a complete informal letter.",
        items: [
          {
            id: "a",
            text:
              "First, farmers in the past mainly relied on traditional tools such as ploughs and sickles.",
          },
          {
            id: "b",
            text:
              "Today, many farmers use tractors, machines, and modern irrigation systems.",
          },
          {
            id: "c",
            text: "Best regards, Thanh",
          },
          {
            id: "d",
            text:
              "Dear Hoa, I hope you are well. I have been thinking about how farming in Vietnam has changed.",
          },
          {
            id: "e",
            text:
              "It is wonderful to see how progress is improving farmers' lives. I hope to hear from you soon.",
          },
          {
            id: "f",
            text:
              "These changes have made farming more efficient and increased food production.",
          },
        ],
        answer: ["d", "a", "b", "f", "e", "c"],
        correctVersion:
          "Greeting and introduction → past → present → result → closing message → signature.",
        explanation:
          "An informal letter begins with a greeting and ends with a closing and signature.",
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

function arraysMatch(firstArray, secondArray) {
  return (
    firstArray.length === secondArray.length &&
    firstArray.every(
      (item, index) =>
        item === secondArray[index]
    )
  );
}

function Writing6Page({
  onBack,
  onComplete,
}) {
  const [selectedChoices, setSelectedChoices] =
    useState({});

  const [orderedAnswers, setOrderedAnswers] =
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

  const getOrderedIds = (questionId) =>
    orderedAnswers[questionId] || [];

  const isQuestionCorrect = (
    question
  ) => {
    if (question.type === "choice") {
      return (
        selectedChoices[question.id] ===
        question.answer
      );
    }

    return arraysMatch(
      getOrderedIds(question.id),
      question.answer
    );
  };

  const correctAnswers =
    allQuestions.filter(
      isQuestionCorrect
    ).length;

  const scorePercent = Math.round(
    (correctAnswers / totalQuestions) *
      100
  );

  const handleChoiceSelect = (
    questionId,
    option
  ) => {
    if (submitted) return;

    setSelectedChoices(
      (currentChoices) => ({
        ...currentChoices,
        [questionId]: option,
      })
    );

    setMessage("");
  };

  const handleAddOrderItem = (
    questionId,
    itemId
  ) => {
    if (submitted) return;

    setOrderedAnswers(
      (currentAnswers) => {
        const currentOrder =
          currentAnswers[questionId] || [];

        if (
          currentOrder.includes(itemId)
        ) {
          return currentAnswers;
        }

        return {
          ...currentAnswers,
          [questionId]: [
            ...currentOrder,
            itemId,
          ],
        };
      }
    );

    setMessage("");
  };

  const handleRemoveOrderItem = (
    questionId,
    itemId
  ) => {
    if (submitted) return;

    setOrderedAnswers(
      (currentAnswers) => ({
        ...currentAnswers,
        [questionId]: (
          currentAnswers[questionId] || []
        ).filter(
          (currentItemId) =>
            currentItemId !== itemId
        ),
      })
    );

    setMessage("");
  };

  const handleResetOrder = (
    questionId
  ) => {
    if (submitted) return;

    setOrderedAnswers(
      (currentAnswers) => ({
        ...currentAnswers,
        [questionId]: [],
      })
    );

    setMessage("");
  };

  const isQuestionAnswered = (
    question
  ) => {
    if (question.type === "choice") {
      return Boolean(
        selectedChoices[question.id]
      );
    }

    return (
      getOrderedIds(question.id).length ===
      question.answer.length
    );
  };

  const handleSubmit = () => {
    const allAnswered =
      allQuestions.every(
        isQuestionAnswered
      );

    if (!allAnswered) {
      setMessage(
        "Please complete all 12 tasks before submitting."
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
    setSelectedChoices({});
    setOrderedAnswers({});
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
              Unit 6 · Activity 5
            </p>

            <h1 className="mt-2 font-serif text-4xl font-bold italic text-[#3F4E21] sm:text-5xl">
              Writing Builder
            </h1>

            <p className="mt-4 max-w-3xl text-lg font-medium leading-7 text-[#777F68]">
              Build accurate sentences,
              organise paragraphs, and arrange
              an informal letter about
              Vietnamese lifestyles in the past
              and present.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <article className="rounded-[22px] border border-[#CFDCB6] bg-white/75 p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#425223]">
                  12
                </p>

                <p className="mt-1 text-sm font-bold text-[#777F68]">
                  Writing tasks
                </p>
              </article>

              <article className="rounded-[22px] border border-[#BECF9C] bg-[#E9ECE4] p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#7B9841]">
                  0
                </p>

                <p className="mt-1 text-sm font-bold text-[#777F68]">
                  Typing required
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

        <section className="mt-7 rounded-[28px] border border-[#CFDCB6] bg-[#FBFBFA] p-5 shadow-sm">
          <p className="font-black uppercase tracking-[0.15em] text-[#6F893B]">
            How to complete the activity
          </p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-[#F0F2EC] p-4">
              <p className="font-black text-[#425223]">
                1. Choose
              </p>

              <p className="mt-1 text-sm font-medium leading-6 text-[#777F68]">
                Select the correct sentence in
                Part 1.
              </p>
            </div>

            <div className="rounded-2xl bg-[#E9ECE4] p-4">
              <p className="font-black text-[#688137]">
                2. Arrange
              </p>

              <p className="mt-1 text-sm font-medium leading-6 text-[#777F68]">
                Click chunks to build sentences
                in Part 2.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F3F4F0] p-4">
              <p className="font-black text-[#83A246]">
                3. Organise
              </p>

              <p className="mt-1 text-sm font-medium leading-6 text-[#777F68]">
                Put paragraph and letter ideas
                in order in Part 3.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 space-y-10">
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
                    const questionIsCorrect =
                      isQuestionCorrect(
                        question
                      );

                    const orderedIds =
                      getOrderedIds(
                        question.id
                      );

                    const orderedItems =
                      orderedIds
                        .map((itemId) =>
                          question.items?.find(
                            (item) =>
                              item.id ===
                              itemId
                          )
                        )
                        .filter(Boolean);

                    const availableItems =
                      question.items?.filter(
                        (item) =>
                          !orderedIds.includes(
                            item.id
                          )
                      ) || [];

                    return (
                      <article
                        key={question.id}
                        className="rounded-[28px] border border-[#CFDCB6] bg-[#FBFBFA] p-5 shadow-[0_10px_24px_rgba(66,82,35,0.07)] sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-black text-[#6F893B]">
                            Task{" "}
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

                        {question.type ===
                          "choice" && (
                          <div className="mt-4 grid gap-3">
                            {question.options.map(
                              (option) => {
                                const isSelected =
                                  selectedChoices[
                                    question.id
                                  ] === option;

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
                                      handleChoiceSelect(
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
                        )}

                        {question.type ===
                          "order" && (
                          <div className="mt-5">
                            <div className="rounded-[22px] border border-dashed border-[#B7CA91] bg-[#F6F7F5] p-4">
                              <div className="flex flex-wrap items-center justify-between gap-3">
                                <p className="text-sm font-black uppercase tracking-[0.12em] text-[#6F893B]">
                                  Your order
                                </p>

                                {!submitted && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleResetOrder(
                                        question.id
                                      )
                                    }
                                    className="rounded-lg bg-white px-3 py-1.5 text-xs font-black text-[#96BC49] shadow-sm"
                                  >
                                    Reset
                                  </button>
                                )}
                              </div>

                              {orderedItems.length ===
                              0 ? (
                                <p className="mt-4 text-sm font-medium italic text-[#929983]">
                                  Click the
                                  available chunks
                                  below.
                                </p>
                              ) : (
                                <div className="mt-4 space-y-2">
                                  {orderedItems.map(
                                    (
                                      item,
                                      index
                                    ) => (
                                      <button
                                        key={
                                          item.id
                                        }
                                        type="button"
                                        onClick={() =>
                                          handleRemoveOrderItem(
                                            question.id,
                                            item.id
                                          )
                                        }
                                        className="flex w-full items-start gap-3 rounded-xl border border-[#CFDCB6] bg-white px-4 py-3 text-left font-semibold leading-6 text-[#6C8639] shadow-sm"
                                      >
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#425223] text-xs font-black text-white">
                                          {index +
                                            1}
                                        </span>

                                        <span>
                                          {
                                            item.text
                                          }
                                        </span>
                                      </button>
                                    )
                                  )}
                                </div>
                              )}
                            </div>

                            {!submitted && (
                              <div className="mt-4 flex flex-wrap gap-3">
                                {availableItems.map(
                                  (item) => (
                                    <button
                                      key={
                                        item.id
                                      }
                                      type="button"
                                      onClick={() =>
                                        handleAddOrderItem(
                                          question.id,
                                          item.id
                                        )
                                      }
                                      className="rounded-xl border border-[#BBCD97] bg-[#E9ECE4] px-4 py-3 text-left font-bold leading-6 text-[#586D2F] transition hover:-translate-y-0.5 hover:border-[#A1C35E] hover:bg-[#DDE3D1]"
                                    >
                                      +{" "}
                                      {
                                        item.text
                                      }
                                    </button>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        {submitted && (
                          <div
                            className={`mt-5 rounded-2xl p-4 ${
                              questionIsCorrect
                                ? "bg-[#EEF0EA]"
                                : "bg-[#F3F4F0]"
                            }`}
                          >
                            <p
                              className={`font-black ${
                                questionIsCorrect
                                  ? "text-[#586D2F]"
                                  : "text-[#83A246]"
                              }`}
                            >
                              {questionIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this task"}
                            </p>

                            {question.type ===
                              "order" && (
                              <p className="mt-2 font-semibold leading-6 text-[#6C8639]">
                                Correct order:{" "}
                                {
                                  question.correctVersion
                                }
                              </p>
                            )}

                            <p className="mt-2 leading-6 text-[#777F68]">
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
              Your writing result
            </p>

            <p className="mt-2 font-serif text-6xl font-bold italic text-[#425223]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#3F4E21]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium leading-7 text-[#777F68]">
              {scorePercent >= 85
                ? "Excellent! You can build sentences and organise writing clearly."
                : scorePercent >= 65
                  ? "Good work! Review the order of ideas and the verbs followed by infinitives or gerunds."
                  : "Review the model sentences, connectors, and paragraph structure before trying again."}
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
              Submit Writing Tasks
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

export default Writing6Page;