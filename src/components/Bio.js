import React from "react";

import PersonalImg from "../images/Yuusuke.jpg";
const Bio = () => {
  return (
    <div id="about" className="py-3 px-2 sm:px-5">
      <div className="flex flex-col sm:flex-row">
        <div className="description sm:w-1/2 my-3 order-2 sm:order-1">
          <h3 className="py-5 text-3xl font-bold">
            Hello! I'm Yuusuke. <br />
            <span className="text-xl font-bold">
              I'm a junior software engineer and creator.
            </span>
          </h3>
          <p className="text-lg">
            This website is my digital garden I have learned and created. You
            can view my works & check my bio, or contact to me.
          </p>
        </div>
        <div className="image-area w-full sm:w-1/2 my-3 order-1 sm:order-2">
          <img src={PersonalImg} className="rounded-full w-32 sm:w-64 m-auto" />
        </div>
      </div>
    </div>
  );
};

export default Bio;
