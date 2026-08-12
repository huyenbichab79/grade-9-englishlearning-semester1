import { useState } from "react";
const quizQuestions = [
  {
    category: "Vocabulary in Context",
    question:
      'An says, “I prefer virtual activities because I can join them without leaving home.” What does “virtual” mean?',
    options: [
      "Taking place online",
      "Taking place outdoors",
      "Requiring physical strength",
      "Involving handmade products",
    ],
    answer: "Taking place online",
  },
  {
    category: "Vocabulary in Context",
    question:
      'Linh often socialises with other students at the community centre. What does “socialises” mean?',
    options: [
      "Spends time communicating with people",
      "Studies alone for an examination",
      "Avoids meeting unfamiliar people",
      "Completes difficult household chores",
    ],
    answer: "Spends time communicating with people",
  },
  {
    category: "Vocabulary",
    question:
      "Which sentence shows that someone does not dislike an activity?",
    options: [
      "I do not mind helping my brother.",
      "I detest helping my brother.",
      "I refuse to help my brother.",
      "I avoid helping my brother.",
    ],
    answer: "I do not mind helping my brother.",
  },
  {
    category: "Grammar",
    question:
      "Choose the sentence containing an incorrect expression.",
    options: [
      "My cousin is interested on making models.",
      "My cousin enjoys making models.",
      "My cousin is fond of making models.",
      "My cousin does not mind making models.",
    ],
    answer: "My cousin is interested on making models.",
  },
  {
    category: "Grammar",
    question:
      "Choose the best way to complete the sentence: “My parents would rather ______ outdoors than ______ television all day.”",
    options: [
      "walk / watch",
      "walking / watching",
      "to walk / to watch",
      "walked / watched",
    ],
    answer: "walk / watch",
  },
  {
    category: "Grammar",
    question:
      "Which sentence has the same meaning as “Lan likes drawing more than playing computer games”?",
    options: [
      "Lan prefers drawing to playing computer games.",
      "Lan prefers drawing than playing computer games.",
      "Lan is interested drawing to playing computer games.",
      "Lan dislikes both drawing and playing computer games.",
    ],
    answer: "Lan prefers drawing to playing computer games.",
  },
  {
    category: "Grammar",
    question:
      "Choose the correct sentence.",
    options: [
      "Although he was tired, he continued working on his DIY project.",
      "Although he was tired, but he continued working on his DIY project.",
      "Although he tired, he continued work on his DIY project.",
      "Although being tired, but he continued working on his DIY project.",
    ],
    answer:
      "Although he was tired, he continued working on his DIY project.",
  },
  {
    category: "Reading",
    question:
      "Mai joined a weekend craft club. At first, she knew nobody, but after several meetings she made new friends and became more confident. What was an important benefit of the club?",
    options: [
      "It improved her social confidence.",
      "It helped her avoid other people.",
      "It allowed her to stop studying.",
      "It made her spend more time online.",
    ],
    answer: "It improved her social confidence.",
  },
  {
    category: "Reading",
    question:
      "Tom spends nearly four hours a day playing online games. He often sleeps late and feels tired at school. What is the best conclusion?",
    options: [
      "His leisure habit is affecting his daily life.",
      "Online games always improve school results.",
      "Sleeping late helps him concentrate better.",
      "He has a healthy balance of activities.",
    ],
    answer: "His leisure habit is affecting his daily life.",
  },
  {
    category: "Writing",
    question:
      "Choose the best sentence to begin a paragraph about a favourite leisure activity.",
    options: [
      "Reading is my favourite leisure activity because it is both relaxing and useful.",
      "Reading books yesterday and tomorrow in my room.",
      "My favourite because reading very interesting.",
      "There are many books, and leisure, and activities.",
    ],
    answer:
      "Reading is my favourite leisure activity because it is both relaxing and useful.",
  },
  {
    category: "Writing",
    question:
      "Choose the best combination of the two sentences: “Nam likes outdoor activities. He rarely stays at home at weekends.”",
    options: [
      "Nam likes outdoor activities, so he rarely stays at home at weekends.",
      "Nam likes outdoor activities, but he rarely stays at home at weekends.",
      "Nam likes outdoor activities because rarely stays at home at weekends.",
      "Although Nam likes outdoor activities, so he rarely stays at home at weekends.",
    ],
    answer:
      "Nam likes outdoor activities, so he rarely stays at home at weekends.",
  },
  {
    category: "Final Challenge",
    question:
      "Choose the sentence that is correct in grammar, meaning, and word choice.",
    options: [
      "Instead of spending all his free time online, Minh takes part in outdoor activities to maintain a healthy balance.",
      "Instead of spend all his free time online, Minh takes part outdoor activities for maintain a healthy balance.",
      "Instead spending all his free time online, Minh take part in outdoor activities to maintaining a healthy balance.",
      "Instead of spending all his free time online, but Minh takes part in outdoor activities maintain a healthy balance.",
    ],
    answer:
      "Instead of spending all his free time online, Minh takes part in outdoor activities to maintain a healthy balance.",
  },
];
function Quiz1Page({ onBack }) {
      const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
      
    const currentQuizQuestion = quizQuestions[currentQuestion];

  const selectAnswer = (option) => {
    setSelectedAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion]: option,
    }));
  };
  const goToNextQuestion = () => {
  if (!selectedAnswers[currentQuestion]) {
    return;
  }

  if (currentQuestion < quizQuestions.length - 1) {
    setCurrentQuestion(
      (previousQuestion) => previousQuestion + 1
    );
  } else {
    setQuizFinished(true);
  }
};
  const quizScore = quizQuestions.reduce(
    (score, question, index) =>
      selectedAnswers[index] === question.answer
        ? score + 1
        : score,
    0
  );
    const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuizFinished(false);
  };  
return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={onBack}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-bold text-slate-700 hover:bg-slate-100"
        >
          ← Back to Unit 1
        </button>

        <section className="mt-6 rounded-3xl border border-violet-200 bg-white p-8">
          <p className="text-sm font-bold uppercase tracking-wider text-violet-700">
            Unit 1 • Quiz
          </p>

          <h1 className="mt-3 text-3xl font-black text-slate-900">
            Leisure Activities
          </h1>

          <p className="mt-3 text-slate-600">
            Complete the final assessment and review everything you
            have learned in Unit 1.
          </p>
        </section>

      {quizFinished ? (
  <section className="mt-6 rounded-3xl border border-violet-200 bg-white p-8 text-center">
    <p className="text-6xl">
      {quizScore >= 10 ? "🏆" : quizScore >= 7 ? "🌟" : "📘"}
    </p>

    <p className="mt-4 text-sm font-bold uppercase tracking-wider text-violet-700">
      Quiz Completed
    </p>

    <h2 className="mt-2 text-3xl font-black text-slate-900">
      {quizScore >= 10
        ? "Excellent Work!"
        : quizScore >= 7
          ? "Well Done!"
          : "Keep Practising!"}
    </h2>

    <p className="mt-4 text-slate-600">
      You answered {quizScore} out of {quizQuestions.length} questions
      correctly.
    </p>

    <div className="mx-auto mt-6 max-w-sm rounded-2xl bg-violet-50 p-6">
      <p className="text-sm font-bold text-violet-700">
        Final Score
      </p>

      <p className="mt-2 text-5xl font-black text-violet-800">
        {quizScore}/{quizQuestions.length}
      </p>

      <p className="mt-2 font-bold text-slate-600">
        {Math.round(
          (quizScore / quizQuestions.length) * 100
        )}
        %
      </p>
    </div>

    <button
      type="button"
      onClick={restartQuiz}
      className="mt-7 rounded-xl bg-violet-600 px-7 py-3 font-black text-white hover:bg-violet-700"
    >
      Try Again
    </button>
  </section>
) : (
  <>
    <section className="mt-6 rounded-3xl border border-violet-200 bg-white p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-violet-700">
            Unit 1 Final Quiz
          </p>

          <h2 className="mt-1 text-2xl font-black text-slate-900">
            Question {currentQuestion + 1} of{" "}
            {quizQuestions.length}
          </h2>
        </div>

        <span className="rounded-xl bg-violet-50 px-4 py-2 font-bold text-violet-700">
          {currentQuizQuestion.category}
        </span>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-violet-500 transition-all"
          style={{
            width: `${
              ((currentQuestion + 1) /
                quizQuestions.length) *
              100
            }%`,
          }}
        />
      </div>
    </section>

    <section className="mt-5 rounded-3xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-black leading-relaxed text-slate-900">
        {currentQuizQuestion.question}
      </h2>

      <div className="mt-6 grid gap-3">
        {currentQuizQuestion.options.map((option) => {
          const isSelected =
            selectedAnswers[currentQuestion] === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => selectAnswer(option)}
              className={`rounded-2xl border-2 px-5 py-4 text-left font-bold transition ${
                isSelected
                  ? "border-violet-500 bg-violet-50 text-violet-800"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          disabled={!selectedAnswers[currentQuestion]}
          onClick={goToNextQuestion}
          className="rounded-xl bg-violet-600 px-7 py-3 font-black text-white hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {currentQuestion === quizQuestions.length - 1
            ? "Submit Quiz"
            : "Next Question →"}
        </button>
      </div>
    </section>
  </>
)}  
      </div>
    </main>
  );
}

export default Quiz1Page;