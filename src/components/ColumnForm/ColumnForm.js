import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addColumn } from '../../redux/store';

const ColumnForm = (props) => {
  const dispatch = useDispatch();
  const [title, setColumnTitle] = useState('');
  const [icon, setColumnIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId: props.listId }));
    setColumnTitle('');
    setColumnIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>Title:</label>
      <TextInput value={title} onChange={(e) => setColumnTitle(e.target.value)} />
      <label>Icon:</label>
      <TextInput value={icon} onChange={(e) => setColumnIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

ColumnForm.propTypes = {
  listId: PropTypes.string
};

export default ColumnForm;
