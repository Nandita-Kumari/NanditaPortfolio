// import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import default styles
// import CustomButtonGroup from './CustomButtonGroup';
import React, { useRef } from 'react';


const Projects = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3, // Display three cards per slide
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2, // Display two cards per slide
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // Display one cards per slide
        },
      };

      const carouselRef = useRef(null);

  // const handlePrevClick = () => {
  //   carouselRef.current.previous();
  // };

  // const handleNextClick = () => {
  //   carouselRef.current.next();
  // };

  return (
    <>
    <section className="projects" id="projects">
        <div className="max-width">
            <h2 className="title">My Projects</h2>
            <Carousel ref={carouselRef}
              responsive={responsive}
              itemClass="carousel-card"
              autoPlaySpeed={3000}
              centerMode={false}
              containerClass="carousel-container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={true}
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
              
>
               
                <div className="card">
                    <div className="card-content">
                       
                        <a href="https://toypebble.com/">ToyPebble</a>
                        <div className="text">More Play, Less Pay !</div>
                        <p>
                        Designed and developed ToyPebble, a subscription-based toy delivery website catering to parents looking to provide educational and engaging toys for their children conveniently.</p>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-content">
                         {/* <img src="WhatsApp Image 2021-05-29 at 9.58.06 PM.jpeg" alt="" />*/}
                        <a href="https://wype.site/">Leon's</a>
                        <div className="text">Serving goodness in every bite !</div>
                        <p>Developed to enhance customer convenience and streamline operations for Leon's, a Burger King franchise.</p>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-content">
                         {/* <img src="WhatsApp Image 2021-05-29 at 9.58.06 PM.jpeg" alt="" />*/}
                        <a href="https://montiangelsinternationalschool.com/">Monti Angels International School</a>
                        <div className="text">Academic Excellence</div>
                        <p>Developed a comprehensive and interactive website for Monti Angels International School to enhance its online presence, provide essential information to parents and students</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <a href='https://crescentworkspace.in/'>Crescent Workspace</a>
                        <div className="text">Redefining Work Culture</div>
                        <p>Developed for individuals from different companies or professions share a common workspace,and often resources like conference rooms and office equipment.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <a href='https://rpinfocare.com/'>RP Infocare</a>
                        <div className="text">Best Web Hosting Service</div>
                        <p>It's a company website which referes best web hosting solution for online success.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <a href='https://www.torosand.in/'>ToroSand</a>
                        <div className="text">Build with trust</div>
                        <p>Developed for a sand company for better user expercience.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <a href='https://www.unicorpelevators.in/'>Unicorp Elevators</a>
                        <div className="text">Travel Comfort</div>
                        <p>Elevator site for smooth user experience towards travel and comfort.</p>
                    </div>
                </div>
          
                </Carousel>
            </div>
        
    </section>
    </>
  );
};

export default Projects;