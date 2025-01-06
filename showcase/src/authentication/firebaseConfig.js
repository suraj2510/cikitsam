import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2ld9JjdDYDwynw1UURG1MKkP8m0HiImc",
  authDomain: "cikitsam-portfolio.firebaseapp.com",
  projectId: "cikitsam-portfolio",
  storageBucket: "cikitsam-portfolio.firebasestorage.app",
  messagingSenderId: "283505822013",
  appId: "1:283505822013:web:0cf28a68fde40381359d54",
  measurementId: "G-LHMY1F65ZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export default app;
