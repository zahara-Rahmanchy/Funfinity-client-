import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const {id} = useParams();
  const [initial, setInitial] = useState([]);

  useEffect(() => {
    document.title = `Funfinity|Update Toy`;

    fetch(`https://funfinity-toys-server.vercel.app/toy/${id}`)
      .then(res => res.json())
      .then(data => setInitial(data));
  }, []);

  //   console.log(initial.Description);
  const {Price, Description, AvailableQuantity, Name} = initial;

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

    fetch(`https://funfinity-toys-server.vercel.app/updatetoys/${id}`, {
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
          Swal.fire("Updated Successfully");
        }
      });
  };
  return (
    <>
      <h1 className="text-5xl text-blue-500  italic font-bold text-center p-3">
        Update
      </h1>
      <div className="max-w-4xl mx-auto bg-blue-400  my-10 rounded-lg p-5 grid ">
        <form onSubmit={handleConfirm} id="form">
          <h1 className="text-3xl text-white font-bold text-center p-3">
            {Name}
          </h1>
          <div className="flex">
            <div className="form-control w-full mt-2">
              <label className="input-group ">
                <span className="font-semibold px-2text-lg">Price</span>
                <input
                  type="number"
                  defaultValue={Price}
                  className="input input-bordered  bg-slate-100"
                  name="price"
                />
              </label>
            </div>

            <div className="form-control text-center">
              <label className="input-group mt-2">
                <span className="font-semibold px-2">Available Quantity</span>
                <input
                  type="number"
                  defaultValue={AvailableQuantity}
                  className="input input-bordered  bg-slate-100 "
                  name="quant"
                />
              </label>
            </div>
          </div>

          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text text-white text-xl font-semibold">
                Description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={Description}
                placeholder="Description"
                name="Description"
                className="input  w-full h-36 rounded-md bg-slate-100"
              />
            </label>
          </div>

          <button className="btn btn- bg-purple-700 border-none w-1/2 mt-5 ">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateToy;
