import { useState } from "react";

const buildSentenceQuestions = [
  {
    words: ["playing badminton", "in my free time.", "I", "enjoy"],
    answer: "I enjoy playing badminton in my free time.",
  },
  {
    words: ["paper flowers.", "making", "My sister", "loves"],
    answer: "My sister loves making paper flowers.",
  },
  {
    words: ["doing", "DIY projects.", "are interested in", "We"],
    answer: "We are interested in doing DIY projects.",
  },
  {
    words: ["his parents.", "Minh", "helping", "doesn't mind"],
    answer: "Minh doesn't mind helping his parents.",
  },
  {
    words: ["staying", "They", "at home all day.", "hate"],
    answer: "They hate staying at home all day.",
  },
  {
    words: ["comic books.", "reading", "is keen on", "Lan"],
    answer: "Lan is keen on reading comic books.",
  },
];
const spotMistakeQuestions = [
  {
    sentence: "She enjoys to read comic books.",
    options: ["enjoy", "reading", "reads", "to reading"],
    answer: "reading",
    correctSentence: "She enjoys reading comic books.",
  },
  {
    sentence: "I am interested on making DIY products.",
    options: ["at", "in", "for", "with"],
    answer: "in",
    correctSentence: "I am interested in making DIY products.",
  },
  {
    sentence: "They loves playing computer games.",
    options: ["love", "loving", "loved", "are love"],
    answer: "love",
    correctSentence: "They love playing computer games.",
  },
  {
    sentence: "Minh doesn't mind to help his parents.",
    options: ["help", "helping", "helps", "to helping"],
    answer: "helping",
    correctSentence: "Minh doesn't mind helping his parents.",
  },
  {
    sentence: "Lan is keen in drawing pictures.",
    options: ["at", "on", "with", "for"],
    answer: "on",
    correctSentence: "Lan is keen on drawing pictures.",
  },
  {
    sentence: "We hate stay at home all day.",
    options: ["stays", "staying", "to staying", "stayed"],
    answer: "staying",
    correctSentence: "We hate staying at home all day.",
  },
];
function Writing1Page({ onBack }) {
    const [currentBuildQuestion, setCurrentBuildQuestion] = useState(0);
const [selectedWordIndexes, setSelectedWordIndexes] = useState([]);
const [buildFeedback, setBuildFeedback] = useState("");
const [buildScore, setBuildScore] = useState(0);
const [buildAnswered, setBuildAnswered] = useState(false);
const [currentMistakeQuestion, setCurrentMistakeQuestion] = useState(0);
const [selectedMistakeAnswer, setSelectedMistakeAnswer] = useState("");
const [mistakeFeedback, setMistakeFeedback] = useState("");
const [mistakeScore, setMistakeScore] = useState(0);
const [mistakeAnswered, setMistakeAnswered] = useState(false);
const currentMistake =
  spotMistakeQuestions[currentMistakeQuestion];

const checkMistakeAnswer = () => {
  if (mistakeAnswered) {
    return;
  }

  if (!selectedMistakeAnswer) {
    setMistakeFeedback("Please choose an answer first.");
    return;
  }

  if (selectedMistakeAnswer === currentMistake.answer) {
    setMistakeFeedback(
      `✅ Correct! ${currentMistake.correctSentence}`
    );
    setMistakeScore((previousScore) => previousScore + 1);
  } else {
    setMistakeFeedback(
      `❌ Not quite. Correct sentence: ${currentMistake.correctSentence}`
    );
  }

  setMistakeAnswered(true);
};
const goToNextMistakeQuestion = () => {
  if (currentMistakeQuestion < spotMistakeQuestions.length - 1) {
    setCurrentMistakeQuestion(
      (previousQuestion) => previousQuestion + 1
    );
    setSelectedMistakeAnswer("");
    setMistakeFeedback("");
    setMistakeAnswered(false);
  }
};
const currentBuildSentence =
  buildSentenceQuestions[currentBuildQuestion];

const chooseWord = (wordIndex) => {
  if (
    buildAnswered ||
    selectedWordIndexes.includes(wordIndex)
  ) {
    return;
  }

  setSelectedWordIndexes((previousIndexes) => [
    ...previousIndexes,
    wordIndex,
  ]);

  setBuildFeedback("");
};

const removeWord = (wordIndex) => {
  if (buildAnswered) {
    return;
  }

  setSelectedWordIndexes((previousIndexes) =>
    previousIndexes.filter((index) => index !== wordIndex)
  );

  setBuildFeedback("");
};
const selectedSentence = selectedWordIndexes
  .map((wordIndex) => currentBuildSentence.words[wordIndex])
  .join(" ");

const checkBuildSentence = () => {
  if (buildAnswered) {
    return;
  }

  if (
    selectedWordIndexes.length <
    currentBuildSentence.words.length
  ) {
    setBuildFeedback("Please use all word groups first.");
    return;
  }

  if (selectedSentence === currentBuildSentence.answer) {
    setBuildFeedback("✅ Correct! Great job.");
    setBuildScore((previousScore) => previousScore + 1);
  } else {
    setBuildFeedback(
      `❌ Not quite. Correct answer: ${currentBuildSentence.answer}`
    );
  }

  setBuildAnswered(true);
};
const goToNextBuildQuestion = () => {
  if (currentBuildQuestion < buildSentenceQuestions.length - 1) {
    setCurrentBuildQuestion(
      (previousQuestion) => previousQuestion + 1
    );
    setSelectedWordIndexes([]);
    setBuildFeedback("");
    setBuildAnswered(false);
  }
};
const buildExerciseCompleted =
  buildAnswered &&
  currentBuildQuestion === buildSentenceQuestions.length - 1;

const mistakeExerciseCompleted =
  mistakeAnswered &&
  currentMistakeQuestion === spotMistakeQuestions.length - 1;

const writingCompleted =
  buildExerciseCompleted && mistakeExerciseCompleted;
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
            Unit 1 • Writing
          </p>

          <h1 className="mt-2 text-3xl font-black text-slate-900">
            Leisure Activities
          </h1>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Practise building correct sentences and finding common writing
            mistakes.
          </p>
        </section>
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
  <div className="flex flex-wrap items-center justify-between gap-4">
    <div>
      <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
        Exercise 1
      </p>

      <h2 className="mt-2 text-2xl font-black text-slate-900">
        Build a Sentence
      </h2>

      <p className="mt-2 text-slate-500">
        Choose the word groups in the correct order.
      </p>
    </div>

    <div className="rounded-xl bg-emerald-50 px-4 py-2 font-bold text-emerald-700">
      Score: {buildScore}/{buildSentenceQuestions.length}
    </div>
  </div>

  <div className="mt-6 flex items-center justify-between gap-4">
    <p className="font-bold text-slate-700">
      Question {currentBuildQuestion + 1} of{" "}
      {buildSentenceQuestions.length}
    </p>

    <div className="h-2 w-40 overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-emerald-600 transition-all"
        style={{
          width: `${
            ((currentBuildQuestion + 1) /
              buildSentenceQuestions.length) *
            100
          }%`,
        }}
      />
    </div>
  </div>

  <div className="mt-6 min-h-24 rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50 p-4">
    {selectedWordIndexes.length === 0 ? (
      <p className="text-center text-slate-500">
        Your sentence will appear here.
      </p>
    ) : (
      <div className="flex flex-wrap gap-2">
        {selectedWordIndexes.map((wordIndex) => (
          <button
            key={wordIndex}
            type="button"
            onClick={() => removeWord(wordIndex)}
            className="rounded-xl border border-emerald-600 bg-white px-4 py-2 font-bold text-emerald-700"
          >
            {currentBuildSentence.words[wordIndex]}
          </button>
        ))}
      </div>
    )}
  </div>

  <p className="mt-5 text-sm font-bold uppercase tracking-wider text-slate-500">
    Word Groups
  </p>

  <div className="mt-3 flex flex-wrap gap-3">
    {currentBuildSentence.words.map((word, wordIndex) => (
      <button
        key={`${word}-${wordIndex}`}
        type="button"
        onClick={() => chooseWord(wordIndex)}
        disabled={
          selectedWordIndexes.includes(wordIndex) || buildAnswered
        }
        className={`rounded-xl border px-4 py-3 font-bold transition ${
          selectedWordIndexes.includes(wordIndex)
            ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
            : "border-slate-300 bg-white text-slate-700 hover:border-emerald-500"
        }`}
      >
        {word}
      </button>
    ))}
  </div>

  {buildFeedback && (
    <p className="mt-5 rounded-2xl bg-slate-100 p-4 font-semibold text-slate-700">
      {buildFeedback}
    </p>
  )}

  <div className="mt-6 flex flex-wrap gap-3">
    {!buildAnswered && (
      <button
        type="button"
        onClick={checkBuildSentence}
        className="rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
      >
        Check Sentence
      </button>
    )}

    {buildAnswered &&
      currentBuildQuestion < buildSentenceQuestions.length - 1 && (
        <button
          type="button"
          onClick={goToNextBuildQuestion}
          className="rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700"
        >
          Next Question →
        </button>
      )}

    {buildAnswered &&
      currentBuildQuestion === buildSentenceQuestions.length - 1 && (
        <p className="rounded-xl bg-emerald-50 px-5 py-3 font-bold text-emerald-700">
          🎉 Exercise completed!
        </p>
      )}
  </div>
</section>
<section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
  <div className="flex flex-wrap items-center justify-between gap-4">
    <div>
      <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
        Exercise 2
      </p>

      <h2 className="mt-2 text-2xl font-black text-slate-900">
        Spot the Mistake
      </h2>

      <p className="mt-2 text-slate-500">
        Find the mistake and choose the correct replacement.
      </p>
    </div>

    <div className="rounded-xl bg-amber-50 px-4 py-2 font-bold text-amber-700">
      Score: {mistakeScore}/{spotMistakeQuestions.length}
    </div>
  </div>

  <div className="mt-6 flex items-center justify-between gap-4">
    <p className="font-bold text-slate-700">
      Question {currentMistakeQuestion + 1} of{" "}
      {spotMistakeQuestions.length}
    </p>

    <div className="h-2 w-40 overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-amber-600 transition-all"
        style={{
          width: `${
            ((currentMistakeQuestion + 1) /
              spotMistakeQuestions.length) *
            100
          }%`,
        }}
      />
    </div>
  </div>

  <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
    <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
      Incorrect Sentence
    </p>

    <p className="mt-3 text-xl font-black leading-8 text-slate-900">
      {currentMistake.sentence}
    </p>
  </div>

  <p className="mt-5 text-sm font-bold uppercase tracking-wider text-slate-500">
    Choose the Correct Answer
  </p>

  <div className="mt-3 grid gap-3 sm:grid-cols-2">
    {currentMistake.options.map((option, optionIndex) => (
      <button
        key={option}
        type="button"
        disabled={mistakeAnswered}
        onClick={() => {
          setSelectedMistakeAnswer(option);
          setMistakeFeedback("");
        }}
        className={`rounded-xl border p-4 text-left font-bold transition ${
          selectedMistakeAnswer === option
            ? "border-amber-600 bg-amber-600 text-white"
            : "border-slate-300 bg-white text-slate-700 hover:border-amber-400"
        } ${
          mistakeAnswered ? "cursor-not-allowed" : ""
        }`}
      >
        {String.fromCharCode(65 + optionIndex)}. {option}
      </button>
    ))}
  </div>

  {mistakeFeedback && (
    <p className="mt-5 rounded-2xl bg-slate-100 p-4 font-semibold leading-7 text-slate-700">
      {mistakeFeedback}
    </p>
  )}

  <div className="mt-6 flex flex-wrap gap-3">
    {!mistakeAnswered && (
      <button
        type="button"
        onClick={checkMistakeAnswer}
        className="rounded-xl bg-amber-600 px-6 py-3 font-bold text-white transition hover:bg-amber-700"
      >
        Check Answer
      </button>
    )}

    {mistakeAnswered &&
      currentMistakeQuestion < spotMistakeQuestions.length - 1 && (
        <button
          type="button"
          onClick={goToNextMistakeQuestion}
          className="rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700"
        >
          Next Question →
        </button>
      )}

    {mistakeAnswered &&
      currentMistakeQuestion === spotMistakeQuestions.length - 1 && (
        <p className="rounded-xl bg-amber-50 px-5 py-3 font-bold text-amber-700">
          🎉 Exercise completed!
        </p>
      )}
  </div>
</section>
{writingCompleted && (
  <section className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-center md:p-8">
    <p className="text-4xl">🎉</p>

    <h2 className="mt-3 text-2xl font-black text-slate-900">
      Writing Completed!
    </h2>

    <p className="mt-2 text-slate-600">
      Great work! You have completed both writing exercises.
    </p>

    <div className="mt-5 flex flex-wrap justify-center gap-3">
      <div className="rounded-xl bg-white px-5 py-3 font-bold text-emerald-700">
        Build a Sentence: {buildScore}/{buildSentenceQuestions.length}
      </div>

      <div className="rounded-xl bg-white px-5 py-3 font-bold text-amber-700">
        Spot the Mistake: {mistakeScore}/{spotMistakeQuestions.length}
      </div>
    </div>
  </section>
)}
      </div>
    </main>
  );
}

export default Writing1Page;