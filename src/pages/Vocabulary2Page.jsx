import { useState } from "react";

const questions = [
  {
    id: 1,
    level: "Basic",
    word: "traffic jam",
    meaning:
      "A long line of vehicles that cannot move or move very slowly.",
    options: [
      "A long line of vehicles that cannot move or move very slowly.",
      "A railway station under the ground.",
      "A quiet street outside the city.",
    ],
  },
  {
    id: 2,
    level: "Basic",
    word: "underground",
    meaning:
      "A railway system that runs below the ground.",
    options: [
      "A railway system that runs below the ground.",
      "A road for bicycles only.",
      "A large outdoor market.",
    ],
  },
  {
    id: 3,
    level: "Basic",
    word: "downtown",
    meaning:
      "The central part of a city.",
    options: [
      "The countryside around a city.",
      "The central part of a city.",
      "A village near the mountains.",
    ],
  },
  {
    id: 4,
    level: "Basic",
    word: "construction site",
    meaning:
      "A place where a building or road is being built.",
    options: [
      "A place where people wait for buses.",
      "A place where a building or road is being built.",
      "A place where tourists buy tickets.",
    ],
  },
  {
    id: 5,
    level: "Intermediate",
    word: "packed with",
    meaning:
      "Completely full of people or things.",
    options: [
      "Completely full of people or things.",
      "Very clean and peaceful.",
      "Far away from the city centre.",
    ],
  },
  {
    id: 6,
    level: "Intermediate",
    word: "congestion",
    meaning:
      "A situation in which roads are too crowded with traffic.",
    options: [
      "A situation in which roads are too crowded with traffic.",
      "A system for collecting rubbish.",
      "A place for public entertainment.",
    ],
  },
  {
    id: 7,
    level: "Intermediate",
    word: "polluted",
    meaning:
      "Made dirty or harmful by waste, smoke, or chemicals.",
    options: [
      "Made more beautiful with trees.",
      "Made dirty or harmful by waste, smoke, or chemicals.",
      "Made safer for pedestrians.",
    ],
  },
  {
    id: 8,
    level: "Intermediate",
    word: "dusty",
    meaning:
      "Covered with or full of dust.",
    options: [
      "Covered with or full of dust.",
      "Filled with clean water.",
      "Surrounded by tall trees.",
    ],
  },
  {
    id: 9,
    level: "Advanced",
    word: "unreliable",
    meaning:
      "Not working well or not able to be trusted.",
    options: [
      "Easy to use and always available.",
      "Not working well or not able to be trusted.",
      "Modern, fast, and comfortable.",
    ],
  },
  {
    id: 10,
    level: "Advanced",
    word: "car exhaust",
    meaning:
      "Waste gases that come out of a car engine.",
    options: [
      "The noise made by car horns.",
      "Waste gases that come out of a car engine.",
      "The fuel used to power buses.",
    ],
  },
  {
    id: 11,
    level: "Advanced",
    word: "public amenities",
    meaning:
      "Useful public places and services for people in an area.",
    options: [
      "Private houses owned by rich people.",
      "Useful public places and services for people in an area.",
      "Old buildings that are no longer used.",
    ],
  },
  {
    id: 12,
    level: "Advanced",
    word: "rush hour",
    meaning:
      "The time when roads and public transport are busiest.",
    options: [
      "The time when roads and public transport are busiest.",
      "The time when all shops are closed.",
      "The quietest time of the night.",
    ],
  },
];

const levelStyles = {
  Basic: "bg-emerald-100 text-emerald-700",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced: "bg-violet-100 text-violet-700",
};

function Vocabulary2Page({
  onBack,
  onComplete,
}) {
  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const totalQuestions = questions.length;

  const correctAnswers = questions.filter(
    (question) =>
      selectedAnswers[question.id] ===
      question.meaning
  ).length;

  const handleSelect = (
    questionId,
    answer
  ) => {
    if (submitted) return;

    setSelectedAnswers(
      (currentAnswers) => ({
        ...currentAnswers,
        [questionId]: answer,
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

  const scorePercent = Math.round(
    (correctAnswers / totalQuestions) * 100
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F9F9FA] via-[#FBFBFB] to-[#F8F9FA] px-4 py-6 text-[#2F446D] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="relative overflow-hidden rounded-[32px] border border-white bg-gradient-to-br from-[#E5E8ED] via-[#EEEFF2] to-[#F1F2F5] p-6 shadow-lg sm:p-8">
          <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/40" />
          <div className="pointer-events-none absolute bottom-5 right-24 h-20 w-20 rounded-full bg-violet-300/20" />

          <div className="relative">
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl bg-white px-4 py-2 font-bold text-[#324975] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Back to Unit 2
            </button>

            <p className="mt-6 font-bold uppercase tracking-[0.18em] text-violet-600">
              Unit 2 · Activity 1
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-5xl">
              City Vocabulary
            </h1>

            <p className="mt-3 max-w-2xl text-base font-medium leading-7 text-[#42609A]">
              Learn important words about city
              transport, pollution, buildings,
              and public services.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-700">
                🟢 Basic
              </span>

              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-black text-amber-700">
                🟡 Intermediate
              </span>

              <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-black text-violet-700">
                🟣 Advanced
              </span>
            </div>
          </div>
        </header>

        <section className="mt-7 space-y-5">
          {questions.map(
            (question, index) => {
              const selectedAnswer =
                selectedAnswers[
                  question.id
                ];

              const isCorrect =
                selectedAnswer ===
                question.meaning;

              return (
                <article
                  key={question.id}
                  className="rounded-[28px] border border-white bg-white/90 p-5 shadow-md backdrop-blur-sm sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F1F2F5] font-black text-[#324975]">
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h2 className="text-2xl font-black text-[#2F446D]">
                          {question.word}
                        </h2>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-black ${levelStyles[question.level]}`}
                        >
                          {question.level}
                        </span>
                      </div>

                      <div className="mt-4 grid gap-3">
                        {question.options.map(
                          (option) => {
                            const isSelected =
                              selectedAnswer ===
                              option;

                            const isAnswer =
                              option ===
                              question.meaning;

                            let optionStyle =
                              "border-[#DADFE9] bg-[#FBFBFB] text-[#3B5588] hover:border-[#6E8ECA]";

                            if (
                              isSelected &&
                              !submitted
                            ) {
                              optionStyle =
                                "border-[#364F7F] bg-[#E8EBEF] text-[#27395B]";
                            }

                            if (
                              submitted &&
                              isSelected
                            ) {
                              optionStyle =
                                isCorrect
                                  ? "border-[#364F7F] bg-[#E8EBEF] text-[#27395B]"
                                  : "border-rose-300 bg-rose-50 text-rose-700";
                            }

                            if (
                              submitted &&
                              isAnswer &&
                              !isCorrect
                            ) {
                              optionStyle =
                                "border-[#364F7F] bg-[#E8EBEF] text-[#27395B]";
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
                                className={`rounded-2xl border-2 px-4 py-3 text-left font-bold leading-6 transition ${optionStyle}`}
                              >
                                {option}
                              </button>
                            );
                          }
                        )}
                      </div>

                      {submitted && (
                        <p
                          className={`mt-3 font-black ${
                            isCorrect
                              ? "text-[#324975]"
                              : "text-rose-600"
                          }`}
                        >
                          {isCorrect
                            ? "✓ Correct"
                            : "✗ Review the correct answer above"}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </section>

        {message && (
          <p className="mt-6 rounded-2xl bg-[#ECEEF2] p-4 text-center font-bold text-[#456DBA]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] bg-gradient-to-r from-[#E8EBEF] to-[#F1F2F5] p-6 text-center shadow-md">
            <p className="font-bold uppercase tracking-[0.16em] text-[#324975]">
              Your result
            </p>

            <p className="mt-2 text-5xl font-black text-violet-600">
              {correctAnswers}/{totalQuestions}
            </p>

            <p className="mt-2 font-bold text-[#42609A]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#42609A]">
              {scorePercent >= 85
                ? "Excellent work! You are ready for the next activity."
                : scorePercent >= 65
                  ? "Good job! Review the difficult words and try again."
                  : "Keep practising. Start with the Basic words first."}
            </p>
          </section>
        )}

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#364F7F] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#2D426A]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-violet-600 px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Vocabulary2Page;