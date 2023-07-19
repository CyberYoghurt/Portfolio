import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Github from '../images/github.png';
import Web from '../images/web.png';

export default function Project({
  name = 'A unamed project',
  images,
  description = 'A missing description',
  technologies = [],
  githubLinks = [],
  liveLink = '',
}) {
  const imagesSwiped = images.map((image, i) => {
    return (
      <SwiperSlide>
        <img
          alt={`${i} of project ${name}`}
          className="project__image"
          src={image}
          key={i}
        />
      </SwiperSlide>
    );
  });
  const listedTechnologies = technologies.map((tech, i) => {
    return <li key={i}>{tech}</li>;
  });

  const listedGithub = githubLinks.map((link) => {
    return (
      <a className="project__github" href={link}>
        <span className="project__github-link">Github Repository</span>
        <img alt="Github icon" className="project__github-icon" src={Github} />
      </a>
    );
  });

  return (
    <div className="project__background">
      <h3 className="project__title">{name}</h3>
      <div className="project__separator">
        <div className="project__swiper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {imagesSwiped}
          </Swiper>
        </div>
        <div className="project__description">
          <a className="project__live" href={liveLink}>
            <span className="project__live-link">Live Page</span>
            <img alt="web icon" className="project__live-icon" src={Web} />
          </a>
          {listedGithub}
          <div className="project__text">{description}</div>

          <div className="project__list">
            <div>Technologies used:</div>
            <ul>{listedTechnologies}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
