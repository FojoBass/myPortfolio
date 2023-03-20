import React from 'react';
import './home.css';
import { RxCaretDown } from 'react-icons/rx';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useGlobalContext } from '../../context';

const Home = () => {
  const { navHeight, sectionRef } = useGlobalContext();
  return (
    <section id='home' ref={(el) => sectionRef.current.push(el)}>
      <article className='home-wrapper'>
        <h3>Welcome</h3>
        <h1>
          I am <span className='name'>Olubo</span>{' '}
          <span className='name'>Joshua</span>
        </h1>
        <h3>a Frontend Web Developer</h3>

        <AnchorLink
          className='hire-btn'
          href='#contact'
          offset={() => navHeight}
        >
          hire me
        </AnchorLink>
      </article>

      <AnchorLink className='goto-about' href='#about' offset={() => navHeight}>
        <RxCaretDown />
      </AnchorLink>
    </section>
  );
};

export default Home;
