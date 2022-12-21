import React from "react";
import "./Services.css";
import servicesImg from "../assets/img/servicePics.jpg";
import Line from "../assets/img/Line.svg";
import cardImg1 from "../assets/img/cardImg1.jpg";
import cardImg2 from "../assets/img/cardImg2.jpg";
import cardImg3 from "../assets/img/cardImg3.jpg";
import ProductThemes from "./ProductThemes";
import Discuss from "./Discuss";

const servicesCardItems = [
  {
    id: 1,
    image: cardImg1,
    alt: "Interior Decoration",
    heading: "Interior Design",
    details:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
  {
    id: 2,
    image: cardImg2,
    alt: "Consultant image",
    heading: "Consultant",
    details:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
  {
    id: 3,
    image: cardImg3,
    alt: "Group image",
    heading: "construction consultant",
    details:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
];

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
        {/* line break */}
        <div className="services-achievement ">
          <div className="achievement-title flex mb-4 ">
            <h3 className="pr-4 mt-6 font-medium text-xl">ACHIEVEMENT</h3>
            <img src={Line} alt="line" className="line mt-6" />
          </div>
        </div>
        {/* services card section */}
        <div className="services-cards flex flex-wrap md:flex-col m-auto justify-between">
          {servicesCardItems.map((data) => (
            <div
              className="service--card flex flex-wrap md:flex-row items-center gap-2 md:gap-8 mb-2 md:mb-8"
              key={data.id}
            >
              <div className="card-img flex-auto m-auto">
                <img src={data.image} alt={data.alt} />
              </div>
              <div className="card-body flex-auto md:max-w-md ">
                <h1 className="text-center md:text-left text-2xl font-medium">
                  {data.heading}
                </h1>
                <p className="text-center md:text-left">{data.details}</p>
              </div>
            </div>
          ))}
        </div>
        <ProductThemes />
      </section>
      <Discuss />
    </div>
  );
}

export default Services;
