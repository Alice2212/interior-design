import React from "react";
import "./ChooseUs.css";
import Line from "../asssets/img/Line.svg";

function ChooseUs() {
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
          <h1 className="mt-6 font-medium text-xl">Why Choose Us ?</h1>
          <p className="my-6 mt-6 text-lg ">
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </p>
        </div>
        <div className="choose-cards flex gap-x-6 gap-y-4 flex-wrap">
          <div className="card w-96 bg-base-100 drop-shadow-xl">
            <div className="avatar placeholder flex justify-center mt-6">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <span>MX</span>
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">High Quality</h2>
              <p>
                Customize your interior design into a dream place with the best
                designers and quality furniture. We try our best to fulfill your
                expectations.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 drop-shadow-xl">
            <div className="avatar placeholder flex justify-center mt-6">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <span>MX</span>
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">High Quality</h2>
              <p>
                Customize your interior design into a dream place with the best
                designers and quality furniture. We try our best to fulfill your
                expectations.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 drop-shadow-xl">
            <div className="avatar placeholder flex justify-center mt-6">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <span>MX</span>
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">High Quality</h2>
              <p>
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

export default ChooseUs;
