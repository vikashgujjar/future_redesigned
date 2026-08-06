let cached = null;

/* Loads the Firebase Auth SDK (and initializes the app) only when actually
   needed — e.g. when a user submits an OTP form — instead of bundling it
   into every page's initial JS. Result is cached after the first call. */
export async function getFirebaseAuth() {
  if (!cached) {
    const [{ auth }, { RecaptchaVerifier, signInWithPhoneNumber }] = await Promise.all([
      import("../firebase.config"),
      import("firebase/auth"),
    ]);
    cached = { auth, RecaptchaVerifier, signInWithPhoneNumber };
  }
  return cached;
}
