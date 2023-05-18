import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../providers/AuthProvider";
const Login = () => {
  const {logIn} = useContext(AuthContext);
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    form.reset();
  };

  return (
    <div className="hero  min-h-screen bg-base-100 rounded-md mx-auto">
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center ">
          <img
            className=""
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1684391621~exp=1684392221~hmac=d4cb4e8b240af7bb092526c3c38fd3694e74e18249b69dadcafab8182e644deb
"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleLogin} id="form">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <p className="my-4 ">
                  <span className="text-sm font-light">
                    {" "}
                    Don't Have an Account?{" "}
                  </span>
                  <Link
                    className="text-blue-600 font-semibold hover:link"
                    to="/signup"
                  >
                    Sign Up
                  </Link>{" "}
                </p>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn border-0 bg-gradient-to-r  from-teal-300 via-base-600 to-teal-500 "
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;