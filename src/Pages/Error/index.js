import React, { useEffect, useState } from 'react';
import './error.css';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const { setError } = useGlobalContext();
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    setError(true);

    const countInterval = setInterval(() => {
      setCount(count - 1);
      if (!count) {
        clearInterval(countInterval);
        navigate('/', { replace: true });
      }
    }, 1000);

    return () => clearInterval(countInterval);
  }, [count]);

  return (
    <section id='error'>
      <h3>sorry, page not found!</h3>
      <p>
        redirecting in <span className='count'>{count}s</span>
      </p>
    </section>
  );
};

export default Error;
