import React, { Component } from "react";
import rightSound from "./assets/right.mp3";
import wrongSound from "./assets/wrong.mp3";
import "./answer-list.css";

class AnswerList extends Component {
  state = {
    maxPoints: 5,
    currentPage: null
  };

  checkAnswer = e => {
    const target = e.target;
    const {
      increaseScore,
      showMusician,
      showSelectedMusician,
      page
    } = this.props;
    let { maxPoints, currentPage } = this.state;
    const gotRightAnswer = currentPage === page;

    if (gotRightAnswer) {
      showSelectedMusician(target.textContent);
    } else if (target.classList.contains("right")) {
      this.playSoundByClick(rightSound);
      showMusician(target.textContent);
      showSelectedMusician(target.textContent);
      increaseScore(maxPoints);
      target.classList.remove("right");

      this.setState({
        currentPage: page,
        maxPoints: 5
      });

      return target.classList.add("correct");
    } else {
      if (target.classList.contains("wrong")) {
        return;
      } else {
        this.setState({
          maxPoints: this.state.maxPoints === 0 ? 0 : this.state.maxPoints - 1
        });

        this.playSoundByClick(wrongSound);
        showSelectedMusician(target.textContent);
        return target.classList.add("wrong");
      }
    }
  };

  playSoundByClick = src => {
    const sound = new Audio(src);
    sound.play();
  };

  render() {
    const { items, randomMusician, page, isFinishQuiz } = this.props;
    let elements = null;

    if (!isFinishQuiz) {
      elements = items.map((item, index) => {
        const { id, name } = item;
        let className =
          page % 2 === 0 ? "list-group-item" : "list-group-item default";

        if (index === randomMusician) {
          className += " right";
        }

        return (
          <li key={id} className={className}>
            {name}
          </li>
        );
      });
    }

    return (
      <div className="answer-list-container">
        <ul
          className={isFinishQuiz ? "list-group none" : "list-group"}
          onClick={this.checkAnswer}
        >
          {isFinishQuiz ? "" : elements}
        </ul>
      </div>
    );
  }
}

export { AnswerList };
