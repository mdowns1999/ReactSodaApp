import ReviewItem from './ReviewItem';
import classes from './ReviewList.module.css';

const ReviewList = () => {
    return <ul className={classes.reviewList}>
        <ReviewItem/>
  </ul>
}

export default ReviewList;