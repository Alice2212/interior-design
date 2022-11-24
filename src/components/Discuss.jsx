import React from "react";
import "./Discuss.css";

function Discuss() {
  return (
    <div>
      <div className="Discuss-wrapper border-none h-40 w-full bg-blue-900 text-white m-auto">
        <div className="discuss-container m-auto flex flex-wrap items-center justify-between">
          <div className="Discuss-title flex-auto">
            <h1>let's discuss making interior like a dream place</h1>
          </div>
          <div className="Discus-body flex-auto">
            <p>
              Contact us below to work together to build your amazing border
            </p>
            <button className="btn border-none text-black bg-white rounded-none ">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discuss;
