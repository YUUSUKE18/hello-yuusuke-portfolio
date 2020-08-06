import React from "react";
import { FaGithubAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex justify-center m-10">
      <div className="github px-5">
        <a href="https://github.com/YUUSUKE18">
          <FaGithubAlt size={32} />
        </a>
      </div>
      <div className="linkedin px-5">
        <a href="https://linkedin.com/in/yuusuke-okamoto-352828133">
          <FaLinkedin size={32} />
        </a>
      </div>
      <div className="email px-5">
        <a href="yuusuke.job.1018@gmail.com">
          <FaEnvelope size={32} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
