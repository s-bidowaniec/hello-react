import styles from './NavBar.module.scss';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.flexWrapper}>
        <Link to="/">
          <span className={styles.icon + ' fa fa-tasks'} />
        </Link>
        <ul className={styles.navList}>
          <li className={styles.navElement}>
            <NavLink
              className={({ isActive }) =>
                styles.link + ' ' + (isActive ? styles.linkActive : styles.linkInactive)
              }
              to="/">
              Home
            </NavLink>
          </li>
          <li className={styles.navElement}>
            <NavLink
              className={({ isActive }) =>
                styles.link + ' ' + (isActive ? styles.linkActive : styles.linkInactive)
              }
              to="/favorite">
              Favorite
            </NavLink>
          </li>
          <li className={styles.navElement}>
            <NavLink
              className={({ isActive }) =>
                styles.link + ' ' + (isActive ? styles.linkActive : styles.linkInactive)
              }
              to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
