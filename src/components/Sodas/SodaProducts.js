import React, { Fragment } from "react";
import SodaItem from "./SodaItem";
import classes from "./SodaProducts.module.css";
import Button from "../UI/Button";
import { useLoaderData } from "react-router-dom";

// const itemOfTheMonth = {
//   id: "d1",
//   name: "Sprite Mango",
//   amount: 1,
//   price: 5.00,
//   image: require("../../images/blank.png"),
// }

// const DUMMY_SODAS = [
//   {
//     id: "s1",
//     name: "Sprite",
//     description: "Just normal Sprites",
//     price: 2.0,
//     imgRoute: require("../../images/blank.png"),
//     amount: 1,
//     ingredients:{
//       baseSoda: "RootBeer",
//       ingredients: ["Stuff 1", "Stuff 2"]
//     }
//   },
//   {
//     id: "s2",
//     name: "Pepsi",
//     description: "Just normal Pepsi",
//     price: 2.5,
//     imgRoute: require("../../images/blank.png"),
//     amount: 1,
//     ingredients:{
//       baseSoda: "RootBeer",
//       ingredients: ["Stuff 1", "Stuff 2"]
//     }
//   },
//   {
//     id: "s3",
//     name: "Dr.Pepper",
//     description: "A white Girl drink",
//     price: 12.99,
//     imgRoute: require("../../images/blank.png"),
//     amount: 1,
//     ingredients:{
//       baseSoda: "RootBeer",
//       ingredients: ["Stuff 1", "Stuff 2"]
//     }
//   },
//   {
//     id: "s4",
//     name: "Diet Pepsi",
//     description: "Its Diet Pepsi",
//     price: 2.5,
//     imgRoute: require("../../images/blank.png"),
//     amount: 1,
//     ingredients:{
//       baseSoda: "RootBeer",
//       ingredients: ["Stuff 1", "Stuff 2"]
//     }
//   },
//   {
//     id: "s5",
//     name: "RootBeer",
//     description: "Rootbeer.  Yup.",
//     price: 12.99,
//     imgRoute: require("../../images/blank.png"),
//     amount: 1,
//     ingredients:{
//       baseSoda: "RootBeer",
//       ingredients: ["Stuff 1", "Stuff 2"]
//     }
//   },
// ];


const SodaProducts = (props) => {
  const SODAS = useLoaderData();
  console.log(SODAS[0].imgRoute)
  const sodaList = <>{SODAS.map((item) => (
    <SodaItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      image={SODAS[0].imgRoute}
      amount={item.amount}
    />
  ))}
  
  <SodaItem
      key={"custom-1"}
      id={"custom"}
      name={"Custom-Drink"}
      description={"Description"}
      price={0}
      image={SODAS[0].imgRoute}
      amount={1}
    />
  </>


  const navigateToDrinkHandler = () => {
  
  }

  return (
    <Fragment>
      <section className={classes.productOfMonth}>
      <img
          src={require("../../images/blank.png")}
          alt="Custom Soda"
        ></img>
        <div>
          <h1>Custom Drink</h1>
          <p>
            A bunch of example text. A bunch of example text. A bunch of example
            text. A bunch of example text. A bunch of example text. A bunch of
            example text. A bunch of example text. A bunch of example text. A
            bunch of example text. A bunch of example text. A bunch of example
            text. A bunch of example text. A bunch of example text. A bunch of
            example text.
          </p>
          <Button onClick={navigateToDrinkHandler}>Order Drink</Button>
        </div>
        {/* <SodaDetail item={itemOfTheMonth} itemOfMonth={true}/> */}
      </section>
      <section className={classes.pageBanner}>
        <h1>Products</h1>
      </section>
      <ul className={classes.products}>{sodaList} </ul>
    </Fragment>
  );
};

export default SodaProducts;

export async function loader() {
  const response = await fetch('https://poppinsodasbackend.onrender.com/sodas');

  if(!response.ok){

  }else{
    return response;
  }
}
