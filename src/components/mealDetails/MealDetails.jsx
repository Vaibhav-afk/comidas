import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import "./mealDetails.css";

export default function MealDetails() {
  return (
    <div className="mealDetailBox">
      <div className="mealDetailWrapper">
        <button className="cancelButton">
          <CancelIcon
            style={{
              fontSize: "38px",
              marginLeft: "-8.5px",
              marginTop: "-4px",
            }}
          />
        </button>

        <div>
          <h2 className="title">Pasta</h2>
          <p className="category">Chinese</p>
          <div className="instruction">
            <h3>Instructions:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              auctor turpis vitae ullamcorper bibendum. Donec bibendum suscipit
              nunc sed aliquet. Nunc felis neque, tempus nec arcu in,
              condimentum tempor augue. Phasellus sed libero scelerisque neque
              eleifend euismod sit amet nec nisl. Donec tempor lectus et sem
              laoreet pretium. Fusce in est sit amet ex dictum malesuada et nec
              odio. Etiam fermentum in orci vitae aliquet. Integer vitae tellus
              molestie, vestibulum ligula at, tincidunt felis. Duis sit amet
              ligula mauris. Fusce vitae luctus mi. Phasellus consequat iaculis
              dolor, et imperdiet neque sagittis et. Nam non volutpat sem, quis
              condimentum justo. Donec a urna velit. Morbi interdum suscipit
              lorem nec viverra. Etiam id urna vulputate, eleifend lacus vel,
              aliquam est. Sed hendrerit ultrices dictum. Integer et consequat
              lacus. Nullam risus erat, feugiat id elit eu, commodo finibus
              lorem. Fusce id ornare ipsum. Nunc ut ligula in quam mollis
              efficitur imperdiet a lectus. Morbi id justo libero. Nulla
              imperdiet orci nec sem ullamcorper, nec porttitor nisl lobortis.
              Sed rutrum quam tellus, et luctus risus aliquet eget. Aliquam
              tempus urna a sollicitudin pharetra. Nunc ac interdum odio.
              Vivamus congue facilisis tincidunt. Vivamus a sem nec lorem
              sagittis vestibulum non non purus. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Nullam
              pulvinar magna et odio rutrum posuere. Quisque sed fringilla
              sapien. Maecenas mi ipsum, scelerisque sit amet sem ac, ultricies
              feugiat quam. Pellentesque ac ipsum pulvinar, commodo neque sed,
              dignissim quam. Sed elit mauris, ultricies at condimentum id,
              porta sit amet libero. Maecenas in nibh et felis consectetur
              congue. Vivamus viverra nisl non venenatis faucibus. Phasellus nec
              neque imperdiet, rhoncus nisi ac, eleifend tortor. Proin ut nunc
              id quam volutpat condimentum eu dapibus risus. Duis nec nibh ac
              nisl volutpat euismod nec eget tellus. Etiam pharetra cursus velit
              sit amet tempor. Quisque erat nulla, feugiat at mattis at,
              malesuada eu metus.
            </p>
          </div>

          <div className="videoTutorial">
            <a href="https://www.google.co.in/" target="_blank">
              <button className="tutorialButton">Watch Tutorial</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
