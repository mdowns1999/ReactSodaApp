import React from "react";
import ProductItem from "../UI/ProductItem";
import { Link } from "react-router-dom";

const getSodaImage = (imageName) => {
  switch (imageName) {
    case "Cherry":
      return require("../../images/blank.png");
    case "Orange":
      return require("../../images/blank.png");
    default:
      return require("../../images/blank.png");
  }
};

const SodaItem = (props) => {
  let image = getSodaImage(props.image);

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
          <p>
            {props.description} and a lot of random text that describes this
            drink.
          </p>
        </div>
      </Link>
    </ProductItem>
  );
};

export default SodaItem;
