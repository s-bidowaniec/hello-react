import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = (props) => {
  const [columnTitle, setColumnTitle] = useState('');
  const [columnIcon, setColumnIcon] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: columnTitle, icon: columnIcon });
    setColumnTitle('');
    setColumnIcon('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>Title:</label>
      <TextInput value={columnTitle} onChange={(e) => setColumnTitle(e.target.value)} />
      <label>Icon:</label>
      <TextInput value={columnIcon} onChange={(e) => setColumnIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

ColumnForm.propTypes = {
  action: PropTypes.func
};

export default ColumnForm;
