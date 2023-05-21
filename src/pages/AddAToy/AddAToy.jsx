import React, {useContext} from "react";
import {AuthContext} from "../../providers/AuthProvider";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddAToy = () => {
  const {user} = useContext(AuthContext);
  const handleAddToy = event => {
    event.preventDefault();
    const form = event.target;
    const sellerName = form.sellerName.value;
    const sellerEmail = user?.email || form.sellerEmail.value;
    const Name = form.toyName.value;
    const picture = form.url.value;
    const Price = form.price.value;
    const Rating = form.price.value;
    const quan = form.quantity.value;
    const Description = form.description.value;
    const subCategory = form.subCategory.value;

    const toy = {
      sellerName: sellerName,
      sellerEmail: sellerEmail,
      Name: Name,
      picture: picture,
      Price: Price,
      Rating: Rating,
      AvailableQuantity: quan,
      Description: Description,

      subCategory: subCategory,
    };

    console.log(toy);
    fetch("https://funfinity-toys-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.insertedId) {
          toast("Toy Game Added Successfully!");

          form.reset();
        }
      });
  };
  return (
    <div className="max-w-6xl mx-auto bg-blue-200 shadow-xl rounded ">
      <ToastContainer />
      <div className="grid grid-cols-3 place-content-center">
        <div className="md:col-span-1 bg-purple-500">
          <h1 className="text-4xl font-bold italic text-center my-10 text-white">
            Add A Toy
          </h1>
          <img
            src="https://i.ibb.co/9n1YcR6/board-games-people-isometric-set-1284-23221-removebg-preview.png"
            className="w-3/4 mx-auto bg-purple-400"
          />
        </div>

        {/* for div */}
        {/* <div className="col-span-2 "> */}
        <div className="md:col-span-2 place-self-center py-6 space-y-5">
          <form onSubmit={handleAddToy} id="form">
            <div className="form-control w-full mt-2">
              <label className="input-group">
                <span>Email</span>
                <input
                  type="Email"
                  defaultValue={user?.email}
                  className="input input-bordered "
                  name="sellerEmail"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="input-group mt-2">
                <span>Name</span>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  className="input input-bordered w-3/4"
                  name="sellerName"
                />
              </label>
            </div>

            <div className="form-control mt-3">
              <label className="input-group">
                <span>Toy Name</span>
                <input
                  type="text"
                  placeholder=""
                  name="toyName"
                  className="input input-bordered  w-3/4"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Picture Url
                </span>
              </label>
              <label className="input-group">
                {/* <span>Email</span> */}
                <input
                  type="text"
                  placeholder="url"
                  className="input input-bordered  w-full"
                  name="url"
                />
              </label>
            </div>
            <div className="grid  md:grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-semibold">
                    Price
                  </span>
                </label>
                <label className="input-group">
                  {/* <span>Email</span> */}
                  <input
                    type="number"
                    placeholder="$"
                    className="input input-bordered w-3/4"
                    name="price"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-semibold">
                    Rating
                  </span>
                </label>
                <label className="input-group">
                  {/* <span>Email</span> */}
                  <input
                    type="number"
                    name="rating"
                    className="input input-bordered"
                    step="0.1"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-semibold">
                    Available Quantity
                  </span>
                </label>
                <label className="input-group">
                  {/* <span>Email</span> */}
                  <input
                    type="number"
                    name="quantity"
                    className="input input-bordered  w-3/4 "
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-semibold">
                    Sub-Category
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder=""
                    name="subCategory"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Description
                </span>
              </label>
              <label className="input-group">
                {/* <span>Email</span> */}
                <input
                  type="textarea"
                  placeholder="description"
                  name="description"
                  className="input  textarea textarea-bordered textarea-lg w-full"
                />
              </label>
            </div>
            <button
              className="btn btn-info btn-outline  bg-violet-800 text-white w-1/2 mt-4"
              type="submit"
            >
              {" "}
              Add Toy
            </button>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AddAToy;
