import React, { createContext, useContext, useState, useRef } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import {
  SiCss3,
  SiJavascript,
  SiRedux,
  SiSass,
  SiTypescript,
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(
    localStorage.getItem('fojo-theme')
      ? JSON.parse(localStorage.getItem('fojo-theme'))
      : true
  );

  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const sectionRef = useRef([]);
  const [sectId, setSectId] = useState('home');
  const [error, setError] = useState('false');

  const projects = [
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
    {
      name: 'Cocktails',
      stack: [{ title: 'ReactJs', icon: <FaReact /> }],
      info: `In this project, informations of cocktails were gotten from an api, and displayed.\nUsers can search for cocktails based on their names. The site also has night mode.`,
      imgUrls: ['/images/cocktales 1.png', '/images/cocktales 2.png'],
      id: '2',
      url: 'https://cocktales.netlify.app/',
      date: 'January, 2022',
    },
    {
      name: 'Portfolio',
      stack: [{ title: 'ReactJs', icon: <FaReact /> }],
      info: 'This project is a dummy portfolio site. It has full responsiveness, and was built with ReactJs',
      imgUrls: ['/images/jd 1.png', '/images/jd 2.png'],
      id: '3',
      url: 'https://dummy-jd.netlify.app/',
      date: 'February, 2023',
    },
    {
      name: 'Game of Luck',
      stack: [
        { title: 'HTML', icon: <AiFillHtml5 /> },
        { title: 'CSS', icon: <SiCss3 /> },
        { title: 'Js', icon: <SiJavascript /> },
      ],
      info: `This project is a simple game, where the user selects a shape, and has to guess which concealed box has that shape.\nIt has 2 difficulty options, music and sfx, and records of games (stored using localStorage)`,
      imgUrls: ['/images/gol 1.png', '/images/gol 2.png'],
      id: '4',
      url: 'https://game-of-luck.netlify.app/',
      date: 'Novermber 2022',
    },
  ];

  const [projectId, setProjectId] = useState(1);
  const singleProjRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const props = {
    lightTheme,
    setLightTheme,
    projects,
    projectId,
    setProjectId,
    singleProjRef,
    modalOpen,
    setModalOpen,
    navHeight,
    setNavHeight,
    isTouchDevice,
    setIsTouchDevice,
    navRef,
    sectionRef,
    sectId,
    setSectId,
    error,
    setError,
  };
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
