import s from './index.module.css';
import image from '../../assets/about_image.png';
import arrow from '../../assets/about_arrow.png';

const About = () => {
  return (
    <div className={s.about} id='about'>
      <div className={s.container_main}>
        <div className={s.container_arrow}>
          <img className={s.icon_arrow} src={arrow} alt='arrow'></img>
        </div>
        <p className={s.hint}>Meet your host</p>
        <h2 className={s.title}>Jacob Paulaner</h2>
        <p className={s.description}>
          Jacob has a background in audio engineering, and has been podcasting
          since the early days.
        </p>
        <p className={s.description}>
          {`He's here to help you level up your game by sharing everything he's learned along the way.`}
        </p>
      </div>
      <img className={s.image} src={image} alt='about image' />
    </div>
  );
};

export default About;
