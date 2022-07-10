import styles from './Card.module.scss';
import PropTypes from 'prop-types';

const Card = (props) => {
  return <li className={styles.card}>{props.title}</li>;
};

Card.propTypes = {
  title: PropTypes.string
};

export default Card;
