import styles from './Column.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = (props) => {
  const cards = useSelector((state) => getFilteredCards(state, props.id));
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

Column.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.string
};

export default Column;
