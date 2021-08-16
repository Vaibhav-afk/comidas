import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";

export default function MealDetails() {
  return (
    <div>
      <button type="button">
        <CancelIcon />
      </button>

      <div>
        <h2 className="title">Pasta</h2>
        <p className="category">chinese</p>
        <div className="instruction">
          <h3>Instructions:</h3>
          <p>blah! blah! blah!</p>
        </div>

        <div className="videoTutorial">
          <a href="https://" target="_blank">
            Watch tutorial
          </a>
        </div>
      </div>
    </div>
  );
}
