import React from 'react'
import './footer.css'
import { BsTwitter } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import { FaRedditAlien } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'


const Footer = () => {
  return (
    <section className='footer'>
    <div className='footer-container'>
      <h5 className='h5'>Stay with the community</h5>
      <p className='footer-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quasi sint quas! Exercitationem asperiores tempore expedita necessitatibus quam, corrupti temporibus. Rerum distinctio architecto id assumenda similique nam praesentium esse provident!</p>
     <form>
     <input type="email"  id='email' placeholder='Your email address' required/>
      <button className='sign-up'>Sign up</button>
     </form>

      <h5 className='join'>Join the community</h5>
      <div className='icon-container'>
         <div><BsTwitter /></div>
         <div><GrInstagram /></div>
         <div><FaDiscord /></div>
         <div><FaRedditAlien /></div>
         <div><FaYoutube /></div>
         <div><FaTiktok /></div>
         <div><MdOutlineEmail /></div>
      </div>
      <hr />
      <h4>Bamba Nft</h4>
      <p className='footer-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, similique!</p>
      <div className='footer-list'>
        <div>
            <h5>Marketplace</h5>
          
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
        </div>

        <div>
            <h5>ContactUs</h5>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>            
        </div>

        <div>
            <h5>Resources </h5>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
        </div>

        <div>
            <h5>Company</h5>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>            
        </div>

        <div>
            <h5>Stats</h5>
            <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
        </div>
      </div>
      <hr />
      <div className='last-section'>
        <p>&copy;Bamba Global</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
</section>
  )
}

export default Footer
