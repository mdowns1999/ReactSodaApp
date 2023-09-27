import { useState } from "react";

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
      name: "Onions",
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
    return <form>
    <ul>
        {sodaSyrups.map(({name, price}, index) => (
            <li key={index}>
                <div>
                    <input
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

    <p>Total Price: {totalCost}</p>


    <button>Submit</button>

  </form>
}

export default CustomSodaForm;