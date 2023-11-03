import React from "react";
import ProductItem from "../UI/ProductItem";
import { Link } from "react-router-dom";

const getSodaImage = (imageName) => {
  switch (imageName) {
    case "Tropical Sprite":
      return require("../../images/tropical.jpg");
    case "Basic White Girl":
      return require("../../images/whiteGirl.jpg");
    case "Mountain Smash":
      return require("../../images/mountain.jpg");
    case "Dirty Diet Coke":
      return require("../../images/dirty.jpg");
    case "Carmel Root Beer":
      return require("../../images/root.jpg");
    default:
      return require("../../images/blank.png");
  }
};

const SodaItem = (props) => {
  console.log(props.image);
  let image = getSodaImage(props.name);

  const scrollToTop = () => {
    if (props.id === "custom") {
      window.scrollTo(0, 0);
    } else {
      return;
    }
  };

  return (
    <ProductItem>
      <Link to={props.id} onClick={scrollToTop}>
        <img src={image} alt={props.description}></img>
        <div>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
      </Link>
    </ProductItem>
  );
};

export default SodaItem;
