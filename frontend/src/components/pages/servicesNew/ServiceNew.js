import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Service.css'

export class Service extends Component {
    render() {

        const ServiceImage = {
            backgroundImage: "url(/Services.jpg)",
            height: '500px',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin:'0',

        };
        const FirstImage = {
            backgroundImage: "url(/air.png)",
        };
        const SecondImage = {
            backgroundImage: "url(/plumbering.png)",
        };
        const ThirdImage = {
            backgroundImage: "url(/repairing.png)",
        };
        const FourthImage = {
            backgroundImage: "url(/varnish.png)",
        };
        const FifthImage = {
            backgroundImage: "url(/mop.png)",
        };
        const SixthImage = {
            backgroundImage: "url(/gas-tank.png)",
        };

        return (

            <div>
                <div className="rowService" style={ServiceImage}>
                    <h1 className="h1-service">Services</h1>
                </div>

                <hr />

                <h2 className="aboutService">Click and enjoy our best services</h2>

                <div className="DescService">
                    <ul>
                        <li className="li-service">Save your time.</li>
                        <li className="li-service">Connect with well trained technicians.</li>   
                        <li className="li-service">We promise you for the doorstep services</li> 
                        <li className="li-service">Guranteed secure transaction</li>
                    </ul>
                </div>

                <div className="rowService">
                    <div className="columnService">
                        <div className="ServiceImage" style={FirstImage}>
                                <button className="serviceBtn"> 
                                <Link to='/AC mechanics'>AC mechanics</Link>
                                </button>
                        </div>

                    </div>
                    <div className="columnService">
                        <div className="ServiceImage" style={SecondImage}>
                          
                                <button className="serviceBtn">
                                <Link to='/Plumbers'>Plumbers</Link>
                                </button>
                 
                        </div>

                    </div>
                    <div className="columnService">
                        <div className="ServiceImage" style={ThirdImage}>
                         
                                <button className="serviceBtn">
                                <Link to='/Electricians'>Electricians</Link>
                                </button>
                        
                        </div>

                    </div>
                </div>

                <div className="rowService">
                    <div className="columnService">
                        <div className="ServiceImage" style={FourthImage}>
                        
                                <button className="serviceBtn">
                                <Link to='/Painters'>Painters</Link> 
                                </button>
                           

                        </div>

                    </div>
                    <div className="columnService">
                        <div className="ServiceImage" style={FifthImage}>
                       
                                <button className="serviceBtn">
                                    <Link to='/House Cleaners'>Cleaners</Link> 
                                    </button>
                       
                        </div>

                    </div>
                    <div className="columnService">
                        <div className="ServiceImage" style={SixthImage}>
                  
                                <button className="serviceBtn">
                                <Link to='/Gas Suppliers'>Gas Suppliers</Link>
                                </button>
                     
                        </div>

                    </div>
                </div>
                

            </div>
        )
    }
}

export default Service