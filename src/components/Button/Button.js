import style from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
  return <button className={style.button}>{props.children}</button>;
};

Button.propTypes = {
  children: PropTypes.string
};

export default Button;
