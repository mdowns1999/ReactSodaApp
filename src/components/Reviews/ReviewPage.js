import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./ReviewPage.module.css";
import ReviewList from "./ReviewList";

const ReviewPage = () => {
  const navigate = useNavigate();
  const navigateToAddReviewHandler = () => {
    navigate("add");
  };

  return (
    <>
      <section className="pageBanner">
        <h1>Reviews</h1>
      </section>
      <div className={classes.reviewIntro}>
        <p>
          Check out these real opinions from our customers and see how they
          liked our sodas. If you want to leave a review yourself, click the
          button down below!
        </p>

        <Button onClick={navigateToAddReviewHandler}>Add a Review</Button>
      </div>

      <div className={classes.reviewListBox}>
        <ReviewList/>
      </div>
    </>
  );
};

export default ReviewPage;
