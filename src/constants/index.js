import {
  web,
  javascript,
  zustand,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  threejs,
  universidadNacional,
  UsaIcon,
  ColIcon,
  typescript,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const education = [
  {
    title: "Ingenieria de sistemas e informatica",
    company_name: "Universidad Nacional de Colombia",
    icon: universidadNacional,
    iconBg: "#383E56",
    date: "2023 - today",
    points: [
      "Honing problem solving and critical thinking skills for coding problems.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developing habits of best practices, from planning and design to testing and deployment.",
      "Acquiring abilities for self learning and development",
    ],
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
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
    name: "Zustand",
    icon: zustand,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const languages = [
  {
    name: "Spanish",
    text: "Native speaker, fluent in any type of conversation.",
    icon: ColIcon,
  },
  {
    name: "English",
    text: "B2+ level fluency specialized in the area of tech and software development.",
    icon: UsaIcon,
  },
];

export { services, technologies, navLinks, education, languages };
