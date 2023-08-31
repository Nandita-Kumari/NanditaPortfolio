import React from 'react';

const Skills = () => {
  return (
   <>
   <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text">My creative skills & experiences.</div>
                    <p>  I does various projects on website development using HTML, CSS, Javascript and their libraries. Basically , currently working on reactjs for development of websites.</p>
                    <a href="#">Read more</a>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>100%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>100%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Bootstrap</span>
                            <span>100%</span>
                        </div>
                        <div className="line php"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>jquery</span>
                            <span>70%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Reactjs</span>
                            <span>85%</span>
                        </div>
                        <div className="line react"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  );
};

export default Skills;