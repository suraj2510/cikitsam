import about1 from "../assets/about1.png";
// import BeatAnimation from "../pages/BeatAnimation.jsx"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

const About = () => {
  const services = [
    { id: 1, name: "Real time stress monitorring" },
    { id: 2, name: "Mindfullness tracking & Guidance" },
    { id: 3, name: "Application Support" },
    { id: 4, name: "Daily wellness progress supports" },
    { id: 5, name: "Tailored relief techniques" },
    { id: 6, name: "Diagnose and care" },
  ];

  return (
    <section className="px-4 py-10 bg-[#F9FDFE]">
      <div className="container mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-blue-600">
          About Us
        </h2>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={about1}
                alt="Doctor with patient"
                className="object-cover rounded-lg shadow-lg "
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

              <h2 className="text-3xl font-bold md:text-4xl text-slate-800">
              Elevate Your Mental Wellness with <span className="inline-block mt-2 text-blue-600">Cikitsam </span>
              </h2>
              {/* <BeatAnimation/> */}

              <p className="text-slate-600">
                Transforming mental health and
                Fitness with edge cutting advancement , unlock mindfulness and
                strength your emotional Core .
              </p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {services.map((service) => (
                  <div key={service.id} className="flex items-center space-x-2">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-100">
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

              {/* <button className="bg-[#1E40AF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2f54c2] transition-colors duration-300 inline-flex items-center space-x-2">
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
              </button> */}
              <Sheet>
                <SheetTrigger className="p-2 mt-2 font-medium text-white bg-blue-700 rounded-lg outline-none">
                  About more
                </SheetTrigger>
                <SheetContent className="w-[400px] h-[200px] sm:w-[440px] ">
                  <SheetHeader className="">
                    <SheetTitle>
                      Start Up and Funded by{" "}
                      <span className="text-2xl font-bold text-blue-800">
                        KUTIC
                      </span>
                    </SheetTitle>
                    <SheetDescription className="text-xs font-semibold ">
                      Kurukshetra University Technology Incubation Centre
                    </SheetDescription>
                    <p className="font-medium">Company Legal Details</p>
                    <SheetDescription>
                      Udhyam – UDYAM-HR-11-0041823
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
