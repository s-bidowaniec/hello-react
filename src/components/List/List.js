import React, { useState } from 'react';
//import shortid from 'shortid';
import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';

const List = () => {
  const [columns, setColumns] = useState([
    {
      key: 1,
      title: 'Books',
      icon: 'book',
      cards: [
        { key: 1, title: 'This is Going to Hurt' },
        { key: 2, title: 'Interpreter of Maladies' }
      ]
    },
    {
      key: 2,
      title: 'Movies',
      icon: 'film',
      cards: [
        { key: 1, title: 'Harry Potter' },
        { key: 2, title: 'Star Wars' }
      ]
    },
    {
      key: 3,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        { key: 1, title: 'The Witcher' },
        { key: 2, title: 'Skyrim' }
      ]
    }
  ]);

  const addColumn = (newColumn) => {
    const currentId = columns.length + 1;
    setColumns([
      ...columns,
      { key: currentId, title: newColumn.title, icon: newColumn.icon, cards: [] }
    ]);
  };

  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns.map((column) => {
      if (column.key === columnId)
        return {
          ...column,
          cards: [...column.cards, { key: columns.length + 1, title: newCard.title }]
        };
      else return column;
    });
    setColumns(columnsUpdated);
  };

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Things to do<span>soon</span>
        </h1>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column
            key={column.key}
            id={column.key}
            title={column.title}
            icon={column.icon}
            cards={column.cards}
            action={addCard}
          />
        ))}
      </section>
      <ColumnForm action={addColumn} />
    </div>
  );
};

export default List;
