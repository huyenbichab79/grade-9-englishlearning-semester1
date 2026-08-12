import { useState } from "react";

const miniPassage = `Rivertown used to have serious traffic congestion during rush hour. Last year, the city authority expanded the metro system and added more cycling lanes. It also improved public amenities such as parks, libraries, and recycling points. Since then, more residents have chosen public transport instead of private cars. The air has become cleaner, and the downtown area is less congested. However, the authority still needs to improve hygiene around local markets.`;

const exerciseGroups = [
  {
    id: "basic-review",
    title: "Part 1: Quick Review",
    instruction:
      "Choose the correct answer to review key words and phrases.",
    questions: [
      {
        id: "basic-1",
        level: "Basic",
        category: "Vocabulary",
        prompt:
          "What does “traffic congestion” mean?",
        answer:
          "A situation in which roads are crowded with vehicles",
        options: [
          "A situation in which roads are crowded with vehicles",
          "A place where people watch films",
          "A system for collecting food waste",
        ],
        explanation:
          "Traffic congestion happens when too many vehicles use the roads.",
      },
      {
        id: "basic-2",
        level: "Basic",
        category: "Vocabulary",
        prompt:
          "Which is an example of a public amenity?",
        answer: "A public library",
        options: [
          "A public library",
          "A private bedroom",
          "A school uniform",
        ],
        explanation:
          "Public amenities are services or facilities provided for everyone.",
      },
      {
        id: "basic-3",
        level: "Basic",
        category: "City Phrases",
        prompt:
          "It is easy to ______ the city by metro.",
        answer: "get around",
        options: [
          "get around",
          "come down with",
          "get stuck in",
        ],
        explanation:
          "“Get around” means to travel from place to place.",
      },
      {
        id: "basic-4",
        level: "Basic",
        category: "Vocabulary",
        prompt:
          "Which transport system usually runs underground?",
        answer: "Metro",
        options: [
          "Metro",
          "Tram",
          "Bicycle lane",
        ],
        explanation:
          "A metro is an underground urban railway system.",
      },
    ],
  },
  {
    id: "application",
    title: "Part 2: Apply Your Knowledge",
    instruction:
      "Use vocabulary, phrases, and grammar in city-life situations.",
    questions: [
      {
        id: "intermediate-1",
        level: "Intermediate",
        category: "City Phrases",
        prompt:
          "The local authority will ______ a survey about public transport.",
        answer: "carry out",
        options: [
          "carry out",
          "hang out with",
          "come down with",
        ],
        explanation:
          "“Carry out a survey” means to conduct a survey.",
      },
      {
        id: "intermediate-2",
        level: "Intermediate",
        category: "City Phrases",
        prompt:
          "Lan has a sore throat and a runny nose. She may be ______ a cold.",
        answer: "coming down with",
        options: [
          "getting around",
          "coming down with",
          "picking up",
        ],
        explanation:
          "“Come down with” means to become ill with a disease.",
      },
      {
        id: "intermediate-3",
        level: "Intermediate",
        category: "Grammar",
        prompt:
          "Choose the correct sentence.",
        answer:
          "The more reliable public transport becomes, the fewer private cars people use.",
        options: [
          "The more reliable public transport becomes, the fewer private cars people use.",
          "More reliable public transport becomes, fewer cars people use.",
          "The reliabler public transport is, the less cars people use.",
        ],
        explanation:
          "A double comparative uses “the + comparative” in both parts.",
      },
      {
        id: "intermediate-4",
        level: "Intermediate",
        category: "Grammar",
        prompt:
          "Complete the sentence: The more public amenities a city provides, ______.",
        answer:
          "the more liveable it becomes",
        options: [
          "the more liveable it becomes",
          "it becomes the liveabler",
          "more liveable the city becomes",
        ],
        explanation:
          "The correct second part begins with “the more + adjective”.",
      },
      {
        id: "intermediate-5",
        level: "Intermediate",
        category: "Writing",
        prompt:
          "Which is the best topic sentence for a paragraph about city transport?",
        answer:
          "Reliable public transport is essential for a liveable city.",
        options: [
          "Reliable public transport is essential for a liveable city.",
          "My family went shopping last Sunday.",
          "There are five people in my English group.",
        ],
        explanation:
          "A topic sentence clearly introduces the main idea of the paragraph.",
      },
    ],
  },
  {
    id: "advanced-challenge",
    title: "Part 3: Final Challenge",
    instruction:
      "Read the short passage and choose the best answers.",
    passage: miniPassage,
    questions: [
      {
        id: "advanced-1",
        level: "Advanced",
        category: "Reading",
        prompt:
          "Which change helped reduce traffic congestion in Rivertown?",
        answer:
          "The city expanded the metro and added cycling lanes.",
        options: [
          "The city expanded the metro and added cycling lanes.",
          "The city closed all public libraries.",
          "The city increased the number of private cars.",
        ],
        explanation:
          "Better public transport and cycling facilities encouraged fewer people to use private cars.",
      },
      {
        id: "advanced-2",
        level: "Advanced",
        category: "Reading",
        prompt:
          "What can be inferred from the passage?",
        answer:
          "City life improved, but Rivertown still has a hygiene problem to solve.",
        options: [
          "City life improved, but Rivertown still has a hygiene problem to solve.",
          "All city problems were solved immediately.",
          "Residents stopped using public transport.",
        ],
        explanation:
          "The city became cleaner and less congested, but market hygiene still needs improvement.",
      },
      {
        id: "advanced-3",
        level: "Advanced",
        category: "Writing",
        prompt:
          "Choose the best order for the paragraph.\n\nA. Therefore, the city should continue improving its public transport system.\nB. Traffic congestion affects many people during rush hour.\nC. Reliable buses and metro services can reduce the number of private cars.\nD. The more convenient public transport becomes, the easier city travel is.",
        answer: "B → C → D → A",
        options: [
          "B → C → D → A",
          "A → B → D → C",
          "C → A → B → D",
        ],
        explanation:
          "The paragraph begins with the problem, gives a solution and explanation, then ends with a recommendation.",
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#C1CADA] bg-[#EBEDF1] text-[#324976]",
  Intermediate:
    "border-[#B5C2DB] bg-[#ECEEF1] text-[#364E7D]",
  Advanced:
    "border-[#CBD2E0] bg-[#EFF1F4] text-[#3E5A90]",
};

const categoryStyles = {
  Vocabulary:
    "bg-[#ECEEF2] text-[#324976]",
  "City Phrases":
    "bg-[#EFF1F4] text-[#3C588D]",
  Grammar:
    "bg-[#F0F2F4] text-[#4565A2]",
  Reading:
    "bg-[#F0F1F4] text-[#3C578C]",
  Writing:
    "bg-[#EFF1F4] text-[#3E5A90]",
};

function UnitChallenge2Page({
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
    <main className="min-h-screen bg-[#F6F6F7] px-4 py-6 text-[#2F446D] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="rounded-[32px] border border-white bg-[#E5E7EC] p-6 shadow-lg sm:p-8">
          <button
            type="button"
            onClick={onBack}
            className="rounded-xl bg-white px-4 py-2 font-bold text-[#2F446D] shadow-sm transition hover:-translate-y-0.5"
          >
            ← Back to Unit 2
          </button>

          <p className="mt-6 font-bold uppercase tracking-[0.18em] text-[#6486C6]">
            Unit 2 · Activity 6
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Unit Challenge
          </h1>

          <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#42609A]">
            Complete the final challenge to
            review everything you have learned
            about city life.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-4 text-center">
              <p className="text-2xl font-black text-[#324976]">
                12
              </p>

              <p className="mt-1 text-sm font-bold text-[#42609A]">
                Questions
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 p-4 text-center">
              <p className="text-2xl font-black text-[#324976]">
                5
              </p>

              <p className="mt-1 text-sm font-bold text-[#42609A]">
                Learning areas
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 p-4 text-center">
              <p className="text-2xl font-black text-[#324976]">
                3
              </p>

              <p className="mt-1 text-sm font-bold text-[#42609A]">
                Advanced questions
              </p>
            </div>
          </div>
        </header>

        <section className="mt-8 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-[22px] border border-[#E2E5EA] bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-black text-[#324976]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#42609A]">
                  {group.instruction}
                </p>
              </div>

              {group.passage && (
                <div className="mb-5 rounded-[24px] border border-[#DBE0E9] bg-[#F7F7F8] p-5 shadow-sm sm:p-6">
                  <p className="font-bold uppercase tracking-[0.14em] text-[#6486C6]">
                    Short reading
                  </p>

                  <p className="mt-3 text-[17px] font-medium leading-8 text-[#395384]">
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
                        className="rounded-[26px] border border-[#E2E5EA] bg-white p-5 shadow-md sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-black text-[#6486C6]">
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

                        <p className="mt-4 whitespace-pre-line text-lg font-bold leading-7 text-[#2F446D]">
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
                                "border-[#DBE0EA] bg-[#FBFBFB] text-[#395384] hover:border-[#7D99CF] hover:bg-[#F2F3F6]";

                              if (
                                isSelected &&
                                !submitted
                              ) {
                                optionStyle =
                                  "border-[#4869A8] bg-[#E8EBEF] text-[#293B5E]";
                              }

                              if (
                                submitted &&
                                isCorrect
                              ) {
                                optionStyle =
                                  "border-[#4869A8] bg-[#E6E8ED] text-[#2A3D61]";
                              }

                              if (
                                submitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionStyle =
                                  "border-[#9DAED0] bg-[#EEF0F3] text-[#44639F]";
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
                                ? "bg-[#F0F1F4]"
                                : "bg-[#F7F8F9]"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                selectedIsCorrect
                                  ? "text-[#324976]"
                                  : "text-[#446CB9]"
                              }`}
                            >
                              {selectedIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this answer"}
                            </p>

                            <p className="mt-1 leading-6 text-[#42609A]">
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
          <p className="mt-7 rounded-2xl border border-[#ABBAD6] bg-[#F0F1F4] p-4 text-center font-bold text-[#375080]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] border border-[#D0D7E3] bg-[#EAECF0] p-7 text-center shadow-md">
            <p className="font-bold uppercase tracking-[0.16em] text-[#6486C6]">
              Unit 2 result
            </p>

            <p className="mt-2 text-5xl font-black text-[#324976]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#2F446D]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#42609A]">
              {scorePercent >= 85
                ? "Excellent! You have completed Unit 2 successfully."
                : scorePercent >= 65
                  ? "Good work! Review the explanations before moving to the next unit."
                  : "Review Vocabulary, Grammar, Reading, and Writing before trying again."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#364E7D] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#2C4067]"
            >
              Submit Challenge
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#6486C6] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#4A71BC]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default UnitChallenge2Page;