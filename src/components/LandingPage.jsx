import React from "react";
import "./LandingPage.css";
import kitchenImage from "../asssets/img/kitchen Image.png";
import DiningImage from "../asssets/img/Dining Image.png";
import FourthImage from "../asssets/img/fourth image.png";
import ArrowRight from "../asssets/img/arrow right.png";
import SittingRoom from "../asssets/img/sitting room.png";

function LandingPage() {
	const pages = [
		{
			num: "01",
			heading: "Interior Design",
			image: ArrowRight,
			alt: "arrow-right",
		},
		{
			num: " 02",
			heading: "Consultant",
			image: ArrowRight,
			alt: "arrow-right",
		},
		{
			num: "03",
			heading: "Construction Consultant",
			image: ArrowRight,
			alt: "arrow-right",
		},
	];

	return (
		<div className="bg-white m-auto">
			<div className="Landingpage-wrapper  mx-auto">
				<div classname="Landing-page">
					<div className="flex flex-row gap-4">
						<h1 className="Heading text-black text-6xl font-bold w-96 mb-12">
							Design Your interior with high quality.
						</h1>
						<hr className="mt-20 w-96 h-1 bg-gray-100  m:my-10 dark:bg-gray-700" />
					</div>

					<div className="achievement-progress bg-blue-900 text-white p-12 flex flex-wrap flex-col w-44 -mt-44">
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
					<div className="mb-44">
						<img src={kitchenImage} alt="kitchenimage" className="kitchenImg" />
					</div>
					<div className="mb-64">
						<div className="flex flex-row gap-4">
							<p className="text-black mt-8 px-2">ABOUT</p>
							<hr className="mt-4  w-96 h-1  bg-gray-100  md:my-10 dark:bg-gray-700" />
						</div>
						<h2 className=" second-section text-black text-2xl font-bold">
							“We're one of the best furniture agency. Prioritizing customers
							and making purchases easy are the hallmarks of our agency.”
						</h2>
					</div>
					<div className="text-black flex flex-wrap justify-between m-auto -mt-64">
						<div className="flex gap-12 justify-between flex-wrap">
							<div className="mt-20 mb:mb-8">
								<img
									src={DiningImage}
									alt="secondImage"
									className="DiningImg"
								/>
								<div className="smallImg md:block hidden ">
									<img
										src={FourthImage}
										alt="fourthImage"
										className="hero-img"
									/>
								</div>
							</div>

							<div className="md:w-64 w-96 md:mx-auto flex flex-col flex-wrap justify-center  md:text-left text-center">
								<p className="  ">
									Online learning with us does not interfere with your daily
									life. because learning can be done anytime and anywhere.
								</p>
								<div className="my-6">
									<button className="btn btn-primary p-6 rounded-none bg-indigo-900">
										Learn more
									</button>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="last-section absolute">
							<div className="flex flex-row gap-4 ml-12">
								<p className="text-black mt-8 px-2">SERVICE</p>
								<hr className="mt-4  w-96 h-1  bg-gray-100  md:my-10 dark:bg-gray-700" />
							</div>
							<div className="ml-16">
								<h3 className="text-black font-bold text-2xl">
									attractive furniture with the best quality.
								</h3>
								<p className="main-section text-black ">
									Customize your interior design into a dream place with the
									best designers and quality furniture. We try our best to
									fulfill your expectations.
								</p>
								<div>
									{pages.map((data, index) => (
										<div
											className="flex flex-wrap justify-between items-center md:flex-row flex-col text-center md:text-left mb-12 "
											key={index}
										>
											<h1 className="md:text-xl text-2xl font-bold mb-2 md:mb-0 text-black ">
												{data.num}
											</h1>
											<div className="product-middle flex flex-nowrap  flex-col md:w-72 text-black mt-4">
												<h1 className="md:text-xl text-2xl font-bold mb-4">
													{data.heading}
												</h1>
											</div>
											<img
												src={data.image}
												alt={data.alt}
												className="arrow-right"
											/>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="md:ml-44 m-auto relative mt-72">
							<img src={SittingRoom} alt="sittingroom" className="sittingImg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default LandingPage;
