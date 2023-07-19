import Project from './Project';
import image1 from '../images/projects/Project1/1.png';
import image2 from '../images/projects/Project1/2.png';
import image3 from '../images/projects/Project1/3.png';
import image4 from '../images/projects/Project1/4.png';
import image5 from '../images/projects/Project1/5.png';
import image6 from '../images/projects/Project1/6.png';
import image7 from '../images/projects/Project1/7.png';
import image8 from '../images/projects/Project1/8.png';
import image9 from '../images/projects/Project1/9.png';
import image10 from '../images/projects/Project1/10.png';

import image11 from '../images/projects/Project2/1.png';
import image12 from '../images/projects/Project2/2.png';
import image13 from '../images/projects/Project2/3.png';
import image14 from '../images/projects/Project2/4.png';
import image15 from '../images/projects/Project2/5.png';

import image16 from '../images/projects/Project3/1.png';
import image17 from '../images/projects/Project3/2.png';

export default function Projects() {
  const project1Images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];
  const project1Tech = [
    'Vue',
    'Stripe',
    'WebSocket',
    'JWT',
    'Leaflet',
    'Django',
    'REST Framework',
    'Docker',
  ];
  const project1Description =
    'My biggest project so far, used multiple  \
   technologies to create an app with multiple features. \
   Payments, live chat using web sockets, API REST, JWT authentication \
   Backend is deployed used Docker for ease.\
   It consists of two repositories, one for  the frontend and \
   another for the backend.';

  const project2Images = [image11, image12, image13, image14, image15];
  const project2Tech = ['Vanilla JS', 'SASS', 'Cloudinary'];
  const project2Description =
    'This project took me the longest. I wanted \
   to try a web app without a framework and a backend. It was commissioned by a friend. ';

  const project3Images = [image16, image17];
  const project3Tech = ['React', 'Vite'];
  const project3Description =
    'The use of hooks is essential to make efficient API requests. \
  In this little project I use useRef, useCallback, and useMemo to optimize the data delivered.';

  return (
    <section className="projects">
      <h2 className="section__title ref4">Projects</h2>
      <Project
        name="Forestree"
        images={project1Images}
        technologies={project1Tech}
        description={project1Description}
        githubLinks={[
          'https://github.com/CyberYoghurt/ForestreeFrontEnd',
          'https://github.com/CyberYoghurt/forestreeBackEnd',
        ]}
        liveLink="https://forestree-frontend.onrender.com/ "
      ></Project>
      <Project
        name="PhispyApp"
        images={project2Images}
        technologies={project2Tech}
        description={project2Description}
        githubLinks={['https://github.com/CyberYoghurt/PhyspyApp']}
        liveLink="https://cyberyoghurt.github.io/PhyspyApp/"
      ></Project>
      <Project
        name="SmartFetch"
        images={project3Images}
        technologies={project3Tech}
        description={project3Description}
        githubLinks={['https://github.com/CyberYoghurt/SmartFetch']}
        liveLink="https://master--spontaneous-rabanadas-0b43aa.netlify.app/"
      ></Project>
    </section>
  );
}
