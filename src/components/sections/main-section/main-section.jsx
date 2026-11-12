import { useDispatch, useSelector } from 'react-redux';
import { LoadingStatus } from '../../../constants/const.js';
import { getAnalogues, getParts } from '../../../store/api-actions/api-actions.js';
import {
  dropAnalogues,
  dropCurrentBrand,
  dropParts,
  selectAnaloguesError,
  selectAnaloguesStatus,
  selectBrands,
  selectCurrentArticle,
  selectPartsError,
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
import ErrorMessage from '../../ui/error-message/error-message.jsx';
import s from './main-section.module.scss';

// @======================== MainSection ========================@ //

export default function MainSection() {
  const dispatch = useDispatch();
  const currentArticle = useSelector(selectCurrentArticle);

  const brands = useSelector(selectBrands);

  const product = useSelector(selectProduct);
  const partsLoadingStatus = useSelector(selectPartsStatus);
  const analogues = useSelector(selectProductAnalogues);
  const analoguesLoadingStatus = useSelector(selectAnaloguesStatus);
  const partsError = useSelector(selectPartsError);
  const analoguesError = useSelector(selectAnaloguesError);

  const handleSearch = (value) => {
    dispatch(dropParts());
    dispatch(dropAnalogues());
    dispatch(dropCurrentBrand());

    dispatch(setCurrentArticle(value));
    dispatch(getParts(value));
  };

  const handleBrandSelect = (brand) => {
    dispatch(dropAnalogues());
    dispatch(setCurrentBrand(brand));
    dispatch(getAnalogues({ article: currentArticle, brand }));
  };

  return (
    <section className={s['main-section']}>
      <Container>
        <SearchForm onSearch={handleSearch} />

        <div className={s.brands}>
          {partsLoadingStatus === LoadingStatus.LOADED &&
            (brands.length > 0 ? (
              <>
                <p className={s.title}>Бренды:</p>
                <BrandList brands={brands} onSelect={handleBrandSelect} />
              </>
            ) : (
              <p className={s.message}>Деталь не найдена</p>
            ))}
          {partsLoadingStatus === LoadingStatus.ERROR && (
            <ErrorMessage text='Произошла ошибка' message={partsError} />
          )}
        </div>

        <div className={s['main-product']}>
          {analoguesLoadingStatus === LoadingStatus.LOADED && product && (
            <>
              <p className={s.title}>Результат поиска:</p>
              <ProductCard product={product} modifier='original' />
            </>
          )}
        </div>

        <div className={s.analogues}>
          {analoguesLoadingStatus === LoadingStatus.LOADED &&
            (analogues.length > 0 ? (
              <>
                <p className={s.title}>Аналоги: </p>
                <AnaloguesList analogues={analogues} />
              </>
            ) : (
              <p className={s.message}>Аналоги не найдены</p>
            ))}
          {analoguesLoadingStatus === LoadingStatus.ERROR && (
            <ErrorMessage text='Произошла ошибка' message={analoguesError} />
          )}
        </div>
      </Container>
    </section>
  );
}
