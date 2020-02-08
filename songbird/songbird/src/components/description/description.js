import React, { Fragment } from 'react';
import AudioPlayer from "react-h5-audio-player";
import './description.css';
import musicianData from '../music-container/musicianData';

const Description = ({ wrongMusician, rightMusician, page, isFinishQuiz }) => {
    const currentData = musicianData[page - 1];
    const musician = rightMusician ? rightMusician : wrongMusician ? wrongMusician : null;
    let element = null;

    if(!isFinishQuiz) {
        element = currentData.map((item, index) => {
            if(item.name === musician) {
                return (
                    <Fragment key={index}>
                        <img src={item.image}></img>
                        <h5>{item.name}</h5>
                        <span>{item.direction}</span>
                        <AudioPlayer src={item.audio} ></AudioPlayer>
                        <span>{item.description}</span>
                    </Fragment>
                )
            }
        })
    }

    return (
        isFinishQuiz 
        ? null
        : <div className='description jumbotron'>{ musician ? element : 'Please, listen to the audio and select a musician.' }</div>
    )
}

export default Description;