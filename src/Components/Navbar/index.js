import React, { useEffect, useRef, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import { useGlobalContext } from '../../context';

const Navbar = () => {
  const dropdownRef = useRef(null);
  const navLinksWrapperRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navHeight, setNavHeight, navRef, sectId } = useGlobalContext();

  //* Sets dropdown's position
  useEffect(() => {
    if (navRef && dropdownRef) {
      const navHeight = navRef.current.getBoundingClientRect().height;
      dropdownRef.current.style.top = navHeight + 'px';

      setNavHeight(navHeight);
    }
  }, [navRef, dropdownRef]);

  // * Opens dropdown
  useEffect(() => {
    if (navLinksWrapperRef && isMenuOpen) {
      const navLinksWrapperHeight =
        navLinksWrapperRef.current.getBoundingClientRect().height;

      dropdownRef.current.style.height = navLinksWrapperHeight + 'px';
    }
    if (navLinksWrapperRef && !isMenuOpen) dropdownRef.current.style.height = 0;
  }, [navLinksWrapperRef, isMenuOpen]);

  return (
    <nav id='navbar' ref={navRef}>
      <AnchorLink offset={() => navHeight} className='logo' href='#about'>
        joshua
      </AnchorLink>

      <div className={`dropdown ${isMenuOpen ? 'show' : ''}`} ref={dropdownRef}>
        <ul
          className='nav-links-wrapper'
          ref={navLinksWrapperRef}
          onClick={(e) => setIsMenuOpen(false)}
        >
          <li>
            <AnchorLink
              offset={() => navHeight}
              className={`nav-link ${sectId === 'home' ? 'active' : ''}`}
              href='#home'
            >
              home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              offset={() => navHeight}
              className={`nav-link ${sectId === 'about' ? 'active' : ''}`}
              href='#about'
              data-id='about'
            >
              about
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              offset={() => navHeight}
              className={`nav-link ${sectId === 'services' ? 'active' : ''}`}
              href='#services'
              data-id='services'
            >
              what i do
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              offset={() => navHeight}
              className={`nav-link ${sectId === 'portfolio' ? 'active' : ''}`}
              href='#portfolio'
              data-id='portfolio'
            >
              portfolio
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              offset={() => navHeight}
              className={`nav-link ${sectId === 'contact' ? 'active' : ''}`}
              href='#contact'
              data-id='contact'
            >
              contact
            </AnchorLink>
          </li>
        </ul>
      </div>

      <div className='nav-right'>
        <div
          className={`menu-btn ${isMenuOpen ? 'menu-open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <hr />
          <hr />
          <hr />
        </div>

        <ul className='social-links-wrapper'>
          <li className='social-link linkedIn'>
            <Link
              to='https://www.linkedin.com/in/fosimubo-olubo-1a166a22b/'
              target='_blank'
            >
              {<BsLinkedin />}
            </Link>
          </li>
          <li className='social-link github'>
            <Link to='https://github.com/FojoBass' target='_blank'>
              {<BsGithub />}
            </Link>
          </li>
          <li className='social-link twitter'>
            <Link to='https://twitter.com/FojoBass' target='_blank'>
              {<BsTwitter />}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
