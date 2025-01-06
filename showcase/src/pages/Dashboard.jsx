import { Hammer, Mail, Clock, AlertTriangle } from "lucide-react";
import SignIn from "./authentication/SignIn";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../authentication/firebaseConfig";

const Dashboard = () => {
  const handlegoogle = async () => {
    const provider = await new GoogleAuthProvider();

    return signInWithPopup(auth, provider);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-blue-200">
      {/* Notification Banner */}
      <div className="flex items-center justify-center w-full max-w-2xl gap-4 md:gap-12 lg:gap-16">
        <div className="flex items-center w-full p-4 border border-red-800 rounded-lg bg-yellow-500/20">
          <AlertTriangle className="flex-shrink-0 w-6 h-6 mr-3 text-red-700" />
          <p className="text-sm font-bold text-black md:text-base lg:text-xl">
            This website is currently under development.
          </p>
        </div>
        <div className="max-w-xs ">
          <button
            onClick={handlegoogle}
            className="w-full p-3 text-white transition-colors bg-blue-500 rounded-lg hover:bg-[#2563EB]"
          >
            <SignIn />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="mt-5 mb-5 animate-bounce">
          <Hammer className="w-16 h-16 mx-auto text-[#2563EB] md:w-24 md:h-24" />
        </div>

        <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-5xl">
          Coming Soon!
        </h1>

        <p className="mb-12 text-lg text-gray-600 md:text-xl">
          We are working hard to bring you something amazing.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2">
          <div className="p-3 rounded-lg shadow-sm bg-white/50">
            <Clock className="w-8 h-8 mx-auto mb-4 text-blue-500" />
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              Launch Date
            </h2>
            <p className="text-gray-600">Coming Soon</p>
          </div>
          <div className="p-3 rounded-lg shadow-sm bg-white/50">
            <Mail className="w-8 h-8 mx-auto mb-4 text-blue-500" />
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              Stay Updated
            </h2>
            <p className="text-gray-600">Sign up for notifications</p>
          </div>
        </div>

        {/* Email Subscription */}
        <div className="w-full max-w-md mx-auto">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-gray-800 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 py-2 font-semibold text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600">
              Notify Me
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600">
        <p className="font-semibold">© 2024 CIKITSAM. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
