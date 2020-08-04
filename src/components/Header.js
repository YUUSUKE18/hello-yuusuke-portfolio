import React, { useState } from "react";
import { Link } from "gatsby";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <div className="text-white">
      <header className="bg-green-300 flex flex-col justify-around align-middle sm:flex-row p-4">
        <h1 className="text-2xl font-bold">Hello Yuusuke</h1>
        <div class="px-4 cursor-pointer sm:hidden" onClick={handleClick}>
          <svg class="w-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <nav>
          <ul className="flex flex-col sm:flex-row items-center sm:align-baseline">
            <li className="ml-2">
              <Link to="/">Home</Link>
            </li>
            <li className="ml-2">
              <Link to="/about">About</Link>
            </li>
            <li className="ml-2">
              <Link to="/works">Works</Link>
            </li>
            <li className="ml-2">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
