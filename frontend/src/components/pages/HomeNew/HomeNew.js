import React, { Component } from 'react'
import './Home.css'

export class Home extends Component {
    render() {
        const myImage = {
            backgroundImage: "url(/background.png)",
            height: '100vh',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };

        return (
            <div className="ContainerHome">
 
                    <div className="image" style={myImage}>
                        <header>
                            <div className="glass-one-Home">
                                <h1 className="h-regular">TooFoo</h1>
                                <p className="discriptionHome">The Utility Service Providers</p>
                                <p className="about">Get the best service from us</p>
                            </div>
                        </header>
                    </div>
                </div>


        )
    }
}

export default Home