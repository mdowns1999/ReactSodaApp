import Star from "../UI/Star"
const FiveStar = Array(5).fill(true).map((item, index) => (
    <Star key={index}/>
))
const ReviewStars = () => {
    return <>
    {FiveStar}</>
}

export default ReviewStars;