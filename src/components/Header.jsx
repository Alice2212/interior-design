
import React from "react";
import Logo from "../asssets/img/logo.svg";
const Header = () => {
	return (
		<header>
			<div className="navbar bg-base-100 lg:w-[85%] sm:w-[100%]  mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-96 text-xl"
						>
							<li>
								<a>Home</a>
							</li>
							<li>
								<a>About Us</a>
							</li>
							<li>
								<a>Services</a>
							</li>
							<li>
								<a>Our Teams</a>
							</li>
						</ul>
					</div>
					<a href="#" className="">
						<img src={Logo} alt="Logo" width={120} height={100} />
					</a>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal flex space-x-8 p-0">
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>About Us</a>
						</li>
						<li>
							<a>Services</a>
						</li>
						<li>
							<a>Our Teams</a>
						</li>
						<li>
							{" "}
							<div>
								<a className="btn">Contact Us</a>
							</div>
						</li>
					</ul>
				</div>
				<div className="navbar-end xl:hidden lg:hidden md:flex sm:flex">
					<a className="btn">Get started</a>
				</div>
			</div>
		</header>
	);
};

import React from 'react'
import Logo from '../assets/img/logo.svg'
const Header = () => {
  return (
    <header>
    <div className="navbar bg-base-100 lg:w-[85%] sm:w-[100%]  mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-96 text-xl">
      <li><a>Home</a></li>
      <li><a>About Us</a></li>
      <li><a>Services</a></li>
      <li><a>Our Teams</a></li>
      </ul>
    </div>
    <a href='#' className=""><img src={Logo} alt="Logo" width={120} height={100} /></a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal flex space-x-8 p-0">
      <li><a>Home</a></li>
      <li><a>About Us</a></li>
      <li><a>Services</a></li>
      <li><a>Our Teams</a></li>
      <li> 
        <div>
        <a className="btn bg-blue border-none">Contact Us</a>
        </div>
   </li>
    </ul>
  </div>
  <div className="navbar-end xl:hidden lg:hidden md:flex sm:flex">
    <a className="btn bg-blue border-none">Contact Us</a>
  </div>
</div>
    </header>
  )
}


export default Header;
