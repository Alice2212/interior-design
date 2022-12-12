import React from "react";
import "./OurTeams.css";
import ourTeamImg from "../assets/img/ourTeams1.jpg";
import Line from "../assets/img/Line.svg";

const OurTeams = () => {
  return (
    <div>
      <section className="ourTeams-wrapper">
        <div className="ourTeams-hero">
          <div className="ourTeams-header mt-8 flex items-center justify-center flex-col">
            <h1 className="text-3xl font-bold my-8"> OUR TEAMS </h1>
            <p className="text-center md:max-w-screen-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="ourTeams-img my-8">
            <img src={ourTeamImg} alt="group-pics" />
          </div>
        </div>
        <div className="ourTeams-designers mt-4 ">
          <div className="ourTeams-title flex mb-4 ">
            <h3 className="pr-4 mt-6 font-medium text-xl">Designers</h3>
            <img src={Line} alt="line" className="line mt-6" />
          </div>
          <div className="designers-body text-lg font-medium ">
            <h1 className="mt-8 mb-4 text-2xl">Creative Person</h1>
            <p className="font-normal">
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeams;
