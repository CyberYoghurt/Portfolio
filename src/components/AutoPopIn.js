import { useEffect, useRef, useState } from 'react';

import './AutoPopIn.css';
import 'animate.css';

export default function AutoPopIn({
  children,
  text = 'Head',
  showImage,
  hideImage,
}) {
  const [isShown, setIsShown] = useState(false);
  const [isEntrance, setIsEntrance] = useState(false);

  function toggleShown() {
    if (isShown === true) {
      setIsEntrance(false);
      setTimeout(() => {
        setIsShown(false);
      }, 1000);
    } else if (isShown === false) {
      setIsShown(true);
      setIsEntrance(true);
    }
  }

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          toggleShown();
          observer.unobserve(ref.current);
        }
      },
      { rootMargin: '-30px' }
    );
    observer.observe(ref.current);
  }, []);

  const showImg = showImage ? (
    <img alt="Down arrow" src={showImage} className="image" />
  ) : (
    '⬇️'
  );
  const hideImg = hideImage ? (
    <img alt="Up arrow" src={hideImage} className="image" />
  ) : (
    '⬆️'
  );

  return (
    <div className="head">
      <div ref={ref} className="heading">
        <div className="category">
          <h3>{text}</h3>
          <button className="button" onClick={toggleShown}>
            {isShown && hideImg}
            {!isShown && showImg}
          </button>
        </div>
      </div>
      {isShown && (
        <div
          className={`
          animate__animated
          ${isEntrance && 'animate__fadeInDown'} 
          ${!isEntrance && 'animate__fadeOutUp'}
          `}
        >
          {children}
        </div>
      )}
    </div>
  );
}
