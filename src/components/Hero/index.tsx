import * as css from "./index.module.scss";

export function calculateAge(birthday: Date) {
  const ageDiff = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDiff);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function Hero() {
  const age = calculateAge(new Date("01/01/1998"));

  return (
    <article className={css.hero}>
      <div className={css.hero__wrapper}>
        <header>
          <h1 className={css.hero__title}>
            Bartosz
            <br /> Łaniewski
          </h1>

          <h2 className={css.hero__subtitle}>
            Developer & Designer<span>, {age} years old,</span> from Poland
          </h2>
        </header>
      </div>
    </article>
  );
}
