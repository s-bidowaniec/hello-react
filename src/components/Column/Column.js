import styles from './Column.module.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = (props) => {
  const cards = useSelector((state) => state.cards.filter((card) => card.columnId === props.id));
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.key} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={props.id} action={props.action} />
    </article>
  );
};

Column.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.string,
  cards: PropTypes.array,
  action: PropTypes.func
};

export default Column;
