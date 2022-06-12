import styles from './TextInput.module.scss';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  return <input className={styles.input} placeholder={props.placeholder} type="text" />;
};

TextInput.propTypes = {
  placeholder: PropTypes.string
};

export default TextInput;
