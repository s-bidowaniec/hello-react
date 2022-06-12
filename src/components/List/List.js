import style from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
  return (
    <div className={style.list}>
      <header className={style.header}>
        <h1 className={style.title}>
          Things to do<span>soon</span>
        </h1>
      </header>
      <p className={style.description}>Interesting things I want to check out</p>
      <section className={style.columns}>
        <Column title="Books" />
        <Column title="Movies" />
        <Column title="Games" />
      </section>
    </div>
  );
};

export default List;