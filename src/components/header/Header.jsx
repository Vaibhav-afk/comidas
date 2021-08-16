import React from "react";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <RestaurantMenuIcon
        style={{ fontSize: "46px", padding: "4px", cursor: "pointer" }}
      />
      <span className="text">Comidas</span>
    </div>
  );
}
