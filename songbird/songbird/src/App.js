import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { MusicianContainer } from './components/music-container/musician-container';
import { AnswerList } from './components/answer-container/answer-list';
import musicianData from './components/music-container/musicianData';
import NextButton from './components/next-button/next-button';

class App extends Component {
  state = {
    score: 0,
    musicianData: musicianData,
    page: 1,
    randomMusician: this.randomAudio(),
    selectedMusician: null
  }

  randomAudio() {
    return Math.floor(6 * Math.random());
  }
  
  handleIncreaseScore = (maxPoints) => {
    this.setState({
        score: this.state.score + maxPoints
    });
  }

  showSelectedMusician = (name) => {
    this.setState({
        selectedMusician: name
    });
  }

  showNextCategory = () => {
    const { page } = this.state;
    const maxCategories = 6;

    if(page === maxCategories) {
      return 'game over';
    } else {
      this.setState({
        page: this.state.page + 1,
        randomMusician: this.randomAudio(),
        selectedMusician: null
      })
    }
  }

  render() {
    const { musicianData, page, randomMusician, score, selectedMusician } = this.state;

     return (
      <div className="App">
        <Header 
          page={page} 
          score={score}/>
        <MusicianContainer 
          musicianId={randomMusician} 
          page={page} 
          musicianName={selectedMusician}/>
        <div className="music-container">
          <AnswerList 
            page={page}
            items={musicianData[page]} 
            musicianId={randomMusician} 
            increaseScore={this.handleIncreaseScore} 
            showMusician={this.showSelectedMusician} />
          <NextButton activeBtn={selectedMusician} nextCategory={this.showNextCategory}/>
        </div>
      </div>
    );
  }
}

export default App;
