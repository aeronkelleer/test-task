import { useDispatch, useSelector } from 'react-redux';
import { getAnalogues, getParts } from '../../../store/api-actions/api-actions';
import {
  dropAnalogues,
  selectBrands,
  selectCurrentArticle,
  selectError,
  selectIsLoading,
  selectProduct,
  selectProductAnalogues,
  setCurrentArticle,
} from '../../../store/slices/parts-slice.js';
import BrandList from '../../layout/brand-list/brand-list.jsx';
import Container from '../../layout/container/container';
import ProductCard from '../../layout/product-card/product-card.jsx';
import SearchForm from '../../layout/search-form/search-form';
import s from './section.module.scss';

// @======================== Section ========================@ //

export default function Section() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentArticle = useSelector(selectCurrentArticle);

  const brands = useSelector(selectBrands);

  const product = useSelector(selectProduct);
  const analogues = useSelector(selectProductAnalogues);

  const handleSearch = (value) => {
    dispatch(dropAnalogues());
    dispatch(getParts(value));
    dispatch(setCurrentArticle(value));
  };

  const handleBrandSelect = (brand) => {
    dispatch(getAnalogues({ article: currentArticle, brand }));
  };

  return (
    <section className={s.section}>
      <Container>
        <SearchForm onSearch={handleSearch} />
        <p>загрузка: {String(isLoading)}</p>
        <p>ошибка: {String(error)}</p>

        <BrandList brands={brands} onSelect={handleBrandSelect} />

        <ProductCard product={product} />

        <pre>{JSON.stringify(product, null, 2)}</pre>
        <pre>{JSON.stringify(analogues, null, 2)}</pre>
      </Container>
    </section>
  );
}
