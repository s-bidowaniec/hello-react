import style from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  return (
    <form className={style.searchForm}>
      <TextInput placeholder="Search..." />
      <Button text="Search" />
    </form>
  );
};

export default SearchForm;
