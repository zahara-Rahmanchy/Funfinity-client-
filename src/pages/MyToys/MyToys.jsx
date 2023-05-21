import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import {FaTrash, FaEdit} from "react-icons/fa";
const MyToys = () => {
  const {user} = useContext(AuthContext);

  const url = `https://funfinity-toys-server.vercel.app/mytoys?email=${user.email}`;
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = `Funfinity|My Toys`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setData(data);
      });
  }, [url, data]);
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://funfinity-toys-server.vercel.app/deletetoys/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(dat => {
            // console.log(dat);
            // const remaining = [];
            if (dat.deletedCount > 0) {
              const remaining = data.filter(d => d._id !== id);
              setData(remaining);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    // <div className="bg-sky-100 mx-20 p-4 rounded-md shadow-slate-700">
    <div className="max-w-6xl mx-auto my-14">
      <div className="overflow-x-auto md:col-span-3 col-span-4 ">
        <table className="table w-full border-2 border-sky-800 ">
          {/* head */}

          <thead>
            <tr>
              <th>Product</th>
              {/* <th>Seller</th> */}
              <th>Toy Name</th>
              <th> Sub-category</th>
              <th>Price</th>
              <th>
                Available <br />
                Quantity
              </th>
              <th>Rating</th>
              <th>Seller Details</th>
              <th></th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* here filter is used so when matched with search field it will show those data otherwise will show all */}
            {data.map(t => (
              <tr key={t._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={t.picture}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                {/* <td>
                  <div className="font-bold">{t.sellerName}</div>
                </td> */}
                <td>{t.Name}</td>
                <td>{t.subCategory}</td>
                <td>$ {t.Price}</td>
                <td className="text-center"> {t.AvailableQuantity}</td>
                <td>{t.Rating}</td>
                {/* <div className="border-t-2 border-slate-100 bg-white">
                  <div className=" w-1/2"> {t.Description}</div>
                </div> */}

                <td>
                  {t.sellerName} <br /> {t.sellerEmail}
                </td>
                <th className="text-center">
                  <Link
                    to={`/update/${t._id}`}
                    className="btn bg-transparent btn-sm mx-2 border-none"
                  >
                    {" "}
                    <FaEdit className="text-blue-500 text-2xl"></FaEdit>
                  </Link>

                  <button
                    className="btn btn-circle btn-sm btn-error bg-red-500  border-none text-white"
                    onClick={() => handleDelete(t._id)}
                  >
                    <FaTrash className="text-xl" />
                  </button>
                </th>
                <td className=" w-1/2 mt-2">
                  <p>{t.Description}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // </div>
  );
};

export default MyToys;
