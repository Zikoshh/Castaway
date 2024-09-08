import s from './index.module.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={s.contact} id='contact'>
      <div className={s.container}>
        <div>
          <p className={s.hint}>Email Newsletter</p>
          <h2 className={s.title}>Subscribe for updates</h2>
        </div>
        <form className={s.form} onSubmit={handleSubmit}>
          <input className={s.input} type='text' placeholder='Name' />
          <input className={s.input} type='email' placeholder='Email' />
          <button className={s.button_submit} type='submit'>
            Submit
          </button>
        </form>
        <div className={s.image_svg}></div>
      </div>
    </div>
  );
};

export default Contact;
