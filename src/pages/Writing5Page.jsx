import { useState } from "react";

const exerciseGroups = [
  {
    id: "sentence-choice",
    title: "Task 1: Choose the Best Sentence",
    instruction:
      "Choose the sentence that is grammatically correct.",
    questions: [
      {
        id: "basic-1",
        type: "choice",
        level: "Basic",
        topic: "Present Perfect",
        prompt:
          "Choose the correct sentence.",
        answer:
          "I have already spoken to the manager about the issue.",
        options: [
          "I have already spoken to the manager about the issue.",
          "I already spoke to the manager since this morning.",
          "I have already speak to the manager about the issue.",
        ],
        explanation:
          "The present perfect uses have plus the past participle spoken.",
      },
      {
        id: "basic-2",
        type: "choice",
        level: "Basic",
        topic: "Since",
        prompt:
          "Choose the correct sentence.",
        answer:
          "He has played the guitar since he was a child.",
        options: [
          "He has played the guitar since he was a child.",
          "He played the guitar since he has been a child.",
          "He has play the guitar for he was a child.",
        ],
        explanation:
          "Since introduces the starting point, and the since-clause uses the past simple.",
      },
      {
        id: "basic-3",
        type: "choice",
        level: "Basic",
        topic: "Recently",
        prompt:
          "Which sentence is correct?",
        answer:
          "The restaurant has recently opened in our neighbourhood.",
        options: [
          "The restaurant has recently opened in our neighbourhood.",
          "The restaurant recently has open in our neighbourhood.",
          "The restaurant has recently opening in our neighbourhood.",
        ],
        explanation:
          "Has recently opened is the correct present perfect form.",
      },
      {
        id: "basic-4",
        type: "choice",
        level: "Basic",
        topic: "Yet",
        prompt:
          "Choose the correct negative sentence.",
        answer:
          "I have not received any response to my application yet.",
        options: [
          "I have not received any response to my application yet.",
          "I did not received any response yet.",
          "I have not receive any response already.",
        ],
        explanation:
          "Yet is commonly placed at the end of a negative present perfect sentence.",
      },
    ],
  },
  {
    id: "sentence-building",
    title: "Task 2: Build the Sentences",
    instruction:
      "Click the parts in the correct order to form a complete sentence.",
    questions: [
      {
        id: "intermediate-1",
        type: "order",
        level: "Intermediate",
        topic: "Life Experience",
        prompt:
          "Arrange the parts to make a present perfect question.",
        chunks: [
          "to a foreign country",
          "Have you ever travelled",
          "and experienced",
          "a different culture?",
        ],
        correctOrder: [
          "Have you ever travelled",
          "to a foreign country",
          "and experienced",
          "a different culture?",
        ],
        explanation:
          "A present perfect question begins with Have you, followed by past participles.",
      },
      {
        id: "intermediate-2",
        type: "order",
        level: "Intermediate",
        topic: "Already",
        prompt:
          "Arrange the parts to describe a recent achievement.",
        chunks: [
          "this year.",
          "three different countries",
          "She has already visited",
        ],
        correctOrder: [
          "She has already visited",
          "three different countries",
          "this year.",
        ],
        explanation:
          "Already usually appears between has or have and the past participle.",
      },
      {
        id: "intermediate-3",
        type: "order",
        level: "Intermediate",
        topic: "For",
        prompt:
          "Arrange the parts to describe an action continuing until now.",
        chunks: [
          "for seven years.",
          "in this city",
          "We have lived",
        ],
        correctOrder: [
          "We have lived",
          "in this city",
          "for seven years.",
        ],
        explanation:
          "For is used with a period of time such as seven years.",
      },
      {
        id: "intermediate-4",
        type: "order",
        level: "Intermediate",
        topic: "Since",
        prompt:
          "Arrange the parts to describe personal growth.",
        chunks: [
          "since I joined",
          "My confidence has improved",
          "the adventure course.",
        ],
        correctOrder: [
          "My confidence has improved",
          "since I joined",
          "the adventure course.",
        ],
        explanation:
          "The present perfect is followed by since plus a past simple starting event.",
      },
      {
        id: "intermediate-5",
        type: "order",
        level: "Intermediate",
        topic: "Yet",
        prompt:
          "Arrange the parts to make a negative sentence.",
        chunks: [
          "their experience project",
          "The students have not finished",
          "yet.",
        ],
        correctOrder: [
          "The students have not finished",
          "their experience project",
          "yet.",
        ],
        explanation:
          "Yet normally appears at the end of negative present perfect sentences.",
      },
    ],
  },
  {
    id: "organise-writing",
    title: "Task 3: Organise the Writing",
    instruction:
      "Choose the best transformation or the most logical order.",
    questions: [
      {
        id: "advanced-1",
        type: "choice",
        level: "Advanced",
        topic: "Sentence Transformation",
        prompt:
          "Choose the sentence with the same meaning.\n\nI started working at this campsite six months ago.",
        answer:
          "I have worked at this campsite for six months.",
        options: [
          "I have worked at this campsite for six months.",
          "I worked at this campsite since six months.",
          "I have started working at this campsite six months ago.",
        ],
        explanation:
          "An action that started in the past and continues now uses the present perfect with for.",
      },
      {
        id: "advanced-2",
        type: "choice",
        level: "Advanced",
        topic: "Paragraph Order",
        prompt:
          "Choose the best order for the paragraph.\n\nA. As a result, I have become more confident and independent.\nB. Last month, I joined a three-day team-building course with my classmates.\nC. First, we put up tents and learned how to prepare meals outdoors.\nD. Finally, we completed a difficult climbing challenge together.",
        answer: "B → C → D → A",
        options: [
          "B → C → D → A",
          "C → A → B → D",
          "A → D → C → B",
        ],
        explanation:
          "The paragraph starts with the experience, continues with activities, and finishes with its result.",
      },
      {
        id: "advanced-3",
        type: "choice",
        level: "Advanced",
        topic: "Letter Order",
        prompt:
          "Choose the best order for the letter.\n\nA. We went birdwatching, explored the forest, and cooked together at the campsite.\nB. Best wishes, Minh\nC. Dear Alex, I hope you are well. I have just returned from an amazing eco-tour.\nD. Have you ever joined a trip like this? Please write back soon.\nE. The experience has taught me a lot about teamwork and protecting nature.",
        answer: "C → A → E → D → B",
        options: [
          "C → A → E → D → B",
          "A → C → B → E → D",
          "C → D → B → A → E",
        ],
        explanation:
          "A letter begins with a greeting, gives details and reflection, asks a final question, and ends with a closing.",
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#CBB174] bg-[#ECEAE5] text-[#81641E]",
  Intermediate:
    "border-[#D2C3A1] bg-[#EDEAE5] text-[#8C6C21]",
  Advanced:
    "border-[#D2C4A2] bg-[#EFEEEA] text-[#8B6C21]",
};

const topicStyles = {
  "Present Perfect":
    "bg-[#E3DED1] text-[#7F621E]",
  Since:
    "bg-[#EDEAE5] text-[#8C6C21]",
  Recently:
    "bg-[#ECEAE5] text-[#81641E]",
  Yet:
    "bg-[#EDEBE6] text-[#8B6C21]",
  "Life Experience":
    "bg-[#EEECE7] text-[#695119]",
  Already:
    "bg-[#E3DED1] text-[#7F621E]",
  For:
    "bg-[#ECEAE5] text-[#81641E]",
  "Sentence Transformation":
    "bg-[#EDEBE6] text-[#8B6C21]",
  "Paragraph Order":
    "bg-[#EEECE7] text-[#695119]",
  "Letter Order":
    "bg-[#E3DED1] text-[#7F621E]",
};

function Writing5Page({
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

    setMessage("");
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
    <main className="min-h-screen bg-[#EAE6DD] px-4 py-6 text-[#644D17] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="relative overflow-hidden rounded-[34px] border border-[#CBB174] bg-gradient-to-br from-[#FCFCFB] via-[#F5F4F2] to-[#EAE8E3] p-6 shadow-[0_14px_35px_rgba(115,89,27,0.12)] sm:p-8">
          <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-[#D7CAAB]/35" />

          <div className="pointer-events-none absolute right-8 top-20 select-none text-[130px] font-black leading-none text-[#C7AB69]/10">
            05
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl border border-[#D6C9AA] bg-white px-4 py-2 font-bold text-[#695119] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F5F4F2]"
            >
              ← Back to Unit 5
            </button>

            <p className="mt-6 font-black uppercase tracking-[0.18em] text-[#9C7925]">
              Unit 5 · Activity 5
            </p>

            <h1 className="mt-2 font-serif text-4xl font-bold italic text-[#644D17] sm:text-5xl">
              Writing Builder
            </h1>

            <p className="mt-4 max-w-2xl text-lg font-medium leading-7 text-[#807969]">
              Build present perfect sentences,
              transform ideas, and organise
              paragraphs and letters about
              memorable experiences.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <article className="rounded-[22px] border border-[#D5C8A8] bg-[#ECEAE5] p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#695119]">
                  12
                </p>

                <p className="mt-1 text-sm font-bold text-[#807969]">
                  Questions
                </p>
              </article>

              <article className="rounded-[22px] border border-[#D5C8A8] bg-[#ECEAE5] p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#886920]">
                  0
                </p>

                <p className="mt-1 text-sm font-bold text-[#807969]">
                  Typed answers
                </p>
              </article>

              <article className="rounded-[22px] border border-[#D5C8A8] bg-[#ECEAE5] p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#967423]">
                  3
                </p>

                <p className="mt-1 text-sm font-bold text-[#807969]">
                  Writing skills
                </p>
              </article>
            </div>
          </div>
        </header>

        <section className="mt-7 rounded-[30px] border border-[#CBB174] bg-[#FCFCFB] p-5 shadow-[0_12px_28px_rgba(113,87,26,0.09)] sm:p-6">
          <p className="font-black uppercase tracking-[0.14em] text-[#9C7925]">
            Writing toolkit
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold italic text-[#644D17]">
            Grow your ideas step by step
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <article className="rounded-[22px] border border-[#D5C8A8] bg-[#ECEAE5] p-4">
              <p className="font-black text-[#695119]">
                1. Build
              </p>

              <p className="mt-2 text-sm font-medium leading-6 text-[#807969]">
                Check the subject, have or has,
                past participle, and time
                expression.
              </p>
            </article>

            <article className="rounded-[22px] border border-[#D5C8A8] bg-[#ECEAE5] p-4">
              <p className="font-black text-[#886920]">
                2. Connect
              </p>

              <p className="mt-2 text-sm font-medium leading-6 text-[#807969]">
                Use since, for, already, yet,
                first, finally, and as a result.
              </p>
            </article>

            <article className="rounded-[22px] border border-[#D5C8A8] bg-[#ECEAE5] p-4">
              <p className="font-black text-[#967423]">
                3. Organise
              </p>

              <p className="mt-2 text-sm font-medium leading-6 text-[#807969]">
                Start with the main experience,
                add details, and finish with a
                result or reflection.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-8 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-[24px] border border-[#CBB174] bg-[#FCFCFB] p-5 shadow-sm">
                <h2 className="font-serif text-3xl font-bold italic text-[#644D17]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#807969]">
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
                        className="rounded-[28px] border border-[#CBB174] bg-[#FCFCFB] p-5 shadow-[0_10px_24px_rgba(113,87,26,0.08)] sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-black text-[#9C7925]">
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

                        <p className="mt-4 whitespace-pre-line text-lg font-bold leading-7 text-[#644D17]">
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
                                  "border-[#DACEB1] bg-[#FAFAF9] text-[#9C7824] hover:border-[#C6992E] hover:bg-[#ECEAE5]";

                                if (
                                  isSelected &&
                                  !submitted
                                ) {
                                  optionStyle =
                                    "border-[#9C7925] bg-[#EAE6DD] text-[#695119]";
                                }

                                if (
                                  submitted &&
                                  isCorrect
                                ) {
                                  optionStyle =
                                    "border-[#C1A258] bg-[#EDEBE6] text-[#7A5F1D]";
                                }

                                if (
                                  submitted &&
                                  isSelected &&
                                  !isCorrect
                                ) {
                                  optionStyle =
                                    "border-[#D1BA82] bg-[#F3F1EE] text-[#B1892A]";
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
                            <div className="min-h-24 rounded-[22px] border-2 border-dashed border-[#CBB174] bg-[#ECEAE5] p-4">
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
                                        className="rounded-xl border border-[#CBB174] bg-white px-3 py-2 font-bold text-[#695119] shadow-sm transition hover:bg-[#EAE6DD]"
                                      >
                                        {chunk}
                                      </button>
                                    )
                                  )}
                                </div>
                              ) : (
                                <p className="text-center font-medium text-[#BA9745]">
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
                                      className="rounded-xl border border-[#DACEB1] bg-white px-3 py-2 font-semibold text-[#9C7824] shadow-sm transition hover:border-[#C6992E] hover:bg-[#ECEAE5]"
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
                                className="mt-4 text-sm font-bold text-[#886920] underline"
                              >
                                Reset this sentence
                              </button>
                            )}

                            {submitted &&
                              !selectedIsCorrect && (
                                <div className="mt-4 rounded-2xl bg-[#EDEBE6] p-4">
                                  <p className="font-bold text-[#7A5F1D]">
                                    Correct sentence
                                  </p>

                                  <p className="mt-2 leading-7 text-[#9C7824]">
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
                                ? "bg-[#EDEBE6]"
                                : "bg-[#F3F1EE]"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                selectedIsCorrect
                                  ? "text-[#7A5F1D]"
                                  : "text-[#B1892A]"
                              }`}
                            >
                              {selectedIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this answer"}
                            </p>

                            <p className="mt-1 leading-6 text-[#807969]">
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
          <p className="mt-7 rounded-2xl border border-[#CDB479] bg-[#EFEEEA] p-4 text-center font-bold text-[#7D601D]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[30px] border border-[#CBB174] bg-[#FCFCFB] p-7 text-center shadow-[0_12px_28px_rgba(113,87,26,0.09)]">
            <p className="font-black uppercase tracking-[0.16em] text-[#9C7925]">
              Your result
            </p>

            <p className="mt-2 font-serif text-6xl font-bold italic text-[#695119]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#644D17]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#807969]">
              {scorePercent >= 85
                ? "Excellent! You can build and organise writing about experiences confidently."
                : scorePercent >= 65
                  ? "Good work! Review sentence order and paragraph organisation."
                  : "Review the writing toolkit and try the activity again."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#695119] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#544114]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#9C7925] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#866820]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Writing5Page;