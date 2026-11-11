import ProductCard from '../product-card/product-card';
import s from './analogues-list.module.scss';

// $======================== AnaloguesList ========================$ //

export default function AnaloguesList(props) {
  const { analogues } = props;

  return (
    <div className={s['analogues-list']}>
      <ul className={s.analogues}>
        {analogues && analogues.length > 0
          ? analogues.map((analogue) => (
              <li className={s.analog}>
                <ProductCard product={analogue} />
              </li>
            ))
          : 'нет аналогов'}
      </ul>
    </div>
  );
}
