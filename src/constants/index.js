import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
} from "../assets";

import actify from '../assets/actify.png'
import medvault from '../assets/medvault.png'
import toDo from '../assets/toDo.png'

import cloudinary from '../assets/tech/cloudinary.png'
import express from '../assets/tech/express.png'
import nhost from '../assets/tech/nhost.png'
import postman from '../assets/tech/postman.png'
import vsCode from '../assets/tech/vsCode.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
    description: "Expert in React, Node.js, and Express.js for scalable web applications.",
  },
  {
    title: "Backend Developer",
    icon: backend,
    description: "Skilled in building robust APIs and managing databases with MongoDB.",
  },
  {
    title: "Database Management",
    icon: mobile,
    description: "Efficient in MongoDB databases for optimized data storage.",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "SQL",
  //   icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "GitHub",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Nhost",
    icon: nhost,
  },
  {
    name: "Cloudinary",
    icon: cloudinary,
  },
  {
    name: "VS Code",
    icon: vsCode,
  },
  {
    name: "Postman",
    icon: postman,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },

  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Actify - Connecting Volunteers with Service Opportunities",
    description:
      "Actify is a dynamic platform designed to connect volunteers with organizations offering service opportunities. It addresses the fragmentation, inefficiency, and lack of personalization in current volunteer matching systems, providing a centralized and streamlined solution.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "purple-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "red-text-gradient",
      },
    ],
    image: actify,
    source_code_link: "https://github.com/KartikGupta2004/Actify",
  },
  {
    name: "MedVault - Secure Storage for Medical Documents",
    description:
      "MedVault is a easy to use web-based application which serves the purpose of keeping medical documents safe, secure in one-place and easily accessible when needed. Provides multiple features as latest news, nearby pharmacy finder and medical chatbot.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "purple-text-gradient",
      },
      {
        name: "restapi",
        color: "red-text-gradient",
      },
    ],
    image: medvault,
    source_code_link: "https://github.com/KartikGupta2004/Inheritance-Proj-Patient-Database",
  },
  {
    name: "ToDo - Organise your Work & Life",
    description:
      "ToDo is an easy to use web application for people who want their goal to be accomplished.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "purple-text-gradient",
      },
    ],
    image: toDo,
    source_code_link: "https://github.com/KartikGupta2004/ToDo-List",
  },
];

export { services, technologies, experiences, testimonials, projects };
