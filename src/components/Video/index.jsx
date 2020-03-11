import React, { Component } from 'react'
import Player from "react-player";
import './style.css'

export class Video extends Component {
    render() {
        return (
            <div className="video_div">
               <center> 
                   <Player width="90%" url="https://www.youtube.com/watch?v=Odg1BIfq60E"
                 autoPlay muted />
                 </center>
            </div>
        )
    }
}

export default Video
