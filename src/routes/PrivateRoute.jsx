import React, {useContext} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../providers/AuthProvider";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    return children;
  }

  return (
    <>
      <Navigate to="/login" state={{from: location}} replace></Navigate>
    </>
  );
};

export default PrivateRoute;
