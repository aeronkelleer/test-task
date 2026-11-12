import clsx from 'clsx';
import s from './product-card.module.scss';

// $======================== ProductCard ========================$ //

export default function ProductCard(props) {
  const { product } = props;

  if (!product) return null;

  return (
    <div className={s['product-card']}>
      <div className={s.detail}>
        <p className={s['detail-key']}>Наименование</p>
        <p className={s['detail-value']}>{product.name}</p>
      </div>
      <div className={s.detail}>
        <p className={s['detail-key']}>Бренд</p>
        <p className={s['detail-value']}>{product.brand}</p>
      </div>
      <div className={s.detail}>
        <p className={s['detail-key']}>Артикул</p>
        <p className={s['detail-value']}>{product.number}</p>
      </div>
      <div className={s['warehouses-wrapper']}>
        {product.warehouses && product.warehouses.length > 0 ? (
          <ul className={s.warehouses}>
            {product.warehouses.map((warehouse) => (
              <li key={warehouse.id} className={s.warehouse}>
                <div className={clsx(s.detail, s._code)}>
                  <p className={s['detail-key']}>Код товара: </p>
                  <p className={s['detail-value']}>{warehouse.code}</p>
                </div>
                <div className={clsx(s.detail, s._quantity)}>
                  <p className={s['detail-key']}>Количество: </p>
                  <p className={s['detail-value']}>{warehouse.stock}</p>
                </div>
                <div className={clsx(s.detail, s._price)}>
                  <p className={s['detail-key']}>Цена: </p>
                  <p className={s['detail-value']}>{warehouse.price} руб.</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          'Нет товаров на складе'
        )}
      </div>
    </div>
  );
}
