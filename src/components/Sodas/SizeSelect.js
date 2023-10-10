import RadioButton from "../UI/RadioButton";

const SizeSelect = (props) => {
  return (
    <>
      <RadioButton
        id={"custom_radio_8"}
        name={"size-select"}
        value={"8"}
        setSelectedValue={props.setSize}
        label={"8 oz"}
        setSodaID={null}
      />
      <RadioButton
        id={"custom_radio_16"}
        name={"size-select"}
        value={"16"}
        setSelectedValue={props.setSize}
        label={"16 oz"}
        setSodaID={null}
      />
      <RadioButton
        id={"custom_radio_32"}
        name={"size-select"}
        value={"32"}
        setSelectedValue={props.setSize}
        label={"32 oz"}
        setSodaID={null}
      />
    </>
  );
};

export default SizeSelect;
