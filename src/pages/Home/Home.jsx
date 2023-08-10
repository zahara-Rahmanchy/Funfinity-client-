import React, {useContext, useEffect, useState} from "react";
import Gallery from "./Gallery";
import Slider from "./Slider";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AboutUs from "./AboutUs";
import Aos from "aos";
import "aos/dist/aos.css";
import {useNavigate} from "react-router-dom";
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";
import Swal from "sweetalert2";
import {AuthContext} from "../../providers/AuthProvider";
import ShopCategory from "./ShopCategory";
import SaleProducts from "./SaleProducts";
import {Ship} from "./Ship";

const Home = () => {
  const {user} = useContext(AuthContext);

  useEffect(() => {
    document.title = `Funfinity`;

    Aos.init({duration: 2000});
  }, []);
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
  const navigate = useNavigate();
  const handledetails = id => {
    if (!user) {
      Swal.fire("You need login to view details");
    }
    navigate(`/toy/${id}`);
  };

  const gradientStyle = {
    background: "linear-gradient(to right, #9363B5, #9363B5)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    height: " 100px",
    // Adjust font weight as needed
  };
  return (
    <div className="">
      <div data-aos="fade-right">
        <Slider />
      </div>
      <Ship />
      <h1 className=" h-full text-rose-400 text-center text-6xl font-bold italic mt-36 md:mt-16">
        Trending Products
      </h1>
      <div data-aos="zoom-in">
        <Gallery />
      </div>

      {/* tabs */}
      <h1 className=" text-blue-500 text-center text-5xl font-bold italic mt-36 md:mt-16">
        Shop By Catagory
      </h1>

      <ShopCategory />
      {/* first extra section */}
      <div
        className="max-w-7xl mx-auto my-20 text-3xl font-bold bg-cyan-200 p-5 h-[150px] flex justify-center"
        data-aos="zoom-in"
      >
        <Marquee speed={100} pauseOnHover={true}>
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
      <h1 className=" text-rose-400 text-center text-5xl font-bold italic mt-36 md:mt-16">
        Products On Sale!
      </h1>
      <SaleProducts />
      {/* second extra section */}
      <div data-aos="zoom-in">
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
