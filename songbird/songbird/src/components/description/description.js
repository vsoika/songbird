import React, { Fragment } from 'react';
import AudioPlayer from "react-h5-audio-player";
import './description.css';
import musicianData from '../music-container/musicianData';

const Description = ({ selectedMusician, page, isFinishQuiz }) => {
    const currentData = musicianData[page - 1];
    const musician = selectedMusician ? selectedMusician : null;
    let element = null;

    if(!isFinishQuiz) {
      element = currentData.map((item, index) => {
            if(item.name === musician) {
                return (
                    <Fragment key={index}>
                        <div className="description-container">
                                <img src={item.image}></img>                        
                            <div className='musician-info'>
                                <h5>{item.name}</h5>
                                <span>{item.direction}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <AudioPlayer src={item.audio} showJumpControls={false} showLoopControl={false}></AudioPlayer>
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