import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function TeacherDashboard({
  teacherInformation,
}) {
    const [students, setStudents] = useState([]);
  const [loadingStudents, setLoadingStudents] =
    useState(true);
  const [studentError, setStudentError] =
    useState("");
    const [progressRecords, setProgressRecords] =
  useState([]);
const [loadingProgress, setLoadingProgress] =
  useState(true);
const [progressError, setProgressError] =
  useState("");
    const [selectedClass, setSelectedClass] =
  useState("all");

const visibleStudents =
  selectedClass === "all"
    ? students
    : students.filter(
        (student) =>
          student.studentClass === selectedClass
      );
      useEffect(() => {
    let isMounted = true;

    const loadStudents = async () => {
      try {
        setLoadingStudents(true);
        setStudentError("");

        const studentsSnapshot = await getDocs(
          collection(db, "users")
        );

        const studentList = studentsSnapshot.docs
          .map((studentDocument) => ({
            id: studentDocument.id,
            ...studentDocument.data(),
          }))
          .filter(
            (student) => student.role === "student"
          )
          .sort((studentA, studentB) =>
            (studentA.fullName || "").localeCompare(
              studentB.fullName || ""
            )
          );

        if (isMounted) {
          setStudents(studentList);
        }
      } catch (firebaseError) {
        console.error(
          "Unable to load students:",
          firebaseError
        );

        if (isMounted) {
          setStudentError(
            "Unable to load the student list."
          );
        }
      } finally {
        if (isMounted) {
          setLoadingStudents(false);
        }
      }
    };

    loadStudents();

    return () => {
      isMounted = false;
    };
  }, []);
  useEffect(() => {
  let isMounted = true;

  const loadProgress = async () => {
    try {
      setLoadingProgress(true);
      setProgressError("");

      const progressSnapshot = await getDocs(
        collection(db, "progress")
      );

      const progressList =
        progressSnapshot.docs.map(
          (progressDocument) => ({
            id: progressDocument.id,
            ...progressDocument.data(),
          })
        );

      if (isMounted) {
        setProgressRecords(progressList);
      }
    } catch (firebaseError) {
      console.error(
        "Unable to load progress:",
        firebaseError
      );

      if (isMounted) {
        setProgressError(
          "Unable to load student progress."
        );
      }
    } finally {
      if (isMounted) {
        setLoadingProgress(false);
      }
    }
  };

  loadProgress();

  return () => {
    isMounted = false;
  };
}, []);
const getStudentBestScore = (studentId) => {
  const getStudentActivityProgress = (
  studentId,
  unitId,
  activityId
) => {
  return (
    progressRecords.find(
      (record) =>
        record.uid === studentId &&
        record.unitId === unitId &&
        record.activityId === activityId
    ) || null
  );
};
  const studentProgress = progressRecords.filter(
    (record) => record.uid === studentId
  );

  if (studentProgress.length === 0) {
    return null;
  }

  return Math.max(
    ...studentProgress.map(
      (record) => Number(record.bestScore) || 0
    )
  );
};
const getStudentActivityProgress = (
  studentId,
  unitId,
  activityId
) => {
  return (
    progressRecords.find(
      (record) =>
        record.uid === studentId &&
        record.unitId === unitId &&
        record.activityId === activityId
    ) || null
  );
};
  const handleSignOut = async () => {
    await signOut(auth);
    window.location.reload();
  };

  return (
    <main className="min-h-screen bg-[#FFF9F1] px-4 py-8">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-[#F1D5BD] bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="font-bold text-[#E47B4E]">
                TEACHER DASHBOARD
              </p>

              <h1 className="mt-2 text-3xl font-black text-[#345967]">
                Welcome,{" "}
                {teacherInformation?.fullName ||
                  "Teacher"}
              </h1>

              <p className="mt-2 text-[#66777D]">
                {teacherInformation?.email}
              </p>
            </div>

            <button
              type="button"
              onClick={handleSignOut}
              className="rounded-xl bg-[#E47B4E] px-5 py-3 font-bold text-white"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-[#D8E8E1] bg-white p-8 text-center shadow-sm">
          <div className="text-5xl">📊</div>

          <h2 className="mt-4 text-2xl font-black text-[#345967]">
            Student Progress
          </h2>

          <p className="mt-2 text-[#66777D]">
  Classes 9.1, 9.2, 9.3 and 9.4
</p>

{loadingStudents && (
  <p className="mt-5 font-bold text-[#E47B4E]">
    Loading students...
  </p>
)}

{!loadingStudents && studentError && (
  <p className="mt-5 rounded-xl bg-rose-50 p-3 font-bold text-rose-700">
    {studentError}
  </p>
)}

{!loadingStudents && !studentError && (
  <div className="mt-6">
    <div className="flex flex-wrap justify-center gap-3">
      {["all", "9.1", "9.2", "9.3", "9.4"].map(
        (className) => (
          <button
            key={className}
            type="button"
            onClick={() =>
              setSelectedClass(className)
            }
            className={`rounded-xl border px-4 py-2 font-bold transition ${
              selectedClass === className
                ? "border-[#E47B4E] bg-[#FFF0E5] text-[#C9633C]"
                : "border-[#D8E8E1] bg-white text-[#345967]"
            }`}
          >
            {className === "all"
              ? "All Students"
              : `Class ${className}`}
          </button>
        )
      )}
    </div>

    <div className="mt-6">
  <p className="text-xl font-black text-[#345967]">
    Students shown: {visibleStudents.length}
  </p>
{loadingProgress && (
  <p className="mt-3 font-bold text-[#E47B4E]">
    Loading progress...
  </p>
)}

{!loadingProgress && progressError && (
  <p className="mt-3 rounded-xl bg-rose-50 p-3 font-bold text-rose-700">
    {progressError}
  </p>
)}

{!loadingProgress && !progressError && (
  <p className="mt-3 font-bold text-[#27805A]">
    Saved progress records: {progressRecords.length}
  </p>
  
)}
  {visibleStudents.length === 0 ? (
    <div className="mt-5 rounded-2xl border border-dashed border-[#D8E8E1] bg-[#F8FCFA] p-6">
      <p className="font-bold text-[#66777D]">
        No students found in this class.
      </p>
    </div>
  ) : (
    <div className="mt-5 grid gap-4 text-left">
      {visibleStudents.map((student, index) => (
        <div
          key={student.id}
          className="rounded-2xl border border-[#D8E8E1] bg-[#F8FCFA] p-5"
        >
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-bold text-[#E47B4E]">
                STUDENT {index + 1}
              </p>

              <h3 className="mt-1 text-lg font-black text-[#345967]">
                {student.fullName || "Unknown Student"}
              </h3>

              <p className="mt-1 text-sm text-[#66777D]">
                {student.email || "No email"}
              </p>
              <p className="mt-3 font-bold text-[#27805A]">
  Best score:{" "}
  {getStudentBestScore(student.id) === null
    ? "No progress yet"
    : `${getStudentBestScore(student.id)}%`}
</p>
<div className="mt-3 rounded-xl bg-[#FFF7EC] p-3">
  <p className="font-bold text-[#345967]">
    Unit 1 – Vocabulary Match
  </p>

  <p className="mt-1 text-sm font-bold text-[#E47B4E]">
    {getStudentActivityProgress(
      student.id,
      "unit1",
      "vocabulary-match"
    )
      ? `${getStudentActivityProgress(
          student.id,
          "unit1",
          "vocabulary-match"
        ).bestScore}%`
      : "Not started"}
  </p>

</div>
            </div>

            <span className="w-fit rounded-full bg-[#FFF0E5] px-4 py-2 font-bold text-[#C9633C]">
              Class {student.studentClass || "—"}
            </span>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
  </div>
)}
        </div>
      </section>
    </main>
  );
}