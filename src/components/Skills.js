import React from 'react';
import Skill from './Skill';
//Programming Languages
import JavascriptLogo from '../images/logos/javascript.png';
import TypeScriptLogo from '../images/logos/typescript.png';
import PythonLogo from '../images/logos/python.png';
import JavaLogo from '../images/logos/java.png';
import CplusplusLogo from '../images/logos/c++.png';
import RubyLogo from '../images/logos/ruby.png';
//FrontEnd
import ReactLogo from '../images/logos/react.png';
import VueLogo from '../images/logos/vue.png';
import SolidLogo from '../images/logos/solid.png';
import NuxtLogo from '../images/logos/nuxt.png';
import NextLogo from '../images/logos/next.png';
//Frameworks and backend
import ExpressLogo from '../images/logos/express.png';
import DjangoLogo from '../images/logos/django.png';
import RailsLogo from '../images/logos/rails.png';
import DrogonLogo from '../images/logos/drogon.png';
import GraphQlLogo from '../images/logos/graphql.png';
import Spring from '../images/logos/spring.png';
//Dbs
import MySQLLogo from '../images/logos/mysql.png';
import PostgreSQLogo from '../images/logos/postgresql.png';
import MongoLogo from '../images/logos/mongo.png';
//Design
import SassLogo from '../images/logos/sass.png';
import FigmaLogo from '../images/logos/figma.png';
import TailWind from '../images/logos/tailwind.png';
//Other
import CiscoLogo from '../images/logos/cisco.png';
import LinuxLogo from '../images/logos/lpi.png';
import AWSLogo from '../images/logos/aws.png';
import DockerLogo from '../images/logos/docker.png';
import TravisLogo from '../images/logos/travis.png';
import KubernetesLogo from '../images/logos/kubernetes.png';

import AutoPopIn from './AutoPopIn.js';
import UpArrow from '../images/up-arrow.png';
import DownArrow from '../images/down-arrow.png';

export default function Skills() {
  const languages = [
    {
      skill: 'Javascript',
      description:
        'Most used programming language nowadays, if you are reading this, you are using javascript.',
      icon: JavascriptLogo,
    },
    {
      skill: 'Typescript',
      description: 'Do fix bugs at development stage, not at production.',
      icon: TypeScriptLogo,
    },
    {
      skill: 'C++',
      description:
        'My first programming language, learned the basics as part of my bachelor education, I went beyond to get a grasp of Drogon web server, the fastest web server available.',
      icon: CplusplusLogo,
    },
    {
      skill: 'Python',
      description:
        "Atop of a wide field of applications, it is the easiest programming language I've ever worked with.",
      icon: PythonLogo,
    },
    {
      skill: 'Java',
      description:
        'Platform independent programming language, I also learned it as part of my bachelor.',
      icon: JavaLogo,
    },
    {
      skill: 'Ruby',
      description:
        'Programming language with a focus on simplicity and productivity.',
      icon: RubyLogo,
    },
  ];
  const frontEnd = [
    {
      skill: 'React',
      description:
        'Most popular frontend framework, alongside Redux and Router, these are old friends.',
      icon: ReactLogo,
    },
    {
      skill: 'Vue.js',
      description:
        'Alternative to React, standalone framework, whereas React uses external libraries.',
      icon: VueLogo,
    },
    {
      skill: 'SolidJS',
      description:
        'The frontend framework with the best performance. Similar to react in many ways but with a more efficient update model.',
      icon: SolidLogo,
    },
    {
      skill: 'Next.js',
      description:
        'A powerful tools that makes React have fullstack capabilities and more. A tool of choice when a costumer needs a complete application.',
      icon: NextLogo,
    },
    {
      skill: 'Nuxt.js',
      description:
        'An enhanced version of Vue.js, it is a good alternative to Next.js. It also comes with features that help SEO.',
      icon: NuxtLogo,
    },
  ];
  const backEnd = [
    {
      skill: 'Express',
      description:
        'The most popular backend web application, the standard for nodejs.',
      icon: ExpressLogo,
    },
    {
      skill: 'Django',
      description: 'Most poputar python-based web framework.',
      icon: DjangoLogo,
    },
    {
      skill: 'Rails',
      description:
        'Webdev framework known for its meta programming technique. Provided with Active Storage, Action Cable, Aciton Mailer and more, makes backend development so fast.',
      icon: RailsLogo,
    },
    {
      skill: 'Drogon',
      description:
        'In my quest for performance, I ended up with this powerful but yet flexible framework.',
      icon: DrogonLogo,
    },
    {
      skill: 'GraphQL',
      description:
        'Data query and manipulation language for APIs, provides clients exactly what they need.',
      icon: GraphQlLogo,
    },
    {
      skill: 'Spring',
      description:
        'The oldest framework in my skill set, good performance and good portability',
      icon: Spring,
    },
  ];
  const dbs = [
    {
      skill: 'MySQL',
      description: 'Pure relational database, better suited for websites.',
      icon: MySQLLogo,
    },
    {
      skill: 'PostgreSQL',
      description:
        'Object relational database, ideal for analytical processes, my personal favorite option to use in AWS RDS',
      icon: PostgreSQLogo,
    },
    {
      skill: 'MongoDB',
      description:
        'NoSQL database, popular for its flexible schema approach. I use this frequently alongside the Mongoose ODM for Node',
      icon: MongoLogo,
    },
  ];
  const design = [
    {
      skill: 'Sass',
      description:
        'Preprocessor that provides the CSS styling of pages a lot more functionality. Easies the styling work for template pages or react Pages',
      icon: SassLogo,
    },
    {
      skill: 'Tailwind',
      description:
        'This tool allows you to rapidly building modern websites without ever leaving the HTML',
      icon: TailWind,
    },
    {
      skill: 'Figma',
      description:
        "Software tool for User Interface Design and and User Experience Design. I've created desings, site maps, wireframes and more.",
      icon: FigmaLogo,
    },
  ];
  const it = [
    {
      skill: 'Linux',
      description:
        'I wanted to feel acquainted with all the working tools I use, so I accomplished the LPIC-1 Linux cert that acknowledges skills like maintenance tasks and networking troubleshooting of devices running Linux, and more.',
      icon: LinuxLogo,
    },
    {
      skill: 'Cisco',
      description:
        "I achieved a CCNA cert that validates abilities in: IP services, security fundamentals and automation required in today's most advanced networks.",
      icon: CiscoLogo,
    },
    {
      skill: 'AWS',
      description:
        'EC2, RDS, DynamoDB. I studied for the AWS Cloud Practicioner and Certified Developer, the motivation was AWS being the biggest cloud provider in the world.',
      icon: AWSLogo,
    },
    {
      skill: 'Docker',
      description:
        'Docker is a open source container platform that allows you to deploy your application regardless of the colud provider.',
      icon: DockerLogo,
    },
    {
      skill: 'Travis',
      description:
        'An important opensource CI tool that automatically connects your development workspace directly to the deployment.',
      icon: TravisLogo,
    },
    {
      skill: 'Kubernetes',
      description:
        'An excellent tool to manage clusters of web services and routers, makes scalability great, even improves security by isolating services.',
      icon: KubernetesLogo,
    },
  ];

  const languagesJSX = languages.map(({ skill, description, icon }) => {
    return (
      <Skill skill={skill} description={description} icon={icon} key={skill} />
    );
  });
  const frontEndJSX = frontEnd.map(({ skill, description, icon }) => {
    return (
      <Skill skill={skill} description={description} icon={icon} key={skill} />
    );
  });
  const backEndJSX = backEnd.map(({ skill, description, icon }) => {
    return (
      <Skill skill={skill} description={description} icon={icon} key={skill} />
    );
  });
  const dbsJSX = dbs.map(({ skill, description, icon }) => {
    return (
      <Skill skill={skill} description={description} icon={icon} key={skill} />
    );
  });
  const designJSX = design.map(({ skill, description, icon }) => {
    return (
      <Skill skill={skill} description={description} icon={icon} key={skill} />
    );
  });
  const itJSX = it.map(({ skill, description, icon }) => {
    return (
      <Skill skill={skill} description={description} icon={icon} key={skill} />
    );
  });

  return (
    <section className="skills">
      <h2 className="section__title ref3">Skills</h2>
      <AutoPopIn
        showImage={DownArrow}
        hideImage={UpArrow}
        text="Programming Languages"
      >
        <div className="skills__flex">{languagesJSX}</div>
      </AutoPopIn>
      <AutoPopIn showImage={DownArrow} hideImage={UpArrow} text="FrontEnd">
        <div className="skills__flex">{frontEndJSX}</div>
      </AutoPopIn>
      <AutoPopIn showImage={DownArrow} hideImage={UpArrow} text="BackEnd">
        <div className="skills__flex">{backEndJSX}</div>
      </AutoPopIn>
      <AutoPopIn showImage={DownArrow} hideImage={UpArrow} text="Databases">
        <div className="skills__flex">{dbsJSX}</div>
      </AutoPopIn>
      <AutoPopIn showImage={DownArrow} hideImage={UpArrow} text="Design">
        <div className="skills__flex">{designJSX}</div>
      </AutoPopIn>
      <AutoPopIn showImage={DownArrow} hideImage={UpArrow} text="IT">
        <div className="skills__flex">{itJSX}</div>
      </AutoPopIn>
    </section>
  );
}
