import Star from "../UI/Star";
import classes from "./RatingStars.module.css";

const RatingStars = () => {

//   const ratings = {
//     1: "Poor",
//     2: "Ok",
//     3: "Good",
//     4: "Great",
//     5: "Poppin off!",
//   };
  return (
    <div className={classes.ratingBox}>
      <div className={classes.rating}>
        <p>How was your experience at Poppin Sodas?</p>
        <div className={classes.stars}>
          <Star value={1} readOnly={false}/>
        </div>

      </div>
    </div>
  );
};

export default RatingStars;
