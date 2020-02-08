import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { MusicianContainer } from './components/music-container/musician-container';
import { AnswerList } from './components/answer-container/answer-list';
import musicianData from './components/music-container/musicianData';
import NextButton from './components/next-button/next-button';
import Description from './components/description/description';

class App extends Component {
  state = {
    score: 0,
    musicianData: musicianData,
    page: 1,
    randomMusician: this.randomAudio(),
    rightMusician: null,
    wrongMusician: null,
    isFinishQuiz: false
  }

  randomAudio() {
    return Math.floor(6 * Math.random());
  }

  handleIncreaseScore = (maxPoints) => {
    this.setState({
      score: this.state.score + maxPoints
    });
  }

  showRightMusician = (name) => {
    this.setState({
      rightMusician: name
    });
  }

  showWrongMusician = (name) => {
    this.setState({
      wrongMusician: name
    });
  }

  showNextCategory = () => {
    const { page } = this.state;
    const maxCategories = 6;

    if (page === maxCategories) {
      this.setState({
        page: 0,
        isFinishQuiz: true
      })
    } else {
      this.setState({
        page: this.state.page + 1,
        randomMusician: this.randomAudio(),
        rightMusician: null,
        wrongMusician: null,
        isFinishQuiz: false
      })
    }
  }

  startQuizAgain = () => {
    this.setState({
      score: 0,
      page: 1,
      randomMusician: this.randomAudio(),
      isFinishQuiz: false
    })
  }

  render() {
    const { musicianData, page, randomMusician, score, rightMusician, isFinishQuiz } = this.state;

    return (
      <div className="App">
        <Header
          page={page}
          score={score} />
        <MusicianContainer
          isFinishQuiz={isFinishQuiz}
          musicianId={randomMusician}
          page={page}
          musicianName={rightMusician} />
        <div className="music-container">
          <AnswerList
            page={page}
            isFinishQuiz={isFinishQuiz}
            items={musicianData[page - 1]}
            musicianId={randomMusician}
            increaseScore={this.handleIncreaseScore}
            showMusician={this.showRightMusician}
            showWrongMusician={this.showWrongMusician} />
          <Description {...this.state} />
          <NextButton
            score={score}
            activeBtn={rightMusician}
            nextCategory={this.showNextCategory}
            startQuizAgain={this.startQuizAgain}
            isFinishQuiz={isFinishQuiz} />
        </div>
      </div>
    );
  }
}

export default App;
