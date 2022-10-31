import React from 'react'
import {Link} from "react-router-dom";
import './Home.css'
import myspotify from './myspotify.png'
import Hero from './Hero.jpg'

class Home extends React.Component {

    render() {
        return(
                <div className="get-started">
                    <img id="background" src={Hero}/>
                    <img src={myspotify}/>
                    <p>It can be ourSpotify only if you</p>
                    <div className="box">
                        <div className="btn btn-one">
                            <Link to="/login">
                                <button className="btn btn-two">Get started</button>
                            </Link>
                        </div>
                    </div>
                </div>
        )
    }
}


export default Home