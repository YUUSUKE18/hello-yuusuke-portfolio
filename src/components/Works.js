import React from "react";

import myWorks from "../data/myworks";

const Works = () => {
  return (
    <>
      <h2 className="text-2xl text-center">My Works</h2>
      <div className="flex flex-col sm:flex-row sm:justify-center m-5">
        {myWorks.map((mywork) => {
          return (
            <div class="max-w-sm rounded overflow-hidden shadow-lg mt-3 sm:mx-3">
              <img class="w-full" src={mywork.image} alt={mywork.title} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{mywork.title}</div>
                <p class="text-gray-700 text-base">{mywork.description}</p>
              </div>
              <div class="px-6 py-4">
                <a href={mywork.path}>Detail Page</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Works;
