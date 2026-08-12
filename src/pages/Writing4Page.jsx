import { useState } from "react";

const exerciseGroups = [
  {
    id: "sentence-choice",
    title: "Task 1: Choose the Best Sentence",
    instruction:
      "Choose the sentence that is grammatically correct and suitable for the situation.",
    questions: [
      {
        id: "basic-1",
        type: "choice",
        level: "Basic",
        topic: "Past Continuous",
        prompt:
          "Choose the correct sentence about an action happening at 9 a.m. yesterday.",
        answer:
          "Ngoc was having a meeting at 9 a.m. yesterday.",
        options: [
          "Ngoc was having a meeting at 9 a.m. yesterday.",
          "Ngoc is having a meeting at 9 a.m. yesterday.",
          "Ngoc were have a meeting at 9 a.m. yesterday.",
        ],
        explanation:
          "Ngoc is singular, so the correct form is was having.",
      },
      {
        id: "basic-2",
        type: "choice",
        level: "Basic",
        topic: "Present Wish",
        prompt:
          "I do not know much about the old monument. Choose the correct wish.",
        answer:
          "I wish I knew more about the old monument.",
        options: [
          "I wish I knew more about the old monument.",
          "I wish I know more about the old monument.",
          "I wish I will know more about the old monument.",
        ],
        explanation:
          "A present wish uses the past simple after wish.",
      },
      {
        id: "basic-3",
        type: "choice",
        level: "Basic",
        topic: "Past Continuous",
        prompt:
          "Which sentence describes two actions happening at the same time?",
        answer:
          "Mary was playing the piano while her parents were watching television.",
        options: [
          "Mary was playing the piano while her parents were watching television.",
          "Mary played the piano while her parents are watching television.",
          "Mary was play the piano while her parents watched television.",
        ],
        explanation:
          "Both continuing actions use was/were plus the verb-ing form.",
      },
      {
        id: "basic-4",
        type: "choice",
        level: "Basic",
        topic: "Present Wish",
        prompt:
          "She cannot visit the castle now. Choose the correct sentence.",
        answer:
          "She wishes she could visit the castle now.",
        options: [
          "She wishes she could visit the castle now.",
          "She wishes she can visit the castle now.",
          "She wishes she will visit the castle now.",
        ],
        explanation:
          "Could is used for an unreal or impossible ability in the present.",
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
        topic: "Past Continuous",
        prompt:
          "Arrange the parts to describe two simultaneous past actions.",
        chunks: [
          "while her brother",
          "She was painting",
          "was doing his homework.",
          "a picture",
        ],
        correctOrder: [
          "She was painting",
          "a picture",
          "while her brother",
          "was doing his homework.",
        ],
        explanation:
          "The sentence uses the past continuous for two actions happening at the same time.",
      },
      {
        id: "intermediate-2",
        type: "order",
        level: "Intermediate",
        topic: "Past Continuous",
        prompt:
          "Arrange the parts to describe an activity at a specific past time.",
        chunks: [
          "at 10 p.m.",
          "Was he chatting",
          "yesterday?",
          "with his friends online",
        ],
        correctOrder: [
          "Was he chatting",
          "with his friends online",
          "at 10 p.m.",
          "yesterday?",
        ],
        explanation:
          "A past continuous question begins with Was or Were.",
      },
      {
        id: "intermediate-3",
        type: "order",
        level: "Intermediate",
        topic: "Present Wish",
        prompt:
          "Arrange the parts to express a present wish.",
        chunks: [
          "enough time",
          "I wish",
          "to attend the festival.",
          "I had",
        ],
        correctOrder: [
          "I wish",
          "I had",
          "enough time",
          "to attend the festival.",
        ],
        explanation:
          "The wish describes a situation that is not true at present.",
      },
      {
        id: "intermediate-4",
        type: "order",
        level: "Intermediate",
        topic: "Present Wish",
        prompt:
          "Arrange the parts to express an unreal ability now.",
        chunks: [
          "could take part",
          "He wishes",
          "in the traditional parade.",
          "he",
        ],
        correctOrder: [
          "He wishes",
          "he",
          "could take part",
          "in the traditional parade.",
        ],
        explanation:
          "Could is used after wish to express an ability that is not possible now.",
      },
      {
        id: "intermediate-5",
        type: "order",
        level: "Intermediate",
        topic: "Past Continuous",
        prompt:
          "Arrange the parts to describe a longer past activity.",
        chunks: [
          "to improve",
          "My brother was practising",
          "his skills.",
          "the guitar all month",
        ],
        correctOrder: [
          "My brother was practising",
          "the guitar all month",
          "to improve",
          "his skills.",
        ],
        explanation:
          "All month shows that the action continued for a period in the past.",
      },
    ],
  },
  {
    id: "paragraph-building",
    title: "Task 3: Organise the Writing",
    instruction:
      "Choose the most logical order or the best organised piece of writing.",
    questions: [
      {
        id: "advanced-1",
        type: "choice",
        level: "Advanced",
        topic: "Paragraph Order",
        prompt:
          "Choose the best order for the paragraph.\n\nA. Next, we listened to local people telling stories about the building.\nB. Our class visited an ancient communal house last Saturday.\nC. Finally, we took photographs and promised to help protect the site.\nD. First, our guide explained its history and traditional architecture.",
        answer: "B → D → A → C",
        options: [
          "B → D → A → C",
          "D → C → B → A",
          "A → B → C → D",
        ],
        explanation:
          "The paragraph begins with the visit, continues with the first and next activities, and ends with the final action.",
      },
      {
        id: "advanced-2",
        type: "choice",
        level: "Advanced",
        topic: "Letter Order",
        prompt:
          "Choose the best order for the letter.\n\nA. You will learn about his life and Viet Nam’s struggle for independence.\nB. Dear Alex, I hope you are well. I suggest visiting the Ho Chi Minh Museum.\nC. Best regards, Minh\nD. The museum displays photographs, documents, and historical objects.\nE. Let me know whether you would like to visit it with me.",
        answer: "B → D → A → E → C",
        options: [
          "B → D → A → E → C",
          "D → B → C → A → E",
          "C → A → E → B → D",
        ],
        explanation:
          "A letter begins with the greeting and purpose, gives details, makes a final invitation, and ends with a closing.",
      },
      {
        id: "advanced-3",
        type: "choice",
        level: "Advanced",
        topic: "Paragraph Quality",
        prompt:
          "Which paragraph is the most coherent and well organised?",
        answer:
          "Our village has a deep-rooted tradition of holding a spring festival. Last year, while the elders were preparing traditional food, young people were decorating the communal house. I wish more visitors knew about this meaningful event. By sharing its history, we can keep the tradition alive for future generations.",
        options: [
          "Our village has a deep-rooted tradition of holding a spring festival. Last year, while the elders were preparing traditional food, young people were decorating the communal house. I wish more visitors knew about this meaningful event. By sharing its history, we can keep the tradition alive for future generations.",
          "Our village has a festival. A castle is old. I wish food. People were tradition. The end.",
          "Future generations visited yesterday. While the monument is cooking, our village wished a photograph.",
        ],
        explanation:
          "The correct paragraph has a clear topic, supporting detail, an appropriate wish, and a logical conclusion.",
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

const topicStyles = {
  "Past Continuous":
    "bg-[#F6F4F3] text-[#925A3E]",
  "Present Wish":
    "bg-[#F6F4F3] text-[#C47F5E]",
  "Paragraph Order":
    "bg-[#EFEAE8] text-[#714530]",
  "Letter Order":
    "bg-[#F2EEEC] text-[#825038]",
  "Paragraph Quality":
    "bg-[#F4F2F0] text-[#B36742]",
};

function Writing4Page({
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
              Unit 4 · Activity 5
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-5xl">
              Writing Builder
            </h1>

            <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#A96848]">
              Build past continuous sentences,
              express present wishes, and
              organise paragraphs and letters
              about cultural heritage.
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
                  0
                </p>

                <p className="mt-1 text-sm font-bold text-[#A96848]">
                  Typed answers
                </p>
              </div>

              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#C68464]">
                  3
                </p>

                <p className="mt-1 text-sm font-bold text-[#A96848]">
                  Writing skills
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-7 rounded-[28px] border border-[#ECE7E4] bg-white p-5 shadow-md sm:p-6">
          <p className="font-black uppercase tracking-[0.14em] text-[#825038]">
            Writing toolkit
          </p>

          <h2 className="mt-1 text-2xl font-black text-[#603B29]">
            Plan before you write
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl bg-[#F6F4F3] p-4">
              <p className="font-black text-[#925A3E]">
                1. Build sentences
              </p>

              <p className="mt-2 text-sm font-medium leading-6 text-[#A96848]">
                Check the subject, verb form,
                time expression, and word order.
              </p>
            </article>

            <article className="rounded-2xl bg-[#F2EEEC] p-4">
              <p className="font-black text-[#825038]">
                2. Connect ideas
              </p>

              <p className="mt-2 text-sm font-medium leading-6 text-[#A96848]">
                Use while, first, next, finally,
                and other linking expressions.
              </p>
            </article>

            <article className="rounded-2xl bg-[#F6F4F3] p-4">
              <p className="font-black text-[#C47F5E]">
                3. Organise clearly
              </p>

              <p className="mt-2 text-sm font-medium leading-6 text-[#A96848]">
                Begin with the main idea, add
                details, and finish logically.
              </p>
            </article>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-[#FAFAFA] p-4">
              <p className="font-black text-[#925A3E]">
                Past continuous
              </p>

              <p className="mt-2 font-medium leading-6 text-[#A96848]">
                Subject + was/were + verb-ing
              </p>
            </div>

            <div className="rounded-2xl bg-[#FBFAFA] p-4">
              <p className="font-black text-[#C47F5E]">
                Present wish
              </p>

              <p className="mt-2 font-medium leading-6 text-[#A96848]">
                Subject + wish + past simple /
                were / could
              </p>
            </div>
          </div>
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
                      isQuestionCorrect(
                        question
                      );

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
                            <div className="min-h-24 rounded-2xl border-2 border-dashed border-[#E5DAD4] bg-[#FAFAFA] p-4">
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
                                        className="rounded-xl border border-[#E4D8D3] bg-white px-3 py-2 font-bold text-[#925A3E] shadow-sm transition hover:bg-[#F6F4F3]"
                                      >
                                        {chunk}
                                      </button>
                                    )
                                  )}
                                </div>
                              ) : (
                                <p className="text-center font-medium text-[#C37D5B]">
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
                                      className="rounded-xl border border-[#E8DED9] bg-white px-3 py-2 font-semibold text-[#8F583D] shadow-sm transition hover:border-[#CAA491] hover:bg-[#F9F8F8]"
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
                                className="mt-4 text-sm font-bold text-[#C47F5E] underline"
                              >
                                Reset this sentence
                              </button>
                            )}

                            {submitted &&
                              !selectedIsCorrect && (
                                <div className="mt-4 rounded-2xl bg-[#F2EEEC] p-4">
                                  <p className="font-bold text-[#6C432F]">
                                    Correct sentence
                                  </p>

                                  <p className="mt-2 leading-7 text-[#8F583D]">
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
                ? "Excellent! You can build sentences and organise heritage writing confidently."
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

export default Writing4Page;