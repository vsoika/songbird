import React from 'react';
// import ReactAudioPlayer from 'react-audio-player';
import './musician-container.css';
import incognitoLogo from './assets/2-t6CyzF_400x400.png';
import musicianData from './musicianData';

const MusicianContainer = ({ page, musicianId, musicianName }) => {
    const musician = musicianName ? musicianName : '*****';
    let logo = incognitoLogo;
    let alt = "incognito";

    if(musicianName) {
        logo = musicianData[page][musicianId].image;
        alt = musicianName;
    }

    return (
        <div className="musician-container">
            <img src={logo} alt={alt} className="musician-image"></img>
            <div>
            <h5>{musician}</h5>
                <audio src={musicianData[page][musicianId].audio} controls />
            </div>
        </div>
    );
};

export { MusicianContainer };
