import {
  Cloud,
  Database,
  Globe,
  GraduationCap,
  Layers,
  Smartphone,
  WholeWord,
} from "lucide-react";
import React from "react";

const Services = () => {
  const Services = [
    {
      icon: <Layers className="w-8 h-8 text-orange-500" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your unique business needs and challenges.",
      delay: 0,
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technologies.",
      delay: 0.1,
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
      delay: 0.2,
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
      title: "Cloud Solutions",
      description:
        "Scalable, secure, and reliable cloud infrastructure and services.",
      delay: 0.3,
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-orange-500" />,
      title: "Trainings",
      description:
        "Comprehensive training programs to enhance your team's skills and knowledge in various technologies.",
      delay: 0.4,
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: "Database Solutions",
      description:
        "Robust database design, management, and optimization for efficient data handling.",
      delay: 0.5,
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-14 md:px-12 lg:px-20 text-[#1c1c4e] font-poppins bg-gray-100">
      <h1 className="mb-2 text-2xl font-bold sm:text-4xl">
        Our{" "}
        <span className="font-semibold underline underline-offset-4 decoration-2 under">
          Services
        </span>
      </h1>
      <p className="max-w-2xl mt-2 mb-10 text-center text-gray-700">
        Driving business excellence through advanced, secure, and scalable
        technology solutions.
      </p>

      <div className="grid grid-cols-1 gap-10 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {Services.map((services, index) => (
          <div className="relative p-8 transition-shadow duration-300 bg-white shadow-sm oveflow-hidden dark:bg-gray-800 rounded-xl hover:shadow-md glass-card">
            <div className="absolute h-20 opacity-50 -right-4 -bottom-4 w-14 dark:bg-blue-900/20"></div>
            <div className="relative">
              <div className="inline-flex items-center p-2 mb-4 rounded-lg dark:bg-orange-100">
                {services.icon}
              </div>
              <h4 className="text-lg font-semibold text-[#1c1c4e]">
                {services.title}
              </h4>
              <p className="mt-2 text-base text-gray-700 dark:text-gray-600">
                {services.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
