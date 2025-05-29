// import { CheckCircle2, ClipboardCheck, Search } from "lucide-react";
// import React from "react";

// const Work = () => {
//   const work = [
//     {
//       icon: <Search className="w-8 h-8 text-orange-500" />,
//       title: "Vision & Strategy",
//     },
//     {
//       icon: <ClipboardCheck className="w-8 h-8 text-orange-500" />,
//       title: "Smart Development",
//     },
//     {
//       icon: <CheckCircle2 className="w-8 h-8 text-orange-500" />,
//       title: "Launch & Support",
//     },
//   ];
//   return (
//     <div className="w-full flex flex-col items-center justify-center px-4 py-14 md:px-12 lg:px-20 text-[#1c1c4e] font-poppins">
//       <h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">
//         How{"  "}
//         <span className="font-semibold underline underline-offset-4 decoration-2">
//           Nep<span className="text-orange-500">Sky</span> Works
//         </span>
//       </h1>
//       <p className="max-w-2xl mt-2 mb-10 text-center text-gray-700">
//         Driven by Excellence: Delivering Innovative Solutions
//       </p>

//       <div className="relative flex flex-col items-center justify-center w-full">
//         <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
//           {work.map((works, index) => (
//             <div
//               key={index}
//               className="relative flex flex-col items-center text-center"
//             >
//               <div className="relative p-8 bg-white shadow-md dark:bg-gray-800 rounded-xl z-10">
//                 <div className="inline-flex items-center p-2 mb-4 rounded-lg bg-orange-100 dark:bg-orange-100">
//                   {works.icon}
//                 </div>
//                 <h4 className="text-lg font-semibold text-[#1c1c4e]">
//                   {works.title}
//                 </h4>
//               </div>

//               {index < work.length - 1 && (
//                 <svg
//                   className="hidden md:block absolute top-1/2 right-[-60px] w-[100px] h-[50px] z-0"
//                   viewBox="0 0 100 50"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M0 25 Q 50 0, 100 25"
//                     stroke="#f97316"
//                     strokeWidth="2"
//                     strokeDasharray="4"
//                     fill="none"
//                   />
//                 </svg>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;
import { CheckCircle2, ClipboardCheck, Search } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  const work = [
    {
      icon: <Search className="w-8 h-8 text-orange-500" />,
      title: "Vision & Strategy",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-orange-500" />,
      title: "Smart Development",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-orange-500" />,
      title: "Launch & Support",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
      },
    }),
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-14 md:px-12 lg:px-20 text-[#1c1c4e] font-poppins bg-gray-100 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2 text-2xl font-bold text-center sm:text-4xl"
      >
        How{" "}
        <span className="font-semibold underline underline-offset-4 decoration-2 under">
          Nep<span className="text-orange-500">Sky</span> Works
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-2xl mt-2 mb-10 text-center text-gray-700"
      >
        Driven by Excellence: Delivering Innovative Solutions
      </motion.p>

      <div className="relative flex flex-col items-center justify-center w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
          {work.map((works, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="relative p-8 bg-white shadow-lg dark:bg-gray-800 rounded-xl z-10 transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <div className="inline-flex items-center p-3 mb-4 rounded-lg bg-orange-100">
                  {works.icon}
                </div>
                <h4 className="text-lg font-semibold text-[#1c1c4e]">
                  {works.title}
                </h4>
              </div>

              {index < work.length - 1 && (
                <svg
                  className="hidden md:block absolute top-1/2 right-[-60px] w-[100px] h-[50px] z-0"
                  viewBox="0 0 100 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 25 Q 50 0, 100 25"
                    stroke="#f97316"
                    strokeWidth="2"
                    strokeDasharray="4"
                    fill="none"
                  />
                </svg>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
