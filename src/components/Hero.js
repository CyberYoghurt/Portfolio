import Work from '../images/coder.png';
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__name"> Robert's Development Page</h1>
        <h2 className="hero__info">
          Engineer, web developer, network engineer.
        </h2>
      </div>
      <img alt="Hero icon" className="hero__img" src={Work}></img>
    </div>
  );
}
