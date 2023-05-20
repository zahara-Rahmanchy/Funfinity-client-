import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
  return (
    <div className="grid md:grid-cols-6 mt-50 place-content-center place-items-center md:gap-0 gap-9 bg-gradient-to-r from-sky-300  via-sky-200 to-sky-300 h-[400px]">
      <div className="md:col-span-3 flex flex-col space-y-3 px-4 grid-cols-6 max-w-lg">
        <h1 className=" text-3xl font-extrabold text-slate-600  text-left ms-0 pt-3 md:mt-0 mt-32">
          Where Strategy Meets Play, <br /> Funfinity Lights <br></br>the Way
        </h1>
        <p className=" text-black text-left p-2">
          Immerse yourself in a world of endless entertainment, where board
          games and puzzles ignite your imagination
        </p>
        <button className="md:w-2/6 bg-gradient-to-r from-[#9363B5] via-base-600  to-[#9363B5] text-white  px-5 py-3 font-bold text-center rounded-3xl">
          Show Now
        </button>
      </div>
      <div className="md:col-span-3 w-1/2 place-self-center">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={600}
          animation="cubeAnimation"
          organicArrows={false}
          bullets={false}
          startup={false}
        >
          <div className="w-full rounded-md">
            <img
              src="https://i.ibb.co/3sGVqP4/set-challenging-board-games-23-2148705740-removebg-preview.png"
              className="bg-[#83D6E7]"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/fnqqD0s/business-background-design-1343-33.jpg"
              className="bg-[#83D6E7] rounded-md"
            />
          </div>
          <div data-src="https://i.ibb.co/yk4VK55/sudoku-concept-illustration-114360-8388.jpg" />
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Slider;
