import React, { Fragment } from "react";
import SodaItem from "./SodaItem";
import classes from "./SodaProducts.module.css";

const SodaProducts = (props) => {
  const DUMMY_SODAS = [
    {
      id: "s1",
      name: "Sprite",
      description: "Just normal Sprites",
      price: 2.0,
      imgRoute: require("../../images/blank.png"),
    },
    {
      id: "s2",
      name: "Pepsi",
      description: "Just normal Pepsi",
      price: 2.5,
      imgRoute: require("../../images/blank.png"),
    },
    {
      id: "s3",
      name: "Dr.Pepper",
      description: "A white Girl drink",
      price: 12.99,
      imgRoute: require("../../images/blank.png"),
    },
    {
      id: "s4",
      name: "Diet Pepsi",
      description: "Its Diet Pepsi",
      price: 2.5,
      imgRoute: require("../../images/blank.png"),
    },
    {
      id: "s5",
      name: "RootBeer",
      description: "Rootbeer.  Yup.",
      price: 12.99,
      imgRoute: require("../../images/blank.png"),
    },
  ];

  const sodaList = DUMMY_SODAS.map((item) => (
    <SodaItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      image={item.imgRoute}
    />
  ));
  return (
    <Fragment>
      <section className={classes.pageBanner}>
        <h1>Products</h1>
      </section>
      {/* <section className={classes.sodas}>{sodaList}</section> */}
      <ul className={classes.products}></ul>
    </Fragment>
  );
};

export default SodaProducts;
