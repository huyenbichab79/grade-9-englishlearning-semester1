import { useState } from "react";

const questions = [
  {
    id: "basic-1",
    level: "Basic",
    skill: "Vocabulary",
    prompt:
      "Which phrase describes a family containing grandparents, parents, and children?",
    options: [
      "extended family",
      "generation gap",
      "electronic device",
    ],
    answer: "extended family",
    explanation:
      "An extended family includes several generations and may include other relatives.",
  },
  {
    id: "basic-2",
    level: "Basic",
    skill: "Phrases",
    prompt:
      "Which phrase means “write down important information”?",
    options: [
      "take notes",
      "give up",
      "go abroad",
    ],
    answer: "take notes",
    explanation:
      "Take notes means to record important information in writing.",
  },
  {
    id: "basic-3",
    level: "Basic",
    skill: "Grammar",
    prompt:
      "My cousin decided ______ Vietnamese before moving to Hanoi.",
    options: [
      "to learn",
      "learning",
      "learn",
    ],
    answer: "to learn",
    explanation:
      "Decide is followed by a to-infinitive.",
  },
  {
    id: "basic-4",
    level: "Basic",
    skill: "Reading",
    prompt:
      "Which form of transport was commonly used in Vietnam before motorbikes became popular?",
    options: [
      "bicycles",
      "planes",
      "high-speed trains",
    ],
    answer: "bicycles",
    explanation:
      "Bicycles were a common form of transport in the past.",
  },
  {
    id: "intermediate-1",
    level: "Intermediate",
    skill: "Vocabulary",
    prompt:
      "Differences in values between younger and older people may create a ______.",
    options: [
      "generation gap",
      "learning facility",
      "natural material",
    ],
    answer: "generation gap",
    explanation:
      "A generation gap is a difference in attitudes or values between generations.",
  },
  {
    id: "intermediate-2",
    level: "Intermediate",
    skill: "Phrases",
    prompt:
      "Choose the correct sentence.",
    options: [
      "Modern schools provide students with better learning facilities.",
      "Modern schools provide with students better learning facilities.",
      "Modern schools provide students better learning facilities with.",
    ],
    answer:
      "Modern schools provide students with better learning facilities.",
    explanation:
      "The correct structure is provide someone with something.",
  },
  {
    id: "intermediate-3",
    level: "Intermediate",
    skill: "Grammar",
    prompt:
      "I remember ______ hide-and-seek with my cousins when I was young.",
    options: [
      "playing",
      "to play",
      "play",
    ],
    answer: "playing",
    explanation:
      "Remember doing something means recalling a past experience.",
  },
  {
    id: "intermediate-4",
    level: "Intermediate",
    skill: "Grammar",
    prompt:
      "Grandmother stopped ______ some water before continuing her walk.",
    options: [
      "to drink",
      "drinking",
      "drink",
    ],
    answer: "to drink",
    explanation:
      "Stop to do something means pausing one activity in order to do another.",
  },
  {
    id: "intermediate-5",
    level: "Intermediate",
    skill: "Writing",
    prompt:
      "Choose the grammatically correct sentence.",
    options: [
      "We should avoid wasting water because it is a precious resource.",
      "We should avoid to waste water because it is a precious resource.",
      "We should avoiding waste water because it is a precious resource.",
    ],
    answer:
      "We should avoid wasting water because it is a precious resource.",
    explanation:
      "Avoid is followed by V-ing.",
  },
  {
    id: "advanced-1",
    level: "Advanced",
    skill: "Grammar",
    prompt:
      "The old house needs to be repaired. Which sentence has the same meaning?",
    options: [
      "The old house needs repairing.",
      "The old house needs to repairing.",
      "The old house needs repair itself.",
    ],
    answer:
      "The old house needs repairing.",
    explanation:
      "Need + V-ing can express a passive meaning.",
  },
  {
    id: "advanced-2",
    level: "Advanced",
    skill: "Reading",
    prompt:
      "Which conclusion best reflects the message of Unit 6?",
    options: [
      "Families can respect tradition while accepting positive modern changes.",
      "Modern technology should completely replace family traditions.",
      "Young and older people should avoid speaking to one another.",
    ],
    answer:
      "Families can respect tradition while accepting positive modern changes.",
    explanation:
      "The unit encourages balance, communication, and mutual respect between generations.",
  },
  {
    id: "advanced-3",
    level: "Advanced",
    skill: "Writing",
    prompt:
      "Choose the most logical paragraph order.",
    options: [
      "Introduction → Firstly → Secondly → Lastly → Conclusion",
      "Conclusion → Secondly → Introduction → Firstly → Lastly",
      "Firstly → Conclusion → Introduction → Lastly → Secondly",
    ],
    answer:
      "Introduction → Firstly → Secondly → Lastly → Conclusion",
    explanation:
      "A clear paragraph introduces its topic, develops ordered points, and ends with a conclusion.",
  },
];

const levelStyles = {
  Basic:
    "border-[#CFDCB6] bg-[#F0F2EC] text-[#607633]",
  Intermediate:
    "border-[#BECF9C] bg-[#E9ECE4] text-[#688137]",
  Advanced:
    "border-[#C7D6A9] bg-[#F3F4F0] text-[#83A246]",
};

const skillStyles = {
  Vocabulary:
    "bg-[#ECEEE8] text-[#607633]",
  Phrases:
    "bg-[#EDEFE9] text-[#6E883A]",
  Grammar:
    "bg-[#E9ECE4] text-[#688137]",
  Reading:
    "bg-[#F0F2EC] text-[#657D36]",
  Writing:
    "bg-[#F3F4F0] text-[#83A246]",
};

function UnitChallenge6Page({
  onBack,
  onComplete,
}) {
  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const totalQuestions =
    questions.length;

  const correctAnswers =
    questions.filter(
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
        "Please answer all 12 questions before submitting."
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
    <main className="min-h-screen bg-[#EFF1EB] px-4 py-6 text-[#3F4E21] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="relative overflow-hidden rounded-[34px] border border-[#B7D183] bg-gradient-to-br from-[#FBFBFA] via-[#E9ECE4] to-[#F0F2EC] p-6 shadow-[0_14px_35px_rgba(88,109,47,0.13)] sm:p-8">
          <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-[#BFD09C]/30" />

          <div className="pointer-events-none absolute bottom-8 right-40 h-20 w-20 rounded-full bg-[#6F893B]/18" />

          <div className="pointer-events-none absolute right-8 top-20 select-none text-[130px] font-black leading-none text-[#A1C35E]/15">
            06
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl border border-[#BECF9C] bg-white px-4 py-2 font-bold text-[#688137] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F7F7F6]"
            >
              ← Back to Unit 6
            </button>

            <p className="mt-6 font-black uppercase tracking-[0.18em] text-[#7B9841]">
              Unit 6 · Activity 6
            </p>

            <h1 className="mt-2 font-serif text-4xl font-bold italic text-[#3F4E21] sm:text-5xl">
              Unit Challenge
            </h1>

            <p className="mt-4 max-w-3xl text-lg font-medium leading-7 text-[#777F68]">
              Complete the final mixed challenge
              covering vocabulary, phrases,
              grammar, reading, and writing from
              Unit 6.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <article className="rounded-[22px] border border-[#BECF9C] bg-white/75 p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#7B9841]">
                  12
                </p>

                <p className="mt-1 text-sm font-bold text-[#777F68]">
                  Final questions
                </p>
              </article>

              <article className="rounded-[22px] border border-[#CFDCB6] bg-[#F0F2EC] p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#6F893B]">
                  5
                </p>

                <p className="mt-1 text-sm font-bold text-[#777F68]">
                  Skills reviewed
                </p>
              </article>

              <article className="rounded-[22px] border border-[#C7D6A9] bg-[#F3F4F0] p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#96BC49]">
                  3
                </p>

                <p className="mt-1 text-sm font-bold text-[#777F68]">
                  Difficulty levels
                </p>
              </article>
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["🏛️", "Vocabulary"],
            ["🔗", "Phrases"],
            ["✍️", "Grammar"],
            ["📖", "Reading"],
            ["🧱", "Writing"],
          ].map(([icon, label]) => (
            <article
              key={label}
              className="rounded-[22px] border border-[#CFDCB6] bg-[#FBFBFA] p-4 text-center shadow-sm"
            >
              <p className="text-3xl">
                {icon}
              </p>

              <p className="mt-2 font-black text-[#3F4E21]">
                {label}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-8 space-y-5">
          {questions.map(
            (question, index) => {
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
                  className="rounded-[28px] border border-[#CFDCB6] bg-[#FBFBFA] p-5 shadow-[0_10px_24px_rgba(66,82,35,0.07)] sm:p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-black text-[#6F893B]">
                        Question {index + 1}
                      </p>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-black ${skillStyles[question.skill]}`}
                      >
                        {question.skill}
                      </span>
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-bold ${levelStyles[question.level]}`}
                    >
                      {question.level}
                    </span>
                  </div>

                  <p className="mt-4 whitespace-pre-line text-lg font-bold leading-7 text-[#3F4E21]">
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
                          "border-[#DEE4D1] bg-[#FCFCFC] text-[#75913E] hover:border-[#9DC156] hover:bg-[#F0F2EC]";

                        if (
                          isSelected &&
                          !submitted
                        ) {
                          optionStyle =
                            "border-[#6F893B] bg-[#ECEEE8] text-[#4F622A]";
                        }

                        if (
                          submitted &&
                          isCorrect
                        ) {
                          optionStyle =
                            "border-[#97BD4C] bg-[#EEF0EA] text-[#586D2F]";
                        }

                        if (
                          submitted &&
                          isSelected &&
                          !isCorrect
                        ) {
                          optionStyle =
                            "border-[#B5C98E] bg-[#F3F4F0] text-[#83A246]";
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
                          ? "bg-[#EEF0EA]"
                          : "bg-[#F3F4F0]"
                      }`}
                    >
                      <p
                        className={`font-black ${
                          selectedIsCorrect
                            ? "text-[#586D2F]"
                            : "text-[#83A246]"
                        }`}
                      >
                        {selectedIsCorrect
                          ? "✓ Correct"
                          : "✗ Review this answer"}
                      </p>

                      <p className="mt-1 leading-6 text-[#777F68]">
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
        </section>

        {message && (
          <p className="mt-7 rounded-2xl border border-[#BECF9C] bg-[#E9ECE4] p-4 text-center font-bold text-[#5C7131]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[30px] border border-[#BECF9C] bg-gradient-to-br from-[#FBFBFA] to-[#E9ECE4] p-7 text-center shadow-[0_12px_28px_rgba(88,109,47,0.1)]">
            <p className="font-black uppercase tracking-[0.16em] text-[#7B9841]">
              Unit 6 final result
            </p>

            <p className="mt-2 font-serif text-6xl font-bold italic text-[#425223]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#3F4E21]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium leading-7 text-[#777F68]">
              {scorePercent >= 85
                ? "Outstanding! You have completed Unit 6 with a strong understanding of changing lifestyles."
                : scorePercent >= 65
                  ? "Well done! Review the questions you missed, especially the advanced items."
                  : "Review the six activities before attempting the Unit Challenge again."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#A1C35E] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#8AAA49]"
            >
              Submit Unit Challenge
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#425223] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#333F1B]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default UnitChallenge6Page;