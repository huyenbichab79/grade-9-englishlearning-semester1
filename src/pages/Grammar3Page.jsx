import { useState } from "react";

const exerciseGroups = [
  {
    id: "verb-forms",
    title: "Task 1: Choose the correct verb form",
    instruction:
      "Complete each first conditional sentence with the correct verb form.",
    questions: [
      {
        id: "form-1",
        level: "Basic",
        prompt:
          "If you ______ enough sleep, you will feel more alert tomorrow.",
        answer: "get",
        options: [
          "get",
          "will get",
          "got",
        ],
        explanation:
          "The if-clause uses the present simple: If you get enough sleep...",
      },
      {
        id: "form-2",
        level: "Basic",
        prompt:
          "If Mai studies regularly, she ______ her assignment on time.",
        answer: "will finish",
        options: [
          "finishes",
          "will finish",
          "finished",
        ],
        explanation:
          "The main clause can use will + base verb: will finish.",
      },
      {
        id: "form-3",
        level: "Basic",
        prompt:
          "If teenagers ______ too much junk food, they may put on weight.",
        answer: "eat",
        options: [
          "eat",
          "will eat",
          "ate",
        ],
        explanation:
          "The verb in the if-clause stays in the present simple.",
      },
      {
        id: "form-4",
        level: "Basic",
        prompt:
          "You will feel less stressed if you ______ your time properly.",
        answer: "manage",
        options: [
          "manage",
          "will manage",
          "managed",
        ],
        explanation:
          "The if-clause may come second, but it still uses the present simple.",
      },
    ],
  },
  {
    id: "modal-verbs",
    title: "Task 2: Choose the best modal verb",
    instruction:
      "Choose the modal verb that best expresses advice, possibility, ability, or necessity.",
    questions: [
      {
        id: "modal-1",
        level: "Intermediate",
        prompt:
          "If you want to improve your mood, you ______ spend time doing activities you enjoy.",
        answer: "should",
        options: [
          "should",
          "mustn't",
          "can't",
        ],
        explanation:
          "Should is used to give advice.",
      },
      {
        id: "modal-2",
        level: "Intermediate",
        prompt:
          "If Minh exercises regularly, he ______ become physically stronger.",
        answer: "can",
        options: [
          "can",
          "mustn't",
          "shouldn't",
        ],
        explanation:
          "Can expresses a possible ability or result.",
      },
      {
        id: "modal-3",
        level: "Intermediate",
        prompt:
          "If Lan stays up late tonight, she ______ feel tired tomorrow.",
        answer: "might",
        options: [
          "must",
          "might",
          "should",
        ],
        explanation:
          "Might expresses a possible result.",
      },
      {
        id: "modal-4",
        level: "Intermediate",
        prompt:
          "If students want to meet an important deadline, they ______ manage their time carefully.",
        answer: "must",
        options: [
          "may",
          "must",
          "might",
        ],
        explanation:
          "Must expresses strong necessity.",
      },
      {
        id: "modal-5",
        level: "Intermediate",
        prompt:
          "If you feel stressed out for a long time, you ______ talk to a parent, teacher, or counsellor.",
        answer: "should",
        options: [
          "should",
          "can't",
          "mustn't",
        ],
        explanation:
          "Should gives suitable advice about dealing with stress.",
      },
    ],
  },
  {
    id: "advanced",
    title: "Task 3: Grammar challenge",
    instruction:
      "Choose the sentence that is grammatically correct and suitable for the situation.",
    questions: [
      {
        id: "advanced-1",
        level: "Advanced",
        prompt:
          "Which first conditional sentence is correct?",
        answer:
          "If you avoid distractions, you may complete your assignment more effectively.",
        options: [
          "If you will avoid distractions, you may complete your assignment more effectively.",
          "If you avoid distractions, you may complete your assignment more effectively.",
          "If you avoided distractions, you may completes your assignment more effectively.",
        ],
        explanation:
          "The if-clause uses present simple, and the main clause uses may + base verb.",
      },
      {
        id: "advanced-2",
        level: "Advanced",
        prompt:
          "Choose the sentence with the same meaning as: “Stay focused, or you may miss the deadline.”",
        answer:
          "If you don't stay focused, you may miss the deadline.",
        options: [
          "If you don't stay focused, you may miss the deadline.",
          "If you won't stay focused, you miss the deadline.",
          "If you stayed focused, you may miss the deadline.",
        ],
        explanation:
          "“Do something, or...” can be rewritten as “If you don't..., ...”.",
      },
      {
        id: "advanced-3",
        level: "Advanced",
        prompt:
          "Which sentence correctly uses “unless”?",
        answer:
          "Unless you take regular breaks, you may become tired and lose concentration.",
        options: [
          "Unless you take regular breaks, you may become tired and lose concentration.",
          "Unless you don't take regular breaks, you may become tired.",
          "Unless you will take regular breaks, you may become tired.",
        ],
        explanation:
          "Unless means “if not” and is followed by the present simple.",
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

function Grammar3Page({
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
            Unit 3 · Activity 3
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            First Conditional
          </h1>

          <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#A84070]">
            Use first conditional sentences
            to talk about possible present or
            future situations.
          </p>

          <section className="mt-6 rounded-[24px] border border-[#E8D8DF] bg-white/80 p-5 shadow-sm">
            <p className="font-black uppercase tracking-[0.14em] text-[#C76693]">
              Remember
            </p>

            <div className="mt-4 rounded-2xl bg-[#F4F0F2] p-4 text-center">
              <p className="text-lg font-black text-[#933862]">
                If + present simple, subject +
                will / can / may / might /
                must / should + base verb
              </p>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-[#F6F3F4] p-4">
                <p className="font-black text-[#AD4274]">
                  Possible result
                </p>

                <p className="mt-2 font-medium leading-6 text-[#A84070]">
                  If you sleep well, you will
                  feel more alert.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F6F2F4] p-4">
                <p className="font-black text-[#BE5083]">
                  Advice
                </p>

                <p className="mt-2 font-medium leading-6 text-[#A84070]">
                  If you feel stressed, you
                  should take a break.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F4F0F2] p-4">
                <p className="font-black text-[#9E3C6A]">
                  Necessity
                </p>

                <p className="mt-2 font-medium leading-6 text-[#A84070]">
                  If you want to meet the
                  deadline, you must plan ahead.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm font-medium leading-6 text-[#A84070]">
              Do not normally use “will” in the
              if-clause.
            </p>
          </section>
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
                      selected ===
                      question.answer;

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

                        <p className="mt-4 text-lg font-bold leading-7 text-[#732C4D]">
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
                ? "Excellent! You can use first conditional sentences confidently."
                : scorePercent >= 65
                  ? "Good work! Review the modal verbs and difficult questions."
                  : "Review the grammar structure before trying again."}
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

export default Grammar3Page;