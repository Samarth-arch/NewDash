import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import ComplaintsTable from "./components/ComplaintsTable";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "complaints",
        element: <ComplaintsTable />,
      },
    ],
  },
]);

const AppLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the loading time as needed

    return () => clearTimeout(loadingTimeout);
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center h-screen text-white">
      <ClipLoader color="white" size={50} />
    </div>
  ) : (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLoader />);

reportWebVitals();