import React from "react";
import "./card.css";

export default function Card() {
  return (
    <div className="cardWrapper">
      <div className="cardContainer">
        <div>
          <img
            className="mealImage"
            src="https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs="
          />
          <h2 className="mealName">paneer do pyaaza</h2>
        </div>

        <button className="mealButton">Get Recipe</button>
      </div>
    </div>
  );
}
