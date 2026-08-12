import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase";


/**
 * Lưu kết quả mỗi lần học sinh hoàn thành hoạt động
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
    throw new Error(
      "Student must sign in before saving progress."
    );
  }


  if (!unitId || !activityId || !activityType) {
    throw new Error(
      "Missing activity information."
    );
  }


  if (
    !Number.isFinite(correctAnswers) ||
    !Number.isFinite(totalQuestions) ||
    totalQuestions <= 0
  ) {
    throw new Error(
      "Invalid score information."
    );
  }


  const profileReference = doc(
    db,
    "users",
    currentUser.uid
  );


  const profileSnapshot = await getDoc(
    profileReference
  );


  if (!profileSnapshot.exists()) {
    throw new Error(
      "Student profile was not found."
    );
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


  await runTransaction(
    db,
    async (transaction) => {

      const progressSnapshot =
        await transaction.get(
          progressReference
        );


      const commonData = {

        uid: currentUser.uid,

        fullName:
          profile.fullName || "",

        classCode:
          profile.studentClass || "",

        email:
          currentUser.email,

        unitId,

        activityId,

        activityType,

        correctAnswers,

        totalQuestions,

        latestScore:
          scorePercent,

        completed: true,

        lastStudiedAt:
          serverTimestamp(),

      };


      if (progressSnapshot.exists()) {

        const previousData =
          progressSnapshot.data();


        const previousAttempts =
          Number(previousData.attempts) || 0;


        const previousBestScore =
          Number(previousData.bestScore) || 0;


        transaction.set(
          progressReference,
          {
            ...commonData,

            attempts:
              previousAttempts + 1,


            bestScore:
              Math.max(
                previousBestScore,
                scorePercent
              ),


            updatedAt:
              serverTimestamp(),
          },

          {
            merge: true,
          }
        );


      } else {


        transaction.set(
          progressReference,

          {
            ...commonData,

            attempts: 1,

            bestScore:
              scorePercent,


            createdAt:
              serverTimestamp(),

            updatedAt:
              serverTimestamp(),
          }
        );

      }


      transaction.set(
        attemptReference,

        {

          uid:
            currentUser.uid,

          fullName:
            profile.fullName || "",

          classCode:
            profile.studentClass || "",

          email:
            currentUser.email,

          unitId,

          activityId,

          activityType,

          correctAnswers,

          totalQuestions,

          score:
            scorePercent,


          submittedAt:
            serverTimestamp(),

        }
      );

    }
  );


  return {

    scorePercent,

    correctAnswers,

    totalQuestions,

  };
}





/**
 * Lấy toàn bộ tiến độ của học sinh đang đăng nhập
 */
export async function getStudentProgress() {

  const currentUser =
    auth.currentUser;


  if (!currentUser) {

    throw new Error(
      "Student must sign in."
    );

  }


  const progressQuery = query(

    collection(
      db,
      "progress"
    ),

    where(
      "uid",
      "==",
      currentUser.uid
    )

  );


  const snapshot =
    await getDocs(
      progressQuery
    );


  return snapshot.docs.map(
    (item) => item.data()
  );

}





/**
 * Danh sách hoạt động bắt buộc của mỗi Unit
 */
export const REQUIRED_ACTIVITIES = {

  unit1: [
    "vocabulary",
    "phrasal-verbs",
    "grammar",
    "reading",
    "unit-challenge",
  ],


  unit2: [
    "vocabulary",
    "phrasal-verbs",
    "grammar",
    "reading",
    "unit-challenge",
  ],


  unit3: [
    "vocabulary",
    "phrasal-verbs",
    "grammar",
    "reading",
    "unit-challenge",
  ],


  unit4: [
    "vocabulary",
    "phrasal-verbs",
    "grammar",
    "reading",
    "unit-challenge",
  ],


  unit5: [
    "vocabulary",
    "phrasal-verbs",
    "grammar",
    "reading",
    "unit-challenge",
  ],


  unit6: [
    "vocabulary",
    "phrasal-verbs",
    "grammar",
    "reading",
    "unit-challenge",
  ],

};





/**
 * Kiểm tra một Unit đã hoàn thành chưa
 */
export function checkUnitCompleted(
  progressList,
  unitId
) {


  const required =
    REQUIRED_ACTIVITIES[unitId];


  if (!required) {

    return false;

  }



  return required.every(
    (activityType) =>

      progressList.some(
        (item) =>

          item.unitId === unitId &&

          item.activityType === activityType &&

          item.completed === true

      )

  );

}





/**
 * Kiểm tra Review đã hoàn thành
 */
export function checkReviewCompleted(
  progressList,
  reviewId
) {

  const reviewActivities = {

    review1: [
      "vocabulary",
      "vocabulary-context",
      "phrases",
      "grammar",
      "reading",
      "listening",
      "writing",
      "challenge",
    ],


    review2: [
      "vocabulary",
      "vocabulary-context",
      "phrases",
      "grammar",
      "reading",
      "listening",
      "writing",
      "challenge",
    ],

  };


  const required =
    reviewActivities[reviewId];


  if(!required){
    return false;
  }


  return required.every(
    (activityType)=>

      progressList.some(
        (item)=>

          item.unitId === reviewId &&

          item.activityType === activityType &&

          item.completed === true

      )
  );

}