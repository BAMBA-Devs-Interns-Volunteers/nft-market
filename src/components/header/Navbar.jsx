import React, { useEffect, useState } from "react";
import { NavLink,Outlet } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [navColor, setnavColor] = useState(false);


  const listenScrollEvent = () => {
    window.scrollY >= 10 ? setnavColor(true) : setnavColor(false);
  };


  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    
  });

  return (
    <div>
      <nav
      style={{
        transition: "all 1s",
      }}
      className={!navColor ? "navbar navbar-light navbar-expand-lg" : "navbar scrolled navbar-expand-lg navbar-dark fixed-top"}
     
    >
      <div className="container-fluid mx-4">
          <a className="navbar-brand text-white fs-2" href="#">
            Bamba Nft
          </a>
        <div className=" d-none d-lg-inline d-xl-inline">
          <a className="signup-btn btn py-1 px-3 mx-2 rounded">Connect</a>
        
        </div>
        
        <button
          className="navbar-toggler border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse flex justify-content-end"
          id="navbarNav"
          style={{color: "white"}}
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Benefits
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Team
              </a>
            </li>
            <div className="d-lg-none d-sm-inline ">
          <a className="signup-btn btn py-1 px-3 rounded">Connect</a>
        
        </div>
          </ul>
        </div>
      </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
