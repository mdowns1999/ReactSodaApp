import { useState } from "react";
import classes from './CustomSodaForm.module.css'

// const sodaFlavors = [
//   {
//     name: "Pepsi",
//     price: 1.2
//   },
//   {
//     name: "Sprite",
//     price: 2.0
//   },
//   {
//     name: "Dr.Pepper",
//     price: 2.5
//   },
//   {
//     name: "Coke",
//     price: 3.0
//   },
//   {
//     name: "Rootbeer",
//     price: 3.5
//   },
//   {
//     name: "Fanta",
//     price: 3.0
//   }
// ];

const sodaSyrups = [
    {
      name: "Capsicum",
      price: 1.2
    },
    {
      name: "Paneer",
      price: 2.0
    },
    {
      name: "Red Paprika",
      price: 2.5
    },
    {
      name: "Raspberry",
      price: 3.0
    },
    {
      name: "Extra Cheese",
      price: 3.5
    },
    {
      name: "Baby Corns",
      price: 3.0
    },
    {
      name: "Mushroom",
      price: 2.0
    }
  ];
  //https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
const CustomSodaForm = () => {
    //Fill the check boxes to false since none will need to be checked right away
    const [checkedState, setCheckedState] = useState(
        new Array(sodaSyrups.length).fill(false)
    );
    const[totalCost, setPrice] = useState(0);

    const handleOnChange = (pos) =>{
        //Update the array with our new checked box
        const updatedCheckedState = checkedState.map((item, index) => 
        index === pos ? !item : item);
        setCheckedState(updatedCheckedState);

        //Calculate total price for toppings
        let totalPrice = updatedCheckedState.reduce((total, currentState, index) => {
            if(currentState === true){
                return total + sodaSyrups[index].price;
            }
            return total;
        }, 0)
        setPrice(totalPrice);
    }
    return <form className={classes.customForm}>
      {/* <div>
      <h2>Soda Flavors:</h2>
    <ul>
        {sodaFlavors.map(({name, price}, index) => (
            <li key={index}>
                <div className={classes.checkBoxBtn}>
                    <input
                    className={classes.hidden}
                    type="checkbox"
                    id={`custom-check-box-s${index}`}
                    name={name}
                    value={name}
                    onChange={() => handleOnChange(index)}/>
                    <label htmlFor={`custom-check-box-s${index}`}>{name}</label>
                </div>
            </li>
        ))}
    </ul>
      </div> */}

      <div>
      <h2>Syrup Flavors:</h2>
    <ul>
        {sodaSyrups.map(({name, price}, index) => (
            <li key={index}>
                <div className={classes.checkBoxBtn}>
                    <input
                    className={classes.hidden}
                    type="checkbox"
                    id={`custom-check-box-${index}`}
                    name={name}
                    value={name}
                    onChange={() => handleOnChange(index)}/>
                    <label htmlFor={`custom-check-box-${index}`}>{name}</label>
                </div>
            </li>
        ))}
    </ul>
      </div>
    <p>Total Price: {totalCost}</p>


    <button>Submit</button>

  </form>
}

export default CustomSodaForm;