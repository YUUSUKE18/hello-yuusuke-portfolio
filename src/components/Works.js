import React from "react";

import myWorks from "../data/myworks";

const Works = () => {
  return (
    <>
      <h2 className="text-2xl text-center font-bold">My Works</h2>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:flex-wrap m-5">
        {myWorks.map((mywork) => {
          return (
            <div className="max-w-sm w-full rounded overflow-hidden shadow-lg p-4 m-auto mt-5 sm:mx-3 sm:w-1/3">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{mywork.title}</div>
                <p className="text-gray-700 text-base">{mywork.description}</p>
                <p className="text-gray-700 text-base">{mywork.tech}</p>
              </div>
              <div className="flex flex-col px-6 py-4">
                <div className="text-center">
                  <a
                    href={mywork.path}
                    className="bg-green-300 text-white p-3 rounded hover:bg-transparent hover:text-green-300 hover:border-solid hover:border-green-300"
                  >
                    Detail Page
                  </a>
                </div>
                <div className="text-center mt-5">
                  <a
                    href={mywork.github}
                    className="bg-green-300 text-white p-3 rounded hover:bg-transparent hover:text-green-300 hover:border-solid hover:border-green-300"
                  >
                    Source
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Works;
