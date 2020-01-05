import React from 'react'
import classes from '../Elements/Elements.module.css'
import video from '../../video/NEFFEX - Cold ❄️[Copyright Free].webm'

function Elements(props) {
    return (
        <div className={classes.Elements}>
            <div className={classes.Text}>
                <p>lorem Ipsum Dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className={classes.Btn}>
                    <div className={classes.Buy__now}>Buy now</div>
                    <div className={classes.Try__for__free}>Try for free</div>
                </div>
            </div>
            <div className={classes.Video}>
                <video controls src={video}></video>
            </div>
        </div>
    )
}
export default Elements