import React from "react";
import "./ProductThemes.css";
import Line from "../assets/img/Line.svg";

function ProductThemes() {
  return (
    <div>
      <div className="product-lineBreak flex mb-4 ">
        <h3 className="pr-4 mt-6 font-medium text-xl ">PRODUCT</h3>
        <img src={Line} alt="line" className="line mt-6" />
      </div>
      <div className="product-title flex justify-between ">
        <h2 className="w-52 text-2xl">Choose your product themes</h2>
        <p className="w-80">
          Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.
        </p>
      </div>
    </div>
  );
}

export default ProductThemes;
