import s from './index.module.css';

const ReviewsCard = ({ review }) => {
  const stars = [];
  const numberOfStars = review.rating;

  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<div key={i} className={s.rating_star}></div>);
  }

  return (
    <div className={s.card}>
      <div className={s.rating_stars}>{stars}</div>
      <p className={s.review_text}>{review.text}</p>
      <h3 className={s.reviewer_name}>{review.userName}</h3>
    </div>
  );
};

export default ReviewsCard;
