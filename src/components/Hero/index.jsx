import s from './index.module.css';
import image from '../../assets/hero_image.png';
import SpotifyIcon from '../../assets/spotify_icon.svg?react';
import PocketCastsIcon from '../../assets/pocket_casts_icon.svg?react';
import SoundCloudIcon from '../../assets/sound_cloud_icon.svg?react';
import ApplePodcastsIcon from '../../assets/apple_podcasts_icon.svg?react';
import OvercastIcon from '../../assets/overcast_icon.svg?react';

const Hero = () => {
  return (
    <div className={s.hero} id='hero'>
      <img className={s.image} src={image} alt='hero_image' />
      <div className={s.image_svg}></div>
      <div className={s.info}>
        <h1 className={s.title}>
          Take your podcast to the <span className={s.crossed_text}>next</span>
          <span className={s.bold_text}> level</span>
        </h1>
        <div className={s.listen}>
          <p className={s.subtitle}>Listen on</p>
          <div className={s.icons}>
            <a className={s.link}>
              <SpotifyIcon />
            </a>
            <a className={s.link}>
              <PocketCastsIcon />
            </a>
            <a className={s.link}>
              <SoundCloudIcon />
            </a>
            <a className={s.link}>
              <ApplePodcastsIcon />
            </a>
            <a className={s.link}>
              <OvercastIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
