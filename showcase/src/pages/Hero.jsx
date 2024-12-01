import React from 'react'

const Hero = () => {
  return (
    <div className="relative min-h-[600px] w-full overflow-hidden">
    {/* Background Image Container */}
    <div className="absolute inset-0">
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20220704/pngtree-healthcare-professional-utilizes-smart-watch-and-digital-technology-in-medical-practice-photo-image_32368000.jpg"
        alt="Healthcare consultation"
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60" />
    </div>

    {/* Content Container */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <div className="flex flex-col justify-center h-[600px] max-w-2xl w-full">
        <span className="inline-block  w-[100%] px-4 py-1 mb-4 text-md font-bold text-[#1E40AF] bg-[#e2e5f0] rounded-full">
          PASSION FOR HEALTH
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
        Pulse and peace in every beat
        </h1>

        {/* Subtext */}
        <p className="text-lg text-slate-600 mb-8">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        {/* CTA Button */}
        <div>
          <button className="inline-flex items-center px-6 py-3 bg-[#1E40AF] hover:bg-[#1E40AF] transition-colors text-white font-medium rounded-lg">
            READ MORE
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero