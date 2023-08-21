import React, {useEffect, useState} from "react";
import "./Slider.css";
import "./NewProduct.css";
const AboutUs = () => {
  const [saleData, setSaleData] = useState([]);

  useEffect(() => {
    fetch("/Seller.json")
      .then(res => res.json())
      .then(data => {
        setSaleData(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1 className="my-20 md:text-4xl text-4xl font-bold italic text-center text-[#7887d3]">
        Most Active and Trusted Sellers!
      </h1>
      <div className="hero max-h-screen max-w-8xl md:mx-auto bg-[#D8B4FE]  bg-opacity-100 spacer">
        <div className="hero-content text-center text-neutral-content">
          {/* <h1 className="mb-5 text-7xl font-bold italic">ABOUT US</h1> */}
          <div className="max-w-3xl">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 place-items-center grid-cols-1 gap-10 ">
              {saleData.map(msg => (
                <div
                  className="bg-[#EABFDB] m-6 shadow-lg shadow-red-300 p-6 rounded-lg w-60"
                  style={{backgroundImage: `url(${"/blob.svg"})`}}
                >
                  <div className="avatar p-5">
                    <div className="w-36 mask  mask-squircle">
                      <img src={msg.image} />
                    </div>
                  </div>{" "}
                  <p className="text-lg text-red-100 font-semibold">
                    {msg.name}
                  </p>
                </div>
              ))}
            </div>

            <button className="btn font-bold bg-gradient-to-r from-[#4f2b68] via-base-600  to-[#9422e5] text-white mt-20">
              See all Reviews
            </button>
          </div>
        </div>
      </div>
      <div class="wave max-w-8xl mx-auto md:h-28">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill-rev"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default AboutUs;
