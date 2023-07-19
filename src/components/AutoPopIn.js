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

  async function toggleShown(el) {
    return new Promise((resolve) => {
      if (isShown === true) {
        setIsEntrance(false);
        setTimeout(() => {
          setIsShown(false);
          resolve(true);
        }, 1000);
      } else if (isShown === false) {
        let time = null;
        time = setTimeout(() => {
          setIsShown(true);
          setIsEntrance(true);
          console.log('changing');
          resolve(true);
        }, 500);
        setTimeout(() => {
          console.log('In view port:', elementIsVisibleInViewport(el));
          if (elementIsVisibleInViewport(el) === false) {
            clearTimeout(time);
          }
        }, 300);
      }
    });
  }

  const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? (top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)
      : top >= 0 && left >= 0;
  };

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Is intersecting');
          const wasToggled = await toggleShown(ref.current);
          console.log(wasToggled);
          if (wasToggled) {
            observer.unobserve(ref.current);
          }
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
