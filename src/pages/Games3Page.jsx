import { useState } from "react";

const wordMatchQuestions = [
  {
    question: "Which word means “to look through websites or information online”?",
    options: ["browse", "upload", "discuss", "advise"],
    answer: "browse",
    explanation: "Browse means to look through information on the Internet.",
  },
  {
    question: "Which word means “to put a photo or file onto the Internet”?",
    options: ["connect", "upload", "focus", "update"],
    answer: "upload",
    explanation: "Upload means to move a file from your device to the Internet.",
  },
  {
    question: "Which word means “a message that tells you something new”?",
    options: ["account", "website", "notification", "competition"],
    answer: "notification",
    explanation: "A notification is an alert or message from an app or website.",
  },
  {
    question: "Which word refers to people of the same age or social group?",
    options: ["leaders", "coaches", "users", "peers"],
    answer: "peers",
    explanation: "Peers are people who are similar in age or position.",
  },
  {
    question: "Which word means working successfully with other people?",
    options: ["teamwork", "pressure", "media", "schoolwork"],
    answer: "teamwork",
    explanation: "Teamwork is the activity of working well together.",
  },
  {
    question: "Which word describes worry caused by difficult situations?",
    options: ["enjoyment", "stress", "calm", "focus"],
    answer: "stress",
    explanation: "Stress is a feeling of worry or pressure.",
  },
];

const sentenceLinkQuestions = [
  {
    question: "I felt tired, ______ I finished my homework.",
    options: ["so", "yet", "or", "for"],
    answer: "yet",
    explanation: "Yet shows an unexpected contrast.",
  },
  {
    question: "I turned off notifications, ______ I could concentrate.",
    options: ["but", "so", "nor", "yet"],
    answer: "so",
    explanation: "So introduces the result of turning off notifications.",
  },
  {
    question: "You can talk to your teacher, ______ you can ask your parents.",
    options: ["for", "but", "or", "so"],
    answer: "or",
    explanation: "Or presents two possible choices.",
  },
  {
    question: "Lan enjoys social media, ______ she limits her screen time.",
    options: ["but", "and", "so", "for"],
    answer: "but",
    explanation: "But connects two contrasting ideas.",
  },
  {
    question: "Nam joined the school club, ______ he made many new friends.",
    options: ["nor", "and", "yet", "or"],
    answer: "and",
    explanation: "And adds another related idea.",
  },
  {
    question: "I stayed at home, ______ I did not feel well.",
    options: ["for", "yet", "or", "so"],
    answer: "for",
    explanation: "For introduces the reason.",
  },
];

const gameInformation = {
  words: {
    label: "GAME 01",
    title: "Word Match",
    icon: "🎯",
    description: "Read each clue and choose the correct Unit 3 word.",
    questions: wordMatchQuestions,
    background: "bg-cyan-300",
    shadow: "shadow-[8px_8px_0_#C86C97]",
  },
  links: {
    label: "GAME 02",
    title: "Sentence Link Battle",
    icon: "⚡",
    description: "Choose the best conjunction to connect the ideas.",
    questions: sentenceLinkQuestions,
    background: "bg-lime-300",
    shadow: "shadow-[8px_8px_0_#9E3C6A]",
  },
};

export default function Games3Page({ onBack }) {
  const [activeGame, setActiveGame] = useState("words");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const game = gameInformation[activeGame];
  const question = game.questions[currentQuestion];
  const isLastQuestion =
    currentQuestion === game.questions.length - 1;

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
    if (isLastQuestion) {
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
    <main className="min-h-screen bg-[#F4F0F2] px-4 py-6 text-slate-950">
      <div className="mx-auto max-w-6xl">
        <button
          type="button"
          onClick={onBack}
          className="rounded-xl border-4 border-slate-950 bg-white px-5 py-2 font-black shadow-[4px_4px_0_#29101C] transition hover:-translate-y-1"
        >
          ← Unit 3
        </button>

        <header className="relative mt-6 overflow-hidden rounded-[2rem] border-4 border-slate-950 bg-lime-300 p-7 shadow-[10px_10px_0_#C86C97] md:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-4 border-slate-950 bg-fuchsia-400" />
          <div className="absolute bottom-4 right-12 rotate-12 text-7xl">
            🎮
          </div>

          <div className="relative max-w-3xl">
            <span className="inline-block rotate-[-2deg] border-4 border-slate-950 bg-slate-950 px-4 py-2 text-sm font-black tracking-[0.2em] text-white shadow-[4px_4px_0_#FFFFFF]">
              GAME ZONE
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Play. Think. Win.
            </h1>

            <p className="mt-4 text-lg font-bold">
              Practise Unit 3 vocabulary and compound sentences through two
              colourful challenges.
            </p>
          </div>
        </header>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          {Object.entries(gameInformation).map(([gameName, item]) => {
            const isActive = activeGame === gameName;

            return (
              <button
                key={gameName}
                type="button"
                onClick={() => changeGame(gameName)}
                className={`rounded-[1.5rem] border-4 border-slate-950 p-6 text-left transition hover:-translate-y-1 ${
                  isActive
                    ? `${item.background} ${item.shadow}`
                    : "bg-white shadow-[5px_5px_0_#29101C]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-black tracking-[0.2em]">
                      {item.label}
                    </p>

                    <h2 className="mt-2 text-2xl font-black">
                      {item.title}
                    </h2>
                  </div>

                  <span className="text-5xl">{item.icon}</span>
                </div>

                <p className="mt-4 font-bold text-slate-700">
                  {item.description}
                </p>

                <div className="mt-5 inline-block rounded-full border-2 border-slate-950 bg-white px-4 py-2 text-sm font-black">
                  6 QUESTIONS
                </div>
              </button>
            );
          })}
        </section>

        <section
          className={`mt-10 rounded-[2rem] border-4 border-slate-950 ${game.background} p-6 ${game.shadow} md:p-8`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-black tracking-[0.2em]">
                {game.label}
              </p>

              <h2 className="mt-2 text-3xl font-black">
                {game.icon} {game.title}
              </h2>

              <p className="mt-2 font-bold text-slate-700">
                {game.description}
              </p>
            </div>

            <div className="rounded-full border-4 border-slate-950 bg-white px-5 py-2 font-black">
              Score: {score}/{game.questions.length}
            </div>
          </div>

          {!finished ? (
            <div className="mt-7 rounded-[1.5rem] border-4 border-slate-950 bg-slate-950 p-6 text-white md:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-fuchsia-500 px-4 py-2 text-sm font-black">
                  QUESTION {currentQuestion + 1}
                </span>

                <span className="font-black text-cyan-200">
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
                      className={`rounded-xl border-4 border-white p-4 text-left text-lg font-black shadow-[4px_4px_0_#AD4274] transition hover:-translate-y-1 disabled:cursor-default ${optionStyle}`}
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
                      ? "Correct! You won this round. 🎉"
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
                    className="rounded-full border-4 border-white bg-fuchsia-500 px-6 py-3 font-black transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Lock Answer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="rounded-full border-4 border-white bg-yellow-300 px-6 py-3 font-black text-slate-950 transition hover:-translate-y-1"
                  >
                    {isLastQuestion
                      ? "See Result"
                      : "Next Round →"}
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
                You won {score} out of {game.questions.length} rounds.
              </p>

              <button
                type="button"
                onClick={restartGame}
                className="mt-7 rounded-full border-4 border-slate-950 bg-fuchsia-400 px-6 py-3 font-black shadow-[4px_4px_0_#29101C] transition hover:-translate-y-1"
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