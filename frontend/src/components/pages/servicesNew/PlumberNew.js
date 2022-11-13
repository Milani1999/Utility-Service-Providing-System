import React, { Component } from 'react'
import  './Plumber.css'
import { Link } from 'react-router-dom';

// const { Finder } = require('../LogInFinder')

// var a = Finder.Find;
//alert(a);
export class Plumber extends Component {
    render() {

        const PlumberImage = {
            backgroundImage: "url(/PlumImg.jpg)",
            height: '500px',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin:'0',

        };

        const PlumberOne = {
            backgroundImage: "url(/PRepair.png)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
        const PlumberTwo = {
            backgroundImage: "url(/PlMaintain.png)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };


        return (

            <div className="PlumberHome">
                <div className="rowPlumber">
                    <div className='image' style={PlumberImage}>
                        <h1 className="h1-Plumber">Plumbing Services</h1>
                    </div>
                </div>
                <hr />
                <div className="rowPlumber">
                    <div className="columnPlumber">
                        <div className='Image' style={PlumberOne}>
                        </div>
                    </div>
                    <div className="column2Plumber">
                        <div className="titlePlumber">Installation Service</div>
                        <div className="aboutPlumber">
                            Nobody enjoys dripping piping and water pools in their houses. 
                            Plumbers are your go-to individuals in this situation. 
                            Plumbers ensure that your sewage system is established and functioning correctly in both 
                            business and residential environments. Can you imagine not being able to have safe drinkable 
                            and clean water for a day? Plumbers are experts in maintaining and repairing your home’s 
                            water systems, so you will not have to worry.

                        </div>
                        <form>
                        {/* {a==0 ?
                            <Link to="/worker"><button className='button'>Need Insatllation Service ? </button></Link>
                            :
                            <Link to="/login"><button className='button'>Need Insatllation Service ? </button></Link>
                        } */}
                            <Link to="/worker"><button className='button'>Need Insatllation Service ? </button></Link>

                        </form>
                        
                        
                    </div>
                </div>
                <hr />
                <div className="rowPlumber">
                    <div className="column2Plumber">
                        <div className="titlePlumber">Repair Services</div>
                        <div className="aboutPlumber">
                             Plumbing services for homes and offices range from small to significant repairs. 
                             Your plumbing system may be having leaks and obstructions, 
                             necessitating the need for plumbing experts to unclog or adjust the valve to prevent 
                             it from dripping.
                        </div>

                        {/* {a==0 ?
                            <Link to="/worker"><button className='button'>Need repair Service ? </button></Link>
                            :
                            <Link to="/login"><button className='button'>Need repair Service ? </button></Link>
                        } */}
                            <Link to="/worker"><button className='button'>Need repair Service ? </button></Link>
                        

                    </div>
                    <div className="columnPlumber">
                        <div className='Image' style={PlumberTwo}>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Plumber