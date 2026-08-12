import { useState } from "react";

const shortPassage = `Last summer, Nam joined an eco-tour with his school club. He had never travelled without his family before, so he felt both excited and nervous. During the trip, the students stayed at a campsite near a national park.

On the first day, they put up tents, explored the forest, and learned about the local flora and fauna. Nam also met a wildlife photographer by chance. The photographer showed the students how to observe animals without disturbing them.

The following morning, Nam gave a short presentation about protecting nature. At first, his mind went blank. However, his friends encouraged him, and he completed the presentation successfully. Since the trip, Nam has become more confident. He has also joined two environmental projects at school.`;

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
          "Which word describes an experience that is worth remembering?",
        answer: "memorable",
        options: [
          "memorable",
          "helpless",
          "strict",
        ],
        explanation:
          "A memorable experience is special enough to be remembered for a long time.",
      },
      {
        id: "basic-2",
        level: "Basic",
        category: "Vocabulary",
        prompt:
          "What is a campsite?",
        answer:
          "A place where people stay in tents",
        options: [
          "A place where people stay in tents",
          "A place where people perform on stage",
          "A place where people study marine animals",
        ],
        explanation:
          "A campsite is an area prepared for camping and putting up tents.",
      },
      {
        id: "basic-3",
        level: "Basic",
        category: "Phrases",
        prompt:
          "What does “go blank” mean?",
        answer:
          "Suddenly become unable to remember or think",
        options: [
          "Suddenly become unable to remember or think",
          "Become extremely confident",
          "Learn something through repetition",
        ],
        explanation:
          "When your mind goes blank, you temporarily cannot remember what to say or do.",
      },
      {
        id: "basic-4",
        level: "Basic",
        category: "Phrases",
        prompt:
          "What does “by chance” mean?",
        answer:
          "Accidentally or without planning",
        options: [
          "Accidentally or without planning",
          "After careful preparation",
          "At the same time every week",
        ],
        explanation:
          "By chance describes an event that was not planned.",
      },
    ],
  },
  {
    id: "apply-knowledge",
    title: "Part 2: Apply Your Knowledge",
    instruction:
      "Apply vocabulary, phrases, and present perfect grammar.",
    questions: [
      {
        id: "intermediate-1",
        level: "Intermediate",
        category: "Vocabulary",
        prompt:
          "The view from the top of the mountain was absolutely ______.",
        answer: "magnificent",
        options: [
          "magnificent",
          "embarrassing",
          "helpless",
        ],
        explanation:
          "Magnificent describes something extremely beautiful or impressive.",
      },
      {
        id: "intermediate-2",
        level: "Intermediate",
        category: "Phrases",
        prompt:
          "Before it became dark, the students ______ at the campsite.",
        answer: "put up their tents",
        options: [
          "put up their tents",
          "learned the tents by rote",
          "went blank on purpose",
        ],
        explanation:
          "Campers put up tents before staying at a campsite.",
      },
      {
        id: "intermediate-3",
        level: "Intermediate",
        category: "Grammar",
        prompt:
          "Mai ______ three team-building courses so far.",
        answer: "has attended",
        options: [
          "has attended",
          "attended",
          "have attended",
        ],
        explanation:
          "So far is commonly used with the present perfect: has attended.",
      },
      {
        id: "intermediate-4",
        level: "Intermediate",
        category: "Grammar",
        prompt:
          "We have known our instructor ______ two years.",
        answer: "for",
        options: [
          "for",
          "since",
          "yet",
        ],
        explanation:
          "For is used with a period of time such as two years.",
      },
      {
        id: "intermediate-5",
        level: "Intermediate",
        category: "Grammar",
        prompt:
          "Choose the correct sentence.",
        answer:
          "I visited the coral reef last summer.",
        options: [
          "I visited the coral reef last summer.",
          "I have visited the coral reef last summer.",
          "I have visit the coral reef last summer.",
        ],
        explanation:
          "Last summer is a finished past time, so the past simple is required.",
      },
    ],
  },
  {
    id: "final-challenge",
    title: "Part 3: Final Challenge",
    instruction:
      "Read the passage and complete the advanced questions.",
    passage: shortPassage,
    questions: [
      {
        id: "advanced-1",
        level: "Advanced",
        category: "Reading",
        prompt:
          "What helped Nam complete his presentation?",
        answer:
          "Encouragement from his friends",
        options: [
          "Encouragement from his friends",
          "A written speech from the photographer",
          "Leaving the presentation early",
        ],
        explanation:
          "Nam's friends encouraged him after his mind went blank.",
      },
      {
        id: "advanced-2",
        level: "Advanced",
        category: "Grammar",
        prompt:
          "Choose the sentence with the same meaning.\n\nNam started participating in environmental projects after the trip and still participates now.",
        answer:
          "Nam has participated in environmental projects since the trip.",
        options: [
          "Nam has participated in environmental projects since the trip.",
          "Nam participated in environmental projects since the trip.",
          "Nam has participated in environmental projects last summer.",
        ],
        explanation:
          "An action that started in the past and continues now uses the present perfect with since.",
      },
      {
        id: "advanced-3",
        level: "Advanced",
        category: "Writing",
        prompt:
          "Choose the best order for the paragraph.\n\nA. As a result, I have become more confident when facing new challenges.\nB. Last month, I joined an adventure course with my classmates.\nC. First, we learned how to use the safety equipment.\nD. Finally, we completed a difficult climbing activity together.",
        answer: "B → C → D → A",
        options: [
          "B → C → D → A",
          "A → D → C → B",
          "C → A → B → D",
        ],
        explanation:
          "The paragraph begins with the experience, gives the activities in order, and ends with the result.",
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

const categoryStyles = {
  Vocabulary:
    "bg-[#E3DED1] text-[#7F621E]",
  Phrases:
    "bg-[#EDEAE5] text-[#8C6C21]",
  Grammar:
    "bg-[#EDEBE6] text-[#8B6C21]",
  Reading:
    "bg-[#EEECE7] text-[#695119]",
  Writing:
    "bg-[#E8E4D9] text-[#7D601D]",
};

function UnitChallenge5Page({
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
              Unit 5 · Activity 6
            </p>

            <h1 className="mt-2 font-serif text-4xl font-bold italic text-[#644D17] sm:text-5xl">
              Unit Challenge
            </h1>

            <p className="mt-4 max-w-2xl text-lg font-medium leading-7 text-[#807969]">
              Complete the final challenge to
              review vocabulary, phrases,
              present perfect, reading, and
              writing from Unit 5.
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
                  5
                </p>

                <p className="mt-1 text-sm font-bold text-[#807969]">
                  Learning areas
                </p>
              </article>

              <article className="rounded-[22px] border border-[#D5C8A8] bg-[#ECEAE5] p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#967423]">
                  3
                </p>

                <p className="mt-1 text-sm font-bold text-[#807969]">
                  Difficulty levels
                </p>
              </article>
            </div>
          </div>
        </header>

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

              {group.passage && (
                <article className="mb-5 rounded-[28px] border border-[#CBB174] bg-[#ECEAE5] p-5 shadow-[0_10px_24px_rgba(113,87,26,0.08)] sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-black uppercase tracking-[0.14em] text-[#9C7925]">
                        Short reading
                      </p>

                      <h3 className="mt-2 font-serif text-3xl font-bold italic text-[#644D17]">
                        An Experience That Changed
                        Nam
                      </h3>
                    </div>

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                      🌳
                    </span>
                  </div>

                  <p className="mt-5 whitespace-pre-line text-[17px] font-medium leading-8 text-[#9C7824]">
                    {group.passage}
                  </p>
                </article>
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

                        <p className="mt-4 whitespace-pre-line text-lg font-bold leading-7 text-[#644D17]">
                          {question.prompt}
                        </p>

                        <div className="mt-4 grid gap-3">
                          {question.options.map(
                            (option) => {
                              const isSelected =
                                selected === option;

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
              Unit 5 result
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
                ? "Excellent! You have completed Unit 5 successfully."
                : scorePercent >= 65
                  ? "Good work! Review the difficult questions before moving to the next unit."
                  : "Review the Unit 5 activities and try the challenge again."}
            </p>

            {scorePercent >= 85 && (
              <div className="mx-auto mt-5 max-w-lg rounded-[24px] border border-[#D5C8A8] bg-[#ECEAE5] p-5">
                <p className="text-4xl">
                  🏆
                </p>

                <p className="mt-2 font-serif text-2xl font-bold italic text-[#886920]">
                  Experience Explorer
                </p>

                <p className="mt-2 text-sm font-medium leading-6 text-[#807969]">
                  You can describe memorable
                  experiences and explain how
                  they help people learn and
                  grow.
                </p>
              </div>
            )}
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#695119] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#544114]"
            >
              Submit Challenge
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

export default UnitChallenge5Page;