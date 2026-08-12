import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";

function StudentStartPage({ onStart, onTeacher }) {
  const [mode, setMode] = useState("signin");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [studentClass, setStudentClass] = useState("");
 

  const [currentUser, setCurrentUser] = useState(null);
  const [needsProfile, setNeedsProfile] = useState(false);

  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const getFriendlyError = (firebaseError) => {
    const code = firebaseError?.code || "";

    if (code === "auth/email-already-in-use") {
      return "This email already has an account. Please sign in.";
    }

    if (
      code === "auth/invalid-credential" ||
      code === "auth/wrong-password" ||
      code === "auth/user-not-found"
    ) {
      return "The email or password is incorrect.";
    }

    if (code === "auth/weak-password") {
      return "The password must contain at least 6 characters.";
    }

    if (code === "auth/invalid-email") {
      return "Please enter a valid email address.";
    }

    if (code === "auth/popup-closed-by-user") {
      return "The Google sign-in window was closed.";
    }

    if (code === "auth/popup-blocked") {
      return "The browser blocked the Google sign-in window.";
    }

    if (code === "auth/too-many-requests") {
      return "Too many attempts. Please wait and try again.";
    }

    return "Something went wrong. Please try again.";
  };

    const openStudentProfile = async (user) => {
    const profileReference = doc(
      db,
      "users",
      user.uid
    );

    const profileSnapshot = await getDoc(
      profileReference
    );

    if (profileSnapshot.exists()) {
      onStart(profileSnapshot.data());
      return;
    }

    const teacherReference = doc(
      db,
      "teachers",
      user.uid
    );

    const teacherSnapshot = await getDoc(
      teacherReference
    );

    if (
      teacherSnapshot.exists() &&
      teacherSnapshot.data().active === true
    ) {
      onTeacher(teacherSnapshot.data());
      return;
    }

    setNeedsProfile(true);
  };
      useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        setError("");
        setMessage("");
        setNeedsProfile(false);

        if (!user) {
          setCurrentUser(null);
          setLoading(false);
          return;
        }

        setCurrentUser(user);

        if (!user.emailVerified) {
          setLoading(false);
          return;
        }

        try {
          await openStudentProfile(user);
        } catch (firebaseError) {
          console.error(
            "Unable to load student profile:",
            firebaseError
          );

          setError(
            "Unable to load your student profile."
          );
        } finally {
          setLoading(false);
        }
      }
    );

    return unsubscribe;
  }, []);
  const handleGoogleSignIn = async () => {
    try {
      setBusy(true);
      setError("");
      setMessage("");

      const provider = new GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: "select_account",
      });

      await signInWithPopup(auth, provider);
    } catch (firebaseError) {
      console.error("Google sign-in error:", firebaseError);
      setError(getFriendlyError(firebaseError));
    } finally {
      setBusy(false);
    }
  };

  const handleEmailAuthentication = async (event) => {
    event.preventDefault();

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (password.length < 6) {
      setError("The password must contain at least 6 characters.");
      return;
    }

    try {
      setBusy(true);
      setError("");
      setMessage("");

      if (mode === "register") {
        const credential = await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );

        await sendEmailVerification(credential.user);

        setMessage(
          "A verification email has been sent. Open your email and verify your account."
        );
      } else {
        await signInWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );
      }
    } catch (firebaseError) {
      console.error("Email authentication error:", firebaseError);
      setError(getFriendlyError(firebaseError));
    } finally {
      setBusy(false);
    }
  };

  const handleResendVerification = async () => {
    if (!currentUser) return;

    try {
      setBusy(true);
      setError("");
      setMessage("");

      await sendEmailVerification(currentUser);

      setMessage(
        "A new verification email has been sent."
      );
    } catch (firebaseError) {
      console.error("Verification email error:", firebaseError);
      setError(getFriendlyError(firebaseError));
    } finally {
      setBusy(false);
    }
  };

  const handleCheckVerification = async () => {
    if (!currentUser) return;

    try {
      setBusy(true);
      setError("");
      setMessage("");

      await currentUser.reload();
      await currentUser.getIdToken(true);

      const refreshedUser = auth.currentUser;

      if (!refreshedUser?.emailVerified) {
        setMessage(
          "Your email has not been verified yet. Please check your inbox."
        );
        return;
      }

      setCurrentUser(refreshedUser);
      await openStudentProfile(refreshedUser);
    } catch (firebaseError) {
      console.error("Verification check error:", firebaseError);
      setError(getFriendlyError(firebaseError));
    } finally {
      setBusy(false);
    }
  };

  const handleProfileSubmit = async (event) => {
    event.preventDefault();

   if (!fullName.trim() || !studentClass.trim()) {
      setError("Please complete all student information.");
      return;
    }

    if (!currentUser || !currentUser.emailVerified) {
      setError("Please verify your email before continuing.");
      return;
    }

    const profile = {
      uid: currentUser.uid,
      fullName: fullName.trim(),
      studentClass: studentClass.trim(),
      
      email: currentUser.email,
      role: "student",
    };

    try {
      setBusy(true);
      setError("");
      setMessage("");

      await setDoc(doc(db, "users", currentUser.uid), {
        ...profile,
        createdAt: serverTimestamp(),
      });

      onStart({
        ...profile,
        createdAt: new Date().toISOString(),
      });
    } catch (firebaseError) {
      console.error("Unable to save student profile:", firebaseError);
      setError(
        "Unable to save your student profile. Please try again."
      );
    } finally {
      setBusy(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setBusy(true);
      await signOut(auth);
    } catch (firebaseError) {
      console.error("Sign-out error:", firebaseError);
      setError("Unable to sign out.");
    } finally {
      setBusy(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FFF8F1] px-5">
        <div className="rounded-3xl border border-[#F3D0B8] bg-white px-10 py-8 text-center shadow-lg">
          <div className="text-4xl">📚</div>

          <p className="mt-4 font-bold text-[#2E596D]">
            Loading your account...
          </p>
        </div>
      </main>
    );
  }

  if (currentUser && !currentUser.emailVerified) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FFF8F1] px-5 py-10">
        <section className="w-full max-w-lg rounded-[2rem] border border-[#F1CFB7] bg-white p-8 shadow-xl">
          <div className="text-center">
            <div className="text-5xl">✉️</div>

            <h1 className="mt-5 text-3xl font-black text-[#C7683F]">
              Verify Your Email
            </h1>

            <p className="mt-4 leading-7 text-[#526B76]">
              We sent a verification link to:
            </p>

            <p className="mt-2 font-bold text-[#235D78]">
              {currentUser.email}
            </p>

            <p className="mt-4 text-sm leading-6 text-[#6C7B82]">
              Open your email, click the verification link,
              then return here.
            </p>
          </div>

          {message && (
            <p className="mt-5 rounded-xl bg-[#EDF8F1] p-3 text-center font-semibold text-[#27734C]">
              {message}
            </p>
          )}

          {error && (
            <p className="mt-5 rounded-xl bg-rose-50 p-3 text-center font-semibold text-rose-700">
              {error}
            </p>
          )}

          <button
            type="button"
            onClick={handleCheckVerification}
            disabled={busy}
            className="mt-6 w-full rounded-xl bg-[#E47B4E] px-6 py-3 font-black text-white hover:bg-[#CF683E] disabled:opacity-60"
          >
            I Have Verified My Email
          </button>

          <button
            type="button"
            onClick={handleResendVerification}
            disabled={busy}
            className="mt-3 w-full rounded-xl border border-[#B8D8C6] bg-[#F1FAF4] px-6 py-3 font-bold text-[#287052] disabled:opacity-60"
          >
            Resend Verification Email
          </button>

          <button
            type="button"
            onClick={handleSignOut}
            disabled={busy}
            className="mt-3 w-full px-6 py-2 font-bold text-[#6C7B82]"
          >
            Use Another Account
          </button>
        </section>
      </main>
    );
  }

  if (currentUser && needsProfile) {
    return (
      <main className="min-h-screen bg-[#FFF8F1] px-5 py-10">
        <section className="mx-auto w-full max-w-xl rounded-[2rem] border border-[#F1CFB7] bg-white p-8 shadow-xl">
          <div className="text-center">
            <div className="text-5xl">🎓</div>

            <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-[#27805A]">
              First Sign-In
            </p>

            <h1 className="mt-2 text-3xl font-black text-[#C7683F]">
              Complete Your Profile
            </h1>

            <p className="mt-3 text-[#60757E]">
              Enter your real student information. This
              information can only be submitted once.
            </p>

            <p className="mt-3 text-sm font-semibold text-[#336A82]">
              {currentUser.email}
            </p>
          </div>

          <form
            onSubmit={handleProfileSubmit}
            className="mt-7 space-y-5"
          >
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block font-bold text-[#345967]"
              >
                Full Name
              </label>

              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(event) =>
                  setFullName(event.target.value)
                }
                placeholder="Enter your real full name"
                autoComplete="name"
                className="w-full rounded-xl border border-[#D7DED9] px-4 py-3 outline-none focus:border-[#E47B4E]"
              />
            </div>

            <div>
  <label
    htmlFor="studentClass"
    className="mb-2 block font-bold text-[#345967]"
 ằm >
    Class
  </label>

  <select
    id="studentClass"
    value={studentClass}
    onChange={(event) =>
      setStudentClass(event.target.value)
    }
    className="w-full rounded-xl border border-[#D7DED9] bg-white px-4 py-3 outline-none focus:border-[#E47B4E]"
  >
    <option value="">Select your class</option>
    <option value="9.1">Class 9.1</option>
    <option value="9.2">Class 9.2</option>
    <option value="9.3">Class 9.3</option>
    <option value="9.4">Class 9.4</option>
  </select>
</div>

            

            {error && (
              <p className="rounded-xl bg-rose-50 p-3 font-semibold text-rose-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-xl bg-[#E47B4E] px-6 py-3 font-black text-white hover:bg-[#CF683E] disabled:opacity-60"
            >
              Save and Start Learning
            </button>
          </form>

          <button
            type="button"
            onClick={handleSignOut}
            disabled={busy}
            className="mt-4 w-full text-sm font-bold text-[#6C7B82]"
          >
            Sign Out
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF8F1] px-5 py-10">
      <section className="mx-auto w-full max-w-xl rounded-[2rem] border border-[#F1CFB7] bg-white p-8 shadow-xl">
        <div className="text-center">
          <div className="text-5xl">🌟</div>

          <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-[#27805A]">
            Grade 9 English
          </p>

          <h1 className="mt-2 text-3xl font-black text-[#C7683F]">
            Student Sign-In
          </h1>

          <p className="mt-3 text-[#60757E]">
            Sign in to save and continue your learning
            progress.
          </p>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={busy}
          className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl border border-[#D7DED9] bg-white px-6 py-3 font-black text-[#345967] hover:bg-[#F7FAF8] disabled:opacity-60"
        >
          <span className="text-xl">G</span>
          Continue with Google
        </button>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#E4E8E5]" />

          <span className="text-sm font-semibold text-[#899492]">
            OR
          </span>

          <div className="h-px flex-1 bg-[#E4E8E5]" />
        </div>

        <form
          onSubmit={handleEmailAuthentication}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-bold text-[#345967]"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="student@example.com"
              autoComplete="email"
              className="w-full rounded-xl border border-[#D7DED9] px-4 py-3 outline-none focus:border-[#E47B4E]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block font-bold text-[#345967]"
            >
              Password
            </label>

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="At least 6 characters"
              autoComplete={
                mode === "register"
                  ? "new-password"
                  : "current-password"
              }
              className="w-full rounded-xl border border-[#D7DED9] px-4 py-3 outline-none focus:border-[#E47B4E]"
            />
            <label className="mt-2 flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#526B76]">
  <input
    type="checkbox"
    checked={showPassword}
    onChange={(event) => setShowPassword(event.target.checked)}
    className="h-4 w-4"
  />
  Show password
</label>
          </div>

          {message && (
            <p className="rounded-xl bg-[#EDF8F1] p-3 font-semibold text-[#27734C]">
              {message}
            </p>
          )}

          {error && (
            <p className="rounded-xl bg-rose-50 p-3 font-semibold text-rose-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-xl bg-[#E47B4E] px-6 py-3 font-black text-white hover:bg-[#CF683E] disabled:opacity-60"
          >
            {mode === "register"
              ? "Create Account"
              : "Sign In"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            setMode(
              mode === "signin" ? "register" : "signin"
            );
            setError("");
            setMessage("");
          }}
          className="mt-5 w-full text-sm font-bold text-[#2E6F87]"
        >
          {mode === "signin"
            ? "No account yet? Create one"
            : "Already have an account? Sign in"}
        </button>
      </section>
        </main>
  );
  }

export default StudentStartPage;