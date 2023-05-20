import React from "react";
import Gallery from "./Gallery";
import Slider from "./Slider";
<img src="https://img.freepik.com/free-psd/banner-template-kids-toys-online-shopping_23-2148772318.jpg?w=1060&t=st=1684506024~exp=1684506624~hmac=283fece9bbeb4ae4e6960062c6a59b046c800f5071ec7f3f5b79907b9c455e2a"></img>;

const Home = () => {
  return (
    <div className="">
      <Slider />
      <h1 className=" text-slate-800 text-center text-5xl font-bold italic mt-36 md:mt-16">
        Our Gallery
      </h1>
      <Gallery />
    </div>
  );
};

export default Home;
