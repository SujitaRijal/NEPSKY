import React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { LocationEdit } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#1c1c4e]  pt-10 overflow-hidden p-6 md:px-16 lg:px-20 justify-between">
      <div className="flex flex-col items-start justify-between w-full gap-4 md:flex-row">
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-8 text-lg font-bold text-white">
            Nep<span className="text-orange-500">Sky</span> Tech
          </h3>
          <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-base">
            NepSky — where passion meets profession.
          </p>
        </div>

        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-white">
            <Link to="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link to="/AboutUs" className="text-gray-400 hover:text-white">
              About Us
            </Link>
            <Link to="/Services" className="text-gray-400 hover:text-white">
              Services
            </Link>
            <Link to="/Training" className="text-gray-400 hover:text-white">
              Trainings
            </Link>
            <Link to="/Contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </ul>
        </div>
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
          <ul className="flex flex-col gap-2 text-white">
            <li className="text-gray-400 hover:text-white">Custom Software</li>
            <li className="text-gray-400 hover:text-white">Web Development</li>
            <li className="text-gray-400 hover:text-white">Mobile Apps</li>
            <li className="text-gray-400 hover:text-white">Cloud Solutions</li>
            <li className="text-gray-400 hover:text-white">Trainings</li>
          </ul>
        </div>
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-4 text-lg font-bold text-white">Contact</h3>

          <div className="flex items-start gap-2 text-sm text-gray-400">
            <PhoneCall className="w-4 h-4 mt-1 text-orange-500" />
            <div className="flex flex-wrap gap-2 ">
              <a href="tel:071592028" className="hover:text-white">
                071-592028
              </a>
              <a href="tel:9847008700" className="hover:text-white ">
                +977 9847008700
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3 text-sm text-gray-400 hover:text-white">
            <Mail className="w-4 h-4 text-orange-500" />
            <a href="mailto:info@nepsky.tech">info@nepsky.tech</a>
          </div>
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-400 hover:text-white">
            <LocationEdit className="w-4 h-4 text-orange-500" />
            <a href="">Tilottama-05,Manigram,Rupandehi</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 px-4 py-4 mx-auto mt-10 text-gray-400 border-t border-white md:flex-row max-w-7xl">
        <p>© 2025 NepSky Tech. All Rights Reserved.</p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/people/NepSky-Technology/61574531679330/?_rdr"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook className="w-5 h-5 text-white hover:text-orange-500" />
          </a>
          <a
            href="https://www.linkedin.com/company/nepsky-technology-pvt-ltd/about/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin className="w-5 h-5 text-white hover:text-orange-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
