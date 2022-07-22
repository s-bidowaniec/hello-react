import { useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import { getFavoriteCards } from '../../redux/cardsRedux';
import styles from '../Favorite/Favorite.module.scss';
import Card from '../Card/Card';
import clsx from 'clsx';

const Favorite = () => {
  const cards = useSelector(getFavoriteCards);
  const title = cards.length ? 'Best of the best' : 'Nothing selected..';
  const icon = cards.length ? 'fa-star-o' : 'fa-frown-o';
  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.favoriteContainer}>
        <article className={styles.column}>
          <h2 className={styles.title}>
            <span className={clsx(styles.icon, 'fa', icon)} />
            {title}
          </h2>
          <ul className={styles.cards}>
            {cards.map((card) => (
              <Card id={card.id} key={card.id} title={card.title} isFavorite={card.isFavorite} />
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
};

export default Favorite;
