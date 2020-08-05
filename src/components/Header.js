import React, { useState } from "react";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="bg-green-300 text-gray-100 sm:items-center sm:flex sm:justify-between px-4">
      <nav className="flex items-center justify-between">
        <div className="text-2xl">
          <Link to="/">{siteTitle}</Link>
        </div>
        <div
          class="block px-2 py-2 cursor-pointer sm:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg class="w-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </nav>
      <div
        className={navOpen ? "block" : "hidden"}
        className="px-2 py-2 hidden sm:block"
      >
        <ul className="sm:flex">
          <li className="text-center mt-1 sm:mt-0 hover:bg-white hover:text-green-300">
            <Link to="/" className="sm:px-2">
              Home
            </Link>
          </li>
          <li className="text-center mt-1 sm:mt-0 hover:bg-white hover:text-green-300">
            <Link to="#about" className="sm:px-2">
              About
            </Link>
          </li>
          <li className="text-center mt-1 sm:mt-0 hover:bg-white hover:text-green-300">
            <Link to="#works" className="sm:px-2">
              Works
            </Link>
          </li>
          <li className="text-center mt-1 sm:mt-0 hover:bg-white hover:text-green-300">
            <Link to="#Contact" className="sm:px-2">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
