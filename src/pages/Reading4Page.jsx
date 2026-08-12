import {
  useEffect,
  useState,
} from "react";

const passageParagraphs = [
  `Last spring, students at Hoa Son Secondary School joined a local project called “Memory Map”. Their village had an old communal house, a stone well, and a spring festival that had been celebrated for many generations. However, many teenagers knew very little about the history behind these places and traditions.`,

  `During the first meeting, several elderly villagers brought old photographs and family objects to the school. While the elders were telling stories, the students were recording their voices and taking notes. One woman explained how her grandmother had handed down a traditional pancake recipe. A local musician also taught the students a folk song that people used to sing during the spring festival.`,

  `The students then created an online map of the village. They added photographs, short descriptions, and recordings to each historical location. They also placed QR codes near the communal house and the stone well. Visitors could scan the codes to learn more about the village. The students interviewed the villagers face to face because they wanted the stories to sound natural and personal.`,

  `The project was not always easy. Some photographs were damaged, and different villagers sometimes remembered the same event differently. When this happened, the students compared the stories and asked a local historian for help. They understood that they should check information carefully instead of changing a story to make it more exciting.`,

  `By the end of the project, the students had developed a stronger connection with their community. They took pride in their village and understood why cultural heritage should be safeguarded. They also realised that preserving the past does not mean refusing every modern idea. Technology can help keep traditions alive when it is used appropriately. Many students now wish the project could continue for future generations.`,
];

const passageText =
  passageParagraphs.join("\n\n");

const exerciseGroups = [
  {
    id: "basic-reading",
    title: "Task 1: Find the Key Details",
    instruction:
      "Choose the correct answer according to the passage.",
    questions: [
      {
        id: "basic-1",
        level: "Basic",
        prompt:
          "What was the name of the students’ project?",
        answer: "Memory Map",
        options: [
          "Memory Map",
          "Future Village",
          "Modern School",
        ],
        explanation:
          "The project was called “Memory Map”.",
      },
      {
        id: "basic-2",
        level: "Basic",
        prompt:
          "Who brought old photographs and family objects to the school?",
        answer:
          "Several elderly villagers",
        options: [
          "Several elderly villagers",
          "A group of foreign tourists",
          "The school sports team",
        ],
        explanation:
          "Several elderly villagers shared photographs, objects, and stories with the students.",
      },
      {
        id: "basic-3",
        level: "Basic",
        prompt:
          "What did the local musician teach the students?",
        answer: "A folk song",
        options: [
          "A folk song",
          "A modern dance",
          "A computer program",
        ],
        explanation:
          "The musician taught them a folk song connected with the spring festival.",
      },
      {
        id: "basic-4",
        level: "Basic",
        prompt:
          "Where did the students place QR codes?",
        answer:
          "Near the communal house and the stone well",
        options: [
          "Near the communal house and the stone well",
          "Inside every student’s home",
          "At a modern shopping centre",
        ],
        explanation:
          "The QR codes were placed near two historical locations in the village.",
      },
    ],
  },
  {
    id: "understanding",
    title: "Task 2: Understand the Passage",
    instruction:
      "Choose the best answer for each question.",
    questions: [
      {
        id: "intermediate-1",
        level: "Intermediate",
        prompt:
          "Why did the students interview the villagers face to face?",
        answer:
          "They wanted the stories to sound natural and personal.",
        options: [
          "They wanted the stories to sound natural and personal.",
          "The villagers did not know how to speak.",
          "They wanted to avoid recording any information.",
        ],
        explanation:
          "Face-to-face interviews helped preserve the villagers’ personal voices and memories.",
      },
      {
        id: "intermediate-2",
        level: "Intermediate",
        prompt:
          "What could visitors do with the QR codes?",
        answer:
          "Scan them to learn about the village",
        options: [
          "Scan them to learn about the village",
          "Use them to buy traditional food",
          "Use them to enter the students’ classrooms",
        ],
        explanation:
          "The QR codes connected visitors to photographs, descriptions, and recordings.",
      },
      {
        id: "intermediate-3",
        level: "Intermediate",
        prompt:
          "The phrase “handed down” is closest in meaning to ______.",
        answer:
          "passed from an older generation to a younger one",
        options: [
          "passed from an older generation to a younger one",
          "sold at a local market",
          "forgotten after a short time",
        ],
        explanation:
          "A recipe, story, or tradition can be handed down through generations.",
      },
      {
        id: "intermediate-4",
        level: "Intermediate",
        prompt:
          "What did the students do when villagers remembered an event differently?",
        answer:
          "They compared the stories and asked a historian for help.",
        options: [
          "They compared the stories and asked a historian for help.",
          "They chose the most exciting story immediately.",
          "They deleted all information about the event.",
        ],
        explanation:
          "The students checked different accounts carefully instead of changing the information.",
      },
      {
        id: "intermediate-5",
        level: "Intermediate",
        prompt:
          "Which statement is true according to the passage?",
        answer:
          "Technology can support the preservation of cultural traditions.",
        options: [
          "Technology can support the preservation of cultural traditions.",
          "Modern technology always destroys cultural heritage.",
          "The students stopped caring about their village after the project.",
        ],
        explanation:
          "The online map and QR codes helped younger people and visitors learn about local heritage.",
      },
    ],
  },
  {
    id: "advanced-reading",
    title: "Task 3: Reading Challenge",
    instruction:
      "Choose the best inference, purpose, or title.",
    questions: [
      {
        id: "advanced-1",
        level: "Advanced",
        prompt:
          "What can be inferred about the students before they joined the project?",
        answer:
          "They were not fully aware of the meaning of their local heritage.",
        options: [
          "They were not fully aware of the meaning of their local heritage.",
          "They already knew every detail about the village.",
          "They wanted all traditional buildings to be removed.",
        ],
        explanation:
          "The passage says that many teenagers initially knew very little about the village’s history.",
      },
      {
        id: "advanced-2",
        level: "Advanced",
        prompt:
          "What is the writer’s main purpose?",
        answer:
          "To show how young people and technology can help preserve local heritage",
        options: [
          "To show how young people and technology can help preserve local heritage",
          "To argue that students should stop using technology",
          "To explain how to cook traditional pancakes",
        ],
        explanation:
          "The passage focuses on a student project that connected technology with cultural preservation.",
      },
      {
        id: "advanced-3",
        level: "Advanced",
        prompt:
          "Which title best matches the passage?",
        answer:
          "Connecting the Past with the Future",
        options: [
          "Connecting the Past with the Future",
          "Why Village History Should Be Forgotten",
          "A School Without Technology",
        ],
        explanation:
          "The project used modern tools to preserve memories and traditions for future generations.",
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#E5DAD4] bg-[#F6F4F3] text-[#925A3E]",
  Intermediate:
    "border-[#E0D1CA] bg-[#F2EEEC] text-[#825038]",
  Advanced:
    "border-[#EBE2DD] bg-[#F6F4F3] text-[#C47F5E]",
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

function Reading4Page({
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

  const handleListen = () => {
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
        passageText
      );

    const selectedVoice =
      voices.find(
        (voice) =>
          voice.voiceURI ===
          selectedVoiceURI
      );

    utterance.lang = "en-US";
    utterance.rate = 0.88;
    utterance.pitch = 1;
    utterance.volume = 1;

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang =
        selectedVoice.lang || "en-US";
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = (event) => {
      setIsSpeaking(false);

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

  const handleStop = () => {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();
    }

    setIsSpeaking(false);
  };

  const handleVoiceChange = (
    event
  ) => {
    handleStop();
    setSelectedVoiceURI(
      event.target.value
    );
    setMessage("");
  };

  const handleBack = () => {
    handleStop();
    onBack();
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
    handleStop();

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
    <main className="min-h-screen bg-[#FCFBFB] px-4 py-6 text-[#603B29] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="relative overflow-hidden rounded-[32px] border border-white bg-gradient-to-r from-[#F6F4F3] via-[#F9F8F7] to-[#EFEAE8] p-6 shadow-lg sm:p-8">
          <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#DED0C9]/70" />

          <div className="pointer-events-none absolute bottom-8 right-36 h-16 w-16 rounded-full bg-[#F2EEEC]" />

          <div className="relative">
            <button
              type="button"
              onClick={handleBack}
              className="rounded-xl bg-white px-4 py-2 font-bold text-[#925A3E] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Back to Unit 4
            </button>

            <p className="mt-6 font-black uppercase tracking-[0.18em] text-[#825038]">
              Unit 4 · Activity 4
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-5xl">
              Reading
            </h1>

            <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#A96848]">
              Read and listen to a story about
              students using modern technology
              to preserve local memories and
              traditions.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#925A3E]">
                  12
                </p>

                <p className="mt-1 text-sm font-bold text-[#A96848]">
                  Questions
                </p>
              </div>

              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#825038]">
                  en-US
                </p>

                <p className="mt-1 text-sm font-bold text-[#A96848]">
                  Listening voice
                </p>
              </div>

              <div className="rounded-2xl bg-white/85 p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-[#C68464]">
                  3
                </p>

                <p className="mt-1 text-sm font-bold text-[#A96848]">
                  Difficulty levels
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-7 rounded-[28px] border border-[#EBE3DF] bg-white p-5 shadow-md sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-black uppercase tracking-[0.14em] text-[#C68464]">
                Reading passage
              </p>

              <h2 className="mt-1 text-2xl font-black text-[#603B29]">
                Connecting the Past with the
                Future
              </h2>
            </div>

            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F6F4F3] text-2xl shadow-sm">
              📖
            </span>
          </div>

          <div className="mt-5 rounded-[24px] border border-[#ECE7E4] bg-[#FAFAFA] p-4 sm:p-5">
            <label
              htmlFor="reading4-voice"
              className="block text-sm font-black text-[#925A3E]"
            >
              American English voice
            </label>

            <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_auto_auto]">
              <select
                id="reading4-voice"
                value={selectedVoiceURI}
                onChange={
                  handleVoiceChange
                }
                disabled={voices.length === 0}
                className="w-full rounded-xl border border-[#E4D8D3] bg-white px-4 py-3 font-semibold text-[#8F583D] outline-none transition focus:border-[#C37D5B]"
              >
                {voices.length === 0 ? (
                  <option value="">
                    Loading available
                    voices...
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
                onClick={handleListen}
                className="rounded-xl bg-[#925A3E] px-5 py-3 font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#774933]"
              >
                🔊 Listen
              </button>

              <button
                type="button"
                onClick={handleStop}
                disabled={!isSpeaking}
                className={`rounded-xl px-5 py-3 font-black shadow-sm transition ${
                  isSpeaking
                    ? "bg-[#C68464] text-white hover:-translate-y-0.5 hover:bg-[#B96A44]"
                    : "cursor-not-allowed bg-[#ECE7E5] text-[#CE9579]"
                }`}
              >
                ■ Stop
              </button>
            </div>

            <p className="mt-3 text-sm font-medium leading-5 text-[#A96848]">
              The app prioritises a likely
              female American voice when one is
              available on the device.
            </p>
          </div>

          <div className="mt-6 space-y-5 text-[17px] font-medium leading-8 text-[#8F583D]">
            {passageParagraphs.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}
          </div>

          <div className="mt-6 rounded-2xl bg-[#EFEAE8] p-4">
            <p className="font-black text-[#714530]">
              Reading tip
            </p>

            <p className="mt-1 leading-6 text-[#A96848]">
              First, listen for the main idea.
              Then read again and identify the
              actions, difficulties, and results
              of the project.
            </p>
          </div>
        </section>

        <section className="mt-8 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-[22px] bg-white p-5 shadow-md">
                <h2 className="text-2xl font-black text-[#925A3E]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#A96848]">
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
                        className="rounded-[26px] border border-[#EBE6E4] bg-white p-5 shadow-md sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-black text-[#825038]">
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

                        <p className="mt-4 text-lg font-bold leading-7 text-[#603B29]">
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
                                "border-[#EAE5E2] bg-[#FCFCFC] text-[#8F583D] hover:border-[#CAA491] hover:bg-[#F9F8F8]";

                              if (
                                isSelected &&
                                !submitted
                              ) {
                                optionStyle =
                                  "border-[#BC6F4A] bg-[#F6F4F3] text-[#7E4E36]";
                              }

                              if (
                                submitted &&
                                isCorrect
                              ) {
                                optionStyle =
                                  "border-[#BF7652] bg-[#F2EEEC] text-[#6C432F]";
                              }

                              if (
                                submitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionStyle =
                                  "border-[#CF997F] bg-[#F4F2F0] text-[#9E6144]";
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
                                ? "bg-[#F2EEEC]"
                                : "bg-[#F4F2F0]"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                selectedIsCorrect
                                  ? "text-[#6C432F]"
                                  : "text-[#9E6144]"
                              }`}
                            >
                              {selectedIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this answer"}
                            </p>

                            <p className="mt-1 leading-6 text-[#A96848]">
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
          <p className="mt-7 rounded-2xl border border-[#D3B3A4] bg-[#EFEAE8] p-4 text-center font-bold text-[#643E2B]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] border border-[#EAE5E3] bg-[#F6F4F3] p-7 text-center shadow-md">
            <p className="font-black uppercase tracking-[0.16em] text-[#825038]">
              Your result
            </p>

            <p className="mt-2 text-5xl font-black text-[#925A3E]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#603B29]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#A96848]">
              {scorePercent >= 85
                ? "Excellent! You understood both the details and the deeper message of the passage."
                : scorePercent >= 65
                  ? "Good work! Read the explanations for the difficult questions."
                  : "Listen to the passage again, review the key details, and try one more time."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#925A3E] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#774933]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#825038] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#6A412D]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Reading4Page;