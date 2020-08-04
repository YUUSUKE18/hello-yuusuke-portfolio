import React, { useState } from "react";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <header className="flex items-center justify-between max-w-4xl mx-auto p-4 sm:p-8">
        <h1 className="text-green-300 text-2xl font-bold">{siteTitle}</h1>
        <div
          class="sm:hidden flex items-center px-3 py-2 rounded text-gray-600 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            class="w-6"
            w="54"
            h="54"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <nav>
          <div
            className={`${
              isOpen ? `block` : `hidden`
            } sm:flex sm:items-center w-full sm:w-auto`}
          >
            <div className="text-sm">
              <Link
                to="/"
                className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-gray-600"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-gray-600"
              >
                About
              </Link>

              <Link
                to="/works"
                className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-gray-600"
              >
                Works
              </Link>

              <Link
                to="/contact"
                className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-gray-600"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
