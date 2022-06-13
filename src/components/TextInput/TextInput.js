import styles from './TextInput.module.scss';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  return (
    <input
      className={styles.input}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type="text"
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default TextInput;
