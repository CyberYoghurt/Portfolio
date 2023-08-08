import { useState, useEffect } from 'react';
import RightArrow from '../images/right-arrow.png';
import SmallArrow from '../images/little-arrow.png';

export default function Navigator() {
  const [isShown, setShown] = useState(true);

  function handleClick() {
    setShown(!isShown);
  }

  function scrollTo(n) {
    const ref = `.ref${n}`;
    const element = document.querySelector(ref);
    const coords = element.getBoundingClientRect();
    window.scrollTo({
      left: coords.left + window.pageXOffset,
      top: coords.top + window.pageYOffset,
      behavior: 'smooth',
    });
  }

  return (
    <div className={`navigator ${isShown ? '' : 'navigator__shown'}`}>
      <ul className="navigator__links">
        <li>
          <img src={SmallArrow} className="navigator__little-arrow" />
          <a className="navigator__link" onClick={() => scrollTo(0)}>
            Start
          </a>
        </li>
        <li>
          <img src={SmallArrow} className="navigator__little-arrow" />
          <a className="navigator__link" onClick={() => scrollTo(1)}>
            Info
          </a>
        </li>
        <li>
          <img src={SmallArrow} className="navigator__little-arrow" />
          <a className="navigator__link" onClick={() => scrollTo(2)}>
            Contact
          </a>
        </li>
        <li>
          <img src={SmallArrow} className="navigator__little-arrow" />
          <a className="navigator__link" onClick={() => scrollTo(3)}>
            Skills
          </a>
        </li>
        <li>
          <img src={SmallArrow} className="navigator__little-arrow" />
          <a className="navigator__link" onClick={() => scrollTo(4)}>
            Projects
          </a>
        </li>
      </ul>
      <button className="navigator__button" onClick={handleClick}>
        <img
          src={RightArrow}
          className={`navigator__arrow ${
            isShown ? 'navigator__arrow-rotated' : ''
          }`}
        />
      </button>
    </div>
  );
}
