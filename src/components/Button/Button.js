import style from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
  return <button className={style.button}>{props.text}</button>;
};

Button.propTypes = {
  text: PropTypes.string
};

export default Button;
