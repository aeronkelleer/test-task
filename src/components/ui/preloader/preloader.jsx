import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../../store/slices/parts-slice';
import s from './preloader.module.scss';

// ^======================== Preloader ========================^ //

export default function Preloader() {
  const isLoading = useSelector(selectIsLoading);

  return <div className={clsx(s.preloader, { [s._visible]: isLoading })}>Загрузка...</div>;
}
