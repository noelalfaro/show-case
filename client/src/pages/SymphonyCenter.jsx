import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import SymphonyIMG from "../assets/symphony.jpg";

const SymphonyCenter = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:3001/events/4");
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="venue-page">
      <div className="venue-info">
        <img src={SymphonyIMG} alt="symphony.jpg" />
        <h2>Events at Symphony Center</h2>
      </div>

      <div className="event-list">
        {events.length === 0 ? (
          <p>No events to display</p>
        ) : (
          events.map((event) => (
            <Card
              key={event.id}
              name={event.name}
              pricepoint={event.pricepoint}
              audiencesize={event.audiencesize}
              venue={event.venue}
              description={event.description}
            />
          ))
        )}
      </div>
      {/* Add a link or button to navigate back to the home page */}
    </div>
  );
};

export default SymphonyCenter;
