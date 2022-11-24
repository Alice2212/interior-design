import React from "react";
import "./AboutSection.css";
import Line from "../asssets/img/Line.svg";
import aboutSectionImg from "../asssets/img/aboutSection.jpg";
import person from "../asssets/img/person.jpg";


function AboutSection() {
  return (
    <div>
      <div className="about-section mx-24 mt-6">
        <div className="about-section--header flex flex-col">
          <div className="flex mb-4">
            <h3 className="pr-4">ABOUT</h3>
            <img src={Line} alt="line" className="w-96" />
          </div>
          <div className="about-heading mb-8">
            <h1>
              “We're one of the best furniture agency. Prioritizing customers
              and making purchases easy are the hallmarks of our agency.”
            </h1>
          </div>
        </div>
        <div className="about-section--detail flex md:flex-1">
          <div className="about-section--left">
            <img src={aboutSectionImg} alt="table and chair" />
          </div>
          <div className="about-section--rigth sticky ">
            <div className="about-rigth--card flex p-2 static">
              <div className="about--card-img">
                <img src={person} alt="person-avatar" />
              </div>
              <div>
                <h3>Arga Danaan</h3>
                <p> CEO of Danaz</p>
              </div>
            </div>
            <div className="about-rigth--text w-48">
              <p>
                Online learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere.
              </p>
              <button className="btn btn-active btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
