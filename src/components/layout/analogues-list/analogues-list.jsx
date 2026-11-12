import ProductCard from '../product-card/product-card';
import s from './analogues-list.module.scss';

// $======================== AnaloguesList ========================$ //

export default function AnaloguesList(props) {
  const { analogues } = props;

  return (
    <div className={s['analogues-list']}>
      <ul className={s.analogues}>
        {analogues.map((analogue) => (
          <li key={analogue.goodsID} className={s.analog}>
            <ProductCard product={analogue} modifier='analogue' />
          </li>
        ))}
      </ul>
    </div>
  );
}
