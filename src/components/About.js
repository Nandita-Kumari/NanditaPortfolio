import React from 'react';
import TypingText from './TypingText';

const About = () => {
  return (
   <>
    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src="WhatsApp Image 2023-08-02 at 7.59.01 PM.jpeg" alt="" />
                </div>
                <div className="column right">
                    <div className="text">I'm Nandita and I'm a <span className="typing-2"><TypingText/></span></div>
                    <p>My name is Nandita Kumari, and my portfolio is a representation of all that i have learned and accomplished as a science and engineering student. I love designing websites and looking for more opportunities. While you are visiting my portfolio, you get to learn a bit about me, my goals as they relate to the immediate future and many years down the road, and some of my many life lessons that i have learned outside of the classroom that have shaped me into the person I am today.</p>
                    <a href="#">Download CV</a>
                </div>
            </div>
        </div>
    </section>
   </>
  );
};

export default About;