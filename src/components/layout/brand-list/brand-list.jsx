import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectCurrentBrand } from '../../../store/slices/parts-slice';
import s from './brand-list.module.scss';

// $======================== BrandList ========================$ //

export default function BrandList(props) {
  const { brands, onSelect } = props;

  const selectedBrand = useSelector(selectCurrentBrand);

  const handleButtonClick = (brand) => {
    onSelect(brand);
  };

  return (
    <div className={s['brand-list']}>
      <ul className={s.brands}>
        {brands.map((brand) => (
          <li className={s.brand} index={brand}>
            <button
              className={clsx(s['brand-button'], { [s._selected]: selectedBrand === brand })}
              onClick={() => handleButtonClick(brand)}
            >
              {brand}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
