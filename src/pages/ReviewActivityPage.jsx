import { useEffect, useMemo, useState } from "react";

function choosePreferredVoice() {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();
  const englishVoices = voices.filter((voice) =>
    voice.lang?.toLowerCase().startsWith("en")
  );

  return (
    englishVoices.find((voice) =>
      /female|samantha|victoria|zira|aria|jenny|ava|serena|karen/i.test(
        voice.name
      )
    ) ||
    englishVoices.find((voice) =>
      voice.lang?.toLowerCase().startsWith("en-us")
    ) ||
    englishVoices[0] ||
    voices[0] ||
    null
  );
}

export default function ReviewActivityPage({
  activity,
  reviewNumber,
  onBack,
  onComplete,
  accent = "#FF6B6B",
  accentDark = "#D94848",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const questions = activity.questions || [];
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const correctAnswers = useMemo(
    () =>
      questions.filter(
        (question) =>
          selectedAnswers[question.id] === question.answer
      ).length,
    [questions, selectedAnswers]
  );

  const answeredCount = Object.keys(selectedAnswers).length;
  const progressPercent =
    totalQuestions > 0
      ? Math.round(((currentIndex + 1) / totalQuestions) * 100)
      : 0;

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = (text) => {
    if (!text || typeof window === "undefined" || !window.speechSynthesis) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1;

    const preferredVoice = choosePreferredVoice();
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const handleSelect = (answer) => {
    if (submitted || !currentQuestion) {
      return;
    }

    setSelectedAnswers((current) => ({
      ...current,
      [currentQuestion.id]: answer,
    }));
    setMessage("");
  };

  const handleSubmit = async () => {
    if (answeredCount < totalQuestions) {
      setMessage(
        `Please answer all ${totalQuestions} questions before checking your result.`
      );
      return;
    }

    setSubmitted(true);
    setMessage("");

    if (onComplete) {
      try {
        setSaving(true);
        await onComplete({
          correctAnswers,
          totalQuestions,
        });
      } finally {
        setSaving(false);
      }
    }
  };

  const handleRestart = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmitted(false);
    setMessage("");
  };

  const selectedAnswer = currentQuestion
    ? selectedAnswers[currentQuestion.id]
    : null;

  return (
    <main className="min-h-screen bg-[#F5F9DC] px-4 py-6 text-[#244B52] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header
          className="overflow-hidden rounded-[34px] border-2 bg-[#FFFDF7] p-5 shadow-[0_18px_42px_rgba(67,96,71,0.16)] sm:p-7"
          style={{ borderColor: accent }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex w-fit items-center gap-2 rounded-2xl border-2 bg-white px-5 py-3 font-black shadow-md transition hover:-translate-y-0.5"
              style={{
                borderColor: accent,
                color: accentDark,
              }}
            >
              <span className="text-xl">←</span>
              Back to Review {reviewNumber}
            </button>

            <div
              className="w-fit rounded-full px-4 py-2 text-sm font-black text-white shadow-sm"
              style={{ backgroundColor: accent }}
            >
              {activity.content}
            </div>
          </div>

          <div className="mt-6 flex items-start gap-4">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl shadow-sm"
              style={{ backgroundColor: `${accent}22` }}
            >
              {activity.icon}
            </div>

            <div>
              <p
                className="text-sm font-black uppercase tracking-[0.18em]"
                style={{ color: accentDark }}
              >
                Review {reviewNumber} · Activity {activity.number}
              </p>

              <h1 className="mt-2 text-3xl font-black text-[#155E75] sm:text-5xl">
                {activity.title}
              </h1>

              <p className="mt-3 max-w-3xl font-semibold leading-7 text-[#647A7C]">
                {activity.description}
              </p>
            </div>
          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#E7EDC3]">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${progressPercent}%`,
                backgroundColor: accent,
              }}
            />
          </div>

          <div className="mt-2 flex flex-wrap justify-between gap-2 text-sm font-bold text-[#718184]">
            <span>
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span>
              Answered {answeredCount}/{totalQuestions}
            </span>
          </div>
        </header>

        {(activity.passage || activity.audioText) && (
          <section className="mt-6 rounded-[28px] border border-[#D6E39B] bg-[#FFFDF7] p-5 shadow-md sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#7B963E]">
                  {activity.hidePassage ? "Listening text" : "Reading passage"}
                </p>
                <h2 className="mt-1 text-2xl font-black text-[#155E75]">
                  {activity.hidePassage
                    ? "Listen carefully before answering"
                    : "Read or listen before answering"}
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  speak(activity.audioText || activity.passage)
                }
                className="rounded-2xl bg-[#155E75] px-5 py-3 font-black text-white shadow-md transition hover:-translate-y-0.5"
              >
                🔊 Play Audio
              </button>
            </div>

            {!activity.hidePassage && (
              <div className="mt-5 whitespace-pre-line rounded-2xl bg-[#F8FBE8] p-5 font-medium leading-8 text-[#50696B]">
                {activity.passage}
              </div>
            )}
          </section>
        )}

        {currentQuestion && (
          <section className="mt-6 rounded-[30px] border border-[#D6E39B] bg-[#FFFDF7] p-5 shadow-[0_14px_32px_rgba(74,102,72,0.13)] sm:p-7">
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-black"
                style={{
                  backgroundColor: `${accent}20`,
                  color: accentDark,
                }}
              >
                {currentIndex + 1}
              </div>

              <div className="flex-1">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[#8A9C5B]">
                  {currentQuestion.skill || activity.title}
                </p>

                <h2 className="mt-2 text-xl font-black leading-8 text-[#244B52] sm:text-2xl">
                  {currentQuestion.prompt}
                </h2>

                <div className="mt-5 grid gap-3">
                  {currentQuestion.options.map((option) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrectOption =
                      submitted && option === currentQuestion.answer;
                    const isWrongSelected =
                      submitted &&
                      isSelected &&
                      option !== currentQuestion.answer;

                    let optionClass =
                      "border-[#DDE5B7] bg-[#FBFDF1] text-[#536B6C] hover:border-[#BACA6D] hover:bg-[#F4F8DC]";

                    if (isSelected && !submitted) {
                      optionClass =
                        "border-[#155E75] bg-[#EAF6F5] text-[#155E75]";
                    }

                    if (isCorrectOption) {
                      optionClass =
                        "border-emerald-400 bg-emerald-50 text-emerald-800";
                    }

                    if (isWrongSelected) {
                      optionClass =
                        "border-rose-400 bg-rose-50 text-rose-800";
                    }

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelect(option)}
                        className={`rounded-2xl border-2 px-4 py-3 text-left font-bold leading-6 transition ${optionClass}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <div
                    className="mt-5 rounded-2xl border-l-4 bg-[#F7FAE8] p-4"
                    style={{ borderLeftColor: accent }}
                  >
                    <p className="font-black text-[#155E75]">
                      Correct answer: {currentQuestion.answer}
                    </p>
                    <p className="mt-2 font-medium leading-7 text-[#647A7C]">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="mt-6 rounded-[28px] border border-[#D6E39B] bg-[#FFFDF7] p-5 shadow-md">
          {message && (
            <p className="mb-4 rounded-2xl bg-amber-50 px-4 py-3 font-bold text-amber-800">
              {message}
            </p>
          )}

          {submitted && (
            <div className="mb-5 rounded-[24px] bg-[#EEF4CF] p-5 text-center">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#78913F]">
                Your result
              </p>
              <p className="mt-2 text-4xl font-black text-[#155E75]">
                {correctAnswers}/{totalQuestions}
              </p>
              <p className="mt-2 font-bold text-[#637879]">
                {Math.round((correctAnswers / totalQuestions) * 100)}%
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() =>
                setCurrentIndex((index) => Math.max(0, index - 1))
              }
              disabled={currentIndex === 0}
              className="rounded-2xl border-2 border-[#BCCD72] bg-white px-5 py-3 font-black text-[#607945] transition hover:bg-[#F5F9DF] disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Previous
            </button>

            <div className="flex flex-col gap-3 sm:flex-row">
              {submitted ? (
                <button
                  type="button"
                  onClick={handleRestart}
                  className="rounded-2xl bg-[#155E75] px-6 py-3 font-black text-white shadow-md transition hover:-translate-y-0.5"
                >
                  Try Again
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={saving}
                  className="rounded-2xl px-6 py-3 font-black text-white shadow-md transition hover:-translate-y-0.5 disabled:opacity-60"
                  style={{ backgroundColor: accent }}
                >
                  {saving ? "Saving..." : "Check Answers"}
                </button>
              )}

              <button
                type="button"
                onClick={() =>
                  setCurrentIndex((index) =>
                    Math.min(totalQuestions - 1, index + 1)
                  )
                }
                disabled={currentIndex === totalQuestions - 1}
                className="rounded-2xl bg-[#E98312] px-5 py-3 font-black text-white shadow-md transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next →
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
