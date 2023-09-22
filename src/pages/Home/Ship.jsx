import React from "react";
import {Player} from "@lottiefiles/react-lottie-player";
export const Ship = () => {
  return (
    <div className="max-w-6xl mx-auto md:mt-10 z-10">
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className=" flex flex-row items-center p-4 lg:ms-3 ms-0 lg:justify-center md:mt-0 mt-32">
          <Player
            src="/animation_ll5e41k2.json"
            className="player  w-[200px] h-[150px]"
            loop
            autoplay
          />
          <p className="text-gray-700 text-3xl font-bold ms-2 z-10">
            Cash on Delivery
          </p>
          {/* <p className="text-4xl font-bold text-orange-300">Courses</p> */}
        </div>

        <div className=" flex flex-row items-center p-4">
          <Player
            src="/animation_ll5e2xec.json"
            className="player  w-[200px] h-[150px]"
            loop
            autoplay
          />
          <p className="text-gray-700 text-3xl font-bold z-10">Free Shipping</p>
        </div>

        <div className="flex flex-row items-center p-4 me-3">
          <Player
            src="/animation_ll5e4u8f.json"
            className="player  w-[200px] h-[150px]"
            loop
            autoplay
          />
          <p className="text-gray-700 text-3xl font-bold z-10">24/7 Service</p>
          {/* <p className="text-4xl font-bold text-orange-300">Students</p> */}
        </div>
      </div>
    </div>
  );
};
