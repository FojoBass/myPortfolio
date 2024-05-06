import React from 'react';
import './experience.css';
import { useGlobalContext } from '../../context';
import { exps } from '../../data';
import { FaRegHandPointRight } from 'react-icons/fa6';

const Experience = () => {
  const { navHeight, sectionRef } = useGlobalContext();

  return (
    <section
      id='experience'
      className='section'
      ref={(el) => sectionRef.current.push(el)}
    >
      <div className='center-sect'>
        <h1 className='section-hdg'>experience</h1>
        <article className='section-wrapper'>
          <div className='exps-wrapper'>
            {exps.map(({ date, duties, org, role, stack }) => (
              <div className='exp-wrapper' key={org}>
                <p className='exp-date'>{date}</p>
                <h3 className='exp-role'>{role}</h3>
                <p className='exp-org'>{org}</p>
                <div className='exp-stack-wrapper'>
                  {stack.map(({ name, Icon }) => (
                    <div className='exp-stack' key={name}>
                      <span className='exp-icon'>
                        <Icon />
                      </span>
                      <span className='exp-name'>{name}</span>
                    </div>
                  ))}
                </div>

                <ul className='exp-duties'>
                  {duties.map((duty) => (
                    <li className='exp-duty' key={duty}>
                      <span className='exp-duty-icon'>
                        <FaRegHandPointRight />
                      </span>
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
