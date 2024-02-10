import React from "react";

import "./App.css";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ComplaintsTable from "./components/ComplaintsTable";
import Login from "./components/Login/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";


 export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/",
    element: <Layout/>,
    children:[{
      path:"",
      element:<Dashboard/>
    },{
      path:"complaints",
      element:<ComplaintsTable/>
    }]
  },

]);

function App() {
  return (
    

{/* <Router>
<Routes>


  <Route path="/" element={
    <div className="container-screen" style={{ userSelect: "none" }}>
      <SideBar />

      <div className="container-fluid">
        <Navbar />

        <Routes>
        <Route element={<Dashboard />} />
        <Route path="complaints" element={<ComplaintsTable />} />
        
        </Routes>
        <Route path="/login" element={<Login />} />
        
      </div>
    </div>
  } />
</Routes>
    </Router>
    */}
    
  );
}

export default App;
