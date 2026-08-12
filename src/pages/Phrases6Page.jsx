import {
  useEffect,
  useState,
} from "react";

const phraseItems = [
  {
    id: 1,
    phrase: "depend on",
    alternative: "rely on",
    meaning:
      "to need someone or something for help, support, or success",
    vietnamese: "phụ thuộc vào",
    example:
      "Children often depend on their parents for advice.",
  },
  {
    id: 2,
    phrase:
      "pursue one's own interests",
    alternative:
      "follow one's personal interests",
    meaning:
      "to spend time developing activities or subjects that a person enjoys",
    vietnamese:
      "theo đuổi sở thích riêng",
    example:
      "Young people should have opportunities to pursue their own interests.",
  },
  {
    id: 3,
    phrase: "go abroad",
    alternative:
      "travel to another country",
    meaning:
      "to travel to a foreign country",
    vietnamese: "đi nước ngoài",
    example:
      "My aunt went abroad for work when she was twenty-five.",
  },
  {
    id: 4,
    phrase: "study abroad",
    alternative:
      "study in another country",
    meaning:
      "to attend school or university in a foreign country",
    vietnamese: "đi du học",
    example:
      "Lan plans to study abroad after finishing high school.",
  },
  {
    id: 5,
    phrase: "take notes",
    alternative: "write down",
    meaning:
      "to record important information in writing",
    vietnamese: "ghi chép lại",
    example:
      "Students should take notes during the history lesson.",
  },
  {
    id: 6,
    phrase: "give up",
    alternative: "stop trying",
    meaning:
      "to stop doing something because it is difficult or unsuccessful",
    vietnamese: "từ bỏ, bỏ cuộc",
    example:
      "Do not give up when a new skill seems difficult.",
  },
  {
    id: 7,
    phrase:
      "play an important role in",
    alternative:
      "play an important part in",
    meaning:
      "to have a significant influence on something",
    vietnamese:
      "đóng vai trò quan trọng trong",
    example:
      "Family values play an important role in Vietnamese culture.",
  },
  {
    id: 8,
    phrase:
      "provide someone with something",
    alternative:
      "provide something for someone",
    meaning:
      "to give someone something that they need",
    vietnamese:
      "cung cấp cho ai cái gì",
    example:
      "Modern schools provide students with better learning facilities.",
  },
];

const questionGroups = [
  {
    id: "basic",
    title: "Part 1: Phrase Foundations",
    instruction:
      "Choose the correct meaning or phrase.",
    questions: [
      {
        id: "basic-1",
        level: "Basic",
        prompt:
          "What does “take notes” mean?",
        options: [
          "Write down important information",
          "Stop trying to do something",
          "Travel to a foreign country",
        ],
        answer:
          "Write down important information",
        explanation:
          "Take notes means to record important information in writing.",
      },
      {
        id: "basic-2",
        level: "Basic",
        prompt:
          "Which phrase means “to stop trying”?",
        options: [
          "give up",
          "depend on",
          "study abroad",
        ],
        answer: "give up",
        explanation:
          "Give up means to stop doing or trying to do something.",
      },
      {
        id: "basic-3",
        level: "Basic",
        prompt:
          "Which phrase has a similar meaning to “rely on”?",
        options: [
          "depend on",
          "go abroad",
          "write down",
        ],
        answer: "depend on",
        explanation:
          "Depend on and rely on both describe needing support from someone or something.",
      },
      {
        id: "basic-4",
        level: "Basic",
        prompt:
          "What does “study abroad” mean?",
        options: [
          "Study in another country",
          "Study with family members",
          "Study without taking notes",
        ],
        answer:
          "Study in another country",
        explanation:
          "Study abroad means attending school or university in a foreign country.",
      },
    ],
  },
  {
    id: "intermediate",
    title: "Part 2: Use the Phrases",
    instruction:
      "Choose the phrase that best completes each sentence.",
    questions: [
      {
        id: "intermediate-1",
        level: "Intermediate",
        prompt:
          "Many teenagers still ______ their parents for advice.",
        options: [
          "depend on",
          "give up",
          "go abroad",
        ],
        answer: "depend on",
        explanation:
          "Depend on is used when someone needs another person for help or support.",
      },
      {
        id: "intermediate-2",
        level: "Intermediate",
        prompt:
          "Mai wants to ______ and attend university in Australia.",
        options: [
          "study abroad",
          "take notes",
          "give up",
        ],
        answer: "study abroad",
        explanation:
          "Studying at a university in another country is studying abroad.",
      },
      {
        id: "intermediate-3",
        level: "Intermediate",
        prompt:
          "The teacher asked us to ______ the main differences between past and present lifestyles.",
        options: [
          "write down",
          "depend on",
          "go abroad",
        ],
        answer: "write down",
        explanation:
          "Write down means to record information in writing.",
      },
      {
        id: "intermediate-4",
        level: "Intermediate",
        prompt:
          "Parents should encourage children to ______ instead of choosing everything for them.",
        options: [
          "pursue their own interests",
          "give up their interests",
          "depend on electronic devices",
        ],
        answer:
          "pursue their own interests",
        explanation:
          "Pursue one's own interests means developing the activities or subjects a person enjoys.",
      },
      {
        id: "intermediate-5",
        level: "Intermediate",
        prompt:
          "Family conversations ______ reducing the generation gap.",
        options: [
          "play an important role in",
          "give up",
          "study abroad",
        ],
        answer:
          "play an important role in",
        explanation:
          "The phrase means having a significant influence on something.",
      },
    ],
  },
  {
    id: "advanced",
    title: "Part 3: Context Challenge",
    instruction:
      "Use meaning and grammar to choose the most accurate answer.",
    questions: [
      {
        id: "advanced-1",
        level: "Advanced",
        prompt:
          "Choose the sentence with the correct structure.",
        options: [
          "The school provides students with modern learning facilities.",
          "The school provides students modern learning facilities with.",
          "The school provides with students modern learning facilities.",
        ],
        answer:
          "The school provides students with modern learning facilities.",
        explanation:
          "The correct structure is provide someone with something.",
      },
      {
        id: "advanced-2",
        level: "Advanced",
        prompt:
          "Which sentence best shows independence?",
        options: [
          "Linh pursues her own interests while respecting her family's advice.",
          "Linh gives up every activity chosen by herself.",
          "Linh depends completely on other people to make every decision.",
        ],
        answer:
          "Linh pursues her own interests while respecting her family's advice.",
        explanation:
          "Pursuing personal interests while considering advice shows balanced independence.",
      },
      {
        id: "advanced-3",
        level: "Advanced",
        prompt:
          "Choose the best completion.\n\nAlthough learning to use the new device was difficult, Grandfather refused to ______.",
        options: [
          "give up",
          "take notes",
          "study abroad",
        ],
        answer: "give up",
        explanation:
          "Refused to give up means that he continued trying despite the difficulty.",
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#CFDCB6] bg-[#F0F2EC] text-[#607633]",
  Intermediate:
    "border-[#BECF9C] bg-[#E9ECE4] text-[#688137]",
  Advanced:
    "border-[#C7D6A9] bg-[#F3F4F0] text-[#83A246]",
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

function Phrases6Page({
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

  const [isSpeaking, setIsSpeaking] =
    useState(false);

  const [
    speakingPhrase,
    setSpeakingPhrase,
  ] = useState("");

  const [audioSupported, setAudioSupported] =
    useState(true);

  const allQuestions =
    questionGroups.flatMap(
      (group) => group.questions
    );

  const totalQuestions =
    allQuestions.length;

  const questionNumbers =
    Object.fromEntries(
      allQuestions.map(
        (question, index) => [
          question.id,
          index + 1,
        ]
      )
    );

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

  const stopAudio = () => {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();
    }

    setIsSpeaking(false);
    setSpeakingPhrase("");
  };

  const speakText = (
    text,
    phraseLabel = ""
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
    utterance.rate = 0.82;
    utterance.pitch = 1;
    utterance.volume = 1;

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang =
        selectedVoice.lang || "en-US";
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setSpeakingPhrase(phraseLabel);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setSpeakingPhrase("");
    };

    utterance.onerror = (event) => {
      setIsSpeaking(false);
      setSpeakingPhrase("");

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

  const listenToAllPhrases = () => {
    const completeText =
      phraseItems
        .map(
          (item) =>
            `${item.phrase}. ${item.example}`
        )
        .join(" ");

    speakText(
      completeText,
      "all-phrases"
    );
  };

  const handleVoiceChange = (
    event
  ) => {
    stopAudio();
    setSelectedVoiceURI(
      event.target.value
    );
    setMessage("");
  };

  const handleBack = () => {
    stopAudio();
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

    stopAudio();
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
    <main className="min-h-screen bg-[#EFF1EB] px-4 py-6 text-[#3F4E21] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-6xl">
        <header className="relative overflow-hidden rounded-[34px] border border-[#CFDCB6] bg-gradient-to-br from-[#FBFBFA] via-[#F0F2EC] to-[#E9ECE4] p-6 shadow-[0_14px_35px_rgba(66,82,35,0.13)] sm:p-8">
          <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-[#C5D4A6]/30" />

          <div className="pointer-events-none absolute bottom-8 right-40 h-20 w-20 rounded-full bg-[#A1C35E]/20" />

          <div className="pointer-events-none absolute right-8 top-20 select-none text-[130px] font-black leading-none text-[#425223]/10">
            06
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={handleBack}
              className="rounded-xl border border-[#D7DEC8] bg-white px-4 py-2 font-bold text-[#425223] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F6F6F5]"
            >
              ← Back to Unit 6
            </button>

            <p className="mt-6 font-black uppercase tracking-[0.18em] text-[#6F893B]">
              Unit 6 · Activity 2
            </p>

            <h1 className="mt-2 font-serif text-4xl font-bold italic text-[#3F4E21] sm:text-5xl">
              Family & Life Phrases
            </h1>

            <p className="mt-4 max-w-3xl text-lg font-medium leading-7 text-[#777F68]">
              Learn useful expressions for
              talking about family support,
              personal interests, education,
              opportunities, and changing
              lifestyles.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <article className="rounded-[22px] border border-[#CFDCB6] bg-white/75 p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#425223]">
                  8
                </p>

                <p className="mt-1 text-sm font-bold text-[#777F68]">
                  Key phrases
                </p>
              </article>

              <article className="rounded-[22px] border border-[#BECF9C] bg-[#E9ECE4] p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#7B9841]">
                  12
                </p>

                <p className="mt-1 text-sm font-bold text-[#777F68]">
                  Questions
                </p>
              </article>

              <article className="rounded-[22px] border border-[#CFDCB6] bg-[#F0F2EC] p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#6F893B]">
                  en-US
                </p>

                <p className="mt-1 text-sm font-bold text-[#777F68]">
                  Pronunciation
                </p>
              </article>
            </div>
          </div>
        </header>

        <section className="mt-7 rounded-[30px] border border-[#CFDCB6] bg-[#FBFBFA] p-5 shadow-[0_12px_28px_rgba(66,82,35,0.08)] sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-black uppercase tracking-[0.14em] text-[#6F893B]">
                Pronunciation studio
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold italic text-[#3F4E21]">
                Listen and repeat
              </h2>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7EBDE] text-3xl">
              🔊
            </div>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto_auto]">
            <select
              value={selectedVoiceURI}
              onChange={handleVoiceChange}
              disabled={
                !audioSupported ||
                voices.length === 0
              }
              className="w-full rounded-xl border border-[#CFDCB6] bg-white px-4 py-3 font-semibold text-[#75913E] outline-none transition focus:border-[#6F893B]"
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
              onClick={listenToAllPhrases}
              disabled={!audioSupported}
              className="rounded-xl bg-[#425223] px-5 py-3 font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#333F1B] disabled:cursor-not-allowed disabled:bg-[#BACC96]"
            >
              🔊 Listen to all
            </button>

            <button
              type="button"
              onClick={stopAudio}
              disabled={!isSpeaking}
              className="rounded-xl bg-[#A1C35E] px-5 py-3 font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#8AAA49] disabled:cursor-not-allowed disabled:bg-[#CAD8AE]"
            >
              ■ Stop
            </button>
          </div>
        </section>

        <section className="mt-8">
          <p className="font-black uppercase tracking-[0.18em] text-[#6F893B]">
            Expression collection
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold italic text-[#3F4E21]">
            Explore the Phrases
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {phraseItems.map(
              (item) => (
                <article
                  key={item.id}
                  className="rounded-[28px] border border-[#CFDCB6] bg-[#FBFBFA] p-5 shadow-[0_10px_25px_rgba(66,82,35,0.07)] transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(66,82,35,0.12)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-2xl font-black text-[#425223]">
                        {item.phrase}
                      </p>

                      <p className="mt-1 font-bold text-[#96BC49]">
                        = {item.alternative}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        speakText(
                          `${item.phrase}. ${item.example}`,
                          item.phrase
                        )
                      }
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-sm transition ${
                        speakingPhrase ===
                        item.phrase
                          ? "bg-[#A1C35E] text-white"
                          : "bg-[#ECEEE8] text-[#425223] hover:bg-[#E2E7D7]"
                      }`}
                      aria-label={`Listen to ${item.phrase}`}
                    >
                      🔊
                    </button>
                  </div>

                  <span className="mt-3 inline-flex rounded-full bg-[#E9ECE4] px-3 py-1 text-xs font-bold text-[#688137]">
                    {item.vietnamese}
                  </span>

                  <p className="mt-4 font-medium leading-6 text-[#75913E]">
                    {item.meaning}
                  </p>

                  <div className="mt-4 rounded-2xl bg-[#F5F6F4] p-4">
                    <p className="text-sm font-black text-[#6F893B]">
                      Example
                    </p>

                    <p className="mt-1 font-medium italic leading-6 text-[#777F68]">
                      “{item.example}”
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        <section className="mt-10 space-y-9">
          {questionGroups.map((group) => (
            <div key={group.id}>
              <div className="rounded-[26px] border border-[#CFDCB6] bg-[#FBFBFA] p-5 shadow-sm">
                <h2 className="font-serif text-3xl font-bold italic text-[#3F4E21]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#777F68]">
                  {group.instruction}
                </p>
              </div>

              <div className="mt-5 space-y-5">
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
                        className="rounded-[28px] border border-[#CFDCB6] bg-[#FBFBFA] p-5 shadow-[0_10px_24px_rgba(66,82,35,0.07)] sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-black text-[#6F893B]">
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

                        <p className="mt-4 whitespace-pre-line text-lg font-bold leading-7 text-[#3F4E21]">
                          {question.prompt}
                        </p>

                        <div className="mt-4 grid gap-3">
                          {question.options.map(
                            (option) => {
                              const isSelected =
                                selected === option;

                              const isCorrect =
                                option ===
                                question.answer;

                              let optionStyle =
                                "border-[#DEE4D1] bg-[#FCFCFC] text-[#75913E] hover:border-[#9DC156] hover:bg-[#F0F2EC]";

                              if (
                                isSelected &&
                                !submitted
                              ) {
                                optionStyle =
                                  "border-[#6F893B] bg-[#ECEEE8] text-[#4F622A]";
                              }

                              if (
                                submitted &&
                                isCorrect
                              ) {
                                optionStyle =
                                  "border-[#97BD4C] bg-[#EEF0EA] text-[#586D2F]";
                              }

                              if (
                                submitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionStyle =
                                  "border-[#B5C98E] bg-[#F3F4F0] text-[#83A246]";
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
                                ? "bg-[#EEF0EA]"
                                : "bg-[#F3F4F0]"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                selectedIsCorrect
                                  ? "text-[#586D2F]"
                                  : "text-[#83A246]"
                              }`}
                            >
                              {selectedIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this answer"}
                            </p>

                            <p className="mt-1 leading-6 text-[#777F68]">
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
          <p className="mt-7 rounded-2xl border border-[#BECF9C] bg-[#E9ECE4] p-4 text-center font-bold text-[#5C7131]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[30px] border border-[#CFDCB6] bg-[#FBFBFA] p-7 text-center shadow-[0_12px_28px_rgba(66,82,35,0.09)]">
            <p className="font-black uppercase tracking-[0.16em] text-[#6F893B]">
              Your result
            </p>

            <p className="mt-2 font-serif text-6xl font-bold italic text-[#425223]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#3F4E21]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#777F68]">
              {scorePercent >= 85
                ? "Excellent! You can use the key expressions about families and changing lifestyles."
                : scorePercent >= 65
                  ? "Good work! Review the phrases and their example sentences."
                  : "Listen to the phrases again and review how they are used in context."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#425223] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#333F1B]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#A1C35E] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#8AAA49]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Phrases6Page;