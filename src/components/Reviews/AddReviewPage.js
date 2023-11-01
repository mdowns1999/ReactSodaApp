import AddReviewForm from "./AddReviewForm";
import classes from './AddReviewPage.module.css';

const AddReviewPage = () => {
  return (
    <>
      <section className="pageBanner">
        <h1>Add Review</h1>
      </section>
      <div className={classes.addReviewText}>
        <p>
          We love to hear what you thought of our business! Please leave a
          review down below. Make sure to have your order conformaiton number
          ready in order to leave a review!
        </p>
      </div>

      <AddReviewForm />
    </>
  );
};

export default AddReviewPage;
