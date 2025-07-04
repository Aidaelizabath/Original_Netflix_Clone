import React from 'react';
import './Footer.css';
import youtube_icon from '../../assets/cards/youtube.webp';
import twitter_icon from '../../assets/cards/twitter.webp';
import instagram_icon from '../../assets/cards/insta.webp';
import facebook_icon from '../../assets/cards/facebook_logos.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="YouTube" />
        <img src={twitter_icon} alt="Twitter" />
        <img src={instagram_icon} alt="Instagram" />
        <img src={facebook_icon} alt="Facebook" />
      </div>

      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className='copyright-text'>© 1997–2025 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
