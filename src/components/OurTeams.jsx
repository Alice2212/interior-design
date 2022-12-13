import React from "react";
import "./OurTeams.css";
import ourTeamImg from "../assets/img/ourTeams1.jpg";
import Line from "../assets/img/Line.svg";
import firstDesigner from "../assets/img/team1.png";
import secondDesigner from "../assets/img/team2.png";
import thirdDesigner from "../assets/img/team3.png";
import fourthDesigner from "../assets/img/team4.png";
import fifthDesigner from "../assets/img/team5.png";
import sixthDesigner from "../assets/img/team6.png";
import seventhDesigner from "../assets/img/team6.png";
import eigthDesigner from "../assets/img/team8.png";
import Discuss from "./Discuss";

const OurTeams = () => {
  const teamsDetails = [
    {
      image: firstDesigner,
      title: "Shoo Phar Dhie",
      position: "CEO",
    },
    {
      image: secondDesigner,
      title: "Shoo Phar Dhie",
      position: "CTO",
    },
    {
      image: thirdDesigner,
      title: "Shoo Phar Dhie",
      position: "CTO",
    },
    {
      image: fourthDesigner,
      title: "Shoo Phar Dhie",
      position: "CTO",
    },
    {
      image: fifthDesigner,
      title: "Shoo Phar Dhie",
      position: "CTO",
    },
    {
      image: sixthDesigner,
      title: "Shoo Phar Dhie",
      position: "CTO",
    },
    {
      image: seventhDesigner,
      title: "Shoo Phar Dhie",
      position: "CTO",
    },
    {
      image: eigthDesigner,
      title: "Shoo Phar Dhie",
      position: "CTO",
    },
  ];
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

        <div className="teams-images flex flex-wrap justify-center items-center gap-x-8 mt-8 my-auto">
          {teamsDetails.map((data, index) => (
            <div className="designers-images" key={index}>
              <img src={data.image} alt="designerTeam" className="teams-img" />
              <div className="designer-description text-center mx-auto">
                <h1>{data.title}</h1>
                <p>{data.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Discuss />
    </div>
  );
};

export default OurTeams;
