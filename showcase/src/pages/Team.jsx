import { Github, Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Adarsh Kumar',
      role:'Team Lead:Hardware Engineer',
      image: '/path-to-tanishq-image.jpg',
      social: {
        linkedin: '',
        github: '',
      }
    },
    {
      name: 'Suraj Maurya',
      role: 'Web Developer',
      image: '/path-to-kanishka-image.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/surajmaurya252101101/',
        twitter: 'https://x.com/surajxcode',
        github: 'https://github.com/suraj2510',
      }
    },
    {
      name: 'Rishabh Singh',
      role: 'ML Engineer',
      image: '/path-to-gajender-image.jpg',
      social: {
        linkedin: '',
        github: '',
        twitter: ''
      }
    },
    {
      name: 'Kunjal Tuli',
      role: 'UI/UX Designer ',
      image: '/path-to-jane-image.jpg',
      social: {
        linkedin: '',
        github: '',
      }
    }
  ];

  return (
    <section className="px-4 py-16 bg-[#F9FDFE]">
      <div className="max-w-6xl mx-auto">
      <h2 className="mb-12 text-4xl font-bold text-center text-blue-600">
          Core Team
        </h2>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="w-48 h-48 mb-4 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <h3 className="mb-2 text-xl font-bold text-blue-600">
                {member.name}
              </h3>
              
              <p className="mb-4 text-gray-600">
                {member.role}
              </p>
              
              <div className="flex space-x-4">
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin}
                    className="text-blue-500 transition-colors hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                
                {member.social.github && (
                  <a 
                    href={member.social.github}
                    className="text-gray-700 transition-colors hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a 
                    href={member.social.twitter}
                    className="text-blue-400 transition-colors hover:text-blue-600 h"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5 hover:scale-150 " />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
