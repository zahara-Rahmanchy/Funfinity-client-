import React, {useEffect, useState} from "react";
import Gallery from "./Gallery";
import Slider from "./Slider";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AboutUs from "./AboutUs";
{
  /* <img src="https://img.freepik.com/free-psd/banner-template-kids-toys-online-shopping_23-2148772318.jpg?w=1060&t=st=1684506024~exp=1684506624~hmac=283fece9bbeb4ae4e6960062c6a59b046c800f5071ec7f3f5b79907b9c455e2a"></img>; */
}

const Home = () => {
  const [cat, setcat] = useState([]);
  const [currentCat, setCurrentCat] = useState("Architecture Puzzles");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`https://funfinity-toys-server.vercel.app/toys`)
      .then(res => res.json())
      .then(data => setcat(data));
  }, []);

  const uniqueCat = [...new Set(cat.map(c => c.subCategory))];

  const handleTab = c => {
    // console.log(c);
    setCurrentCat(c);
  };
  useEffect(() => {
    fetch(`https://funfinity-toys-server.vercel.app/toys/${currentCat}`)
      .then(res => res.json())
      .then(data => setToys(data));
  }, [currentCat]);

  return (
    <div className="">
      <Slider />
      <h1 className=" text-slate-800 text-center text-5xl font-bold italic mt-36 md:mt-16">
        Our Gallery
      </h1>
      <Gallery />

      {/* tabs */}
      <h1 className=" text-slate-800 text-center text-5xl font-bold italic mt-36 md:mt-16">
        Shop By Catagory
      </h1>

      <div className="my-20 max-w-5xl mx-auto">
        <div className="tabs tabs-boxed bg-sky-300 mb-4 text-black grid md:grid-cols-4 grid-col-2 md:space-x-4 justify-between md:space-y-2  md:p-4 space-y-4 mx-auto">
          {uniqueCat.map((c, index) => (
            <button
              className="tab text-white font-semibold hover:tab-active btn border-s-0 border-b-0 border-t-0  btn-error"
              onClick={() => handleTab(c)}
              key={index}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="card bg-purple-100 grid md:grid-cols-3 md:space-x-8 space-y-4 justify-center p-3 grid-cols-1">
          {toys.map(t => (
            <div className="card  bg-base-100 shadow-xl" key={t._id}>
              <figure>
                <img src={t.picture} className="md:w-52 mt-2 rounded-md" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{t.Name}</h2>

                <p>{t.Rating}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

export default Home;
