import React, {useEffect, useState} from "react";
import Marquee from "react-fast-marquee";

const SaleProducts = () => {
  const [saleData, setSaleData] = useState([]);

  useEffect(() => {
    fetch("/saleproduct.json")
      .then(res => res.json())
      .then(data => {
        setSaleData(data);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div
      className="max-w-7xl mx-auto my-20 text-3xl font-bold bg-purple-300 p-5 flex justify-center"
      //   data-aos="zoom-in"
    >
      <Marquee speed={100} pauseOnHover={true}>
        {saleData.map(msg => (
          <div className="card card-compact w-96 bg-base-100 shadow-xl p-4 h-[400px] m-3">
            <figure>
              <img src={msg.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{msg.title}</h2>
              <p>Original Price: {msg.originalPrice}</p>
              <p>Discounted Price: {msg.discountedPrice}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SaleProducts;
