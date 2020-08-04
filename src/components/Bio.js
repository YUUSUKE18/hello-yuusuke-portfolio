import React from "react";

import PersonalImg from "../images/Yuusuke.jpg";
const Bio = () => {
  return (
    <div id="about" className="py-5">
      <h2 className="text-center text-2xl">About Me</h2>
      <div className="flex flex-col sm:flex-row">
        <div className="image-area sm:w-1/2 my-3">
          <img src={PersonalImg} className="rounded-full w-64 m-auto" />
        </div>
        <div className="description sm:w-1/2 my-3">
          <h3 className="py-5 text-xl">
            Hello! I'm Yuusuke. I'm a junior software engineer and creator.
          </h3>
          <p>
            This website is my digital garden I have learned and created. You
            can view my works & check my bio, or contact to me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
