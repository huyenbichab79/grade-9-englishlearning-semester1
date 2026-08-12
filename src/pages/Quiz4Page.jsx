import { useState } from "react";

const quizQuestions = [
  {
    category: "VOCABULARY",
    question:
      "People can visit an ______ to see traditional clothes and musical instruments.",
    options: ["exhibition", "plantation", "staircase", "population"],
    answer: "exhibition",
    explanation:
      "An exhibition is an event where objects are shown to the public.",
  },
  {
    category: "VOCABULARY",
    question:
      "The decorations on the communal house are very detailed and ______.",
    options: ["elaborate", "minority", "wooden", "open-air"],
    answer: "elaborate",
    explanation:
      "Elaborate means carefully made with many details.",
  },
  {
    category: "VOCABULARY",
    question:
      "The sun image may ______ an important belief of the community.",
    options: ["raise", "represent", "weave", "account for"],
    answer: "represent",
    explanation:
      "Represent means to show or stand for an idea.",
  },
  {
    category: "VOCABULARY",
    question:
      "A necklace, bracelet, or decorative object can be called an ______.",
    options: ["ornament", "architecture", "region", "crop"],
    answer: "ornament",
    explanation:
      "An ornament is an object used for decoration.",
  },
  {
    category: "VOCABULARY",
    question:
      "People use ______ to make baskets, houses, and farming tools.",
    options: ["bamboo", "religion", "population", "soil"],
    answer: "bamboo",
    explanation:
      "Bamboo is a useful plant for making many traditional objects.",
  },
  {
    category: "VOCABULARY",
    question:
      "Ha Long Bay is recognized as a world ______ site.",
    options: ["heritage", "costume", "livestock", "folk"],
    answer: "heritage",
    explanation:
      "A world heritage site is a place recognized for its cultural or natural value.",
  },
  {
    category: "GRAMMAR",
    question:
      "Choose the correct question: ______ do people celebrate the festival?",
    options: ["When", "Whose", "Which one", "How many"],
    answer: "When",
    explanation:
      "When is used to ask about time.",
  },
  {
    category: "GRAMMAR",
    question: "Choose the correct sentence.",
    options: [
      "There are many rice in the basket.",
      "There is some rice in the basket.",
      "There is a few rice in the basket.",
      "There are much rice in the basket.",
    ],
    answer: "There is some rice in the basket.",
    explanation:
      "Rice is uncountable, so use “is” and “some”.",
  },
];

export default function Quiz4Page({ onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[currentQuestion];

  const progress = finished
    ? 100
    : ((currentQuestion + 1) / quizQuestions.length) * 100;

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

  const result =
    score >= 7
      ? {
          icon: "🏆",
          title: "Excellent Work!",
          message: "You understand Unit 4 very well.",
        }
      : score >= 5
        ? {
            icon: "🌟",
            title: "Good Job!",
            message: "Review a few words and try again.",
          }
        : {
            icon: "💪",
            title: "Keep Practising!",
            message: "Return to Vocabulary and learn the words again.",
          };

  return (
    <main className="min-h-screen bg-[#F8F7F7] px-4 py-6 text-slate-950">
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={onBack}
          className="rounded-xl border-4 border-slate-950 bg-white px-5 py-2 font-black shadow-[4px_4px_0_#281911] transition hover:-translate-y-1"
        >
          ← Unit 4
        </button>

        <header className="relative mt-6 overflow-hidden rounded-[2rem] border-4 border-slate-950 bg-[#553424] p-7 text-white shadow-[10px_10px_0_#CA8C6E] md:p-10">
          <div className="absolute -right-12 -top-12 h-44 w-44 rotate-45 border-4 border-slate-950 bg-[#D19C82]" />

          <div className="absolute bottom-5 right-12 text-7xl">
            🏆
          </div>

          <div className="relative max-w-3xl">
            <span className="inline-block border-4 border-white bg-[#D19B81] px-4 py-2 text-sm font-black tracking-[0.2em] shadow-[4px_4px_0_#8B563C]">
              UNIT 4 FINAL QUIZ
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Cultural Knowledge Challenge
            </h1>

            <p className="mt-4 text-lg font-bold text-teal-50">
              Complete eight short questions about vocabulary and grammar.
            </p>
          </div>
        </header>

        <section className="mt-10 rounded-[2rem] border-4 border-slate-950 bg-white p-5 shadow-[7px_7px_0_#281911]">
          <div className="flex items-center justify-between gap-4">
            <span className="font-black">Progress</span>

            <span className="font-black">
              {finished ? quizQuestions.length : currentQuestion + 1}/
              {quizQuestions.length}
            </span>
          </div>

          <div className="mt-3 h-5 overflow-hidden rounded-full border-4 border-slate-950 bg-slate-100">
            <div
              className="h-full bg-[#8B563C] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

        {!finished ? (
          <section className="mt-8 rounded-[2rem] border-4 border-slate-950 bg-[#D19D84] p-6 shadow-[9px_9px_0_#D19B81] md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span
                className={`rounded-full border-4 border-slate-950 px-4 py-2 text-sm font-black ${
                  question.category === "VOCABULARY"
                    ? "bg-[#D19C82]"
                    : "bg-[#8B563C] text-white"
                }`}
              >
                {question.category}
              </span>

              <span className="rounded-full border-4 border-slate-950 bg-white px-5 py-2 font-black">
                Score: {score}/{quizQuestions.length}
              </span>
            </div>

            <div className="mt-7 rounded-[1.5rem] border-4 border-slate-950 bg-[#553424] p-6 text-white md:p-8">
              <p className="font-black tracking-[0.2em] text-[#D19C82]">
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
                    "bg-white text-slate-950 hover:bg-[#EEE9E7]";

                  if (isSelected) {
                    optionStyle = "bg-[#D19C82] text-slate-950";
                  }

                  if (isCorrect) {
                    optionStyle = "bg-lime-300 text-slate-950";
                  }

                  if (isWrong) {
                    optionStyle = "bg-rose-300 text-slate-950";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={checked}
                      onClick={() => setSelectedAnswer(option)}
                      className={`flex items-center gap-4 rounded-xl border-4 border-white p-4 text-left font-black shadow-[4px_4px_0_#281911] transition hover:-translate-y-1 disabled:cursor-default ${optionStyle}`}
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
                      ? "Correct! Well done. 🎉"
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
                    className="rounded-full border-4 border-white bg-[#D19B81] px-7 py-3 font-black shadow-[4px_4px_0_#FFFFFF] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="rounded-full border-4 border-white bg-[#D19C82] px-7 py-3 font-black text-slate-950 shadow-[4px_4px_0_#FFFFFF]"
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
          <section className="mt-8 rounded-[2rem] border-4 border-slate-950 bg-[#8B563C] p-8 text-center text-white shadow-[10px_10px_0_#CA8C6E] md:p-12">
            <div className="text-8xl">{result.icon}</div>

            <p className="mt-5 font-black tracking-[0.2em]">
              QUIZ COMPLETE
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-6xl">
              {result.title}
            </h2>

            <div className="mx-auto mt-7 max-w-lg rounded-[1.5rem] border-4 border-slate-950 bg-white p-7 text-slate-950 shadow-[6px_6px_0_#281911]">
              <p className="text-6xl font-black text-[#D19B81]">
                {score}/8
              </p>

              <p className="mt-4 text-xl font-bold text-slate-700">
                {result.message}
              </p>
            </div>

            <button
              type="button"
              onClick={restartQuiz}
              className="mt-8 rounded-full border-4 border-slate-950 bg-[#D19C82] px-7 py-3 font-black text-slate-950 shadow-[5px_5px_0_#281911]"
            >
              Try Quiz Again
            </button>
          </section>
        )}
      </div>
    </main>
  );
}