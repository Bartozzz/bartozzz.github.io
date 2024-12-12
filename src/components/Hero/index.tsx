import * as css from "./index.module.scss";

export function Hero() {
  return (
    <article className={css.hero}>
      <div className={css.hero__wrapper}>
        <header>
          <h1 className={css.hero__title}>
            Bartosz
            <br /> Łaniewski
          </h1>

          <h2 className={css.hero__subtitle}>
            Software Engineer passionate about <em>beautiful</em> code
          </h2>
        </header>
      </div>
    </article>
  );
}
