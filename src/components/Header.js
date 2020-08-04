import React, { useState } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <Img
        title="top image"
        alt="top image"
        sizes={coverImg.sizes}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div className="text-white absolute top-0 w-full">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-green-500 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link to="/works" className="font-bold text-2xl">
                {siteTitle}
              </Link>
              <div
                className="cursor-pointer text-xl px-3 py-1 block lg:hidden outline-none focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="bg-white"
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
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (isOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item p-3">
                  <Link to="/" className="flex justify-end px-4">
                    <span>Home</span>
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="nav-item p-3">
                  <Link to="/about" className="flex justify-end px-4">
                    <span>About</span>
                  </Link>
                </li>
                <li className="nav-item p-3">
                  <Link to="/works" className="flex justify-end px-4">
                    Works
                  </Link>
                </li>
                <li className="nav-item p-3">
                  <Link to="/contact" className="flex justify-end px-4">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
