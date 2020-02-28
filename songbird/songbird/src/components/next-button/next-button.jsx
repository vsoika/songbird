import React from "react";
import "./next-button.css";

const NextButton = ({
  activeBtn,
  nextCategory,
  isFinishQuiz,
  score,
  startQuizAgain
}) => {
  const maxScore = 30;
  const isWinner = score === maxScore;
  const text = isWinner
    ? ` and scored the maximum number of points (30).`
    : `. Your score is ${score} points out of 30`;

  const activeClass = activeBtn
    ? "btn btn-secondary next"
    : "btn btn-secondary";

  return (
    <>
      {isFinishQuiz ? (
        <>
          <div className="jumbotron">
            <h3>Congratulations!</h3>
            <p>You have completed the quiz {text} </p>
          </div>
          <button
            onClick={startQuizAgain}
            type="button"
            className="btn btn-secondary next"
          >
            TRY AGAIN
          </button>
        </>
      ) : (
        <button
          onClick={nextCategory}
          type="button"
          className={activeClass}
          disabled={!activeBtn}
        >
          NEXT LEVEL
        </button>
      )}
    </>
  );
};

export default NextButton;
