import React, { useState, useEffect } from "react";

const MillenniumPark = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(
        "http://localhost:3001/events/millenium-park"
      );
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="venue-page">
      <h2>Events at Millennium Park</h2>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id}>
            <h3>{event.name}</h3>
            <p>Price: {event.pricePoint}</p>
            <p>Great For: {event.audienceSize}</p>
            <p>Venue: {event.venue}</p>
            <p>Description: {event.description}</p>
          </div>
        ))}
      </div>
      {/* Add a link or button to navigate back to the home page */}
    </div>
  );
};

export default MillenniumPark;
