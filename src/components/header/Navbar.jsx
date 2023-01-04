import React, { useEffect, useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

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
      className={!navColor ? "navbar navbar-dark navbar-expand-lg" : "navbar navbar-dark scrolled navbar-expand-lg fixed-top"}
     
    >
      <div className="container-fluid mx-4">
          <NavLink to='/bamba-nft' className="navbar-brand text-white fs-5 fw-bold" href="#">
            Bamba Nft
          </NavLink>
        
        
        <button
          className="navbar-toggler"
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
          id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink to='/how-it-works' className="nav-link active text-white" aria-current="page">
                How it works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/benefits' className="nav-link text-white">
                Benefits
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/team' className="nav-link text-white">
                Team
              </NavLink>
            </li>
    
          </ul>
        </div>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
