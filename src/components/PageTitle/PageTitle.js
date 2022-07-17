import styles from './PageTitle.module.scss';
import PropTypes from 'prop-types';

const PageTitle = (props) => {
  return <h1 className={styles.title}>{props.children}</h1>;
};

PageTitle.propTypes = {
  children: PropTypes.string
};

export default PageTitle;
