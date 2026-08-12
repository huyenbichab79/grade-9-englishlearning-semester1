import {
  useEffect,
  useState,
} from "react";

const phraseBank = [
  {
    phrase: "by chance",
    meaning:
      "accidentally or without planning",
    example:
      "We met our old instructor by chance.",
  },
  {
    phrase: "go blank",
    meaning:
      "suddenly become unable to remember or think",
    example:
      "My mind went blank during the presentation.",
  },
  {
    phrase: "go snorkeling",
    meaning:
      "swim using a mask and breathing tube",
    example:
      "We went snorkeling near a coral reef.",
  },
  {
    phrase: "give a performance",
    meaning:
      "perform music, drama, or dance for an audience",
    example:
      "The students gave a performance at the festival.",
  },
  {
    phrase: "learn by rote",
    meaning:
      "memorize something through repetition",
    example:
      "Learning vocabulary by rote is not always effective.",
  },
  {
    phrase: "on purpose",
    meaning:
      "intentionally rather than accidentally",
    example:
      "He did not break the equipment on purpose.",
  },
  {
    phrase: "put up tents",
    meaning:
      "set up tents for camping",
    example:
      "We put up tents before it became dark.",
  },
  {
    phrase: "tour a campus",
    meaning:
      "visit and look around a school or university campus",
    example:
      "We toured the campus during the open day.",
  },
  {
    phrase: "take an eco-tour",
    meaning:
      "join a trip that focuses on nature and conservation",
    example:
      "Our class took an eco-tour through the rainforest.",
  },
  {
    phrase: "explore the seabed",
    meaning:
      "investigate the bottom of the sea",
    example:
      "Scientists use robots to explore the seabed.",
  },
];

const exerciseGroups = [
  {
    id: "meanings",
    title: "Task 1: Understand the Phrases",
    instruction:
      "Choose the correct meaning of each phrase.",
    questions: [
      {
        id: "basic-1",
        level: "Basic",
        prompt:
          "What does “by chance” mean?",
        answer:
          "Without planning or accidentally",
        options: [
          "Without planning or accidentally",
          "After careful preparation",
          "At the same time every day",
        ],
        explanation:
          "By chance means something happens unexpectedly or accidentally.",
      },
      {
        id: "basic-2",
        level: "Basic",
        prompt:
          "What happens when your mind “goes blank”?",
        answer:
          "You suddenly cannot remember what to say or do.",
        options: [
          "You suddenly cannot remember what to say or do.",
          "You become very confident.",
          "You learn something immediately.",
        ],
        explanation:
          "When your mind goes blank, you temporarily cannot remember or think clearly.",
      },
      {
        id: "basic-3",
        level: "Basic",
        prompt:
          "What does “put up tents” mean?",
        answer:
          "Set up tents for camping",
        options: [
          "Set up tents for camping",
          "Pack food for a journey",
          "Take photographs of a campsite",
        ],
        explanation:
          "To put up a tent means to assemble it so people can use it.",
      },
      {
        id: "basic-4",
        level: "Basic",
        prompt:
          "What does “on purpose” mean?",
        answer: "Intentionally",
        options: [
          "Intentionally",
          "By accident",
          "Immediately",
        ],
        explanation:
          "Doing something on purpose means that you intend to do it.",
      },
    ],
  },
  {
    id: "contexts",
    title: "Task 2: Complete the Experiences",
    instruction:
      "Choose the phrase that best completes each situation.",
    questions: [
      {
        id: "intermediate-1",
        level: "Intermediate",
        prompt:
          "When the teacher asked me a difficult question, my mind ______.",
        answer: "went blank",
        options: [
          "went blank",
          "put up tents",
          "toured a campus",
        ],
        explanation:
          "Went blank describes suddenly being unable to remember an answer.",
      },
      {
        id: "intermediate-2",
        level: "Intermediate",
        prompt:
          "The school band will ______ for parents at the end of the course.",
        answer: "give a performance",
        options: [
          "give a performance",
          "go snorkeling",
          "learn by chance",
        ],
        explanation:
          "A band gives a performance when it plays music for an audience.",
      },
      {
        id: "intermediate-3",
        level: "Intermediate",
        prompt:
          "We arrived at the campsite early and ______ before sunset.",
        answer: "put up our tents",
        options: [
          "put up our tents",
          "went blank",
          "toured the seabed",
        ],
        explanation:
          "Campers put up their tents before staying at a campsite.",
      },
      {
        id: "intermediate-4",
        level: "Intermediate",
        prompt:
          "During the university open day, we ______ and visited several classrooms.",
        answer: "toured the campus",
        options: [
          "toured the campus",
          "learned by rote",
          "went snorkeling",
        ],
        explanation:
          "Touring a campus means visiting and looking around the school grounds.",
      },
      {
        id: "intermediate-5",
        level: "Intermediate",
        prompt:
          "We met a famous wildlife photographer ______ during our eco-tour.",
        answer: "by chance",
        options: [
          "by chance",
          "on purpose",
          "by rote",
        ],
        explanation:
          "By chance is used because the meeting was not planned.",
      },
    ],
  },
  {
    id: "challenge",
    title: "Task 3: Phrase Challenge",
    instruction:
      "Choose the most accurate sentence or conclusion.",
    questions: [
      {
        id: "advanced-1",
        level: "Advanced",
        prompt:
          "Which sentence uses “learn by rote” correctly?",
        answer:
          "Some students learn vocabulary by rote without understanding how to use it.",
        options: [
          "Some students learn vocabulary by rote without understanding how to use it.",
          "We learned by rote through the rainforest in a jeep.",
          "The instructor put up rote beside the campsite.",
        ],
        explanation:
          "Learning by rote means memorizing through repetition, sometimes without full understanding.",
      },
      {
        id: "advanced-2",
        level: "Advanced",
        prompt:
          "A student accidentally damages a model and apologizes immediately. Which sentence is most suitable?",
        answer:
          "The student did not damage the model on purpose.",
        options: [
          "The student did not damage the model on purpose.",
          "The student learned the model by rote.",
          "The student toured the model by chance.",
        ],
        explanation:
          "Not on purpose means the action was accidental rather than intentional.",
      },
      {
        id: "advanced-3",
        level: "Advanced",
        prompt:
          "A class visits a coral reef, observes sea life, and learns about environmental protection. What has the class done?",
        answer:
          "It has taken an eco-tour and gone snorkeling.",
        options: [
          "It has taken an eco-tour and gone snorkeling.",
          "It has learned a campus by rote.",
          "It has given an army-like performance.",
        ],
        explanation:
          "An eco-tour focuses on nature, and snorkeling allows students to observe marine life.",
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

const preferredFemaleVoiceKeywords = [
  "female",
  "woman",
  "samantha",
  "zira",
  "jenny",
  "ava",
  "aria",
  "joanna",
  "kendra",
  "kimberly",
  "salli",
  "ivy",
  "allison",
  "susan",
  "victoria",
  "emma",
  "olivia",
  "natalie",
  "michelle",
  "linda",
  "helen",
  "karen",
];

function choosePreferredVoice(
  voiceList
) {
  const likelyFemaleVoice =
    voiceList.find((voice) => {
      const voiceName =
        voice.name.toLowerCase();

      return preferredFemaleVoiceKeywords.some(
        (keyword) =>
          voiceName.includes(keyword)
      );
    });

  return (
    likelyFemaleVoice ||
    voiceList[0] ||
    null
  );
}

function Phrases5Page({
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
    selectedVoiceURI,
    setSelectedVoiceURI,
  ] = useState("");

  const [
    speakingText,
    setSpeakingText,
  ] = useState("");

  const [audioSupported, setAudioSupported] =
    useState(true);

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

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      setAudioSupported(false);
      return undefined;
    }

    const speechSystem =
      window.speechSynthesis;

    const loadVoices = () => {
      const allVoices =
        speechSystem.getVoices();

      const americanVoices =
        allVoices.filter((voice) =>
          voice.lang
            .toLowerCase()
            .startsWith("en-us")
        );

      const englishVoices =
        allVoices.filter((voice) =>
          voice.lang
            .toLowerCase()
            .startsWith("en")
        );

      const availableVoices =
        americanVoices.length > 0
          ? americanVoices
          : englishVoices;

      setVoices(availableVoices);

      setSelectedVoiceURI(
        (currentVoiceURI) => {
          const voiceStillExists =
            availableVoices.some(
              (voice) =>
                voice.voiceURI ===
                currentVoiceURI
            );

          if (
            currentVoiceURI &&
            voiceStillExists
          ) {
            return currentVoiceURI;
          }

          const preferredVoice =
            choosePreferredVoice(
              availableVoices
            );

          return (
            preferredVoice?.voiceURI || ""
          );
        }
      );
    };

    loadVoices();

    if (
      typeof speechSystem.addEventListener ===
      "function"
    ) {
      speechSystem.addEventListener(
        "voiceschanged",
        loadVoices
      );
    } else {
      speechSystem.onvoiceschanged =
        loadVoices;
    }

    return () => {
      speechSystem.cancel();

      if (
        typeof speechSystem.removeEventListener ===
        "function"
      ) {
        speechSystem.removeEventListener(
          "voiceschanged",
          loadVoices
        );
      } else {
        speechSystem.onvoiceschanged =
          null;
      }
    };
  }, []);

  const handleStopAudio = () => {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();
    }

    setSpeakingText("");
  };

  const speakText = (
    text,
    rate = 0.78
  ) => {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      setMessage(
        "Audio is not supported by this browser."
      );
      return;
    }

    const speechSystem =
      window.speechSynthesis;

    speechSystem.cancel();

    const utterance =
      new window.SpeechSynthesisUtterance(
        text
      );

    const selectedVoice =
      voices.find(
        (voice) =>
          voice.voiceURI ===
          selectedVoiceURI
      );

    utterance.lang = "en-US";
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang =
        selectedVoice.lang || "en-US";
    }

    utterance.onstart = () => {
      setSpeakingText(text);
    };

    utterance.onend = () => {
      setSpeakingText("");
    };

    utterance.onerror = (event) => {
      setSpeakingText("");

      if (
        event.error !== "canceled" &&
        event.error !== "interrupted"
      ) {
        setMessage(
          "The audio could not be played."
        );
      }
    };

    speechSystem.speak(utterance);
    setMessage("");
  };

  const handleListenToPhrase = (
    phrase
  ) => {
    speakText(phrase, 0.72);
  };

  const handleListenToExample = (
    example
  ) => {
    speakText(example, 0.84);
  };

  const handleListenToAll = () => {
    const phraseList =
      phraseBank
        .map((item) => item.phrase)
        .join(". ");

    speakText(phraseList, 0.75);
  };

  const handleVoiceChange = (
    event
  ) => {
    handleStopAudio();

    setSelectedVoiceURI(
      event.target.value
    );

    setMessage("");
  };

  const handleBack = () => {
    handleStopAudio();
    onBack();
  };

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

    handleStopAudio();
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
              onClick={handleBack}
              className="rounded-xl bg-white px-4 py-2 font-bold text-[#9B7824] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Back to Unit 5
            </button>

            <p className="mt-6 font-black uppercase tracking-[0.18em] text-[#9A7724]">
              Unit 5 · Activity 2
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-5xl">
              Experience Phrases
            </h1>

            <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#C1952D]">
              Practise useful expressions for
              trips, performances, outdoor
              activities, learning experiences,
              and unexpected situations.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#9B7824]">
                  10
                </p>

                <p className="mt-1 text-sm font-bold text-[#C1952D]">
                  Key phrases
                </p>
              </div>

              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#9A7724]">
                  en-US
                </p>

                <p className="mt-1 text-sm font-bold text-[#C1952D]">
                  Pronunciation
                </p>
              </div>

              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#CAB071]">
                  12
                </p>

                <p className="mt-1 text-sm font-bold text-[#C1952D]">
                  Questions
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-7 rounded-[28px] border border-[#EAE7E1] bg-white p-5 shadow-md sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-black uppercase tracking-[0.14em] text-[#D0B880]">
                Phrase bank
              </p>

              <h2 className="mt-1 text-2xl font-black text-[#685018]">
                Talk about your experiences
              </h2>
            </div>

            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFEDE8] text-2xl shadow-sm">
              🎒
            </span>
          </div>

          <div className="mt-5 rounded-[24px] border border-[#E6E1D5] bg-[#F8F7F6] p-4 sm:p-5">
            <label
              htmlFor="phrases5-voice"
              className="block text-sm font-black text-[#9B7824]"
            >
              American English voice
            </label>

            <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_auto_auto]">
              <select
                id="phrases5-voice"
                value={selectedVoiceURI}
                onChange={
                  handleVoiceChange
                }
                disabled={
                  !audioSupported ||
                  voices.length === 0
                }
                className="w-full rounded-xl border border-[#E4DED1] bg-white px-4 py-3 font-semibold text-[#A88227] outline-none transition focus:border-[#C1A259]"
              >
                {!audioSupported ? (
                  <option value="">
                    Audio is not supported
                  </option>
                ) : voices.length === 0 ? (
                  <option value="">
                    Loading available voices...
                  </option>
                ) : (
                  voices.map((voice) => (
                    <option
                      key={voice.voiceURI}
                      value={voice.voiceURI}
                    >
                      {voice.name} (
                      {voice.lang})
                    </option>
                  ))
                )}
              </select>

              <button
                type="button"
                onClick={handleListenToAll}
                disabled={!audioSupported}
                className={`rounded-xl px-5 py-3 font-black shadow-sm transition ${
                  audioSupported
                    ? "bg-[#9B7824] text-white hover:-translate-y-0.5 hover:bg-[#81641E]"
                    : "cursor-not-allowed bg-[#EBE9E4] text-[#CDB479]"
                }`}
              >
                🔊 Listen to all
              </button>

              <button
                type="button"
                onClick={handleStopAudio}
                disabled={!speakingText}
                className={`rounded-xl px-5 py-3 font-black shadow-sm transition ${
                  speakingText
                    ? "bg-[#CAB071] text-white hover:-translate-y-0.5 hover:bg-[#BF9E51]"
                    : "cursor-not-allowed bg-[#EBE9E4] text-[#CDB479]"
                }`}
              >
                ■ Stop audio
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {phraseBank.map(
              (item, index) => {
                const phraseIsSpeaking =
                  speakingText ===
                  item.phrase;

                const exampleIsSpeaking =
                  speakingText ===
                  item.example;

                return (
                  <article
                    key={item.phrase}
                    className={`rounded-2xl border p-4 ${
                      index % 4 === 0
                        ? "border-[#E7E3D8] bg-[#F6F5F4]"
                        : index % 4 === 1
                          ? "border-[#E3DED1] bg-[#F4F3F0]"
                          : index % 4 === 2
                            ? "border-[#EAE8E2] bg-[#F9F8F7]"
                            : "border-[#DBD4C4] bg-[#F4F3F0]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-black text-[#9B7824]">
                          {item.phrase}
                        </p>

                        <p className="mt-1 text-sm font-medium leading-5 text-[#C1952D]">
                          {item.meaning}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleListenToPhrase(
                            item.phrase
                          )
                        }
                        disabled={
                          !audioSupported
                        }
                        aria-label={`Listen to ${item.phrase}`}
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm transition ${
                          phraseIsSpeaking
                            ? "bg-[#9A7724] text-white ring-4 ring-[#DED8C9]"
                            : "bg-white text-[#9B7824] hover:-translate-y-0.5"
                        }`}
                      >
                        {phraseIsSpeaking
                          ? "◼"
                          : "🔊"}
                      </button>
                    </div>

                    <div className="mt-3 flex items-start justify-between gap-3 rounded-xl bg-white/75 p-3">
                      <p className="text-sm font-semibold italic leading-5 text-[#A88227]">
                        {item.example}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          handleListenToExample(
                            item.example
                          )
                        }
                        disabled={
                          !audioSupported
                        }
                        aria-label="Listen to example"
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm shadow-sm transition ${
                          exampleIsSpeaking
                            ? "bg-[#D0B880] text-white"
                            : "bg-[#F5F4F2] text-[#9B7824] hover:bg-[#F5F4F1]"
                        }`}
                      >
                        {exampleIsSpeaking
                          ? "◼"
                          : "▶"}
                      </button>
                    </div>
                  </article>
                );
              }
            )}
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
                          <p className="font-black text-[#D0B880]">
                            Question{" "}
                            {
                              questionNumbers[
                                question.id
                              ]
                            }
                          </p>

                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-bold ${levelStyles[question.level]}`}
                          >
                            {question.level}
                          </span>
                        </div>

                        <p className="mt-4 text-lg font-bold leading-7 text-[#685018]">
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
                ? "Excellent! You can understand and use the experience phrases confidently."
                : scorePercent >= 65
                  ? "Good work! Review the examples for the difficult phrases."
                  : "Listen to the phrases again, review their meanings, and try one more time."}
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

export default Phrases5Page;