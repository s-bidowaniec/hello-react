import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
  return <button className={styles.button}>{props.children}</button>;
};

Button.propTypes = {
  children: PropTypes.node
};

export default Button;
