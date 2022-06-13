import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = (props) => {
  const [cardTitle, setCardTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: cardTitle }, props.columnId);
    setCardTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
};

CardForm.propTypes = {
  action: PropTypes.func,
  columnId: PropTypes.number
};

export default CardForm;
