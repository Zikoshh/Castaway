import s from './index.module.css';
import ReviewsCard from '../ReviewsCard';

const reviews = [
  {
    rating: 4,
    text: `I can't recommend this podcast enough`,
    userName: 'Betty Lacey',
  },
  {
    rating: 3,
    text: `Jacob is the best in the business`,
    userName: 'Adam Driver',
  },
  {
    rating: 1,
    text: `A wealth of audio knowledge`,
    userName: 'Marcus Brown',
  },
  {
    rating: 5,
    text: `Every episode is a gem!`,
    userName: 'Jessica Knowl',
  },
  {
    rating: 2,
    text: `Whoa whoa, let me take some notes!`,
    userName: 'Scott Adams',
  },
  {
    rating: 5,
    text: `I've upped my game considerably since I started listening`,
    userName: 'Steven Blast',
  },
];

const Reviews = () => {
  return (
    <div className={s.reviews}>
      <div className={s.cards}>
        {reviews.map((review, i) => {
          return <ReviewsCard key={i} review={review} />;
        })}
      </div>
    </div>
  );
};

export default Reviews;
