import React, {useContext, useEffect, useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import {AuthContext} from "../../providers/AuthProvider";

const AllToys = () => {
  const {user} = useContext(AuthContext);

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
  const navigate = useNavigate();
  const handledetails = id => {
    if (!user) {
      Swal.fire("You need login to view details");
    }
    navigate(`/toy/${id}`);
  };
  return (
    <div className="grid grid-cols-4 gap-5 mt-5 mx-16 ">
      <div className="w-full md:col-span-1 col-span-4">
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
        <ul className="menu bg-sky-50 mt-2  p-2 rounded-lg w-full">
          <h5 className="text-2xl font-bold my-3 text-purple-500">Sort By </h5>
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
      <div className="overflow-x-auto md:col-span-3 col-span-4 ">
        <table className="table w-full border-2 border-blue-100">
          {/* head */}
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
          <tbody>
            {/* here filter is used so when matched with search field it will show those data otherwise will show all */}
            {data
              .filter(item => {
                return search.toLowerCase() === ""
                  ? item
                  : item.Name.toLowerCase().includes(
                      search.toLocaleLowerCase()
                    );
              })
              .map(t => (
                <tr key={t._id}>
                  <td>
                    <div className="font-bold">{t.sellerName}</div>
                  </td>
                  <td>{t.Name}</td>
                  <td>{t.subCategory}</td>
                  <td>$ {t.Price}</td>
                  <td className="text-center"> {t.AvailableQuantity}</td>

                  <th className="text-center">
                    <button
                      className="btn btn-primary btn-xs"
                      onClick={() => handledetails(t._id)}
                    >
                      Details
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
