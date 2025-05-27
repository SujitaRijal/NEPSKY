import React from "react";
import { PhoneCall, Mail } from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <>
      <div className="w-full bg-orange-600 ">
        <div className="container flex items-center justify-between w-full px-8 py-4 mx-auto overflow-hidden bg-orange-600 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center justify-center gap-1 ">
              <a
                href="tel:071592028"
                className="flex items-center justify-center gap-1 "
              >
                <PhoneCall className="w-5 h-5 text-white" />
                <p className="text-xs text-white sm:text-sm">
                  <span className="hidden md:block">071592028,</span>
                </p>
              </a>

              <a
                href="tel:9847008700"
                className="flex items-center justify-center gap-1 "
              >
                <p className="text-xs text-white sm:text-sm">
                  <span className="hidden md:block">+977 9847008700</span>
                </p>
              </a>
            </div>
            <div className="flex items-center justify-center gap-1 ">
              <a
                href="mailto:example@gmail.com"
                className="flex items-center justify-center gap-1 "
              >
                <Mail className="w-5 h-5 text-white" />
                <p className="text-xs text-white sm:text-sm">
                  <span className="hidden md:block">info@nepsky.tech</span>
                </p>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/people/NepSky-Technology/61574531679330/?_rdr"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/nepsky-technology-pvt-ltd/about/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-white shadow-lg">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto lg:px-8 sm:px-6 md:h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/Nepsky-logo-new.svg" alt="Logo" className="h-16" />
            </Link>
          </div>

          <nav className="items-center hidden space-x-4 sm:space-x-6 md:space-x-7 lg:space-x-10 md:flex">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/AboutUs" },
              { label: "Services", path: "/Services" },
              { label: "Training", path: "/Training" },
              { label: "Contact", path: "/Contact" },
            ].map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="relative text-base font-semibold text-[#1c1c4e]transition-transform duration-300 transform md:text-lg lg:text-xl hover:scale-110"
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-[5px] rounded-full transition-all duration-500 ease-in-out bg-orange-500 w-full origin-left ${
                    isActive(path)
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
