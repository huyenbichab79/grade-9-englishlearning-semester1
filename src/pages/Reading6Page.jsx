import {
  useEffect,
  useState,
} from "react";

const passageSections = [
  {
    id: "paragraph-1",
    label: "Paragraph 1",
    text: `Last month, Minh interviewed his grandmother for a school project called “Vietnamese Lifestyle: Then and Now”. At first, he expected to hear only old family stories. However, the interview helped him understand how greatly daily life has changed across three generations.`,
  },
  {
    id: "paragraph-2",
    label: "Paragraph 2",
    text: `When Minh's grandmother was young, she lived in an extended family in a small village. Grandparents, parents, children, and sometimes other relatives shared the same home. Family members did not have much privacy, but they spent a great deal of time together. Children helped with housework, looked after younger brothers and sisters, and listened to stories from older relatives. Respect for elders played an important role in family life.`,
  },
  {
    id: "paragraph-3",
    label: "Paragraph 3",
    text: `Education and transport were also different. Minh's grandmother walked several kilometres to school and depended mainly on printed books and her teachers. There were few modern learning facilities. Bicycles were common, while motorbikes and cars were rare. Going abroad to study was only a dream for most young people because travel was expensive and opportunities were limited.`,
  },
  {
    id: "paragraph-4",
    label: "Paragraph 4",
    text: `Today, Minh lives with his parents and younger sister in a nuclear family in the city. He uses electronic devices to study, communicate, and relax. Online lessons, digital libraries, and language-learning applications provide students with convenient access to information. Public transport, motorbikes, cars, and planes also allow people to travel more quickly and comfortably.`,
  },
  {
    id: "paragraph-5",
    label: "Paragraph 5",
    text: `Despite these improvements, modern life creates new challenges. Young people often want more independence and privacy, while older family members may worry that traditional values are becoming weaker. This can produce a generation gap. Minh believes that families should not give up their traditions. Instead, different generations should have open conversations, respect one another, and learn from both the past and the present.`,
  },
];

const questionGroups = [
  {
    id: "basic",
    title: "Part 1: Find the Facts",
    instruction:
      "Choose the answer stated directly in the passage.",
    questions: [
      {
        id: "basic-1",
        level: "Basic",
        prompt:
          "Why did Minh interview his grandmother?",
        options: [
          "For a school project",
          "To prepare for a family trip",
          "To learn how to use a computer",
        ],
        answer: "For a school project",
        explanation:
          "Minh interviewed his grandmother for a school project called “Vietnamese Lifestyle: Then and Now”.",
      },
      {
        id: "basic-2",
        level: "Basic",
        prompt:
          "What type of family did Minh's grandmother live in?",
        options: [
          "An extended family",
          "A nuclear family",
          "A single-parent family",
        ],
        answer: "An extended family",
        explanation:
          "She lived with several generations and other relatives in an extended family.",
      },
      {
        id: "basic-3",
        level: "Basic",
        prompt:
          "How did Minh's grandmother usually travel to school?",
        options: [
          "She walked.",
          "She travelled by car.",
          "She took a plane.",
        ],
        answer: "She walked.",
        explanation:
          "The passage says that she walked several kilometres to school.",
      },
      {
        id: "basic-4",
        level: "Basic",
        prompt:
          "What does Minh use electronic devices for?",
        options: [
          "Studying, communicating, and relaxing",
          "Only playing traditional games",
          "Repairing bicycles and motorbikes",
        ],
        answer:
          "Studying, communicating, and relaxing",
        explanation:
          "Minh uses electronic devices for study, communication, and leisure.",
      },
    ],
  },
  {
    id: "intermediate",
    title: "Part 2: Understand the Ideas",
    instruction:
      "Use details and context to choose the best answer.",
    questions: [
      {
        id: "intermediate-1",
        level: "Intermediate",
        prompt:
          "Why did family members in the past have less privacy?",
        options: [
          "Many relatives shared the same home.",
          "Children studied in digital libraries.",
          "Everyone travelled abroad regularly.",
        ],
        answer:
          "Many relatives shared the same home.",
        explanation:
          "Several generations lived together, so personal space was more limited.",
      },
      {
        id: "intermediate-2",
        level: "Intermediate",
        prompt:
          "The word “limited” in Paragraph 3 is closest in meaning to ______.",
        options: [
          "not many",
          "very modern",
          "completely free",
        ],
        answer: "not many",
        explanation:
          "Limited opportunities means that there were not many opportunities available.",
      },
      {
        id: "intermediate-3",
        level: "Intermediate",
        prompt:
          "Which development has made learning more convenient today?",
        options: [
          "Online lessons and digital libraries",
          "Fewer learning facilities",
          "Longer walks to school",
        ],
        answer:
          "Online lessons and digital libraries",
        explanation:
          "Modern digital tools give students easier access to information.",
      },
      {
        id: "intermediate-4",
        level: "Intermediate",
        prompt:
          "What may cause a generation gap in modern families?",
        options: [
          "Different views about independence, privacy, and traditions",
          "All family members sharing exactly the same opinions",
          "Young people playing traditional games together",
        ],
        answer:
          "Different views about independence, privacy, and traditions",
        explanation:
          "Older and younger generations may have different values and expectations.",
      },
      {
        id: "intermediate-5",
        level: "Intermediate",
        prompt:
          "Which statement is TRUE according to the passage?",
        options: [
          "Modern transport allows people to travel faster.",
          "Students today depend only on printed books.",
          "Minh's grandmother had many chances to study abroad.",
        ],
        answer:
          "Modern transport allows people to travel faster.",
        explanation:
          "Modern vehicles allow people to travel more quickly and comfortably.",
      },
    ],
  },
  {
    id: "advanced",
    title: "Part 3: Reading Challenge",
    instruction:
      "Analyse the message, structure, and purpose of the passage.",
    questions: [
      {
        id: "advanced-1",
        level: "Advanced",
        prompt:
          "What is the main purpose of the passage?",
        options: [
          "To compare Vietnamese lifestyles in the past and present",
          "To explain how to repair electronic devices",
          "To prove that modern life has no disadvantages",
        ],
        answer:
          "To compare Vietnamese lifestyles in the past and present",
        explanation:
          "The passage compares family life, education, transport, technology, and values across generations.",
      },
      {
        id: "advanced-2",
        level: "Advanced",
        prompt:
          "What can be inferred about Minh after the interview?",
        options: [
          "He values both modern progress and family traditions.",
          "He wants families to stop discussing the past.",
          "He believes technology should replace family relationships.",
        ],
        answer:
          "He values both modern progress and family traditions.",
        explanation:
          "Minh appreciates modern improvements but also believes families should preserve traditions.",
      },
      {
        id: "advanced-3",
        level: "Advanced",
        prompt:
          "Which sentence best summarises the final paragraph?",
        options: [
          "Open communication can help generations balance change and tradition.",
          "Family conflicts can only be solved by electronic devices.",
          "Young people should give up their independence completely.",
        ],
        answer:
          "Open communication can help generations balance change and tradition.",
        explanation:
          "The final paragraph recommends conversations, mutual respect, and learning from both past and present.",
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

function Reading6Page({
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
    speakingAudioKey,
    setSpeakingAudioKey,
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
    setSpeakingAudioKey("");
  };

  const speakText = (
    text,
    audioKey = ""
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
    utterance.rate = 0.86;
    utterance.pitch = 1;
    utterance.volume = 1;

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang =
        selectedVoice.lang || "en-US";
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setSpeakingAudioKey(audioKey);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setSpeakingAudioKey("");
    };

    utterance.onerror = (event) => {
      setIsSpeaking(false);
      setSpeakingAudioKey("");

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

  const listenToFullPassage = () => {
    const fullPassage =
      passageSections
        .map((section) => section.text)
        .join(" ");

    speakText(
      fullPassage,
      "full-passage"
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
      <section className="mx-auto max-w-5xl">
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
              Unit 6 · Activity 4
            </p>

            <h1 className="mt-2 font-serif text-4xl font-bold italic text-[#3F4E21] sm:text-5xl">
              Reading
            </h1>

            <p className="mt-4 max-w-3xl text-lg font-medium leading-7 text-[#777F68]">
              Read and listen to a story about
              changes in Vietnamese family life,
              education, transport, technology,
              and values across generations.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <article className="rounded-[22px] border border-[#CFDCB6] bg-white/75 p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#425223]">
                  5
                </p>

                <p className="mt-1 text-sm font-bold text-[#777F68]">
                  Paragraphs
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
                  Listening
                </p>
              </article>
            </div>
          </div>
        </header>

        <section className="mt-7 rounded-[30px] border border-[#CFDCB6] bg-[#FBFBFA] p-5 shadow-[0_12px_28px_rgba(66,82,35,0.08)] sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-black uppercase tracking-[0.14em] text-[#6F893B]">
                Listening studio
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold italic text-[#3F4E21]">
                Listen to the Passage
              </h2>

              <p className="mt-2 font-medium text-[#777F68]">
                Choose an English voice, then
                listen to the complete passage
                or each paragraph separately.
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7EBDE] text-3xl">
              🎧
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
              onClick={listenToFullPassage}
              disabled={!audioSupported}
              className={`rounded-xl px-5 py-3 font-black text-white shadow-sm transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-[#BACC96] ${
                speakingAudioKey ===
                "full-passage"
                  ? "bg-[#A1C35E]"
                  : "bg-[#425223] hover:bg-[#333F1B]"
              }`}
            >
              🔊 Listen to passage
            </button>

            <button
              type="button"
              onClick={stopAudio}
              disabled={!isSpeaking}
              className="rounded-xl bg-[#96BC49] px-5 py-3 font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#7E9C43] disabled:cursor-not-allowed disabled:bg-[#CAD8AE]"
            >
              ■ Stop
            </button>
          </div>
        </section>

        <article className="mt-8 rounded-[30px] border border-[#CFDCB6] bg-[#FBFBFA] p-5 shadow-[0_12px_28px_rgba(66,82,35,0.09)] sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-black uppercase tracking-[0.16em] text-[#6F893B]">
                Reading passage
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold italic text-[#3F4E21] sm:text-4xl">
                Three Generations, One Story
              </h2>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E9ECE4] text-3xl">
              🕰️
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {passageSections.map(
              (section, index) => {
                const paragraphAudioKey =
                  `paragraph-${index + 1}`;

                return (
                  <section
                    key={section.id}
                    className="rounded-[22px] border border-[#DEE4D3] bg-[#F9F9F8] p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm font-black uppercase tracking-[0.13em] text-[#6F893B]">
                        {section.label}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          speakText(
                            section.text,
                            paragraphAudioKey
                          )
                        }
                        className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-black shadow-sm transition ${
                          speakingAudioKey ===
                          paragraphAudioKey
                            ? "bg-[#A1C35E] text-white"
                            : "bg-[#ECEEE8] text-[#425223] hover:bg-[#E2E7D7]"
                        }`}
                      >
                        🔊 Listen
                      </button>
                    </div>

                    <p className="mt-4 text-[17px] font-medium leading-8 text-[#6C8639]">
                      {section.text}
                    </p>
                  </section>
                );
              }
            )}
          </div>
        </article>

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
                ? "Excellent! You understand the passage and its message about change and tradition."
                : scorePercent >= 65
                  ? "Good work! Read the difficult paragraphs again and check the supporting details."
                  : "Listen to the passage again and review the differences between past and present life."}
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

export default Reading6Page;