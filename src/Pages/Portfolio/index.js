import React, { useEffect, useState, useRef } from 'react';
import './portfolio.css';
import { useGlobalContext } from '../../context';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const Portfolio = () => {
  const { projects, sectionRef } = useGlobalContext();
  const selectorRef = useRef([]);
  const projInfoRef = useRef();
  const sliderRef = useRef([]);
  const projRef = useRef([]);

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

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const el = entry.target;
      const moreSect = el.children[el.children.length - 1];
      const moreBtn = moreSect.children[0];
      if (entry.isIntersecting) {
        if (!moreBtn.classList.contains('active')) moreSect.children[0].click();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, { threshold: 1 });
    const projEls = projRef.current;

    if (projEls.length) {
      projEls.forEach((el) => {
        observer.observe(el);
      });
    }
  }, []);

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
            {projects.map(
              ({ name, imgUrls, id, info, date, stack, url }, ind) => {
                return (
                  <article
                    className='project'
                    key={id}
                    ref={(el) => {
                      el &&
                        !projRef.current.some((rel) => rel === el) &&
                        projRef.current.push(el);
                    }}
                  >
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
                      <p className='proj-name'>{name}</p>
                    </div>
                    <div className='selectors'>
                      {imgUrls.map((m, i) => {
                        return (
                          <button
                            className={`selector ${i === 0 ? 'active' : ''}`}
                            key={i}
                            data-index={i}
                            onClick={handleSelectors}
                            ref={(el) => {
                              el &&
                                !selectorRef.current.some(
                                  (rel) => rel === el
                                ) &&
                                selectorRef.current.push(el);
                            }}
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
                      <MoreBtn sliderRef={sliderRef} id={id} />

                      <a href={url} target='_blank' className='port-view-btn'>
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

const MoreBtn = ({ sliderRef, id }) => {
  const [isMore, setIsMore] = useState(false);

  const handleMore = (e) => {
    const moreBtn = e.currentTarget;
    const dropSect =
      moreBtn.parentElement.previousElementSibling.previousElementSibling;
    const dropChild = dropSect.children[0];

    if (!isMore)
      dropSect.style.height = dropChild.getBoundingClientRect().height + 'px';
    else dropSect.style.height = '0';

    moreBtn.classList.toggle('close');
    setIsMore(!isMore);
  };

  return (
    <button
      className={`more-btn close ${isMore ? 'active' : ''}`}
      onClick={handleMore}
      data-id={id}
    >
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
