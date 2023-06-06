import React from 'react';

const ShowSummary = ({ show }) => {
  return (
    <div className="show-summary fade-in">
      <h2 className="show-summary__name">{show.name}</h2>
      <p className="show-summary__summary" dangerouslySetInnerHTML={{ __html: show.summary }}></p>
      <button className="show-summary__button" onClick={() => console.log('Book ticket:', show.name)}>
        Book Ticket
      </button>
    </div>
  );
};

export default ShowSummary;
