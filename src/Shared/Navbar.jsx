import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {AuthContext} from "../providers/AuthProvider";
import "../App.css";
// bg-gradient-to-r from-[#9363B5] via-base-600  to-[#9363B5] text-white font-serif"
const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => Swal.fire("Logged Out!"))
      .catch(error => error.message);
  };

  return (
    <div className="navbar sticky top-[0.5px] bg-white border-b-cyan-500 border-b-2 z-30">
      <div className="navbar-start ">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
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
          </button>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              id="title"
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
              <li className="hover:bg-none  ">
                <Link to="/" className=" text-lg">
                  Home
                </Link>
              </li>
              <li tabIndex={0}>
                <Link to="/alltoys" className=" text-lg">
                  All Toys
                </Link>
              </li>
              {user && (
                <>
                  {" "}
                  <li>
                    <Link to="/mytoys" className=" text-lg">
                      My Toys
                    </Link>
                  </li>
                  <li>
                    <Link to="/addtoys" className=" text-lg">
                      Add Toy
                    </Link>
                  </li>
                </>
              )}
              {/* <li>
                <Link to="/blog" className=" text-lg">
                  Blog
                </Link>
              </li> */}
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
          )}
        </div>
        <div className="flex items-center">
          <p
            id="title"
            className=" font-serif italic text-3xl align-top font-bold pt-0 mt-0  text-transparent bg-clip-text bg-gradient-to-r  from-purple-800 via-rose-300 to-blue-400 "
          >
            FUNFINITY
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className="menu menu-normal menu-horizontal px-1 space-x-5 font-semibold hover: bg-transparent text-rose-400"
          id="title"
        >
          <li className="hover:bg-none  ">
            <Link to="/" className=" text-lg">
              Home
            </Link>
          </li>
          <li tabIndex={0}>
            <Link to="/alltoys" className=" text-lg">
              All Toys
            </Link>
          </li>
          {/* {user && ( */}
          <>
            {" "}
            <li>
              <Link to="/mytoys" className=" text-lg">
                My Toys
              </Link>
            </li>
            <li>
              <Link to="/addtoys" className=" text-lg">
                Add Toy
              </Link>
            </li>
          </>
          {/* )} */}
          {/* <li>
            <Link to="/blog" className=" text-lg">
              Blog
            </Link>
          </li> */}
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
              className="bg-gradient-to-r  from-purple-700  to-blue-200 px-5 py-1 text-white text-md rounded-lg font-semibold hover:rounded-3xl"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r  from-purple-500  to-rose-300 px-5 py-1 text-white text-md rounded-lg font-semibold hover:rounded-3xl"
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
