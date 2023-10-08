import React, { useState, useEffect } from "react";
// import "./Gifts.css";
import Card from "../components/Card";

const Events = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(props.data);
  }, [props]);

  return (
    <div className="events">
      <main>
        {events && events.length > 0 ? (
          events.map((event, index) => (
            <Card
              id={event.id}
              key={event.id}
              name={event.name}
              pricepoint={event.pricepoint}
              audiencesize={event.audienceSize}
              description={event.description}
              venue={event.venue}
            />
          ))
        ) : (
          <h3 className="noResults">{"No Events Yet 😞"}</h3>
        )}
      </main>
    </div>
  );
};

export default Events;
