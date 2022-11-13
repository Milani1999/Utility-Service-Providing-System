import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf, faCogs, faUsers, faSmile, faWrench } from '@fortawesome/fontawesome-free-solid'
import './Aboutus.css'


export class AboutusNew extends Component {
    render() {
        const worker = {
            backgroundImage: "url(/workers.jpg)",
            height: '150px',
            width: '150px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
        const team = {
            backgroundImage: "url(/team.jpg)",
            height: '150px',
            width: '150px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
        const customer = {
            backgroundImage: "url(/customer.jpg)",
            height: '150px',
            width: '150px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
        const vision = {
            backgroundImage: "url(/vision.jpg)",
            height: '150px',
            width: '150px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
        const mission = {
            backgroundImage: "url(/mission.jpg)",
            height: '150px',
            width: '150px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
        const values = {
            backgroundImage: "url(/values.jpg)",
            height: '150px',
            width: '150px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };

        return (
            <div className="HomeAboutus">
                <div className="first-head">Know something interesting about us !!</div>
                <div className="aboutus">
                    <div className="cardSliderSlide">
                        <input type="radio" name="dot" id="one" />
                        <input type="radio" name="dot" id="two" />
                        <div className="main-card">
                            <div className="cardsSlider">
                                <div className="cardSlider">
                                    <div className="first-cont">
                                        <div className="img" style={team}>

                                        </div>
                                        <div className="details">
                                            <div className="nameSlider">About Us</div>
                                            <p> We are the best utility service providers in this country.
                                                All the customers prefer our service.
                                            </p>

                                        </div>

                                    </div>
                                </div>
                                <div className="cardSlider">
                                    <div className="first-cont">
                                        <div className="img" style={worker}>

                                        </div>
                                        <div className="details">
                                            <div className="nameSlider">Employees</div>
                                            <p>Well trained trainees with well equiped tools.
                                                They behave in the friendly manner.
                                            </p>

                                        </div>

                                    </div>
                                </div>
                                <div className="cardSlider">
                                    <div className="first-cont">
                                        <div className="img" style={customer}>

                                        </div>
                                        <div className="details">
                                            <div className="nameSlider">Customer</div>
                                            <p>Our first focus is our customer.
                                                We provide the best service to the customer.
                                            </p>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="cardsSlider">
                                <div className="cardSlider">
                                    <div className="first-cont">
                                        <div className="img" style={vision}>

                                        </div>
                                        <div className="details">
                                            <div className="nameSlider">Vision</div>
                                            <p>Value customer not money</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="cardSlider">
                                    <div className="first-cont">
                                        <div className="img" style={mission}>

                                        </div>
                                        <div className="details">
                                            <div className="nameSlider">Mision</div>
                                            <p>To provide services with well equiped tools and
                                                 have customer satisfaction
                                            </p>

                                        </div>

                                    </div>
                                </div>
                                <div className="cardSlider">
                                    <div className="first-cont">
                                        <div className="img" style={values}>

                                        </div>
                                        <div className="details">
                                            <div className="nameSlider">Values</div>
                                            <p>Service should be the best</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttonAbout">
                            <label htmlFor="one" className=" active one"></label>
                            <label htmlFor="two" className="two"></label>
                        </div>
                    </div>
                </div>
                <div className="quote">We don't focus on the competition, we focus on the customer
                </div>
                <div className="containerCard">

                    <div className="cardNew card-1">
                        <p className="desc">Great customer service! The lady who came for cleaning work did her work really well.
                            I just book the worker through the website. She was on time.
                            Had al the needed equipments with her. Best service ever !!</p>
                        <p className="name">Mr James</p><br />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>

                    <div className="cardNew card-3">
                        <p className="desc">Very quick and fast services. I had a problem with my refridgerator and tried many
                            comanpanies and it didn't work.
                            My fiend suggested this company. I got my problem resolved within 24 hours.
                            I highly recommend !</p>
                        <p className="name">George</p><br />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalf} />
                    </div>

                    <div className="cardNew card-2">
                        <p className="desc">Gas cylinder was supplied within 1 hour. Great service and cost effective !</p>
                        <p className="name">Mrs Anne</p><br />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalf} />
                    </div>



                </div>

                <hr />

                <div className="quote2">Know about what we have......
                </div>

                <div className="headerCard">

                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <FontAwesomeIcon icon={faCogs} className="icon" />
                                <h3>10+</h3>
                                <p>Services</p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <FontAwesomeIcon icon={faUsers} className="icon" />
                                <h3>500+</h3>
                                <p>Employees</p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <FontAwesomeIcon icon={faSmile} className="icon" />
                                <h3>1000+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <FontAwesomeIcon icon={faWrench} className="icon" />
                                <h3>10+</h3>
                                <p>Latest Equipments</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default AboutusNew