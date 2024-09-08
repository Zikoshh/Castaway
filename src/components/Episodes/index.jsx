import EpisodeCard from '../EpisodeCard';
import s from './index.module.css';
import episode_3 from '../../assets/episode_image_3.png';
import episode_2 from '../../assets/episode_image_2.png';
import episode_1 from '../../assets/episode_image_1.png';

const episodes = [
  {
    id: 3,
    title: 'Should you get outboard audio gear?',
    tag: 'Gear',
    description: `Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here's our reasons on why you might want to consider picking something up.`,
    image: episode_3,
  },
  {
    id: 2,
    title: 'Mic tricks to take you to the next level',
    tag: 'Tips & Tricks',
    description: `Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.`,
    image: episode_2,
  },
  {
    id: 1,
    title: 'The best microphone under $200',
    tag: 'Gear',
    description: `With so many microphones on the market, how are you supposed to know what's the best? Take a look at our top picks.`,
    image: episode_1,
  },
];

const Episodes = () => {
  return (
    <div className={s.episodes} id='episodes'>
      <div className={s.container_main}>
        <h2 className={s.title}>Latest episodes</h2>
        <button className={s.button_show}>View all episodes</button>
      </div>
      <div className={s.cards}>
        {episodes.map((episode) => {
          return <EpisodeCard key={episode.id} episode={episode} />;
        })}
      </div>
    </div>
  );
};

export default Episodes;
