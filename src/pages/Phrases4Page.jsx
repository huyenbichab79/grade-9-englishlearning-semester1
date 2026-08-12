import { useState } from "react";

const phraseBank = [
  {
    phrase: "break out",
    meaning:
      "start suddenly, especially a war, fire, or disease",
  },
  {
    phrase: "hand down",
    meaning:
      "give knowledge or traditions to a younger generation",
  },
  {
    phrase: "pass down",
    meaning:
      "transfer something from one generation to another",
  },
  {
    phrase: "keep alive",
    meaning:
      "make something continue to exist",
  },
  {
    phrase: "take pride in",
    meaning:
      "feel proud of someone or something",
  },
  {
    phrase: "be dedicated to",
    meaning:
      "give a lot of time and effort to something",
  },
  {
    phrase: "face to face",
    meaning:
      "in person, rather than through technology",
  },
  {
    phrase: "contribute to",
    meaning:
      "help to cause, support, or improve something",
  },
  {
    phrase: "be associated with",
    meaning:
      "be connected with someone or something",
  },
  {
    phrase: "preserve for future generations",
    meaning:
      "protect something so that people in the future can enjoy it",
  },
];

const exerciseGroups = [
  {
    id: "meanings",
    title: "Task 1: Understand the phrases",
    instruction:
      "Choose the correct meaning of each phrase.",
    questions: [
      {
        id: "meaning-1",
        level: "Basic",
        prompt:
          "What does “break out” mean?",
        answer:
          "Start suddenly",
        options: [
          "Start suddenly",
          "End peacefully",
          "Move to another building",
        ],
        explanation:
          "A war, fire, or disease can break out, meaning it begins suddenly.",
      },
      {
        id: "meaning-2",
        level: "Basic",
        prompt:
          "What does “hand down” mean?",
        answer:
          "Give something to a younger generation",
        options: [
          "Give something to a younger generation",
          "Throw something away",
          "Buy something from a shop",
        ],
        explanation:
          "Families often hand down recipes, stories, and traditions.",
      },
      {
        id: "meaning-3",
        level: "Basic",
        prompt:
          "What does “keep a tradition alive” mean?",
        answer:
          "Make the tradition continue to exist",
        options: [
          "Make the tradition continue to exist",
          "Replace the tradition completely",
          "Forget the tradition immediately",
        ],
        explanation:
          "Keeping something alive means helping it continue.",
      },
      {
        id: "meaning-4",
        level: "Basic",
        prompt:
          "What does “take pride in” mean?",
        answer:
          "Feel proud of something",
        options: [
          "Feel proud of something",
          "Feel afraid of something",
          "Feel confused about something",
        ],
        explanation:
          "People take pride in traditions, achievements, and cultural heritage.",
      },
    ],
  },
  {
    id: "contexts",
    title: "Task 2: Complete the situations",
    instruction:
      "Choose the phrase that best completes each sentence.",
    questions: [
      {
        id: "context-1",
        level: "Intermediate",
        prompt:
          "Grandparents often ______ traditional stories to their children and grandchildren.",
        answer: "pass down",
        options: [
          "pass down",
          "break out",
          "take away",
        ],
        explanation:
          "Passing something down means transferring it to the next generation.",
      },
      {
        id: "context-2",
        level: "Intermediate",
        prompt:
          "The museum is ______ protecting and displaying objects from the past.",
        answer: "dedicated to",
        options: [
          "dedicated to",
          "associated from",
          "occupied with",
        ],
        explanation:
          "To be dedicated to something means to give it serious time and effort.",
      },
      {
        id: "context-3",
        level: "Intermediate",
        prompt:
          "Many older people prefer talking ______ instead of chatting online.",
        answer: "face to face",
        options: [
          "face to face",
          "generation to generation",
          "side by side with history",
        ],
        explanation:
          "Face-to-face communication happens when people meet and talk in person.",
      },
      {
        id: "context-4",
        level: "Intermediate",
        prompt:
          "Traditional festivals help ______ local customs and community values.",
        answer: "keep alive",
        options: [
          "keep alive",
          "break out",
          "occupy",
        ],
        explanation:
          "Festivals help traditions continue to exist.",
      },
      {
        id: "context-5",
        level: "Intermediate",
        prompt:
          "The war ______ in 1858 and damaged many historical relics.",
        answer: "broke out",
        options: [
          "broke out",
          "passed down",
          "took pride in",
        ],
        explanation:
          "The past form of break out is broke out.",
      },
    ],
  },
  {
    id: "challenge",
    title: "Task 3: Heritage phrase challenge",
    instruction:
      "Choose the best sentence or conclusion.",
    questions: [
      {
        id: "challenge-1",
        level: "Advanced",
        prompt:
          "Which sentence uses “hand down” correctly?",
        answer:
          "My grandmother handed down her traditional pancake recipe to my mother.",
        options: [
          "My grandmother handed down her traditional pancake recipe to my mother.",
          "The army handed down when the war began.",
          "We handed down at the museum yesterday.",
        ],
        explanation:
          "A recipe, story, skill, or tradition can be handed down to younger people.",
      },
      {
        id: "challenge-2",
        level: "Advanced",
        prompt:
          "Which sentence best expresses cultural responsibility?",
        answer:
          "We should preserve historic sites for future generations.",
        options: [
          "We should preserve historic sites for future generations.",
          "We should replace every old building with a shopping centre.",
          "We should avoid learning about our ancestors.",
        ],
        explanation:
          "Preservation allows future generations to understand and value cultural heritage.",
      },
      {
        id: "challenge-3",
        level: "Advanced",
        prompt:
          "A village organises an annual festival, teaches traditional songs, and protects its communal house. What is the village doing?",
        answer:
          "It is contributing to keeping its cultural heritage alive.",
        options: [
          "It is contributing to keeping its cultural heritage alive.",
          "It is trying to forget its traditional culture.",
          "It is replacing its heritage with modern technology.",
        ],
        explanation:
          "All three activities help preserve and promote the village’s cultural identity.",
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#EAE4E1] bg-[#F7F6F6] text-[#C58363]",
  Intermediate:
    "border-[#DDCEC7] bg-[#F1EDEB] text-[#6F4430]",
  Advanced:
    "border-[#D5B6A7] bg-[#EAE4E1] text-[#6D432F]",
};

function Phrases4Page({
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
    <main className="min-h-screen bg-[#F9F8F8] px-4 py-6 text-[#503122] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="relative overflow-hidden rounded-[32px] border border-[#F1EDEB] bg-gradient-to-br from-[#F6F3F2] via-[#F8F7F7] to-[#EAE4E1] p-6 shadow-[0_18px_40px_rgba(197,131,99,0.13)] sm:p-8">
          <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#CDA998]/55" />

          <div className="pointer-events-none absolute bottom-8 right-36 h-16 w-16 rounded-full bg-[#EDE9E7]" />

          <div className="relative">
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl border border-white bg-white/90 px-4 py-2 font-bold text-[#C58363] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Back to Unit 4
            </button>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <p className="font-black uppercase tracking-[0.18em] text-[#CF987E]">
                Unit 4 · Activity 2
              </p>

              <span className="rounded-full bg-[#CDA998] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#543424]">
                Heritage Quest
              </span>
            </div>

            <h1 className="mt-3 max-w-3xl text-3xl font-black sm:text-5xl">
              Traditions & Heritage Phrases
            </h1>

            <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#A46546]">
              Practise expressions about
              preserving traditions, sharing
              memories, and protecting cultural
              heritage.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white bg-white/80 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#C58363]">
                  10
                </p>

                <p className="mt-1 text-sm font-bold text-[#A46546]">
                  Key phrases
                </p>
              </div>

              <div className="rounded-2xl border border-white bg-white/80 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#CF987E]">
                  12
                </p>

                <p className="mt-1 text-sm font-bold text-[#A46546]">
                  Questions
                </p>
              </div>

              <div className="rounded-2xl border border-white bg-white/80 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#6F4430]">
                  3
                </p>

                <p className="mt-1 text-sm font-bold text-[#A46546]">
                  Levels
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-7 rounded-[28px] border border-[#F1EDEB] bg-white p-5 shadow-[0_14px_32px_rgba(197,131,99,0.08)] sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-black uppercase tracking-[0.14em] text-[#CF987E]">
                Phrase bank
              </p>

              <h2 className="mt-1 text-2xl font-black text-[#503122]">
                Pass the story on
              </h2>
            </div>

            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAE4E1] text-2xl shadow-sm">
              📜
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {phraseBank.map((item, index) => (
              <div
                key={item.phrase}
                className={`rounded-2xl border p-4 ${
                  index % 3 === 0
                    ? "border-[#F1EDEB] bg-[#FAF9F9]"
                    : index % 3 === 1
                      ? "border-[#E5DAD4] bg-[#F5F3F2]"
                      : "border-[#EBE6E3] bg-[#F9F8F8]"
                }`}
              >
                <p className="font-black text-[#C58363]">
                  {item.phrase}
                </p>

                <p className="mt-1 text-sm font-medium leading-5 text-[#A46546]">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-[22px] border border-[#EEEAE8] bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-black text-[#C58363]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#A46546]">
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
                        className="rounded-[26px] border border-[#EEEAE8] bg-white p-5 shadow-[0_10px_26px_rgba(80,49,34,0.07)] sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-black text-[#CF987E]">
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

                        <p className="mt-4 text-lg font-bold leading-7 text-[#503122]">
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
                                "border-[#EEE9E7] bg-[#FCFCFC] text-[#8E573D] hover:border-[#DABFB2] hover:bg-[#FAF9F8]";

                              if (
                                isSelected &&
                                !submitted
                              ) {
                                optionStyle =
                                  "border-[#C9A290] bg-[#F6F5F5] text-[#B56843]";
                              }

                              if (
                                submitted &&
                                isCorrect
                              ) {
                                optionStyle =
                                  "border-[#BE734F] bg-[#F1EDEB] text-[#6F4430]";
                              }

                              if (
                                submitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionStyle =
                                  "border-[#CFAD9C] bg-[#F6F4F3] text-[#9E6144]";
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
                                : "bg-[#F8F7F7]"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                selectedIsCorrect
                                  ? "text-[#6F4430]"
                                  : "text-[#AB6949]"
                              }`}
                            >
                              {selectedIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this answer"}
                            </p>

                            <p className="mt-1 leading-6 text-[#A46546]">
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
          <p className="mt-7 rounded-2xl border border-[#CFAD9C] bg-[#EFEAE8] p-4 text-center font-bold text-[#663E2C]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] border border-[#EAE4E1] bg-[#F7F6F6] p-7 text-center shadow-md">
            <p className="font-black uppercase tracking-[0.16em] text-[#CF987E]">
              Your result
            </p>

            <p className="mt-2 text-5xl font-black text-[#C58363]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#503122]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#A46546]">
              {scorePercent >= 85
                ? "Amazing! You can use heritage phrases confidently."
                : scorePercent >= 65
                  ? "Good work! Review the phrases used in difficult situations."
                  : "Review the phrase bank and try the activity again."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#C58363] px-8 py-4 font-black text-white shadow-[0_10px_22px_rgba(197,131,99,0.24)] transition hover:-translate-y-0.5 hover:bg-[#BB6C46]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#CF987E] px-8 py-4 font-black text-white shadow-[0_10px_22px_rgba(207,152,126,0.22)] transition hover:-translate-y-0.5 hover:bg-[#C48161]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Phrases4Page;