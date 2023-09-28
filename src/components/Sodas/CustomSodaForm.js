import { useState } from "react";
import classes from "./CustomSodaForm.module.css";
import CheckBox from "../UI/CheckBox";
import Button from "../UI/Button";
import { useEffect } from "react";

const sodaFlavors = [
  {
    id: "f1",
    name: "Pepsi",
    price: 2.0,
  },
  {
    id: "f2",
    name: "Sprite",
    price: 2.0,
  },
  {
    id: "f3",
    name: "Dr.Pepper",
    price: 2.0,
  },
  {
    id: "f4",
    name: "Coke",
    price: 2.0,
  },
  {
    id: "f5",
    name: "Rootbeer",
    price: 2.0,
  },
  {
    id: "f6",
    name: "Fanta",
    price: 2.0,
  },
];

const sodaSyrups = [
  {
    id: "s1",
    name: "Capsicum",
    price: 10.0,
  },
  {
    id: "s2",
    name: "Paneer",
    price: 10.0,
  },
  {
    id: "s3",
    name: "Red Paprika",
    price: 10.0,
  },
  {
    id: "s4",
    name: "Raspberry",
    price: 10.0,
  },
  {
    id: "s5",
    name: "Extra Cheese",
    price: 10.0,
  },
  {
    id: "s6",
    name: "Baby Corns",
    price: 10.0,
  },
  {
    id: "s7",
    name: "Mushroom",
    price: 10.0,
  },
];
//https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
const CustomSodaForm = () => {
  const [totalCost, setPrice] = useState(0);
  const [SyrupTotal, setSyrupTotal] = useState(0);
  const [sodaTotal, setSodaTotal] = useState(0);

  useEffect(() => {
    setPrice(SyrupTotal + sodaTotal);
  },[totalCost, SyrupTotal, sodaTotal])

  return (
    <form className={classes.customForm}>
      <div>
        <h2>Syrup Flavors:</h2>
        <ul>
          <CheckBox list={sodaFlavors} setPrice={setSodaTotal} total={totalCost}/>
        </ul>
      </div>
      <div>
        <h2>Syrup Flavors:</h2>
        <ul>
          <CheckBox list={sodaSyrups} setPrice={setSyrupTotal} total={totalCost}/>
        </ul>
      </div>
      <p>Total Price: {totalCost}</p>

      <div className={classes.btnBox}>
        <Button>Add to Cart</Button>
      </div>
    </form>
  );
};

export default CustomSodaForm;
