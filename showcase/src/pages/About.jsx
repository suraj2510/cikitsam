  import about1 from "../assets/about1.png"

const About = () => {
  const services = [
    { id: 1, name: 'Hospital Center Health' },
    { id: 2, name: 'Infection Prevention Care' },
    { id: 3, name: 'Hospital Center Health' },
    { id: 4, name: 'Operation Theatre' },
    { id: 5, name: 'Blood Test Health' },
    { id: 6, name: 'Outdoor Checkup' },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={about1}
                alt="Doctor with patient"
                className="rounded-lg shadow-lg  object-cover "
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-[#1E40AF] text-sm font-semibold uppercase tracking-wider">
                  WHAT ABOUT US
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Healthy Maternity For Parents To Be
              </h2>

              <p className="text-slate-600">
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour or
                randomised words which dont look...
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center space-x-2"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-[#1E40AF]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-slate-700">{service.name}</span>
                  </div>
                ))}
              </div>

              <button className="bg-[#1E40AF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2f54c2] transition-colors duration-300 inline-flex items-center space-x-2">
                READ MORE
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;