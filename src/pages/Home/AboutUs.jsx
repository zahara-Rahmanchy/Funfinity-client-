import React from "react";
const AboutUs = () => {
  return (
    <div
      className="hero min-h-screen max-w-7xl md:mx-auto bg-black bg-opacity-50"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1489367874814-f5d040621dd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=846&q=80")`,
      }}
    >
      <div className=" bg-opacity-40 hero-overlay "></div>

      <div className="hero-content text-center text-neutral-content">
        {/* <h1 className="mb-5 text-7xl font-bold italic">ABOUT US</h1> */}
        <div className="max-w-3xl">
          <h1 className="mb-5 md:text-7xl text-4xl font-bold italic">
            ABOUT US
          </h1>
          <p className="mb-5 font-bold text-lg bg-sky-900 bg-opacity-70  p-6 rounded-lg md:mt-20 text-purple-100">
            Welcome to our Board and Puzzle Game Paradise! Discover a
            captivating collection of mind-bending challenges and strategic
            gameplay. Explore a diverse selection of board games and puzzles for
            all ages and skill levels. Immerse yourself in thrilling strategy
            games and brain-teasing puzzles. Browse our user-friendly catalog to
            find the perfect game for you. Join a vibrant community of gaming
            enthusiasts. Stay updated with the latest releases and exclusive
            offers. Unleash your inner strategist and sharpen your
            problem-solving skills. Let the fun begin and bring people together
            through the power of play. Unlock endless possibilities and
            memorable gaming experiences today!
          </p>
          <button className="btn font-bold bg-gradient-to-r from-[#4f2b68] via-base-600  to-[#9422e5] text-white ">
            Know More About US
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
