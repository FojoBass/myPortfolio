import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import { stacks } from '../../data';

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
                  I am <span>Olubo Joshua,</span> a Fullstack Developer
                </h3>

                <p>
                  I am a Fullstack developer knowledgeable in building websites
                  and web applications with good UI/UX. I am equipped and
                  proficient in technologies including HTML, CSS, Javascript,
                  Typescript, React, SCSS, Php and Firebase and I have made use
                  of these to build projects with high responsiveness and great
                  UI/UX, sticking to modern conventions in web development
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
                  <span className='opt email'>fosimuboolubo@gmail.com</span>
                </div>

                <div className='opts-wrapper'>
                  <span className='opt-title'>field: </span>{' '}
                  <span className='opt'>Fullstack Developer</span>
                </div>

                <Link
                  to='https://drive.google.com/file/d/1GjegamLIf35Vsrfzs84ECK0smL779TTJ/view?usp=sharing'
                  target='_blank'
                  className='resume-btn'
                >
                  resume
                </Link>
              </div>
            </div>
          </div>
        </article>

        <div className='stack_sect'>
          <h2>
            my stack <span></span>
          </h2>

          <div className='stack_wrapper'>
            {stacks.map(({ title, Icon, id }) => (
              <div className={`stack_icon ${id}`} key={id}>
                <Icon />
                <span className='stack_title'>{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
