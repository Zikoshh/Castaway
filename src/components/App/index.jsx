import s from './index.module.css';
import Header from '../Header';
import Hero from '../Hero';
import Episodes from '../Episodes';
import About from '../About';
import Contact from '../Contact';
import Reviews from '../Reviews';
import Footer from '../Footer';

const App = () => {
  return (
    <div className={s.body}>
      <Header />
      <Hero />
      <Episodes />
      <About />
      <Contact />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
