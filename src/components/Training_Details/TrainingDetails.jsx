import React from "react";
import { Link } from "react-router-dom";

const TrainingDetails = () => {
  const CheckIcon = () => (
    <svg
      className="w-5 h-5 text-orange-500 shrink-0"
      viewBox="0 0 512 512"
      fill="none"
      stroke="currentColor"
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M416 128 192 384l-96-96" />
    </svg>
  );

  return (
    <div className="w-full pb-10 bg-[#e8e8ed] md:pb-20 font-poppins">
      <div className="px-3 pt-8 md:pt-10 md:px-10">
        <div className="grid items-center justify-center w-auto grid-cols-1 gap-2 mb-1 overflow-auto md:grid-cols-2 lg:grid-cols-2">
          <div className="container flex flex-col flex-wrap mx-auto">
            <h1 className="text-xl md:text-4xl font-bold text-[#1c1c4e] mb-2 font-poppins">
              Basic Frontend Development
            </h1>
            <div className="flex gap-4">
              <div className="flex items-center gap-1 mt-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-orange-500"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.5 3.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v10a.75.75 0 0 0 1.5 0v-10A1.75 1.75 0 0 0 17.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 0 0 0-1.5h-7a.25.25 0 0 1-.25-.25V3.75Z"></path>
                  <path d="M6.25 7a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm-.75 4.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm16.28 4.53a.75.75 0 1 0-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Z"></path>
                </svg>
                <p className="text-xs font-light text-orange-500 md:text-sm">
                  Frontend Development
                </p>
              </div>

              <div className="flex items-center gap-1 mt-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="text-orange-500"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="416"
                    height="384"
                    x="48"
                    y="80"
                    fill="none"
                    stroke-linejoin="round"
                    stroke-width="32"
                    rx="48"
                  ></rect>
                  <circle cx="296" cy="232" r="24"></circle>
                  <circle cx="376" cy="232" r="24"></circle>
                  <circle cx="296" cy="312" r="24"></circle>
                  <circle cx="376" cy="312" r="24"></circle>
                  <circle cx="136" cy="312" r="24"></circle>
                  <circle cx="216" cy="312" r="24"></circle>
                  <circle cx="136" cy="392" r="24"></circle>
                  <circle cx="216" cy="392" r="24"></circle>
                  <circle cx="296" cy="392" r="24"></circle>
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M128 48v32m256-32v32"
                  ></path>
                  <path
                    fill="none"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M464 160H48"
                  ></path>
                </svg>
                <p className="text-xs font-light text-orange-500 md:text-sm">
                  Duration:2 Months
                </p>
              </div>
            </div>
            <div className="container flex items-center gap-1">
              <div className="flex items-center gap-1 mt-6">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 352 512"
                  class="text-orange-500"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"></path>
                </svg>
                <p className="text-[#1c1c4e] max-w-4xl leading-7 text-xs md:text-sm font-light">
                  Physical & Live Online Classes
                </p>
              </div>
            </div>

            <p className="text-[#1c1c4e] max-w-4xl leading-7 mt-2 font-light text-xs md:text-lg px-1">
              Learn HTML,CSS,JavaScript,Bootstrap & Tailwind for building modern
              web application.
            </p>
            <div className="py-4 pt-6">
              <Link to="/Contact">
                <button className="px-2 py-2 text-orange-500 transition-all border border-orange-500 rounded-md hover:cursor-pointer">
                  Send Inquiry
                </button>
              </Link>
            </div>
          </div>
          <div className="container md:my-6 md:py-6">
            <div className="grid grid-cols-3 gap-1 my-6 md:grid-cols-3 lg:grid-cols-4 md:gap-x-0 md:gap-y-10 justify-items-center md:justify-items-end">
              <div>
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 384 512"
                    class="text-orange-500"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 384 512"
                    class="text-blue-500"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    class="text-indigo-500"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    class="text-indigo-500"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-blue-500"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 px-10 py-10 mx-auto bg-white rounded-md shadow-sm lg:grid-cols-2 md:px-10">
          {/* Skills You'll Gain */}
          <div className="p-4 mx-2 rounded-sm shadow-2xl">
            <h1 className="text-md md:text-lg font-semibold text-[#1c1c4e] mb-4 px-4 break-words">
              Skills You'll Gain
            </h1>
            <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2">
              {[
                "Understand the basics of HTML, CSS and JavaScript.",
                "Learn Responsive design using media queries.",
                "Work with Bootstrap and Tailwind for styling.",
                "Create interactive websites with JavaScript.",
              ].map((skill, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <CheckIcon />
                  <p className="text-xs font-light break-words md:text-sm">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools/Technologies You'll Learn */}
          <div className="p-4 mx-2 rounded-sm shadow-2xl">
            <h1 className="text-md md:text-lg font-semibold text-[#1c1c4e] mb-4 px-4 break-words">
              Tools/Technologies You'll Learn
            </h1>
            <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2">
              {[
                "HTML (HyperText Markup Language)",
                "CSS (Cascading Style Sheets)",
                "Responsive design using media queries & Bootstrap.",
                "JavaScript (JS)",
                "Tailwind CSS Framework",
              ].map((tool, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <CheckIcon />
                  <p className="text-xs font-light break-words md:text-sm">
                    {tool}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="p-4 mx-2 rounded-sm shadow-2xl">
            <h1 className="text-md md:text-lg font-semibold text-[#1c1c4e] mb-4 px-4 break-words">
              Requirements
            </h1>
            <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2">
              {[
                "You should have a PC or Mac",
                "Basic Computer Technologies",
                "Familiarity with using web browsers",
                "Access to a computer with internet connection",
                "No prior programming experience required.",
              ].map((req, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <CheckIcon />
                  <p className="text-xs font-light break-words md:text-sm">
                    {req}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Who This Course is For */}
          <div className="p-4 mx-2 rounded-sm shadow-2xl">
            <h1 className="text-md md:text-lg font-semibold text-[#1c1c4e] mb-4 px-4 break-words">
              Who this course is for
            </h1>
            <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2">
              {[
                "The course is for beginners—no prior experience is required.",
                "This course is ideal for entrepreneurs and hobbyists interested in Front-End Development.",
                "This course is designed for those looking to make a career change into tech.",
                "This course is perfect for anyone who wants to learn frontend.",
                "This course is suitable for students seeking practical industry-ready skills.",
              ].map((audience, index) => (
                <div className="flex items-start gap-4" key={index}>
                  <CheckIcon />
                  <p className="text-xs font-light break-words md:text-sm">
                    {audience}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default TrainingDetails;
