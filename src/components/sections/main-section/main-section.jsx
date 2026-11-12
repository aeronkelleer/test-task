import { useDispatch, useSelector } from 'react-redux';
import { LoadingStatus } from '../../../constants/const.js';
import { getAnalogues, getParts } from '../../../store/api-actions/api-actions.js';
import {
  dropAnalogues,
  dropParts,
  selectBrands,
  selectCurrentArticle,
  selectPartsStatus,
  selectProduct,
  selectProductAnalogues,
  setCurrentArticle,
  setCurrentBrand,
} from '../../../store/slices/parts-slice.js';
import AnaloguesList from '../../layout/analogues-list/analogues-list.jsx';
import BrandList from '../../layout/brand-list/brand-list.jsx';
import Container from '../../layout/container/container.jsx';
import ProductCard from '../../layout/product-card/product-card.jsx';
import SearchForm from '../../layout/search-form/search-form.jsx';
import s from './main-section.module.scss';

// @======================== MainSection ========================@ //

export default function MainSection() {
  const dispatch = useDispatch();
  const currentArticle = useSelector(selectCurrentArticle);

  const brands = useSelector(selectBrands);

  const product = useSelector(selectProduct);
  const partsLoadingStatus = useSelector(selectPartsStatus);
  const analogues = useSelector(selectProductAnalogues);

  const handleSearch = (value) => {
    dispatch(dropAnalogues());
    dispatch(dropParts());
    dispatch(getParts(value));
    dispatch(setCurrentArticle(value));
  };

  const handleBrandSelect = (brand) => {
    dispatch(getAnalogues({ article: currentArticle, brand }));
    dispatch(setCurrentBrand(brand));
  };

  return (
    <section className={s['main-section']}>
      <Container>
        <SearchForm onSearch={handleSearch} />

        {brands && brands.length > 0 && (
          <div className={s.brands}>
            <p className={s.title}>Бренды:</p>
            <BrandList brands={brands} onSelect={handleBrandSelect} />
          </div>
        )}

        {partsLoadingStatus === LoadingStatus.LOADED && brands.length === 0 && (
          <p className={s.message}>Деталь не найдена</p>
        )}

        {partsLoadingStatus === LoadingStatus.LOADED && product && (
          <div className={s['main-product']}>
            <p className={s.title}>Результат поиска:</p>
            <ProductCard product={product} />
          </div>
        )}

        {analogues && analogues.length > 0 && (
          <div className={s.analogues}>
            <p className={s.title}>Аналоги: </p>
            <AnaloguesList analogues={analogues} />
          </div>
        )}
      </Container>
    </section>
  );
}
