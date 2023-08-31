import React from 'react';

const Service = () => {
  return (
    <>
    <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">My services</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <i className="fas fa-paint-brush"></i>
                        <div className="text">Web Design</div>
                        <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-chart-line"></i>
                        <div className="text">Advertising</div>
                        <p>Make your business shine online with a custom advertising website designed just for you by a professional designer.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-code"></i>
                        <div className="text">Apps Design</div>
                        <p>mobile apps have a wide variety of uses, what unifies them is the need for optimal usability, accessibility, engagement, and overall user experience.</p>
                    </div>
                </div>
               </div>
            </div>        
    </section>
    </>
  );
};

export default Service;