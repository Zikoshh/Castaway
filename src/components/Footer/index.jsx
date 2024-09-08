import s from './index.module.css';
import logo from '../../assets/footer_logo.png';
import SpotifyIcon from '../../assets/spotify_icon.svg?react';
import PocketCastsIcon from '../../assets/pocket_casts_icon.svg?react';
import SoundCloudIcon from '../../assets/sound_cloud_icon.svg?react';
import ApplePodcastsIcon from '../../assets/apple_podcasts_icon.svg?react';
import OvercastIcon from '../../assets/overcast_icon.svg?react';
import InstagramIcon from '../../assets/instagram.svg?react';
import TwitterIcon from '../../assets/twitter.svg?react';
import FacebookIcon from '../../assets/facebook.svg?react';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div>
          <img className={s.logo} src={logo} alt='logo' />
          <div className={s.container_socials}>
            <a className={s.icon_link}>
              <InstagramIcon />
            </a>
            <a className={s.icon_link}>
              <TwitterIcon />
            </a>
            <a className={s.icon_link}>
              <FacebookIcon />
            </a>
          </div>
        </div>
        <div className={s.container_right}>
          <nav className={s.nav}>
            <a className={s.link} href='#hero'>
              Home
            </a>
            <a className={s.link} href='#about'>
              About
            </a>
            <a className={s.link} href='#episodes'>
              Episodes
            </a>
            <a className={s.link} href='#contact'>
              Contact
            </a>
          </nav>
          <div className={s.container_other}>
            <p className={s.text}>Style Guide</p>
            <p className={s.text}>Instructions</p>
            <p className={s.text}>Changelog</p>
            <p className={s.text}>Credit</p>
            <p className={s.text}>Powered by Webflow</p>
            <p className={s.text}>Licenses</p>
          </div>
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

export default Footer;
