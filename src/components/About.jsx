import React from "react";
import "./About.css";
import heroImg from "../asssets/img/aboutHero.jpg";
import Line from "../asssets/img/Line.svg";
import achievementImg from "../asssets/img/achievementImg.jpg";


function About() {
  return (
    <div>
      <section className="about-wrapper">
        <div className="about-hero">
          <div className="about-header mt-8 flex items-center justify-center flex-col">
            <h1 className="text-3xl font-bold my-8">About</h1>
            <p className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="hero-img my-8">
            <img src={heroImg} alt="group-pics" />
          </div>
        </div>
        <div className="about-achivement ">
          <div className="achivement-title flex mb-4">
            <h3 className="pr-4 ">ACHIEVEMENT</h3>
            <img src={Line} alt="line" className="line" />
          </div>
          <div className="achivement-body">
            <p className="my-8 text-2xl font-medium leading-10">
              interior customization with Danaanz, best quality with
              professional workers
            </p>
          </div>
          <div className="achivement-summary flex flex-wrap">
            {/* <h1 className="">welcome</h1> */}
            <img src={achievementImg} alt="" />
            <div className="achievement-progress p-12">
              <div className="achievement">
                <h4>350+</h4>
                <small>Project Completed</small>
              </div>
              <div className="achievement">
                <h4>350+</h4>
                <small>Project Completed</small>
              </div>
              <div className="achievement">
                <h4>350+</h4>
                <small>Project Completed</small>
              </div>
            </div>
          </div>
        </div>
        <div className="about-services"></div>
      </section>
    </div>
  );
}

export default About;
