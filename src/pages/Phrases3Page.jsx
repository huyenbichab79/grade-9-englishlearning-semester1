import { useState } from "react";

const phraseBank = [
  {
    phrase: "stressed out",
    meaning: "very worried or under pressure",
  },
  {
    phrase: "take a break",
    meaning: "stop working for a short rest",
  },
  {
    phrase: "give priority to",
    meaning: "treat something as more important",
  },
  {
    phrase: "stay focused on",
    meaning: "continue paying attention to something",
  },
  {
    phrase: "work out",
    meaning: "exercise to improve fitness",
  },
  {
    phrase: "bring about",
    meaning: "cause something to happen",
  },
  {
    phrase: "get rid of",
    meaning: "remove something unwanted",
  },
  {
    phrase: "stay up",
    meaning: "remain awake late at night",
  },
  {
    phrase: "get through",
    meaning: "successfully overcome a difficult time",
  },
  {
    phrase: "keep away from",
    meaning: "avoid someone or something",
  },
];

const exerciseGroups = [
  {
    id: "meanings",
    title: "Task 1: Match the meanings",
    instruction:
      "Choose the correct meaning of each phrase.",
    questions: [
      {
        id: "meaning-1",
        level: "Basic",
        prompt:
          "What does “stressed out” mean?",
        answer:
          "Very worried or under pressure",
        options: [
          "Very worried or under pressure",
          "Relaxed and full of energy",
          "Interested in physical exercise",
        ],
        explanation:
          "Someone who is stressed out feels worried, tired, or under pressure.",
      },
      {
        id: "meaning-2",
        level: "Basic",
        prompt:
          "What does “take a break” mean?",
        answer:
          "Stop working for a short rest",
        options: [
          "Stop working for a short rest",
          "Continue working all night",
          "Finish an assignment early",
        ],
        explanation:
          "Taking a break means resting for a short period before continuing.",
      },
      {
        id: "meaning-3",
        level: "Basic",
        prompt:
          "What does “work out” mean in this unit?",
        answer:
          "Do physical exercise",
        options: [
          "Do physical exercise",
          "Solve every school problem",
          "Prepare a daily timetable",
        ],
        explanation:
          "In the topic of healthy living, “work out” means to exercise.",
      },
      {
        id: "meaning-4",
        level: "Basic",
        prompt:
          "What does “stay up” mean?",
        answer:
          "Remain awake late at night",
        options: [
          "Remain awake late at night",
          "Wake up early in the morning",
          "Sit correctly in class",
        ],
        explanation:
          "To stay up means not going to bed and remaining awake.",
      },
    ],
  },
  {
    id: "completion",
    title: "Task 2: Complete the situations",
    instruction:
      "Choose the best phrase for each situation.",
    questions: [
      {
        id: "completion-1",
        level: "Intermediate",
        prompt:
          "Teenagers should ______ sleep and rest when planning their daily routine.",
        answer: "give priority to",
        options: [
          "give priority to",
          "get rid of",
          "put on",
        ],
        explanation:
          "To give priority to something means to consider it especially important.",
      },
      {
        id: "completion-2",
        level: "Intermediate",
        prompt:
          "Turn off phone notifications so that you can ______ your assignment.",
        answer: "stay focused on",
        options: [
          "stay focused on",
          "stay up",
          "keep away from",
        ],
        explanation:
          "Staying focused means continuing to pay attention to the task.",
      },
      {
        id: "completion-3",
        level: "Intermediate",
        prompt:
          "Drinking enough water helps the body ______ waste products.",
        answer: "get rid of",
        options: [
          "bring about",
          "get rid of",
          "get through",
        ],
        explanation:
          "To get rid of something means to remove it.",
      },
      {
        id: "completion-4",
        level: "Intermediate",
        prompt:
          "Eating too much junk food may cause teenagers to ______ weight.",
        answer: "put on",
        options: [
          "put on",
          "take a break",
          "stay focused on",
        ],
        explanation:
          "To put on weight means to become heavier.",
      },
      {
        id: "completion-5",
        level: "Intermediate",
        prompt:
          "To maintain good health, teenagers should ______ cigarettes and alcohol.",
        answer: "keep away from",
        options: [
          "get through",
          "keep away from",
          "bring about",
        ],
        explanation:
          "To keep away from something means to avoid it.",
      },
    ],
  },
  {
    id: "challenge",
    title: "Task 3: Phrase challenge",
    instruction:
      "Choose the most suitable phrase or sentence.",
    questions: [
      {
        id: "challenge-1",
        level: "Advanced",
        prompt:
          "Linh felt anxious before her exams, but support from her family helped her ______ the difficult period.",
        answer: "get through",
        options: [
          "get through",
          "stay up",
          "put on",
        ],
        explanation:
          "To get through a difficult period means to overcome it successfully.",
      },
      {
        id: "challenge-2",
        level: "Advanced",
        prompt:
          "Which sentence uses “bring about” correctly?",
        answer:
          "Regular exercise can bring about positive changes in a teenager’s mood.",
        options: [
          "Regular exercise can bring about positive changes in a teenager’s mood.",
          "Mai brings about at the home gym every evening.",
          "We should bring about junk food to stay healthy.",
        ],
        explanation:
          "“Bring about” means to cause a result or change.",
      },
      {
        id: "challenge-3",
        level: "Advanced",
        prompt:
          "Which student follows the healthiest study habit?",
        answer:
          "An studies for forty minutes, takes a short break, and then continues.",
        options: [
          "An studies for forty minutes, takes a short break, and then continues.",
          "Binh stays up until 2 a.m. to finish every assignment.",
          "Chi checks social media every five minutes while studying.",
        ],
        explanation:
          "Short, planned breaks can help students maintain concentration and reduce stress.",
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

function Phrases3Page({
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
            Unit 3 · Activity 2
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Healthy Habits & Phrases
          </h1>

          <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#A84070]">
            Practise useful expressions about
            exercise, sleep, studying, stress,
            and healthy daily routines.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/75 p-4 text-center">
              <p className="text-2xl font-black text-[#AD4274]">
                10
              </p>

              <p className="mt-1 text-sm font-bold text-[#A84070]">
                Key phrases
              </p>
            </div>

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
                3
              </p>

              <p className="mt-1 text-sm font-bold text-[#A84070]">
                Advanced questions
              </p>
            </div>
          </div>
        </header>

        <section className="mt-7 rounded-[28px] border border-[#EBDDE4] bg-white p-5 shadow-md sm:p-6">
          <p className="font-bold uppercase tracking-[0.14em] text-[#C76693]">
            Phrase bank
          </p>

          <h2 className="mt-1 text-2xl font-black text-[#732C4D]">
            Useful expressions
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {phraseBank.map((item) => (
              <div
                key={item.phrase}
                className="rounded-2xl border border-[#EAE3E6] bg-[#FBFAFA] p-4"
              >
                <p className="font-black text-[#AD4274]">
                  {item.phrase}
                </p>

                <p className="mt-1 text-sm font-medium leading-5 text-[#A84070]">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

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
                ? "Excellent! You can use healthy-living phrases confidently."
                : scorePercent >= 65
                  ? "Good work! Review the phrases in difficult situations."
                  : "Review the phrase bank and try the activity again."}
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

export default Phrases3Page;