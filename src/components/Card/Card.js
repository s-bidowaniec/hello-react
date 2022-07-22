import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addToFavorite, deleteCard } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.card}>
      {props.title}
      <span>
        <span
          className={clsx(styles.icon, 'fa fa-star', props.isFavorite && styles.isFavorite)}
          onClick={() => dispatch(addToFavorite({ id: props.id }))}
        />
        <span
          className={clsx(styles.icon, 'fa fa-trash')}
          onClick={() => dispatch(deleteCard({ id: props.id }))}
        />
      </span>
    </li>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  isFavorite: PropTypes.bool
};

export default Card;
