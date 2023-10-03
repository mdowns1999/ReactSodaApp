import classes from './RadioButton.module.css';

const RadioButton = (props) => {

    const handleRadioChange = (event) => {
        props.setTotalValue(event.target.value);
    }

      
  return (
    <div className={classes.radio}>
      <input type="radio" name="select" value={props.value} id={props.id} onChange={handleRadioChange}required></input>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default RadioButton;
