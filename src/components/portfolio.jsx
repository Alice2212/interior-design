import React from "react";
import "./portfolio.css";
import firstImage from "../asssets/img/first image.png";
import secondImage from "../asssets/img/second image.png";
import thirdImage from "../asssets/img/third image.png";

function Portfolio() {
	return (
		<div className=" wrapper bg-white">
			<div className="text-center text-black">
				<h1>Portfolio</h1>
				<p className="">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>
				<img src={firstImage} width="" height="" alt="firstImage" />
				<div className="flex-row">
					<p className="text-black">Portfolio</p>
					<hr className="my-4  w-96 h-1  bg-gray-100  md:my-10 dark:bg-gray-700" />
					<img src={secondImage} alt="secondImage" />
				</div>
			</div>
			<img src={thirdImage} alt="thirdImage" />
		</div>
	);
}
export default Portfolio;
