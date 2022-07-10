import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { searchCard } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
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
