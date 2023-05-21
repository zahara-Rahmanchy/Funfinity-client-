import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import UpdateToy from "./UpdateToy";
const MyToys = () => {
  const {user} = useContext(AuthContext);

  const url = `https://funfinity-toys-server.vercel.app/mytoys?email=${user.email}`;
  const [data, setData] = useState([]);
  useEffect(() => {
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
        fetch(`http://localhost:5000/deletetoys/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(dat => {
            // console.log(dat);
            const remaining = [];
            if (dat.deletedCount > 0) {
              remaining = data.filter(d => d._id !== id);
              setData(remaining);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      {" "}
      <div className="overflow-x-auto md:col-span-3 col-span-4 ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th> Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* here filter is used so when matched with search field it will show those data otherwise will show all */}
            {data.map(t => (
              <tr key={t._id}>
                <td>
                  <div className="font-bold">{t.sellerName}</div>
                </td>
                <td>{t.Name}</td>
                <td>{t.subCategory}</td>
                <td>$ {t.Price}</td>
                <td className="text-center"> {t.AvailableQuantity}</td>

                <th className="text-center">
                  <Link
                    to={`/update/${t._id}`}
                    className="btn btn-circle btn-sm mx-2 bg-blue-500 border-none"
                  >
                    up
                  </Link>

                  <button
                    className="btn btn-circle btn-sm  bg-red-500  border-none"
                    onClick={() => handleDelete(t._id)}
                  >
                    X
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

export default MyToys;
