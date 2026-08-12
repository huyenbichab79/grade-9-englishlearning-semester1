import { useState } from "react";

const questions = [
  {
    id: 1,
    category: "Vocabulary",
    prompt:
      "An artisan is a person who ______.",
    answer: "makes things by hand",
    options: [
      "makes things by hand",
      "drives a bus",
      "teaches at a school",
    ],
  },
  {
    id: 2,
    category: "Vocabulary",
    prompt:
      "A souvenir helps us remember ______.",
    answer: "a place or an event",
    options: [
      "a place or an event",
      "a difficult lesson",
      "a school subject",
    ],
  },
  {
    id: 3,
    category: "Vocabulary",
    prompt:
      "To preserve a tradition means to ______ it.",
    answer: "protect and keep",
    options: [
      "protect and keep",
      "break and forget",
      "sell and change",
    ],
  },
  {
    id: 4,
    category: "Phrasal Verbs",
    prompt:
      "We want to ______ more about the local festival.",
    answer: "find out",
    options: [
      "find out",
      "move in",
      "come back",
    ],
  },
  {
    id: 5,
    category: "Phrasal Verbs",
    prompt:
      "Older artisans ______ their skills to young people.",
    answer: "pass down",
    options: [
      "run out of",
      "pass down",
      "look around",
    ],
  },
  {
    id: 6,
    category: "Phrasal Verbs",
    prompt:
      "We should ______ plastic bags.",
    answer: "cut down on",
    options: [
      "take care of",
      "come back",
      "cut down on",
    ],
  },
  {
    id: 7,
    category: "Grammar",
    prompt:
      "I do not know ______ at the market.",
    answer: "what to buy",
    options: [
      "what buy",
      "what to buy",
      "to buy what",
    ],
  },
  {
    id: 8,
    category: "Grammar",
    prompt:
      "Can you tell me ______ to the craft village?",
    answer: "how to get",
    options: [
      "how to get",
      "how get",
      "to get how",
    ],
  },
  {
    id: 9,
    category: "Grammar",
    prompt:
      "Lan cannot decide ______ for help.",
    answer: "who to ask",
    options: [
      "who ask",
      "to ask who",
      "who to ask",
    ],
  },
  {
    id: 10,
    category: "Reading",
    passage:
      "Minh lives near a small craft village. His family makes wooden toys. At weekends, visitors come to watch them work.",
    prompt:
      "What does Minh's family make?",
    answer: "Wooden toys",
    options: [
      "Wooden toys",
      "Pottery bowls",
      "School bags",
    ],
  },
  {
    id: 11,
    category: "Reading",
    passage:
      "Mai visits the community centre every Saturday. She reads books and helps younger children.",
    prompt:
      "When does Mai visit the community centre?",
    answer: "Every Saturday",
    options: [
      "Every Monday",
      "Every Saturday",
      "Every evening",
    ],
  },
  {
    id: 12,
    category: "Reading",
    passage:
      "People in the village plant trees and clean the streets. They want their community to be green and clean.",
    prompt:
      "Why do people plant trees and clean the streets?",
    answer:
      "They want a green and clean community.",
    options: [
      "They want a green and clean community.",
      "They want to build a new market.",
      "They want to sell more products.",
    ],
  },
];

function UnitChallenge1Page({
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

        <header className="mt-5 rounded-[30px] bg-[#EAE5E1] p-6 shadow-md sm:p-8">
          <p className="font-bold uppercase tracking-[0.18em] text-[#804927]">
            Activity 5
          </p>

          <h1 className="mt-2 text-3xl font-black text-[#C88E6A] sm:text-4xl">
            Unit Challenge
          </h1>

          <p className="mt-3 text-lg font-medium">
            Review vocabulary, phrasal verbs,
            grammar, and reading.
          </p>

          <div className="mt-5 rounded-2xl bg-white/80 p-4">
            <p className="font-black">
              12 questions
            </p>

            <p className="mt-1 text-[#A96133]">
              Choose one answer for each
              question.
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
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-black text-[#C88E6A]">
                      Question {index + 1}
                    </p>

                    <span className="rounded-full bg-[#EFEBE8] px-3 py-1 text-sm font-black text-[#804927]">
                      {question.category}
                    </span>
                  </div>

                  {question.passage && (
                    <div className="mt-4 rounded-2xl bg-[#F6F4F3] p-4 font-medium leading-7 text-[#93542D]">
                      {question.passage}
                    </div>
                  )}

                  <p className="mt-4 text-lg font-bold leading-7">
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
          <div className="mt-7 rounded-2xl bg-[#EAE5E1] p-4 text-center text-lg font-black">
            {message}
          </div>
        )}

        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitted}
            className="rounded-xl bg-[#8B4F2A] px-6 py-3 font-black text-white shadow-md transition hover:bg-[#744223] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Submit Challenge
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

export default UnitChallenge1Page;