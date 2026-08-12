import {
  useEffect,
  useState,
} from "react";

const vocabularyWords = [
  {
    id: 1,
    word: "democratic",
    pronunciation: "/ˌdeməˈkrætɪk/",
    partOfSpeech: "adjective",
    meaning:
      "allowing people to express opinions and participate in decisions",
    vietnamese: "dân chủ",
    example:
      "A democratic society respects people's opinions.",
  },
  {
    id: 2,
    word: "extended family",
    pronunciation:
      "/ɪkˌstendɪd ˈfæməli/",
    partOfSpeech: "noun phrase",
    meaning:
      "a family including parents, children, grandparents, and other relatives",
    vietnamese: "đại gia đình",
    example:
      "My grandparents live with us in an extended family.",
  },
  {
    id: 3,
    word: "privacy",
    pronunciation: "/ˈpraɪvəsi/",
    partOfSpeech: "noun",
    meaning:
      "the state of being free from unwanted attention",
    vietnamese: "sự riêng tư",
    example:
      "Teenagers often want more privacy as they grow older.",
  },
  {
    id: 4,
    word: "conflict",
    pronunciation: "/ˈkɑːnflɪkt/",
    partOfSpeech: "noun",
    meaning:
      "a serious disagreement between people or groups",
    vietnamese:
      "sự xung đột, mâu thuẫn",
    example:
      "Different opinions may cause conflict between generations.",
  },
  {
    id: 5,
    word: "independent",
    pronunciation:
      "/ˌɪndɪˈpendənt/",
    partOfSpeech: "adjective",
    meaning:
      "able to make decisions and act without depending on others",
    vietnamese: "độc lập",
    example:
      "Young adults want to become more independent.",
  },
  {
    id: 6,
    word: "convenient",
    pronunciation:
      "/kənˈviːniənt/",
    partOfSpeech: "adjective",
    meaning:
      "easy and suitable to use or do",
    vietnamese: "thuận tiện",
    example:
      "Electronic devices make communication more convenient.",
  },
  {
    id: 7,
    word: "opportunity",
    pronunciation:
      "/ˌɑːpərˈtuːnəti/",
    partOfSpeech: "noun",
    meaning:
      "a chance to do or achieve something",
    vietnamese: "cơ hội",
    example:
      "Students have more opportunities to study abroad.",
  },
  {
    id: 8,
    word: "living conditions",
    pronunciation:
      "/ˈlɪvɪŋ kənˈdɪʃənz/",
    partOfSpeech: "noun phrase",
    meaning:
      "the circumstances in which people live",
    vietnamese: "điều kiện sống",
    example:
      "Living conditions have improved in many areas.",
  },
  {
    id: 9,
    word: "electronic device",
    pronunciation:
      "/ɪˌlektrɑːnɪk dɪˈvaɪs/",
    partOfSpeech: "noun phrase",
    meaning:
      "a machine that works using electronic technology",
    vietnamese: "thiết bị điện tử",
    example:
      "A smartphone is a common electronic device.",
  },
  {
    id: 10,
    word: "leisure",
    pronunciation: "/ˈliːʒər/",
    partOfSpeech: "noun",
    meaning:
      "time when a person is free from work or study",
    vietnamese:
      "thời gian rảnh rỗi",
    example:
      "People now use electronic devices during their leisure time.",
  },
  {
    id: 11,
    word: "generation gap",
    pronunciation:
      "/ˌdʒenəˈreɪʃən ɡæp/",
    partOfSpeech: "noun phrase",
    meaning:
      "differences in attitudes and values between younger and older people",
    vietnamese:
      "khoảng cách thế hệ",
    example:
      "Open conversations can reduce the generation gap.",
  },
  {
    id: 12,
    word: "family values",
    pronunciation:
      "/ˌfæməli ˈvæljuːz/",
    partOfSpeech: "noun phrase",
    meaning:
      "beliefs and principles that are important to a family",
    vietnamese:
      "các giá trị gia đình",
    example:
      "Respect for older people is an important family value.",
  },
];

const questions = [
  {
    id: "basic-1",
    level: "Basic",
    prompt:
      "Which phrase means a family that includes several generations?",
    options: [
      "extended family",
      "electronic device",
      "generation gap",
    ],
    answer: "extended family",
    explanation:
      "An extended family may include grandparents, parents, children, and other relatives.",
  },
  {
    id: "basic-2",
    level: "Basic",
    prompt:
      "A smartphone, tablet, or laptop is an ______.",
    options: [
      "electronic device",
      "opportunity",
      "family value",
    ],
    answer: "electronic device",
    explanation:
      "An electronic device is a machine that uses electronic technology.",
  },
  {
    id: "basic-3",
    level: "Basic",
    prompt:
      "Which word means the right to keep personal matters private?",
    options: [
      "privacy",
      "leisure",
      "conflict",
    ],
    answer: "privacy",
    explanation:
      "Privacy means being free from unwanted attention or intrusion.",
  },
  {
    id: "basic-4",
    level: "Basic",
    prompt:
      "Which word refers to free time outside work or study?",
    options: [
      "leisure",
      "democratic",
      "independent",
    ],
    answer: "leisure",
    explanation:
      "Leisure is the time when someone is free to relax or enjoy activities.",
  },
  {
    id: "intermediate-1",
    level: "Intermediate",
    prompt:
      "Young people are becoming more ______ and making their own life choices.",
    options: [
      "independent",
      "extended",
      "personal",
    ],
    answer: "independent",
    explanation:
      "Independent people can make decisions and act without relying heavily on others.",
  },
  {
    id: "intermediate-2",
    level: "Intermediate",
    prompt:
      "Modern household appliances make everyday life more ______.",
    options: [
      "convenient",
      "frightening",
      "negative",
    ],
    answer: "convenient",
    explanation:
      "Convenient describes something that is easy and suitable to use.",
  },
  {
    id: "intermediate-3",
    level: "Intermediate",
    prompt:
      "Differences in values between older and younger people may create a ______.",
    options: [
      "generation gap",
      "living condition",
      "natural material",
    ],
    answer: "generation gap",
    explanation:
      "A generation gap is the difference in beliefs and attitudes between generations.",
  },
  {
    id: "intermediate-4",
    level: "Intermediate",
    prompt:
      "Respect, responsibility, and care for relatives are examples of ______.",
    options: [
      "family values",
      "electronic devices",
      "learning facilities",
    ],
    answer: "family values",
    explanation:
      "Family values are the beliefs and principles considered important in a family.",
  },
  {
    id: "intermediate-5",
    level: "Intermediate",
    prompt:
      "Better housing, clean water, and modern facilities improve people's ______.",
    options: [
      "living conditions",
      "personal interests",
      "conversations",
    ],
    answer: "living conditions",
    explanation:
      "Living conditions describe the circumstances in which people live.",
  },
  {
    id: "advanced-1",
    level: "Advanced",
    prompt:
      "A society that allows citizens to express opinions and participate in decisions is described as ______.",
    options: [
      "democratic",
      "dependent",
      "inconvenient",
    ],
    answer: "democratic",
    explanation:
      "Democratic systems allow citizens to participate and express their views.",
  },
  {
    id: "advanced-2",
    level: "Advanced",
    prompt:
      "Which situation best illustrates a conflict between generations?",
    options: [
      "Parents and teenagers strongly disagree about career choices.",
      "Grandparents teach children a traditional game.",
      "Family members enjoy dinner together.",
    ],
    answer:
      "Parents and teenagers strongly disagree about career choices.",
    explanation:
      "A conflict is a serious disagreement, often caused by different opinions or values.",
  },
  {
    id: "advanced-3",
    level: "Advanced",
    prompt:
      "Choose the best word to complete the sentence.\n\nStudying abroad gave Mai an excellent ______ to become more independent.",
    options: [
      "opportunity",
      "privacy",
      "conflict",
    ],
    answer: "opportunity",
    explanation:
      "An opportunity is a chance to do something useful or achieve a goal.",
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

function Vocabulary6Page({
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

  const totalQuestions =
    questions.length;

  const correctAnswers =
    questions.filter(
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
    audioKey = "",
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

  const listenToAllWords = () => {
    const completeText =
      vocabularyWords
        .map(
          (item) => `${item.word}.`
        )
        .join(" ");

    speakText(
      completeText,
      "all-words",
      0.72
    );
  };

  const listenToAllExamples = () => {
    const completeText =
      vocabularyWords
        .map((item) => item.example)
        .join(" ");

    speakText(
      completeText,
      "all-examples",
      0.86
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
              Unit 6 · Activity 1
            </p>

            <h1 className="mt-2 font-serif text-4xl font-bold italic text-[#3F4E21] sm:text-5xl">
              Generations Vocabulary
            </h1>

            <p className="mt-4 max-w-3xl text-lg font-medium leading-7 text-[#777F68]">
              Learn important words about
              family life, generations,
              technology, independence, and
              changes in living conditions.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <article className="rounded-[22px] border border-[#CFDCB6] bg-white/75 p-4 text-center">
                <p className="font-serif text-3xl font-bold italic text-[#425223]">
                  12
                </p>

                <p className="mt-1 text-sm font-bold text-[#777F68]">
                  Key words
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

              <p className="mt-2 font-medium text-[#777F68]">
                Word audio and example audio
                are separated for easier
                practice.
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7EBDE] text-3xl">
              🔊
            </div>
          </div>

          <div className="mt-5 grid gap-3 xl:grid-cols-[1fr_auto_auto_auto]">
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
              onClick={listenToAllWords}
              disabled={!audioSupported}
              className={`rounded-xl px-5 py-3 font-black text-white shadow-sm transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-[#BACC96] ${
                speakingAudioKey ===
                "all-words"
                  ? "bg-[#A1C35E]"
                  : "bg-[#425223] hover:bg-[#333F1B]"
              }`}
            >
              🔊 All words
            </button>

            <button
              type="button"
              onClick={listenToAllExamples}
              disabled={!audioSupported}
              className={`rounded-xl px-5 py-3 font-black text-white shadow-sm transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-[#BACC96] ${
                speakingAudioKey ===
                "all-examples"
                  ? "bg-[#A1C35E]"
                  : "bg-[#6F893B] hover:bg-[#5D7331]"
              }`}
            >
              🔊 All examples
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

        <section className="mt-8">
          <div>
            <p className="font-black uppercase tracking-[0.18em] text-[#6F893B]">
              Heritage word collection
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold italic text-[#3F4E21]">
              Explore the Vocabulary
            </h2>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {vocabularyWords.map(
              (item) => {
                const wordAudioKey =
                  `${item.id}-word`;

                const exampleAudioKey =
                  `${item.id}-example`;

                return (
                  <article
                    key={item.id}
                    className="rounded-[28px] border border-[#CFDCB6] bg-[#FBFBFA] p-5 shadow-[0_10px_25px_rgba(66,82,35,0.07)] transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(66,82,35,0.12)]"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-2xl font-black text-[#425223]">
                          {item.word}
                        </p>

                        <p className="mt-1 font-semibold text-[#96BC49]">
                          {item.pronunciation}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          speakText(
                            item.word,
                            wordAudioKey,
                            0.68
                          )
                        }
                        className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-black shadow-sm transition ${
                          speakingAudioKey ===
                          wordAudioKey
                            ? "bg-[#A1C35E] text-white"
                            : "bg-[#425223] text-white hover:bg-[#333F1B]"
                        }`}
                        aria-label={`Listen to the word ${item.word}`}
                      >
                        🔊 Word
                      </button>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#ECEEE8] px-3 py-1 text-xs font-bold text-[#6F893B]">
                        {item.partOfSpeech}
                      </span>

                      <span className="rounded-full bg-[#E9ECE4] px-3 py-1 text-xs font-bold text-[#688137]">
                        {item.vietnamese}
                      </span>
                    </div>

                    <p className="mt-4 font-medium leading-6 text-[#75913E]">
                      {item.meaning}
                    </p>

                    <div className="mt-4 rounded-2xl border border-[#E0E6D5] bg-[#F5F6F4] p-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-black uppercase tracking-[0.12em] text-[#6F893B]">
                            Example sentence
                          </p>

                          <p className="mt-2 font-medium italic leading-6 text-[#777F68]">
                            “{item.example}”
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            speakText(
                              item.example,
                              exampleAudioKey,
                              0.86
                            )
                          }
                          className={`inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-black shadow-sm transition ${
                            speakingAudioKey ===
                            exampleAudioKey
                              ? "bg-[#A1C35E] text-white"
                              : "bg-[#6F893B] text-white hover:bg-[#5D7331]"
                          }`}
                          aria-label={`Listen to the example for ${item.word}`}
                        >
                          🔊 Example
                        </button>
                      </div>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-[26px] border border-[#CFDCB6] bg-[#FBFBFA] p-5 shadow-sm">
            <p className="font-black uppercase tracking-[0.18em] text-[#6F893B]">
              Vocabulary challenge
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold italic text-[#3F4E21]">
              Check Your Understanding
            </h2>

            <p className="mt-2 font-medium text-[#777F68]">
              Choose the best answer for each
              question.
            </p>
          </div>

          <div className="mt-5 space-y-5">
            {questions.map(
              (question, index) => {
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
                        Question {index + 1}
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
                ? "Excellent! You understand the key vocabulary about generations and changing lifestyles."
                : scorePercent >= 65
                  ? "Good work! Review the difficult words and their examples."
                  : "Listen to the words and examples separately, then review their meanings before trying again."}
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

export default Vocabulary6Page;