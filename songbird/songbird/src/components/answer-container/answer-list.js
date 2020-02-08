import React, { Component } from 'react';
import './answer-list.css';

class AnswerList extends Component {
    state = {
        isCorrectAnswer: false,
        maxPoints: 5,
        currentPage: 1
    };

    checkAnswer = (e) => {
        const target = e.target;
        const { increaseScore, showMusician, showWrongMusician, page } = this.props;

        if(this.state.currentPage !== page) {
            this.setState({
                isCorrectAnswer: false,
                currentPage: page,
                maxPoints: 5
            })
        }

        let { isCorrectAnswer,  maxPoints } = this.state;

        if(isCorrectAnswer && this.state.currentPage === page) return;

        if (target.classList.contains('right')) {
            this.setState({
                isCorrectAnswer: true,
            });

            showMusician(target.textContent);
            increaseScore(maxPoints);

            target.classList.remove('right');

            return target.classList.add('correct');
        } else {
            this.setState({
                maxPoints: this.state.maxPoints === 0 ? 0 : this.state.maxPoints - 1
            })

            showWrongMusician(target.textContent);
            return target.classList.add('wrong');
        }
    }

    render() {
        const { items, musicianId, page, isFinishQuiz } = this.props;
        let elements = null;

        if (!isFinishQuiz) {
            elements = items.map((item, index) => {
                const { id, name } = item;
                let className = page % 2 === 0 ? 'list-group-item' : 'list-group-item default';

                if(index === musicianId) {
                    className += ' right';
                }
        
                return (
                <li key={id} className={className} >
                { name }
                </li>
                );
            });
        }

        return (
            <ul className={ isFinishQuiz ? "list-group none" : "list-group" } 
                onClick={this.checkAnswer}>
                    { isFinishQuiz ? '' : elements }
            </ul>
        );
    }
};

export { AnswerList }
  
