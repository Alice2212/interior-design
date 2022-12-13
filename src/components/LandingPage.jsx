import React from "react";
import "./LandingPage.css";
import kitchenImage from "../asssets/img/kitchen Image.png";
import DiningImage from "../asssets/img/Dining Image.png";
import FourthImage from "../asssets/img/fourth image.png";

function LandingPage() {
	return (
		<div className="Landingpage-wrapper bg-white mx-auto">
			<div classname="Landing-page">
				<div className="flex flex-row gap-4 ml-20">
					<h1 className="Heading text-black text-6xl font-bold w-96 mt-12">
						Design Your interior with high quality.
					</h1>
					<hr className="mt-20 w-96 h-1 bg-gray-100  m:my-10 dark:bg-gray-700" />
				</div>

				<div className="achievement-progress bg-blue-900 text-white p-12 flex flex-wrap flex-col w-44">
					<div className="achievement">
						<h4>350+</h4>
						<small>Project Completed</small>
					</div>
					<div className="achievement my-8">
						<h4>35+</h4>
						<small>Professional Teams</small>
					</div>
					<div className="achievement">
						<h4>15+</h4>
						<small>Years Experience</small>
					</div>
				</div>
				<div className="mt-36">
					<img src={kitchenImage} alt="kitchenimage" className="kitchenImg" />
				</div>
				<div className="flex flex-row gap-4">
					<p className="text-black mt-8 px-2">ABOUT</p>
					<hr className="mt-4  w-96 h-1  bg-gray-100  md:my-10 dark:bg-gray-700" />
				</div>
				<h2 className=" second-section text-black text-2xl font-bold">
					“We're one of the best furniture agency. Prioritizing customers and
					making purchases easy are the hallmarks of our agency.”
				</h2>
				<div className="text-black flex flex-wrap justify-between">
					<div className="flex gap-12 justify-between flex-wrap">
						<div className="mt-20 mb:mb-8">
							<img src={DiningImage} alt="secondImage" className="DiningImg" />
							<div className="smallImg md:block hidden ">
								<img src={FourthImage} alt="fourthImage" className="hero-img" />
							</div>
						</div>

						<div className=" md:w-64 md:mt-52 md:mx-auto mx-auto flex flex-col flex-nowrap md:text-left text-center">
							<p className=" mt-6 w-44">
								Online learning with us does not interfere with your daily life.
								because learning can be done anytime and anywhere.
							</p>
							<div className="my-6">
								<button className="btn btn-primary p-6 rounded-none bg-indigo-900">
									Learn more
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-row gap-4 ml-20">
					<p className="text-black mt-8 px-2">SERVICE</p>
					<hr className="mt-4  w-96 h-1  bg-gray-100  md:my-10 dark:bg-gray-700" />
				</div>
				<div className="ml-20">
					<h3 className="text-black font-bold text-2xl">
						attractive furniture with the best quality.
					</h3>
					<p className="main-section text-black mt-6">
						Customize your interior design into a dream place with the best
						designers and quality furniture. We try our best to fulfill your
						expectations.
					</p>
				</div>
			</div>
		</div>
	);
}
export default LandingPage;
