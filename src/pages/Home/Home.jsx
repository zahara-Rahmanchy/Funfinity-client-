import React, {useContext, useEffect, useState} from "react";
import Gallery from "./Gallery";
import Slider from "./Slider";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AboutUs from "./AboutUs";
import Aos from "aos";
import "aos/dist/aos.css";
import {useNavigate} from "react-router-dom";
import Marquee from "react-fast-marquee";
import Swal from "sweetalert2";
import {AuthContext} from "../../providers/AuthProvider";
import ShopCategory from "./ShopCategory";
import SaleProducts from "./SaleProducts";
import {Ship} from "./Ship";
import NewProduct from "./NewProduct";
import UseSection from "./UseSection";
import SalesAdvert from "./SalesAdvert";
import "../../App.css";

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
      <h1
        className=" h-full text-purple-500 text-center text-6xl font-bold italic mt-36 md:mt-16"
        id="title"
        data-aos="zoom-in"
      >
        Trending Products
      </h1>
      <div data-aos="zoom-in">
        <Gallery />
      </div>
      <div data-aos="zoom-in">
        <UseSection />{" "}
      </div>
      <h1
        className=" h-full text-purple-500 text-center text-5xl font-bold italic mt-36 md:mt-16 mb-10"
        id="title"
        data-aos="zoom-in"
      >
        New Toys
      </h1>
      <NewProduct />
      {/* tabs */}
      <h1
        className=" text-rose-500 text-center text-5xl font-bold italic mt-36 md:mt-16"
        id="title"
        data-aos="zoom-in"
      >
        Shop By Catagory
      </h1>

      <ShopCategory />
      <div data-aos="zoom-in">
        <SalesAdvert />
      </div>
      <div data-aos="zoom-in">
        <AboutUs />
      </div>
      <h1
        className=" text-rose-400 text-center text-5xl font-bold italic mt-36 md:mt-16"
        id="title"
      >
        Products On Sale!
      </h1>
      <SaleProducts />
      {/* second extra section */}
    </div>
  );
};

export default Home;
