import style from './List.module.scss';

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
        <article>
          <h2>Books</h2>
        </article>
        <article>
          <h2>Movies</h2>
        </article>
        <article>
          <h2>Games</h2>
        </article>
      </section>
    </div>
  );
};

export default List;
