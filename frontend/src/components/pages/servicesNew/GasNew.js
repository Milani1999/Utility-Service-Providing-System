import React, { Component } from 'react'
import './Gas.css'
import { Link } from 'react-router-dom';

// const { Finder } = require('../LogInFinder')

// var a = Finder.Find;
export class Gas extends Component {
    render() {

        const GasImage = {
            backgroundImage: "url(/GasWall.jpg)",
            height: '500px',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin:'0',

        };

        const GasOne = {
            backgroundImage: "url(/GasLit.jpg)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin:'10% auto',
        };
        const GasTwo = {
            backgroundImage: "url(/GasL.jpg)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin:'10% auto',
        };


        return (

            <div className="GasHome">
                <div className="rowGas">
                    <div className='image' style={GasImage}>
                        <h1 className="h1-Gas">Gas services</h1>
                    </div>
                </div>
                <hr />
                <div className="rowGas">
                    <div className="columnGas">
                        <div className='Image' style={GasOne}>
                        </div>
                    </div>
                    <div className="column2Gas">
                        <div className="titleGas">Litro</div>
                        <div className="aboutGas">
                            We provide gas distibution service in your door step.
                            You can give your old cylinders and get a filled cyclinder.
                            We provide the service withing 1 hour after the payment.


                        </div>
                        <form>
                        {/* {a==0 ?
                            <Link to="/worker"><button className='button'>Book now </button></Link>
                            :
                            <Link to="/login"><button className='button'>Book now </button></Link>
                        } */}
                        </form>
                        <Link to="/worker"><button className='button'>Book now </button></Link>

                    
                    </div>
                </div>
                <hr />
                <div className="rowGas">
                    <div className="column2Gas">
                        <div className="titleGas">Laughs </div>
                        <div className="aboutGas">
                        We provide gas distibution service in your door step.
                            You can give your old cylinders and get a filled cyclinder.
                            We provide the service withing 1 hour after the payment.
                        </div>
                        <form>
                        {/* {a==0 ?
                            <Link to="/worker"><button className='button'>Book now </button></Link>
                            :
                            <Link to="/login"><button className='button'>Book now </button></Link>
                        } */}
                            <Link to="/worker"><button className='button'>Book now </button></Link>

                        </form>
                        

                    </div>
                    <div className="columnGas">
                        <div className='Image' style={GasTwo} >
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Gas