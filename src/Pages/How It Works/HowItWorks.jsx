import React from 'react'
import "./How-It-works.css";
import wallet from "../../assets/img/wallet.png";
import create from "../../assets/img/create.png";
import add from "../../assets/img/add.png";
import list from "../../assets/img/list.png";



const HowItWorks = () => {
  return (
   <section className='how-it-works'> 
   <h1>How to create and sell your NFTs</h1>
   <div className="main-container">
   <div className='connect-your-wallet'> 

   <img src={wallet} alt="" />
    <h4>Connect your wallet</h4>
    
     <p>
      Use Metamask or Trustwallet to connect to the app. Once you've set up the wallet of your choice,connect it by clicking
      the wallet icon in the top right corner. 
     </p>
   </div>
   <div className='Create-your-collection'>

   <img src={create} alt="" />
    <h4>Create your collection</h4>
     <p>
      Click My Collections and set up your collection. Add social links,a description,profile and banner images, and set a secondary
      sales fee.  
     </p>
   </div>

   
   <div className='Add-your-NFts'>
   <img src={add} alt="" />
    <h4>Add your NFts</h4>
     <p>
      Click My Collections and set up your collection. Add socila links,a description,profile and banner images, and set a secondary
      sales fee.  
     </p>
   </div>

   
   <div className='List-them-for-sale'>
   <img src={list} alt="" />
    <h4>List them for sale</h4>
     <p>
      Choose between auctions, fixed price listings, and declining price listings. You choose how you want to sell
      your NFTs, and we help you sell them.
     </p>
   </div>
   </div>

   </section>
    
  )
}

export default HowItWorks
