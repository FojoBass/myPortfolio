import React from 'react';
import { About, Home, Contact, Portfolio, Services } from './Pages';
import { useGlobalContext } from './context';
import Experience from './Pages/Experience';

const Index = () => {
  const { setError } = useGlobalContext();

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
    </>
  );
};

export default Index;
