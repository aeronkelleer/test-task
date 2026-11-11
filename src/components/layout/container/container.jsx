import clsx from 'clsx';
import s from './container.module.scss';

// ^======================== Container ========================^ //

export default function Container(containerProps){

  const { className, children } = containerProps;

  return (<div className={clsx(className, s.container)}>{children}</div>);
}