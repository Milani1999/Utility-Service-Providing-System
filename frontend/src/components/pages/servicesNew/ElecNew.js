import React, { Component } from 'react'
import './Elec.css'
import { Link } from 'react-router-dom';
// const { Finder } = require('../LogInFinder')

// var a = Finder.Find;
export class Elec extends Component {

    
    render() {

        const ElecImage = {
            backgroundImage: "url(/WallImages.jpg)",
            height: '500px',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin: '0',

        };

        const ElecOne = {
            backgroundImage: "url(/Elec.jpg)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
        const ElecTwo = {
            backgroundImage: "url(/Wiring.jpg)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
               };


        return (

            <div className="ElecHome">
                <div className="rowElec">
                    <div className='image' style={ElecImage}>
                    <h1 className="h1-Elec">Electric Services</h1>
                    </div>
                </div>
                <hr />
                <div className="rowElec">
                    <div className="columnElec">
                        <div className='ImageElec' style={ElecOne}>
                        </div>
                    </div>
                    <div className="column2Elec">
                        <div className="titleElec">Installation Service</div>
                        <div className="aboutElec">
                        Electrical wiring is an electrical installation of cabling and associated devices such as switches, 
                        distribution boards, sockets, and light fittings in a structure. Wiring is subject to safety standards
                        for design and installation. Allowable wire and cable types and sizes are specified according to the circuit 
                        operating voltage and electric current capability, with further restrictions on the environmental conditions, 
                        such as ambient temperature range, moisture levels, and exposure to sunlight and chemicals.

                        </div>
                        <form>
                        {/* {a==0 ?
                            <Link to="/worker"><button className='button'>Need Insatllation Service ?  </button></Link>
                            :
                            <Link to="/login"><button className='button'>Need Insatllation Service ? </button></Link>
                        } */}
                            <Link to="/worker"><button className='button'>Need Insatllation Service ?  </button></Link>

                        </form>
                    </div>
                </div>
                <hr />
                <div className="rowElec">
                    <div className="column2Elec">
                        <div className="titleElec">Repair Services</div>
                        <div className="aboutElec">
                            Electrical repairs involve a wide variety of services, ranging from major installation, 
                            or rewiring your home, to changing over a broken socket or breaker. 
                            It is often a difficult task to diagnose a particular electrical issue at home without 
                            the help of a trained professional. What are the repairs we do ?
                            <ul>
                                <li>Underground wiring systems</li>
                                <li>Grinders, Washing machines, Refrigerator</li>
                                <li>Phones</li>
                                <li>Laptops</li>
                                <li>Vaccum cleaners and more</li>

                            </ul>
                        </div>
                        <form>
                        {/* {a==0 ?
                            <Link to="/worker"><button className='button'>Need repair Service ?  </button></Link>
                            :
                            <Link to="/login"><button className='button'>Need repair Service ? </button></Link>
                        } */}
                            <Link to="/worker"><button className='button'>Need repair Service ?  </button></Link>

                        </form>
                        

                    </div>
                    <div className="columnElec">
                        <div className='ImageElec' style={ElecTwo} >
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Elec