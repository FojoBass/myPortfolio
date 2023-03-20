import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import { FiSettings, FiCheck } from 'react-icons/fi';
import './theme.css';

const Theme = () => {
  const { lightTheme, setLightTheme } = useGlobalContext();
  const [settOpen, setSettOpen] = useState(false);
  return (
    <div className={`settings ${settOpen ? 'show' : ''}`}>
      <div className='sett-logo' onClick={() => setSettOpen(!settOpen)}>
        <FiSettings />
      </div>

      <div className='sett-opts'>
        <h3>modes</h3>
        <div
          className={`sett-opt ${lightTheme ? 'active' : ''}`}
          onClick={() => setLightTheme(true)}
        >
          <span className='sett-icon'>
            {' '}
            <FiCheck />{' '}
          </span>
          <span>Light</span>
        </div>

        <div
          className={`sett-opt ${!lightTheme ? 'active' : ''}`}
          onClick={() => setLightTheme(false)}
        >
          <span className='sett-icon'>
            <FiCheck />{' '}
          </span>
          <span>Dark</span>
        </div>
      </div>
    </div>
  );
};

export default Theme;
