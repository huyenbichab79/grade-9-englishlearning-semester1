import { useState } from "react";

const gameData = {
  wordQuest: {
    title: "Lucky Word Quest",
    icon: "🧧",
    description:
      "Find the correct word or phrase from each simple clue.",
    background: "bg-[#BE9E51]",
    questions: [
      {
        level: "MEDIUM",
        question: "Which word means “sự may mắn”?",
        options: ["luck", "bell", "custom", "offering"],
        answer: "luck",
        explanation:
          "Luck means good or bad things that happen by chance.",
      },
      {
        level: "MEDIUM",
        question:
          "Which object makes a ringing sound?",
        options: ["carp", "bell", "peach", "pole"],
        answer: "bell",
        explanation:
          "A bell is a metal object that makes a ringing sound.",
      },
      {
        level: "MEDIUM",
        question:
          "Before Tet, some families release a ______ into a river.",
        options: ["carp", "lantern", "monk", "blossom"],
        answer: "carp",
        explanation:
          "A carp is a type of fish connected with the Ong Cong Ong Tao custom.",
      },
      {
        level: "MEDIUM",
        question:
          "Something unlucky that happens can be called ______.",
        options: ["family bonding", "bad luck", "longevity", "worship"],
        answer: "bad luck",
        explanation:
          "Bad luck means an unlucky event or situation.",
      },
      {
        level: "GOOD",
        question:
          "People often choose red decorations because red is believed to bring ______.",
        options: ["luck", "danger", "silence", "rain"],
        answer: "luck",
        explanation:
          "In many traditions, red is connected with happiness and good luck.",
      },
      {
        level: "ADVANCED",
        question:
          "Which sentence uses the word “release” correctly?",
        options: [
          "They release two carps into the river.",
          "They release a bell above the door.",
          "They release the table before dinner.",
          "They release a flower village every spring.",
        ],
        answer: "They release two carps into the river.",
        explanation:
          "Release means to let an animal or object go free.",
      },
    ],
  },

  customDetective: {
    title: "Custom Detective",
    icon: "🔎",
    description:
      "Read the clue and choose the best cultural word.",
    background: "bg-[#A37E26]",
    questions: [
      {
        level: "MEDIUM",
        question:
          "Which place is famous for many colourful flowers before Tet?",
        options: [
          "Sa Dec flower village",
          "family altar",
          "martial arts school",
          "business office",
        ],
        answer: "Sa Dec flower village",
        explanation:
          "Sa Dec is well known for growing and displaying many kinds of flowers.",
      },
      {
        level: "MEDIUM",
        question:
          "Which performance is also called a lion-like traditional dance in Viet Nam?",
        options: [
          "unicorn dance",
          "table manners",
          "flower village",
          "family bonding",
        ],
        answer: "unicorn dance",
        explanation:
          "The unicorn dance is a popular performance during festivals and celebrations.",
      },
      {
        level: "MEDIUM",
        question:
          "A person who lives and studies in a pagoda may be a ______.",
        options: ["monk", "festival goer", "farmer", "visitor"],
        answer: "monk",
        explanation:
          "A monk is a religious person who often lives in a pagoda or monastery.",
      },
      {
        level: "MEDIUM",
        question:
          "Lanterns, flowers, and red pictures are examples of ______.",
        options: [
          "decorative items",
          "martial arts",
          "bad spirits",
          "table manners",
        ],
        answer: "decorative items",
        explanation:
          "Decorative items are objects used to make a place more attractive.",
      },
      {
        level: "GOOD",
        question:
          "Young people help ______ family traditions by learning them from older people.",
        options: ["maintain", "release", "chase", "break"],
        answer: "maintain",
        explanation:
          "Maintain means to keep something continuing for a long time.",
      },
      {
        level: "GOOD",
        question:
          "Which sentence best describes family bonding?",
        options: [
          "Family members spend time together and become closer.",
          "A family buys many decorations for a shop.",
          "Children watch a monk perform martial arts.",
          "Visitors leave a festival before it begins.",
        ],
        answer:
          "Family members spend time together and become closer.",
        explanation:
          "Family bonding is the process of building a close family relationship.",
      },
    ],
  },
};

const difficultyStyles = {
  MEDIUM: "bg-[#BE9E51] text-[#4B3A11]",
  GOOD: "bg-[#C7AB69] text-[#634C17]",
  ADVANCED: "bg-[#D8CBAD] text-[#574314]",
};

export default function Games5Page({ onBack }) {
  const [activeGame, setActiveGame] = useState("wordQuest");
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
    <main className="min-h-screen bg-[#F7F6F5] px-4 py-6 text-[#4B3A11]">
      <div className="mx-auto max-w-6xl">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border-2 border-[#7E621E] bg-white px-5 py-2 font-black shadow-[4px_4px_0_#7E621E] transition hover:-translate-y-1"
        >
          ← Unit 5
        </button>

        <header className="relative mt-6 overflow-hidden rounded-[2.5rem] border-4 border-[#7E621E] bg-gradient-to-br from-[#BB9947] via-[#D1BA83] to-[#8E6E21] p-7 text-white shadow-[12px_12px_0_#BE9E51] md:p-11">
          <div className="absolute -right-12 -top-16 text-[11rem] opacity-20">
            🎮
          </div>

          <div className="absolute bottom-6 right-10 hidden text-7xl md:block">
            🧧
          </div>

          <div className="relative max-w-4xl">
            <span className="inline-block rounded-full border-2 border-white bg-[#BE9E51] px-5 py-2 text-sm font-black tracking-[0.18em] text-[#8E6E21]">
              UNIT 5 GAME ZONE
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Play with Customs
              <span className="block text-[#D8CCAF]">
                and Traditions
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-lg font-bold leading-8 text-indigo-50">
              Start with familiar words and move gradually to more challenging
              questions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#BE9E51] px-4 py-2 font-black text-[#4B3A11]">
                8 Medium
              </span>

              <span className="rounded-full bg-[#C7AB69] px-4 py-2 font-black text-[#634C17]">
                3 Good
              </span>

              <span className="rounded-full bg-[#D8CBAD] px-4 py-2 font-black text-[#574314]">
                1 Advanced
              </span>
            </div>
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
                className={`rounded-[2rem] border-4 border-[#7E621E] p-6 text-left transition hover:-translate-y-1 ${
                  isActive
                    ? `${item.background} shadow-[7px_7px_0_#7E621E]`
                    : "bg-white shadow-[4px_4px_0_#7E621E]"
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

                <span className="mt-5 inline-block rounded-full border-2 border-[#7E621E] bg-white px-4 py-2 text-sm font-black">
                  6 QUESTIONS
                </span>
              </button>
            );
          })}
        </section>

        <section
          className={`mt-10 rounded-[2.5rem] border-4 border-[#7E621E] ${game.background} p-6 shadow-[10px_10px_0_#7E621E] md:p-8`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-black tracking-[0.18em]">
                VOCABULARY GAME
              </p>

              <h2 className="mt-2 text-3xl font-black">
                {game.icon} {game.title}
              </h2>
            </div>

            <div className="rounded-full border-2 border-[#7E621E] bg-white px-5 py-2 font-black">
              Score: {score}/{game.questions.length}
            </div>
          </div>

          {!finished ? (
            <div className="mt-7 rounded-[2rem] border-2 border-[#7E621E] bg-[#4B3A11] p-6 text-white md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="rounded-full bg-[#BB9947] px-4 py-2 text-sm font-black">
                  QUESTION {currentQuestion + 1}
                </span>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-black ${
                    difficultyStyles[question.level]
                  }`}
                >
                  {question.level}
                </span>

                <span className="font-black text-[#D8CCAF]">
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
                    "bg-white text-[#4B3A11] hover:bg-[#F7F6F5]";

                  if (isSelected) {
                    optionStyle = "bg-[#BE9E51] text-[#4B3A11]";
                  }

                  if (isCorrect) {
                    optionStyle = "bg-lime-300 text-[#4B3A11]";
                  }

                  if (isWrong) {
                    optionStyle = "bg-rose-300 text-[#4B3A11]";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={checked}
                      onClick={() => setSelectedAnswer(option)}
                      className={`rounded-2xl border-2 border-white p-4 text-left font-black shadow-[4px_4px_0_#7E621E] transition hover:-translate-y-1 disabled:cursor-default ${optionStyle}`}
                    >
                      {option}
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
                      ? "Correct! Great work. 🎉"
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
                    {currentQuestion === game.questions.length - 1
                      ? "See Result"
                      : "Next Question →"}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-7 rounded-[2rem] border-2 border-[#7E621E] bg-white p-8 text-center">
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
                className="mt-7 rounded-full border-2 border-[#7E621E] bg-[#BE9E51] px-7 py-3 font-black text-white shadow-[4px_4px_0_#7E621E]"
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