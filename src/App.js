// TODO ADD NEW SECTION FOR EXPERIENCES, AND ENSURE TO HOOK IT UP WHERE IT IS SUPPOSED TO BE HOOKED
import React, { useEffect, useRef } from 'react';
import { Error } from './Pages';
import { Footer, Navbar, Theme } from './Components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Index.jsx';
import { useGlobalContext } from './context';

const App = () => {
  const {
    lightTheme,
    setIsTouchDevice,
    navRef,
    sectionRef,
    setSectId,
    navHeight,
    error,
  } = useGlobalContext();
  const homeSectRef = useRef();
  const aboutSectRef = useRef();
  // const servSectRef = useRef();
  const portSectRef = useRef();
  const conSectRef = useRef();

  useEffect(() => {
    localStorage.setItem('fojo-theme', JSON.stringify(lightTheme));

    if (lightTheme) {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
    }
  }, [lightTheme]);

  const getSection = (arr, id) => {
    return arr.find((a) => a.id === id);
  };

  const windowScroll = () => {
    if (navRef && !error) {
      if (window.scrollY > 200) {
        navRef.current.className = 'fixed';
      } else {
        navRef.current.className = '';
      }
    }

    if (sectionRef && !error) {
      if (window.pageYOffset < homeSectRef.current.bottom - navHeight - 120)
        setSectId(homeSectRef.current.id);
      else if (
        window.pageYOffset >= aboutSectRef.current.top - navHeight - 120 &&
        window.pageYOffset < aboutSectRef.current.bottom - navHeight - 120
      )
        setSectId(aboutSectRef.current.id);
      // else if (
      //   window.pageYOffset >= servSectRef.current.top - navHeight - 120 &&
      //   window.pageYOffset < servSectRef.current.bottom - navHeight - 120
      // )
      //   setSectId(servSectRef.current.id);
      else if (
        window.pageYOffset >= portSectRef.current.top - navHeight - 120 &&
        window.pageYOffset < portSectRef.current.bottom - navHeight - 120
      )
        setSectId(portSectRef.current.id);
      else if (
        window.pageYOffset >= conSectRef.current.top - navHeight - 120 &&
        window.pageYOffset < conSectRef.current.bottom - navHeight - 120
      )
        setSectId(conSectRef.current.id);
    }
  };

  useEffect(() => {
    if (
      navigator.maxTouchPoints > 1 &&
      /Android|iPhone|iPad/i.test(navigator.userAgent)
    ) {
      document.documentElement.classList.add('td');
      setIsTouchDevice(true);
    } else {
      document.documentElement.classList.add('ntd');
      setIsTouchDevice(false);
    }

    // *td ==> touch-device
    // *ntd ==> not-touch-device
  }, []);

  // *Navbar fix on scroll
  useEffect(() => {
    window.onscroll = windowScroll;
    return () => {
      window.removeEventListener('scroll', windowScroll);
    };
  }, [navRef, sectionRef, error]);

  useEffect(() => {
    if (sectionRef && !error) {
      const sections = [...new Set(sectionRef.current.filter((sec) => sec))];

      function Sect(el) {
        this.top =
          el.getBoundingClientRect().top + document.documentElement.scrollTop;
        this.bottom =
          el.getBoundingClientRect().bottom +
          document.documentElement.scrollTop;
        this.id = el.id;
      }

      homeSectRef.current = new Sect(getSection(sections, 'home'));
      aboutSectRef.current = new Sect(getSection(sections, 'about'));
      // servSectRef.current = new Sect(getSection(sections, 'services'));
      portSectRef.current = new Sect(getSection(sections, 'portfolio'));
      conSectRef.current = new Sect(getSection(sections, 'contact'));
    }
  }, [sectionRef, error]);

  return (
    <Router>
      <Navbar />
      <Theme />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
