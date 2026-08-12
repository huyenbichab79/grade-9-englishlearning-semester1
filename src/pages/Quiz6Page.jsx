import { useState } from "react";

const quizQuestions = [
  {
    level: "MEDIUM",
    topic: "VOCABULARY",
    question:
      "What do we call a person who controls a dogsled?",
    options: ["musher", "nomad", "waiter", "artist"],
    answer: "musher",
    explanation:
      "A musher is a person who drives or controls a dogsled.",
  },
  {
    level: "MEDIUM",
    topic: "VOCABULARY",
    question:
      "Which phrase describes art created by the original people of an area?",
    options: [
      "native art",
      "street food",
      "online learning",
      "balanced diet",
    ],
    answer: "native art",
    explanation:
      "Native art is the traditional art of the local or original people of an area.",
  },
  {
    level: "MEDIUM",
    topic: "PRONUNCIATION",
    question:
      "Which word begins with the consonant cluster /br/?",
    options: ["breakfast", "present", "practice", "prize"],
    answer: "breakfast",
    explanation:
      "Breakfast begins with /br/. The other words begin with /pr/.",
  },
  {
    level: "MEDIUM",
    topic: "FUTURE SIMPLE",
    question:
      "I think our town ______ more online services in the future.",
    options: [
      "will have",
      "has yesterday",
      "having",
      "will has",
    ],
    answer: "will have",
    explanation:
      "Use will + base verb to make a prediction about the future.",
  },
  {
    level: "MEDIUM",
    topic: "FIRST CONDITIONAL",
    question:
      "If the weather ______ cold tonight, the family will stay inside the ger.",
    options: ["becomes", "will become", "became", "becoming"],
    answer: "becomes",
    explanation:
      "The if-clause of the first conditional uses the present simple.",
  },
  {
    level: "MEDIUM",
    topic: "IF AND UNLESS",
    question:
      "You will not complete the online course ______ you study regularly.",
    options: ["unless", "because", "although", "so"],
    answer: "unless",
    explanation:
      "Unless means if not. Regular study is the condition for completing the course.",
  },
  {
    level: "MEDIUM",
    topic: "READING",
    question:
      "Why is a ger suitable for a nomadic family?",
    options: [
      "It can be taken down and moved.",
      "It is built inside a large city.",
      "It needs a permanent foundation.",
      "It can only be used in summer.",
    ],
    answer: "It can be taken down and moved.",
    explanation:
      "A ger is practical because families can transport and rebuild it in another place.",
  },
  {
    level: "GOOD",
    topic: "WORD FORM",
    question:
      "Choose the correct word: Group activities encourage student ______.",
    options: [
      "interaction",
      "interact",
      "interactive",
      "interactively",
    ],
    answer: "interaction",
    explanation:
      "A noun is required after “student”. Interaction means communication between people.",
  },
  {
    level: "GOOD",
    topic: "FIRST CONDITIONAL",
    question:
      "Choose the grammatically correct sentence.",
    options: [
      "If people use renewable energy, they can protect the environment.",
      "If people will use renewable energy, they can protected the environment.",
      "If people used renewable energy, they will protects the environment.",
      "If people using renewable energy, they can protection the environment.",
    ],
    answer:
      "If people use renewable energy, they can protect the environment.",
    explanation:
      "The if-clause uses the present simple. A modal verb such as can may be used in the main clause.",
  },
  {
    level: "ADVANCED",
    topic: "MAIN IDEA",
    question:
      "Which statement best expresses the relationship between tradition and technology in Unit 6?",
    options: [
      "Modern technology can support traditional lifestyles when communities use it carefully.",
      "Every traditional lifestyle must disappear when people use technology.",
      "Nomadic communities can only survive by moving permanently to cities.",
      "Traditional communities should avoid all modern forms of communication.",
    ],
    answer:
      "Modern technology can support traditional lifestyles when communities use it carefully.",
    explanation:
      "Technology can make communication and daily work easier while communities continue important traditions.",
  },
];

const levelStyles = {
  MEDIUM: "bg-[#E5EADB] text-[#586D2F]",
  GOOD: "bg-[#E4E9DB] text-[#54682D]",
  ADVANCED: "bg-[#E7EBDE] text-[#596E2F]",
};

const topicStyles = {
  VOCABULARY: "bg-[#ECEEE7] text-[#698238]",
  PRONUNCIATION: "bg-[#EDEFE8] text-[#6D863A]",
  "FUTURE SIMPLE": "bg-[#EBEDE7] text-[#627934]",
  "FIRST CONDITIONAL": "bg-[#E7EAE2] text-[#607633]",
  "IF AND UNLESS": "bg-[#E8EAE3] text-[#6D873A]",
  READING: "bg-[#E7EBDE] text-[#688037]",
  "WORD FORM": "bg-[#E8EAE3] text-[#657D35]",
  "MAIN IDEA": "bg-[#E8ECDF] text-[#657D36]",
};

export default function Quiz6Page({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState([]);
  const [finished, setFinished] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];

  const progress =
    ((currentIndex + (finished ? 1 : 0)) /
      quizQuestions.length) *
    100;

  const checkAnswer = () => {
    if (!selectedAnswer || checked) return;

    const isCorrect =
      selectedAnswer === currentQuestion.answer;

    if (isCorrect) {
      setScore((previousScore) => previousScore + 1);
    }

    setResponses((previousResponses) => [
      ...previousResponses,
      {
        questionIndex: currentIndex,
        selectedAnswer,
        isCorrect,
      },
    ]);

    setChecked(true);
  };

  const nextQuestion = () => {
    if (currentIndex === quizQuestions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((previousIndex) => previousIndex + 1);
    setSelectedAnswer("");
    setChecked(false);
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer("");
    setChecked(false);
    setScore(0);
    setResponses([]);
    setFinished(false);
  };

  const getLevelScore = (level) => {
    return responses.filter((response) => {
      const question =
        quizQuestions[response.questionIndex];

      return (
        question.level === level &&
        response.isCorrect
      );
    }).length;
  };

  const getLevelTotal = (level) => {
    return quizQuestions.filter(
      (question) => question.level === level
    ).length;
  };

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
              UNIT 6 · FINAL QUIZ
            </span>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight md:text-6xl">
              Lifestyle
              <span className="mt-2 block text-[#E3E8D9]">
                Knowledge Check
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#F1F2EE] md:text-lg">
              Review vocabulary, pronunciation, grammar and reading skills
              from Unit 6.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                10 questions
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                8 learning areas
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                Instant feedback
              </span>
            </div>
          </div>
        </header>

        <section className="mt-10 rounded-[2rem] border border-[#D3DBC2] bg-white p-5 shadow-[0_16px_40px_rgba(71,75,62,0.07)] md:p-7">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-[#737B64]">
              Quiz progress
            </p>

            <p className="text-sm font-semibold text-[#586D2F]">
              {finished
                ? quizQuestions.length
                : currentIndex + 1}
              /{quizQuestions.length}
            </p>
          </div>

          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-[#E6EADD]">
            <div
              className="h-full rounded-full bg-[#799640] transition-all duration-500"
              style={{
                width: `${finished ? 100 : Math.max(progress, 10)}%`,
              }}
            />
          </div>
        </section>

        {!finished ? (
          <section className="mt-8 rounded-[2.25rem] border border-[#D3DBC3] bg-[#ECEEE7] p-6 shadow-[0_18px_45px_rgba(73,90,38,0.09)] md:p-9">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm md:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-[0.1em] ${
                      topicStyles[currentQuestion.topic] ||
                      "bg-[#EAECE5] text-[#595F4D]"
                    }`}
                  >
                    {currentQuestion.topic}
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-[0.08em] ${
                      levelStyles[currentQuestion.level]
                    }`}
                  >
                    {currentQuestion.level}
                  </span>
                </div>

                <div className="rounded-full bg-[#EEF0EB] px-5 py-2 font-semibold text-[#586D2F]">
                  Score: {score}/{quizQuestions.length}
                </div>
              </div>

              <p className="mt-7 text-sm font-semibold tracking-[0.16em] text-[#7F876E]">
                QUESTION {currentIndex + 1}
              </p>

              <h2 className="mt-4 text-xl font-semibold leading-8 text-[#465625] md:text-2xl">
                {currentQuestion.question}
              </h2>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {currentQuestion.options.map((option, index) => {
                  const isSelected =
                    selectedAnswer === option;

                  const isCorrect =
                    checked &&
                    option === currentQuestion.answer;

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
                      onClick={() =>
                        setSelectedAnswer(option)
                      }
                      className={`flex items-start gap-4 rounded-[1.25rem] border p-4 text-left text-[#54682D] transition disabled:cursor-default ${optionStyle}`}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold shadow-sm">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span className="pt-1 font-medium leading-7">
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>

              {checked && (
                <div
                  className={`mt-7 rounded-[1.5rem] p-5 ${
                    selectedAnswer === currentQuestion.answer
                      ? "bg-[#E5EADB]"
                      : "bg-[#E6EBDD]"
                  }`}
                >
                  <p className="font-semibold text-[#54682C]">
                    {selectedAnswer === currentQuestion.answer
                      ? "Correct answer."
                      : `Correct answer: ${currentQuestion.answer}`}
                  </p>

                  <p className="mt-2 leading-7 text-[#676D5A]">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              <div className="mt-8 flex justify-end">
                {!checked ? (
                  <button
                    type="button"
                    disabled={!selectedAnswer}
                    onClick={checkAnswer}
                    className="rounded-full bg-[#586D2F] px-8 py-3 font-semibold text-white transition hover:bg-[#465725] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="rounded-full bg-[#A3C461] px-8 py-3 font-semibold text-white transition hover:bg-[#93BA46]"
                  >
                    {currentIndex ===
                    quizQuestions.length - 1
                      ? "View Final Result"
                      : "Next Question →"}
                  </button>
                )}
              </div>
            </div>
          </section>
        ) : (
          <section className="mt-8 overflow-hidden rounded-[2.25rem] border border-[#D3DBC3] bg-white shadow-[0_18px_45px_rgba(73,90,38,0.09)]">
            <div className="bg-[#ECEEE7] px-6 py-10 text-center md:px-10">
              <p className="text-xs font-semibold tracking-[0.22em] text-[#7A9741]">
                QUIZ COMPLETE
              </p>

              <h2 className="mt-4 font-serif text-6xl font-semibold text-[#495A27]">
                {score}/10
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#75903E]">
                {score >= 9
                  ? "Excellent work. You have a strong understanding of Unit 6."
                  : score >= 7
                    ? "Good work. Review a few explanations to strengthen your knowledge."
                    : score >= 5
                      ? "You understand the main ideas, but some areas need more practice."
                      : "Review the learning sections carefully before trying the quiz again."}
              </p>
            </div>

            <div className="grid gap-4 p-6 md:grid-cols-3 md:p-9">
              <article className="rounded-[1.5rem] bg-[#EDEFE8] p-6 text-center">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#6C745E]">
                  MEDIUM
                </p>

                <p className="mt-3 font-serif text-3xl font-semibold text-[#4A4F41]">
                  {getLevelScore("MEDIUM")}/
                  {getLevelTotal("MEDIUM")}
                </p>
              </article>

              <article className="rounded-[1.5rem] bg-[#EAEDE5] p-6 text-center">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#718C3C]">
                  GOOD
                </p>

                <p className="mt-3 font-serif text-3xl font-semibold text-[#55692D]">
                  {getLevelScore("GOOD")}/
                  {getLevelTotal("GOOD")}
                </p>
              </article>

              <article className="rounded-[1.5rem] bg-[#EAECE5] p-6 text-center">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#728D3C]">
                  ADVANCED
                </p>

                <p className="mt-3 font-serif text-3xl font-semibold text-[#5C7131]">
                  {getLevelScore("ADVANCED")}/
                  {getLevelTotal("ADVANCED")}
                </p>
              </article>
            </div>

            <div className="border-t border-[#DFE5D4] px-6 py-7 text-center md:px-9">
              <button
                type="button"
                onClick={restartQuiz}
                className="rounded-full bg-[#586D2F] px-8 py-3 font-semibold text-white transition hover:bg-[#465725]"
              >
                Try the Quiz Again
              </button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}