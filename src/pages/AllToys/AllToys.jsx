import React, {useContext, useEffect, useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import {AuthContext} from "../../providers/AuthProvider";
import "../Home/Slider.css";

const AllToys = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("ascen");
  useEffect(() => {
    document.title = "Funfinity | All Toys";
    fetch(
      `https://funfinity-toys-server.vercel.app/toys?value=Price&type=${type}`
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, [type]);

  const handledetails = id => {
    if (!user) {
      Swal.fire("You need login to view details");
    }
    navigate(`/toy/${id}`);
  };
  return (
    <section
      className="pb-10"
      // style={{
      //   background:
      //     "linear-gradient(45deg, rgba(223,208,255,1) 0%, rgba(197,206,255,1) 50%, rgba(152,167,179,1) 100%)",
      // }}
    >
      <div className="grid grid-cols-4 gap-5 mx-auto max-w-7xl">
        <div className="w-full md:col-span-4 col-span-4 md:mt-1 mt-3 flex flex-col md:flex-row justify-evenly items-center ">
          <div className="form-control ">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
                onChange={e => setSearch(e.target.value)}
              />

              <div className="btn bg-blue-800 text-white p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <ul className="menu  p-2 rounded-lg w-full flex md:flex-row flex-col justify-between">
            <h5 className="text-2xl font-bold my-3 text-purple-500">
              Sort By{" "}
            </h5>
            <button
              className="btn btn-outline btn-error border-purple-600 border-3 my-2"
              onClick={e => {
                e.preventDefault();
                setType("ascen");
              }}
            >
              Price Ascending
            </button>
            <button
              className="btn btn-outline btn-primary text- border-purple-600 border-3 my-3 p-2"
              onClick={e => {
                e.preventDefault();
                setType("descen");
              }}
            >
              Price Descending{" "}
            </button>
          </ul>
        </div>
        <div className="overflow-x-auto md:col-span-4 col-span-4 pt-20  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 m-5 ">
          {/* <table className="table w-full border-2 border-blue-100">
           
            <thead>
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th> Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>View Details button</th>
              </tr>
            </thead>
            <tbody> */}
          {/* here filter is used so when matched with search field it will show those data otherwise will show all */}
          {data
            .filter(item => {
              return search.toLowerCase() === ""
                ? item
                : item.Name.toLowerCase().includes(search.toLocaleLowerCase());
            })
            .map(t => (
              // <tr key={t._id}>
              //   <td>
              //     <div className="font-bold">{t.sellerName}</div>
              //   </td>
              //   <td>{t.Name}</td>
              //   <td>{t.subCategory}</td>
              //   <td>$ {t.Price}</td>
              //   <td className="text-center"> {t.AvailableQuantity}</td>

              //   <th className="text-center">
              //     <button
              //       className="btn btn-primary btn-xs"
              //       onClick={() => handledetails(t._id)}
              //     >
              //       Details
              //     </button>
              //   </th>
              // </tr>

              <div
                className="bg-stone-200 relative md:h-[300px] h-[250px] flex justify-center w-full rounded-lg mb-20 spacer"
                style={{backgroundImage: `url(${"./waves-toy.svg"})`}}
              >
                <div className="absolute md:w-32 w-44 lg:w-44 -top-16 rounded-lg shadow-md shadow-slate-300 border-8 border-stone-100 card">
                  <img className="h-32" src={t.picture} />
                </div>
                <div className=" mt-24 text-rose-300 text-center bg-white bg-opacity-10 w-full">
                  <p className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r  from-[#1d1d75]  to-[#136480]">
                    {t.Name}
                  </p>
                  <p className="font-medium text-md ">{t.subCategory}</p>
                  <p className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r  from-[#f5319d]  to-[#f74a78]">
                    $ {t.Price}
                  </p>
                  {/* <p className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r  from-[#1d1d75]  to-[#136480]">
                    {t.AvailableQuantity}
                  </p> */}
                  <div className="flex flex-wrap align-bottom justify-end s me-2">
                    <button
                      className="btn  btn-xs btn-primary border-0 "
                      onClick={() => handledetails(t._id)}
                    >
                      Details
                    </button>{" "}
                  </div>
                </div>
              </div>
            ))}
          {/* </tbody>
          </table> */}
        </div>
      </div>
    </section>
  );
};

export default AllToys;
