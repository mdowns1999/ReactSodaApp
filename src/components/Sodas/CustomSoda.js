import { useLoaderData } from "react-router-dom";
import classes from "./CustomSoda.module.css";
import CustomSodaForm from "./CustomSodaForm";

const CustomSodas = () => {
  const customSodaLists = useLoaderData();

  console.log(customSodaLists[0].sodaFlavors);
  return (
    <>
      <section className={classes.customDetailBox}>
        <img src={require("../../images/blank.png")} alt="Custom Soda"></img>
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
        </div>
      </section>
      <section className={classes.customFormBox}>
        <CustomSodaForm
          syrupList={customSodaLists[0].sodaSyrups}
          sodaList={customSodaLists[0].sodaFlavors}
        />
      </section>
    </>
  );
};

export default CustomSodas;

export async function loader() {
  const response = await fetch(
    "https://poppinsodasbackend.onrender.com/custom"
  );

  if (!response.ok) {
  } else {
    return response;
  }
}