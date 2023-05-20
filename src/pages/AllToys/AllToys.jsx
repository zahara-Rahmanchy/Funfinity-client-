import React, {useEffect, useState} from "react";
// import {useLoaderData} from "react-router-dom";
// import LeftBar from "./LeftBar";

const AllToys = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://funfinity-toys-server.vercel.app/toys")
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  console.log(search);
  return (
    <div className="grid grid-cols-4 gap-2 mt-5 mx-8">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
            onChange={e => setSearch(e.target.value)}
          />
          <button className="btn btn-square bg-sky-700">
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
          </button>
        </div>
      </div>
      <div className="overflow-x-auto col-span-3 ">
        <table className="table w-full">
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
                  <td>{t.Price}</td>
                  <td className="text-center"> {t.AvailableQuantity}</td>

                  <th className="text-center">
                    <button className="btn btn-primary btn-xs">details</button>
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
