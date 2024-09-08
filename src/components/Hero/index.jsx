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
      <div className={s.container_info}>
        <h1 className={s.title}>
          Take your podcast to the <span className={s.crossed_text}>next</span>
          <span className={s.bold_text}> level</span>
        </h1>
        <div className={s.container_listen}>
          <h3 className={s.links_title}>Listen on</h3>
          <div className={s.icon_links}>
            <a className={s.icon_link}>
              <SpotifyIcon />
            </a>
            <a className={s.icon_link}>
              <PocketCastsIcon />
            </a>
            <a className={s.icon_link}>
              <SoundCloudIcon />
            </a>
            <a className={s.icon_link}>
              <ApplePodcastsIcon />
            </a>
            <a className={s.icon_link}>
              <OvercastIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
