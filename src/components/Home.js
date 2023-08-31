import React from 'react';
import TypingText from './TypingText';

const Home = () => {
  return (
    <>
    <section className="home" id="home">
    <div className="max-width">
        <div className="row">
          <div className="home-content">
              <div className="text-1">Hello, my name is</div>
              <div className="text-2">Nandita Kumari</div>
              <div className="text-3">And I'm a <span className="typing" ><TypingText /></span></div>
              <a href="#">Hire me</a>
          </div>
        </div>
    </div>
  </section>
  </>

  );
};

export default Home;