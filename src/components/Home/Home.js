import React, { Fragment } from "react";
import classes from "./Home.module.css";
import SlideShow from "./SlideShow";



const Home = () => {
  return (
    <Fragment>
      <SlideShow/>
      <div className={classes.home}>
      <section className={classes.homeSectionOne}>
        <div>
          <h1>About Us</h1>
          <p>
            THis is a lot of random text. THis is a lot of random text. THis is
            a lot of random text. THis is a lot of random text. THis is a lot of
            random text. THis is a lot of random text. THis is a lot of random
            text. THis is a lot of random text. THis is a lot of random text.
            THis is a lot of random text. THis is a lot of random text. THis is
            a lot of random text.
          </p>
        </div>
        <img
          src={require("../../images/blank.png")}
          alt="Poppin Soda Shop Logo"
        ></img>
      </section>

      <section className={classes.homeSectionTwo}>
        <img
          src={require("../../images/blank.png")}
          alt="Poppin Soda Shop Logo"
        ></img>
        <div>
          <h1>Our Team</h1>
          <p>
            THis is a lot of random text. THis is a lot of random text. THis is
            a lot of random text. THis is a lot of random text. THis is a lot of
            random text. THis is a lot of random text. THis is a lot of random
            text. THis is a lot of random text. THis is a lot of random text.
            THis is a lot of random text. THis is a lot of random text. THis is
            a lot of random text.
          </p>
        </div>
      </section>
      </div>
    </Fragment>
  );
};

export default Home;
