import { useState } from 'react';
import ArticleSearch from '../../ui/article-search/article-search';
import Button from '../../ui/button/button';
import s from './search-form.module.scss';

// &======================== SearchForm ========================& //

export default function SearchForm(props) {
  const { onSearch } = props;

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form className={s['search-form']} onSubmit={handleSubmit}>
      <ArticleSearch onChange={handleInputChange} value={inputValue} />
      <Button onClick={handleSubmit} type='submit'>
        Поиск
      </Button>
    </form>
  );
}
