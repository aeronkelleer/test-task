import s from './wrapper.module.scss';

// $======================== Wrapper ========================$ //

export default function Wrapper({ children }) {
  return <div className={s.wrapper}>{children}</div>;
}
