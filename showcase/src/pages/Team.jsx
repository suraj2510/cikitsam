import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

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
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Core Team
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-48 h-48 mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                {member.name}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {member.role}
              </p>
              
              <div className="flex space-x-4">
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin}
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                
                {member.social.github && (
                  <a 
                    href={member.social.github}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a 
                    href={member.social.twitter}
                    className="text-blue-400 hover:text-blue-600 h transition-colors"
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
