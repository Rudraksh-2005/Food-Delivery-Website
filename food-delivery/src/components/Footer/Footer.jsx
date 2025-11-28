import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo}/>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, molestias?  
                </p>
            </div>
            <div className="footer-content-center">
                <img src={assets.facebook_icon}/>
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
            </div>
            <div className="footer-content-right">
                
            </div>
            
        </div>
      
    </div>
  )
}

export default Footer
