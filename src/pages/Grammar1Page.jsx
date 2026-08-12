import { useState } from "react";

const questions = [
  {
    id: 1,
    sentence:
      "I do not know ______ at the craft village.",
    answer: "what to buy",
    options: [
      "what to buy",
      "what buy",
      "to buy what",
    ],
  },
  {
    id: 2,
    sentence:
      "Can you show me ______ this pottery bowl?",
    answer: "how to make",
    options: [
      "how make",
      "how to make",
      "to make how",
    ],
  },
  {
    id: 3,
    sentence:
      "Lan cannot decide ______ for help.",
    answer: "who to ask",
    options: [
      "who ask",
      "to ask who",
      "who to ask",
    ],
  },
  {
    id: 4,
    sentence:
      "We need to know ______ for the local market.",
    answer: "when to leave",
    options: [
      "when to leave",
      "when leave",
      "to leave when",
    ],
  },
  {
    id: 5,
    sentence:
      "Please tell me ______ to the community centre.",
    answer: "how to get",
    options: [
      "how get",
      "how to get",
      "to get how",
    ],
  },
  {
    id: 6,
    sentence:
      "Nam is not sure ______ to the craft village.",
    answer: "which bus to take",
    options: [
      "which bus take",
      "to take which bus",
      "which bus to take",
    ],
  },
  {
    id: 7,
    sentence:
      "The students are discussing ______ for the trip.",
    answer: "what to bring",
    options: [
      "what to bring",
      "what bring",
      "to bring what",
    ],
  },
  {
    id: 8,
    sentence:
      "Mai wants to know ______ after school.",
    answer: "where to go",
    options: [
      "where go",
      "where to go",
      "to go where",
    ],
  },
];

function Grammar1Page({
  onBack,
  onComplete,
}) {
  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const correctAnswers = questions.filter(
    (question) =>
      selectedAnswers[question.id] ===
      question.answer
  ).length;

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
  };

  const handleSubmit = () => {
    if (
      Object.keys(selectedAnswers).length <
      questions.length
    ) {
      setMessage(
        "Please answer all questions."
      );
      return;
    }

    setSubmitted(true);

    setMessage(
      `You got ${correctAnswers} out of ${questions.length} correct.`
    );

    if (onComplete) {
      onComplete({
        correctAnswers,
        totalQuestions: questions.length,
      });
    }
  };

  const handleTryAgain = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-[#F7F6F6] px-4 py-6 text-[#774424] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-4xl">
        <button
          type="button"
          onClick={onBack}
          className="rounded-xl bg-white px-4 py-2 font-bold text-[#BA7245] shadow-sm transition hover:-translate-y-0.5"
        >
          ← Back to Unit 1
        </button>

        <header className="mt-5 rounded-[30px] bg-[#F2EEEC] p-6 shadow-md sm:p-8">
          <p className="font-bold uppercase tracking-[0.18em] text-[#804927]">
            Activity 3
          </p>

          <h1 className="mt-2 text-3xl font-black text-[#C88E6A] sm:text-4xl">
            Grammar
          </h1>

          <p className="mt-3 text-lg font-medium">
            Choose the correct question word
            and to-infinitive.
          </p>

          <div className="mt-5 rounded-2xl bg-white/80 p-4">
            <p className="font-black">
              Examples
            </p>

            <p className="mt-2">
              what to do • where to go •
              how to make
            </p>
          </div>
        </header>

        <section className="mt-6 space-y-5">
          {questions.map(
            (question, index) => {
              const selected =
                selectedAnswers[
                  question.id
                ];

              return (
                <article
                  key={question.id}
                  className="rounded-[24px] bg-white p-5 shadow-md"
                >
                  <p className="font-black text-[#C88E6A]">
                    Question {index + 1}
                  </p>

                  <p className="mt-2 text-lg font-bold leading-7">
                    {question.sentence}
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
                          "border-[#E7DDD7] bg-white";

                        if (
                          submitted &&
                          isCorrect
                        ) {
                          optionStyle =
                            "border-[#8B4F2A] bg-[#EFEBE8]";
                        } else if (
                          submitted &&
                          isSelected &&
                          !isCorrect
                        ) {
                          optionStyle =
                            "border-[#C88E6A] bg-[#F2EEEC]";
                        } else if (
                          isSelected
                        ) {
                          optionStyle =
                            "border-[#8B4F2A] bg-[#F3F0EF]";
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
                            className={`rounded-xl border-2 px-4 py-3 text-left font-bold transition ${optionStyle}`}
                          >
                            {option}
                          </button>
                        );
                      }
                    )}
                  </div>
                </article>
              );
            }
          )}
        </section>

        {message && (
          <div className="mt-6 rounded-2xl bg-[#EAE5E1] p-4 text-center text-lg font-black">
            {message}
          </div>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitted}
            className="rounded-xl bg-[#8B4F2A] px-6 py-3 font-black text-white shadow-md transition hover:bg-[#744223] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Submit Answers
          </button>

          {submitted && (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-xl bg-[#C88E6A] px-6 py-3 font-black text-white shadow-md"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Grammar1Page;