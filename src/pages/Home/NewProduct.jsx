import React, {useEffect, useState} from "react";
import "./Slider.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../App.css";
// import "./NewProduct.css";
const NewProduct = () => {
  const [saleData, setSaleData] = useState([]);
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  useEffect(() => {
    fetch("/NewProduct.json")
      .then(res => res.json())
      .then(data => {
        setSaleData(data);
      })
      .catch(error => console.log(error));
  }, []);
  // bg-[#eabfdb]
  let colors = [
    "#eabfdb", //purple
    "#a5c9f9", //blue
    "#a6fde5", //light green
    "#ffac8e", //orange

    "#5adbaa", //paste
    "#fdacac", //pink
    "#fbff93", //yellow
    "#c89bff", //violet
  ];

  return (
    <>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto place-items-center ">
        {saleData.map((msg, index) => (
          <div
            className={`card rounded-none w-72 h-[350px] bg-[]  p-2  m-3 bg-[${
              colors[index % colors.length]
            }]`}
            data-aos="zoom-in"
          >
            <figure>
              <img src={msg.image} alt="Shoes" className="" />
            </figure>
            <div className="card-body justify-center ">
              <h2
                className="card-title text-center  mx-auto text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-purple-800 to-purple-800"
                id="title"
              >
                {msg.title}
              </h2>
              <p className="text-center text-purple-700 text-xl" id="title">
                $<span className="text-rose-500">{msg.originalPrice}</span>
              </p>

              <div className="card-actions justify-center">
                <button
                  className="btn bg-gradient-to-r  from-purple-800  to-blue-300    btn-sm  text-white shadow-lg"
                  id="body-text"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewProduct;
