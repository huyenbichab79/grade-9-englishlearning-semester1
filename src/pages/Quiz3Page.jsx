import { useState } from "react";

const quizQuestions = [
  {
    category: "VOCABULARY",
    question:
      "Which word means “to look through information on the Internet”?",
    options: ["browse", "upload", "advise", "focus"],
    answer: "browse",
    explanation:
      "Browse means to look through websites or online information.",
  },
  {
    category: "VOCABULARY",
    question:
      "Which word means “a message from an app or website that gives new information”?",
    options: ["account", "notification", "competition", "pressure"],
    answer: "notification",
    explanation:
      "A notification is an alert or message from an app or website.",
  },
  {
    category: "VOCABULARY",
    question:
      "Which word describes the ability to work successfully with other people?",
    options: ["schoolwork", "teamwork", "stress", "media"],
    answer: "teamwork",
    explanation:
      "Teamwork means working effectively together as a group.",
  },
  {
    category: "VOCABULARY",
    question:
      "Which word means “to give someone advice about what they should do”?",
    options: ["connect", "post", "advise", "share"],
    answer: "advise",
    explanation:
      "Advise means to suggest what another person should do.",
  },
  {
    category: "GRAMMAR",
    question: "Which sentence is a simple sentence?",
    options: [
      "I felt tired, but I finished my homework.",
      "Lan joined the club, and she made new friends.",
      "Nam logs on and checks his messages.",
      "I had a test, so I studied carefully.",
    ],
    answer: "Nam logs on and checks his messages.",
    explanation:
      "This sentence has one subject and two verbs, but only one independent clause.",
  },
  {
    category: "GRAMMAR",
    question:
      "Choose the best conjunction: Mai enjoys social media, ______ she limits her screen time.",
    options: ["and", "but", "so", "for"],
    answer: "but",
    explanation:
      "But shows a contrast between enjoying social media and limiting screen time.",
  },
  {
    category: "GRAMMAR",
    question: "Which sentence is punctuated correctly?",
    options: [
      "I felt stressed so, I took a break.",
      "I felt stressed, so I took a break.",
      "I felt, stressed so I took a break.",
      "I felt stressed so I, took a break.",
    ],
    answer: "I felt stressed, so I took a break.",
    explanation:
      "Use a comma before a coordinating conjunction that joins two independent clauses.",
  },
  {
    category: "GRAMMAR",
    question: "Which sentence uses “therefore” correctly?",
    options: [
      "She studied hard, therefore she passed the test.",
      "She studied hard therefore; she passed the test.",
      "She studied hard; therefore, she passed the test.",
      "She studied; hard therefore she passed the test.",
    ],
    answer: "She studied hard; therefore, she passed the test.",
    explanation:
      "Use a semicolon before “therefore” and a comma after it.",
  },
];

export default function Quiz3Page({ onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[currentQuestion];

  const progress =
    ((currentQuestion + (finished ? 1 : 0)) / quizQuestions.length) * 100;

  const checkAnswer = () => {
    if (!selectedAnswer || checked) return;

    if (selectedAnswer === question.answer) {
      setScore((previousScore) => previousScore + 1);
    }

    setChecked(true);
  };

  const nextQuestion = () => {
    if (currentQuestion === quizQuestions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    setSelectedAnswer("");
    setChecked(false);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setChecked(false);
    setScore(0);
    setFinished(false);
  };

  const resultMessage = () => {
    if (score === 8) {
      return {
        icon: "🏆",
        title: "Perfect Score!",
        message: "Excellent! You have mastered Unit 3.",
      };
    }

    if (score >= 6) {
      return {
        icon: "🌟",
        title: "Great Work!",
        message: "You understand most of the Unit 3 content.",
      };
    }

    if (score >= 4) {
      return {
        icon: "👏",
        title: "Good Effort!",
        message: "Review a few lessons and try the quiz again.",
      };
    }

    return {
      icon: "💪",
      title: "Keep Practising!",
      message: "Return to Vocabulary and Grammar before trying again.",
    };
  };

  const result = resultMessage();

  return (
    <main className="min-h-screen bg-[#FAF9F9] px-4 py-6 text-slate-950">
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={onBack}
          className="rounded-xl border-4 border-slate-950 bg-white px-5 py-2 font-black shadow-[4px_4px_0_#29101C] transition hover:-translate-y-1"
        >
          ← Unit 3
        </button>

        <header className="relative mt-6 overflow-hidden rounded-[2rem] border-4 border-slate-950 bg-fuchsia-500 p-7 text-white shadow-[10px_10px_0_#9E3C6A] md:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-4 border-slate-950 bg-yellow-300" />
          <div className="absolute bottom-4 right-12 rotate-12 text-7xl">
            🏁
          </div>

          <div className="relative max-w-3xl">
            <span className="inline-block rotate-[-2deg] border-4 border-slate-950 bg-lime-300 px-4 py-2 text-sm font-black tracking-[0.2em] text-slate-950 shadow-[4px_4px_0_#FFFFFF]">
              FINAL QUIZ
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Unit 3 Challenge
            </h1>

            <p className="mt-4 text-lg font-bold text-fuchsia-100">
              Test your vocabulary and grammar knowledge. Take your time and
              choose carefully.
            </p>
          </div>
        </header>

        <section className="mt-10 rounded-[2rem] border-4 border-slate-950 bg-white p-5 shadow-[8px_8px_0_#29101C]">
          <div className="flex items-center justify-between gap-4">
            <span className="font-black">
              Progress
            </span>

            <span className="font-black">
              {finished
                ? quizQuestions.length
                : currentQuestion + 1}
              /{quizQuestions.length}
            </span>
          </div>

          <div className="mt-3 h-5 overflow-hidden rounded-full border-4 border-slate-950 bg-slate-100">
            <div
              className="h-full bg-lime-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

        {!finished ? (
          <section className="mt-8 rounded-[2rem] border-4 border-slate-950 bg-cyan-300 p-6 shadow-[10px_10px_0_#C86C97] md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span
                className={`rounded-full border-4 border-slate-950 px-4 py-2 text-sm font-black ${
                  question.category === "VOCABULARY"
                    ? "bg-yellow-300"
                    : "bg-fuchsia-400 text-white"
                }`}
              >
                {question.category}
              </span>

              <span className="rounded-full border-4 border-slate-950 bg-white px-5 py-2 font-black">
                Score: {score}/{quizQuestions.length}
              </span>
            </div>

            <div className="mt-7 rounded-[1.5rem] border-4 border-slate-950 bg-slate-950 p-6 text-white md:p-8">
              <p className="font-black tracking-[0.2em] text-cyan-200">
                QUESTION {currentQuestion + 1}
              </p>

              <h2 className="mt-5 text-xl font-black leading-relaxed md:text-3xl">
                {question.question}
              </h2>

              <div className="mt-7 grid gap-4">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrect =
                    checked && option === question.answer;
                  const isWrong =
                    checked &&
                    isSelected &&
                    option !== question.answer;

                  let optionStyle =
                    "bg-white text-slate-950 hover:bg-cyan-100";

                  if (isSelected) {
                    optionStyle = "bg-yellow-300 text-slate-950";
                  }

                  if (isCorrect) {
                    optionStyle = "bg-lime-300 text-slate-950";
                  }

                  if (isWrong) {
                    optionStyle = "bg-rose-400 text-slate-950";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={checked}
                      onClick={() => setSelectedAnswer(option)}
                      className={`flex items-center gap-4 rounded-xl border-4 border-white p-4 text-left font-black shadow-[4px_4px_0_#AD4274] transition hover:-translate-y-1 disabled:cursor-default ${optionStyle}`}
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-slate-950 bg-white text-slate-950">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {checked && (
                <div
                  className={`mt-7 rounded-xl border-4 border-white p-5 text-slate-950 ${
                    selectedAnswer === question.answer
                      ? "bg-lime-300"
                      : "bg-rose-300"
                  }`}
                >
                  <p className="font-black">
                    {selectedAnswer === question.answer
                      ? "Correct! Excellent work. 🎉"
                      : `Correct answer: ${question.answer}`}
                  </p>

                  <p className="mt-2 font-semibold">
                    {question.explanation}
                  </p>
                </div>
              )}

              <div className="mt-7 flex justify-end">
                {!checked ? (
                  <button
                    type="button"
                    disabled={!selectedAnswer}
                    onClick={checkAnswer}
                    className="rounded-full border-4 border-white bg-fuchsia-500 px-7 py-3 font-black shadow-[4px_4px_0_#FFFFFF] transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="rounded-full border-4 border-white bg-yellow-300 px-7 py-3 font-black text-slate-950 shadow-[4px_4px_0_#FFFFFF] transition hover:-translate-y-1"
                  >
                    {currentQuestion === quizQuestions.length - 1
                      ? "See Final Result"
                      : "Next Question →"}
                  </button>
                )}
              </div>
            </div>
          </section>
        ) : (
          <section className="mt-8 rounded-[2rem] border-4 border-slate-950 bg-lime-300 p-8 text-center shadow-[10px_10px_0_#C86C97] md:p-12">
            <div className="text-8xl">
              {result.icon}
            </div>

            <p className="mt-5 font-black tracking-[0.2em]">
              QUIZ COMPLETE
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-6xl">
              {result.title}
            </h2>

            <div className="mx-auto mt-7 max-w-lg rounded-[1.5rem] border-4 border-slate-950 bg-white p-7 shadow-[6px_6px_0_#29101C]">
              <p className="text-6xl font-black text-fuchsia-500">
                {score}/8
              </p>

              <p className="mt-4 text-xl font-bold text-slate-700">
                {result.message}
              </p>
            </div>

            <button
              type="button"
              onClick={restartQuiz}
              className="mt-8 rounded-full border-4 border-slate-950 bg-fuchsia-500 px-7 py-3 font-black text-white shadow-[5px_5px_0_#29101C] transition hover:-translate-y-1"
            >
              Try Quiz Again
            </button>
          </section>
        )}
      </div>
    </main>
  );
}