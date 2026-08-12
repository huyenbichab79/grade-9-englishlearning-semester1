import { useState } from "react";

const gameData = {
  hunt: {
    title: "Culture Word Hunt",
    icon: "🔍",
    description: "Read the meaning and find the correct word.",
    background: "bg-[#D19D84]",
    questions: [
      {
        question: "Which phrase means “chiếm một tỉ lệ”?",
        options: ["account for", "play a role in", "look after", "take part in"],
        answer: "account for",
        explanation:
          "Account for means to form a particular part or percentage.",
      },
      {
        question: "Which word means “tre”?",
        options: ["bamboo", "wooden", "post", "soil"],
        answer: "bamboo",
        explanation: "Bamboo is a tall plant often used to build or make things.",
      },
      {
        question: "Which word means “đa dạng”?",
        options: ["unique", "diverse", "religious", "elaborate"],
        answer: "diverse",
        explanation: "Diverse means having many different types.",
      },
      {
        question: "Which verb means “trưng bày tại một cuộc triển lãm”?",
        options: ["establish", "represent", "exhibit", "preserve"],
        answer: "exhibit",
        explanation: "Exhibit means to show an object for people to see.",
      },
      {
        question: "Which word means “đặc điểm nổi bật”?",
        options: ["feature", "region", "statue", "population"],
        answer: "feature",
        explanation: "A feature is an important or noticeable part.",
      },
      {
        question: "Which verb means “nhìn ra một nơi nào đó”?",
        options: ["raise", "weave", "overlook", "worship"],
        answer: "overlook",
        explanation: "Overlook means to have a view of a place from above.",
      },
    ],
  },

  clue: {
    title: "Village Clue Challenge",
    icon: "🏘️",
    description: "Choose the best word to complete each sentence.",
    background: "bg-[#8B563C]",
    questions: [
      {
        question:
          "The Tay ethnic group has a large ______ in northern Viet Nam.",
        options: ["population", "ornament", "staircase", "exhibition"],
        answer: "population",
        explanation:
          "Population means the number of people living in a place or group.",
      },
      {
        question:
          "The Central Highlands are an important cultural ______ of Viet Nam.",
        options: ["crop", "region", "post", "costume"],
        answer: "region",
        explanation: "A region is a particular area of a country.",
      },
      {
        question:
          "Five-coloured sticky rice is a traditional ______ of some ethnic groups.",
        options: ["specialty", "religion", "architecture", "plantation"],
        answer: "specialty",
        explanation:
          "A specialty is a food or product that a place is well known for.",
      },
      {
        question:
          "The patterns on this costume are very ______. I have never seen them before.",
        options: ["majority", "unique", "wooden", "open-air"],
        answer: "unique",
        explanation: "Unique means special and different from everything else.",
      },
      {
        question:
          "Many Vietnamese families ______ during important festivals.",
        options: [
          "worship ancestors",
          "raise livestock",
          "account for",
          "exhibit crops",
        ],
        answer: "worship ancestors",
        explanation:
          "Worship ancestors means to show respect to family members who died.",
      },
      {
        question:
          "Traditional festivals ______ preserving ethnic culture.",
        options: [
          "play a role in",
          "account for",
          "overlook",
          "raise",
        ],
        answer: "play a role in",
        explanation:
          "Play a role in means to be important in an activity or result.",
      },
    ],
  },
};

export default function Games4Page({ onBack }) {
  const [activeGame, setActiveGame] = useState("hunt");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const game = gameData[activeGame];
  const question = game.questions[currentQuestion];

  const changeGame = (gameName) => {
    setActiveGame(gameName);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setChecked(false);
    setScore(0);
    setFinished(false);
  };

  const checkAnswer = () => {
    if (!selectedAnswer || checked) return;

    if (selectedAnswer === question.answer) {
      setScore((previousScore) => previousScore + 1);
    }

    setChecked(true);
  };

  const nextQuestion = () => {
    if (currentQuestion === game.questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    setSelectedAnswer("");
    setChecked(false);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setChecked(false);
    setScore(0);
    setFinished(false);
  };

  return (
    <main className="min-h-screen bg-[#F8F7F7] px-4 py-6 text-slate-950">
      <div className="mx-auto max-w-6xl">
        <button
          type="button"
          onClick={onBack}
          className="rounded-xl border-4 border-slate-950 bg-white px-5 py-2 font-black shadow-[4px_4px_0_#281911] transition hover:-translate-y-1"
        >
          ← Unit 4
        </button>

        <header className="relative mt-6 overflow-hidden rounded-[2rem] border-4 border-slate-950 bg-[#D19B81] p-7 text-white shadow-[10px_10px_0_#D19C82] md:p-10">
          <div className="absolute -right-12 -top-12 h-44 w-44 rotate-45 border-4 border-slate-950 bg-[#8B563C]" />

          <div className="absolute bottom-5 right-12 text-7xl">
            🎮
          </div>

          <div className="relative max-w-3xl">
            <span className="inline-block border-4 border-white bg-[#CA8C6E] px-4 py-2 text-sm font-black tracking-[0.2em] shadow-[4px_4px_0_#553424]">
              CULTURE GAME ZONE
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Learn Words Through Play
            </h1>

            <p className="mt-4 text-lg font-bold text-violet-100">
              Practise new Unit 4 vocabulary through short and friendly games.
            </p>
          </div>
        </header>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          {Object.entries(gameData).map(([gameName, item]) => {
            const isActive = activeGame === gameName;

            return (
              <button
                key={gameName}
                type="button"
                onClick={() => changeGame(gameName)}
                className={`rounded-[1.5rem] border-4 border-slate-950 p-6 text-left transition hover:-translate-y-1 ${
                  isActive
                    ? `${item.background} shadow-[7px_7px_0_#281911]`
                    : "bg-white shadow-[4px_4px_0_#281911]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black">
                      {item.title}
                    </h2>

                    <p className="mt-3 font-bold text-slate-700">
                      {item.description}
                    </p>
                  </div>

                  <span className="text-5xl">{item.icon}</span>
                </div>

                <span className="mt-5 inline-block rounded-full border-2 border-slate-950 bg-white px-4 py-2 text-sm font-black">
                  6 QUESTIONS
                </span>
              </button>
            );
          })}
        </section>

        <section
          className={`mt-10 rounded-[2rem] border-4 border-slate-950 ${game.background} p-6 shadow-[9px_9px_0_#281911] md:p-8`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-black tracking-[0.2em]">
                VOCABULARY GAME
              </p>

              <h2 className="mt-2 text-3xl font-black">
                {game.icon} {game.title}
              </h2>
            </div>

            <div className="rounded-full border-4 border-slate-950 bg-white px-5 py-2 font-black">
              Score: {score}/{game.questions.length}
            </div>
          </div>

          {!finished ? (
            <div className="mt-7 rounded-[1.5rem] border-4 border-slate-950 bg-[#553424] p-6 text-white md:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#CA8C6E] px-4 py-2 text-sm font-black">
                  QUESTION {currentQuestion + 1}
                </span>

                <span className="font-black text-[#D19C82]">
                  {currentQuestion + 1}/{game.questions.length}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-black leading-relaxed md:text-2xl">
                {question.question}
              </h3>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {question.options.map((option) => {
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
                      className={`rounded-xl border-4 border-white p-4 text-left font-black shadow-[4px_4px_0_#281911] transition hover:-translate-y-1 disabled:cursor-default ${optionStyle}`}
                    >
                      {option}
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
                      ? "Correct! Great vocabulary work. 🎉"
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
                    {currentQuestion === game.questions.length - 1
                      ? "See Result"
                      : "Next Question →"}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-7 rounded-[1.5rem] border-4 border-slate-950 bg-white p-8 text-center">
              <div className="text-7xl">
                {score === 6 ? "🏆" : score >= 4 ? "🌟" : "💪"}
              </div>

              <h3 className="mt-5 text-3xl font-black">
                Game Complete!
              </h3>

              <p className="mt-3 text-xl font-bold text-slate-700">
                You answered {score} out of {game.questions.length} questions
                correctly.
              </p>

              <button
                type="button"
                onClick={restartGame}
                className="mt-7 rounded-full border-4 border-slate-950 bg-[#D19D84] px-7 py-3 font-black shadow-[4px_4px_0_#281911]"
              >
                Play Again
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}