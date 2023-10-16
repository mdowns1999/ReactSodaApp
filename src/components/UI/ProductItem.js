import React from "react";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return <li className={classes.item}>{props.children}</li>;
};

export default ProductItem;
