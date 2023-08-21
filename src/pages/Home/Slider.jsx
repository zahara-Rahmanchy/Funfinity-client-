import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./Slider.css";
import {Player} from "@lottiefiles/react-lottie-player";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
  return (
    <>
      <div
        className="spacer  grid grid-cols-6 mt-50 p place-content-center place-items-center md:gap-0  bg-gradient-to-r from-[#9feef4]   to-[#dcabed] h-[600px]  overflow-hidden"
        style={{backgroundImage: `url(${"/head.svg"})`}}
      >
        <div className="md:col-span-3 flex flex-col space-y-3 px-4 col-span-5 max-w-lg order-1 md:order-1 ">
          <h1 className=" text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-blue-900 via-blue-900 to-[#823EA8] text-purple-50  text-left ms-0 pt-3 mt-0">
            Where Strategy Meets Play, <br /> Funfinity Lights <br></br>the Way
          </h1>
          <p className=" text-white text-left p-2">
            Immerse yourself in a world of endless entertainment, where board
            games and puzzles ignite your imagination
          </p>
          <button className="md:w-2/6 bg-gradient-to-r from-[#9363B5] via-base-600  to-[#9363B5] text-white  px-5 py-3 font-bold text-center rounded-3xl">
            Show Now
          </button>
        </div>
        <div className="md:col-span-3 md:w-3/4 w-full md:place-self-center place-items-start md:order-2 order-2  md:mt-0 mt-10">
          <Player
            src="/banner2.json"
            className="player  md:w-[400px] md:h-[400px] w-[100px] align-top "
            loop
            autoplay
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
