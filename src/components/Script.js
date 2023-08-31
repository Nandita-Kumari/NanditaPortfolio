import React, { useEffect } from 'react';


const Script = () => {
  useEffect(() => {
    // Sticky navbar on scroll script
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 20) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }

      // Scroll-up button show/hide script
      const scrollUpBtn = document.querySelector('.scroll-up-btn');
      if (window.scrollY > 500) {
        scrollUpBtn.classList.add('show');
      } else {
        scrollUpBtn.classList.remove('show');
      }
    };

    // Bind the scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Other code goes here...

  return <>
   
  </>;
};

export default Script;


