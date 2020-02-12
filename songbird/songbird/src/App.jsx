import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { MusicianContainer } from './components/music-container/musician-container';
import { AnswerList } from './components/answer-container/answer-list';
import musicianData from './components/musician-data/musicianData';
import NextButton from './components/next-button/next-button';
import Description from './components/description/description';
import { default as Confetti } from './components/confetti/confetti';

class App extends Component {
  state = {
    maxScore: 30,
    score: 0,
    page: 1,
    randomMusician: this.randomAudio(),
    rightMusician: null,
    selectedMusician: null,
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

  showSelectedMusician = (name) => {
    this.setState({
      selectedMusician: name
    });
  }

  showNextCategory = () => {
    const { page } = this.state;
    const maxCategories = 6;

    if (page === maxCategories) {
      this.setState({
        page: 0,
        isFinishQuiz: true,
        randomMusician: this.randomAudio(),
        rightMusician: null,
        selectedMusician: null
      })
    } else {
      this.setState({
        page: this.state.page + 1,
        randomMusician: this.randomAudio(),
        rightMusician: null,
        selectedMusician: null,
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
    const { page, score, rightMusician, isFinishQuiz, maxScore } = this.state;
    const isConfetti = isFinishQuiz && score === maxScore;

    return (
      <div className="App">
        { isConfetti ? <Confetti /> : null }
        <Header page={ page } score={ score } />
        <MusicianContainer { ...this.state } />
        <section className="music-container">
          <AnswerList
            { ...this.state }
            items={musicianData[page - 1]}
            increaseScore={this.handleIncreaseScore}
            showMusician={this.showRightMusician}
            showSelectedMusician={this.showSelectedMusician} />
          <Description {...this.state} />
          <NextButton
            score={score}
            activeBtn={rightMusician}
            nextCategory={this.showNextCategory}
            startQuizAgain={this.startQuizAgain}
            isFinishQuiz={isFinishQuiz} />
        </section>
      </div>
    );
  }
}

export default App;
