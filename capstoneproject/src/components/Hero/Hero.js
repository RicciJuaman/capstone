import React from "react";
import "./Hero.css";
import imagePhoto from "./heroPhoto.jpg";
import { Break } from "../Break/Break.js";
import { HighlightCards } from "./cards_highlights/HighlightCards.js";
import { CardsRev } from "./cards_reviews/CardsRev.js";
import ericProf from "./cards_reviews/ericprof.jpg";

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
      <Break />
      <div className="overRev">
        <div className="reviews">
          <div className="revTitle">Reviews</div>
          <div className="revContent">
            <CardsRev imgSrc={ericProf} customerRev="Little Lemon is a culinary gem! The exquisite flavors and cozy ambiance make every visit a delight. From the refreshing Greek Salad to the heartwarming Chicken Soup, each dish is a masterpiece. Little Lemon is more than a restaurant; it's an experience that leaves your taste buds longing for more. A hidden culinary treasure worth discovering!" 
            customerName="Eric, 21"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
