import React from "react";
import "./MinimalistRoom.css";
import minimalistRoomImg from "../assets/img/MinimalistRoom.jpg";

const MinimalistRoom = () => {
  return (
    <div>
      <section className="minimalist-wrapper">
        <div className="minimalist-hero">
          <div className="minimalist-header mt-8 flex items-center justify-center flex-col">
            <h1 className="text-3xl font-bold my-8">Minimalist Room</h1>
            <p className="text-center md:max-w-screen-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="minimalist-img my-8">
            <img src={minimalistRoomImg} alt="group-pics" />
          </div>
        </div>

        {/* div for project and design process */}
        <div className="minimalist-overview flex justify-between gap-32  ">
          <div className="minimalist-overview  flex-1 ">
            <h1 className="text-semibold">Project Overview</h1>
            <p className="mb-12">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere. Online learning with us does not
              interfere with your daily life. because learning can be done
              anytime and anywhere.
            </p>
            <div className="flex justify-between ">
                <h2>July 22-2022</h2>
                <h2 className="mr-40">Interior Design-Furniture</h2>
            </div>
          </div>
          <div className="minimalist-design flex-1">
            <h1>Design Process</h1>
            <p className="mb-6">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </p>
            <p>
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinimalistRoom;
