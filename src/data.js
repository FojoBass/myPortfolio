import { AiFillHtml5 } from 'react-icons/ai';
import {
  SiCss3,
  SiJavascript,
  SiRedux,
  SiSass,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaPhp, FaReact } from 'react-icons/fa';
import { IoLogoCss3, IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';

export const projects = [
  {
    name: 'Social Publishing Platform',
    stack: [
      { title: 'React', icon: <FaReact /> },
      { title: 'Redux', icon: <SiRedux /> },
      { title: 'Typescript', icon: <SiTypescript /> },
      { title: 'SCSS', icon: <SiSass /> },
      { title: 'Firebase', icon: <IoLogoFirebase /> },
    ],
    info: 'Devie is a social publising platform project, where users can register on, and publish posts on various topics. \nIt has a rich text editor, which was built completely by me, making basic text formatting possible. It also has an infinite nested comment system. \nThis project is responsive.',
    imgUrls: [
      '/images/devie_home.png',
      '/images/devie_dash.png',
      '/images/devie_login.png',
      '/images/devie_editor.png',
      '/images/devie_coms.png',
      '/images/devie_about.png',
      '/images/devie_post.png',
    ],
    id: 'a',
    url: 'https://devie.netlify.app/',
    date: 'December, 2023',
  },
  {
    name: '3D Portfolio',
    stack: [
      { title: 'Next.Js', icon: <TbBrandNextjs /> },
      { title: 'SCSS', icon: <SiSass /> },
    ],
    info: 'This is a dummy 3D portfolio website in a book form. Naviagtion from one page to the other is also in the form of a book. \nThis projects utilizes the concept of 3D CSS. It is also responsive.',
    imgUrls: ['/images/book1.png', '/images/book2.png', '/images/book3.png'],
    id: 'a1g',
    url: 'https://johnbook.netlify.app',
    date: 'February, 2024',
  },
  {
    name: 'Tech Agency (Grind)',
    stack: [
      { title: 'Next.Js', icon: <TbBrandNextjs /> },
      { title: 'SCSS', icon: <SiSass /> },
    ],
    info: 'This project is a website for a dummy tech agency (Grind), which have some features like page animations, lazy loading, intersection observers, pointer movements animations, infinite scrolling,  etc. \nThis project is responsive on all devices.',
    imgUrls: [
      '/images/grind1.png',
      '/images/grind2.png',
      '/images/grind4.png',
      '/images/grind5.png',
      '/images/grind6.png',
      '/images/grind7.png',
    ],
    id: 'b45d',
    url: 'https://grindagency.netlify.app',
    date: 'March, 2024',
  },
  {
    name: 'MTN NG Home Page Clone',
    stack: [
      { title: 'React', icon: <FaReact /> },
      { title: 'Typescript', icon: <SiTypescript /> },
      { title: 'SCSS', icon: <SiSass /> },
    ],
    info: 'I cloned the home page of MTN NG (as at December 2023), with some modifications to the scroll bar, navbar dropdown, and addition of dark mode and intersection observer. \nIt is a also responsive.',
    imgUrls: ['/images/mtn_proj1.jpg', '/images/mtn_proj2.png'],
    id: 'ab',
    url: 'https://mtnnghomemod.netlify.app/',
    date: 'January, 2024',
  },
  {
    name: 'Adrift Journals',
    stack: [
      { title: 'React', icon: <FaReact /> },
      { title: 'Redux', icon: <SiRedux /> },
      { title: 'Typescript', icon: <SiTypescript /> },
      { title: 'SCSS', icon: <SiSass /> },
      { title: 'Firebase', icon: <IoLogoFirebase /> },
    ],
    info: 'Adrit Journals is an educational journal project, where users can upload journals for review and publishing. This project is responsive.',
    imgUrls: ['/images/adrift_home.png', '/images/adrift_dash.png'],
    id: 'b',
    url: 'https://adriftjourn.netlify.app/',
    date: 'September, 2023',
  },
  {
    name: 'Comfy House',
    stack: [
      { title: 'HTML', icon: <AiFillHtml5 /> },
      { title: 'CSS', icon: <SiCss3 /> },
      { title: 'Js', icon: <SiJavascript /> },
    ],
    info: 'Comfy House is an e-commerce project, which was built using HTML, CSS, and JavaScript (all vanilla). It is fully responsive.',
    imgUrls: ['/images/comfy 1.png', '/images/comfy 2.png'],
    id: '1',
    url: 'https://fojo-comfy-house.netlify.app/',
    date: 'December, 2020',
  },
];

export const exps = [
  {
    date: 'mar 2023 - dec 2023',
    role: 'React Developer (full-time)',
    org: 'Dowell Research',
    stack: [
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'React', Icon: FaReact },
      { name: 'Redux', Icon: SiRedux },
      { name: 'CSS', Icon: SiCss3 },
    ],
    duties: [
      `Optimized application performance by 25% using lazy loading,
preventing unnecessary component re-renders, implementing
pagination, and optimizing API calls. This reduced the app startup time
from an average of 8 seconds to 3 seconds.`,
      `Enhanced accessibility and expanded user base by ensuring mobilefriendliness and improved responsiveness across various devices, leading
to increase in user adoption`,
      `Caused a 30% increase in user satisfaction and productivity with the
addition of a folder organization feature, enabling users to efficiently
organize documents and templates within the application.`,
      `Improved user experience for beginners by adding descriptive tooltips to
buttons, which resulted in a 15% increase in user retention.
`,
    ],
  },
  {
    date: 'Jan 2024 - Mar 2024',
    role: 'Frontend Developer (contract)',
    org: 'Payfast Place',
    stack: [
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'React', Icon: FaReact },
      { name: 'Redux', Icon: SiRedux },
      { name: 'CSS', Icon: SiCss3 },
      { name: 'SCSS', Icon: SiSass },
    ],
    duties: [
      `Implemented best practices like lazy loading (by using
conditioner rendering in React) and optimized API calls,
resulting in a fast average startup time of 2 seconds.`,
      `Implemented Figma designs and sought necessary approvals for
modifications to ensure alignment with project requirements`,
      `Collaborated closely with backend developers to maintain
consistency in API responses and address any debugging issues
promptly.`,
    ],
  },
  {
    date: 'Jan 2024',
    role: 'Frontend developer (contract)',
    org: 'Embodiment Healthcare',
    stack: [
      { name: 'React', Icon: FaReact },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'SCSS', Icon: SiSass },
    ],
    duties: [
      `Successfully implemented the company's design system to
ensure website consistency with the provided template while
maintaining a clear brand identity.`,
      `Optimized the website for a fully responsive experience across
all devices, resulting in improved accessibility and user
experience.`,
    ],
  },
];

export const stacks = [
  { Icon: AiFillHtml5, title: 'HTML5', id: 'html' },
  { Icon: IoLogoCss3, title: 'CSS3', id: 'css' },
  { Icon: IoLogoJavascript, title: 'JavaScript', id: 'js' },
  { Icon: SiTypescript, title: 'TypeScript', id: 'ts' },
  { Icon: FaReact, title: 'React', id: 'react' },
  { Icon: SiRedux, title: 'Redux', id: 'redux' },
  { Icon: TbBrandNextjs, title: 'Next.Js', id: 'next' },
  { Icon: SiSass, title: 'SCSS', id: 'sass' },
  { Icon: IoLogoFirebase, title: 'Firebase', id: 'firebase' },
  { Icon: FaPhp, title: 'PHP', id: 'php' },
];
