import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../redux/cardsRedux';
const Card = (props) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.card}>
      {props.title}
      <span
        className={clsx('icon fa fa-star', props.isFavorite && styles.isFavorite)}
        onClick={() => dispatch(addToFavorite({ id: props.id }))}></span>
    </li>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  isFavorite: PropTypes.bool
};

export default Card;
