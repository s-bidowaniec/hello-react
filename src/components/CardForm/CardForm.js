import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addCard } from '../../redux/store';
const CardForm = (props) => {
  const dispatch = useDispatch();
  const [cardTitle, setCardTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ title: cardTitle, columnId: props.columnId }));
    setCardTitle('');
    setCardTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
      <TextInput value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
};

CardForm.propTypes = {
  columnId: PropTypes.string
};

export default CardForm;
