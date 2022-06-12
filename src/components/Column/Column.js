import style from './Column.module.scss';
import PropTypes from 'prop-types';

const Column = (props) => {
  return (
    <article className={style.column}>
      <h2 className={style.title}>{props.title}</h2>
    </article>
  );
};

Column.propTypes = {
  title: PropTypes.string
};

export default Column;
