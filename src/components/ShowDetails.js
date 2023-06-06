import React, { useState, useEffect } from 'react';
import ShowList from './ShowList';
import ShowSummary from './ShowSummary';

const ShowDetails = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        setShows(data.map((item) => item.show));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  return (
    <div className="show-details">
      {selectedShow ? (
        <ShowSummary show={selectedShow} />
      ) : (
        <ShowList shows={shows} onSelectShow={handleSelectShow} />
      )}
    </div>
  );
};

export default ShowDetails;
