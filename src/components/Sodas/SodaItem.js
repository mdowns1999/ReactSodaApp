import React from "react";
import ProductCard from "../UI/ProductCard";
import classes from './SodaItem.module.css';

const SodaItem = (props) => {
    console.log(props.image)
return <ProductCard>
    <a className={classes.productBox} href="#">
    <img src={props.image} alt={props.description}></img>
    <p>{props.name}</p>
    </a>
</ProductCard>
}

export default SodaItem;