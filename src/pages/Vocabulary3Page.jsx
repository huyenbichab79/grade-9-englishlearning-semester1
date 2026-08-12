import { useState } from "react";

const keyWords = [
  {
    word: "assignment",
    meaning: "bài tập, nhiệm vụ",
  },
  {
    word: "deadline",
    meaning: "hạn chót",
  },
  {
    word: "mood",
    meaning: "tâm trạng",
  },
  {
    word: "counsellor",
    meaning: "cố vấn",
  },
  {
    word: "distraction",
    meaning: "sự xao lãng",
  },
  {
    word: "anxiety",
    meaning: "sự lo lắng",
  },
  {
    word: "accomplish",
    meaning: "hoàn thành",
  },
  {
    word: "manage",
    meaning: "quản lý",
  },
  {
    word: "minimize",
    meaning: "giảm thiểu",
  },
  {
    word: "obstacle",
    meaning: "trở ngại",
  },
  {
    word: "optimistic",
    meaning: "lạc quan",
  },
  {
    word: "well-balanced",
    meaning: "cân bằng, cân đối",
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
        prompt: "What does “assignment” mean?",
        answer:
          "A task or piece of work given to a student",
        options: [
          "A task or piece of work given to a student",
          "A feeling of happiness",
          "A person who gives medical treatment",
        ],
        explanation:
          "An assignment is a task or piece of work given to a student.",
      },
      {
        id: "meaning-2",
        level: "Basic",
        prompt: "What does “deadline” mean?",
        answer:
          "The latest time by which something must be completed",
        options: [
          "The latest time by which something must be completed",
          "A regular exercise session",
          "A healthy type of food",
        ],
        explanation:
          "A deadline is the final time or date for completing something.",
      },
      {
        id: "meaning-3",
        level: "Basic",
        prompt: "What does “mood” mean?",
        answer:
          "The way a person feels at a particular time",
        options: [
          "The way a person feels at a particular time",
          "A difficult school subject",
          "A plan for managing money",
        ],
        explanation:
          "Mood describes whether someone feels happy, sad, worried, or angry.",
      },
      {
        id: "meaning-4",
        level: "Basic",
        prompt: "Who is a “counsellor”?",
        answer:
          "A trained person who gives advice and support",
        options: [
          "A trained person who gives advice and support",
          "A student who misses a deadline",
          "A person who sells healthy food",
        ],
        explanation:
          "A counsellor helps people with academic, personal, or emotional problems.",
      },
    ],
  },
  {
    id: "contexts",
    title: "Task 2: Complete the situations",
    instruction:
      "Choose the best word for each situation.",
    questions: [
      {
        id: "context-1",
        level: "Intermediate",
        prompt:
          "Turning off phone notifications can help students avoid ______ while studying.",
        answer: "distractions",
        options: [
          "distractions",
          "assignments",
          "moods",
        ],
        explanation:
          "Distractions take your attention away from your work.",
      },
      {
        id: "context-2",
        level: "Intermediate",
        prompt:
          "Making a weekly schedule helps teenagers ______ their time effectively.",
        answer: "manage",
        options: [
          "punish",
          "manage",
          "suffer",
        ],
        explanation:
          "To manage time means to organise and use it properly.",
      },
      {
        id: "context-3",
        level: "Intermediate",
        prompt:
          "Deep breathing and regular exercise can help ______ stress.",
        answer: "minimize",
        options: [
          "delay",
          "minimize",
          "accomplish",
        ],
        explanation:
          "To minimize something means to reduce it as much as possible.",
      },
      {
        id: "context-4",
        level: "Intermediate",
        prompt:
          "Lack of time can be a major ______ to maintaining a healthy lifestyle.",
        answer: "obstacle",
        options: [
          "priority",
          "encouragement",
          "obstacle",
        ],
        explanation:
          "An obstacle is a difficulty that prevents progress.",
      },
      {
        id: "context-5",
        level: "Intermediate",
        prompt:
          "Even when schoolwork is difficult, Minh remains ______ and believes he can improve.",
        answer: "optimistic",
        options: [
          "urgent",
          "optimistic",
          "stressed out",
        ],
        explanation:
          "An optimistic person expects positive results.",
      },
    ],
  },
  {
    id: "challenge",
    title: "Task 3: Vocabulary challenge",
    instruction:
      "Choose the best synonym or conclusion.",
    questions: [
      {
        id: "challenge-1",
        level: "Advanced",
        prompt:
          "Which word is closest in meaning to “accomplish”?",
        answer: "complete",
        options: [
          "complete",
          "delay",
          "forget",
        ],
        explanation:
          "To accomplish a task means to complete it successfully.",
      },
      {
        id: "challenge-2",
        level: "Advanced",
        prompt:
          "Which student has a well-balanced lifestyle?",
        answer:
          "Hoa studies, exercises, rests, and spends time with her family.",
        options: [
          "Hoa studies, exercises, rests, and spends time with her family.",
          "Nam studies all night and never takes a break.",
          "Lan spends all her free time using her phone.",
        ],
        explanation:
          "A well-balanced lifestyle includes study, exercise, rest, and social activities.",
      },
      {
        id: "challenge-3",
        level: "Advanced",
        prompt:
          "Mai completes urgent homework before watching videos. What does she give priority to?",
        answer: "Her urgent homework",
        options: [
          "Her urgent homework",
          "Watching videos",
          "Using social media",
        ],
        explanation:
          "A priority is something that is more important and should be done first.",
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#DDB9CA] bg-[#F0EBED] text-[#782D50]",
  Intermediate:
    "border-[#DCB6C8] bg-[#F2EEF0] text-[#803156]",
  Advanced:
    "border-[#E1CCD6] bg-[#F4F0F2] text-[#953964]",
};

function Vocabulary3Page({
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
    <main className="min-h-screen bg-[#F9F7F8] px-4 py-6 text-[#702B4B] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="rounded-[32px] border border-white bg-[#EDE6E9] p-6 shadow-lg sm:p-8">
          <button
            type="button"
            onClick={onBack}
            className="rounded-xl bg-white px-4 py-2 font-bold text-[#782D50] shadow-sm transition hover:-translate-y-0.5"
          >
            ← Back to Unit 3
          </button>

          <p className="mt-6 font-bold uppercase tracking-[0.18em] text-[#C56290]">
            Unit 3 · Activity 1
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Healthy Living Vocabulary
          </h1>

          <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#9F3D6B]">
            Learn useful words about schoolwork,
            stress, time management, and a
            well-balanced lifestyle.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-4 text-center">
              <p className="text-2xl font-black text-[#782D50]">
                12
              </p>

              <p className="mt-1 text-sm font-bold text-[#9F3D6B]">
                Key words
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 p-4 text-center">
              <p className="text-2xl font-black text-[#782D50]">
                12
              </p>

              <p className="mt-1 text-sm font-bold text-[#9F3D6B]">
                Questions
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 p-4 text-center">
              <p className="text-2xl font-black text-[#782D50]">
                3
              </p>

              <p className="mt-1 text-sm font-bold text-[#9F3D6B]">
                Levels
              </p>
            </div>
          </div>
        </header>

        <section className="mt-7 rounded-[28px] border border-[#EBDEE5] bg-white p-5 shadow-md sm:p-6">
          <div>
            <p className="font-bold uppercase tracking-[0.14em] text-[#C56290]">
              Word bank
            </p>

            <h2 className="mt-1 text-2xl font-black text-[#702B4B]">
              Key vocabulary
            </h2>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {keyWords.map((item) => (
              <div
                key={item.word}
                className="rounded-2xl border border-[#EBDDE4] bg-[#F9F8F8] p-4"
              >
                <p className="font-black text-[#782D50]">
                  {item.word}
                </p>

                <p className="mt-1 text-sm font-medium text-[#9F3D6B]">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-[22px] border border-[#EAE2E6] bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-black text-[#782D50]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#9F3D6B]">
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
                        className="rounded-[26px] border border-[#EAE2E6] bg-white p-5 shadow-md sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-black text-[#C56290]">
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

                        <p className="mt-4 text-lg font-bold leading-7 text-[#702B4B]">
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
                                "border-[#EADBE2] bg-[#FBFBFB] text-[#89345C] hover:border-[#CF7DA3] hover:bg-[#F6F2F4]";

                              if (
                                isSelected &&
                                !submitted
                              ) {
                                optionStyle =
                                  "border-[#B04376] bg-[#EFE8EB] text-[#622541]";
                              }

                              if (
                                submitted &&
                                isCorrect
                              ) {
                                optionStyle =
                                  "border-[#B04376] bg-[#EDE6E9] text-[#652643]";
                              }

                              if (
                                submitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionStyle =
                                  "border-[#D09DB5] bg-[#F3EEF0] text-[#A43F6E]";
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
                                ? "bg-[#F4F0F2]"
                                : "bg-[#F9F7F8]"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                selectedIsCorrect
                                  ? "text-[#782D50]"
                                  : "text-[#B9447B]"
                              }`}
                            >
                              {selectedIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this answer"}
                            </p>

                            <p className="mt-1 leading-6 text-[#9F3D6B]">
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
          <p className="mt-7 rounded-2xl border border-[#D6ABBF] bg-[#F4F0F2] p-4 text-center font-bold text-[#853259]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] border border-[#E3D0D9] bg-[#F0EAED] p-7 text-center shadow-md">
            <p className="font-bold uppercase tracking-[0.16em] text-[#C56290]">
              Your result
            </p>

            <p className="mt-2 text-5xl font-black text-[#782D50]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#702B4B]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#9F3D6B]">
              {scorePercent >= 85
                ? "Excellent! You understand the key vocabulary very well."
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
              className="rounded-2xl bg-[#823157] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#6B2847]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#C56290] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#BB477D]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Vocabulary3Page;