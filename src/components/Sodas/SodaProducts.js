import React, { Fragment } from "react";
import SodaItem from "./SodaItem";
import classes from "./SodaProducts.module.css";
import SodaDetail from "./SodaDetail";

const SodaProducts = (props) => {
  const DUMMY_SODAS = [
    {
      id: "s1",
      name: "Sprite",
      description: "Just normal Sprites",
      price: 2.0,
      imgRoute: require("../../images/blank.png"),
      amount: 1
    },
    {
      id: "s2",
      name: "Pepsi",
      description: "Just normal Pepsi",
      price: 2.5,
      imgRoute: require("../../images/blank.png"),
      amount: 1
    },
    {
      id: "s3",
      name: "Dr.Pepper",
      description: "A white Girl drink",
      price: 12.99,
      imgRoute: require("../../images/blank.png"),
      amount: 1
    },
    {
      id: "s4",
      name: "Diet Pepsi",
      description: "Its Diet Pepsi",
      price: 2.5,
      imgRoute: require("../../images/blank.png"),
      amount: 1
    },
    {
      id: "s5",
      name: "RootBeer",
      description: "Rootbeer.  Yup.",
      price: 12.99,
      imgRoute: require("../../images/blank.png"),
      amount: 1
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
      amount={item.amount}
    />
  //   <SodaItem
  //   key={item.id}
  //   item={item}
    
  // />
  ));

  const itemOfTheMonth = {
    id: "d1",
    name: "Sprite Mango",
    amount: 1,
    price: 5.00,
    image: require("../../images/blank.png"),
}

  return (
    <Fragment>
      <section className={classes.productOfMonth}>
        <SodaDetail item={itemOfTheMonth} itemOfMonth={true}/>
      </section>
      <section className={classes.pageBanner}>
        <h1>Products</h1>
      </section>
      <ul className={classes.products}>{sodaList}</ul>
    </Fragment>
  );
};

export default SodaProducts;
