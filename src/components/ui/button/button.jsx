import clsx from 'clsx';
import s from './button.module.scss';

// ^======================== Button ========================^ //

export default function Button(props) {
  const { children, className, type = 'button', onClick } = props;

  return (
    <button className={clsx(s.button, className ?? '')} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
