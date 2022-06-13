import styles from './Column.module.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = (props) => {
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {props.cards.map((card) => (
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
