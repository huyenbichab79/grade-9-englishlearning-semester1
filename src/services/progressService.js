import {
  collection,
  doc,
  getDoc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase";

/**
 * Lưu kết quả mỗi lần học sinh nộp bài.
 *
 * Ví dụ:
 * await saveActivityProgress({
 *   unitId: "unit1",
 *   activityId: "vocabulary-1",
 *   activityType: "vocabulary",
 *   correctAnswers: 8,
 *   totalQuestions: 10,
 * });
 */
export async function saveActivityProgress({
  unitId,
  activityId,
  activityType,
  correctAnswers,
  totalQuestions,
}) {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error("Student must sign in before saving progress.");
  }

  if (!unitId || !activityId || !activityType) {
    throw new Error("Missing activity information.");
  }

  if (
    !Number.isFinite(correctAnswers) ||
    !Number.isFinite(totalQuestions) ||
    totalQuestions <= 0
  ) {
    throw new Error("Invalid score information.");
  }

  const profileReference = doc(
    db,
    "users",
    currentUser.uid
  );

  const profileSnapshot = await getDoc(profileReference);

  if (!profileSnapshot.exists()) {
    throw new Error("Student profile was not found.");
  }

  const profile = profileSnapshot.data();

  const scorePercent = Math.round(
    (correctAnswers / totalQuestions) * 100
  );

  const progressId = [
    currentUser.uid,
    unitId,
    activityId,
  ].join("__");

  const progressReference = doc(
    db,
    "progress",
    progressId
  );

  const attemptReference = doc(
    collection(db, "attempts")
  );

  await runTransaction(db, async (transaction) => {
    const progressSnapshot = await transaction.get(
      progressReference
    );

    const commonData = {
      uid: currentUser.uid,
      fullName: profile.fullName,
      classCode: profile.studentClass,
      email: currentUser.email,
      unitId,
      activityId,
      activityType,
      correctAnswers,
      totalQuestions,
      latestScore: scorePercent,
 classCode: profile.studentClass,
      email: currentUser.email,
      unitId,
           completed: true,
      lastStudiedAt: serverTimestamp(),
    };

    if (progressSnapshot.exists()) {
      const previousData = progressSnapshot.data();
      const previousAttempts =
        Number(previousData.attempts) || 0;
      const previousBestScore =
        Number(previousData.bestScore) || 0;

      transaction.set(
        progressReference,
        {
          ...commonData,
          attempts: previousAttempts + 1,
          bestScore: Math.max(
            previousBestScore,
            scorePercent
          ),
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
    } else {
      transaction.set(progressReference, {
        ...commonData,
        attempts: 1,
        bestScore: scorePercent,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }

    transaction.set(attemptReference, {
      uid: currentUser.uid,
      fullName: profile.fullName,
      classCode: profile.studentClass,
      email: currentUser.email,
      unitId,
      activityId,
      activityType,
      correctAnswers,
      totalQuestions,
      score: scorePercent,
      submittedAt: serverTimestamp(),
    });
  });

  return {
    scorePercent,
    correctAnswers,
    totalQuestions,
  };
}