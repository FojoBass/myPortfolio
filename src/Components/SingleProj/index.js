import React, { useRef, useEffect, useState } from 'react';
import './single.css';
import { useGlobalContext } from '../../context';
import { FaTimes } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const SingleProj = () => {
  const { projects, projectId, singleProjRef, modalOpen, setModalOpen } =
    useGlobalContext();
  const sliderRef = useRef(null);
  const [selCount, setSelCount] = useState(0);

  const handleClose = (e) => {
    if (e) {
      if (e === singleProjRef.current) {
        e.classList.add('hide');
        setModalOpen(false);
      }
    } else {
      singleProjRef.current.classList.add('hide');
      setModalOpen(false);
    }
  };

  useEffect(() => {
    const refTimeout = setTimeout(() => {
      if (modalOpen) {
        document.documentElement.style.overflowY = 'hidden';
      } else document.documentElement.style.overflowY = 'scroll';
    }, 500);

    return () => {
      clearTimeout(refTimeout);
      setSelCount(0);
    };
  }, [singleProjRef, modalOpen]);

  return (
    <section
      id='single-proj'
      className='hide'
      onClick={(e) => handleClose(e.target)}
      ref={singleProjRef}
    >
      {projects.map(({ name, stack, info, imgUrls, id, url, date }) => {
        return (
          <div
            className={`single-wrapper ${projectId !== id ? 'hide' : ''}`}
            key={id}
          >
            <h3 className='proj-title'>{name}</h3>
            <div className='flex-container'>
              <article className='proj-left-side'>
                <div className='imgs-container'>
                  <div
                    className='imgs-slider'
                    ref={sliderRef}
                    style={{ transform: `translate(-${selCount * 100}%)` }}
                  >
                    {imgUrls.map((imgUrl, i) => {
                      return <img key={i} src={imgUrl} alt='' />;
                    })}
                  </div>
                </div>

                <div className='selectors'>
                  {imgUrls.map((m, i) => {
                    return (
                      <button
                        className={`selector ${selCount === i ? 'active' : ''}`}
                        key={i}
                        onClick={() => setSelCount(i)}
                      ></button>
                    );
                  })}
                </div>
              </article>

              <article className='proj-right-side'>
                <p className='proj-info'>{info}</p>

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

                <a href={url} target='_blank' className='view-btn'>
                  <span>visit</span> <FiArrowUpRight />
                </a>
              </article>
            </div>
            <button
              className='proj-close-btn'
              onClick={() => handleClose(null)}
            >
              <FaTimes />
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default SingleProj;
