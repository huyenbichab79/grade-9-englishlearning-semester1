import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const questions = [
  {
    id: 1,
    word: "artisan",
    meaning:
      "A person who makes things skilfully by hand.",
    options: [
      "A person who makes things skilfully by hand.",
      "A person who puts out fires.",
      "A person who sells food at a market.",
    ],
  },
  {
    id: 2,
    word: "craft village",
    meaning:
      "A village famous for traditional handmade products.",
    options: [
      "A modern shopping centre.",
      "A village famous for traditional handmade products.",
      "A place where people play sports.",
    ],
  },
  {
    id: 3,
    word: "firefighter",
    meaning:
      "A person whose job is to put out fires.",
    options: [
      "A person who teaches students.",
      "A person whose job is to put out fires.",
      "A person who makes pottery.",
    ],
  },
  {
    id: 4,
    word: "pottery",
    meaning:
      "Objects made from clay, such as pots and bowls.",
    options: [
      "Objects made from clay, such as pots and bowls.",
      "Clothes made from cotton.",
      "Food sold at a local market.",
    ],
  },
  {
    id: 5,
    word: "souvenir",
    meaning:
      "Something bought or kept to remember a place or event.",
    options: [
      "A tool used by an artisan.",
      "Something bought or kept to remember a place or event.",
      "A building for community activities.",
    ],
  },
  {
    id: 6,
    word: "community centre",
    meaning:
      "A place where local people meet and take part in activities.",
    options: [
      "A place where local people meet and take part in activities.",
      "A factory that produces goods.",
      "A building where firefighters work.",
    ],
  },
  {
    id: 7,
    word: "local market",
    meaning:
      "A place where people in an area buy and sell goods.",
    options: [
      "A hotel for tourists.",
      "A place where people in an area buy and sell goods.",
      "A school for young children.",
    ],
  },
  {
    id: 8,
    word: "preserve",
    meaning:
      "To protect something and keep it in good condition.",
    options: [
      "To discover new information.",
      "To stop doing an activity.",
      "To protect something and keep it in good condition.",
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

function Vocabulary1Page({
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
  };

  const createUtterance = (
    text,
    rate = 0.86
  ) => {
    const utterance =
      new SpeechSynthesisUtterance(text);

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
    rate = 0.86
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
      }
    };

    utterance.onerror = () => {
      if (
        session ===
        speechSessionRef.current
      ) {
        setSpeakingKey(null);
      }
    };

    window.speechSynthesis.speak(
      utterance
    );
  };

  const speakSequence = (
    texts,
    key,
    rate = 0.84
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

  const totalQuestions = questions.length;

  const correctAnswers = questions.filter(
    (question) =>
      selectedAnswers[question.id] ===
      question.meaning
  ).length;

  const handleSelect = (
    questionId,
    answer
  ) => {
    if (submitted) {
      return;
    }

    setSelectedAnswers(
      (currentAnswers) => ({
        ...currentAnswers,
        [questionId]: answer,
      })
    );

    setMessage("");
  };

  const handleSubmit = async () => {
    if (
      Object.keys(selectedAnswers).length <
      totalQuestions
    ) {
      setMessage(
        "Please answer all questions before submitting."
      );
      return;
    }

    stopSpeech();
    setSubmitted(true);
    setMessage("");

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
          totalQuestions,
        });

        setCompletionStatus("saved");
      } catch (error) {
        console.error(
          "Unable to save Unit 1 vocabulary:",
          error
        );
        setCompletionStatus("error");
      }
    }
  };

  const handleRestart = () => {
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
      <section className="mx-auto max-w-5xl">
        <header className="rounded-[32px] border-2 border-[#95542D] bg-[#EFEBE8] p-6 shadow-lg sm:p-8">
          <button
            type="button"
            onClick={handleBack}
            className="rounded-xl border-2 border-[#95542D] bg-white px-5 py-3 font-black text-[#804927] shadow-md transition hover:-translate-y-0.5"
          >
            ← Back to Unit 1
          </button>

          <p className="mt-6 font-bold uppercase tracking-[0.18em] text-[#C88E6A]">
            Unit 1 · Activity 1
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Vocabulary Match
          </h1>

          <p className="mt-3 max-w-2xl text-base font-medium leading-7 text-[#A96133]">
            Listen to each word and meaning,
            then choose the correct answer.
          </p>
        </header>

        <section className="mt-6 rounded-[28px] border-2 border-[#CA926E] bg-white p-5 shadow-md sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-black uppercase tracking-[0.16em] text-[#804927]">
                Vocabulary Audio
              </p>
              <p className="mt-2 font-semibold leading-7 text-[#95562E]">
                The browser reads the words
                directly. No MP3 files are
                required.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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

              <button
                type="button"
                onClick={() =>
                  speakSequence(
                    questions.flatMap(
                      (question) => [
                        question.word,
                        question.meaning,
                      ]
                    ),
                    "all-vocabulary",
                    0.82
                  )
                }
                className="self-end rounded-xl bg-[#8B4F2A] px-5 py-3 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#744223]"
              >
                {speakingKey ===
                "all-vocabulary"
                  ? "🔊 Playing All"
                  : "▶ Play All Words"}
              </button>

              <button
                type="button"
                onClick={stopSpeech}
                className="self-end rounded-xl border-2 border-[#C88E6A] bg-[#FFF4EE] px-5 py-3 font-black text-[#804927]"
              >
                ⏹ Stop
              </button>
            </div>
          </div>
        </section>

        <section className="mt-7 space-y-5">
          {questions.map(
            (question, index) => {
              const selectedAnswer =
                selectedAnswers[
                  question.id
                ];

              const isCorrect =
                selectedAnswer ===
                question.meaning;

              const wordKey =
                `word-${question.id}`;
              const meaningKey =
                `meaning-${question.id}`;

              return (
                <article
                  key={question.id}
                  className="rounded-[28px] border-2 border-[#CA926E] bg-white p-5 shadow-md sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F2EEEC] font-black text-[#C88E6A]">
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <h2 className="text-2xl font-black text-[#774424]">
                          {question.word}
                        </h2>

                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              speakSingle(
                                question.word,
                                wordKey,
                                0.78
                              )
                            }
                            className="rounded-xl bg-[#8B4F2A] px-4 py-2.5 font-black text-white shadow-sm"
                          >
                            {speakingKey ===
                            wordKey
                              ? "🔊 Playing Word"
                              : "🔊 Word Audio"}
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              speakSingle(
                                question.meaning,
                                meaningKey,
                                0.86
                              )
                            }
                            className="rounded-xl bg-[#C88E6A] px-4 py-2.5 font-black text-white shadow-sm"
                          >
                            {speakingKey ===
                            meaningKey
                              ? "🔊 Playing Meaning"
                              : "🔊 Meaning Audio"}
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-3">
                        {question.options.map(
                          (option) => {
                            const isSelected =
                              selectedAnswer ===
                              option;

                            let optionStyle =
                              "border-[#E9E0DA] bg-[#FBFBFB] text-[#95562E] hover:border-[#CA926E]";

                            if (
                              isSelected &&
                              !submitted
                            ) {
                              optionStyle =
                                "border-[#8B4F2A] bg-[#EFEBE8] text-[#64391E]";
                            }

                            if (
                              submitted &&
                              isSelected
                            ) {
                              optionStyle =
                                isCorrect
                                  ? "border-[#4DA568] bg-[#E4F7E9] text-[#267044]"
                                  : "border-rose-300 bg-rose-50 text-rose-700";
                            }

                            if (
                              submitted &&
                              option ===
                                question.meaning &&
                              !isCorrect
                            ) {
                              optionStyle =
                                "border-[#4DA568] bg-[#E4F7E9] text-[#267044]";
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
                                className={`rounded-2xl border-2 px-4 py-3 text-left font-bold leading-6 transition ${optionStyle}`}
                              >
                                {option}
                              </button>
                            );
                          }
                        )}
                      </div>

                      {submitted && (
                        <p
                          className={`mt-3 font-black ${
                            isCorrect
                              ? "text-emerald-700"
                              : "text-rose-600"
                          }`}
                        >
                          {isCorrect
                            ? "✓ Correct"
                            : "✗ Review the correct answer above"}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </section>

        {message && (
          <p className="mt-6 rounded-2xl bg-[#F2EEEC] p-4 text-center font-bold text-[#BA7245]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] border-2 border-[#CA926E] bg-[#F6F4F3] p-6 text-center shadow-md">
            <p className="font-bold uppercase tracking-[0.16em] text-[#804927]">
              Your result
            </p>

            <p className="mt-2 text-5xl font-black text-[#C88E6A]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 font-bold text-[#A96133]">
              You scored{" "}
              {Math.round(
                (correctAnswers /
                  totalQuestions) *
                  100
              )}
              %.
            </p>

            {completionStatus ===
              "saving" && (
              <p className="mt-3 font-bold text-[#804927]">
                Saving progress...
              </p>
            )}

            {completionStatus ===
              "saved" && (
              <p className="mt-3 font-bold text-emerald-700">
                ✓ Progress saved.
              </p>
            )}

            {completionStatus ===
              "error" && (
              <p className="mt-3 font-bold text-rose-700">
                The result is complete,
                but progress could not be
                saved.
              </p>
            )}
          </section>
        )}

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#8B4F2A] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#744223]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleRestart}
              className="rounded-2xl bg-[#C88E6A] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#BA7245]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Vocabulary1Page;
