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
  return (
    <div className="">
      <div data-aos="fade-right">
        <Slider />
      </div>
      <h1 className=" text-slate-800 text-center text-5xl font-bold italic mt-36 md:mt-16">
        Our Gallery
      </h1>
      <div data-aos="fade-up">
        <Gallery />
      </div>

      {/* tabs */}
      <h1 className=" text-slate-800 text-center text-5xl font-bold italic mt-36 md:mt-16">
        Shop By Catagory
      </h1>

      <div className="my-20 max-w-5xl mx-auto" data-aos="fade-flip">
        <div className="tabs tabs-boxed bg-sky-300 mb-4 text-black md:grid md:grid-cols-4  md:space-x-4 justify-between md:space-y-2  md:p-4 space-y-4 mx-auto">
          {uniqueCat.map((c, index) => (
            <button
              className="tab text-white font-semibold hover:tab-active btn border-s-0 border-b-0 border-t-0  btn-error w-full"
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
                <div>
                  <p>Price: $ {t.Price}</p>
                  <p>Rating: {t.Rating} stars</p>
                </div>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary btn-xs"
                    onClick={() => handledetails(t._id)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* first extra section */}
      <div
        className="max-w-7xl mx-auto my-20 text-3xl font-bold bg-cyan-200 p-5"
        data-aos="zoom-in"
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
      <div data-aos="zoom-in">
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
