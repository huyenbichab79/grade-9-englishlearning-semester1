import { useState } from "react";

const quizQuestions = [
  {
    category: "Vocabulary",
    icon: "🌾",
    question: "Farmers grow rice in a ______.",
    options: ["lighthouse", "paddy field", "orchard", "ferry"],
    answer: "paddy field",
    explanation: "A paddy field is a field where rice is grown.",
  },
  {
    category: "Vocabulary",
    icon: "🤝",
    question: "The local people are friendly and ______.",
    options: ["vast", "hospitable", "slowly", "well"],
    answer: "hospitable",
    explanation: "Hospitable means friendly and welcoming to visitors.",
  },
  {
    category: "Vocabulary",
    icon: "📦",
    question: "The workers will ______ the boxes from the truck.",
    options: ["cultivate", "catch", "unload", "stretch"],
    answer: "unload",
    explanation: "Unload means to take goods off a vehicle.",
  },
  {
    category: "Vocabulary",
    icon: "🚜",
    question: "Which machine helps farmers cut and collect rice?",
    options: ["A ferry", "A lighthouse", "A combine harvester", "An orchard"],
    answer: "A combine harvester",
    explanation:
      "A combine harvester is a large machine used to harvest crops.",
  },
  {
    category: "Grammar",
    icon: "🏃",
    question: "Nam runs ______ than his brother.",
    options: ["faster", "more fast", "fastly", "more faster"],
    answer: "faster",
    explanation: "With the short adverb fast, we add -er: fast → faster.",
  },
  {
    category: "Grammar",
    icon: "🚗",
    question: "My father drives ______ than my uncle.",
    options: [
      "carefullier",
      "more careful",
      "more carefully",
      "carefullyer",
    ],
    answer: "more carefully",
    explanation:
      "With the long adverb carefully, we use more carefully.",
  },
  {
    category: "Grammar",
    icon: "⭐",
    question: "Lan sings ______ than Hoa.",
    options: ["more well", "weller", "better", "gooder"],
    answer: "better",
    explanation: "The comparative form of well is better.",
  },
  {
    category: "Grammar",
    icon: "🐢",
    question: "The old tractor moves ______ than the new one.",
    options: ["slowlier", "more slowly", "more slow", "slowlyer"],
    answer: "more slowly",
    explanation:
      "With the long adverb slowly, we use more slowly.",
  },
];

function Quiz2Page({ onBack }) {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion?.answer;

  const checkAnswer = () => {
    if (!selectedAnswer || checked) return;

    setChecked(true);

    if (selectedAnswer === currentQuestion.answer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const nextQuestion = () => {
    const isLastQuestion =
      currentIndex === quizQuestions.length - 1;

    if (isLastQuestion) {
      setCompleted(true);
      return;
    }

    setCurrentIndex((previousIndex) => previousIndex + 1);
    setSelectedAnswer("");
    setChecked(false);
  };

  const restartQuiz = () => {
    setStarted(true);
    setCurrentIndex(0);
    setSelectedAnswer("");
    setChecked(false);
    setScore(0);
    setCompleted(false);
  };

  const getResultMessage = () => {
    if (score === 8) {
      return {
        icon: "🏆",
        title: "Countryside Champion!",
        message: "Perfect! You have mastered Unit 2.",
      };
    }

    if (score >= 6) {
      return {
        icon: "🌟",
        title: "Excellent Work!",
        message: "You understand Unit 2 very well.",
      };
    }

    if (score >= 4) {
      return {
        icon: "🌱",
        title: "Good Progress!",
        message: "Review a few words and grammar rules, then try again.",
      };
    }

    return {
      icon: "🌻",
      title: "Keep Growing!",
      message: "Take your time, review the lessons and try once more.",
    };
  };

  const result = getResultMessage();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F7F8] px-4 py-6 text-[#21304C]">
      <div className="pointer-events-none absolute left-0 top-20 h-32 w-32 rounded-r-full bg-[#D5DBE6]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-40 w-24 rounded-l-full bg-[#D0D7E3]" />

      <div className="relative mx-auto max-w-5xl">
        <header className="mb-6 rounded-tl-[3rem] rounded-br-[3rem] border-2 border-[#375080] bg-[#DCE1EA] p-6">
          <button
            type="button"
            onClick={onBack}
            className="mb-5 rounded-full border-2 border-[#375080] bg-white px-5 py-2 font-bold text-[#2C4168]"
          >
            ← Back to Unit 2
          </button>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.18em] text-[#4869A9]">
                Unit 2 · Final Stop
              </p>

              <h1 className="mt-2 font-serif text-4xl font-bold text-[#243454] md:text-5xl">
                Countryside Challenge
              </h1>

              <p className="mt-3 max-w-2xl text-lg text-[#364E7D]">
                Eight short questions. No timer. Learn calmly and enjoy
                every step.
              </p>
            </div>

            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-t-[3rem] rounded-b-xl border-2 border-[#4E74BE] bg-[#92A6CB] text-6xl">
              🌻
            </div>
          </div>
        </header>

        {!started && (
          <section className="grid gap-6 md:grid-cols-[1fr_300px]">
            <div className="rounded-tr-[3rem] rounded-bl-[3rem] border-2 border-[#5E80C3] bg-white p-7">
              <p className="font-serif text-3xl font-bold text-[#243454]">
                Ready for a gentle challenge?
              </p>

              <p className="mt-4 text-lg leading-8 text-[#3A5486]">
                The quiz reviews important vocabulary and comparative
                adverbs from Unit 2.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl rounded-tr-md bg-[#E2E5EA] p-4">
                  <p className="text-3xl">🌾</p>
                  <p className="mt-2 font-bold text-[#2B3F65]">
                    4 Vocabulary Questions
                  </p>
                </div>

                <div className="rounded-3xl rounded-bl-md bg-[#E3E6EB] p-4">
                  <p className="text-3xl">📘</p>
                  <p className="mt-2 font-bold text-[#334B78]">
                    4 Grammar Questions
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStarted(true)}
                className="mt-7 w-full rounded-tl-3xl rounded-br-3xl bg-[#4869A9] px-6 py-4 text-xl font-bold text-white"
              >
                Start the Challenge →
              </button>
            </div>

            <aside className="rounded-t-[4rem] rounded-b-2xl border-2 border-[#4E74BE] bg-[#DCE1EA] p-6 text-center">
              <div className="text-7xl">🚜</div>

              <p className="mt-4 font-serif text-2xl font-bold text-[#2E436B]">
                No Pressure
              </p>

              <p className="mt-3 leading-7 text-[#375081]">
                Students can read each question carefully before checking
                their answer.
              </p>

              <div className="mt-5 rounded-2xl bg-white p-4">
                <p className="font-bold text-[#243454]">
                  Total questions
                </p>
                <p className="mt-1 font-serif text-5xl font-bold text-[#4869A9]">
                  8
                </p>
              </div>
            </aside>
          </section>
        )}

        {started && !completed && (
          <section className="rounded-tl-[3rem] rounded-br-[3rem] border-2 border-[#5E80C3] bg-white p-5 md:p-7">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <span
                  className={`inline-flex rounded-full px-4 py-2 text-sm font-bold ${
                    currentQuestion.category === "Vocabulary"
                      ? "bg-[#E2E5EA] text-[#2B3F65]"
                      : "bg-[#E3E6EB] text-[#334B78]"
                  }`}
                >
                  {currentQuestion.category}
                </span>

                <p className="mt-3 font-bold text-[#4767A5]">
                  Question {currentIndex + 1} of {quizQuestions.length}
                </p>
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-t-3xl rounded-b-lg bg-[#DCE1EA] text-5xl">
                {currentQuestion.icon}
              </div>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#DBE0E9]">
              <div
                className="h-full rounded-full bg-[#4E74BE] transition-all"
                style={{
                  width: `${
                    ((currentIndex + 1) / quizQuestions.length) * 100
                  }%`,
                }}
              />
            </div>

            <div className="mt-7 rounded-tr-[3rem] rounded-bl-[3rem] bg-[#F0F1F4] p-6">
              <h2 className="font-serif text-2xl font-bold leading-9 text-[#243453] md:text-3xl">
                {currentQuestion.question}
              </h2>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {currentQuestion.options.map((option, optionIndex) => {
                const isSelected = selectedAnswer === option;
                const isAnswer = option === currentQuestion.answer;
                const isWrong =
                  checked && isSelected && !isAnswer;

                let optionClass =
                  "border-[#C2CADA] bg-white text-[#2F446D]";

                if (isSelected) {
                  optionClass =
                    "border-[#4E74BE] bg-[#DCE1EA] text-[#2E426A]";
                }

                if (checked && isAnswer) {
                  optionClass =
                    "border-[#3C578B] bg-[#E2E5EA] text-[#243454]";
                }

                if (isWrong) {
                  optionClass =
                    "border-[#4869A9] bg-[#E8EAEE] text-[#3A5486]";
                }

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      if (!checked) setSelectedAnswer(option);
                    }}
                    className={`rounded-3xl border-2 p-4 text-left font-bold transition ${optionClass}`}
                  >
                    <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E6E8ED] font-serif">
                      {String.fromCharCode(65 + optionIndex)}
                    </span>

                    {option}
                  </button>
                );
              })}
            </div>

            {checked && (
              <div
                className={`mt-6 rounded-tl-3xl rounded-br-3xl border-2 p-5 ${
                  isCorrect
                    ? "border-[#3C578B] bg-[#E2E5EA]"
                    : "border-[#4869A9] bg-[#E8EAEE]"
                }`}
              >
                <p
                  className={`text-lg font-bold ${
                    isCorrect
                      ? "text-[#243454]"
                      : "text-[#3A5486]"
                  }`}
                >
                  {isCorrect
                    ? "✓ Correct! Well done."
                    : `Correct answer: ${currentQuestion.answer}`}
                </p>

                <p className="mt-2 leading-7 text-[#364E7D]">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            <div className="mt-7">
              {!checked ? (
                <button
                  type="button"
                  onClick={checkAnswer}
                  disabled={!selectedAnswer}
                  className="w-full rounded-tl-3xl rounded-br-3xl bg-[#4869A9] px-6 py-4 text-lg font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Check Answer
                </button>
              ) : (
                <button
                  type="button"
                  onClick={nextQuestion}
                  className="w-full rounded-tr-3xl rounded-bl-3xl bg-[#324975] px-6 py-4 text-lg font-bold text-white"
                >
                  {currentIndex === quizQuestions.length - 1
                    ? "View My Result"
                    : "Next Question →"}
                </button>
              )}
            </div>
          </section>
        )}

        {completed && (
          <section className="grid gap-6 md:grid-cols-[300px_1fr]">
            <div className="rounded-t-[5rem] rounded-b-3xl border-2 border-[#4E74BE] bg-[#DCE1EA] p-7 text-center">
              <div className="text-8xl">{result.icon}</div>

              <p className="mt-5 font-bold uppercase tracking-widest text-[#4869A9]">
                Final Score
              </p>

              <p className="mt-2 font-serif text-6xl font-bold text-[#243454]">
                {score} / 8
              </p>
            </div>

            <div className="rounded-tr-[4rem] rounded-bl-[4rem] border-2 border-[#3C578B] bg-white p-7">
              <h2 className="font-serif text-4xl font-bold text-[#243454]">
                {result.title}
              </h2>

              <p className="mt-4 text-lg leading-8 text-[#3A5486]">
                {result.message}
              </p>

              <div className="mt-6 rounded-3xl bg-[#E2E5EA] p-5">
                <p className="font-bold text-[#2B3F65]">
                  Remember
                </p>

                <p className="mt-2 leading-7 text-[#364E7D]">
                  Mistakes are part of learning. Review the lesson calmly
                  and celebrate every improvement.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={restartQuiz}
                  className="flex-1 rounded-tl-3xl rounded-br-3xl bg-[#4869A9] px-6 py-4 font-bold text-white"
                >
                  Try Again
                </button>

                <button
                  type="button"
                  onClick={onBack}
                  className="flex-1 rounded-tr-3xl rounded-bl-3xl border-2 border-[#324975] bg-white px-6 py-4 font-bold text-[#2B3F65]"
                >
                  Back to Unit 2
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default Quiz2Page;