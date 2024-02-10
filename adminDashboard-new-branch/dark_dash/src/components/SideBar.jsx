import React from 'react'
import {Link} from "react-router-dom"

const SideBar = () => {
  return (
    <div>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
       
          <div class="navbar-profile" style={{marginRight:"8px"}}>
                  
                    <img class="img-sm rounded-circle" src="assets/images/imc.png" alt=""/>
                    
                  </div>
          <Link to="/">
          <h3>DIGITAL DOOR</h3>
          </Link>
          
        </div>
      </nav>
    </div>
  )
}

export default SideBar