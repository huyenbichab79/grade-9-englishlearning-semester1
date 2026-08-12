import {
  useEffect,
  useState,
} from "react";

const passageParagraphs = [
  `At the beginning of the school year, Minh thought healthy living only meant doing physical exercise. However, his daily routine was not healthy at all. He often stayed up past midnight to finish assignments, skipped breakfast, and checked his phone every few minutes while studying. When several deadlines came at the same time, he felt stressed out and found it difficult to concentrate.`,

  `One day, Minh decided to talk to the school counsellor. She advised him to make a weekly schedule and give priority to urgent tasks. She also suggested studying in forty-minute sessions, taking a short break between sessions, and turning off phone notifications. If Minh planned his work carefully, he could complete his assignments without staying up late.`,

  `At first, following the new routine was not easy. Minh sometimes wanted to return to his old habits. However, after two weeks, he began to notice positive changes. He completed most assignments before their deadlines, slept for about eight hours each night, and had enough time to work out. He also started eating a well-balanced breakfast before school.`,

  `Minh still feels anxious occasionally, especially before an important test. When this happens, he practises deep breathing or talks to someone he trusts. He now understands that healthy living is not only about physical fitness. It also involves mental health, time management, proper rest, and supportive relationships. If teenagers make small healthy changes, they may become more alert, optimistic, and confident.`,
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
          "What problem did Minh have at the beginning of the school year?",
        answer:
          "He followed an unhealthy routine and often felt stressed.",
        options: [
          "He followed an unhealthy routine and often felt stressed.",
          "He exercised too much every day.",
          "He had no school assignments.",
        ],
        explanation:
          "Minh stayed up late, skipped breakfast, and became stressed when deadlines approached.",
      },
      {
        id: "main-2",
        level: "Basic",
        prompt:
          "Who gave Minh advice about his routine?",
        answer:
          "The school counsellor",
        options: [
          "The school counsellor",
          "A sports coach",
          "A restaurant manager",
        ],
        explanation:
          "Minh talked to the school counsellor, who suggested several healthier habits.",
      },
      {
        id: "main-3",
        level: "Basic",
        prompt:
          "What did Minh do after studying for forty minutes?",
        answer:
          "He took a short break.",
        options: [
          "He took a short break.",
          "He checked social media for an hour.",
          "He stopped studying for the day.",
        ],
        explanation:
          "The counsellor recommended forty-minute study sessions followed by short breaks.",
      },
      {
        id: "main-4",
        level: "Intermediate",
        prompt:
          "What positive change did Minh notice after two weeks?",
        answer:
          "He completed work earlier and had more time for healthy activities.",
        options: [
          "He completed work earlier and had more time for healthy activities.",
          "He stopped doing all schoolwork.",
          "He began staying up later than before.",
        ],
        explanation:
          "Minh finished assignments before deadlines, slept more, exercised, and ate breakfast.",
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
          "Minh regularly stayed up late to complete assignments.",
        answer: "True",
        options: ["True", "False"],
        explanation:
          "The first paragraph says that he often stayed up past midnight.",
      },
      {
        id: "tf-2",
        level: "Intermediate",
        prompt:
          "The counsellor advised Minh to give priority to urgent tasks.",
        answer: "True",
        options: ["True", "False"],
        explanation:
          "Prioritising urgent tasks was one of the counsellor’s suggestions.",
      },
      {
        id: "tf-3",
        level: "Intermediate",
        prompt:
          "Minh was advised to stop all physical and social activities.",
        answer: "False",
        options: ["True", "False"],
        explanation:
          "The new routine allowed him to work out and maintain supportive relationships.",
      },
      {
        id: "tf-4",
        level: "Intermediate",
        prompt:
          "Minh uses deep breathing or talks to someone when he feels anxious.",
        answer: "True",
        options: ["True", "False"],
        explanation:
          "These are the two strategies mentioned in the final paragraph.",
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
          "The phrase “give priority to urgent tasks” is closest in meaning to ______.",
        answer:
          "do the most important tasks first",
        options: [
          "do the most important tasks first",
          "delay every difficult task",
          "complete only enjoyable activities",
        ],
        explanation:
          "Giving priority to something means treating it as especially important.",
      },
      {
        id: "language-2",
        level: "Advanced",
        prompt:
          "The phrase “stressed out” in paragraph one means ______.",
        answer:
          "very worried and under pressure",
        options: [
          "very worried and under pressure",
          "physically strong and energetic",
          "calm and completely relaxed",
        ],
        explanation:
          "Minh felt pressure because several deadlines came at the same time.",
      },
      {
        id: "language-3",
        level: "Advanced",
        prompt:
          "What can be inferred from Minh’s experience?",
        answer:
          "Healthy habits can improve both school performance and well-being.",
        options: [
          "Healthy habits can improve both school performance and well-being.",
          "Students should avoid all difficult assignments.",
          "Physical exercise is the only part of healthy living.",
        ],
        explanation:
          "His new habits helped him finish work, sleep better, exercise, and manage anxiety.",
      },
      {
        id: "language-4",
        level: "Advanced",
        prompt:
          "Which title best matches the passage?",
        answer:
          "Small Changes, Better Balance",
        options: [
          "Small Changes, Better Balance",
          "Why Teenagers Should Stop Studying",
          "A Guide to Staying Up Late",
        ],
        explanation:
          "The passage shows how several small changes helped Minh achieve a healthier balance.",
      },
    ],
  },
];

const levelStyles = {
  Basic:
    "border-[#DFC9D3] bg-[#F4EFF1] text-[#9B3B68]",
  Intermediate:
    "border-[#E3D0D9] bg-[#F5F2F3] text-[#B34277]",
  Advanced:
    "border-[#E3D0D9] bg-[#F4F0F2] text-[#9C3B68]",
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

function Reading3Page({
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
          const voiceStillExists =
            voicesToShow.some(
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
    <main className="min-h-screen bg-[#FAF9F9] px-4 py-6 text-[#732C4D] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="rounded-[32px] border border-white bg-[#F0EBED] p-6 shadow-lg sm:p-8">
          <button
            type="button"
            onClick={handleBack}
            className="rounded-xl bg-white px-4 py-2 font-bold text-[#AD4274] shadow-sm transition hover:-translate-y-0.5"
          >
            ← Back to Unit 3
          </button>

          <p className="mt-6 font-bold uppercase tracking-[0.18em] text-[#C76693]">
            Unit 3 · Activity 4
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Reading
          </h1>

          <p className="mt-3 max-w-2xl text-lg font-medium leading-7 text-[#A84070]">
            Read and listen to a story about
            improving time management, reducing
            stress, and creating a healthier
            daily routine.
          </p>
        </header>

        <section className="mt-7 rounded-[28px] border border-[#EBDDE4] bg-white p-5 shadow-md sm:p-7">
          <div className="border-b border-[#EDE6E9] pb-5">
            <p className="font-bold uppercase tracking-[0.14em] text-[#C76693]">
              Reading passage
            </p>

            <h2 className="mt-1 text-2xl font-black text-[#732C4D]">
              Small Changes, Better Balance
            </h2>

            <div className="mt-5 rounded-2xl bg-[#F6F2F4] p-4">
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <label
                    htmlFor="reading3-voice"
                    className="block text-sm font-bold text-[#AD4274]"
                  >
                    American English voice
                  </label>

                  <select
                    id="reading3-voice"
                    value={selectedVoiceURI}
                    onChange={
                      handleVoiceChange
                    }
                    disabled={
                      availableVoices.length ===
                      0
                    }
                    className="mt-2 w-full rounded-xl border border-[#E1CCD6] bg-white px-4 py-3 font-medium text-[#973A65] outline-none transition focus:border-[#C15889]"
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

                  <p className="mt-2 text-sm leading-5 text-[#8F7682]">
                    The app prioritises a likely
                    female American voice when
                    one is available.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleListen}
                  className={`rounded-xl px-5 py-3 font-bold text-white shadow-sm transition ${
                    isSpeaking
                      ? "bg-[#C76693] hover:bg-[#BD4D81]"
                      : "bg-[#AD4274] hover:bg-[#923761]"
                  }`}
                >
                  {isSpeaking
                    ? "■ Stop audio"
                    : "🔊 Listen"}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-5 text-[17px] font-medium leading-8 text-[#943863]">
            {passageParagraphs.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}
          </div>

          <div className="mt-6 rounded-2xl bg-[#F5F1F3] p-4">
            <p className="font-bold text-[#B34277]">
              Reading tip
            </p>

            <p className="mt-1 leading-6 text-[#A84070]">
              Listen once for the main idea.
              Then read again and underline
              words connected to problems,
              advice, and results.
            </p>
          </div>
        </section>

        <section className="mt-8 space-y-10">
          {exerciseGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 rounded-[22px] border border-[#EBDDE4] bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-black text-[#AD4274]">
                  {group.title}
                </h2>

                <p className="mt-2 font-medium text-[#A84070]">
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
                        className="rounded-[26px] border border-[#EBDDE4] bg-white p-5 shadow-md sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-black text-[#C76693]">
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

                        <p className="mt-4 text-lg font-bold leading-7 text-[#732C4D]">
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
                                "border-[#E9DBE2] bg-[#FCFBFB] text-[#973A65] hover:border-[#D181A6] hover:bg-[#F6F2F4]";

                              if (
                                isSelected &&
                                !submitted
                              ) {
                                optionStyle =
                                  "border-[#C15889] bg-[#F0EBED] text-[#8A345C]";
                              }

                              if (
                                submitted &&
                                isCorrect
                              ) {
                                optionStyle =
                                  "border-[#C35E8D] bg-[#F1ECEE] text-[#813156]";
                              }

                              if (
                                submitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionStyle =
                                  "border-[#C990AB] bg-[#F3EEF0] text-[#AA4172]";
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
                                ? "bg-[#F3EEF0]"
                                : "bg-[#F6F3F4]"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                selectedIsCorrect
                                  ? "text-[#923862]"
                                  : "text-[#B44378]"
                              }`}
                            >
                              {selectedIsCorrect
                                ? "✓ Correct"
                                : "✗ Review this answer"}
                            </p>

                            <p className="mt-1 leading-6 text-[#A84070]">
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
          <p className="mt-7 rounded-2xl border border-[#D8ADC1] bg-[#F4EFF1] p-4 text-center font-bold text-[#88345B]">
            {message}
          </p>
        )}

        {submitted && (
          <section className="mt-7 rounded-[28px] border border-[#E4D2DA] bg-[#F3EEF0] p-7 text-center shadow-md">
            <p className="font-bold uppercase tracking-[0.16em] text-[#C76693]">
              Your result
            </p>

            <p className="mt-2 text-5xl font-black text-[#AD4274]">
              {correctAnswers}/
              {totalQuestions}
            </p>

            <p className="mt-2 text-lg font-bold text-[#732C4D]">
              You scored {scorePercent}%.
            </p>

            <p className="mt-3 font-medium text-[#A84070]">
              {scorePercent >= 85
                ? "Excellent! You understood the passage very well."
                : scorePercent >= 65
                  ? "Good work! Review the explanations for the difficult questions."
                  : "Listen and read the passage again before trying one more time."}
            </p>
          </section>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-[#AD4274] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#923761]"
            >
              Submit Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTryAgain}
              className="rounded-2xl bg-[#C76693] px-8 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#BD4D81]"
            >
              Try Again
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Reading3Page;