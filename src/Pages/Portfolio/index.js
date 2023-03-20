import React, { useEffect, useState, useRef } from 'react';
import './portfolio.css';
import { useGlobalContext } from '../../context';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const Portfolio = () => {
  const {
    projects,
    setProjectId,
    singleProjRef,
    setModalOpen,
    isTouchDevice,
    sectionRef,
  } = useGlobalContext();
  const selectorRef = useRef([]);
  const projInfoRef = useRef();
  const sliderRef = useRef([]);
  const nameRef = useRef([]);

  // *For ntd
  const handleClick = (e, id) => {
    setProjectId(id);
    singleProjRef.current.classList.remove('hide');
    setModalOpen(true);
  };

  // *For td
  const handleSelectors = (e) => {
    const selector = e.currentTarget;
    const slider = sliderRef.current.find(
      (el) => el.dataset.id === selector.dataset.id
    );

    selectorRef.current
      .filter((sel) => sel.dataset.id === selector.dataset.id)
      .forEach((el) => {
        el.classList.remove('active');
      });

    slider.style.transform = `translate(-${
      Number(selector.dataset.index) * 100
    }%)`;

    selector.classList.add('active');
  };

  return (
    <section
      id='portfolio'
      className='section'
      ref={(el) => sectionRef.current.push(el)}
    >
      <div className='center-sect'>
        <h1 className='section-hdg'>my works</h1>
        <article className='section-wrapper'>
          <div className='projects'>
            {!isTouchDevice
              ? projects.map(({ name, imgUrls, id }, index) => {
                  return (
                    <div
                      className='project'
                      key={index}
                      onClick={(e) => handleClick(e, id)}
                    >
                      <div className='img-wrapper'>
                        <img src={imgUrls[0]} alt={name} />
                      </div>
                      <p className='proj-name'>{name}</p>
                    </div>
                  );
                })
              : projects.map(
                  ({ name, imgUrls, id, info, date, stack, url }, ind) => {
                    return (
                      <article className='project' key={id}>
                        <div className='img-container'>
                          <div
                            className='img-slider'
                            ref={(el) => (sliderRef.current[ind] = el)}
                            data-id={id}
                          >
                            {imgUrls.map((url, i) => {
                              return <img src={url} alt={name} key={i} />;
                            })}
                          </div>
                          <p
                            className='proj-name'
                            ref={(el) => (nameRef.current[ind] = el)}
                            data-id={id}
                          >
                            {name}
                          </p>
                        </div>
                        <div className='selectors'>
                          {imgUrls.map((m, i) => {
                            return (
                              <button
                                className={`selector ${
                                  i === 0 ? 'active' : ''
                                }`}
                                key={i}
                                data-index={i}
                                onClick={handleSelectors}
                                ref={(el) =>
                                  (selectorRef.current[
                                    selectorRef.current[i + ind]
                                      ? i + ind + ind
                                      : i + ind
                                  ] = el)
                                }
                                data-id={id}
                              ></button>
                            );
                          })}
                        </div>

                        <div className='proj-info' ref={projInfoRef}>
                          <p>{info}</p>
                        </div>

                        <div className='proj-details'>
                          <div className='stack'>
                            {stack.map((item, ind) => {
                              return (
                                <div key={ind}>
                                  <span className='icon'>{item.icon}</span>
                                  <span className='title'>{item.title}</span>
                                </div>
                              );
                            })}
                          </div>
                          <p className='date'>{date}</p>
                        </div>

                        <div className='more-btns'>
                          <MoreBtn
                            nameRef={nameRef}
                            sliderRef={sliderRef}
                            id={id}
                          />
                          <a href={url} target='_blank' className='view-btn'>
                            <span>visit</span> <FiArrowUpRight />
                          </a>
                        </div>
                      </article>
                    );
                  }
                )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

const MoreBtn = ({ nameRef, sliderRef, id }) => {
  const [isMore, setIsMore] = useState(false);

  const handleMore = (e) => {
    const moreBtn = e.currentTarget;
    const dropSect =
      moreBtn.parentElement.previousElementSibling.previousElementSibling;
    const nameSect = nameRef.current.find(
      (el) => el.dataset.id === moreBtn.dataset.id
    );
    const sliderSect = sliderRef.current.find(
      (el) => el.dataset.id === moreBtn.dataset.id
    );

    moreBtn.classList.toggle('close');
    dropSect.classList.toggle('show');
    nameSect.classList.toggle('active');
    sliderSect.classList.toggle('active');
    setIsMore(!isMore);
  };

  return (
    <button className='more-btn close' onClick={handleMore} data-id={id}>
      {!isMore ? (
        <>
          <span>more</span> <FaChevronDown />
        </>
      ) : (
        <>
          <span>less</span> <FaChevronUp />
        </>
      )}
    </button>
  );
};
