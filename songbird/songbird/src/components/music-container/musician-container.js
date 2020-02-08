import React from 'react';
import AudioPlayer from "react-h5-audio-player";
import './musician-container.css';
import incognitoLogo from './assets/2-t6CyzF_400x400.png';
import musicianData from './musicianData';

const MusicianContainer = ({ page, musicianId, musicianName, isFinishQuiz }) => {
    const musician = musicianName ? musicianName : '*****';
    let logo = incognitoLogo;
    let alt = "incognito";

    if(musicianName && !isFinishQuiz) {
        logo = musicianData[page - 1][musicianId].image;
        alt = musicianName;
    }

    return (
        isFinishQuiz 
        ? null 
        : <div className="musician-container">
            <img src={logo} alt={alt} className="musician-image"></img>
            <div>
            <h5>{musician}</h5>
                <AudioPlayer src={musicianData[page - 1][musicianId].audio }/>
            </div>
          </div>
    );
};

export { MusicianContainer };
