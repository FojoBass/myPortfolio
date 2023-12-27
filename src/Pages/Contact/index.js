import React, { useEffect, useState, useRef } from 'react';
import './contact.css';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookSquare } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { useGlobalContext } from '../../context';

const Contact = () => {
  const { sectionRef } = useGlobalContext();
  const [msg, setMsg] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsloading] = useState(true);
  const formRef = useRef();
  const [showCaptcha, setShowCaptcha] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && msg) {
      setIsloading(true);
      setShowCaptcha(true);
    } else {
      alert('Fill all fields!');
    }
  };

  const sendEmail = async (captchaValue) => {
    const formProps = {
      name,
      email,
      msg,
      'g-recaptcha-response': captchaValue,
    };
    try {
      await emailjs.send(
        process.env.REACT_APP_PORTFOLIO_SERVICE_ID,
        process.env.REACT_APP_PORTFOLIO_TEMPLATE_ID,
        formProps,
        process.env.REACT_APP_PORTFOLIO_PUBLIC_KEY
      );
      setEmail('');
      setName('');
      setMsg('');
      alert('Email sent successfully.');
      setIsloading(false);
      setShowCaptcha(false);
    } catch (error) {
      console.log(error);
      alert('Mail not sent, try again.');
      setIsloading(false);
      setShowCaptcha(false);
    }
  };

  useEffect(() => {
    if (!name || !msg || !email) {
      setIsloading(true);
    } else {
      setIsloading(false);
    }
  }, [name, email, msg]);

  return (
    <section
      id='contact'
      className='section'
      ref={(el) => sectionRef.current.push(el)}
    >
      <div className='center-sect'>
        <article className='section-wrapper'>
          <h1 className='section-hdg'>get in touch</h1>
          <div className='flx-wrapper'>
            <div className='form-container'>
              <h3 className='hdg'>send me a note</h3>

              <form ref={formRef}>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Name'
                  name='name'
                />
                <input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name='email'
                />
                <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  cols='30'
                  rows='10'
                  name='msg'
                  placeholder='Enter Message'
                ></textarea>

                <button
                  type='submit'
                  onClick={handleSubmit}
                  className={`${isLoading ? 'disable' : ''}`}
                  disabled={isLoading}
                >
                  send message
                </button>
              </form>

              {showCaptcha ? (
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
                  onChange={sendEmail}
                />
              ) : (
                ''
              )}
            </div>

            <div className='contact-info'>
              <h3 className='hdg'>contact info</h3>

              <div className='con-opts'>
                <div className='con-opt'>
                  <span className='con-icon'>
                    <FiPhone />
                  </span>
                  <span className='con-info'>+234 810 2638 349</span>
                </div>

                <div className='con-opt'>
                  <span className='con-icon'>
                    <FaWhatsapp />
                  </span>
                  <a href='https://wa.link/7sjp33' className='con-info'>
                    +234 810 2638 349
                  </a>
                </div>

                <div className='con-opt'>
                  <span className='con-icon'>
                    <CiMail />
                  </span>
                  <span className='con-info'>fosimuboolubo@gmail.com</span>
                </div>
              </div>

              <div className='follow-links'>
                <h3 className='hdg'>follow me</h3>

                <div className='flinks-wrapper'>
                  <span className='flink' id='gt'>
                    <a href='https://github.com/FojoBass' target='_blank'>
                      <BsGithub />
                    </a>
                  </span>

                  <span className='flink' id='tw'>
                    <a href='https://twitter.com/devFojo' target='_blank'>
                      <FaXTwitter />
                    </a>
                  </span>

                  <span className='flink ln'>
                    <a
                      href='https://www.linkedin.com/in/fosimubo-olubo-1a166a22b/'
                      target='_blank'
                    >
                      <BsLinkedin />
                    </a>
                  </span>

                  <span className='flink fb'>
                    <a
                      href='https://www.facebook.com/fosimubo.olubo'
                      target='_blank'
                    >
                      <FaFacebookSquare />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
