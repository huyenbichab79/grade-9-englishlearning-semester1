import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const readingPassage = `
Lan lives in a small community near a traditional craft village.
Many people in the village make pottery by hand. They use clay to
make bowls, cups, and small animals. Visitors often come to the
village to watch the artisans work and buy souvenirs.

Lan's mother works at the local market. She sells fruit and vegetables.
Her father is a firefighter. He helps people when there is a fire.

At weekends, Lan and her friends go to the community centre.
They read books, play games, and learn about local traditions.
Sometimes, they help clean the streets and plant trees.

Lan loves her community because the people are friendly and helpful.
She wants young people to preserve the village's traditional skills.
`;

const exerciseGroups = [
  {
    id: "multiple-choice",
    title:
      "Task 1: Choose the correct answer",
    instruction:
      "Listen or read, then choose the best answer.",
    questions: [
      {
        id: "mcq-1",
        prompt:
          "What do people in the craft village make?",
        answer: "Pottery products",
        options: [
          "Pottery products",
          "School bags",
          "Wooden houses",
        ],
      },
      {
        id: "mcq-2",
        prompt:
          "Where does Lan's mother work?",
        answer: "At the local market",
        options: [
          "At a school",
          "At the local market",
          "At a fire station",
        ],
      },
      {
        id: "mcq-3",
        prompt:
          "What is Lan's father's job?",
        answer:
          "He is a firefighter.",
        options: [
          "He is an artisan.",
          "He is a firefighter.",
          "He is a farmer.",
        ],
      },
      {
        id: "mcq-4",
        prompt:
          "Why does Lan love her community?",
        answer:
          "The people are friendly and helpful.",
        options: [
          "The streets are very busy.",
          "The people are friendly and helpful.",
          "There are many tall buildings.",
        ],
      },
    ],
  },
  {
    id: "true-false",
    title: "Task 2: True or False",
    instruction:
      "Listen or read, then choose True or False.",
    questions: [
      {
        id: "tf-1",
        prompt:
          "The artisans make pottery by hand.",
        answer: "True",
        options: ["True", "False"],
      },
      {
        id: "tf-2",
        prompt:
          "Visitors cannot buy souvenirs in the village.",
        answer: "False",
        options: ["True", "False"],
      },
      {
        id: "tf-3",
        prompt:
          "Lan and her friends visit the community centre at weekends.",
        answer: "True",
        options: ["True", "False"],
      },
      {
        id: "tf-4",
        prompt:
          "Lan wants people to forget traditional skills.",
        answer: "False",
        options: ["True", "False"],
      },
    ],
  },
  {
    id: "word-meaning",
    title:
      "Task 3: Match the word with its meaning",
    instruction:
      "Choose the correct meaning of each word.",
    questions: [
      {
        id: "match-1",
        prompt: "artisan",
        answer:
          "A person who makes things by hand",
        options: [
          "A person who makes things by hand",
          "A person who puts out fires",
          "A person who sells fruit",
        ],
      },
      {
        id: "match-2",
        prompt: "souvenir",
        answer:
          "Something kept to remember a place",
        options: [
          "A tool for making pottery",
          "Something kept to remember a place",
          "A room for reading books",
        ],
      },
      {
        id: "match-3",
        prompt: "community centre",
        answer:
          "A place for local activities",
        options: [
          "A place for local activities",
          "A place for making pottery",
          "A place for selling food",
        ],
      },
      {
        id: "match-4",
        prompt: "preserve",
        answer:
          "To protect and keep something",
        options: [
          "To sell something",
          "To break something",
          "To protect and keep something",
        ],
      },
    ],
  },
];

const preferredVoiceNames = [
  "samantha",
  "ava",
  "jenny",
  "aria",
  "zira",
  "victoria",
  "susan",
  "karen",
  "female",
];

function Reading1Page({
  onBack,
  onComplete,
}) {
  const [selectedAnswers, setSelectedAnswers] =
    useState({});
  const [submitted, setSubmitted] =
    useState(false);
  const [message, setMessage] =
    useState("");
  const [voices, setVoices] =
    useState([]);
  const [
    selectedVoiceName,
    setSelectedVoiceName,
  ] = useState("");
  const [speakingKey, setSpeakingKey] =
    useState(null);
  const [isPaused, setIsPaused] =
    useState(false);
  const [
    completionStatus,
    setCompletionStatus,
  ] = useState("idle");

  const selectedVoiceRef = useRef(null);
  const speechSessionRef = useRef(0);

  const speechSupported =
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    "SpeechSynthesisUtterance" in window;

  const englishVoices = useMemo(
    () =>
      voices.filter((voice) =>
        voice.lang
          ?.toLowerCase()
          .startsWith("en")
      ),
    [voices]
  );

  useEffect(() => {
    if (!speechSupported) {
      return undefined;
    }

    const loadVoices = () => {
      const availableVoices =
        window.speechSynthesis.getVoices();

      const availableEnglishVoices =
        availableVoices.filter((voice) =>
          voice.lang
            ?.toLowerCase()
            .startsWith("en")
        );

      setVoices(availableVoices);

      setSelectedVoiceName(
        (currentName) => {
          const currentStillExists =
            availableEnglishVoices.some(
              (voice) =>
                voice.name === currentName
            );

          if (currentStillExists) {
            return currentName;
          }

          const preferredVoice =
            availableEnglishVoices.find(
              (voice) =>
                voice.lang
                  .toLowerCase()
                  .startsWith("en-us") &&
                preferredVoiceNames.some(
                  (name) =>
                    voice.name
                      .toLowerCase()
                      .includes(name)
                )
            ) ||
            availableEnglishVoices.find(
              (voice) =>
                voice.lang
                  .toLowerCase()
                  .startsWith("en-us")
            ) ||
            availableEnglishVoices.find(
              (voice) =>
                preferredVoiceNames.some(
                  (name) =>
                    voice.name
                      .toLowerCase()
                      .includes(name)
                )
            ) ||
            availableEnglishVoices[0];

          return preferredVoice?.name || "";
        }
      );
    };

    loadVoices();

    window.speechSynthesis.addEventListener(
      "voiceschanged",
      loadVoices
    );

    return () => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        loadVoices
      );
      speechSessionRef.current += 1;
      window.speechSynthesis.cancel();
    };
  }, [speechSupported]);

  useEffect(() => {
    selectedVoiceRef.current =
      englishVoices.find(
        (voice) =>
          voice.name === selectedVoiceName
      ) ||
      englishVoices[0] ||
      null;
  }, [englishVoices, selectedVoiceName]);

  const stopSpeech = () => {
    if (!speechSupported) {
      return;
    }

    speechSessionRef.current += 1;
    window.speechSynthesis.cancel();
    setSpeakingKey(null);
    setIsPaused(false);
  };

  const createUtterance = (
    text,
    rate = 0.84
  ) => {
    const utterance =
      new SpeechSynthesisUtterance(
        text.replace(/\s+/g, " ").trim()
      );

    utterance.lang =
      selectedVoiceRef.current?.lang ||
      "en-US";
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    if (selectedVoiceRef.current) {
      utterance.voice =
        selectedVoiceRef.current;
    }

    return utterance;
  };

  const speakSingle = (
    text,
    key,
    rate = 0.84
  ) => {
    if (
      !speechSupported ||
      !text?.trim()
    ) {
      return;
    }

    stopSpeech();

    const session =
      speechSessionRef.current;
    const utterance =
      createUtterance(text, rate);

    setSpeakingKey(key);

    utterance.onend = () => {
      if (
        session ===
        speechSessionRef.current
      ) {
        setSpeakingKey(null);
        setIsPaused(false);
      }
    };

    utterance.onerror = () => {
      if (
        session ===
        speechSessionRef.current
      ) {
        setSpeakingKey(null);
        setIsPaused(false);
      }
    };

    window.speechSynthesis.speak(
      utterance
    );
  };

  const speakSequence = (
    texts,
    key,
    rate = 0.86
  ) => {
    const validTexts = texts.filter(
      (text) =>
        typeof text === "string" &&
        text.trim().length > 0
    );

    if (
      !speechSupported ||
      validTexts.length === 0
    ) {
      return;
    }

    stopSpeech();

    const session =
      speechSessionRef.current;

    setSpeakingKey(key);

    const playNext = (index) => {
      if (
        session !==
        speechSessionRef.current
      ) {
        return;
      }

      if (index >= validTexts.length) {
        setSpeakingKey(null);
        return;
      }

      const utterance =
        createUtterance(
          validTexts[index],
          rate
        );

      utterance.onend = () =>
        playNext(index + 1);
      utterance.onerror = () =>
        playNext(index + 1);

      window.speechSynthesis.speak(
        utterance
      );
    };

    playNext(0);
  };

  const handlePauseResume = () => {
    if (
      !speechSupported ||
      speakingKey === null
    ) {
      return;
    }

    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const allQuestions =
    exerciseGroups.flatMap(
      (group) => group.questions
    );

  const correctAnswers =
    allQuestions.filter(
      (question) =>
        selectedAnswers[
          question.id
        ] === question.answer
    ).length;

  const handleSelect = (
    questionId,
    option
  ) => {
    if (submitted) {
      return;
    }

    setSelectedAnswers(
      (currentAnswers) => ({
        ...currentAnswers,
        [questionId]: option,
      })
    );

    setMessage("");
  };

  const handleSubmit = async () => {
    if (
      Object.keys(selectedAnswers).length <
      allQuestions.length
    ) {
      setMessage(
        "Please answer all questions."
      );
      return;
    }

    stopSpeech();
    setSubmitted(true);
    setMessage(
      `You got ${correctAnswers} out of ${allQuestions.length} correct.`
    );

    if (
      completionStatus === "saving" ||
      completionStatus === "saved"
    ) {
      return;
    }

    if (onComplete) {
      try {
        setCompletionStatus("saving");

        await onComplete({
          correctAnswers,
          totalQuestions:
            allQuestions.length,
        });

        setCompletionStatus("saved");
      } catch (error) {
        console.error(
          "Unable to save Unit 1 reading:",
          error
        );
        setCompletionStatus("error");
      }
    }
  };

  const handleTryAgain = () => {
    stopSpeech();
    setSelectedAnswers({});
    setSubmitted(false);
    setMessage("");
    setCompletionStatus("idle");
  };

  const handleBack = () => {
    stopSpeech();
    onBack?.();
  };

  return (
    <main className="min-h-screen bg-[#F7F6F6] px-4 py-6 text-[#774424] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-4xl">
        <button
          type="button"
          onClick={handleBack}
          className="rounded-xl border-2 border-[#95542D] bg-white px-5 py-3 font-black text-[#804927] shadow-md transition hover:-translate-y-0.5"
        >
          ← Back to Unit 1
        </button>

        <header className="mt-5 rounded-[30px] border-2 border-[#95542D] bg-[#F6F4F3] p-6 shadow-md sm:p-8">
          <p className="font-bold uppercase tracking-[0.18em] text-[#804927]">
            Activity 4
          </p>

          <h1 className="mt-2 text-3xl font-black text-[#C88E6A] sm:text-4xl">
            Reading & Listening
          </h1>

          <p className="mt-3 text-lg font-medium">
            Listen to the passage, read the
            text, and complete three short
            tasks.
          </p>
        </header>

        <section className="mt-6 rounded-[28px] border-2 border-[#CA926E] bg-[#EFEBE8] p-6 shadow-md">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-bold uppercase tracking-[0.16em] text-[#804927]">
                Listen to the passage
              </p>

              <p className="mt-2 font-medium text-[#93542D]">
                The browser reads the passage
                directly. No MP3 file is
                required.
              </p>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-black text-[#774424]">
                Voice
              </span>

              <select
                value={selectedVoiceName}
                onChange={(event) => {
                  stopSpeech();
                  setSelectedVoiceName(
                    event.target.value
                  );
                }}
                className="max-w-full rounded-xl border-2 border-[#CA926E] bg-white px-3 py-2.5 text-sm font-bold text-[#774424] outline-none"
              >
                {englishVoices.length ===
                  0 && (
                  <option value="">
                    Default English voice
                  </option>
                )}

                {englishVoices.map(
                  (voice) => (
                    <option
                      key={`${voice.name}-${voice.lang}`}
                      value={voice.name}
                    >
                      {voice.name} (
                      {voice.lang})
                    </option>
                  )
                )}
              </select>
            </label>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() =>
                speakSingle(
                  readingPassage,
                  "passage",
                  0.82
                )
              }
              className="rounded-xl bg-[#8B4F2A] px-5 py-3 font-black text-white shadow-md transition hover:bg-[#744223]"
            >
              {speakingKey === "passage"
                ? "🔊 Playing Passage"
                : "▶ Play Passage"}
            </button>

            <button
              type="button"
              onClick={handlePauseResume}
              disabled={speakingKey === null}
              className="rounded-xl bg-white px-5 py-3 font-black text-[#774424] shadow-md transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isPaused
                ? "▶ Resume"
                : "⏸ Pause"}
            </button>

            <button
              type="button"
              onClick={stopSpeech}
              disabled={speakingKey === null}
              className="rounded-xl bg-[#C88E6A] px-5 py-3 font-black text-white shadow-md transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              ⏹ Stop
            </button>

            <button
              type="button"
              onClick={() =>
                speakSingle(
                  readingPassage,
                  "passage",
                  0.82
                )
              }
              className="rounded-xl border-2 border-[#CA926E] bg-[#FFF7F2] px-5 py-3 font-black text-[#774424] shadow-sm"
            >
              🔁 Listen Again
            </button>
          </div>
        </section>

        <section className="mt-6 rounded-[28px] border-2 border-[#CA926E] bg-white p-6 shadow-md sm:p-8">
          <p className="font-bold uppercase tracking-[0.16em] text-[#804927]">
            A Friendly Local Community
          </p>

          <div className="mt-4 whitespace-pre-line text-lg font-medium leading-8 text-[#93542D]">
            {readingPassage}
          </div>
        </section>

        <section className="mt-7 space-y-8">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-4">
                <h2 className="text-2xl font-black text-[#C88E6A]">
                  {group.title}
                </h2>

                <p className="mt-1 font-medium text-[#A96133]">
                  {group.instruction}
                </p>
              </div>

              <div className="space-y-5">
                {group.questions.map(
                  (question, index) => {
                    const selected =
                      selectedAnswers[
                        question.id
                      ];

                    const questionKey =
                      `question-${question.id}`;
                    const optionsKey =
                      `options-${question.id}`;

                    return (
                      <article
                        key={question.id}
                        className="rounded-[24px] border-2 border-[#CA926E] bg-white p-5 shadow-md"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="font-black text-[#804927]">
                              Question{" "}
                              {index + 1}
                            </p>

                            <p className="mt-2 text-lg font-bold leading-7">
                              {question.prompt}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                speakSingle(
                                  question.prompt,
                                  questionKey,
                                  0.84
                                )
                              }
                              className="rounded-xl bg-[#8B4F2A] px-3 py-2 text-sm font-black text-white"
                            >
                              {speakingKey ===
                              questionKey
                                ? "🔊 Playing"
                                : "🔊 Question"}
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                speakSequence(
                                  question.options.map(
                                    (
                                      option,
                                      optionIndex
                                    ) =>
                                      `Option ${String.fromCharCode(
                                        65 +
                                          optionIndex
                                      )}. ${option}`
                                  ),
                                  optionsKey,
                                  0.86
                                )
                              }
                              className="rounded-xl bg-[#C88E6A] px-3 py-2 text-sm font-black text-white"
                            >
                              {speakingKey ===
                              optionsKey
                                ? "🔊 Playing"
                                : "🔊 Options"}
                            </button>
                          </div>
                        </div>

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
                                "border-[#E7DDD7] bg-white";

                              if (
                                submitted &&
                                isCorrect
                              ) {
                                optionStyle =
                                  "border-[#4DA568] bg-[#E4F7E9] text-[#267044]";
                              } else if (
                                submitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionStyle =
                                  "border-rose-300 bg-rose-50 text-rose-700";
                              } else if (
                                isSelected
                              ) {
                                optionStyle =
                                  "border-[#8B4F2A] bg-[#F3F0EF]";
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
                                  className={`rounded-xl border-2 px-4 py-3 text-left font-bold transition ${optionStyle}`}
                                >
                                  {option}
                                </button>
                              );
                            }
                          )}
                        </div>
                      </article>
                    );
                  }
                )}
              </div>
            </div>
          ))}
        </section>

        {message && (
          <div className="mt-7 rounded-2xl bg-[#EAE5E1] p-4 text-center text-lg font-black">
            {message}
          </div>
        )}

        {submitted && (
          <div className="mt-5 text-center">
            {completionStatus ===
              "saving" && (
              <p className="font-bold text-[#804927]">
                Saving progress...
              </p>
            )}

            {completionStatus ===
              "saved" && (
              <p className="font-bold text-emerald-700">
                ✓ Progress saved.
              </p>
            )}

            {completionStatus ===
              "error" && (
              <p className="font-bold text-rose-700">
                The result is complete,
                but progress could not be
                saved.
              </p>
            )}
          </div>
        )}

        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitted}
            className="rounded-xl bg-[#8B4F2A] px-6 py-3 font-black text-white shadow-md transition hover:bg-[#744223] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Submit Answers
          </button>

          {submitted && (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-xl bg-[#C88E6A] px-6 py-3 font-black text-white shadow-md"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Reading1Page;
