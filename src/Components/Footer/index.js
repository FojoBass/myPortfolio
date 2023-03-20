import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './footer.css';

const Footer = () => {
  return (
    <section id='footer'>
      <p>
        Copyright © {new Date().getFullYear()}{' '}
        <AnchorLink href='#about'>Joshua.</AnchorLink>
      </p>
      <p>All Rights Reserved.</p>
    </section>
  );
};

export default Footer;
