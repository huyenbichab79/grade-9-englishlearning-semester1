import { useState } from "react";

const quizQuestions = [
  {
    level: "MEDIUM",
    category: "VOCABULARY",
    question:
      "Which tree has small orange fruit and is often displayed at Tet?",
    options: [
      "kumquat tree",
      "peach tree",
      "bamboo pole",
      "flower village",
    ],
    answer: "kumquat tree",
    explanation:
      "A kumquat tree has small orange fruit and is a popular Tet decoration.",
  },
  {
    level: "MEDIUM",
    category: "VOCABULARY",
    question:
      "Which flowers are popular in northern Viet Nam during Tet?",
    options: [
      "peach blossoms",
      "lotus flowers",
      "sunflowers",
      "orchids",
    ],
    answer: "peach blossoms",
    explanation:
      "Peach blossoms are a traditional Tet decoration in northern Viet Nam.",
  },
  {
    level: "MEDIUM",
    category: "VOCABULARY",
    question:
      "A tall bamboo stick put up during Tet is called a ______.",
    options: [
      "bamboo pole",
      "wooden bell",
      "flower tree",
      "family altar",
    ],
    answer: "bamboo pole",
    explanation:
      "A bamboo pole is a traditional Tet decoration also known as a cây nêu.",
  },
  {
    level: "MEDIUM",
    category: "VOCABULARY",
    question:
      "A wish for grandparents to live a long life is a wish for ______.",
    options: [
      "longevity",
      "decoration",
      "ceremony",
      "bad luck",
    ],
    answer: "longevity",
    explanation:
      "Longevity means living for a long time.",
  },
  {
    level: "MEDIUM",
    category: "VOCABULARY",
    question:
      "Which phrase means “cây được trồng hoặc đặt để trang trí”?",
    options: [
      "ornamental tree",
      "flower village",
      "bamboo pole",
      "peach fruit",
    ],
    answer: "ornamental tree",
    explanation:
      "An ornamental tree is grown mainly to make a place look attractive.",
  },
  {
    level: "MEDIUM",
    category: "VOCABULARY",
    question:
      "Many Vietnamese families ______ their ancestors during Tet.",
    options: [
      "worship",
      "release",
      "admire",
      "decorate",
    ],
    answer: "worship",
    explanation:
      "Worship means to show deep respect to a god or ancestors.",
  },
  {
    level: "MEDIUM",
    category: "GRAMMAR",
    question:
      "It is ______ old custom in this village.",
    options: [
      "a",
      "an",
      "the",
      "no article",
    ],
    answer: "an",
    explanation:
      "Old begins with a vowel sound, so we use “an”.",
  },
  {
    level: "GOOD",
    category: "GRAMMAR",
    question:
      "Learning about local customs is ______ useful activity.",
    options: [
      "a",
      "an",
      "the",
      "no article",
    ],
    answer: "a",
    explanation:
      "Useful begins with the consonant sound /j/, so we use “a”.",
  },
  {
    level: "GOOD",
    category: "GRAMMAR",
    question:
      "Many festivals are held near ______ Mekong River.",
    options: [
      "a",
      "an",
      "the",
      "no article",
    ],
    answer: "the",
    explanation:
      "Use “the” before the names of rivers.",
  },
  {
    level: "ADVANCED",
    category: "GRAMMAR",
    question:
      "Choose the correct articles: We visited ______ ancient pagoda. ______ pagoda was very peaceful.",
    options: [
      "an / The",
      "a / A",
      "the / An",
      "no article / The",
    ],
    answer: "an / The",
    explanation:
      "Use “an” when mentioning the pagoda for the first time, then use “the” because it is now specific.",
  },
];

const levelStyles = {
  MEDIUM: "bg-[#BE9E51] text-[#4B3A11]",
  GOOD: "bg-[#C7AB69] text-[#634C17]",
  ADVANCED: "bg-[#D8CBAD] text-[#574314]",
};

const levelNames = {
  MEDIUM: "MEDIUM",
  GOOD: "GOOD",
  ADVANCED: "ADVANCED",
};

export default function Quiz5Page({ onBack }) {
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
    score >= 9
      ? {
          icon: "🏆",
          title: "Excellent Work!",
          message:
            "You have a strong understanding of Unit 5.",
        }
      : score >= 7
        ? {
            icon: "🌟",
            title: "Good Job!",
            message:
              "You understand most of the important words and grammar.",
          }
        : score >= 5
          ? {
              icon: "👍",
              title: "Nice Effort!",
              message:
                "Review a few lessons and try the quiz again.",
            }
          : {
              icon: "💪",
              title: "Keep Practising!",
              message:
                "Return to Vocabulary and Grammar before trying again.",
            };

  return (
    <main className="min-h-screen bg-[#F7F6F5] px-4 py-6 text-[#4B3A11]">
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border-2 border-[#7E621E] bg-white px-5 py-2 font-black shadow-[4px_4px_0_#7E621E] transition hover:-translate-y-1"
        >
          ← Unit 5
        </button>

        <header className="relative mt-6 overflow-hidden rounded-[2.5rem] border-4 border-[#7E621E] bg-gradient-to-br from-[#AD8528] via-[#BB9947] to-[#7E621E] p-7 text-white shadow-[12px_12px_0_#BE9E51] md:p-11">
          <div className="absolute -right-12 -top-16 text-[11rem] opacity-20">
            🏆
          </div>

          <div className="absolute bottom-6 right-10 hidden text-7xl md:block">
            🏮
          </div>

          <div className="relative max-w-4xl">
            <span className="inline-block rounded-full border-2 border-white bg-[#BE9E51] px-5 py-2 text-sm font-black tracking-[0.18em] text-[#7E621E]">
              UNIT 5 FINAL QUIZ
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Customs and Traditions
              <span className="block text-[#D8CCAF]">
                Knowledge Challenge
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-lg font-bold leading-8 text-red-50">
              Complete ten questions arranged from medium to advanced level.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#BE9E51] px-4 py-2 font-black text-[#4B3A11]">
                7 Medium
              </span>

              <span className="rounded-full bg-[#C7AB69] px-4 py-2 font-black text-[#634C17]">
                2 Good
              </span>

              <span className="rounded-full bg-[#D8CBAD] px-4 py-2 font-black text-[#574314]">
                1 Advanced
              </span>
            </div>
          </div>
        </header>

        <section className="mt-10 rounded-[2rem] border-4 border-[#7E621E] bg-white p-5 shadow-[7px_7px_0_#7E621E]">
          <div className="flex items-center justify-between gap-4">
            <span className="font-black">
              Quiz Progress
            </span>

            <span className="font-black">
              {finished
                ? quizQuestions.length
                : currentQuestion + 1}
              /{quizQuestions.length}
            </span>
          </div>

          <div className="mt-3 h-5 overflow-hidden rounded-full border-2 border-[#7E621E] bg-[#F7F6F5]">
            <div
              className="h-full bg-[#A37E26] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

        {!finished ? (
          <section className="mt-8 rounded-[2.5rem] border-4 border-[#7E621E] bg-[#BE9E51] p-6 shadow-[10px_10px_0_#BB9947] md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span
                className={`rounded-full border-2 border-[#7E621E] px-4 py-2 text-sm font-black ${
                  question.category === "VOCABULARY"
                    ? "bg-white"
                    : "bg-[#A37E26] text-white"
                }`}
              >
                {question.category}
              </span>

              <span
                className={`rounded-full px-4 py-2 text-sm font-black ${
                  levelStyles[question.level]
                }`}
              >
                {levelNames[question.level]}
              </span>

              <span className="rounded-full border-2 border-[#7E621E] bg-white px-5 py-2 font-black">
                Score: {score}/{quizQuestions.length}
              </span>
            </div>

            <div className="mt-7 rounded-[2rem] border-2 border-[#7E621E] bg-[#4B3A11] p-6 text-white md:p-8">
              <p className="font-black tracking-[0.18em] text-[#D8CCAF]">
                QUESTION {currentQuestion + 1}
              </p>

              <h2 className="mt-5 text-xl font-black leading-relaxed md:text-3xl">
                {question.question}
              </h2>

              <div className="mt-7 grid gap-4">
                {question.options.map((option, index) => {
                  const isSelected =
                    selectedAnswer === option;

                  const isCorrect =
                    checked && option === question.answer;

                  const isWrong =
                    checked &&
                    isSelected &&
                    option !== question.answer;

                  let optionStyle =
                    "bg-white text-[#4B3A11] hover:bg-[#F7F6F5]";

                  if (isSelected) {
                    optionStyle =
                      "bg-[#BE9E51] text-[#4B3A11]";
                  }

                  if (isCorrect) {
                    optionStyle =
                      "bg-lime-300 text-[#4B3A11]";
                  }

                  if (isWrong) {
                    optionStyle =
                      "bg-rose-300 text-[#4B3A11]";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={checked}
                      onClick={() =>
                        setSelectedAnswer(option)
                      }
                      className={`flex items-center gap-4 rounded-2xl border-2 border-white p-4 text-left font-black shadow-[4px_4px_0_#7E621E] transition hover:-translate-y-1 disabled:cursor-default ${optionStyle}`}
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-[#7E621E] bg-white text-[#7E621E]">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {checked && (
                <div
                  className={`mt-7 rounded-2xl border-2 border-white p-5 text-[#4B3A11] ${
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
                    className="rounded-full border-2 border-white bg-[#D1BA83] px-7 py-3 font-black shadow-[4px_4px_0_#FFFFFF] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="rounded-full border-2 border-white bg-[#BE9E51] px-7 py-3 font-black text-[#4B3A11] shadow-[4px_4px_0_#FFFFFF]"
                  >
                    {currentQuestion ===
                    quizQuestions.length - 1
                      ? "See Final Result"
                      : "Next Question →"}
                  </button>
                )}
              </div>
            </div>
          </section>
        ) : (
          <section className="mt-8 rounded-[2.5rem] border-4 border-[#7E621E] bg-[#A37E26] p-8 text-center text-white shadow-[12px_12px_0_#BE9E51] md:p-12">
            <div className="text-8xl">
              {result.icon}
            </div>

            <p className="mt-5 font-black tracking-[0.18em]">
              QUIZ COMPLETE
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-6xl">
              {result.title}
            </h2>

            <div className="mx-auto mt-7 max-w-lg rounded-[2rem] border-2 border-[#7E621E] bg-white p-7 text-[#4B3A11] shadow-[6px_6px_0_#7E621E]">
              <p className="text-6xl font-black text-[#BB9947]">
                {score}/{quizQuestions.length}
              </p>

              <p className="mt-4 text-xl font-bold text-slate-700">
                {result.message}
              </p>
            </div>

            <button
              type="button"
              onClick={restartQuiz}
              className="mt-8 rounded-full border-2 border-[#7E621E] bg-[#BE9E51] px-7 py-3 font-black text-[#4B3A11] shadow-[5px_5px_0_#7E621E]"
            >
              Try Quiz Again
            </button>
          </section>
        )}
      </div>
    </main>
  );
}