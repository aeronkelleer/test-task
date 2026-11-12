import { useState } from 'react';
import { INITIAL_VISIBLE_ITEMS_QUANTITY } from '../../../constants/const';
import Button from '../../ui/button/button';
import ProductCard from '../product-card/product-card';
import s from './analogues-list.module.scss';

// $======================== AnaloguesList ========================$ //

export default function AnaloguesList(props) {
  const { analogues } = props;

  const [visibleItemsQuantity, setVisibleItemsQuantity] = useState(INITIAL_VISIBLE_ITEMS_QUANTITY);

  const visibleItems = analogues.slice(0, visibleItemsQuantity);

  const handleButtonClick = () => {
    setVisibleItemsQuantity((prev) => Math.min(prev + INITIAL_VISIBLE_ITEMS_QUANTITY, analogues.length));
  };

  return (
    <div className={s['analogues-list']}>
      <ul className={s.analogues}>
        {visibleItems.map((analogue) => (
          <li key={analogue.goodsID} className={s.analog}>
            <ProductCard product={analogue} modifier='analogue' />
          </li>
        ))}
      </ul>
      {visibleItemsQuantity < analogues.length && (
        <Button className={s.button} onClick={handleButtonClick}>
          Показать ещё
        </Button>
      )}
    </div>
  );
}
