import s from './index.module.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className={s.header} id='header'>
      <img className={s.logo} src={logo} alt='logo' />
      <nav className={s.nav}>
        <a className={s.link} href='#hero'>
          Home
        </a>
        <a className={s.link} href='#episodes'>
          Episodes
        </a>
        <a className={s.link} href='#about'>
          About
        </a>
        <a className={s.link} href='#contact'>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
