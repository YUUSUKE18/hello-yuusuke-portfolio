import React, { useState } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-green-300 text-gray-100 sm:items-center sm:flex sm:justify-between px-4">
      <nav className="flex items-center justify-between">
        <div className="text-2xl">
          <Link to="/">{siteTitle}</Link>
        </div>
        <div
          class="block px-4 cursor-pointer sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg class="w-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </nav>
      <div
        className={isOpen ? "block" : "hidden"}
        className="px-2 py-2 sm:block"
      >
        <ul className="sm:flex">
          <li>
            <Link to="/" className="sm:px-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="#about" className="sm:px-2">
              About
            </Link>
          </li>
          <li>
            <Link to="#works" className="sm:px-2">
              Works
            </Link>
          </li>
          <li>
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
