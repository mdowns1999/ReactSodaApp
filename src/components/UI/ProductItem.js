import React from "react";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default ProductItem;
