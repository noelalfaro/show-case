import React, { useState, useEffect } from "react";

const GrantPark = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events specific to Grant Park from your backend
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:3001/events/grant-park");
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="venue-page">
      <h2>Events at Grant Park</h2>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id}>
            <h3>{event.name}</h3>
            <p>Price: {event.pricePoint}</p>
            <p>Great For: {event.audienceSize}</p>
            <p>Venue: {event.venue}</p>
            <p>Description: {event.description}</p>
            {/* Add any other event details you want to display */}
          </div>
        ))}
      </div>
      {/* Add a link or button to navigate back to the home page */}
    </div>
  );
};

export default GrantPark;
