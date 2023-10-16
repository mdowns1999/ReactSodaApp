import { useLoaderData } from "react-router-dom";
import classes from "./CustomSoda.module.css";
import CustomSodaForm from "./CustomSodaForm";
import fetchHttp from "../../helper/fetchHttp";

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
  let error = {
    message:"Oh no! Looks like we have a mess on our end.  We are getting it cleaned up as fast as we can.  Please try again later!",
    status: 500
  }
  return fetchHttp({url: "https://poppinsodasbackend.onrender.com/custom", error});
}