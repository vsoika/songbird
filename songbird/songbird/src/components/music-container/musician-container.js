import React from 'react';
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import './musician-container.css';
import incognitoLogo from './assets/2-t6CyzF_400x400.png';
import musicianData from './musicianData';

const MusicianContainer = ({ page, randomMusician, rightMusician, isFinishQuiz }) => {
    const musician = rightMusician ? rightMusician : '*****';
    let logo = incognitoLogo;
    let alt = "incognito";

    if(rightMusician && !isFinishQuiz) {
        logo = musicianData[page - 1][randomMusician].image;
        alt = rightMusician;
    }

    return (
        isFinishQuiz 
        ? null 
        : <div className="musician-container">
            <img src={logo} alt={alt} className="musician-image"></img>
            <div>
                <h5>{ musician }</h5>
                <AudioPlayer controls src={ musicianData[page - 1][randomMusician].audio }  autoPlayAfterSrcChange={false} showJumpControls={false} showLoopControl={false} />
            </div>
          </div>
    );
};

export { MusicianContainer };
