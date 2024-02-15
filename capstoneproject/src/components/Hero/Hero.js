import React from "react";
import "./Hero.css";
import imagePhoto from "./heroPhoto.jpg";
import { Break } from "../Break/Break.js";
import { HighlightCards } from "./cards_highlights/Highlight_Cards.js";

export const Hero = () => {
  return (
    <div className="main">
      <div className="heroContent">
        <div className="title">Little Lemon</div>
        <div className="subTitle">Koronadal</div>
        <div className="description">
          Discover culinary perfection at Little Lemon. Our menu showcases a
          fusion of exquisite flavors, inviting you on a journey of taste. From
          refreshing salads to savory masterpieces, every bite is a symphony of
          delight. Join us for an unforgettable dining experience.
        </div>
        <div className="resButton">Reserve a table</div>
        <img src={imagePhoto} alt="Little Lemon" className="heroPhoto" />
      </div>
      <Break />
      <div className="specials">
        <div className="specialCards">
          <div className="spec_title">Chef's Special</div>
          <div className="high_cards">
            <HighlightCards />
          </div>
        </div>
      </div>
    </div>
  );
};
