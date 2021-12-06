import "./index.scss";

export function calculateAge(birthday: Date) {
  const ageDiff = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDiff);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function Hero() {
  const age = calculateAge(new Date("01/01/1998"));

  return (
    <article className="hero">
      <div className="hero__wrapper">
        <header>
          <h1 className="hero__title">
            Bartosz
            <br /> Łaniewski
          </h1>

          <h2 className="hero__subtitle">
            Developer & Designer<span>, {age} years old,</span> from Poland
          </h2>
        </header>
      </div>
    </article>
  );
}
