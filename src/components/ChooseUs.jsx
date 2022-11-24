import React from "react";
import "./ChooseUs.css";
import Line from "../assets/img/Line.svg";
import avatar from "../assets/img/avatar.jpg";

function ChooseUs() {
  const cardItems = [
    {
      id: 1,
      image: avatar,
      alt: "person",
      heading: "High Quality",
      details:
        "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
    {
      id: 2,
      img: avatar,
      alt: "person",
      heading: "Professional Designer",
      details:
        "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
    {
      id: 3,
      img: avatar,
      alt: "person",
      heading: "The Best Services",
      details:
        "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
  ];
  return (
    <div>
      <section className="choose-wrapper">
        <div>
          <div className="choose-title flex mb-4 ">
            <h3 className="pr-4 mt-6 font-medium text-xl ">SERVICE</h3>
            <img src={Line} alt="line" className="line mt-6" />
          </div>
        </div>
        <div className="choose-body">
          <h1 className="mt-6 font-medium text-xl text-center md:text-left">Why Choose Us ?</h1>
          <p className="my-6 mt-6 text-lg ">
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </p>
        </div>
        {/* why hose us cards section */}
        <div className="choose-cards flex gap-x-6 gap-y-4 flex-wrap md:mb-12">
          {cardItems.map((data) => (
            <div className="card w-96 bg-base-100 drop-shadow-xl rounded-none" key={data.id}>
              <div className="avatar placeholder flex justify-center mt-6">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <span><img src={data.image} alt={data.alt} /></span>
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{data.heading}</h2>
                <p>
               {data.details}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ChooseUs;
