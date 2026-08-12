import { useState } from "react";
const adventureQuestions = [
  {
    category: "Vocabulary",
    question:
      'After finishing her homework, Hoa often browses craft websites for new ideas. What does "browses" mean in this sentence?',
    options: [
      "Looks through them casually",
      "Creates them professionally",
      "Deletes them immediately",
      "Studies every detail carefully",
    ],
    answer: "Looks through them casually",
  },
  {
    category: "Vocabulary",
    question:
      'Nam is quite into building model planes at weekends. The phrase "quite into" is closest in meaning to:',
    options: [
      "very interested in",
      "completely tired of",
      "not allowed to do",
      "not very good at",
    ],
    answer: "very interested in",
  },
  {
    category: "Vocabulary",
    question:
      'Although cleaning is not her favourite activity, Lan does not mind helping her mother. What does "does not mind" mean?',
    options: [
      "She is willing to do it.",
      "She refuses to do it.",
      "She completely adores it.",
      "She always forgets to do it.",
    ],
    answer: "She is willing to do it.",
  },
  {
    category: "Vocabulary",
    question:
      "Which activity is most likely described as a virtual leisure activity?",
    options: [
      "Exploring an online world with friends",
      "Planting vegetables in the garden",
      "Making flowers from coloured paper",
      "Playing badminton in the schoolyard",
    ],
    answer: "Exploring an online world with friends",
  },
  {
    category: "Grammar",
    question:
      "My brother prefers ______ with his friends to ______ alone at home.",
    options: [
      "socialising / staying",
      "socialise / stay",
      "to socialising / staying",
      "socialising / to stay",
    ],
    answer: "socialising / staying",
  },
  {
    category: "Grammar",
    question:
      "Some teenagers are hooked ______ browsing social media for hours.",
    options: ["on", "in", "at", "with"],
    answer: "on",
  },
  {
    category: "Reading",
    question:
      "Which statement best explains why regular jogging may help prevent colds?",
    options: [
      "It may strengthen the immune system.",
      "It increases the amount of stored fat.",
      "It allows people to sleep all day.",
      "It prevents the muscles from working.",
    ],
    answer: "It may strengthen the immune system.",
  },
  {
    category: "Reading",
    question:
      "Why does Lan consider the DIY activities at the community centre useful?",
    options: [
      "They help her gain skills and protect the environment.",
      "They allow her to avoid all schoolwork.",
      "They help her earn money every weekend.",
      "They make her better at computer games.",
    ],
    answer:
      "They help her gain skills and protect the environment.",
  },
  {
    category: "Writing",
    question:
      "Choose the sentence that is grammatically correct and logically complete.",
    options: [
      "In my free time, I enjoy making crafts because it helps me relax.",
      "In my free time, I enjoy make crafts because it help me relax.",
      "I enjoy to making crafts in my free time because relaxing.",
      "Making crafts enjoy I because it helps me to relaxing.",
    ],
    answer:
      "In my free time, I enjoy making crafts because it helps me relax.",
  },
  {
    category: "Final Challenge",
    question:
      "Choose the completely correct sentence about leisure preferences.",
    options: [
      "Although Mai detests playing online games, she is keen on making DIY products.",
      "Although Mai detest playing online games, she is keen in making DIY products.",
      "Although Mai detests to play online games, she is keen on make DIY products.",
      "Although Mai detests playing online games, she keen on making DIY products.",
    ],
    answer:
      "Although Mai detests playing online games, she is keen on making DIY products.",
  },
];

const ninjaQuestions = [
  {
    category: "Vocabulary",
    question:
      'In the sentence “Many teenagers are hooked on social media,” the phrase “hooked on” is closest in meaning to:',
    options: [
      "addicted to",
      "disappointed with",
      "unfamiliar with",
      "responsible for",
    ],
    answer: "addicted to",
  },
  {
    category: "Vocabulary",
    question:
      "Which phrase best describes someone who enjoys an activity very much?",
    options: [
      "be keen on",
      "be afraid of",
      "be tired from",
      "be different from",
    ],
    answer: "be keen on",
  },
  {
    category: "Grammar",
    question:
      "My sister enjoys ______ short videos, but she avoids ______ online too late.",
    options: [
      "making / staying",
      "to make / stay",
      "making / to stay",
      "make / staying",
    ],
    answer: "making / staying",
  },
  {
    category: "Grammar",
    question:
      "Choose the correct sentence.",
    options: [
      "Tom is interested in collecting stamps.",
      "Tom is interested on collecting stamps.",
      "Tom is interested in collect stamps.",
      "Tom interested in collecting stamps.",
    ],
    answer: "Tom is interested in collecting stamps.",
  },
  {
    category: "Grammar",
    question:
      "Mai prefers reading books ______ playing computer games.",
    options: ["to", "than", "with", "for"],
    answer: "to",
  },
  {
    category: "Grammar",
    question:
      "Although Nam dislikes ______, he does not mind ______ his room.",
    options: [
      "cleaning / tidying",
      "to clean / tidy",
      "clean / tidying",
      "cleaning / to tidy",
    ],
    answer: "cleaning / tidying",
  },
  {
    category: "Grammar",
    question:
      "Which sentence uses a leisure-expression correctly?",
    options: [
      "She is fond of making paper flowers.",
      "She is fond in making paper flowers.",
      "She fond of making paper flowers.",
      "She is fond of make paper flowers.",
    ],
    answer: "She is fond of making paper flowers.",
  },
  {
    category: "Reading",
    question:
      "A student visits a community centre to learn crafts, meet friends, and reuse old materials. What is the main benefit?",
    options: [
      "Developing skills while socialising",
      "Avoiding all responsibilities",
      "Spending more time alone",
      "Becoming dependent on technology",
    ],
    answer: "Developing skills while socialising",
  },
  {
    category: "Sentence Correction",
    question:
      "Choose the best correction: “My brother is keen in play badminton.”",
    options: [
      "My brother is keen on playing badminton.",
      "My brother keen on playing badminton.",
      "My brother is keen in playing badminton.",
      "My brother is keen on play badminton.",
    ],
    answer: "My brother is keen on playing badminton.",
  },
  {
    category: "Final Ninja Challenge",
    question:
      "Choose the completely correct sentence.",
    options: [
      "Although Linh is hooked on browsing social media, she prefers reading books to playing online games.",
      "Although Linh hooked on browsing social media, she prefers reading books than playing online games.",
      "Although Linh is hooked in browse social media, she prefer reading books to play online games.",
      "Although Linh is hooked on browsing social media, she prefers read books to playing online games.",
    ],
    answer:
      "Although Linh is hooked on browsing social media, she prefers reading books to playing online games.",
  },
];
function Games1Page({ onBack }) {
  const [activeGame, setActiveGame] = useState("menu");
  const [currentAdventureQuestion, setCurrentAdventureQuestion] =
  useState(0);
const [selectedAdventureAnswer, setSelectedAdventureAnswer] =
  useState("");
const [adventureScore, setAdventureScore] = useState(0);
const [adventureHearts, setAdventureHearts] = useState(3);
const [adventureCombo, setAdventureCombo] = useState(0);
const [adventureFeedback, setAdventureFeedback] = useState("");
const [adventureAnswered, setAdventureAnswered] = useState(false);
const [adventureFinished, setAdventureFinished] = useState(false);
const [currentNinjaQuestion, setCurrentNinjaQuestion] = useState(0);
const [selectedNinjaAnswer, setSelectedNinjaAnswer] = useState("");
const [ninjaScore, setNinjaScore] = useState(0);
const [ninjaHearts, setNinjaHearts] = useState(3);
const [ninjaCombo, setNinjaCombo] = useState(0);
const [ninjaFeedback, setNinjaFeedback] = useState("");
const [ninjaAnswered, setNinjaAnswered] = useState(false);
const [ninjaFinished, setNinjaFinished] = useState(false);
const currentNinja = ninjaQuestions[currentNinjaQuestion];

const checkNinjaAnswer = () => {
  if (ninjaAnswered) {
    return;
  }

  if (!selectedNinjaAnswer) {
    setNinjaFeedback("Please choose an answer first.");
    return;
  }

  if (selectedNinjaAnswer === currentNinja.answer) {
    const newCombo = ninjaCombo + 1;
    const earnedPoints = 10 + (newCombo - 1) * 2;

    setNinjaScore(
      (previousScore) => previousScore + earnedPoints
    );
    setNinjaCombo(newCombo);
    setNinjaFeedback(
      `✅ Correct! +${earnedPoints} points • Combo x${newCombo}`
    );
  } else {
    const remainingHearts = ninjaHearts - 1;

    setNinjaHearts(remainingHearts);
    setNinjaCombo(0);
    setNinjaFeedback(
      `❌ Not quite. Correct answer: ${currentNinja.answer}`
    );

    if (remainingHearts === 0) {
      setNinjaFinished(true);
    }
  }

  setNinjaAnswered(true);
};
const goToNextNinjaQuestion = () => {
  if (ninjaFinished) {
    return;
  }

  if (currentNinjaQuestion < ninjaQuestions.length - 1) {
    setCurrentNinjaQuestion(
      (previousQuestion) => previousQuestion + 1
    );
    setSelectedNinjaAnswer("");
    setNinjaFeedback("");
    setNinjaAnswered(false);
  } else {
    setNinjaFinished(true);
  }
};
const restartNinja = () => {
  setCurrentNinjaQuestion(0);
  setSelectedNinjaAnswer("");
  setNinjaScore(0);
  setNinjaHearts(3);
  setNinjaCombo(0);
  setNinjaFeedback("");
  setNinjaAnswered(false);
  setNinjaFinished(false);
};
const currentAdventure =
  adventureQuestions[currentAdventureQuestion];

const checkAdventureAnswer = () => {
  if (adventureAnswered) {
    return;
  }

  if (!selectedAdventureAnswer) {
    setAdventureFeedback("Please choose an answer first.");
    return;
  }

  if (selectedAdventureAnswer === currentAdventure.answer) {
    const newCombo = adventureCombo + 1;
    const earnedPoints = 10 + (newCombo - 1) * 2;

    setAdventureScore(
      (previousScore) => previousScore + earnedPoints
    );
    setAdventureCombo(newCombo);
    setAdventureFeedback(
      `✅ Correct! +${earnedPoints} points • Combo x${newCombo}`
    );
  } else {
    const remainingHearts = adventureHearts - 1;

    setAdventureHearts(remainingHearts);
    setAdventureCombo(0);
    setAdventureFeedback(
      `❌ Not quite. Correct answer: ${currentAdventure.answer}`
    );

    if (remainingHearts === 0) {
      setAdventureFinished(true);
    }
  }

  setAdventureAnswered(true);
};
const goToNextAdventureQuestion = () => {
  if (adventureFinished) {
    return;
  }

  if (
    currentAdventureQuestion <
    adventureQuestions.length - 1
  ) {
    setCurrentAdventureQuestion(
      (previousQuestion) => previousQuestion + 1
    );
    setSelectedAdventureAnswer("");
    setAdventureFeedback("");
    setAdventureAnswered(false);
  } else {
    setAdventureFinished(true);
  }
};
const restartAdventure = () => {
  setCurrentAdventureQuestion(0);
  setSelectedAdventureAnswer("");
  setAdventureScore(0);
  setAdventureHearts(3);
  setAdventureCombo(0);
  setAdventureFeedback("");
  setAdventureAnswered(false);
  setAdventureFinished(false);
};

if (activeGame === "adventure") {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={() => setActiveGame("menu")}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-bold text-slate-700 hover:bg-slate-100"
        >
          ← Back to Games
        </button>

        {adventureFinished ? (
          <section className="mt-6 rounded-3xl border border-emerald-200 bg-white p-8 text-center">
            <p className="text-6xl">
              {adventureScore >= 150
                ? "🏆"
                : adventureScore >= 100
                  ? "🧭"
                  : "🌱"}
            </p>

            <p className="mt-4 text-sm font-bold uppercase tracking-wider text-emerald-700">
              Adventure Completed
            </p>

            <h1 className="mt-2 text-3xl font-black text-slate-900">
              {adventureScore >= 150
                ? "Leisure Master"
                : adventureScore >= 100
                  ? "Leisure Explorer"
                  : "Keep Practising"}
            </h1>

            <p className="mt-3 text-slate-600">
              You completed the Leisure Adventure challenge.
            </p>

            <div className="mx-auto mt-6 grid max-w-xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm font-bold text-slate-500">Score</p>
                <p className="mt-1 text-2xl font-black text-slate-900">
                  {adventureScore}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm font-bold text-slate-500">Hearts</p>
                <p className="mt-1 text-2xl font-black text-slate-900">
                  {"❤️".repeat(adventureHearts) || "0"}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm font-bold text-slate-500">Best Combo</p>
                <p className="mt-1 text-2xl font-black text-slate-900">
                  x{adventureCombo}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={restartAdventure}
              className="mt-7 rounded-xl bg-emerald-600 px-7 py-3 font-black text-white hover:bg-emerald-700"
            >
              Play Again
            </button>
          </section>
        ) : (
          <>
            <section className="mt-6 rounded-3xl border border-emerald-200 bg-white p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                    Leisure Adventure
                  </p>
                  <h1 className="mt-1 text-2xl font-black text-slate-900">
                    Challenge {currentAdventureQuestion + 1} of{" "}
                    {adventureQuestions.length}
                  </h1>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-xl bg-amber-50 px-4 py-2 font-bold text-amber-700">
                    ⭐ {adventureScore}
                  </span>

                  <span className="rounded-xl bg-rose-50 px-4 py-2 font-bold text-rose-700">
                    {"❤️".repeat(adventureHearts)}
                  </span>

                  <span className="rounded-xl bg-sky-50 px-4 py-2 font-bold text-sky-700">
                    🔥 Combo x{adventureCombo}
                  </span>
                </div>
              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all"
                  style={{
                    width: `${
                      ((currentAdventureQuestion + 1) /
                        adventureQuestions.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </section>

            <section className="mt-5 rounded-3xl border border-slate-200 bg-white p-6">
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                {currentAdventure.category}
              </span>

              <h2 className="mt-5 text-xl font-black leading-relaxed text-slate-900">
                {currentAdventure.question}
              </h2>

              <div className="mt-6 grid gap-3">
                {currentAdventure.options.map((option) => {
                  const isSelected =
                    selectedAdventureAnswer === option;
                  const isCorrect =
                    adventureAnswered &&
                    option === currentAdventure.answer;
                  const isWrong =
                    adventureAnswered &&
                    isSelected &&
                    option !== currentAdventure.answer;

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={adventureAnswered}
                      onClick={() =>
                        setSelectedAdventureAnswer(option)
                      }
                      className={`rounded-2xl border-2 px-5 py-4 text-left font-bold transition ${
                        isCorrect
                          ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                          : isWrong
                            ? "border-rose-500 bg-rose-50 text-rose-800"
                            : isSelected
                              ? "border-sky-500 bg-sky-50 text-sky-800"
                              : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {adventureFeedback && (
                <div
                  className="mt-5 rounded-2xl bg-slate-100 p-4 font-bold text-slate-700"
                  aria-live="polite"
                >
                  {adventureFeedback}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                {!adventureAnswered ? (
                  <button
                    type="button"
                    onClick={checkAdventureAnswer}
                    className="rounded-xl bg-emerald-600 px-7 py-3 font-black text-white hover:bg-emerald-700"
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={goToNextAdventureQuestion}
                    className="rounded-xl bg-slate-900 px-7 py-3 font-black text-white hover:bg-slate-700"
                  >
                    {currentAdventureQuestion ===
                    adventureQuestions.length - 1
                      ? "View Results"
                      : "Next Challenge →"}
                  </button>
                )}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}  

  if (activeGame === "ninja") {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={() => setActiveGame("menu")}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-bold text-slate-700 hover:bg-slate-100"
        >
          ← Back to Games
        </button>

        {ninjaFinished ? (
          <section className="mt-6 rounded-3xl border border-amber-200 bg-white p-8 text-center">
            <p className="text-6xl">
              {ninjaScore >= 150
                ? "🏆"
                : ninjaScore >= 100
                  ? "🥷"
                  : "📘"}
            </p>

            <p className="mt-4 text-sm font-bold uppercase tracking-wider text-amber-700">
              Ninja Training Completed
            </p>

            <h1 className="mt-2 text-3xl font-black text-slate-900">
              {ninjaScore >= 150
                ? "Grammar Master"
                : ninjaScore >= 100
                  ? "Skilled Ninja"
                  : "Keep Practising"}
            </h1>

            <p className="mt-3 text-slate-600">
              You completed the Grammar Ninja challenge.
            </p>

            <div className="mx-auto mt-6 grid max-w-xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm font-bold text-slate-500">
                  Score
                </p>
                <p className="mt-1 text-2xl font-black text-slate-900">
                  {ninjaScore}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm font-bold text-slate-500">
                  Hearts
                </p>
                <p className="mt-1 text-2xl font-black text-slate-900">
                  {"❤️".repeat(ninjaHearts) || "0"}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm font-bold text-slate-500">
                  Combo
                </p>
                <p className="mt-1 text-2xl font-black text-slate-900">
                  x{ninjaCombo}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={restartNinja}
              className="mt-7 rounded-xl bg-amber-500 px-7 py-3 font-black text-slate-900 hover:bg-amber-400"
            >
              Play Again
            </button>
          </section>
        ) : (
          <>
            <section className="mt-6 rounded-3xl border border-amber-200 bg-white p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                    Grammar Ninja
                  </p>

                  <h1 className="mt-1 text-2xl font-black text-slate-900">
                    Challenge {currentNinjaQuestion + 1} of{" "}
                    {ninjaQuestions.length}
                  </h1>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-xl bg-amber-50 px-4 py-2 font-bold text-amber-700">
                    ⭐ {ninjaScore}
                  </span>

                  <span className="rounded-xl bg-rose-50 px-4 py-2 font-bold text-rose-700">
                    {"❤️".repeat(ninjaHearts)}
                  </span>

                  <span className="rounded-xl bg-sky-50 px-4 py-2 font-bold text-sky-700">
                    🔥 Combo x{ninjaCombo}
                  </span>
                </div>
              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-amber-500 transition-all"
                  style={{
                    width: `${
                      ((currentNinjaQuestion + 1) /
                        ninjaQuestions.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </section>

            <section className="mt-5 rounded-3xl border border-slate-200 bg-white p-6">
              <span className="inline-block rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
                {currentNinja.category}
              </span>

              <h2 className="mt-5 text-xl font-black leading-relaxed text-slate-900">
                {currentNinja.question}
              </h2>

              <div className="mt-6 grid gap-3">
                {currentNinja.options.map((option) => {
                  const isSelected =
                    selectedNinjaAnswer === option;

                  const isCorrect =
                    ninjaAnswered &&
                    option === currentNinja.answer;

                  const isWrong =
                    ninjaAnswered &&
                    isSelected &&
                    option !== currentNinja.answer;

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={ninjaAnswered}
                      onClick={() =>
                        setSelectedNinjaAnswer(option)
                      }
                      className={`rounded-2xl border-2 px-5 py-4 text-left font-bold transition ${
                        isCorrect
                          ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                          : isWrong
                            ? "border-rose-500 bg-rose-50 text-rose-800"
                            : isSelected
                              ? "border-amber-500 bg-amber-50 text-amber-800"
                              : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {ninjaFeedback && (
                <div
                  className="mt-5 rounded-2xl bg-slate-100 p-4 font-bold text-slate-700"
                  aria-live="polite"
                >
                  {ninjaFeedback}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                {!ninjaAnswered ? (
                  <button
                    type="button"
                    onClick={checkNinjaAnswer}
                    className="rounded-xl bg-amber-500 px-7 py-3 font-black text-slate-900 hover:bg-amber-400"
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={goToNextNinjaQuestion}
                    className="rounded-xl bg-slate-900 px-7 py-3 font-black text-white hover:bg-slate-700"
                  >
                    {currentNinjaQuestion ===
                    ninjaQuestions.length - 1
                      ? "View Results"
                      : "Next Challenge →"}
                  </button>
                )}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={onBack}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-bold text-slate-700 transition hover:border-emerald-400"
        >
          ← Back to Unit 1
        </button>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
            Unit 1 • Games
          </p>

          <h1 className="mt-2 text-3xl font-black text-slate-900">
            Leisure Activities
          </h1>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Review vocabulary, grammar, reading, and writing through two
            competitive games.
          </p>
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-emerald-200 bg-white p-6">
            <p className="text-5xl">🗺️</p>

            <p className="mt-5 text-sm font-bold uppercase tracking-wider text-emerald-700">
              Game 1
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-900">
              Leisure Adventure
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Travel through ten challenges, collect coins, protect your
              hearts, and unlock a special badge.
            </p>

            <button
              type="button"
              onClick={() => setActiveGame("adventure")}
              className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
            >
              Start Adventure →
            </button>
          </article>

          <article className="rounded-3xl border border-amber-200 bg-white p-6">
            <p className="text-5xl">🥷</p>

            <p className="mt-5 text-sm font-bold uppercase tracking-wider text-amber-700">
              Game 2
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-900">
              Grammar Ninja
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Answer quickly, create powerful combos, and compete for the
              highest score.
            </p>

            <button
              type="button"
              onClick={() => setActiveGame("ninja")}
              className="mt-6 rounded-xl bg-amber-600 px-6 py-3 font-bold text-white transition hover:bg-amber-700"
            >
              Enter the Dojo →
            </button>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Games1Page;