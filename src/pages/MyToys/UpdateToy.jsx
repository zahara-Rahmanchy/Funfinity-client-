import React from "react";
import {useParams} from "react-router-dom";

const UpdateToy = () => {
  const {id} = useParams();

  const handleConfirm = e => {
    e.preventDefault();
    const Price = e.target.price.value;
    const quan = e.target.quant.value;
    const Description = e.target.Description.value;

    const toy = {
      Price: Price,
      AvailableQuantity: quan,
      Description: Description,
    };
    console.log(toy);
    fetch(`http://localhost:5000/updatetoys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("updated");
        }
      });
  };
  return (
    <div className="max-w-4xl mx-auto bg-purple-500 my-20 rounded-lg p-5 grid ">
      <h1 className="text-3xl text-white font-bold text-center p-3">Update</h1>
      <form onSubmit={handleConfirm} id="form">
        <div className="flex">
          <div className="form-control w-full mt-2">
            <label className="input-group">
              <span>Price</span>
              <input
                type="number"
                defaultValue={"kj"}
                className="input input-bordered "
                name="price"
              />
            </label>
          </div>

          <div className="form-control text-center">
            <label className="input-group mt-2">
              <span>Available Quantity</span>
              <input
                type="number"
                defaultValue="jh"
                className="input input-bordered "
                name="quant"
              />
            </label>
          </div>
        </div>

        <div className="form-control mt-3">
          <label className="input-group">
            <input
              type="text"
              placeholder="Description"
              name="Description"
              className="input input-bordered  w-full h-40"
            />
          </label>
        </div>
        <button className="btn btn-outline bg-white w-1/2 mt-5 ">Update</button>
      </form>
    </div>
  );
};

export default UpdateToy;
