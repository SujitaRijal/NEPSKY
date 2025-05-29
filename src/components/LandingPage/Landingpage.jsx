import { Contact } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/blue-futuristic-waves-background-vector-with-computer-code-technology_53876-110867.jpg?w=740')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col items-center justify-between w-full px-4 pt-24 md:flex-row lg:px-16 sm:text-left lg:pt-8 ">
        <div className="w-full text-left md:w-1/2">
          <h1 className="mb-4 text-3xl font-bold text-orange-500 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white font-poppins">
            Connecting The Dots To Success...
          </h1>

          <p className="max-w-3xl mt-6 mb-6 text-base text-white sm:text-md md:text-lg font-poppins">
            At <span className="text-orange-500 animate-pulse">NepSky_</span> we
            deliver custom software, mobile apps, and cloud solutions tailored
            to your goals. We also offer expert-led IT training to upskill
            individuals and teams. Let’s build a smarter, connected future
            together.
          </p>

          <div>
            <button
              onClick={() => navigate("/Contact")}
              className="px-6 py-3 mt-2 font-semibold text-white transition duration-300 ease-in-out bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 "
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-auto mt-6 md:-mt-16 md:w-1/2 md:ml-10 md:translate-x-16">
          <img
            src="/about.jpg"
            alt="Tech Illustration"
            className="w-full h-auto rounded-lg sm:w-4/5 md:w-3/4 lg:w-3/4 drop-shadow-xl animate-fade-in-up"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
//https://i.pinimg.com/736x/9d/b3/83/9db3835f001e1b8e4c352e519a8247aa.jpg
