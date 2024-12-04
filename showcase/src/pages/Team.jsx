import { Github, Linkedin, Twitter } from 'lucide-react';
import adarsh from "../assets/adarsh.jpg"
import suraj from "../assets/suraj.jpg"
import rishabh from "../assets/rishabh.jfif"
import kunjal from "../assets/kunjal.jpg"

const Team = () => {
  const teamMembers = [
    {
      name: 'Adarsh Kumar',
      role:'Team Lead:Hardware Engineer',
      image: adarsh,
      social: {
        linkedin: 'https://www.linkedin.com/in/adarsh-kumar-77b2671b2/',
        twitter: 'https://www.linkedin.com/in/adarsh-kumar-77b2671b2/',
        github: 'https://www.linkedin.com/in/adarsh-kumar-77b2671b2/',
      }
    },
    {
      name: 'Suraj Maurya',
      role: 'Web Developer',
      image: suraj,
      social: {
        linkedin: 'https://www.linkedin.com/in/surajmaurya252101101/',
        twitter: 'https://x.com/surajxcode',
        github: 'https://github.com/suraj2510',
      }
    },
    {
      name: 'Rishabh Singh',
      role: 'ML Engineer',
      image: rishabh,
      social: {
        linkedin: 'https://www.linkedin.com/in/rishabh-singh-84201b207/',
        twitter: 'https://x.com/Rathore_775',
        github: 'https://www.linkedin.com/in/rishabh-singh-84201b207/',
      }
    },
    {
      name: 'Kunjal Tuli',
      role: 'Research & Development ',
      image: kunjal,
      social: {
        linkedin: 'https://www.linkedin.com/in/kunjal-tuli-56042b265/',
        twitter: 'https://www.linkedin.com/in/kunjal-tuli-56042b265/',
        github: 'https://www.linkedin.com/in/kunjal-tuli-56042b265/',
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
                    <Linkedin className="w-5 h-5 transition-transform duration-300 hover:scale-150" />
                  </a>
                )}
                
                {member.social.github && (
                  <a 
                    href={member.social.github}
                    className="text-gray-700 transition-colors hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 transition-transform duration-300 hover:scale-150" />
                  </a>
                )}
                {member.social.twitter && (
                  <a 
                    href={member.social.twitter}
                    className="text-blue-400 transition-colors hover:text-blue-600 h"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   <Twitter className="w-5 h-5 transition-transform duration-150 hover:scale-150" />

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
