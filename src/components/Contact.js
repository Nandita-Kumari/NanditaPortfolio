import React from 'react';

const Contact = () => {
  return (
 
    <>
     <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Here is some of our basic details for contacting.Thank You.</p>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Nandita Kumari</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Chandrapura,Bokaro,Jharkhand</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">kmrinandita@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form className="contact-form" action="#" method="POST">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" className="fullname" placeholder="Name" />
                            </div>
                            <div className="field email">
                                <input type="text" className="email-input" placeholder="Email" />
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" className="subject" placeholder="Subject" />
                        </div>
                        <div className="field textarea">
                            <textarea className="message" cols="30" rows="10" placeholder="Message.."></textarea>
                        </div>
                        <div className="button-area">
                            <button className="send-msg" type="submit" name="send">Send message</button>
                            <div className="error-box"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Contact;