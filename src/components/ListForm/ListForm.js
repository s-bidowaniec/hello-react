import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addList } from '../../redux/store';
import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ListForm = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description, listId: props.listId }));
    setTitle('');
    setDescription('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <label>Title:</label>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Description:</label>
      <TextInput value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button>Add list</Button>
    </form>
  );
};

ListForm.propTypes = {
  listId: PropTypes.string
};

export default ListForm;
