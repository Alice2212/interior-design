import React from "react";
import "./Services.css";
import servicesImg from "../assets/img/servicePics.jpg";
import Line from "../assets/img/Line.svg";
import cardImg1 from "../assets/img/cardImg1.jpg";

function Services() {
  return (
    <div>
      <section className="services-wrapper">
        <div className="services-hero">
          <div className="services-header mt-8 flex items-center justify-center flex-col">
            <h1 className="text-3xl font-bold my-8">Services</h1>
            <p className="text-center md:max-w-screen-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="services-img my-8">
            <img src={servicesImg} alt="group-pics" />
          </div>
        </div>
        <div className="services-achievement ">
          <div className="achievement-title flex mb-4 ">
            <h3 className="pr-4 mt-6 font-medium text-xl">ACHIEVEMENT</h3>
            <img src={Line} alt="line" className="line mt-6" />
          </div>
        </div>
        <div className="services-cards flex flex-wrap md:flex-col m-auto justify-between">
          <div className="service--card flex flex-wrap md:flex-row items-center gap-2 md:gap-8 mb-2 md:mb-8">
            <div className="card-img flex-auto m-auto">
              <img src={cardImg1} alt="Interior-Decoration" />
            </div>
            <div className="card-body flex-auto md:max-w-md ">
              <h1 className="text-center md:text-left text-2xl font-medium">
                Interior Design
              </h1>
              <p className="text-center md:text-left">
                Customize your interior design into a dream place with the best
                designers and quality furniture. We try our best to fulfill your
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
