import {
  web,
  javascript,
  zustand,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  threejs,
  universidadNacional,
  UsaIcon,
  ColIcon,
  typescript,
  nextJs,
  nodejs,
  aws,
  turingBox,
  postgreSQL,
  python,
  Cpp_Logo,
} from "../assets";
import { awsCloudFoundations, awsETC, awsIntroToAI } from "../assets/badges";
import {
  ecommerce,
  mixmaster,
  pokecenter,
  tailwindPortfolio,
  union,
  wuwandle,
} from "../assets/projects";

const tagging = {
  nextJs: {
    name: "Next",
    color:
      "bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent",
  },
  tailwind: {
    name: "Tailwindcss",
    color:
      "bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent",
  },
  typescript: {
    name: "Typescript",
    color:
      "bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent",
  },
  dragAndDrop: {
    name: "Drag & Drop",
    color:
      "bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent",
  },
  postgreSQL: {
    name: "PostgreSQL",
    color:
      "bg-gradient-to-r from-indigo-300 to-indigo-500 bg-clip-text text-transparent",
  },
  reactForm: {
    name: "React form",
    color:
      "bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent",
  },
  betterAuth: {
    name: "Better Auth",
    color:
      "bg-gradient-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent",
  },
  AI: {
    name: "AI",
    color:
      "bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent",
  },
  zustand: {
    name: "Zustand",
    color:
      "bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent",
  },
  reactQuery: {
    name: "React query",
    color:
      "bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent",
  },
  reactjs: {
    name: "React",
    color:
      "bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent",
  },
  reactRouter: {
    name: "React router dom",
    color:
      "bg-gradient-to-r from-rose-300 to-rose-500 bg-clip-text text-transparent",
  },
};

const projects = [
  {
    title: "Pokecenter",
    img: pokecenter,
    url: "https://pokecenter.vercel.app",
    githubUrl: "https://github.com/Flying-Spaghetti-Monster69/pokecenter/",
    text: "project for the web development course at my university. It uses role based authentication for managing pokemon appointments, react form and drag and drop features.",
    tags: [
      tagging.nextJs,
      tagging.tailwind,
      tagging.typescript,
      tagging.dragAndDrop,
      tagging.reactForm,
      tagging.betterAuth,
      tagging.postgreSQL,
    ],
    className: "md:col-span-2",
    order: 1,
  },
  {
    title: "Uni-on",
    img: union,
    url: "https://uni-on.vercel.app",
    githubUrl: "https://github.com/Flying-Spaghetti-Monster69/uni-on",
    text: "AI project for the omegalab hackathon 2025 made in 1 day. It tracks students well-being and academic performance, providing personalized recommendations with AI to improve their academic experience.",
    tags: [
      tagging.nextJs,
      tagging.tailwind,
      tagging.typescript,
      tagging.AI,
      tagging.postgreSQL,
    ],
    className: "md:col-span-1",
    order: 0,
  },
  {
    title: "E-commerce app",
    img: ecommerce,
    url: "https://e-commerce-cozy-store.vercel.app/",
    githubUrl:
      "https://github.com/Flying-Spaghetti-Monster69/E-commerce-cozy-store",
    text: "E-commerce app with client side routing, filtering, caching, login and data fetching with an API. ",
    tags: [
      tagging.reactjs,
      tagging.tailwind,
      tagging.zustand,
      tagging.typescript,
      tagging.reactQuery,
      tagging.reactRouter,
    ],
    className: "md:col-span-2",
    order: 2,
  },
  {
    title: "Wuwandle",
    img: wuwandle,
    url: "https://wuwandle.vercel.app/",
    githubUrl: "https://github.com/Flying-Spaghetti-Monster69/wuwandle",
    text: "Wordle inspired app with characters of the open world rpg Wuthering Waves. It uses zustand and react",
    tags: [tagging.reactjs, tagging.tailwind, tagging.zustand],
    className: "md:col-span-1",
    order: 3,
  },
  {
    title: "Mix master",
    img: mixmaster,
    url: "https://felipesmixmaster.netlify.app/",
    githubUrl:
      "https://github.com/Flying-Spaghetti-Monster69/Mix_Master_React_Project",
    text: "An interactive site where you can lookup drinks and how to make them. It uses the Cocktails DB API.",
    tags: [tagging.reactjs, tagging.tailwind],
    className: "md:col-span-2",
    order: 5,
  },
  {
    title: "Portfolio with tailwindcss",
    img: tailwindPortfolio,
    url: "https://felipe-garzon-melguizo-portfolio.netlify.app/",
    githubUrl:
      "https://github.com/Flying-Spaghetti-Monster69/tailwind-portafolio",
    text: "Portfolio project for showcasing my latest projects. It uses tailwind and Contentful CMS.",
    tags: [tagging.reactjs, tagging.tailwind],
    className: "md:col-span-1",
    order: 4,
  },
];

const navLinks = [
  {
    id: "works",
    title: "Works",
  },
  {
    id: "Tech",
    title: "Tech",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const expierence = [
  {
    title: "Web developer",
    company_name: "TuringBox (non profit)",
    icon: turingBox,
    iconBg: "#FFFFFF",
    date: "2025 - today",
    points: [
      "Built complete web applications from the ground up, handling both front-end and back-end development in a fast-paced, deadline-driven environment.",
      "Gained practical experience through end-to-end project involvement, from planning and coding to deployment—delivering functional, production-ready solutions.",
      "Continuously learned new frameworks and tools while improving workflows, adapting quickly to meet project demands and technological changes.",
      "Thrived in a collaborative setting that emphasized peer learning and constant improvement, helping me grow as a developer with each project.",
    ],
  },
  {
    title: "Ingenieria de sistemas e informatica",
    company_name: "Universidad Nacional de Colombia",
    icon: universidadNacional,
    iconBg: "#222222",
    date: "2023 - today",
    points: [
      "Honed problem solving and critical thinking skills for coding problems.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developed habits of best practices, from planning and design to testing and deployment.",
      "Acquired abilities for self learning and development",
    ],
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AWS Cloud Architect",
    icon: aws,
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
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgreSQL,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: Cpp_Logo,
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

const badges = [
  {
    name: "AWS Cloud Foundations",
    icon: awsCloudFoundations,
  },
  {
    name: "AWS ETC member",
    icon: awsETC,
  },
  {
    name: "AWS Intro to AI",
    icon: awsIntroToAI,
  },
];

export {
  services,
  technologies,
  navLinks,
  expierence,
  languages,
  projects,
  badges,
};
