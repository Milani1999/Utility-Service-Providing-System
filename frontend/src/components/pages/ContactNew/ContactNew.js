import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationArrow } from '@fortawesome/fontawesome-free-solid'

const Result = () => {
    return (
        <p className="P-Contact">Your message has been successfully sent.
            Our team will reply you soon.
        </p>


    )
}
function Contact(props) {
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_gmhcru8',
            'template_5gerb5h',
            e.target,
            'z-EGZbIC836IrmMy2'
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
        e.target.reset();
        showResult(true);
    };






    return (
        <div className="bodyContact">
            <div className="containerContact">
                <div className="contentContact">
                    <div className="left-side">
                        <div className="address details">
                            <FontAwesomeIcon icon={faLocationArrow} />
                            <div className="topicContact">Address</div>
                            <div className="text-oneContact">No 01 <br />TB Jaya Mawatha</div>
                            <div className="text-twoContact">Colombo 06</div>
                        </div>
                        <div className="phone details">
                            <FontAwesomeIcon icon={faPhone} id="phone" />
                            <div className="topicContact">Phone</div>
                            <div className="text-oneContact">+011 2356231</div>
                            <div className="text-twoContact">+011 5432659</div>
                        </div>
                        <div className="email details">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <div className="topicContact">Email</div>
                            <div className="text-oneContact">toofoo@gmail.com</div>
                            <div className="text-twoContact">util.toofo@gmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Contact us</div>

                        <form onSubmit={sendEmail}>
                            <div className="input-boxContact">
                                <input type="text" name="name" placeholder="Enter your name" required />
                            </div>
                            <div className="input-boxContact">
                                <input type="email" name="user_email" placeholder="Enter your email" required />
                            </div>
                            <div className="input-boxContact message-box">
                                <input type="text" name="message" placeholder="Brief your problem" required />
                            </div>

                            <button className="buttonContact" type="submit" value='Send' >Send Now</button>
                            <div className='rowContact'>{result ? <Result /> : null}</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact