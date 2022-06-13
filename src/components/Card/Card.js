import styles from './Card.module.scss';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <li className={styles.card} key={props.id}>
      {props.title}
    </li>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string
};

export default Card;
