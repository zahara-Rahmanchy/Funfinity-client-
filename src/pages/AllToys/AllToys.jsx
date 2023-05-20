import React from "react";
import {useLoaderData} from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div className="grid grid-cols-4 gap-2 mt-5 mx-8">
      <div></div>
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
            {/* row 1 */}
            {toys.map(t => (
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
