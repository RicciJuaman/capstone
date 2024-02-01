import React from "react";
import "./Hero.css";
import imagePhoto from './heroPhoto.jpg'

export const Hero = () => {
  return (
    <main>
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
        <img src={imagePhoto} alt="Little Lemon" className="heroPhoto"></img>
      </div>
    </main>
  );
};
