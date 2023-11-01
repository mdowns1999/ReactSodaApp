import classes from './ReviewItem.module.css';

const ReviewItem = () => {
    return <li>
    <section className={classes.ReviewHeader}>
      <div>Stars</div>
      <h2>Mike Downs</h2>
      <p>1/15/2023</p>
    </section>
    <section className={classes.ReviewTextBox}>
      <p>
        Check out these real opinions from our customers and see how
        they liked our sodas. If you want to leave a review yourself,
        click the button down below! Check out these real opinions from our customers and see how
        they liked our sodas. If you want to leave a review yourself,
        click the button down below! Check out these real opinions from our customers and see how
        they liked our sodas. If you want to leave a review yourself,
        click the button down below!
      </p>
    </section>
  </li>
}

export default ReviewItem;