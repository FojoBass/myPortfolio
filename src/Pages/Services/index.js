import React from 'react';
import './services.css';
import { GiTeacher } from 'react-icons/gi';
import { SiConvertio } from 'react-icons/si';
import { TiSpanner } from 'react-icons/ti';
import { CgWebsite } from 'react-icons/cg';
import { useGlobalContext } from '../../context';

const Services = () => {
  const { sectionRef } = useGlobalContext();

  return (
    <section
      id='services'
      className='section'
      ref={(el) => sectionRef.current.push(el)}
    >
      <div className='center-sect'>
        <h1 className='section-hdg'>what i do</h1>
        <div className='section-wrapper'>
          <article className='service'>
            <div className='service-top'>
              <div className='service-icon'>
                <CgWebsite />
              </div>
              <h3 className='service-hdg'>Website Development</h3>
            </div>
            <div className='service-bottom'>
              <p>
                I build websites for: business, non-profit, religious or
                personal purposes. Be it: <strong>Landing Page,</strong>{' '}
                <strong>Portfolio,</strong> <strong>Blog,</strong>{' '}
                <strong>E-commerce,</strong> etc., with: stunning UI and great
                UX, speed optimization, and responsiveness; following mordern
                web development standards.
              </p>
            </div>
          </article>

          <article className='service'>
            <div className='service-top'>
              <div className='service-icon'>
                <SiConvertio />
              </div>
              <h3 className='service-hdg'>Figma/PSD to HTML</h3>
            </div>
            <div className='service-bottom'>
              <p>
                I can help convert those Figma or PSD web designs into actual
                HTML codes; following every detail and delivery a high quality
                job.
              </p>
            </div>
          </article>

          <article className='service'>
            <div className='service-top'>
              <div className='service-icon'>
                <TiSpanner />
              </div>
              <h3 className='service-hdg'>Bug Fix</h3>
            </div>
            <div className='service-bottom'>
              <p>
                Bugs, if left unfixed in your website, can greatly affect
                patronage. With my years of experience building websites, I can
                help you fix: design, functional, or structural bugs in your
                website.
              </p>
            </div>
          </article>
          <article className='service'>
            <div className='service-top'>
              <div className='service-icon'>
                <GiTeacher />
              </div>
              <h3 className='service-hdg'>Tutoring</h3>
            </div>
            <div className='service-bottom'>
              <p>
                With my experience in the field of web development, I can tutor
                and guide you, ensuring that you acquire the needed knowledge;
                at the right time.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
