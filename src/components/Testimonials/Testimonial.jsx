import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sanjeev Bhandari ",
    title: "Principal at Nepathya College",
    image: "https://nepsky.tech/assets/sanjeevsir-DhrFx_Ms.jpg",
    feedback:
      "NepSky Tech transformed our digital infrastructure completely. Their expertise in cloud solutions helped us reduce costs while improving performance.",
  },
  {
    name: "Arun Sahani",
    title: "Coordinator at Rammani College",
    image: "https://nepsky.tech/assets/ArunSahani-UNSMmVAA.jpg",
    feedback:
      "The team at NepSky Tech delivered our project ahead of schedule and exceeded all our expectations. Their attention to detail is remarkable.",
  },
  {
    name: "Shiva Bhattarai",
    title: "Principal at Sky International College & Reseach Center",
    image: "https://nepsky.tech/assets/shivasir-BssnBhCJ.jpg",
    feedback:
      "NepSky Tech exceeded our expectations from day one. Their team delivered a seamless experience and truly understood our technical needs.",
  },
  {
    name: "Dilli Ram Paudyal",
    title: "Principal at Pharsatikar Siddhartha English Boarding School",
    image: "https://nepsky.tech/assets/dilliramsir-D_O-yb2_.png",
    feedback:
      "Working with NepSky Tech has been a game changer for our business. Their innovative solutions and professional approach set them apart. ",
  },
];
const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-14 md:px-12 lg:px-20 text-[#1c1c4e] font-poppins">
      <h1 className="mb-2 text-2xl font-bold sm:text-4xl">
        What Our{" "}
        <span className="font-semibold underline underline-offset-4 decoration-2 under">
          Client Says??
        </span>
      </h1>
      <p className="max-w-2xl mt-2 mb-10 text-center text-gray-700">
        Click a profile to read their full experience with NepSky.
      </p>
      <div className="flex flex-wrap justify-center gap-10 mb-10">
        {testimonials.map((person, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            whileHover={{ scale: 1.05 }}
            className={`cursor-pointer p-4 rounded-lg border ${
              activeIndex === index ? "bg-indigo-100" : "bg-white"
            } border-gray-300 shadow-md text-center w-60 h-50 transition duration-300`}
          >
            <img
              src={person.image}
              alt={person.name}
              className="object-cover w-16 h-16 mx-auto mt-1 mb-2 rounded-full"
            />
            <p className="mt-4 font-semibold">{person.name}</p>
            <p className="mt-2 text-sm text-gray-500">{person.title}</p>
          </motion.div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {activeIndex !== null && (
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl p-6 mx-auto text-center border border-indigo-100 shadow bg-indigo-50 rounded-xl"
          >
            <p className="text-lg italic leading-relaxed text-gray-700">
              "{testimonials[activeIndex].feedback}"
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
