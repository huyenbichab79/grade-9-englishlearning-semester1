import { useMemo, useState } from "react";

const vocabularyGame = [
  {
    icon: "🌾",
    question: "Which word means “ruộng lúa”?",
    options: ["orchard", "paddy field", "lighthouse"],
    answer: "paddy field",
  },
  {
    icon: "🚜",
    question: "Which machine helps farmers collect rice?",
    options: ["combine harvester", "ferry", "cattle"],
    answer: "combine harvester",
  },
  {
    icon: "🤝",
    question: "Which word means “hiếu khách”?",
    options: ["vast", "hospitable", "picturesque"],
    answer: "hospitable",
  },
  {
    icon: "📦",
    question: "Which word means “dỡ hàng”?",
    options: ["load", "unload", "harvest"],
    answer: "unload",
  },
];

const grammarGame = [
  {
    icon: "🏃",
    question: "Nam runs ______ than Minh.",
    options: ["faster", "more fast", "fastly"],
    answer: "faster",
  },
  {
    icon: "🚜",
    question: "The new tractor works ______ than the old one.",
    options: ["more efficiently", "efficientlier", "more efficient"],
    answer: "more efficiently",
  },
  {
    icon: "⭐",
    question: "Lan sings ______ than Hoa.",
    options: ["better", "more well", "weller"],
    answer: "better",
  },
  {
    icon: "🛣️",
    question: "My father drives ______ than my brother.",
    options: ["more carefully", "carefullier", "more careful"],
    answer: "more carefully",
  },
];

const games = [
  {
    id: "vocabulary",
    title: "Word Hunt",
    subtitle: "Find the correct countryside word.",
    icon: "🔎",
    questions: vocabularyGame,
  },
  {
    id: "grammar",
    title: "Grammar Race",
    subtitle: "Choose the correct comparative adverb.",
    icon: "🏁",
    questions: grammarGame,
  },
];

function Games2Page({ onBack }) {
  const [gameIndex, setGameIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [scores, setScores] = useState({
    vocabulary: 0,
    grammar: 0,
  });
  const [completedGames, setCompletedGames] = useState({
    vocabulary: false,
    grammar: false,
  });

  const currentGame = games[gameIndex];
  const currentQuestion = currentGame.questions[questionIndex];

  const totalScore = useMemo(() => {
    return scores.vocabulary + scores.grammar;
  }, [scores]);

  const selectAnswer = (option) => {
    if (isChecked) return;
    setSelectedAnswer(option);
  };

  const checkAnswer = () => {
    if (!selectedAnswer) return;

    setIsChecked(true);

    if (selectedAnswer === currentQuestion.answer) {
      setScores((previousScores) => ({
        ...previousScores,
        [currentGame.id]: previousScores[currentGame.id] + 1,
      }));
    }
  };

  const nextQuestion = () => {
    const isLastQuestion =
      questionIndex === currentGame.questions.length - 1;

    if (isLastQuestion) {
      setCompletedGames((previousGames) => ({
        ...previousGames,
        [currentGame.id]: true,
      }));

      return;
    }

    setQuestionIndex(questionIndex + 1);
    setSelectedAnswer("");
    setIsChecked(false);
  };

  const changeGame = (index) => {
    setGameIndex(index);
    setQuestionIndex(0);
    setSelectedAnswer("");
    setIsChecked(false);
  };

  const playAgain = () => {
    setScores((previousScores) => ({
      ...previousScores,
      [currentGame.id]: 0,
    }));

    setCompletedGames((previousGames) => ({
      ...previousGames,
      [currentGame.id]: false,
    }));

    setQuestionIndex(0);
    setSelectedAnswer("");
    setIsChecked(false);
  };

  const resetAllGames = () => {
    setScores({
      vocabulary: 0,
      grammar: 0,
    });

    setCompletedGames({
      vocabulary: false,
      grammar: false,
    });

    setGameIndex(0);
    setQuestionIndex(0);
    setSelectedAnswer("");
    setIsChecked(false);
  };

  const currentGameCompleted = completedGames[currentGame.id];

  return (
    <main className="min-h-screen bg-orange-50 px-4 py-6 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 rounded-3xl border border-orange-200 bg-white p-5">
          <button
            type="button"
            onClick={onBack}
            className="mb-4 rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700"
          >
            ← Back to Unit 2
          </button>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-semibold text-orange-700">
                Unit 2 · Life in the Countryside
              </p>

              <h1 className="mt-1 text-3xl font-bold text-slate-900">
                Learning Games
              </h1>

              <p className="mt-2 text-slate-600">
                Play two short games with four questions each.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-100 px-5 py-3 text-center">
              <p className="text-sm font-semibold text-amber-800">
                Total score
              </p>

              <p className="text-3xl font-bold text-amber-900">
                {totalScore} / 8
              </p>
            </div>
          </div>
        </header>

        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          {games.map((game, index) => (
            <button
              key={game.id}
              type="button"
              onClick={() => changeGame(index)}
              className={`rounded-2xl border p-4 text-left ${
                gameIndex === index
                  ? "border-orange-500 bg-orange-100"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl">{game.icon}</span>

                {completedGames[game.id] && (
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">
                    Completed ✓
                  </span>
                )}
              </div>

              <h2 className="mt-3 text-xl font-bold text-slate-900">
                {game.title}
              </h2>

              <p className="mt-1 text-slate-600">
                {game.subtitle}
              </p>

              <p className="mt-2 text-sm font-semibold text-orange-700">
                Score: {scores[game.id]} / 4
              </p>
            </button>
          ))}
        </div>

        {!currentGameCompleted ? (
          <section className="rounded-3xl border border-orange-200 bg-white p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-orange-700">
                  {currentGame.title}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Question {questionIndex + 1} of{" "}
                  {currentGame.questions.length}
                </p>
              </div>

              <div className="text-5xl">
                {currentQuestion.icon}
              </div>
            </div>

            <div className="mb-6 h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-orange-500 transition-all"
                style={{
                  width: `${
                    ((questionIndex + 1) /
                      currentGame.questions.length) *
                    100
                  }%`,
                }}
              />
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              <h3 className="text-xl font-bold leading-8 text-slate-900">
                {currentQuestion.question}
              </h3>
            </div>

            <div className="mt-5 grid gap-3">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option;
                const isCorrect =
                  isChecked && option === currentQuestion.answer;
                const isWrong =
                  isChecked &&
                  isSelected &&
                  option !== currentQuestion.answer;

                let buttonClass =
                  "border-slate-200 bg-white text-slate-700";

                if (isSelected) {
                  buttonClass =
                    "border-orange-500 bg-orange-50 text-orange-900";
                }

                if (isCorrect) {
                  buttonClass =
                    "border-emerald-500 bg-emerald-50 text-emerald-800";
                }

                if (isWrong) {
                  buttonClass =
                    "border-rose-500 bg-rose-50 text-rose-800";
                }

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectAnswer(option)}
                    className={`rounded-2xl border px-5 py-4 text-left text-lg font-semibold transition ${buttonClass}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {isChecked && (
              <div
                className={`mt-5 rounded-2xl p-4 ${
                  selectedAnswer === currentQuestion.answer
                    ? "bg-emerald-50 text-emerald-900"
                    : "bg-rose-50 text-rose-900"
                }`}
              >
                <p className="font-bold">
                  {selectedAnswer === currentQuestion.answer
                    ? "✓ Great job! Your answer is correct."
                    : `The correct answer is: ${currentQuestion.answer}`}
                </p>
              </div>
            )}

            <div className="mt-6">
              {!isChecked ? (
                <button
                  type="button"
                  onClick={checkAnswer}
                  disabled={!selectedAnswer}
                  className="w-full rounded-2xl bg-orange-500 px-5 py-4 text-lg font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Check Answer
                </button>
              ) : (
                <button
                  type="button"
                  onClick={nextQuestion}
                  className="w-full rounded-2xl bg-sky-600 px-5 py-4 text-lg font-bold text-white"
                >
                  {questionIndex ===
                  currentGame.questions.length - 1
                    ? "Finish Game"
                    : "Next Question →"}
                </button>
              )}
            </div>
          </section>
        ) : (
          <section className="rounded-3xl border border-emerald-200 bg-white p-7 text-center">
            <div className="text-7xl">🏆</div>

            <h2 className="mt-4 text-3xl font-bold text-emerald-800">
              Game Completed!
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              Your score in {currentGame.title}
            </p>

            <p className="mt-2 text-5xl font-bold text-orange-600">
              {scores[currentGame.id]} / 4
            </p>

            <p className="mt-4 font-semibold text-slate-700">
              {scores[currentGame.id] === 4
                ? "Perfect! You are a countryside expert. 🌟"
                : scores[currentGame.id] >= 2
                ? "Good job! You are making great progress. 👍"
                : "Nice try! Review the lesson and play again. 🌱"}
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={playAgain}
                className="rounded-xl border border-orange-300 bg-white px-6 py-3 font-bold text-orange-700"
              >
                Play Again
              </button>

              {gameIndex < games.length - 1 && (
                <button
                  type="button"
                  onClick={() => changeGame(gameIndex + 1)}
                  className="rounded-xl bg-sky-600 px-6 py-3 font-bold text-white"
                >
                  Play Next Game →
                </button>
              )}
            </div>
          </section>
        )}

        {completedGames.vocabulary &&
          completedGames.grammar && (
            <section className="mt-6 rounded-3xl border border-amber-300 bg-amber-100 p-6 text-center">
              <div className="text-6xl">🌟</div>

              <h2 className="mt-3 text-2xl font-bold text-amber-900">
                Both Games Completed!
              </h2>

              <p className="mt-2 text-lg font-semibold text-amber-800">
                Final score: {totalScore} / 8
              </p>

              <button
                type="button"
                onClick={resetAllGames}
                className="mt-5 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white"
              >
                Restart All Games
              </button>
            </section>
          )}
      </div>
    </main>
  );
}

export default Games2Page;