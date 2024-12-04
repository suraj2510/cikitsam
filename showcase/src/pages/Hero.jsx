// import m6 from "../assets/m6.jpg";

// const Hero = () => {
//   return (
//     <div className="relative min-h-[600px] w-full overflow-hidden z">
//       {/* Background Image Container */}
//       <div className="absolute inset-0">
//         <img
//           src={m6}
//           alt="Healthcare consultation"
//           className="object-cover w-full h-full lg:object-cover"
//         />
//         <img
//           // src={m6Mobile}  // Use the mobile-specific image if you have one
//           alt="Healthcare consultation for mobile"
//           className="object-cover w-full h-full sm:hidden lg:hidden"
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 " />
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="flex flex-col justify-center h-[400px] max-w-2xl w-full ">
//           <span className=" max-w-sm  px-4 py-1 mb-4 text-md font-bold text-[#1E40AF] bg-[#e2e5f0] rounded-full">
//             PASSION FOR HEALTH
//           </span>

//           {/* Main Heading */}
//           <h1 className="mb-5 text-3xl font-bold heading md:text-5xl lg:text-6xl text-slate-800">
//             Pulse and peace in every beat{" "}
//             <span className="inline-block heart lg:text-[80px]">&#x2665;</span>
//           </h1>
//           {/* Subtext */}
//           {/* <p className="mb-6 text-lg leading-8 text-slate-900 w-[400px] object-none">
//             Cikitsam blend{" "}
//             <span className="font-bold text-black">innovation</span> and{" "}
//             <span className="font-bold text-black">care</span>, helping you
//             monitor <span className="font-bold text-black"> wellness</span>{" "}
//              while fostering inner{" "}
//             <span className="font-bold text-black">balance</span>.
//           </p> */}

//           <p className="mb-6 text-lg leading-8 text-slate-900 w-[400px] object-none hidden md:block">
//             Cikitsam blend{" "}
//             <span className="font-bold text-black">innovation</span> and{" "}
//             <span className="font-bold text-black">care</span>, helping you
//             monitor <span className="font-bold text-black">wellness</span> while
//             fostering inner{" "}
//             <span className="font-bold text-black">balance</span>.
//           </p>

//           {/* CTA Button */}
//           <div>
//             <button className="inline-flex items-center px-6 py-3 bg-[#1E40AF] hover:bg-[#1E40AF] transition-colors text-white font-medium rounded-lg">
//               READ MORE
//               <svg
//                 className="w-4 h-4 ml-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 4v16m8-8H4"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import m6 from "../assets/m6.jpg"; // Desktop image
import m7 from "../assets/m7.png"; // Mobile-specific image (if applicable)
import { ConfettiButton } from "../components/ui/confetti.jsx";
// import FlipText from "@/components/magicui/flip-text";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* Desktop View Image */}
        <img
          src={m6}
          alt="Healthcare consultation"
          className="hidden object-cover w-full h-full lg:object-cover sm:block"
        />
        {/* Mobile View Image */}
        <img
          src={m7} // Use the mobile-specific image if you have one
          alt="Healthcare consultation for mobile"
          className="object-cover w-full h-full sm:hidden lg:hidden"
        />
        {/* Overlay */}
        <div className="absolute inset-0 opacity-30" />
      </div>

      {/* Content Container */}
      <div className="relative h-full px-4 mx-auto leading-3 max-w-7xl sm:px-6 lg:px-8 ">
        <div className="flex flex-col justify-center h-[350px] max-w-2xl w-full lg:h-[500px]">
          <h1 className="max-w-[159px] gap-x-9 px-2 mb-2 text-xs lg:text-md  font-extrabold text-[#1E40AF] bg-[#e2e5f0]   rounded-full">
            PASSION FOR HEALTH
          </h1>

          {/* Main Heading */}
          <h1 className="mb-3 text-2xl font-bold md:text-5xl lg:text-6xl text-slate-800">
            Pulse and peace in <br /> every beat{" "}
            <span className="inline-block heart  lg:text-[80px]">&#x2665;</span>
          </h1>

          {/* Subtext */}
          <p className="mb-6 text-lg leading-8 text-slate-900 w-[400px] object-none hidden md:block">
            Cikitsam blend{" "}
            <span className="font-bold text-black">innovation</span> and{" "}
            <span className="font-bold text-black">care</span>, helping you
            monitor <span className="font-bold text-black">wellness</span> while
            fostering inner{" "}
            <span className="font-bold text-black">balance</span>.
          </p>

          <div>
            <ConfettiButton className="bg-blue-700">Click me</ConfettiButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
