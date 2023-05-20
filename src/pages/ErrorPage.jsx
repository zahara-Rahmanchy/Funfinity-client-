import React from "react";
import {Link} from "react-router-dom";
import {useRouteError} from "react-router-dom";
const ErrorPage = () => {
  const {error, status, statusText} = useRouteError();
  console.error(error);
  return (
    <div className="max-w-4xl mx-auto bg-sky-100 my-40 text-center p-3">
      <h5>Oh NO!</h5>
      <p>There's a glitch. Sorry for the error</p>

      <h2 className="text-8xl font-bold text-red-400">
        <span className="">Error</span> {status || "Unknown"}
      </h2>
      <img
        className="w-1/2 mx-auto h-3/6 my-2"
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1684606471~exp=1684607071~hmac=b3ac06d1ef17387d342941c05ae772682430ffa95a01062a61605be7e21a7544"
      />
      <p>Status: {statusText || ""}</p>
      <p className="font-bold  text-red-700">{error?.message}</p>

      <button className="bg-purple-600 btn  btn-warning border-0 m-2">
        <Link to="/" className="text-decoration-none text-white">
          Go Back
        </Link>
      </button>
    </div>
  );
};

export default ErrorPage;
