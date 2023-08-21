import React, {useEffect, useState} from "react";
import "./Slider.css";
import Aos from "aos";
import "aos/dist/aos.css";
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
  return (
    <>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto place-items-center ">
        {saleData.map(msg => (
          <div
            className="card rounded-none w-72 bg-[#eabfdb] h-[350px] p-2  m-3"
            data-aos="zoom-in"
          >
            <figure>
              <img src={msg.image} alt="Shoes" className="" />
            </figure>
            <div className="card-body justify-center ">
              <h2 className="card-title text-center w-ful mx-auto text-lg">
                {msg.title}
              </h2>
              <p className="text-center">Price: {msg.originalPrice}</p>

              <div className="card-actions justify-center">
                <button className="btn btn-primary btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewProduct;
