import { useState, useRef } from "react";
import classes from "./CustomSodaForm.module.css";
import CheckBox from "../UI/CheckBox";
import Button from "../UI/Button";
import { useEffect } from "react";
import RadioButton from "../UI/RadioButton";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import SizeSelect from "./SizeSelect";
import QuantitySelect from "./QuantitySelect";

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
    name: "Diet Coke",
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

const CustomSodaForm = () => {
  const [totalCost, setPrice] = useState(0);
  const [SyrupTotal, setSyrupTotal] = useState(0);
  const [sodaTotal, setSodaTotal] = useState(0);
  const [SelectedSodaList, setSodaList] = useState([]);
  const [SelectedSodaType, setSodaID] = useState("");
  const [size, setSize] = useState("8");
  const quantityRef = useRef();
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    setPrice(SyrupTotal + sodaTotal);
  }, [totalCost, SyrupTotal, sodaTotal]);

  const addtoCartHandler = (event) => {
    event.preventDefault();

    let flavorName = sodaFlavors.find((soda) => {
      return soda.id === SelectedSodaType;
    });

    //Add Flavors to Cart CTX and List
    console.log(flavorName);
    console.log(SelectedSodaList);

    cartCtx.addItem({
      id: "c" + flavorName.id,
      name: flavorName.name,
      amount: +quantityRef.current.value,
      price: totalCost,
      ingredents: {
        baseSoda: flavorName.name,
        ingredents: [SelectedSodaList],
      },
      size: size,
    });

    //Reseet the values
    setPrice(0);
    quantityRef.current.value = "";
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        event.target[i].checked = null;
      }
    }
  };

  return (
    <form className={classes.customForm} onSubmit={addtoCartHandler}>
      <div>
        <h2>Syrup Flavors:</h2>
        <ul>
          {sodaFlavors.map((flavor) => (
            <RadioButton
              key={flavor.id}
              id={flavor.id}
              name={"soda-select"}
              value={flavor.price}
              setSelectedValue={setSodaTotal}
              label={flavor.name}
              setSodaID={setSodaID}
            />
          ))}
        </ul>
      </div>
      <div>
        <h2>Syrup Flavors:</h2>
        <ul>
          <CheckBox
            list={sodaSyrups}
            setSelectedList={setSodaList}
            setTotalValue={setSyrupTotal}
          />
        </ul>
      </div>

      <div className={classes.sizeBox}>
        <QuantitySelect quantityRef={quantityRef} />

        <div className={classes.sizeBox}>
          <SizeSelect setSize={setSize} />
        </div>
      </div>
      <p>Total Price: {totalCost}</p>

      <div className={classes.btnBox}>
        <Button>Add to Cart</Button>
      </div>
    </form>
  );
};

export default CustomSodaForm;
