import Work from '../images/coder.png';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__flex">
        <div className="hero__content">
          <h1 className="hero__name ref0"> Robert's Portfolio Page</h1>
          <h2 className="hero__info">
            Engineer, fullstack developer, network engineer.
          </h2>
        </div>
        <img alt="Hero icon" className="hero__img" src={Work}></img>
      </div>
      <div className="hero__ellipse">
        <div className="hero__background"></div>
        <div className="hero__background hero__background1"></div>
        <div className="hero__background hero__background2"></div>
        <div className="hero__typing">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'I will make your React Frontend application.',
              1000,
              'I will deploy your Application to AWS.',
              1000,
              'I will make your Node GraphQL server.',
              1000,
              'I will deploy your application with Docker.',
              1000,
              'I will create your Django Application with websockets.',
              1000,
              'I will develop your Java API REST.',
              1000,
              'I will manage your MySQL DB.',
              1000,
              'I will make your Vue.js Frontend Application.',
              1000,
              'I will create your Java Spring Server.',
              1000,
              'I will design and map your UX/UI.',
              1000,
              'I will make your SSR Next.js application.',
              1000,
              'I will manage your Kubernetes clusters.',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
}
