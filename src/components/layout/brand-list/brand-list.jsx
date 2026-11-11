import s from './brand-list.module.scss';

// $======================== BrandList ========================$ //

export default function BrandList(props) {
  const { brands, onSelect } = props;

  const handleButtonClick = (brand) => {
    onSelect(brand)
  };

  return (
    <div className={s['brand-list']}>
      <ul className={s.brands}>
        {brands.map((brand) => (
          <li className={s.brand} index={brand}>
            <button className={s['brand-button']} onClick={() => handleButtonClick(brand)}>
              {brand}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
