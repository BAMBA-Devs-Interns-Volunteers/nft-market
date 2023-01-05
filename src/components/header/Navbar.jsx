import React, { useEffect, useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";


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
          <NavLink to='/' className="navbar-brand text-white fs-5 fw-bold" href="#">
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
              <Link to='#how-it-works' className="nav-link active text-white" aria-current="page" smooth>
                How it works
              </Link>
            </li>
            <li className="nav-item">
              <Link to='#benefits' className="nav-link text-white" smooth>
                Benefits
              </Link>
            </li>
            <li className="nav-item">
              <Link to='#team' className="nav-link text-white" smooth>
                Team
              </Link>
            </li>
    
          </ul>
        </div>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
