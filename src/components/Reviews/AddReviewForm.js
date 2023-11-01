import Button from "../UI/Button";
import classes from "./AddReviewForm.module.css";
import ReviewStars from "./reviewStars";


const AddReviewForm = () => {

    const submitReviewHandler = (event) => {
        event.preventDefault();
        console.log("SUBMITTED")

    }

  return (
    <form className={classes.reviewForm} onSubmit={submitReviewHandler}>
      <div className={classes.reviewWrapper}>
        <div>
          <label htmlFor="orderNum">Order Number:</label>
          <input
            name="orderNum"
            id="orderNum"
            type="number"
            min="1"
            max="10000"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="orderName">Name:</label>
          <input
            name="reviewName"
            id="reviewNum"
            type="text"
            min="1"
            max="10000"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="orderName">Review:</label>
          <textarea name="reviewName" id="reviewNum" type="text"></textarea>
        </div>
      </div>
    <ReviewStars/>
      <Button>Submit</Button>
    </form>
  );
};

export default AddReviewForm;
