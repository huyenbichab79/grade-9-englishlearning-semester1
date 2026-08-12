import { useState } from "react";

const exerciseGroups = [
  {
    id: "grammar-basics",
    title: "Task 1: Present Perfect Basics",
    instruction:
      "Choose the correct form or structure.",
    questions: [
      {
        id: "basic-1",
        level: "Basic",
        topic: "Form",
        prompt:
          "Which is the correct affirmative structure of the present perfect?",
        answer:
          "Subject + have/has + past participle",
        options: [
          "Subject + have/has + past participle",
          "Subject + did + past participle",
          "Subject + was/were + verb-ing",
        ],
        explanation:
          "The present perfect is formed with have or has followed by the past participle.",
      },
      {
        id: "basic-2",
        level: "Basic",
        topic: "Have or Has",
        prompt:
          "She ______ visited three countries this year.",
        answer: "has",
        options: [
          "has",
          "have",
          "did",
        ],
        explanation:
          "She is singular, so we use has.",
      },
      {
        id: "basic-3",
        level: "Basic",
        topic: "Past Participle",
        prompt:
          "Choose the correct past participle of “go”.",
        answer: "gone",
        options: [
          "gone",
          "went",
          "going",
        ],
        explanation:
          "The past participle of go is gone.",
      },
      {
        id: "basic-4",
        level: "Basic",
        topic: "Negative Form",
        prompt:
          "We ______ finished our project yet.",
        answer: "have not",
        options: [
          "have not",
          "did not",
          "are not",
        ],
        explanation:
          "The negative present perfect uses have or has plus not and the past participle.",
      },
    ],
  },
  {
    id: "grammar-application",
    title: "Task 2: Apply the Grammar",
    instruction:
      "Choose the best answer for each experience.",
    questions: [
      {
        id: "intermediate-1",
        level: "Intermediate",
        topic: "Since or For",
        prompt:
          "My sister has studied English ______ 2018.",
        answer: "since",
        options: [
          "since",
          "for",
          "yet",
        ],
        explanation:
          "Since is used with a starting point in time, such as 2018.",
      },
      {
        id: "intermediate-2",
        level: "Intermediate",
        topic: "Since or For",
        prompt:
          "They have lived in this city ______ seven years.",
        answer: "for",
        options: [
          "for",
          "since",
          "already",
        ],
        explanation:
          "For is used with a period of time, such as seven years.",
      },
      {
        id: "intermediate-3",
        level: "Intermediate",
        topic: "Ever",
        prompt:
          "______ you ever gone snorkeling near a coral reef?",
        answer: "Have",
        options: [
          "Have",
          "Did",
          "Has",
        ],
        explanation:
          "Questions about life experiences often use Have you ever plus the past participle.",
      },
      {
        id: "intermediate-4",
        level: "Intermediate",
        topic: "Yet",
        prompt:
          "Jane has not received her exam results ______.",
        answer: "yet",
        options: [
          "yet",
          "already",
          "since",
        ],
        explanation:
          "Yet is commonly used at the end of negative present perfect sentences.",
      },
      {
        id: "intermediate-5",
        level: "Intermediate",
        topic: "Since Clause",
        prompt:
          "My daughter has become more confident since she ______ the team-building course.",
        answer: "joined",
        options: [
          "joined",
          "has joined",
          "joins",
        ],
        explanation:
          "After since, the starting event is normally expressed in the past simple.",
      },
    ],
  },
  {
    id: "grammar-challenge",
    title: "Task 3: Present Perfect Challenge",
    instruction:
      "Choose the best correction or sentence with the same meaning.",
    questions: [
      {
        id: "advanced-1",
        level: "Advanced",
        topic: "Present Perfect or Past Simple",
        prompt:
          "Choose the correct sentence.",
        answer:
          "We visited the coral reef last summer.",
        options: [
          "We visited the coral reef last summer.",
          "We have visited the coral reef last summer.",
          "We have visit the coral reef last summer.",
        ],
        explanation:
          "A finished time expression such as last summer requires the past simple.",
      },
      {
        id: "advanced-2",
        level: "Advanced",
        topic: "Sentence Transformation",
        prompt:
          "Choose the sentence with the same meaning.\n\nHe started working as an instructor five years ago.",
        answer:
          "He has worked as an instructor for five years.",
        options: [
          "He has worked as an instructor for five years.",
          "He worked as an instructor since five years.",
          "He has started working as an instructor five years ago.",
        ],
        explanation:
          "An action that started in the past and continues now uses the present perfect with for.",
      },
      {
        id: "advanced-3",
        level: "Advanced",
        topic: "Life Experience",
        prompt:
          "Choose the sentence with the same meaning.\n\nThis is the first time Lan has tried parachuting.",
        answer:
          "Lan has never tried parachuting before.",
        options: [
          "Lan has never tried parachuting before.",
          "Lan did not try parachuting yesterday.",
          "Lan has tried parachuting many times.",
        ],
        explanation:
          "The first time someone has done something means they have never done it before.",
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#E4DED1] bg-[#F5F4F1] text-[#9B7824]",
  Intermediate:
    "border-[#DDD6C6] bg-[#F1F0EC] text-[#8E6E21]",
  Advanced:
    "border-[#EAE5DB] bg-[#F7F6F5] text-[#C1A156]",
};

const topicStyles = {
  Form:
    "bg-[#F5F4F1] text-[#9B7824]",
  "Have or Has":
    "bg-[#F1F0EC] text-[#8E6E21]",
  "Past Participle":
    "bg-[#F7F6F5] text-[#C1A156]",
  "Negative Form":
    "bg-[#FFF0EC] text-[#BB9948]",
  "Since or For":
    "bg-[#EFEDE8] text-[#8C6C21]",
  Ever:
    "bg-[#F5F4F1] text-[#9B7824]",
  Yet:
    "bg-[#F7F6F5] text-[#C1A156]",
  "Since Clause":
    "bg-[#F1F0EC] text-[#8E6E21]",
  "Present Perfect or Past Simple":
    "bg-[#EFEDE8] text-[#8C6C21]",
  "Sentence Transformation":
    "bg-[#FFF0EC] text-[#BB9948]",
  "Life Experience":
    "bg-[#F5F4F1] text-[#9B7824]",
};

function Grammar5Page({
  onBack,
  onComplete,
}) {
  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const allQuestions =
    exerciseGroups.flatMap(
      (group) => group.questions
    );

  const questionNumbers =
    Object.fromEntries(
      allQuestions.map(
        (question, index) => [
          question.id,
          index + 1,
        ]
      )
    );

  const totalQuestions =
    allQuestions.length;

  const correctAnswers =
    allQuestions.filter(
      (question) =>
        selectedAnswers[question.id] ===
        question.answer
    ).length;

  const scorePercent = Math.round(
    (correctAnswers / totalQuestions) *
      100
  );

  const handleSelect = (
    questionId,
    option
  ) => {
    if (submitted) return;

    setSelectedAnswers(
      (currentAnswers) => ({
        ...currentAnswers,
        [questionId]: option,
      })
    );

    setMessage("");
  };

  const handleSubmit = () => {
    if (
      Object.keys(selectedAnswers).length <
      totalQuestions
    ) {
      setMessage(
        "Please answer all questions before submitting."
      );
      return;
    }

    setSubmitted(true);
    setMessage("");

    if (onComplete) {
      onComplete({
        correctAnswers,
        totalQuestions,
      });
    }
  };

  const handleTryAgain = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-[#FCFCFC] px-4 py-6 text-[#685018] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="relative overflow-hidden rounded-[32px] border border-white bg-gradient-to-r from-[#F5F4F1] via-[#F7F7F6] to-[#EFEDE8] p-6 shadow-lg sm:p-8">
          <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#CFB77D]/35" />

          <div className="pointer-events-none absolute bottom-8 right-36 h-16 w-16 rounded-full bg-[#EDEBE6]" />

          <div className="relative">
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl bg-white px-4 py-2 font-bold text-[#9B7824] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Back to Unit 5
            </button>

            <p className="mt-6 font-black uppercase tracking-[0.18em] text-[#9A7724]">
              Unit 5 · Activity 3
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-5xl">
              Present Perfect
            </h1>

            <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#C1952D]">
              Talk about life experiences,
              recent results, and actions that
              started in the past and continue
              until now.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#9B7824]">
                  12
                </p>

                <p className="mt-1 text-sm font-bold text-[#C1952D]">
                  Questions
                </p>
              </div>

              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#9A7724]">
                  3
                </p>

                <p className="mt-1 text-sm font-bold text-[#C1952D]">
                  Grammar tasks
                </p>
              </div>

              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#CAB071]">
                  3
                </p>

                <p className="mt-1 text-sm font-bold text-[#C1952D]">
                  Difficulty levels
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-7 grid gap-5 md:grid-cols-2">
          <article className="rounded-[26px] border border-[#E6E1D5] bg-[#F5F4F1] p-5 shadow-md sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                ✅
              </span>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.12em] text-[#9B7824]">
                  Structure
                </p>

                <h2 className="text-xl font-black text-[#685018]">
                  Present Perfect
                </h2>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-white/85 p-4">
              <p className="font-black text-[#9B7824]">
                Subject + have/has + V3/ed
              </p>

              <p className="mt-3 rounded-xl bg-[#F9F9F8] p-3 font-semibold text-[#A88227]">
                I have visited that campsite.
              </p>

              <p className="mt-2 rounded-xl bg-[#F9F9F8] p-3 font-semibold text-[#A88227]">
                She has never tried snorkeling.
              </p>
            </div>
          </article>

          <article className="rounded-[26px] border border-[#E3DED1] bg-[#F1F0EC] p-5 shadow-md sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                🕒
              </span>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.12em] text-[#8E6E21]">
                  Time expressions
                </p>

                <h2 className="text-xl font-black text-[#685018]">
                  Since and For
                </h2>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-white/85 p-4">
              <p className="font-black text-[#8E6E21]">
                Since + starting point
              </p>

              <p className="mt-1 text-sm font-medium text-[#C1952D]">
                since 2020 · since Monday
              </p>

              <p className="mt-4 font-black text-[#8E6E21]">
                For + period of time
              </p>

              <p className="mt-1 text-sm font-medium text-[#C1952D]">
                for two years · for a week
              </p>
            </div>
          </article>
        </section>

        <section className="mt-5 rounded-[26px] border border-[#EBE9E4] bg-[#F7F6F5] p-5 shadow-md sm:p-6">
          <p className="font-black uppercase tracking-[0.14em] text-[#C1A156]">
            Present Perfect or Past Simple?
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white/85 p-4">
              <p className="font-black text-[#9B7824]">
                Present Perfect
              </p>

              <p className="mt-2 leading-6 text-[#C1952D]">
                Use it when the exact finished
                time is not stated or the action
                is connected with the present.
              </p>

              <p className="mt-3 font-semibold text-[#A88227]">
                I have tried parachuting once.
              </p>
            </div>

            <div className="rounded-2xl bg-white/85 p-4">
              <p className="font-black text-[#CBB173]">
                Past Simple
              </p>

              <p className="mt-2 leading-6 text-[#C1952D]">
                Use it with a completed time
                such as yesterday, last summer,
                or in 2024.
              </p>

              <p className="mt-3 font-semibold text-[#A88227]">
                I tried parachuting last year.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-[22px] bg-white p-5 shadow-md">
                <h2 className="text-2xl font-black text-[#9B7824]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#C1952D]">
                  {group.instruction}
                </p>
              </div>

              <div className="space-y-5">
                {group.questions.map(
                  (question) => {
                    const selected =
                      selectedAnswers[
                        question.id
                      ];

                    const selectedIsCorrect =
                      selected ===
                      question.answer;

                    return (
                      <article
                        key={question.id}
                        className="rounded-[26px] border border-[#EBE9E3] bg-white p-5 shadow-md sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-black text-[#D0B880]">
                              Question{" "}
                              {
                                questionNumbers[
                                  question.id
                                ]
                              }
                            </p>

                            <span
                              className={`rounded-full px-3 py-1 text-xs font-bold ${topicStyles[question.topic]}`}
                            >
                              {question.topic}
                            </span>
                          </div>

                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-bold ${levelStyles[question.level]}`}
                          >
                            {question.level}
                          </span>
                        </div>

                        <p className="mt-4 whitespace-pre-line text-lg font-bold leading-7 text-[#685018]">
                          {question.prompt}
                        </p>

                        <div className="mt-4 grid gap-3">
                          {question.options.map(
                            (option) => {
                              const isSelected =
                                selected ===
                                option;

                              const isCorrect =
                                option ===
                                question.answer;

                              let optionStyle =
                                "border-[#EAE7E1] bg-[#FCFCFC] text-[#A88227] hover:border-[#D1BA84] hover:bg-[#F7F7F6]";

                              if (
                                isSelected &&
                                !submitted
                              ) {
                                optionStyle =
                                  "border-[#BB9846] bg-[#F3F2EF] text-[#8C6C21]";
                              }

                              if (
                                submitted &&
                                isCorrect
                              ) {
                                optionStyle =
                                  "border-[#BF9F53] bg-[#F1F0EC] text-[#7F621E]";
                              }

                              if (
                                submitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionStyle =
                                  "border-[#C9B78E] bg-[#FFF0EC] text-[#C1952D]";
                              }

                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() =>
                                    handleSelect(
                                      question.id,
                                      option
                                    )
                                  }
                                  className={`rounded-2xl border px-4 py-3 text-left font-semibold leading-6 transition ${optionStyle}`}
                                >
                                  {option}
                                </button>
                              );
                            }
                          )}
                        </div>

                        {submitted && (
                          <div
                            className={`mt-4 rounded-2xl p-4 ${
                              selectedIsCorrect
                                ? "bg-[#F1F0EC]"
                                : "bg-[#FFF0EC]"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                selectedIsCorrect
                                  ? "text-[#7F621E]"
                                  : "text-[#C1952D]"
                              }`}
                            >
                              {selectedIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this answer"}
                            </p>

                            <p className="mt-1 leading-6 text-[#C1952D]">
                              {
                                question.explanation
                              }
                            </p>
                          </div>
                        )}
                      </article>
                    );
                  }
                )}
              </div>
            </div>
          ))}
        </section>

        {message && (
          <p className="mt-7 rounded-2xl border border-[#D4C7A7] bg-[#EFEDE9] p-4 text-center font-bold text-[#7D601D]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] border border-[#E6E1D5] bg-[#F5F4F1] p-7 text-center shadow-md">
            <p className="font-black uppercase tracking-[0.16em] text-[#D0B880]">
              Your result
            </p>

            <p className="mt-2 text-5xl font-black text-[#9B7824]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#685018]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#C1952D]">
              {scorePercent >= 85
                ? "Excellent! You can use the present perfect confidently."
                : scorePercent >= 65
                  ? "Good work! Review since, for, and the difference between present perfect and past simple."
                  : "Review the grammar guide and try the activity again."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#9B7824] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#81641E]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#9A7724] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#82651F]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Grammar5Page;