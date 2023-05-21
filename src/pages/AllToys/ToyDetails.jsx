import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useLoaderData} from "react-router-dom";
import {AiTwotoneMail} from "react-icons/ai";
import {FaUserCircle} from "react-icons/fa";
// import {Rating} from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const ToyDetails = () => {
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    document.title = `Funfinity|Toy Details`;
  }, []);
  const toy = useLoaderData();
  console.log(toy);
  const {
    picture,
    Name,
    sellerName,
    sellerEmail,
    Price,
    Rating,
    AvailableQuantity,
    Description,
  } = toy;
  return (
    <div className="max-w-6xl md:mx-auto mx-6 my-20">
      <div className="card md:card-side bg-sky-300 shadow-2xl">
        <img src={picture} className="md:w-1/2 rounded-xl card-body" />
        <div className="card-body md:mt-20">
          <div>
            <h2 className="card-title font-bold text-white text-3xl">{Name}</h2>
            <p className="text-lg font-bold  mt-4 flex items-center gap-3">
              <FaUserCircle className="text-2xl" />
              {sellerName}
            </p>
            <span className="flex items-center gap-3">
              <AiTwotoneMail className="text-white text-xl" /> {sellerEmail}
            </span>
            <p className="text-base text-black mt-5">
              <span className="text-lg font-bold text-violet-900 me-3">
                Price:
              </span>{" "}
              $ {Price}
            </p>
            <p>
              <span className="text-lg font-bold text-violet-900 me-3">
                Rating:
              </span>
              {Rating} stars
            </p>

            <p>
              <span className=" text-base font-bold text-violet-900 me-3">
                Quantity:
              </span>
              {AvailableQuantity}
            </p>
          </div>

          <p className="mt-4 font-semibold text-slate-900">{Description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
