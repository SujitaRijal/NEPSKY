import React from "react";
import {
  Atom,
  Brain,
  Code2,
  Cpu,
  LayoutTemplate,
  Megaphone,
  Network,
  Palette,
  Satellite,
  Server,
  UserSquare,
  CheckCircle2,
  ClockAlert,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Training = () => {
  const navigate = useNavigate();
  const TrainingData = [
    {
      icon: (
        <Code2
          className="w-8 h-8 text-orange-500"
          onClick={() => navigate("/TrainingDetails/Frontend")}
        />
      ),
      title: "Basic Frontend Development",
      description:
        "Learn HTML, CSS, Responsive Web Design & Bootstrap, JavaScript.",
      duration: "duration:1.5 Months",
      //<Clock className="w-5 h-5 text-red-400" />,
    },
    {
      icon: <Atom className="w-8 h-8 text-orange-500" />,
      title: "Advanced Frontend development",
      description:
        "Learn: React, Vue, Angular, Component-based architecture, State Management, UI Frameworks.",
      duration: "duration:2 Months",
    },
    {
      icon: <Server className="w-8 h-8 text-orange-500" />,
      title: "Backend Development",
      description:
        "Learn:How to build scalable backend systems with popular frameworks and languages.",
      duration: "duration:3 Months",
    },
    {
      icon: <Network className="w-8 h-8 text-orange-500" />,
      title: "Hardware & Networking",
      description:
        "Learn: Hardware Fundamentals, Networking Basics, Protocols & Troubleshooting techniques.",
      duration: "duration:1.5 Months",
    },
    {
      icon: <Satellite className="w-8 h-8 text-orange-500" />,
      title: "IOT(Internet Of Things)",
      description:
        "Learn:IOT Fundamentals, Connected devices, Sensors & Smart Solution Development.",
      duration: "duration:3 Months",
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: "AI/ML With Python",
      description:
        "Learn:AL/ML Fundamentals,Python Programming,Model Training & Intelligent System Development. ",
      duration: "duration:2 Months",
    },
    {
      icon: <Palette className="w-8 h-8 text-orange-500" />,
      title: "Graphics Design",
      description:
        "Learn:Graphic Design Tools,Design Techniques,Visual Composition & Design Principles.",
      duration: "duration:2 Months",
    },
    {
      icon: <Megaphone className="w-8 h-8 text-orange-500" />,
      title: "Digital Marketing",
      description:
        "Learn:SEO,PPC Advertising,Content Marketing & Social Media Strategies.",
      duration: "duration:1.5 Months",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-orange-500" />,
      title: "Quality Assurance",
      description:
        "Learn:Manual testing,Automated Testing, Test Case Development & Quality Assurance Methodologies.",
      duration: "duration:1.5 Months",
    },
    {
      icon: <LayoutTemplate className="w-8 h-8 text-orange-500" />,
      title: "UI/UX Designing",
      description:
        "Learn:UI Design Principles,Wireframing, Prototyping & User Testing.",
      duration: "duration:2 Months",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-14 md:px-12 lg:px-20 text-[#1c1c4e] font-poppins ">
      <h1 className="mb-2 text-2xl font-bold sm:text-4xl">
        Specialized{" "}
        <span className="font-semibold underline underline-offset-4 decoration-2 under">
          Training
        </span>
      </h1>
      <p className="max-w-2xl mt-2 mb-10 text-center text-gray-700">
        "Don’t train to be perfect. Train to never give up."
      </p>
      <div className="grid w-full grid-cols-1 gap-8 mt-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {TrainingData.map((training, index) => (
          <div
            key={index}
            className="relative  h-full min-h-[320px] p-6 overflow-hidden transition-shadow duration-300 bg-white shadow-sm dark:bg-gray-800 rounded-xl hover:shadow-md glass-card"
          >
            <div className="absolute h-20 opacity-50 -right-4 -bottom-4 w-14 dark:bg-blue-900/20"></div>
            <div className="relative">
              <div className="inline-flex items-center p-2 mb-4 rounded-lg dark:bg-orange-100">
                {training.icon}
              </div>
              <h4 className="text-lg font-semibold text-[#1c1c4e]">
                {training.title}
              </h4>
              <p className="mt-2 text-base text-gray-700 dark:text-gray-600">
                {training.description}
              </p>
              {/* <p className="mt-4 text-base text-red-500 dark:text-red-400">
                <Clock className="w-5 h-5" />
                <span>{training.duration}</span>
                
              </p> */}
              <div className="flex items-center gap-2 mt-4 text-xs text-red-400">
                <Clock className="w-4 h-4" />
                <span>{training.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;
