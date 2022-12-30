import React from 'react'
import "./hero.css"
import nft from "../../assets/img/nft.png"
import nft2 from "../../assets/img/nft2.png"

const Hero = () => {
  return (
    <div className="mt-5 hero-page">
        <div className="row">
            <div className="col-lg-6 col-sm-12 px-5">
                <h2 className="text-white text-left fs-2 mb-3">
                    Create And Buy Nfts with ease of interface
                </h2>
                <p className="text-gray text-left">Deploy your NFTs to the right audience. Grow your business with our fast growing market.</p>
                <div className="d-flex align-items-center gap-2 mt-3">
                    <a href="" className="btn px-4 text-white py-2 bg-primary">Get Started</a>
                    <a href="" className="btn px-4 text-white py-2 bg-secondary">Create NFT</a>

                </div>
            </div>

            <div className="col-lg-6 col-sm-12 pt-5">
                <div className="hero-card  mx-auto rounded " style={{height: "100%", width:"50%"}}>
                    <div className="card-img  mx-auto">
                        <img className="mx-auto img-fluid rounded-lg" src={nft2} alt=""/>
                    </div>
                    <div className="card-details d-flex align-items-center">

                    <p className="d-flex text-left fs-5  text-dark ml-2">Bored | </p>
                    {""}<small className="text-primary fs-7 px-2">532 BNB</small>
                    </div>
                </div>
            </div>
        </div>
        <div className="effect-1"></div>
        <div className="effect-2"></div>

    </div>
  )
}

export default Hero