import React, { Component, useState,useEffect } from 'react'
import './Cleaning.css'
import { Link, useHistory, } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { LoggedInContext } from '../LogInAuthFind';
export class Cleaning extends Component {
    
  
    render() {
  
        const CleanImage = {
            backgroundImage: "url(/CleanImage.png)",
            height: '500px',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin:'0',

        };

        const CleanOne = {
            backgroundImage: "url(/CleanHouse.png)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin:'25% auto',
        };
        const CleanTwo = {
            backgroundImage: "url(/GardenClean.jpg)",
            height: '200px',
            width: '400px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin:'30% auto',
        };

        

        return (
            
            <div className="CleanHome">
                <div className="rowClean">
                    <div className='image' style={CleanImage}>
                        <h1 className="h1-clean">Keep your place clean and neat</h1>
                    </div>
                </div>
                <hr />
                <div className="rowClean">
                    <div className="columnClean">
                        <div className='ImageClean' style={CleanOne}>
                        </div>
                    </div>
                    <div className="column2Clean">
                        <div className="titleClean">House Cleaning</div>
                        <div className="aboutClean">
                            Housecleaning makes it easier to see the floor and furniture without clutter in the way.
                            It also leaves fewer places for spiders and insects to live and removes dust so that people
                            in the house can breathe more easily. Housecleaning may be sweeping the floor with a broom,
                            cleaning rugs with a vacuum cleaner, cleaning clothes and putting them away, and washing windows.
                            Washing a sponge, squeezing out the water, and placing it on a dish rack to dry is also part of
                            housecleaning. What areas we clean?
                            <ul>
                                <li>Living room</li>
                                <li>Dining Room</li>
                                <li>Bed rooms</li>
                                <li>Kitchen</li>
                                <li>Washrooms</li>
                                <li>Toilets</li>
                            </ul>

                        </div>
                        <form>
                        
                            
                            <Link to="/worker"><button className='button'>Book now </button></Link>
                            
                       
                            {/* <Link to="/worker"><button className='button'>Book now </button></Link> */}


                        </form>
                    </div>
                </div>
                <hr />
                <div className="rowClean">
                    <div className="column2Clean">
                        <div className="titleClean">Garden Cleaning</div>
                        <div className="aboutClean">
                            Fall garden cleanup can make spring gardening a treat instead of a chore. Garden clean up
                            can also prevent pests, weed seeds, and diseases from overwintering and causing problems
                            when temperatures warm. Cleaning out the garden for winter also allows you to spend more
                            time on the fun aspects of gardening in spring and provides a clean slate for perennials and
                            vegetables to grow.
                        </div>
                        <ul>
                            <li>Sweeping</li>
                            <li>Planting</li>
                            <li>Cutting grasses</li>
                            <li>Watering</li>
                            <li>Arranging</li>
                        </ul>

                        <form>
                        {/* {a==0 ?
                            <Link to="/worker"><button className='button'>Book now </button></Link>
                            :
                            <Link to="/login"><button className='button'>Book now </button></Link>
                        } */}
                            <Link to="/worker"><button className='button'>Book now </button></Link>

                        </form>

                    </div>
                    <div className="columnClean">
                        <div className='ImageClean' style={CleanTwo} >
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}

export default Cleaning