import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully!!");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <div className="w-full bg-gray-100 text-[#1c1c4e] font-poppins">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full p-6 py-16 overflow-hidden text-center lg:px-20"
      >
        <h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">
          Contact {""}
          <span className="font-semibold underline underline-offset-4 decoration-2 under">
            Nep<span className="text-orange-500">Sky</span>
          </span>
        </h1>
        <p className="w-full mt-2 mb-10 text-center text-gray-700">
          Let’s build something great together — reach out to our team today for
          expert IT solutions and training.
        </p>
        <div className="flex flex-col gap-10 pt-8 text-gray-600 lg:flex-row lg:justify-between ">
          <form onSubmit={onSubmit} className="w-full lg:w-1/2">
            <div className="flex flex-wrap gap-y-4">
              <div className="w-full text-left ">
                <label htmlFor="name" className="block mb-1 font-semibold">
                  Your Name <span className="text-red-800">*</span>
                </label>

                <input
                  id="name"
                  className="w-full px-4 py-2 mt-1 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  name="Name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div className="w-full text-left ">
                <label htmlFor="email" className="block mb-1 font-semibold">
                  Your Email Address <span className="text-red-800">*</span>
                </label>

                <input
                  id="email"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="email"
                  name="Email"
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>
              <div className="w-full text-left ">
                <label htmlFor="number" className="block mb-1 font-semibold">
                  Your Phone Number <span className="text-red-800">*</span>
                </label>
                <input
                  id="number"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  name="Number"
                  placeholder="Enter Your Phone Number"
                  required
                />
              </div>
            </div>
            <div className="my-4 text-left">
              <label htmlFor="message" className="block mb-1 font-semibold">
                {" "}
                Messages
              </label>
              <textarea
                id="message"
                className="w-full h-48 px-4 py-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="Message"
                placeholder="Your Message..."
                required
              ></textarea>
            </div>
            <button className="px-12 py-2 mb-12 text-white bg-[#1c1c4e] rounded-lg hover:bg-[#16163a]  transition-colors duration-300 w-full">
              Send Message
            </button>
          </form>

          <div className="w-full lg:w-1/2 h-[600px] rounded-md overflow-hidden shadow-md">
            <iframe
              title="NepSky Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.6727439483134!2d83.4724363!3d27.6346504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399685001aea4fa9%3A0x12fc9ffdac14eba2!2sNepSky%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1748239335195!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
