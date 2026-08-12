import { useState } from "react";
import StudentStartPage from "./pages/StudentStartPage";
import Unit1Page from "./pages/Unit1Page";
import Unit2Page from "./pages/Unit2Page";
import Unit3Page from "./pages/Unit3Page";
import Unit4Page from "./pages/Unit4Page";
import Unit5Page from "./pages/Unit5Page";
import Unit6Page from "./pages/Unit6Page.jsx";
import Grade9HomePage from "./pages/Grade9HomePage.jsx";
import TeacherDashboard from "./pages/TeacherDashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [studentInformation, setStudentInformation] = useState(null);
  const [teacherInformation, setTeacherInformation] = useState(null);
  const isUnit2Open = false;
const isUnit3Open = false;
const isUnit4Open = false;
const isUnit5Open = false;
const isUnit6Open = false;
  const units = [
    {
      id: 1,
      title: "Leisure Activities",
      description: "Khám phá các hoạt động giải trí",
      icon: "🎮",
      progress: 0,
      score: 0,
      wrong: 0,
      completed: false,
      cardClass:
        "border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/10",
      iconClass: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Life in the Countryside",
      description: "Tìm hiểu cuộc sống ở vùng nông thôn",
      icon: "🌾",
      progress: 0,
      score: 0,
      wrong: 0,
      completed: false,
      cardClass:
        "border-emerald-400/30 bg-gradient-to-br from-emerald-500/20 to-green-500/10",
      iconClass: "from-emerald-500 to-green-500",
    },
    {
      id: 3,
      title: "Teenagers",
      description: "Khám phá cuộc sống của tuổi thiếu niên",
      icon: "🧑‍🤝‍🧑",
      progress: 0,
      score: 0,
      wrong: 0,
      completed: false,
      cardClass:
        "border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-purple-500/10",
      iconClass: "from-violet-500 to-purple-500",
    },
    {
      id: 4,
      title: "Ethnic Groups of Viet Nam",
      description: "Tìm hiểu văn hóa các dân tộc Việt Nam",
      icon: "🏞️",
      progress: 0,
      score: 0,
      wrong: 0,
      completed: false,
      cardClass:
        "border-amber-400/30 bg-gradient-to-br from-amber-500/20 to-yellow-500/10",
      iconClass: "from-amber-500 to-yellow-500",
    },
    {
      id: 5,
      title: "Our Customs and Traditions",
      description: "Tìm hiểu phong tục và truyền thống",
      icon: "🏮",
      progress: 0,
      score: 0,
      wrong: 0,
      completed: false,
      cardClass:
        "border-rose-400/30 bg-gradient-to-br from-rose-500/20 to-pink-500/10",
      iconClass: "from-rose-500 to-pink-500",
    },
    {
      id: 6,
      title: "Lifestyles",
      description: "Khám phá các phong cách sống hiện đại",
      icon: "🌿",
      progress: 0,
      score: 0,
      wrong: 0,
      completed: false,
      cardClass:
        "border-teal-400/30 bg-gradient-to-br from-teal-500/20 to-cyan-500/10",
      iconClass: "from-teal-500 to-cyan-500",
    },
  ];

   if (teacherInformation) {
  return (
    <TeacherDashboard
      teacherInformation={teacherInformation}
    />
  );
}

if (!studentInformation) {
  return (
    <StudentStartPage
      onStart={(information) => {
        setStudentInformation(information);
      }}
      onTeacher={(information) => {
        setTeacherInformation(information);
      }}
    />
  );
}


return (
  <Grade9HomePage
    studentInformation={studentInformation}
  />
);
  if (currentPage === "unit1") {
    return (
      <Unit1Page
        onBack={() => setCurrentPage("home")}
      />
    );
  }
  if (currentPage === "unit2") {
  return (
    <Unit2Page
      onBack={() => setCurrentPage("home")}
    />
  );
}
if (currentPage === "unit3") {
  return (
    <Unit3Page
      onBack={() => setCurrentPage("home")}
    />
  );
}
if (currentPage === "unit4") {
  return <Unit4Page onBack={() => setCurrentPage("home")} />;
}
if (currentPage === "unit4") {
  return <Unit4Page onBack={() => setCurrentPage("home")} />;
}

if (currentPage === "unit5") {
  return <Unit5Page onBack={() => setCurrentPage("home")} />;
}

if (currentPage === "unit6") {
  return (
    <Unit6Page
      onBack={() => setCurrentPage("home")}
    />
  );
}
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-4 py-6 text-white">
      {/* Họa tiết nền */}
      <div className="mt-5 flex items-center justify-between rounded-xl border border-blue-400/20 bg-blue-900/70 px-4 py-3 text-sm font-bold text-blue-100 transition hover:bg-blue-800" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <section className="relative mx-auto max-w-6xl">
        {/* Thanh trên cùng */}
        <nav className="mb-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-xl shadow-lg shadow-blue-500/30">
              AI
            </div>

            <div>
              <p className="font-bold text-white">AI English Game</p>
              <p className="text-xs text-slate-400">
                Smart English Learning
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
              ⭐ 1,250 XP
            </div>

            <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300">
              🏆 Level 8
            </div>
          </div>
        </nav>

        {/* Phần giới thiệu */}
        <header className="mb-8 rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-600/25 via-indigo-600/15 to-cyan-500/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                Tiếng Anh 8
              </span>

              <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                Global Success 8
              </h1>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
  Tiếng Anh 8 • Global Success • Semester I
</p>

              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Học từ vựng, ngữ pháp và các kỹ năng tiếng Anh thông qua trò
                chơi tương tác, bài kiểm tra và hệ thống theo dõi tiến độ.
              </p>

              <div className="mt-5 flex flex-wrap gap-0 text-sm">
                <span className="rounded-full bg-white/10 px-4 py-2 text-slate-200">
                  📖 Learn
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-slate-200">
                  ✏️ Practice
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-slate-200">
                  🎮 Play
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-slate-200">
                  🚀 Improve
                </span>
              </div>
            </div>

            {/* Thống kê */}
            <div className="grid grid-cols-2 gap-3 lg:w-80">
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Total Units
                </p>
                <p className="mt-2 text-3xl font-black text-white">6</p>
              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                <p className="text-xs uppercase tracking-wider text-emerald-300">
                  Completed
                </p>
                <p className="mt-2 text-3xl font-black text-emerald-400">3</p>
              </div>

              <div className="rounded-2xl border border-yellow-400/20 bg-yellow-500/10 p-4">
                <p className="text-xs uppercase tracking-wider text-yellow-200">
                  Average Score
                </p>
                <p className="mt-2 text-3xl font-black text-yellow-400">0</p>
              </div>

              <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4">
                <p className="text-xs uppercase tracking-wider text-red-200">
                  Wrong Answers
                </p>
                <p className="mt-2 text-3xl font-black text-red-400">0</p>
              </div>
            </div>
          </div>
        </header>

        {/* Tiêu đề danh sách Unit */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Semester I
            </p>

            <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
              Chọn Unit để bắt đầu
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              6 bài học trong chương trình Global Success 8.
            </p>
          </div>

          <button
            type="button"
            className="w-fit rounded-xl bg-blue-600 px-5 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
          >
            🚀 Tiếp tục học
          </button>
        </div>

        {/* Danh sách 6 Unit */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {units.map((unit) => (
            <article
              key={unit.id}
              className={`group rounded-3xl border p-5 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-6 ${unit.cardClass}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-3xl shadow-lg ${unit.iconClass}`}
                  >
                    {unit.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">
                      Unit {String(unit.id).padStart(2, "0")}
                    </p>

                    <h3 className="mt-1 text-lg font-black leading-snug text-white md:text-xl">
                      {unit.title}
                    </h3>
                  </div>
                </div>

                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                    unit.completed
                      ? "bg-emerald-400/20 text-emerald-300"
                      : "bg-blue-400/20 text-blue-200"
                  }`}
                >
                  {unit.completed ? "✓ Hoàn thành" : "Đang học"}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {unit.description}
              </p>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                Vocabulary • Grammar • Listening • Speaking • Reading • Writing
              </p>

              {/* Thanh tiến độ */}
              <div className="mt-5">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-slate-300">Progress</span>
                  <span className="font-bold text-blue-300">
                    {unit.progress}%
                  </span>
                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
                    style={{ width: `${unit.progress}%` }}
                  />
                </div>
              </div>

              {/* Điểm số */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-slate-950/40 p-3 text-center">
                  <p className="text-xs text-slate-400">Score</p>
                  <p className="mt-1 text-lg font-black text-yellow-400">
                    {unit.score}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950/40 p-3 text-center">
                  <p className="text-xs text-slate-400">Status</p>
                  <p className="mt-1 text-sm font-black text-emerald-400">
                    {unit.completed ? "Done" : "Learning"}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950/40 p-3 text-center">
                  <p className="text-xs text-slate-400">Wrong</p>
                  <p className="mt-1 text-lg font-black text-red-400">
                    {unit.wrong}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs font-medium text-slate-400">
                  🤖 Smart practice with AI
                </span>

                <button
                  type="button"
                  onClick={() => {
  if (unit.title === "Leisure Activities") {
  setCurrentPage("unit1");
} else if (unit.title === "Life in the Countryside") {
  if (isUnit2Open) {
    setCurrentPage("unit2");
  }
} else if (unit.title === "Teenagers") {
  if (isUnit3Open) {
    setCurrentPage("unit3");
  }
}
else if (unit.title === "Ethnic Groups of Viet Nam") {
  if (isUnit4Open) {
    setCurrentPage("unit4");
  }
}
else if (unit.title === "Our Customs and Traditions") {
  if (isUnit5Open) {
    setCurrentPage("unit5");
  }
} else if (unit.title === "Lifestyles") {
  if (isUnit6Open) {
    setCurrentPage("unit6");
  }
}

}}
                  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg transition duration-300 group-hover:translate-x-1 hover:bg-blue-500"
                >
                  Start Unit →
                </button>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-8 text-center text-sm text-slate-500">
          Small steps every day lead to big results ✨
        </footer>
      </section>
    </main>
  );
}

export default App;