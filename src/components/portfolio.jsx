import React from "react";
import "./portfolio.css";
import firstImage from "../asssets/img/first image.png";
import secondImage from "../asssets/img/second image.png";
import thirdImage from "../asssets/img/third image.png";
import fourthImage from "../asssets/img/fourth image.png";
import fifthImage from "../asssets/img/fifth image.png";
import sixthImage from "../asssets/img/sixth image.png";

function Portfolio() {
	return (
		<div className=" wrapper bg-white">
			<div className="text-center text-black">
				<h1 className="text-4xl font-bold">Portfolio</h1>
				<p className="w-96 mx-auto">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>
				<img src={firstImage} width="" height="" alt="firstImage" />
				<div className="flex flex-row gap-4">
					<p className="text-black mt-8 px-2">Portfolio</p>
					<hr className="my-4  w-96 h-1  bg-gray-100  md:my-10 dark:bg-gray-700" />
				</div>
				<div className="">
					<img src={fourthImage} alt="fourthImage" />
					<div className="flex justify-between">
						<img src={secondImage} alt="secondImage" />

						<div>
							<h2 className="text-2xl font-bold">Minamalist Room</h2>
							<p className="w-48">
								Online learning with us does not interfere with your daily life.
								because learning can be done anytime and anywhere.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-end">
				<h3 className="text-black text-2xl font-bold">Vintage Room</h3>
				<p className="text-black">
					Online learning with us does not interfere with your daily life.
					because learning can be done anytime and anywhere.
				</p>
				<img className="my-8" src={thirdImage} alt="thirdImage" />
			</div>
			<img src={fifthImage} alt="fifthImage" />
			<img src={sixthImage} alt="sixthImage" />
		</div>
	);
}
export default Portfolio;
