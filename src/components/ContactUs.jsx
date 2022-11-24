import React from "react";
import "./ContactUs.css";

function ContactUs() {
	return (
		<div className="body">
			<div className="wrapper">
				<div className="header">
					<h1>Contact Us</h1>
					<p className="text-center text-black">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout.
					</p>
				</div>

				<div className="form flex flex-col justify-center items-center text-black">
					<div className="flex flex-row gap-4 text-black">
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">First name</span>
							</label>
							<input
								type="text"
								placeholder="First name"
								className="input input-bordered w-full max-w-xs bg-white"
							/>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Last name</span>
							</label>
							<input
								type="text"
								placeholder="Last name"
								className="input input-bordered w-full max-w-xs bg-white"
							/>
						</div>
					</div>

					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text ">Email</span>
						</label>
						<input
							type="text"
							placeholder="Email"
							className="input input-bordered w-full max-w-xs bg-white"
						/>
					</div>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">Phone Number</span>
						</label>
						<select class="block w-full mt-1 bg-white">
							<option>US+445</option>
							<option>Ghana+91</option>
							<option>Nepal+01</option>
							<option>Nigeria+234</option>
						</select>
						<input
							type="text"
							placeholder="Phone Number"
							className="input input-bordered w-full max-w-xs bg-white"
						/>
						<label class="block">
							<span class="">Messages</span>
							<textarea placeholder="Your messages"
								class="mt-1 block w-full bg-white border border-[#9C9C9C] focus:outline outline-blue-500"
								rows="3"
							></textarea>
						</label>
					</div>
					<div className="my-6">
						<button className="btn btn-primary p-6 rounded-none bg-indigo-900">
							Send Message
						</button>
					</div>
				</div>

				<div className="flex flex-row gap-4">
					<h2 className="text-black mt-6 px-4">Location </h2>
					<hr className="my-4  w-96 h-1 bg-gray-100  md:my-10 dark:bg-gray-700"  />
				</div>

				<div className="location-section flex justify-between flex-wrap">
					<div className="first-section">
						<h3 className="text-black">Visit Our Stores</h3>
						<p>Find us at these locations.</p>
						<h4 className="text-black mt-6">Email</h4>
						<p className="mb-6">dananz@gmail.com</p>
						<h4 className="text-black">Phone</h4>
						<p>+62 815 002 1000</p>
					</div>

					<div className="second-section max-w-xs">
						<h4 className="text-black">Jakarta</h4>
						<p className=" mb-8">
							Customize your interior design into a dream place with the best
							designers and quality furniture. We try our best to fulfill your
							expectations.
						</p>

						<h4 className="text-black">Yogyakarta</h4>
						<p >
							Customize your interior design into a dream place with the best
							designers and quality furniture. We try our best to fulfill your
							expectations.
						</p>
					</div>

					<div className="third-section max-w-xs">
						<h4 className="text-black">Surakarta</h4>
						<p className="mb-8">
							Customize your interior design into a dream place with the best
							designers and quality furniture. We try our best to fulfill your
							expectations.
						</p>

						<h4 className="text-black">Bandung</h4>
						<p>
							Customize your interior design into a dream place with the best
							designers and quality furniture. We try our best to fulfill your
							expectations.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
