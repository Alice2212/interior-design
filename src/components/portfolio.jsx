import React from "react";
import "./portfolio.css";
import firstImage from "../assets/img/first image.png";
import secondImage from "../assets/img/second image.png";
import thirdImage from "../assets/img/third image.png";
import fourthImage from "../assets/img/fourth image.png";
import fifthImage from "../assets/img/fifth image.png";
import sixthImage from "../assets/img/sixth image.png";

function Portfolio() {
	return (
		<div className=" portfolio-wrapper bg-white mx-auto">
			<div className="port ">
				<div className="text-center text-black ">
					<h1 className="text-4xl font-bold mb-12">Portfolio</h1>
					<p className="md:w-96 mx-auto w-46 ">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout.
					</p>
					<div className="mt-20">
						<img src={firstImage} alt="firstImage" />
					</div>

					<div className="flex flex-row gap-4">
						<p className="text-black mt-8 px-2">Portfolio</p>
						<hr className="my-4  w-96 h-1  bg-gray-100  md:my-10 dark:bg-gray-700" />
					</div>
				</div>

				<div className="text-black flex flex-wrap justify-between">
					<div className="flex gap-12 justify-between flex-wrap">
						<div className="mt-20 mb:mb-8">
							<img src={secondImage} alt="secondImage" className="secondImg" />
							<div className="smallImg md:block hidden ">
								<img src={fourthImage} alt="fourthImage" className="hero-img" />
							</div>
						</div>

						<div className=" md:w-64 md:mt-52 md:mx-auto mx-auto flex flex-col flex-nowrap md:text-left text-center">
							<h2 className="text-2xl font-bold ">Minamalist Room</h2>
							<p className=" mt-6 ">
								Online learning with us does not interfere with your daily life.
								because learning can be done anytime and anywhere.
							</p>
							<div className="my-6">
								<button className="btn btn-primary p-6 rounded-none bg-indigo-900">
									See more
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* second portfolio */}
				<div className="text-black flex flex-wrap justify-between">
					<div className="secondTxt md:w-64 md:mt-52 md:mx-auto mx-auto flex flex-col flex-nowrap md:text-left text-center">
						<h2 className="text-2xl font-bold ">Vintage Room</h2>
						<p className=" mt-6 ">
							Online learning with us does not interfere with your daily life.
							because learning can be done anytime and anywhere.
						</p>
						<div className="my-6">
							<button className="btn btn-primary p-6 rounded-none bg-indigo-900">
								See more
							</button>
						</div>
					</div>
					<div className="flex gap-12 justify-between flex-wrap secondPortfolio">
						<div className="mt-12 mb:mb-8">
							<img src={thirdImage} alt="thirdImage" className="thirdImg" />
							<div className="smallImg md:block hidden ">
								<img src={fourthImage} alt="fourthImage" className="hero-img" />
							</div>
						</div>
					</div>
				</div>

				{/* third portfolio begin here */}

				<div className="text-black flex flex-wrap justify-between mx-auto">
					<div className="flex gap-12 justify-between flex-wrap">
						<div className="mt-20 mb:mb-8">
							<img src={fifthImage} alt="fifthImage" className="fifthImg" />
							<div className="smallImg md:block hidden ">
								<img src={fourthImage} alt="fourthImage" className="hero-img" />
							</div>
						</div>

						<div className=" md:w-64 md:mt-52 md:mx-auto mx-auto flex flex-col flex-nowrap md:text-left text-center">
							<h2 className="text-2xl font-bold ">Modern Room</h2>
							<p className=" mt-6 ">
								Online learning with us does not interfere with your daily life.
								because learning can be done anytime and anywhere.
							</p>
							<div className="my-6">
								<button className="btn btn-primary p-6 rounded-none bg-indigo-900">
									See more
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* fourth portfolio */}
				<div className="text-black flex flex-wrap justify-between">
					<div className="secondTxt md:w-64 md:mt-52 md:mx-auto mx-auto flex flex-col flex-nowrap md:text-left text-center">
						<h2 className="text-2xl font-bold ">Transitional Room</h2>
						<p className=" mt-6 ">
							Online learning with us does not interfere with your daily life.
							because learning can be done anytime and anywhere.
						</p>
						<div className="my-6">
							<button className="btn btn-primary p-6 rounded-none bg-indigo-900">
								See more
							</button>
						</div>
					</div>
					<div className="flex gap-12 justify-between flex-wrap secondPortfolio">
						<div className="mt-12 mb:mb-8">
							<img src={sixthImage} alt="sixthImage" className="sixthImg" />
							<div className="smallImg md:block hidden ">
								<img src={fourthImage} alt="fourthImage" className="hero-img" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Portfolio;
