import React from "react";
const AboutUs = () => {
  return (
    <div
      className="hero min-h-screen max-w-5xl mx-auto bg-black bg-opacity-50"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-vector/friends-playing-soccer-table-game-people-players-during-foosball-toy-football-characters-fun-leisure-activity-entertainment-colored-flat-vector-illustration-isolated-white-background_633472-1216.jpg?w=740")`,
      }}
    >
      <div className=" bg-opacity-40 hero-overlay "></div>

      <div className="hero-content text-center text-neutral-content">
        <h1 className="mb-5 text-7xl font-bold italic">ABOUT US</h1>
        <div className="max-w-md">
          {/* <h1 className="mb-5 text-7xl font-bold italic">ABOUT US</h1> */}
          <p className="mb-5 font-bold text-lg bg-black bg-opacity-50 p-6 rounded-lg">
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
