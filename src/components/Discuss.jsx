import React from "react";
import "./Discuss.css";

function Discuss() {
  return (
    <div>
      <div className="Discuss-wrapper border-none h-80  md:h-40 w-full bg-blue-900 text-white m-auto flex flex-wrap justify-between items-center">
        <div className="discuss-container m-auto flex flex-wrap justify-between items-center">
          <div className="Discuss-title">
            <h1 className="text-2xl md:text-3xl font-medium">let's discuss making interior like a dream place!</h1>
          </div>
          <div className="Discuss-body text-base md:text-base ">
            <p className="mb-6">
              Contact us below to work together to build your amazing border
            </p>
            <button className="btn border-none text-black bg-white rounded-none hover:bg-blue-500 hover:text-slate-50">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discuss;
