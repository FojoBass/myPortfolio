import React, { createContext, useContext, useState, useRef } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import {
  SiCss3,
  SiJavascript,
  SiRedux,
  SiSass,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
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
      name: '3D Portfolio',
      stack: [
        { title: 'Next.Js', icon: <TbBrandNextjs /> },
        { title: 'SCSS', icon: <SiSass /> },
      ],
      info: 'This is a dummy 3D portfolio website in a book form. Naviagtion from one page to the other is also in the form of a book. \nThis projects utilizes the concept of 3D CSS. It is also responsive.',
      imgUrls: ['/images/book1.png', '/images/book2.png', '/images/book3.png'],
      id: 'a1g',
      url: 'https://johnbook.netlify.app',
      data: 'February, 2024',
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
