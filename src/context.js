import React, { createContext, useContext, useState, useRef } from 'react';
import { projects } from './data';

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
