import s from './index.module.css';
import Header from '../Header';
import Hero from '../Hero';
import Episodes from '../Episodes';

const App = () => {
  return (
    <div className={s.body}>
      <Header />
      <Hero />
      <Episodes />
    </div>
  );
};

export default App;
