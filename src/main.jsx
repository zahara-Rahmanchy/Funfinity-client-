import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import AllToys from "./pages/AllToys/AllToys.jsx";
import MyToys from "./pages/MyToys/MyToys.jsx";
import AddAToy from "./pages/AddAToy/AddAToy.jsx";
import ToyDetails from "./pages/AllToys/ToyDetails.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Blog from "./pages/Blog.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
        // loader: () => fetch("https://funfinity-toys-server.vercel.app/toys"),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({params}) =>
          fetch(`https://funfinity-toys-server.vercel.app/toy/${params.id}`),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/addtoys",
        element: (
          <PrivateRoute>
            <AddAToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
