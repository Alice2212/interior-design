import React from "react";
import "./ProductThemes.css";
import Line from "../assets/img/Line.svg";
import arrowRight from "../assets/img/arrow-right.png";

function ProductThemes() {
  // product data
  const productItems = [
    {
      num: "01",
      heading: "Vintage",
      subText:
        "the use of simple and limited elements to get the best effect or impression",
      image: arrowRight,
      alt: "arrow-right",
    },
    {
      num:" 02",
      heading: "Minimalist",
      subText:
        "the use of simple and limited elements to get the best effect or impression",
      image: arrowRight,
      alt: "arrow-right",
    },
    {
      num: "03",
      heading: "Modern",
      subText:
        "the use of simple and limited elements to get the best effect or impression",
      image: arrowRight,
      alt: "arrow-right",
    },
    {
      num: "04",
      heading: "Transitional",
      subText:
        "the use of simple and limited elements to get the best effect or impression",
      image: arrowRight,
      alt: "arrow-right",
    },
  ];

  return (
    <div>
      <div className="product-lineBreak flex mb-4 ">
        <h3 className="pr-4 mt-6 font-medium text-xl ">PRODUCT</h3>
        <img src={Line} alt="line" className="line mt-6" />
      </div>
      <div className="product-title flex flex-wrap justify-between mb-16 md:text-left text-center m-auto ">
        <h2
          className="md:w-52 text-2xl font-semibold leading-10 text-center md:text-left md:m-0
        m-auto my-8"
        >
          Choose your product themes.
        </h2>
        <p className="md:w-96 text-lg">
          Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.
        </p>
      </div>

      {/* section for product themes */}
      <div>
        {productItems.map((data,index) => (
          <div className="flex flex-wrap justify-between items-center md:flex-row flex-col text-center md:text-left mb-12 " key={index}>
            <h1 className="md:text-xl text-2xl font-bold mb-2 md:mb-0 ">{data.num}</h1>
            <div className="product-middle flex flex-wrap  flex-col w-80">
              <h1 className="md:text-xl text-2xl font-bold mb-4">{data.heading}</h1>
              <p className="md:text-base text-lg md:mb-0 mb-2">
                {data.subText}
              </p>
            </div>
            <img src={data.image} alt={data.alt} className="arrow-right" />
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ProductThemes;
