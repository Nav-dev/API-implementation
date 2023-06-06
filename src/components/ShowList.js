import React from 'react';

const ShowList = ({ shows, onSelectShow }) => {
  return (
    <div className="show-list fade-in">
      <h2 className="show-list__title">TV Shows</h2>
      <ul className="show-list__list">
        {shows.map((show) => (
          <li key={show.id} className="show-list__item slide-up">
            <h3 className="show-list__name">{show.name}</h3>
            <p className="show-list__summary">{show.summary}</p>
            <button className="show-list__button" onClick={() => onSelectShow(show)}>
              View Summary
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
