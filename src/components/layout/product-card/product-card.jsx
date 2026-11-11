import s from './product-card.module.scss';

// $======================== ProductCard ========================$ //

export default function ProductCard(props) {
  const { product } = props;

  if (!product) return null;

  return (
    <div className={s['product-card']}>
      <p>product name: {product.name}</p>
      <p>brand: {product.brand}</p>
      <p>article: {product.number}</p>
      {product.warehouses && product.warehouses.length > 0 ? (
        <ul className={s.warehouses}>
          {product.warehouses.map((warehouse) => (
            <li key={warehouse.id} className={s.warehouse}>
              <p className={s.code}>{warehouse.code}</p>
              <p className={s.stock}>{warehouse.stock}</p>
              <p className={s.price}>{warehouse.price} руб.</p>
            </li>
          ))}
        </ul>
      ): 'Нет товаров'}
    </div>
  );
}
