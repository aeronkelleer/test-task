import s from './error-message.module.scss';

// ^======================== ErrorMessage ========================^ //

export default function ErrorMessage(props) {
  const { text, message } = props;
  
  return (
    <div className={s['error-message']}>
      <p className={s.text}>{text}</p>
      <p className={s.message}>{message}</p>
    </div>
  );
}
