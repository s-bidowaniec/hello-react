import style from './SearchForm.module.scss';

const SearchForm = () => {
  return (
    <form className={style.searchForm}>
      <input className={style.input} type="text" />
      <button className={style.button}>Search</button>
    </form>
  );
};

export default SearchForm;
