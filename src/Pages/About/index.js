import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const About = () => {
  const { sectionRef } = useGlobalContext();
  return (
    <section
      id='about'
      className='section'
      ref={(el) => sectionRef.current.push(el)}
    >
      <div className='center-sect'>
        <h1 className='section-hdg'>know me more</h1>
        <article className='section-wrapper'>
          <div className='wrapper'>
            <div className='flex-container'>
              <div className='left-side'>
                <h3>
                  I am <span>Olubo Joshua,</span> a Frontend Web Developer
                </h3>

                <p>
                  I am a Front-end developer knowledgeable in building websites
                  and web applications with good UI/UX. I am equipped and
                  proficient in technologies including HTML, CSS, Javascript,
                  and React, and I have made use of these to build projects with
                  high responsiveness and great UI/UX, sticking to modern
                  conventions in frontend development
                </p>

                <p>
                  I enjoy being challenged and engaged with projects that
                  require me to work outside my comfort zone and knowledge set,
                  as continuing to learn new languages and development
                  techniques is important to me
                </p>
              </div>

              <div className='right-side'>
                <div className='opts-wrapper'>
                  <span className='opt-title'>name: </span>{' '}
                  <span className='opt'>Olubo Joshua</span>
                </div>

                <div className='opts-wrapper'>
                  <span className='opt-title'>email: </span>{' '}
                  <span className='opt email'>olubofosimubo@gmail.com</span>
                </div>

                <div className='opts-wrapper'>
                  <span className='opt-title'>field: </span>{' '}
                  <span className='opt'>Frontend Developer</span>
                </div>

                <Link
                  to='https://drive.google.com/file/d/1LvV_20NsaGcjveYF9uu4RxhAsmD_Fglr/view?usp=sharing'
                  target='_blank'
                  className='resume-btn'
                >
                  resume
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
