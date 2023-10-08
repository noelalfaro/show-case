import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
// import "./Card.css";
const Card = (props) => {
  const [event, setEvent] = useState({
    id: 0,
    name: "",
    pricepoint: "",
    audiencesize: "",
    description: "",
    venue: "",
  });

  useEffect(() => {
    setEvent({
      id: props.id,
      name: props.name,
      pricepoint: props.pricepoint,
      audiencesize: props.audiencesize,
      description: props.description,
      venue: props.venue,
    });
  }, [props]);

  return (
    <div className="card">
      <div className="top-container"></div>
      <div className="bottom-container">
        <h3>{event.name}</h3>
        <p>{"Price: " + event.pricepoint}</p>
        <p>{"Venue: " + event.venue}</p>
        <p>{event.description}</p>
        <b>{event.audiencesize}</b>
        {/* <Link to={"/venue/" + event.venue}>
          <a>Read More →</a>
        </Link> */}
      </div>
    </div>
  );
};

export default Card;
