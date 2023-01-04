import React from 'react';
import './Footer.scss';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_contact">
        <h1>Contact us</h1>
        <h2>Ask us anything! We’re here to answer any questions you have.</h2>
        <p>Email: info@mysite.com</p>
      </div>
      <div className="footer_social">
        <h1>Follow us</h1>
        <i>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </i>
      </div>
      <div className="footer_subscribe">
        <h1>Subscribe for Updates & Offers</h1>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter your email here"
            required="required"
          />
          <button type="submit">Subscribe now</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
