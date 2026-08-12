import {
  useEffect,
  useState,
} from "react";

const wordBank = [
  {
    word: "campsite",
    meaning:
      "a place where people stay in tents",
  },
  {
    word: "confidence",
    meaning:
      "belief in your own ability",
  },
  {
    word: "coral reef",
    meaning:
      "an underwater structure formed by coral",
  },
  {
    word: "embarrassing",
    meaning:
      "making someone feel ashamed or uncomfortable",
  },
  {
    word: "exhilarating",
    meaning:
      "extremely exciting and enjoyable",
  },
  {
    word: "explore",
    meaning:
      "travel around a place to learn about it",
  },
  {
    word: "facilities",
    meaning:
      "buildings, equipment, or services provided for a purpose",
  },
  {
    word: "flora",
    meaning:
      "the plants of a particular area",
  },
  {
    word: "fauna",
    meaning:
      "the animals of a particular area",
  },
  {
    word: "instructor",
    meaning:
      "a person who teaches a skill",
  },
  {
    word: "memorable",
    meaning:
      "worth remembering",
  },
  {
    word: "speciality",
    meaning:
      "a product or dish for which a place is famous",
  },
];

const exerciseGroups = [
  {
    id: "meanings",
    title: "Task 1: Understand the Words",
    instruction:
      "Choose the correct meaning of each word.",
    questions: [
      {
        id: "basic-1",
        level: "Basic",
        prompt:
          "What is a campsite?",
        answer:
          "A place where people stay in tents",
        options: [
          "A place where people stay in tents",
          "A place where people practise music",
          "A place where people buy school supplies",
        ],
        explanation:
          "A campsite is an area prepared for camping and putting up tents.",
      },
      {
        id: "basic-2",
        level: "Basic",
        prompt:
          "What does “confidence” mean?",
        answer:
          "Belief in your own ability",
        options: [
          "Belief in your own ability",
          "Fear of every new experience",
          "A lack of outdoor facilities",
        ],
        explanation:
          "Confidence is the feeling that you can do something successfully.",
      },
      {
        id: "basic-3",
        level: "Basic",
        prompt:
          "What is “flora”?",
        answer:
          "The plants of a particular area",
        options: [
          "The plants of a particular area",
          "The animals of a particular area",
          "The buildings of a large city",
        ],
        explanation:
          "Flora refers to the plant life found in a place.",
      },
      {
        id: "basic-4",
        level: "Basic",
        prompt:
          "An embarrassing experience makes you feel ______.",
        answer:
          "ashamed or uncomfortable",
        options: [
          "ashamed or uncomfortable",
          "completely relaxed",
          "strong and powerful",
        ],
        explanation:
          "Something embarrassing causes shame or social discomfort.",
      },
    ],
  },
  {
    id: "contexts",
    title: "Task 2: Complete the Experiences",
    instruction:
      "Choose the word that best completes each situation.",
    questions: [
      {
        id: "intermediate-1",
        level: "Intermediate",
        prompt:
          "During the eco-tour, we went snorkeling near a colourful ______.",
        answer: "coral reef",
        options: [
          "coral reef",
          "campsite",
          "monument",
        ],
        explanation:
          "Coral reefs are underwater ecosystems that people can explore while snorkeling.",
      },
      {
        id: "intermediate-2",
        level: "Intermediate",
        prompt:
          "The climbing ______ showed us how to use the safety equipment.",
        answer: "instructor",
        options: [
          "instructor",
          "peer",
          "tourist",
        ],
        explanation:
          "An instructor teaches and guides people while they learn a skill.",
      },
      {
        id: "intermediate-3",
        level: "Intermediate",
        prompt:
          "The new campsite has excellent ______, including clean showers and a cooking area.",
        answer: "facilities",
        options: [
          "facilities",
          "competitions",
          "performances",
        ],
        explanation:
          "Facilities are buildings, equipment, and services available for people to use.",
      },
      {
        id: "intermediate-4",
        level: "Intermediate",
        prompt:
          "Our school trip was so enjoyable that it became a truly ______ experience.",
        answer: "memorable",
        options: [
          "memorable",
          "helpless",
          "strict",
        ],
        explanation:
          "A memorable experience is special enough to be remembered for a long time.",
      },
      {
        id: "intermediate-5",
        level: "Intermediate",
        prompt:
          "Parachuting was an ______ experience that made my heart beat quickly.",
        answer: "exhilarating",
        options: [
          "exhilarating",
          "unpleasant",
          "basic",
        ],
        explanation:
          "Exhilarating describes something extremely exciting and energetic.",
      },
    ],
  },
  {
    id: "challenge",
    title: "Task 3: Experience Challenge",
    instruction:
      "Choose the most accurate word, sentence, or conclusion.",
    questions: [
      {
        id: "advanced-1",
        level: "Advanced",
        prompt:
          "Which word refers to the animals living naturally in an area?",
        answer: "fauna",
        options: [
          "fauna",
          "flora",
          "facilities",
        ],
        explanation:
          "Fauna means the animal life of a region, while flora means its plant life.",
      },
      {
        id: "advanced-2",
        level: "Advanced",
        prompt:
          "Which sentence uses “speciality” correctly?",
        answer:
          "Grilled fish is a local speciality that many visitors want to try.",
        options: [
          "Grilled fish is a local speciality that many visitors want to try.",
          "The students speciality through the rainforest yesterday.",
          "Our speciality was nervous before the presentation.",
        ],
        explanation:
          "A speciality is a food, product, or skill for which a place or person is well known.",
      },
      {
        id: "advanced-3",
        level: "Advanced",
        prompt:
          "A student joins a difficult course, works with new peers, and becomes more confident. What has the experience done?",
        answer:
          "It has helped the student develop useful skills and confidence.",
        options: [
          "It has helped the student develop useful skills and confidence.",
          "It has prevented the student from communicating with others.",
          "It has made the student avoid every new challenge.",
        ],
        explanation:
          "Challenging experiences can improve communication, teamwork, and self-confidence.",
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

function Vocabulary5Page({
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
          const currentVoiceExists =
            availableVoices.some(
              (voice) =>
                voice.voiceURI ===
                currentVoiceURI
            );

          if (
            currentVoiceURI &&
            currentVoiceExists
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
    rate = 0.82
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

  const handleListenToWord = (
    word
  ) => {
    speakText(word, 0.72);
  };

  const handleListenToAllWords =
    () => {
      const vocabularyList =
        wordBank
          .map((item) => item.word)
          .join(". ");

      speakText(
        vocabularyList,
        0.76
      );
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
              Unit 5 · Activity 1
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-5xl">
              Experience Vocabulary
            </h1>

            <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#C1952D]">
              Learn useful words about trips,
              outdoor activities, emotions,
              personal growth, and memorable
              experiences.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#9B7824]">
                  12
                </p>

                <p className="mt-1 text-sm font-bold text-[#C1952D]">
                  Key words
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
                  3
                </p>

                <p className="mt-1 text-sm font-bold text-[#C1952D]">
                  Levels
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-7 rounded-[28px] border border-[#EAE7E1] bg-white p-5 shadow-md sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-black uppercase tracking-[0.14em] text-[#D0B880]">
                Word bank
              </p>

              <h2 className="mt-1 text-2xl font-black text-[#685018]">
                Explore new experiences
              </h2>
            </div>

            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFEDE8] text-2xl shadow-sm">
              🧭
            </span>
          </div>

          <div className="mt-5 rounded-[24px] border border-[#E6E1D5] bg-[#F8F7F6] p-4 sm:p-5">
            <label
              htmlFor="vocabulary5-voice"
              className="block text-sm font-black text-[#9B7824]"
            >
              American English voice
            </label>

            <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_auto_auto]">
              <select
                id="vocabulary5-voice"
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
                onClick={
                  handleListenToAllWords
                }
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
                onClick={
                  handleStopAudio
                }
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

            <p className="mt-3 text-sm font-medium leading-5 text-[#C1952D]">
              Tap the speaker beside each word
              to hear its American English
              pronunciation.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {wordBank.map((item, index) => {
              const isThisWordSpeaking =
                speakingText ===
                item.word;

              return (
                <article
                  key={item.word}
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
                        {item.word}
                      </p>

                      <p className="mt-1 text-sm font-medium leading-5 text-[#C1952D]">
                        {item.meaning}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleListenToWord(
                          item.word
                        )
                      }
                      disabled={
                        !audioSupported
                      }
                      aria-label={`Listen to ${item.word}`}
                      title={`Listen to ${item.word}`}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-black shadow-sm transition ${
                        isThisWordSpeaking
                          ? "bg-[#9A7724] text-white ring-4 ring-[#DED8C9]"
                          : audioSupported
                            ? "bg-white text-[#9B7824] hover:-translate-y-0.5 hover:bg-[#F3F2EF]"
                            : "cursor-not-allowed bg-[#EDEBE7] text-[#B0AB9E]"
                      }`}
                    >
                      {isThisWordSpeaking
                        ? "◼"
                        : "🔊"}
                    </button>
                  </div>
                </article>
              );
            })}
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
                ? "Excellent! You understand the key experience vocabulary very well."
                : scorePercent >= 65
                  ? "Good work! Review the difficult words before moving on."
                  : "Review the word bank, listen to the words again, and try the activity one more time."}
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

export default Vocabulary5Page;