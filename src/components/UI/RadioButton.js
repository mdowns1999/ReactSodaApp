const RadioButton = (props) => {

    const handleRadioChange = (event) => {
        props.setSize(event.target.value);
    }

      
  return (
    <div>
      <input type="radio" name="select" value={props.value} id={props.id} onChange={handleRadioChange}required></input>
      <label htmlFor={props.id}>{props.value} oz</label>
    </div>
  );
};

export default RadioButton;
