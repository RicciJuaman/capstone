import React from 'react';
import './footer.css';
import footerLogo from './footerLogo.png';

export const Footer = () => {
  return (
    <footer className='footerMain'>
      <div className='logo'>
        <img src={footerLogo} alt="Footer Logo" />
      </div>
      
      {/*This section is for the footer links */}
      <div className='container'>
        <div className='row'>
            <div className='footer-col'>
                <h4>Navigation</h4>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Menu</a></li>
                        <li><a href='#'>Reservation</a></li>
                        <li><a href='#'>Order Online</a></li>
                    </ul>
            </div>
            <div className='footer-col'>
                <h4>Contact Us</h4>
                    <ul>
                        <li><a href='#'>Address</a></li>
                        <li><a href='#'>Phone Number</a></li>
                        <li><a href='#'>Email</a></li>
                    </ul>
            </div>
            <div className='footer-col'>
                <h4>Socials</h4>
                    <ul>
                        <li><a href='#'>Facebook</a></li>
                        <li><a href='#'>Instagram</a></li>
                        <li><a href='#'>Youtube</a></li>
                        <li><a href='#'>Tiktok</a></li>
                    </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}
