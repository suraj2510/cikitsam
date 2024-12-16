import { useState } from 'react';
import SocialMedia from '@/components/ui/SocialMedia';
import SocialMediax from '@/components/ui/SocialMediax';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="p-4 bg-[#F9FDFE] md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left side - Form */}
          <div className="space-y-10">
            <h1 className="text-4xl italic text-[#1E40AF] font-bold md:text-5xl lg:text-6xl">
              LETS CONNECT
              <span className="inline-block ml-2">→</span>
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name here"
                  className="w-full transition-colors bg-transparent border-b border-gray-800 minpy-2 focus:outline-none focus:border-white"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email here"
                  className="w-full py-2 transition-colors bg-transparent border-b border-gray-600 focus:outline-none focus:border-white"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full py-2 transition-colors bg-transparent border-b border-gray-600 resize-none focus:outline-none focus:border-white"
                  required
                />
              </div>
              
              <button className="bg-[#1E40AF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2f54c2] transition-colors duration-300 inline-flex items-center space-x-2">
                SEND IT
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </form>
          </div>
          
          {/* Right side - Contact Info */}
          <div className="mt-8 space-y-10  lg:pl-12 lg:mt-20">
            <div>
              <h2 className="mb-2 text-lg font-medium">Email</h2>
              <a href="mailto:cikitsam1@gmail.com" className="text-gray-800 hover:text-black">
              cikitsam1@gmail.com
              </a>
            </div>
            
            <div>
              <h2 className="mb-2 text-lg font-medium">Socials</h2>
              <div className="flex space-x-5">
                <a href="https://www.linkedin.com/in/cikits%C4%81m-integrative-chrono-bio-medical-device-04ba80338/" className="transition-colors hover:text-gray-400">
                <SocialMedia/>
                </a>
                <a href="https://x.com/cikitsam" className="transition-colors hover:text-gray-400">
                <SocialMediax/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;