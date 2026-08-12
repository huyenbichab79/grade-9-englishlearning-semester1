import {
  useEffect,
  useState,
} from "react";

const passageParagraphs = [
  `Greenfield is a bustling city with many shops, offices, and entertainment centres. However, during rush hour, the roads downtown are often congested. Commuters frequently get stuck in traffic jams, buses arrive late, and the air becomes more polluted near busy roads and construction sites.`,

  `Last year, the city authority carried out a survey to learn what residents wanted. Many people asked for more reliable public transport and better public amenities. As a result, the city expanded its metro system, opened a new sky-train route, built cycling lanes, and added more learning spaces in public libraries.`,

  `After six months, the changes produced positive results. More residents began to get around by public transport. The more convenient the transport services became, the fewer private cars entered the downtown area. However, food waste and poor hygiene were still problems around several local markets.`,

  `To improve these areas, the authority provided recycling points and sent cleaning teams to the markets every day. Residents were also encouraged to sort their leftovers, avoid travelling during rush hour, and report unsafe streets. Many people now believe that Greenfield is becoming more liveable. They also understand that the more responsibly people behave, the better city life becomes.`,
];

const passageText =
  passageParagraphs.join("\n\n");

const exerciseGroups = [
  {
    id: "main-ideas",
    title:
      "Task 1: Reading for main ideas",
    instruction:
      "Read the passage and choose the best answer.",
    questions: [
      {
        id: "main-1",
        level: "Basic",
        prompt:
          "What was a major problem in Greenfield during rush hour?",
        answer:
          "The roads were often congested.",
        options: [
          "The roads were often congested.",
          "The libraries were always closed.",
          "There were no entertainment centres.",
        ],
        explanation:
          "The first paragraph says that the roads downtown were often congested during rush hour.",
      },
      {
        id: "main-2",
        level: "Basic",
        prompt:
          "Why did the city authority carry out a survey?",
        answer:
          "To learn what residents wanted.",
        options: [
          "To learn what residents wanted.",
          "To close all the local markets.",
          "To increase the crime rate.",
        ],
        explanation:
          "The authority used the survey to understand residents’ needs.",
      },
      {
        id: "main-3",
        level: "Basic",
        prompt:
          "Which transport improvement is mentioned in the passage?",
        answer:
          "A new sky-train route was opened.",
        options: [
          "A new airport was built.",
          "A new sky-train route was opened.",
          "All buses were removed.",
        ],
        explanation:
          "Greenfield opened a new sky-train route and expanded its metro system.",
      },
      {
        id: "main-4",
        level: "Intermediate",
        prompt:
          "What happened after public transport became more convenient?",
        answer:
          "Fewer private cars entered downtown.",
        options: [
          "Fewer private cars entered downtown.",
          "More construction sites appeared.",
          "Residents stopped using the metro.",
        ],
        explanation:
          "The passage connects better public transport with fewer private cars downtown.",
      },
    ],
  },
  {
    id: "true-false",
    title: "Task 2: True or False",
    instruction:
      "Choose True or False according to the passage.",
    questions: [
      {
        id: "tf-1",
        level: "Basic",
        prompt:
          "Residents only asked the authority to build more roads.",
        answer: "False",
        options: ["True", "False"],
        explanation:
          "Residents asked for reliable public transport and better public amenities.",
      },
      {
        id: "tf-2",
        level: "Intermediate",
        prompt:
          "Greenfield added cycling lanes and more learning spaces.",
        answer: "True",
        options: ["True", "False"],
        explanation:
          "Both cycling lanes and learning spaces are mentioned in paragraph two.",
      },
      {
        id: "tf-3",
        level: "Intermediate",
        prompt:
          "All hygiene problems around the markets disappeared immediately.",
        answer: "False",
        options: ["True", "False"],
        explanation:
          "Food waste and poor hygiene were still problems after six months.",
      },
      {
        id: "tf-4",
        level: "Intermediate",
        prompt:
          "Residents also have a responsibility to improve city life.",
        answer: "True",
        options: ["True", "False"],
        explanation:
          "Residents were encouraged to sort waste, avoid rush hour, and report unsafe streets.",
      },
    ],
  },
  {
    id: "language-inference",
    title:
      "Task 3: Vocabulary and inference",
    instruction:
      "Choose the best meaning or conclusion.",
    questions: [
      {
        id: "language-1",
        level: "Intermediate",
        prompt:
          "The phrase “carried out a survey” is closest in meaning to ______.",
        answer: "conducted a survey",
        options: [
          "cancelled a survey",
          "conducted a survey",
          "forgot a survey",
        ],
        explanation:
          "“Carry out” means to perform or conduct an activity.",
      },
      {
        id: "language-2",
        level: "Intermediate",
        prompt:
          "Why did the authority provide recycling points near the markets?",
        answer:
          "To help reduce food waste and improve hygiene.",
        options: [
          "To help reduce food waste and improve hygiene.",
          "To make the markets more expensive.",
          "To create more traffic jams.",
        ],
        explanation:
          "The recycling points were part of the solution to waste and hygiene problems.",
      },
      {
        id: "language-3",
        level: "Advanced",
        prompt:
          "What does this sentence mean: “The more convenient the transport services became, the fewer private cars entered downtown”?",
        answer:
          "Better public transport reduced the number of private cars downtown.",
        options: [
          "Better public transport reduced the number of private cars downtown.",
          "Private cars made public transport less convenient.",
          "Downtown became larger because of private cars.",
        ],
        explanation:
          "The two changes are connected: transport improved while private-car use decreased.",
      },
      {
        id: "language-4",
        level: "Advanced",
        prompt:
          "What can be inferred about Greenfield?",
        answer:
          "The city has improved, but it still has some problems to solve.",
        options: [
          "The city has improved, but it still has some problems to solve.",
          "The city has solved every problem completely.",
          "The city has stopped investing in public services.",
        ],
        explanation:
          "Transport improved, but food waste and poor hygiene still needed attention.",
      },
      {
        id: "language-5",
        level: "Advanced",
        prompt:
          "Which title best matches the whole passage?",
        answer:
          "Making Greenfield More Liveable",
        options: [
          "Closing All Local Markets",
          "Making Greenfield More Liveable",
          "A Day at a Construction Site",
        ],
        explanation:
          "The passage focuses on city problems, improvements, and shared responsibility.",
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#C1CADA] bg-[#EBEDF1] text-[#324976]",
  Intermediate:
    "border-[#B7C4DD] bg-[#ECEEF2] text-[#385182]",
  Advanced:
    "border-[#CFD6E3] bg-[#F0F2F4] text-[#3E5B92]",
};

const femaleVoiceKeywords = [
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

function findPreferredVoice(voiceList) {
  const americanVoices =
    voiceList.filter((voice) =>
      voice.lang
        .toLowerCase()
        .startsWith("en-us")
    );

  const englishVoices =
    voiceList.filter((voice) =>
      voice.lang
        .toLowerCase()
        .startsWith("en")
    );

  const candidates =
    americanVoices.length > 0
      ? americanVoices
      : englishVoices;

  const likelyFemaleVoice =
    candidates.find((voice) => {
      const voiceName =
        voice.name.toLowerCase();

      return femaleVoiceKeywords.some(
        (keyword) =>
          voiceName.includes(keyword)
      );
    });

  return (
    likelyFemaleVoice ||
    candidates[0] ||
    voiceList[0] ||
    null
  );
}

function Reading2Page({
  onBack,
  onComplete,
}) {
  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [isSpeaking, setIsSpeaking] =
    useState(false);

  const [availableVoices, setAvailableVoices] =
    useState([]);

  const [
    selectedVoiceURI,
    setSelectedVoiceURI,
  ] = useState("");

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

      const voicesToShow =
        americanVoices.length > 0
          ? americanVoices
          : englishVoices;

      setAvailableVoices(voicesToShow);

      setSelectedVoiceURI(
        (currentVoiceURI) => {
          const currentVoiceStillExists =
            voicesToShow.some(
              (voice) =>
                voice.voiceURI ===
                currentVoiceURI
            );

          if (
            currentVoiceURI &&
            currentVoiceStillExists
          ) {
            return currentVoiceURI;
          }

          const preferredVoice =
            findPreferredVoice(
              voicesToShow
            );

          return (
            preferredVoice?.voiceURI || ""
          );
        }
      );
    };

    loadVoices();

    speechSystem.addEventListener(
      "voiceschanged",
      loadVoices
    );

    return () => {
      speechSystem.cancel();

      speechSystem.removeEventListener(
        "voiceschanged",
        loadVoices
      );
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

  const handleVoiceChange = (event) => {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();
    }

    setIsSpeaking(false);
    setSelectedVoiceURI(
      event.target.value
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

    if (isSpeaking) {
      speechSystem.cancel();
      setIsSpeaking(false);
      return;
    }

    speechSystem.cancel();

    const speech =
      new window.SpeechSynthesisUtterance(
        passageText
      );

    const selectedVoice =
      availableVoices.find(
        (voice) =>
          voice.voiceURI ===
          selectedVoiceURI
      );

    speech.lang = "en-US";
    speech.rate = 0.86;
    speech.pitch = 1;
    speech.volume = 1;

    if (selectedVoice) {
      speech.voice = selectedVoice;
      speech.lang =
        selectedVoice.lang || "en-US";
    }

    speech.onend = () => {
      setIsSpeaking(false);
    };

    speech.onerror = (event) => {
      setIsSpeaking(false);

      if (
        event.error !== "interrupted" &&
        event.error !== "canceled"
      ) {
        setMessage(
          "The audio could not be played."
        );
      }
    };

    speechSystem.speak(speech);

    setIsSpeaking(true);
    setMessage("");
  };

  const handleBack = () => {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();
    }

    setIsSpeaking(false);
    onBack();
  };

  const handleSubmit = () => {
    if (
      Object.keys(selectedAnswers)
        .length < totalQuestions
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
    <main className="min-h-screen bg-[#F6F6F7] px-4 py-6 text-[#2F446D] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="rounded-[32px] border border-white bg-[#E1E4EA] p-6 shadow-lg sm:p-8">
          <button
            type="button"
            onClick={handleBack}
            className="rounded-xl bg-white px-4 py-2 font-bold text-[#2F446D] shadow-sm transition hover:-translate-y-0.5"
          >
            ← Back to Unit 2
          </button>

          <p className="mt-6 font-bold uppercase tracking-[0.18em] text-[#6486C6]">
            Unit 2 · Activity 4
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Reading
          </h1>

          <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#42609A]">
            Read and listen to a passage about
            changes that make a city more
            liveable.
          </p>
        </header>

        <section className="mt-7 rounded-[28px] border border-[#DBE0E9] bg-white p-5 shadow-md sm:p-7">
          <div className="border-b border-[#E4E7EC] pb-5">
            <p className="font-bold uppercase tracking-[0.14em] text-[#6486C6]">
              Reading passage
            </p>

            <h2 className="mt-1 text-2xl font-black text-[#2F446D]">
              Making Greenfield More
              Liveable
            </h2>

            <div className="mt-5 rounded-2xl bg-[#F3F4F6] p-4">
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <label
                    htmlFor="reading-voice"
                    className="block text-sm font-bold text-[#324976]"
                  >
                    American English voice
                  </label>

                  <select
                    id="reading-voice"
                    value={selectedVoiceURI}
                    onChange={
                      handleVoiceChange
                    }
                    disabled={
                      availableVoices.length ===
                      0
                    }
                    className="mt-2 w-full rounded-xl border border-[#C7CFDE] bg-white px-4 py-3 font-medium text-[#395384] outline-none transition focus:border-[#4869A8]"
                  >
                    {availableVoices.length ===
                    0 ? (
                      <option value="">
                        Loading available
                        voices...
                      </option>
                    ) : (
                      availableVoices.map(
                        (voice) => (
                          <option
                            key={
                              voice.voiceURI
                            }
                            value={
                              voice.voiceURI
                            }
                          >
                            {voice.name} (
                            {voice.lang})
                          </option>
                        )
                      )
                    )}
                  </select>

                  <p className="mt-2 text-sm leading-5 text-[#4369B4]">
                    The app automatically
                    selects a likely female
                    American voice when one is
                    available.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleListen}
                  className={`rounded-xl px-5 py-3 font-bold text-white shadow-sm transition ${
                    isSpeaking
                      ? "bg-[#6486C6] hover:bg-[#4A71BC]"
                      : "bg-[#364E7D] hover:bg-[#2C4067]"
                  }`}
                >
                  {isSpeaking
                    ? "■ Stop audio"
                    : "🔊 Listen"}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-5 text-[17px] font-medium leading-8 text-[#395384]">
            {passageParagraphs.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}
          </div>

          <div className="mt-6 rounded-2xl bg-[#F3F4F6] p-4">
            <p className="font-bold text-[#324976]">
              Reading tip
            </p>

            <p className="mt-1 leading-6 text-[#42609A]">
              Listen once without reading.
              Then listen again while following
              the passage and noticing word
              stress.
            </p>
          </div>
        </section>

        <section className="mt-8 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-[22px] border border-[#E3E5EA] bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-black text-[#324976]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#42609A]">
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
                        className="rounded-[26px] border border-[#E3E5EA] bg-white p-5 shadow-md sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-black text-[#6486C6]">
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

                        <p className="mt-4 text-lg font-bold leading-7 text-[#2F446D]">
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
                                "border-[#DBE0EA] bg-[#FBFBFB] text-[#395384] hover:border-[#7D99CF] hover:bg-[#F2F3F6]";

                              if (
                                isSelected &&
                                !submitted
                              ) {
                                optionStyle =
                                  "border-[#4869A8] bg-[#E8EBEF] text-[#293B5E]";
                              }

                              if (
                                submitted &&
                                isCorrect
                              ) {
                                optionStyle =
                                  "border-[#4869A8] bg-[#E6E8ED] text-[#2A3D61]";
                              }

                              if (
                                submitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionStyle =
                                  "border-[#9DAED0] bg-[#EEF0F3] text-[#44639F]";
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
                                ? "bg-[#F0F1F4]"
                                : "bg-[#F7F8F9]"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                selectedIsCorrect
                                  ? "text-[#324976]"
                                  : "text-[#446CB9]"
                              }`}
                            >
                              {selectedIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this answer"}
                            </p>

                            <p className="mt-1 leading-6 text-[#42609A]">
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
          <p className="mt-7 rounded-2xl border border-[#ABBAD6] bg-[#F0F1F4] p-4 text-center font-bold text-[#375080]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] border border-[#D0D7E3] bg-[#EAECF0] p-7 text-center shadow-md">
            <p className="font-bold uppercase tracking-[0.16em] text-[#6486C6]">
              Your result
            </p>

            <p className="mt-2 text-5xl font-black text-[#324976]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#2F446D]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#42609A]">
              {scorePercent >= 85
                ? "Excellent! You understood the passage very well."
                : scorePercent >= 65
                  ? "Good work! Read the explanations and review the difficult questions."
                  : "Read and listen to the passage again before trying one more time."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#364E7D] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#2C4067]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#6486C6] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#4A71BC]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Reading2Page;