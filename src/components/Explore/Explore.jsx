import React from "react";

const Explore = () => {
  const logos = [
    "https://rammani.edu.np/public/storage/settings/October2024/nJbzFl5ads7XfDDJ18jd.png",
    "https://res.cloudinary.com/dt0fhkmvq/image/upload/v1744707210/pharsatikad_school_c63i2r.png",
    "https://www.skycollege.edu.np/images/skylogo.png?w=388&h=129",
    "https://www.nepathyacollege.edu.np/assets/NepathyaCollege_Web_png-87c6f267.png",
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-14 md:px-12 lg:px-20 text-[#1c1c4e] font-poppins">
      <h1 className="mb-2 text-2xl font-bold sm:text-4xl">
        Our{" "}
        <span className="font-semibold underline underline-offset-4 decoration-2">
          Clients
        </span>
      </h1>
      <p className="max-w-2xl mt-2 mb-16 text-center text-gray-700">
        Our clients are at the heart of everything we do. From startups to
        global companies, we’re proud to support their journey and growth.
      </p>

      <div className="w-full overflow-hidden mb-8">
        <div className="flex gap-12 animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client logo ${index}`}
              className="h-16 transition-transform duration-300 hover:scale-110 drop-shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
