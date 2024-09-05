import s from './index.module.css';

const EpisodeCard = ({ episode }) => {
  return (
    <div className={s.card}>
      <img className={s.image} src={episode.image} alt={episode.title} />
      <div className={s.container}>
        <span className={s.tag}>{episode.tag}</span>
        <h4 className={s.number}>{`Episode ${episode.id}`}</h4>
        <h3 className={s.title}>{episode.title}</h3>
        <p className={s.description}>{episode.description}</p>
        <button className={s.button_view}>View Episode Details</button>
      </div>
    </div>
  );
};

export default EpisodeCard;
