import React from "react";
import {FiInstagram} from "react-icons/fi";
import {FaFacebook, FaPinterest, FaTwitterSquare} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-sky-300  bottom-0 mt-96">
        <div className="form-control w-80">
          <span className=" text-white font-bold text-xl">
            {" "}
            Subscribe For Newsletter!
          </span>
          <label className="label">
            <span className="label-text text-base font-semibold">
              Enter your email address
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-error text-white absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-bold text-base text-black font-semibold">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">All Toys</a>
          <a className="link link-hover">Blog</a>
        </div>
        <div>
          <span className=" text-black font-bold text-xl">Connect With Us</span>
          <a className="">Mobile: 018833787883</a>
          <a className="link link-hover">Email: funfinityGames@gmail.com</a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t-  bg-purple-500 text-base-content border-base-300">
        <div className="items-center grid-flow-col text-white">
          <p>
            <p className=" font-serif italic text-3xl align-top font-bold pt-0 mt-0  text-transparent bg-clip-text bg-gradient-to-r  from-sky-100 via-white to-sky-200 ">
              FUNFINITY
            </p>
            <br />
            Copyright © 2023 - All rights reserved
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <FiInstagram className="text-3xl text-white" />
            </a>
            <a></a>
            <FaFacebook className="text-3xl text-white" />
            <a className="text-3xl text-white">
              <FaPinterest />
            </a>

            <a className="text-3xl text-white">
              <FaTwitterSquare />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
