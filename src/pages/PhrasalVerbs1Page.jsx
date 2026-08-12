import { useState } from "react";

const questions = [
  {
    id: 1,
    sentence:
      "Let’s ______ the craft village and visit some workshops.",
    answer: "look around",
    options: [
      "look around",
      "come back",
      "move in",
    ],
  },
  {
    id: 2,
    sentence:
      "We need to ______ more about the local festival.",
    answer: "find out",
    options: [
      "take care of",
      "find out",
      "run out of",
    ],
  },
  {
    id: 3,
    sentence:
      "We have ______ milk, so I will go to the shop.",
    answer: "run out of",
    options: [
      "come back",
      "pass down",
      "run out of",
    ],
  },
  {
    id: 4,
    sentence:
      "Older people often ______ traditional skills to young people.",
    answer: "pass down",
    options: [
      "pass down",
      "move in",
      "look around",
    ],
  },
  {
    id: 5,
    sentence:
      "Please ______ my cat while I am away.",
    answer: "take care of",
    options: [
      "find out",
      "cut down on",
      "take care of",
    ],
  },
  {
    id: 6,
    sentence:
      "My family will ______ to our new house next week.",
    answer: "move in",
    options: [
      "move in",
      "come back",
      "pass down",
    ],
  },
  {
    id: 7,
    sentence:
      "We should ______ plastic bags to protect the environment.",
    answer: "cut down on",
    options: [
      "run out of",
      "cut down on",
      "look around",
    ],
  },
  {
    id: 8,
    sentence:
      "My brother will ______ to his hometown tomorrow.",
    answer: "come back",
    options: [
      "take care of",
      "find out",
      "come back",
    ],
  },
];

function PhrasalVerbs1Page({
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

  const handleSelect = (questionId, option) => {
    if (submitted) return;

    setSelectedAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: option,
    }));
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

        <header className="mt-5 rounded-[30px] bg-[#F6F4F3] p-6 shadow-md sm:p-8">
          <p className="font-bold uppercase tracking-[0.18em] text-[#804927]">
            Activity 2
          </p>

          <h1 className="mt-2 text-3xl font-black text-[#C88E6A] sm:text-4xl">
            Phrasal Verbs
          </h1>

          <p className="mt-3 text-lg font-medium">
            Choose the correct phrasal verb to
            complete each sentence.
          </p>
        </header>

        <section className="mt-6 space-y-5">
          {questions.map((question, index) => {
            const selected =
              selectedAnswers[question.id];

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
                      } else if (isSelected) {
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
          })}
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

export default PhrasalVerbs1Page;