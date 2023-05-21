import React, {useEffect, useState} from "react";
import Gallery from "./Gallery";
import Slider from "./Slider";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AboutUs from "./AboutUs";
import Aos from "aos";
import "aos/dist/aos.css";
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";
{
  /* <img src="https://img.freepik.com/free-psd/banner-template-kids-toys-online-shopping_23-2148772318.jpg?w=1060&t=st=1684506024~exp=1684506624~hmac=283fece9bbeb4ae4e6960062c6a59b046c800f5071ec7f3f5b79907b9c455e2a"></img>; */
}

const Home = () => {
  const [cat, setcat] = useState([]);
  const [currentCat, setCurrentCat] = useState("Architecture Puzzles");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    Aos.init();
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
      <Slider data-aos="fade-right" />
      <h1 className=" text-slate-800 text-center text-5xl font-bold italic mt-36 md:mt-16">
        Our Gallery
      </h1>
      <Gallery data-aos="fade-up" />

      {/* tabs */}
      <h1 className=" text-slate-800 text-center text-5xl font-bold italic mt-36 md:mt-16">
        Shop By Catagory
      </h1>

      <div className="my-20 max-w-5xl mx-auto" data-aos="fade-flip">
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
      {/* first extra section */}
      <div
        className="max-w-7xl mx-auto my-20 text-3xl font-bold bg-cyan-200 p-5"
        data-aos="fade-zoom-in"
      >
        <Marquee speed={400} pauseOnHover={true}>
          <p className="text-3xl font-bold px-3 text-blue-500">
            Unbeatable prices on board games and puzzles - starting from just
            $9.99!
          </p>
          <p className="text-red-400">
            Special discounts and bundle offers available - save up to 50% on
            select board games and puzzles!"
          </p>
          <p className="">
            Buy one, get one free on all puzzle sets - limited time offer!"
          </p>

          <p>Enjoy free shipping on all orders over $25 - no code required!"</p>
          <p className="text-blue-500">
            Save 20% off your first purchase with our exclusive new customer
            offer!"
          </p>
          <p>
            Join our loyalty program and earn points on every purchase - redeem
            for discounts and exclusive rewards!"
          </p>

          <p className="text-yellow-600">
            Subscribe to our newsletter and receive a 10% discount code
            instantly!"
          </p>
          <p className="text-pink-400">
            Follow us on social media for daily deals and flash sales on board
            games and puzzles!
          </p>
        </Marquee>
      </div>
      {/* second extra section */}
      <AboutUs data-aos="flip-left" />
    </div>
  );
};

export default Home;
