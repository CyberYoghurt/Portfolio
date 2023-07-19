import Work from '../images/coder.png';
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__name ref0"> Robert's Portfolio Page</h1>
        <h2 className="hero__info">
          Engineer, fullstack developer, network engineer.
        </h2>
      </div>
      <img alt="Hero icon" className="hero__img" src={Work}></img>
    </div>
  );
}
