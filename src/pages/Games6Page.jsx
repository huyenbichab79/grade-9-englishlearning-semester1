import { useState } from "react";

const lifestyleQuestions = [
  {
    level: "MEDIUM",
    situation:
      "Minh eats vegetables, fruit, fish and rice in suitable amounts.",
    question: "Which phrase best describes Minh’s diet?",
    options: [
      "a balanced diet",
      "a nomadic lifestyle",
      "online learning",
      "a tribal dance",
    ],
    answer: "a balanced diet",
    explanation:
      "A balanced diet includes suitable amounts of different kinds of food.",
  },
  {
    level: "MEDIUM",
    situation:
      "The students make small baskets and decorations by hand.",
    question: "What activity are they doing?",
    options: [
      "making crafts",
      "driving a dogsled",
      "serving meals",
      "learning online",
    ],
    answer: "making crafts",
    explanation:
      "Making crafts means creating useful or decorative objects by hand.",
  },
  {
    level: "MEDIUM",
    situation:
      "A family moves several times each year with its animals.",
    question: "Which lifestyle does the family follow?",
    options: [
      "a nomadic lifestyle",
      "a city lifestyle",
      "an online lifestyle",
      "a hurried lifestyle",
    ],
    answer: "a nomadic lifestyle",
    explanation:
      "Nomadic people move from place to place instead of living permanently in one area.",
  },
  {
    level: "MEDIUM",
    situation:
      "Lan says hello and smiles when she meets a new classmate.",
    question: "Which verb describes Lan’s action?",
    options: ["greet", "notice", "maintain", "interact"],
    answer: "greet",
    explanation:
      "To greet someone means to welcome them or say hello.",
  },
  {
    level: "GOOD",
    situation:
      "Huy plans his homework, checks the lesson by himself and asks for help only when necessary.",
    question: "Which adjective best describes Huy?",
    options: [
      "independent",
      "traditional",
      "common",
      "nomadic",
    ],
    answer: "independent",
    explanation:
      "An independent learner can organise and complete work without constant help.",
  },
  {
    level: "ADVANCED",
    situation:
      "A community uses solar energy and mobile phones but continues its traditional festivals and crafts.",
    question: "Which statement best describes this community?",
    options: [
      "It adapts to modern life while maintaining its traditions.",
      "It has completely replaced its traditional lifestyle.",
      "It refuses to use all modern technology.",
      "It follows only the lifestyle of large cities.",
    ],
    answer:
      "It adapts to modern life while maintaining its traditions.",
    explanation:
      "The community accepts useful technology without losing important cultural practices.",
  },
];

const futureQuestions = [
  {
    level: "MEDIUM",
    question:
      "The school cultural fair starts tomorrow. Our class ______ a display about native art.",
    options: [
      "will prepare",
      "prepared",
      "prepares yesterday",
      "preparing",
    ],
    answer: "will prepare",
    explanation:
      "Use will + base verb for an activity that will happen in the future.",
  },
  {
    level: "MEDIUM",
    question:
      "If the restaurant is busy, we ______ at the small café nearby.",
    options: [
      "will eat",
      "ate",
      "eating",
      "will eats",
    ],
    answer: "will eat",
    explanation:
      "The result clause of the first conditional uses will + base verb.",
  },
  {
    level: "MEDIUM",
    question:
      "The guide is free this afternoon. She ______ us around the local market.",
    options: [
      "will show",
      "showed",
      "showing",
      "will shows",
    ],
    answer: "will show",
    explanation:
      "Will show is the correct future simple form.",
  },
  {
    level: "MEDIUM",
    question:
      "If the students ______ their cameras on, the online discussion will be more interactive.",
    options: [
      "keep",
      "will keep",
      "kept",
      "keeping",
    ],
    answer: "keep",
    explanation:
      "Use the present simple in the if-clause.",
  },
  {
    level: "GOOD",
    question:
      "Choose the sentence that correctly expresses a promise.",
    options: [
      "I will return your book after the lesson.",
      "I returned your book tomorrow.",
      "I will returning your book after the lesson.",
      "I returns your book next week.",
    ],
    answer:
      "I will return your book after the lesson.",
    explanation:
      "A promise about the future can use will + base verb.",
  },
  {
    level: "GOOD",
    question:
      "Choose the sentence with the same meaning: If people do not protect native art, some traditions may disappear.",
    options: [
      "Unless people protect native art, some traditions may disappear.",
      "Unless people do not protect native art, some traditions may disappear.",
      "Unless people will protect native art, some traditions disappear.",
      "Unless people protected native art, some traditions will disappearing.",
    ],
    answer:
      "Unless people protect native art, some traditions may disappear.",
    explanation:
      "Unless means if not, so another negative word is not needed.",
  },
];

const levelStyles = {
  MEDIUM: "bg-[#E5EADB] text-[#586D2F]",
  GOOD: "bg-[#E4E9DB] text-[#54682D]",
  ADVANCED: "bg-[#E7EBDE] text-[#596E2F]",
};

function GameCard({
  eyebrow,
  title,
  description,
  questions,
  accentClass,
  buttonClass,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const checkAnswer = () => {
    if (!selectedAnswer || checked) return;

    if (selectedAnswer === currentQuestion.answer) {
      setScore((previousScore) => previousScore + 1);
    }

    setChecked(true);
  };

  const nextQuestion = () => {
    if (currentIndex === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((previousIndex) => previousIndex + 1);
    setSelectedAnswer("");
    setChecked(false);
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setSelectedAnswer("");
    setChecked(false);
    setScore(0);
    setFinished(false);
  };

  return (
    <section
      className={`rounded-[2.25rem] border p-6 shadow-[0_18px_45px_rgba(73,90,38,0.08)] md:p-9 ${accentClass}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#737A64]">
            {eyebrow}
          </p>

          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#475826]">
            {title}
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-[#6F7661]">
            {description}
          </p>
        </div>

        <div className="rounded-full bg-white px-5 py-2 font-semibold text-[#586D2F] shadow-sm">
          Score: {score}/{questions.length}
        </div>
      </div>

      {!finished ? (
        <div className="mt-7 rounded-[1.75rem] bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm font-semibold text-[#737B64]">
              Round {currentIndex + 1}/{questions.length}
            </span>

            <span
              className={`rounded-full px-4 py-2 text-xs font-semibold ${
                levelStyles[currentQuestion.level]
              }`}
            >
              {currentQuestion.level}
            </span>
          </div>

          {currentQuestion.situation && (
            <div className="mt-6 rounded-[1.4rem] bg-[#EDEFEA] p-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#707761]">
                SITUATION
              </p>

              <p className="mt-3 text-lg leading-8 text-[#586D2F]">
                {currentQuestion.situation}
              </p>
            </div>
          )}

          <h3 className="mt-6 text-xl font-semibold leading-8 text-[#475826] md:text-2xl">
            {currentQuestion.question}
          </h3>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option;
              const isCorrect =
                checked && option === currentQuestion.answer;
              const isWrong =
                checked &&
                isSelected &&
                option !== currentQuestion.answer;

              let optionStyle =
                "border-[#D4DCC5] bg-[#F5F6F2] hover:bg-[#EAEDE5]";

              if (isSelected) {
                optionStyle =
                  "border-[#A6AC9A] bg-[#E4E9DB]";
              }

              if (isCorrect) {
                optionStyle =
                  "border-[#AAC96C] bg-[#E5EADB]";
              }

              if (isWrong) {
                optionStyle =
                  "border-[#B6C990] bg-[#E6EBDD]";
              }

              return (
                <button
                  key={option}
                  type="button"
                  disabled={checked}
                  onClick={() => setSelectedAnswer(option)}
                  className={`rounded-xl border p-4 text-left font-medium leading-7 text-[#54682D] transition disabled:cursor-default ${optionStyle}`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {checked && (
            <div
              className={`mt-6 rounded-[1.25rem] p-5 ${
                selectedAnswer === currentQuestion.answer
                  ? "bg-[#E5EADB]"
                  : "bg-[#E6EBDD]"
              }`}
            >
              <p className="font-semibold">
                {selectedAnswer === currentQuestion.answer
                  ? "Correct choice."
                  : `Correct answer: ${currentQuestion.answer}`}
              </p>

              <p className="mt-2 text-sm leading-6 text-[#686F5A]">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          <div className="mt-7 flex justify-end">
            {!checked ? (
              <button
                type="button"
                disabled={!selectedAnswer}
                onClick={checkAnswer}
                className={`rounded-full px-7 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40 ${buttonClass}`}
              >
                Check Choice
              </button>
            ) : (
              <button
                type="button"
                onClick={nextQuestion}
                className={`rounded-full px-7 py-3 font-semibold text-white transition ${buttonClass}`}
              >
                {currentIndex === questions.length - 1
                  ? "View Result"
                  : "Continue →"}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-7 rounded-[1.75rem] bg-white p-9 text-center shadow-sm">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#7D856C]">
            GAME COMPLETE
          </p>

          <h3 className="mt-4 font-serif text-5xl font-semibold text-[#495A27]">
            {score}/{questions.length}
          </h3>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#727A63]">
            {score >= 5
              ? "Excellent work. You made thoughtful choices throughout the game."
              : score >= 3
                ? "Good progress. Review the explanations before playing again."
                : "Review the key vocabulary and grammar, then try another round."}
          </p>

          <button
            type="button"
            onClick={restartGame}
            className={`mt-7 rounded-full px-7 py-3 font-semibold text-white transition ${buttonClass}`}
          >
            Play Again
          </button>
        </div>
      )}
    </section>
  );
}

export default function Games6Page({ onBack }) {
  return (
    <main className="min-h-screen bg-[#F4F5F1] px-4 py-6 text-[#3F4E21]">
      <div className="mx-auto max-w-6xl">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-[#D1DDB9] bg-white px-5 py-2 font-semibold text-[#53672C] shadow-sm transition hover:bg-[#EAECE5]"
        >
          ← Unit 6
        </button>

        <header className="relative mt-6 overflow-hidden rounded-[2.25rem] border border-[#D2D5CC] bg-gradient-to-br from-[#566A2D] via-[#698238] to-[#767E67] px-7 py-10 text-white shadow-[0_20px_50px_rgba(62,76,33,0.15)] md:px-12 md:py-14">
          <div className="absolute right-10 top-8 h-28 w-28 rounded-full border border-white/15" />
          <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-white/5" />

          <div className="relative max-w-4xl">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.2em]">
              UNIT 6 · GAMES
            </span>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight md:text-6xl">
              Choose Your
              <span className="mt-2 block text-[#E3E8D9]">
                Lifestyle Journey
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#F1F2EE] md:text-lg">
              Make thoughtful choices, explore different lifestyles and
              practise future forms through two focused challenges.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                2 games
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                12 rounds
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                Instant feedback
              </span>
            </div>
          </div>
        </header>

        <div className="mt-10 space-y-12">
          <GameCard
            eyebrow="GAME 1"
            title="Lifestyle Compass"
            description="Read each situation and choose the word, phrase or idea that best matches it."
            questions={lifestyleQuestions}
            accentClass="border-[#D3DBC3] bg-[#EAECE5]"
            buttonClass="bg-[#A0C25B] hover:bg-[#90B644]"
          />

          <GameCard
            eyebrow="GAME 2"
            title="Future Route"
            description="Choose the correct future or conditional form to move successfully through each stage."
            questions={futureQuestions}
            accentClass="border-[#D3DBC4] bg-[#EBEDE6]"
            buttonClass="bg-[#586D2F] hover:bg-[#465725]"
          />
        </div>
      </div>
    </main>
  );
}