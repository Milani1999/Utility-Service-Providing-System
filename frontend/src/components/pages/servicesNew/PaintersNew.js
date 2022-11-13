import React, { Component } from 'react'
import './Painters.css'
import { Link } from 'react-router-dom';

// const { Finder } = require('../LogInFinder')

// var a = Finder.Find;
export class Painters extends Component {
    render() {

        const myImage = {
            backgroundImage: "url(/WallPaint.png)",
            height: '500px',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',

        };

        const imageOne = {
            backgroundImage: "url(/HousePaint.jpg)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin: '7% auto',
        };
        const imageTwo = {
            backgroundImage: "url(/ComPainting.jpg)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin: '7% auto',
        };

        const imageThree = {
            backgroundImage: "url(/FurnPainting.jpg)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin: '8% auto',
        };


        return (

            <div className="PainterHome">
                <div className="rowPainter">
                    <div className='image' style={myImage}>
                        <h1 className="h1-Plumber">Colour your thoughts!</h1>
                    </div>
                </div>
                <hr />
                <div className="rowPainter">
                    <div className="columnPainter">
                        <div className='Image' style={imageOne}>
                        </div>
                    </div>
                    <div className="column2Painter">
                        <div className="titlePainter">House Painting</div>
                        <div className="aboutPlumber">
                        One of the fastest, most effective ways to personalize your living space is with color. 
                        Bright, muted, cheerful, elegant—whatever your mood, personality, or preference might be, 
                        there’s a paint color to match! Our Toofoo Painting teams specialize in making houses feel 
                        like homes through interior and exterior home painting services. If you're looking to 
                        transform your home, it's time to contact Toofoo.
                          
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
                </div>
                <hr />
                <div className="rowPainter">
                    <div className="column2Painter">
                        <div className="titlePainter">Commercial Building Painting</div>
                        <div className="aboutPlumber">
                        Want to give a refurbished and attractive look to your commercial property while raising its 
                        worth? Paint it! This might be an unexpected idea for many, but it needs to be done from time 
                        to time. You’re thinking how often should one paint a commercial building? Essentially, it 
                        depends upon the nature of your commercial building and also the standard of paint used 
                        previously.
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
                    <div className="columnPainter">
                        <div className='Image' style={imageTwo}>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="rowPainter">
                    <div className="columnPainter">
                        <div className='Image' style={imageThree}>
                        </div>
                    </div>
                    <div className="column2Painter">
                        <div className="titlePainter">Furniture Painting</div>
                        <div className="aboutPlumber">
                        Looking to bring new life to an older piece of wood furniture? 
                        A new coat of paint is an easy way to refresh its look and make it into your own custom piece. 
                        Whether you have white paint or a fun color in mind, chalk paint or semi-gloss, 
                        you'll want to make sure your project looks as professional as it can by the end 
                        to sit pretty on your patio or indoors.
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
                </div>


            </div>

        )
    }
}

export default Painters