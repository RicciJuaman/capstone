import React from "react";
import './header.css';
import Logo from './Logo.svg';

export const Header = () => {
  return (
    <header>
        <img src={Logo} alt="Logo" height={105}/>
        <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
        </ul>
        </nav>
    </header>
  );
};