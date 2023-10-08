import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import MillenniumIMG from "../assets/Millennium.jpg";

const MillenniumPark = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3001/events/1");
        if (!response.ok) {
          console.error(
            `Error fetching events: ${response.status} - ${response.statusText}`
          );
          return;
        }
        const data = await response.json();
        console.log("Data received:", data);
        setEvents(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="venue-page">
      <div className="venue-info">
        <img src={MillenniumIMG} alt="Millennium.jpg" />
        <h2>Events at Millennium Park</h2>
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
    </div>
  );
};

export default MillenniumPark;
