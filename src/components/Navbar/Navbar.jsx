import React, { useEffect, useState } from "react";
import { PhoneCall, Mail, X, Menu } from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
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
          <div className="relative flex items-center justify-between w-full px-4 md:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              aria-label="Toggle menu"
              className="z-20 -ml-5 ,text-gray-800 dark:text-white"
            >
              {showMobileMenu ? (
                <X className="w-10 h-10" />
              ) : (
                <Menu className="w-10 h-10" />
              )}
            </button>

            <div className="absolute -translate-x-1/2 left-1/2">
              <Link to="/">
                <img src="/Nepsky-logo-new.svg" alt="Logo" className="h-14" />
              </Link>
            </div>
          </div>

          <div className="items-center justify-between hidden w-full md:flex">
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
        </div>

        {showMobileMenu && (
          <nav className="px-4 py-5 space-y-4 transition-all duration-300 ease-in-out bg-white shadow-lg dark:bg-gray-900 md:hidden">
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
                onClick={() => setShowMobileMenu(false)}
                className={`block text-base font-medium ${
                  isActive(path)
                    ? "text-orange-500 font-semibold"
                    : "text-gray-800 dark:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
