//import styles from './NavBar.module.scss';

import styles from '../NavBar/NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.flexWrapper}>
        <a href={'/'}>
          <span className={styles.icon + ' fa fa-tasks'} />
        </a>
        <ul className={styles.navList}>
          <li className={styles.navElement}>
            <a href={'./'}>Home</a>
          </li>
          <li className={styles.navElement}>
            <a href={'./favorite'}>Favorite</a>
          </li>
          <li className={styles.navElement}>
            <a href={'./about'}>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
