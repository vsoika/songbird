import React from 'react';
import './header.css';
import PropTypes from 'prop-types';

const Header = ({ page, score }) => {
  const categories = ['Rock', 'Alternative', 'Pop', 'Russian Rock', 'Russian Rap', 'Rap'];

  const listItems = categories.map((item, index) => {
    let className = 'list-item';

    if(index === page - 1) {
      className += ' active';
    }

    return (
      <li key={index} className={className}>
      { item }
      </li>
    );
  });
  
    return (
      <header className="header d-flex">
          <div className="top-panel d-flex justify-content-between">
              <div className="logo"></div>
              <h5>
                  Score:
                  <span className="score">{ score }</span>
              </h5>
          </div>
          <ul className="header-list">
            { listItems }
          </ul>
      </header>
    );
  };
  
  export { Header };