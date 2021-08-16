import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./home.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div>
        <h1>
          <strong>Find Meals for Your Ingredients</strong>
        </h1>
        <blockquote>
          “The ambition of every good cook must be to make something very good
          with the fewest possible ingredients.”
        </blockquote>
        <br />
        <cite>- Urbain Dubois</cite>
        <br />
        <input
          type="text"
          name="input-text"
          placeholder="Enter your ingredient here."
        ></input>
        <button type="submit">
          <SearchIcon />
        </button>
        <br />
        <h2>
          <strong>Search Results :</strong>
        </h2>
      </div>
      <Footer />
    </div>
  );
}
