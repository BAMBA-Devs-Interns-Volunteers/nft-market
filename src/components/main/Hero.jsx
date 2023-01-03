import React from "react";
import "./hero.css";
import nft from "../../assets/img/nft.png";
import nft2 from "../../assets/img/nft2.avif";

const Hero = () => {
  return (
    <div className="mt-5 hero-page container">
      <div className="row align-items-center">
        <div className="col-lg-8 col-sm-12 px-5">
          <h2 className="hero-text display-4 fw-bold text-white text-left mb-3">
            Create And Buy Nfts with ease of interface
          </h2>
          <p className="text-gray text-left">
            Deploy your NFTs to the right audience. Grow your business with our
            fast growing market.
          </p>
          <div className="d-flex align-items-center gap-2 mt-3">
            <a
              href=""
              className="btn px-4 py-2 btn2 border-0"
            >
              Get Started
            </a>
            <a href="" className="btn px-4 text-white py-2 bg-transparent border-2 btn-transparent">
              Connect
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12 pt-5">
          <div className="card hero-card shadow-lg rounded-6 border-0">
            <img className="card-img-top img-responsive" style={{height: "20rem",objectFit: "cover"}} src={nft2} alt="Card image cap" />
            <div className="card-body bg-white">
              <h5 className="card-title fs-5">Beary Christmas</h5>
              <p className="card-text fs-6"> 865 BNB
              </p>
            </div>

            <div className="card-ft p-0 d-none">
              <a href="" className="btn w-100 bg-primary text-white border-0 rounded-top-0">Buy now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="effect-1"></div>
      <div className="effect-2"></div>
    </div>
  );
};

export default Hero;
