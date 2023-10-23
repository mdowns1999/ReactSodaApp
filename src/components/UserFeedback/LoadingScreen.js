import classes from './LoadingScreen.module.css';

const LoadingScreen = () => {
    return <section className={classes.loadingSection}>
        <div className={classes.sodaLoader}></div>
        <p>Want a soda? We're on it!</p>
    </section>
}

export default LoadingScreen;