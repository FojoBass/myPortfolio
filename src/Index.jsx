import React from 'react';
import { About, Home, Contact, Portfolio, Services } from './Pages';
import { SingleProj } from './Components';
import { useGlobalContext } from './context';
import Experience from './Pages/Experience';

const Index = () => {
  const { isTouchDevice, setError } = useGlobalContext();

  React.useEffect(() => {
    setError(false);
  }, []);

  return (
    <>
      <Home />
      <About />
      {/* <Services /> */}
      <Experience />
      <Portfolio />
      <Contact />
      {!isTouchDevice ? <SingleProj /> : ''}
    </>
  );
};

export default Index;
