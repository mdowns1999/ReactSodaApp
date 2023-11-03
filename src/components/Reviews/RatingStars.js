import Star from "../UI/Star";
import classes from "./RatingStars.module.css";

const RatingStars = (props) => {

  return (
    <div className={classes.ratingBox}>
      <div className={classes.rating}>
        <p>How was your experience at Poppin Sodas?</p>
        <div className={classes.stars}>
          <Star value={1} readOnly={false} setRating={props.setRating}/>
        </div>

      </div>
    </div>
  );
};

export default RatingStars;
