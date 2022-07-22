import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { getSearchString } from '../../redux/searchStringRedux';
import { searchCard } from '../../redux/searchStringRedux';
const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState(useSelector(getSearchString));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCard(searchText));
  };
  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
