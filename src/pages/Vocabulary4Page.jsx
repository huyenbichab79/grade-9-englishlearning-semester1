import { useState } from "react";

const keyWords = [
  {
    word: "ancestor",
    meaning: "tổ tiên",
  },
  {
    word: "dynasty",
    meaning: "triều đại",
  },
  {
    word: "emperor",
    meaning: "hoàng đế",
  },
  {
    word: "mausoleum",
    meaning: "lăng, lăng mộ",
  },
  {
    word: "monument",
    meaning: "tượng đài, đài tưởng niệm",
  },
  {
    word: "relic",
    meaning: "di tích, hiện vật cổ",
  },
  {
    word: "generation",
    meaning: "thế hệ",
  },
  {
    word: "structure",
    meaning: "công trình, cấu trúc",
  },
  {
    word: "safeguard",
    meaning: "bảo vệ",
  },
  {
    word: "promote",
    meaning: "thúc đẩy, quảng bá",
  },
  {
    word: "historic",
    meaning: "có ý nghĩa lịch sử",
  },
  {
    word: "deep-rooted",
    meaning: "lâu đời, ăn sâu bén rễ",
  },
];

const exerciseGroups = [
  {
    id: "meanings",
    title: "Task 1: Match the meanings",
    instruction:
      "Choose the correct meaning of each word.",
    questions: [
      {
        id: "meaning-1",
        level: "Basic",
        prompt:
          "What does “ancestor” mean?",
        answer:
          "A person in your family who lived a long time ago",
        options: [
          "A person in your family who lived a long time ago",
          "A person who designs modern buildings",
          "A visitor to a historical site",
        ],
        explanation:
          "An ancestor is a family member from an earlier generation.",
      },
      {
        id: "meaning-2",
        level: "Basic",
        prompt:
          "What is a “dynasty”?",
        answer:
          "A series of rulers from the same family",
        options: [
          "A series of rulers from the same family",
          "A traditional type of food",
          "A group of modern tourists",
        ],
        explanation:
          "A dynasty is a period when members of the same family rule a country.",
      },
      {
        id: "meaning-3",
        level: "Basic",
        prompt:
          "What is a “monument”?",
        answer:
          "A structure built to remember a person or event",
        options: [
          "A structure built to remember a person or event",
          "A meal prepared for one person",
          "A machine that produces electricity",
        ],
        explanation:
          "A monument is built to commemorate an important person or historical event.",
      },
      {
        id: "meaning-4",
        level: "Basic",
        prompt:
          "What does “generation” mean?",
        answer:
          "A group of people born and living at about the same time",
        options: [
          "A group of people born and living at about the same time",
          "A collection of religious buildings",
          "A celebration held every year",
        ],
        explanation:
          "People of a similar age in a family or society belong to the same generation.",
      },
    ],
  },
  {
    id: "contexts",
    title: "Task 2: Complete the situations",
    instruction:
      "Choose the most suitable word for each sentence.",
    questions: [
      {
        id: "context-1",
        level: "Intermediate",
        prompt:
          "The Tran ______ left behind many important cultural values.",
        answer: "dynasty",
        options: [
          "dynasty",
          "serving",
          "takeaway",
        ],
        explanation:
          "The Tran Dynasty was a historical ruling family in Viet Nam.",
      },
      {
        id: "context-2",
        level: "Intermediate",
        prompt:
          "Ho Chi Minh ______ is an important place in Ha Noi.",
        answer: "Mausoleum",
        options: [
          "Mausoleum",
          "Generation",
          "Vinegar",
        ],
        explanation:
          "A mausoleum is a large and important tomb.",
      },
      {
        id: "context-3",
        level: "Intermediate",
        prompt:
          "Local communities should ______ ancient buildings from damage.",
        answer: "safeguard",
        options: [
          "occupy",
          "safeguard",
          "serve",
        ],
        explanation:
          "To safeguard something means to protect it from harm or damage.",
      },
      {
        id: "context-4",
        level: "Intermediate",
        prompt:
          "The old temple is a ______ site where several important events took place.",
        answer: "historic",
        options: [
          "basic",
          "historic",
          "occupied",
        ],
        explanation:
          "A historic place is important because of events connected with history.",
      },
      {
        id: "context-5",
        level: "Intermediate",
        prompt:
          "Museums help ______ local culture by introducing it to visitors.",
        answer: "promote",
        options: [
          "promote",
          "worship",
          "occupy",
        ],
        explanation:
          "To promote something means to support it and make more people aware of it.",
      },
    ],
  },
  {
    id: "challenge",
    title: "Task 3: Vocabulary challenge",
    instruction:
      "Choose the best synonym, description, or usage.",
    questions: [
      {
        id: "challenge-1",
        level: "Advanced",
        prompt:
          "Which word is closest in meaning to “safeguard”?",
        answer: "protect",
        options: [
          "protect",
          "replace",
          "forget",
        ],
        explanation:
          "Safeguard and protect both mean keeping something safe from harm.",
      },
      {
        id: "challenge-2",
        level: "Advanced",
        prompt:
          "Which sentence uses “deep-rooted” correctly?",
        answer:
          "Respect for ancestors is a deep-rooted tradition in many Vietnamese families.",
        options: [
          "Respect for ancestors is a deep-rooted tradition in many Vietnamese families.",
          "The tourists deep-rooted the castle yesterday.",
          "We ordered a deep-rooted meal from the restaurant.",
        ],
        explanation:
          "Deep-rooted describes an idea, belief, or tradition that has existed for a long time.",
      },
      {
        id: "challenge-3",
        level: "Advanced",
        prompt:
          "Which description best matches a “relic”?",
        answer:
          "An old object or place that remains from the past",
        options: [
          "An old object or place that remains from the past",
          "A newly constructed shopping centre",
          "A meal that people take home",
        ],
        explanation:
          "A relic is an object, building, or place surviving from an earlier period.",
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#E0D2CC] bg-[#F0EDEB] text-[#8B563C]",
  Intermediate:
    "border-[#DCCCC5] bg-[#EDE8E6] text-[#965D40]",
  Advanced:
    "border-[#DDC4B8] bg-[#EEE9E7] text-[#87533A]",
};

function Vocabulary4Page({
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
    <main className="min-h-screen bg-[#F4F2F0] px-4 py-6 text-[#613B29] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="rounded-[32px] border border-white bg-[#E6DAD4] p-6 shadow-lg sm:p-8">
          <button
            type="button"
            onClick={onBack}
            className="rounded-xl bg-white px-4 py-2 font-bold text-[#9B5F42] shadow-sm transition hover:-translate-y-0.5"
          >
            ← Back to Unit 4
          </button>

          <p className="mt-6 font-bold uppercase tracking-[0.18em] text-[#BD704B]">
            Unit 4 · Activity 1
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Remembering the Past Vocabulary
          </h1>

          <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#A56647]">
            Learn important words about
            ancestors, historical sites,
            cultural heritage, and traditional
            values.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/75 p-4 text-center">
              <p className="text-2xl font-black text-[#9B5F42]">
                12
              </p>

              <p className="mt-1 text-sm font-bold text-[#A56647]">
                Key words
              </p>
            </div>

            <div className="rounded-2xl bg-white/75 p-4 text-center">
              <p className="text-2xl font-black text-[#9B5F42]">
                12
              </p>

              <p className="mt-1 text-sm font-bold text-[#A56647]">
                Questions
              </p>
            </div>

            <div className="rounded-2xl bg-white/75 p-4 text-center">
              <p className="text-2xl font-black text-[#9B5F42]">
                3
              </p>

              <p className="mt-1 text-sm font-bold text-[#A56647]">
                Advanced questions
              </p>
            </div>
          </div>
        </header>

        <section className="mt-7 rounded-[28px] border border-[#E1D3CC] bg-white p-5 shadow-md sm:p-6">
          <p className="font-bold uppercase tracking-[0.14em] text-[#BD704B]">
            Word bank
          </p>

          <h2 className="mt-1 text-2xl font-black text-[#613B29]">
            Heritage vocabulary
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {keyWords.map((item) => (
              <div
                key={item.word}
                className="rounded-2xl border border-[#E4D7D1] bg-[#F8F7F6] p-4"
              >
                <p className="font-black text-[#9B5F42]">
                  {item.word}
                </p>

                <p className="mt-1 text-sm font-medium text-[#A56647]">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-[22px] border border-[#E1D3CC] bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-black text-[#9B5F42]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#A56647]">
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
                        className="rounded-[26px] border border-[#E1D3CC] bg-white p-5 shadow-md sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-black text-[#BD704B]">
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

                        <p className="mt-4 text-lg font-bold leading-7 text-[#613B29]">
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
                                "border-[#E4D8D2] bg-[#FAFAFA] text-[#8E573D] hover:border-[#CF987D] hover:bg-[#F4F1F0]";

                              if (
                                isSelected &&
                                !submitted
                              ) {
                                optionStyle =
                                  "border-[#BB6E48] bg-[#EFEAE8] text-[#764933]";
                              }

                              if (
                                submitted &&
                                isCorrect
                              ) {
                                optionStyle =
                                  "border-[#C07753] bg-[#F0EDEB] text-[#7D4D35]";
                              }

                              if (
                                submitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionStyle =
                                  "border-[#CA8E71] bg-[#F0ECEA] text-[#985D41]";
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
                                ? "bg-[#F3F0EE]"
                                : "bg-[#F3F0EF]"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                selectedIsCorrect
                                  ? "text-[#8D573D]"
                                  : "text-[#9E6144]"
                              }`}
                            >
                              {selectedIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this answer"}
                            </p>

                            <p className="mt-1 leading-6 text-[#A56647]">
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
          <p className="mt-7 rounded-2xl border border-[#D7BBAD] bg-[#F1EDEB] p-4 text-center font-bold text-[#835138]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] border border-[#E4D7D1] bg-[#F0EDEB] p-7 text-center shadow-md">
            <p className="font-bold uppercase tracking-[0.16em] text-[#BD704B]">
              Your result
            </p>

            <p className="mt-2 text-5xl font-black text-[#9B5F42]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#613B29]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#A56647]">
              {scorePercent >= 85
                ? "Excellent! You understand the key heritage vocabulary very well."
                : scorePercent >= 65
                  ? "Good work! Review the difficult words before moving on."
                  : "Review the word bank and try the activity again."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#9B5F42] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#825038]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#BD704B] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#A06345]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Vocabulary4Page;