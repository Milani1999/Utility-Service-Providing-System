import React, { Component } from 'react'
import './Ac.css'
import { Link } from 'react-router-dom';

//const { Finder } = require('../LogInFinder')

//var a = Finder.Find;
export class Ac extends Component {
    render() {

        const myImage = {
            backgroundImage: "url(/ACnew.jpg)",
            height: '500px',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            marginTop:'0px',

        };

        const imageOne = {
            backgroundImage: "url(/intall.png)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
        const imageTwo = {
            backgroundImage: "url(/repair.png)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };

        const imageThree = {
            backgroundImage: "url(/maintain.png)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };

        
        return (
            <div className="ServiceAC">
                <div className="rowAC">
                    <div className='ImageAC' style={myImage}>
                        <h1 className="h1-AC">Be Cool! Be happy!</h1>
                    </div>
                </div>
                <hr />
                <div className="rowAC">
                    <div className="columnAC">
                        <div className='ImageAC' style={imageOne}>
                        </div>
                    </div>
                    <div className="column2AC">
                        <div className="titleAC">AC Installation</div>
                        <div className="aboutAC">
                            Modern air conditioners are 20-50% larger in height, length, and width.
                            This allows for a larger coil which, in turn, makes the air conditioner more efficient.
                            Because of the larger size of modern air conditioners,
                            the current location of your existing air conditioner may not accommodate the new one.
                            Sometimes the air conditioner must be relocated,
                            particularly if there are state or manufacturer regulations on space clearances surrounding your unit.
                          
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
                <div className="rowAC">
                    <div className="column2AC">
                        <div className="titleAC">AC Repair</div>
                        <div className="aboutAC">
                            The AC Repair process is essentially the process of restoring an air conditioner to working order.
                            Though each unit requires a unique approach to service, the general method involves inspecting the various components of the system,
                            servicing what needs servicing and performing any repairs that are deemed necessary.
                            Once all parts are returned to their original working order,
                            you should have yourself a fully functional air conditioning unit.
                        </div>
                        {/* {a==0 ?
                            <Link to="/worker"><button className='button'>Need repair Service ? </button></Link>
                            :
                            <Link to="/login"><button className='button'>Need repair Service ? </button></Link>
                        } */}

                        <Link to="/worker"><button className='button'>Need repair Service ? </button></Link>

                        

                    </div>
                    <div className="columnAC">
                        <div className='ImageAC' style={imageTwo}>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="rowAC">
                    <div className="columnAC">
                        <div className='ImageAC' style={imageThree}>
                        </div>
                    </div>
                    <div className="column2AC">
                        <div className="titleAC">AC Maintenance</div>
                        <div className="aboutAC">
                            When your air conditioner needs more than regular maintenance,
                            such as when it does not reduce the indoor temperature to a comfortable level,
                            hire a professional service technician.
                            A well-trained technician will find and fix problems in your air conditioning system.
                        </div>
                        {/* {a==0 ?
                            <Link to="/worker"><button className='button'>Need Maintenance Service ? </button></Link>
                            :
                            <Link to="/login"><button className='button'>Need Maintenance Service ? </button></Link>
                        } */}
                            <Link to="/worker"><button className='button'>Need Maintenance Service ? </button></Link>

                        
                    </div>
                </div>


            </div>

        )
    }
}

export default Ac