import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="sm:px-6 flex flex-col items-center justify-center w-full mx-auto overflow-hidden text-[#1c1c4e] px-4 py-10 md:px-20 lg:px-32 font-poppins shadow-sm">
      <h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">
        About{" "}
        <span className="font-semibold underline underline-offset-4 decoration-2">
          Nep<span className="text-orange-500">Sky</span>
        </span>
      </h1>
      <p className="max-w-2xl mt-2 mb-10 text-center text-gray-700">
        Let's Shape The Future Of Technology Together
      </p>

      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center w-full px-4 md:w-1/2"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
            alt="Collaboration"
            className="w-full h-auto max-w-[500px] md:max-w-full shadow-xl rounded-xl"
          />
        </motion.div>

        <div className="w-full max-w-xl px-4 md:w-1/2">
          <p className="text-sm leading-relaxed text-justify sm:text-base sm:leading-7">
            <strong>NepSky</strong> is a forward-thinking IT company dedicated
            to delivering top-tier technology solutions and skill development.
            We empower individuals and organizations through expert-led,
            hands-on programs designed to foster growth in today’s fast-paced
            digital world. Our mission is to bridge the gap between innovation
            and talent by nurturing future-ready professionals. Whether you're a
            student exploring tech, a professional seeking advancement, or a
            company looking to scale, NepSky equips you with the tools,
            experience, and support to thrive. We believe in practical learning,
            real-world projects, and always staying ahead of the curve. Join
            us—and let’s shape the future of technology, together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
