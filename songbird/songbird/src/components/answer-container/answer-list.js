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
        const { increaseScore, showMusician, page } = this.props;

        if(this.state.currentPage !== page) {
            this.setState({
                isCorrectAnswer: false,
                currentPage: page
            })
        }

        let { isCorrectAnswer,  maxPoints } = this.state;

        if(isCorrectAnswer) return;

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
                maxPoints: this.state.maxPoints - 1
            })
           return target.classList.add('wrong');
        }
    }

    render() {
        const { items, musicianId, page } = this.props;
        const elements = items.map((item, index) => {
            const { id, name } = item;
            let className = page % 2 === 0 ? 'list-group-item' : 'list-group-default';

            if(index === musicianId) {
                className += ' right';
            }
    
            return (
            <li key={id} className={className} >
            { name }
            </li>
            );
        });
        
        return (<ul className="list-group" onClick={this.checkAnswer}>{ elements }</ul>);
    }
};

export { AnswerList }
  
