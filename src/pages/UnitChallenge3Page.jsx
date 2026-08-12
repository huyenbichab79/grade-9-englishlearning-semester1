import { useState } from "react";

const miniPassage = `Linh used to stay up late because she often delayed her assignments until the day before the deadline. She checked social media while studying, so it was difficult for her to stay focused. As a result, she frequently felt tired, anxious, and stressed out at school.

After talking to the school counsellor, Linh made several changes. She created a weekly schedule, gave priority to urgent tasks, and studied in short sessions with regular breaks. She also began to work out three times a week and followed a more well-balanced diet. If Linh continues these habits, she may improve both her physical and mental health.`;

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
          "What is a deadline?",
        answer:
          "The final time or date for completing something",
        options: [
          "The final time or date for completing something",
          "A short period of physical exercise",
          "A person who gives health advice",
        ],
        explanation:
          "A deadline is the latest time by which a task must be completed.",
      },
      {
        id: "basic-2",
        level: "Basic",
        category: "Vocabulary",
        prompt:
          "Who can give students advice about academic or emotional problems?",
        answer: "A counsellor",
        options: [
          "A counsellor",
          "A commuter",
          "A construction worker",
        ],
        explanation:
          "A counsellor is trained to give advice and support.",
      },
      {
        id: "basic-3",
        level: "Basic",
        category: "Phrases",
        prompt:
          "What does “take a break” mean?",
        answer:
          "Stop working for a short rest",
        options: [
          "Stop working for a short rest",
          "Continue working all night",
          "Cancel an important assignment",
        ],
        explanation:
          "Taking a break means resting briefly before continuing.",
      },
      {
        id: "basic-4",
        level: "Basic",
        category: "Phrases",
        prompt:
          "Which phrase means “successfully overcome a difficult time”?",
        answer: "get through",
        options: [
          "get through",
          "stay up",
          "put on",
        ],
        explanation:
          "To get through something means to overcome or survive it successfully.",
      },
    ],
  },
  {
    id: "application",
    title: "Part 2: Apply Your Knowledge",
    instruction:
      "Use vocabulary, phrases, grammar, and writing skills in healthy-living situations.",
    questions: [
      {
        id: "intermediate-1",
        level: "Intermediate",
        category: "Vocabulary",
        prompt:
          "Deep breathing and regular exercise can help teenagers ______ anxiety.",
        answer: "minimize",
        options: [
          "minimize",
          "accomplish",
          "delay",
        ],
        explanation:
          "To minimize something means to reduce it as much as possible.",
      },
      {
        id: "intermediate-2",
        level: "Intermediate",
        category: "Phrases",
        prompt:
          "Turning off phone notifications can help students ______ distractions.",
        answer: "get rid of",
        options: [
          "get rid of",
          "put on",
          "bring about",
        ],
        explanation:
          "To get rid of something means to remove it.",
      },
      {
        id: "intermediate-3",
        level: "Intermediate",
        category: "Grammar",
        prompt:
          "Choose the correct first conditional sentence.",
        answer:
          "If you manage your time properly, you will feel less stressed.",
        options: [
          "If you manage your time properly, you will feel less stressed.",
          "If you will manage your time properly, you feel less stressed.",
          "If you managed your time properly, you will feels less stressed.",
        ],
        explanation:
          "The if-clause uses the present simple, and the main clause uses will plus the base verb.",
      },
      {
        id: "intermediate-4",
        level: "Intermediate",
        category: "Grammar",
        prompt:
          "If you want to maintain good physical health, you ______ exercise regularly.",
        answer: "should",
        options: [
          "should",
          "mustn't",
          "can't",
        ],
        explanation:
          "Should is used to give suitable advice.",
      },
      {
        id: "intermediate-5",
        level: "Intermediate",
        category: "Writing",
        prompt:
          "Which is the best topic sentence for a paragraph about managing stress?",
        answer:
          "Teenagers can follow several simple strategies to manage stress effectively.",
        options: [
          "Teenagers can follow several simple strategies to manage stress effectively.",
          "My classroom has twenty desks and two windows.",
          "Last Sunday, my family visited a shopping centre.",
        ],
        explanation:
          "A topic sentence should clearly introduce the paragraph’s main idea.",
      },
    ],
  },
  {
    id: "final-challenge",
    title: "Part 3: Final Challenge",
    instruction:
      "Read the short passage and complete the advanced questions.",
    passage: miniPassage,
    questions: [
      {
        id: "advanced-1",
        level: "Advanced",
        category: "Reading",
        prompt:
          "What was the main cause of Linh's stress?",
        answer:
          "She delayed her work and became distracted while studying.",
        options: [
          "She delayed her work and became distracted while studying.",
          "She exercised too often after school.",
          "She completed every assignment ahead of time.",
        ],
        explanation:
          "Linh postponed her assignments and checked social media while studying.",
      },
      {
        id: "advanced-2",
        level: "Advanced",
        category: "Grammar",
        prompt:
          "Which sentence has the same meaning as: “Unless Linh follows her schedule, she may miss important deadlines”?",
        answer:
          "If Linh does not follow her schedule, she may miss important deadlines.",
        options: [
          "If Linh does not follow her schedule, she may miss important deadlines.",
          "If Linh will not follow her schedule, she may miss important deadlines.",
          "If Linh follows her schedule, she must miss important deadlines.",
        ],
        explanation:
          "Unless means “if not” and is followed by the present simple.",
      },
      {
        id: "advanced-3",
        level: "Advanced",
        category: "Writing",
        prompt:
          "Choose the best order for the paragraph.\n\nA. As a result, they may feel more alert and complete their work effectively.\nB. Teenagers need healthy routines to balance schoolwork and personal life.\nC. In conclusion, small daily changes can improve both physical and mental health.\nD. They should manage their time, get enough sleep, exercise, and take regular breaks.",
        answer: "B → D → A → C",
        options: [
          "B → D → A → C",
          "A → C → B → D",
          "D → B → C → A",
        ],
        explanation:
          "The paragraph begins with the topic, gives advice, presents the result, and ends with a conclusion.",
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

const categoryStyles = {
  Vocabulary:
    "bg-[#F3EFF1] text-[#9B3B68]",
  Phrases:
    "bg-[#F4F0F2] text-[#B34277]",
  Grammar:
    "bg-[#F2ECEF] text-[#8F365F]",
  Reading:
    "bg-[#F2EEF0] text-[#973A65]",
  Writing:
    "bg-[#F4EFF1] text-[#A23D6C]",
};

function UnitChallenge3Page({
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
            Unit 3 · Activity 6
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Unit Challenge
          </h1>

          <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#A84070]">
            Complete the final challenge to
            review healthy-living vocabulary,
            phrases, grammar, reading, and
            writing.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/75 p-4 text-center">
              <p className="text-2xl font-black text-[#AD4274]">
                12
              </p>

              <p className="mt-1 text-sm font-bold text-[#A84070]">
                Questions
              </p>
            </div>

            <div className="rounded-2xl bg-white/75 p-4 text-center">
              <p className="text-2xl font-black text-[#AD4274]">
                5
              </p>

              <p className="mt-1 text-sm font-bold text-[#A84070]">
                Learning areas
              </p>
            </div>

            <div className="rounded-2xl bg-white/75 p-4 text-center">
              <p className="text-2xl font-black text-[#AD4274]">
                3
              </p>

              <p className="mt-1 text-sm font-bold text-[#A84070]">
                Advanced questions
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

              {group.passage && (
                <div className="mb-5 rounded-[26px] border border-[#E8D8DF] bg-[#F6F4F5] p-5 shadow-sm sm:p-6">
                  <p className="font-bold uppercase tracking-[0.14em] text-[#C76693]">
                    Short reading
                  </p>

                  <h3 className="mt-2 text-xl font-black text-[#732C4D]">
                    Linh's Healthier Routine
                  </h3>

                  <p className="mt-4 whitespace-pre-line text-[17px] font-medium leading-8 text-[#973A65]">
                    {group.passage}
                  </p>
                </div>
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
                        className="rounded-[26px] border border-[#EBDDE4] bg-white p-5 shadow-md sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-black text-[#C76693]">
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

                        <p className="mt-4 whitespace-pre-line text-lg font-bold leading-7 text-[#732C4D]">
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
              Unit 3 result
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
                ? "Excellent! You have completed Unit 3 successfully."
                : scorePercent >= 65
                  ? "Good work! Review the explanations before moving to the next unit."
                  : "Review the Unit 3 activities before trying the challenge again."}
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
              Submit Challenge
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

export default UnitChallenge3Page;