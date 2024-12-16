import { Hammer, Mail, Clock, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-blue-200">
      {/* Notification Banner */}
      <div className="flex items-center w-full max-w-3xl gap-3 p-4 mb-8 border border-red-800 rounded-lg bg-yellow-500/20">
        <AlertTriangle className="flex-shrink-0 w-6 h-6 text-red-700" />
        <p className="text-sm font-bold text-black md:text-base lg:text-xl">
          This website is currently under development. Please check back soon!
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8 animate-bounce">
          <Hammer className="w-16 h-16 mx-auto text-blue-500 md:w-24 md:h-24" />
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
            <h2 className="mb-2 text-xl font-semibold text-gray-800">Launch Date</h2>
            <p className="text-gray-600">Coming Soon</p>
          </div>
          <div className="p-3 rounded-lg shadow-sm bg-white/50">
            <Mail className="w-8 h-8 mx-auto mb-4 text-blue-500" />
            <h2 className="mb-2 text-xl font-semibold text-gray-800">Stay Updated</h2>
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
        <p className='font-semibold'>© 2024 CIKITSAM. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard ;







// 2nd design

// import { useState, useEffect } from 'react';
// import dashimg from "../assets/dashboard.jpg"
// import { Facebook, Twitter, Instagram } from 'lucide-react';

// const Dashboard = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   useEffect(() => {
//     // Set your target date here
//     const targetDate = new Date('2024-12-15T23:59:59').getTime();

//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const difference = targetDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((difference % (1000 * 60)) / 1000)
//         });
//       } else {
//         clearInterval(timer);
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const padNumber = (num) => String(num).padStart(2, '0');

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={dashimg}
//           alt="City Background"
//           className="object-cover w-full h-full"
//         />
//         <div className="absolute inset-0 bg-black/10"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-6xl px-4 mx-auto text-center">
//         {/* Logo */}
//         <div className="mb-16">
//           <h1 className="text-3xl font-bold text-black"> ❤CIKITSAM❤</h1>
//         </div>

//         {/* Coming Soon Text */}
//         <div className="mb-8">
//           <h2 className="mb-4 text-4xl font-bold md:text-6xl">Coming Soon</h2>
//           <p className="text-gray-300">Our exciting new website is coming soon! Check back later...</p>
//         </div>

//         {/* Countdown Timer */}
//         <div className="grid max-w-2xl grid-cols-2 gap-4 mx-auto mb-12 md:grid-cols-4">
//           <div className="p-4 rounded-lg bg-black/30 backdrop-blur-sm">
//             <div className="mb-2 text-3xl font-bold md:text-4xl">{padNumber(timeLeft.days)}</div>
//             <div className="text-sm text-gray-300">Days</div>
//           </div>
//           <div className="p-4 rounded-lg bg-black/30 backdrop-blur-sm">
//             <div className="mb-2 text-3xl font-bold md:text-4xl">{padNumber(timeLeft.hours)}</div>
//             <div className="text-sm text-gray-300">Hours</div>
//           </div>
//           <div className="p-4 rounded-lg bg-black/30 backdrop-blur-sm">
//             <div className="mb-2 text-3xl font-bold md:text-4xl">{padNumber(timeLeft.minutes)}</div>
//             <div className="text-sm text-gray-300">Minutes</div>
//           </div>
//           <div className="p-4 rounded-lg bg-black/30 backdrop-blur-sm">
//             <div className="mb-2 text-3xl font-bold md:text-4xl">{padNumber(timeLeft.seconds)}</div>
//             <div className="text-sm text-gray-300">Seconds</div>
//           </div>
//         </div>

//         {/* Buttons */}
//         {/* <div className="flex flex-col justify-center gap-4 mb-12 sm:flex-row">
//           <button className="px-8 py-2 text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">
//             CONTACT US
//           </button>
//           <button className="px-8 py-2 text-white transition-colors rounded-full bg-white/10 hover:bg-white/20">
//             ABOUT US
//           </button>
//         </div> */}

//         {/* Social Media Icons */}
//         <div className="flex justify-center gap-6">
//           <a href="#" className="transition-colors text-white/80 hover:text-white">
//             <Facebook className="w-6 h-6" />
//           </a>
//           <a href="#" className="transition-colors text-white/80 hover:text-white">
//             <Twitter className="w-6 h-6" />
//           </a>
//           <a href="#" className="transition-colors text-white/80 hover:text-white">
//             <Instagram className="w-6 h-6" />
//           </a>
//         </div>
//       </div>

//       {/* Scroll Down Arrow */}
//       <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
//         <svg 
//           className="w-6 h-6 text-white"
//           fill="none" 
//           strokeLinecap="round" 
//           strokeLinejoin="round" 
//           strokeWidth="2" 
//           viewBox="0 0 24 24" 
//           stroke="currentColor"
//         >
//           <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;