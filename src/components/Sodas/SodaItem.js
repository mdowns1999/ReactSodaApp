import React from "react";
import ProductCard from "../UI/ProductCard";
import classes from './SodaItem.module.css';

const SodaItem = (props) => {
return <ProductCard>
    <a className={classes.productBox} href="www.google.com">
    <img src={props.image} alt={props.description}></img>
    <p>{props.name}</p>
    </a>
</ProductCard>
}

export default SodaItem;