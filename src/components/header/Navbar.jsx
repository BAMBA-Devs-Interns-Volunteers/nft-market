import React, { useEffect, useState } from "react";
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
    <nav
      style={{
        transition: "all 1s",
      }}
      className={!navColor ? "navbar navbar-light navbar-expand-lg" : "navbar scrolled navbar-expand-lg navbar-dark fixed-top"}
     
    >
      <div className="container-fluid">
          <a className="navbar-brand text-white fs-1" href="#">
            Bamba
          </a>
        <div className="ml-sm-2 d-none d-lg-inline d-xl-inline">
          <a className="signup-btn btn py-2 px-3 mx-2 rounded">Signup</a>
          <a className="signup-btn btn py-2 px-3">Login</a>
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
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
