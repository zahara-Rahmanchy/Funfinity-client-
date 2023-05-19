import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../providers/AuthProvider";
const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => alert("logged out!"))
      .catch(error => error.message);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user && (
              <div
                className="tooltip "
                data-tip={user.displayName ? user.displayName : ""}
              >
                <div className="avatar float-left ms-3 mt-2">
                  <div className=" w-8 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
              </div>
            )}
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
            <div className=" space-y-3 flex flex-col ms-4 mt-2">
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="text-center bg-gradient-to-r  from-sky-300 via-base-600 to-sky-500 w-1/2 text-white rounded-md py-[0.5px] font-semibold hover:rounded-3xl"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-center bg-gradient-to-r  from-sky-300 via-base-600 to-sky-500 w-1/2 text-white rounded-md py-[0.5px] font-semibold hover:rounded-3xl"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-center bg-gradient-to-r  from-sky-300 via-base-600 to-sky-500 w-1/2 text-white rounded-md py-[0.5px] font-semibold hover:rounded-3xl"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="w-20 text-center"
            src="https://img.freepik.com/premium-vector/cute-funny-sun-character-vector-hand-drawn-cartoon-mascot-character-illustration-icon_449361-83.jpg?w=740"
          ></img>
          <p className=" font-serif italic text-2xl align-top font-bold pt-0 mt-0 text-sky-500 ">
            FUNFINITY
          </p>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item new</a>
          </li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="md:navbar-end space-x-4 hidden md:flex">
        {user ? (
          <>
            {/* hover over the img to see the name */}
            <div
              className="tooltip"
              data-tip={user.displayName ? user.displayName : ""}
            >
              <div className="avatar">
                <div className=" w-8 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="bg-gradient-to-r  from-sky-300 via-base-600 to-sky-500 px-5 py-1 text-white text-sm rounded-lg font-semibold hover:rounded-3xl"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            {" "}
            <Link
              to="/login"
              className="bg-gradient-to-r  from-sky-300 via-base-600 to-sky-500 px-5 py-1 text-white text-lg rounded-lg font-semibold hover:rounded-3xl"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r  from-sky-300 via-base-600 to-sky-500 px-5 py-1 text-white text-lg rounded-lg font-semibold hover:rounded-3xl"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
