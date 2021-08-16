import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./home.css";
import SearchIcon from "@material-ui/icons/Search";
import MealDetails from "../../components/mealDetails/MealDetails";
import axios from "axios";
import "./home.css";

export default function Home() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() =>
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
  );

  return (
    <div className="homeContainer">
      {console.log(name)}
      <Header />
      <div className="home">
        <h1>
          <strong>Find Meals for Your Ingredients</strong>
        </h1>

        <blockquote>
          “The ambition of every good cook must be to make something very good
          with the fewest possible ingredients.”
        </blockquote>
        <p>- Urbain Dubois</p>

        <div className="searchBox">
          <input
            onChange={handleChange}
            className="inputField"
            type="text"
            name="input-text"
            placeholder="Enter your ingredient here..."
          />
          <button className="searchButton" type="submit">
            <SearchIcon style={{ fontSize: "45px" }} />
          </button>
        </div>

        <h2>
          <strong>Search Results :</strong>
        </h2>
      </div>
      <Footer />
    </div>
  );
}
