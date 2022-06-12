import styles from './Column.module.scss';
import PropTypes from 'prop-types';

const Column = (props) => {
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
    </article>
  );
};

Column.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
};

export default Column;
