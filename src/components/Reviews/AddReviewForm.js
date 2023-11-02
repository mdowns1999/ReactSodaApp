import Button from "../UI/Button";
import classes from "./AddReviewForm.module.css";
import RatingStars from "./RatingStars";
import fetchHttp from "../../helper/fetchHttp";
import { useNavigate } from "react-router";

const hasOrder = (reviews, orderNum) => {
  //Filter the array to just the order numbers
  return reviews.filter((review) => review.id === orderNum).length > 0;
};

const postReview = (orderNum, message, name, rating) => {
  let error = {
    message: "Could not send soda order!",
    status: 500,
  };
  return fetchHttp({
    url: "https://poppinsodasbackend.onrender.com/reviews",
    error,
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json", // this shows the expected content type
    },
    body: {
      id: orderNum,
      name: name,
      rating: rating,
      message: message
    },
  });
};

const AddReviewForm = (props) => {
  const navigate = useNavigate();

  const submitReviewHandler = (event) => {
    event.preventDefault();
    console.log(+event.target.orderNum.value);
    if (hasOrder(props.reviews, +event.target.orderNum.value)) {
      //SEND POST REQUEST
     let promise = postReview(+event.target.orderNum.value, event.target.comments.value,event.target.reviewName.value, 5 );
      promise.then((result) => {
        if (result.ok) {
          navigate("/reviews");
        }
      });
    }
  };

  return (
    <form className={classes.reviewForm} onSubmit={submitReviewHandler}>
      <div className={classes.reviewWrapper}>
        <div className={classes.inputBox}>
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
        <div className={classes.inputBox}>
          <label htmlFor="reviewName">Name:</label>
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
          <label htmlFor="comments">Review:</label>
          <textarea name="comments" id="comments" type="text"></textarea>
        </div>
      </div>

      <RatingStars />

      <Button>Submit</Button>
    </form>
  );
};

export default AddReviewForm;
