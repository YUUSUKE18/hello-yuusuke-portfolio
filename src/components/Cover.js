import React from "react";
import CoverImg from "../images/mthood.jpg";

const Cover = () => {
  return (
    <div className="relative">
      <div className="cover-image">
        <CoverImg />
      </div>
      <h2 className="absolute text-xl">Hi, I'M YUUSUKE</h2>
    </div>
  );
};

export default Cover;
