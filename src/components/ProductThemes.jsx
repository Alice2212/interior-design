import React from "react";
import "./ProductThemes.css";
import Line from "../assets/img/Line.svg";
import arrowRight from "../assets/img/arrow-right.png";

function ProductThemes() {
  return (
    <div>
      <div className="product-lineBreak flex mb-4 ">
        <h3 className="pr-4 mt-6 font-medium text-xl ">PRODUCT</h3>
        <img src={Line} alt="line" className="line mt-6" />
      </div>
      <div className="product-title flex flex-wrap justify-between mb-16 md:text-left text-center m-auto ">
        <h2 className="md:w-52 text-2xl font-semibold leading-10 text-center md:text-left md:m-0
        m-auto my-8">
          Choose your product themes.
        </h2>
        <p className="md:w-96 text-lg">
          Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.
        </p>
      </div>

      {/* section for product themes */}
      <div className="flex flex-wrap justify-between items-center ">
        <h1 className="text-xl font-bold ">01</h1>
        <div className="product-middle flex flex-col w-80">
          <h1 className="text-xl font-bold mb-4">Vintage</h1>
          <p className="text-base">
            the use of simple and limited elements to get the best effect or
            impression
          </p>
        </div>
        <img src={arrowRight} alt="arrow-right" className="arrow-right" />
      </div>
    </div>
  );
}

export default ProductThemes;
