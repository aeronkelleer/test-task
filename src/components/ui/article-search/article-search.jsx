import s from './article-search.module.scss';

// ^======================== ArticleSearch ========================^ //

export default function ArticleSearch(props) {
  const { value, onChange } = props;

  return (
    <input
      type='text'
      className={s['article-search']}
      name='article'
      value={value}
      onChange={onChange}
      placeholder='Введите артикул запчасти'
      required
    />
  );
}
