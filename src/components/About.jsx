import React from "react";
import "./About.css";
import heroImg from "../assets/img/aboutHero.jpg";
import Line from "../assets/img/Line.svg";
import achievementImg from "../assets/img/achievementImg.jpg";
import ChooseUs from "./ChooseUs";
import Discuss from "./Discuss";

function About() {
  return (
    <div>
      <section className="about-wrapper">
        <div className="about-hero">
          <div className="about-header mt-8 flex items-center justify-center flex-col">
            <h1 className="text-3xl font-bold my-8">About</h1>
            <p className="text-center md:max-w-screen-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="hero-img my-8">
            <img src={heroImg} alt="group-pics" />
          </div>
        </div>
        <div className="about-achievement ">
          <div className="achievement-title flex mb-4 ">
            <h3 className="pr-4 mt-6 font-medium text-xl">ACHIEVEMENT</h3>
            <img src={Line} alt="line" className="line mt-6" />
          </div>
          <div className="achievement-body">
            <p className="my-8 text-2xl font-medium leading-10">
              interior customization with Danaanz, best quality with
              professional workers
            </p>
          </div>
          <div className="achievement-summary flex flex-wrap mb-8">
            <img src={achievementImg} alt="" />
            <div className="achievement-progress bg-blue-900 text-white p-12 flex flex-wrap flex-col">
              <div className="achievement">
                <h4>350+</h4>
                <small>Project Completed</small>
              </div>
              <div className="achievement my-8">
                <h4>35+</h4>
                <small>Professional Teams</small>
              </div>
              <div className="achievement">
                <h4>15+</h4>
                <small>Years Experience</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ChooseUs />
      <Discuss />
    </div>
  );
}

export default About;
