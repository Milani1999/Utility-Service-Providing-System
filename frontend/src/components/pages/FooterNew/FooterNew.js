import React, { Component } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin, faTwitter  } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope, faLocationArrow } from '@fortawesome/fontawesome-free-solid'


export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-distributed">

                    <div className="footer-left">

                        <h3>TooFoo</h3>

                        <p className="footer-links">
                            <Link to="/" className="link-1">Home</Link>
                            <Link to="/aboutus">About us</Link>

                            <Link to="/services">Services</Link>

                            <Link to="/contactus">Contact us</Link>

                        </p>

                        <p className="footer-company-name">Toofoo © 2015</p>
                    </div>

                    <div className="footer-center">

                        <div>
                            <FontAwesomeIcon icon={faLocationArrow} className="fa-contact" />
                            <p><span>No 01, TB Jaya Mawatha</span>Colombo 06</p>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faPhone} className="fa-contact" id="contactFa"/>
                            <p>+011 2356231</p>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faEnvelope} className="fa-contact" />
                            <p><a href="mailto:util.toofo@gmail.com">util.toofoo@gmail.com</a></p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <span>About the company</span>
                            Toofoo is a company which offers utility services to customers
                        </p>

                        <div className="footer-icons">

                            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://lk.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="https://github.com/"><FontAwesomeIcon icon={faGithub} /></a>

                        </div>

                    </div>

                </footer>
            </div>
        )
    }
}

export default Footer