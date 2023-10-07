import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./Card.css";

const Card = (props) => {
  const [event, setEvent] = useState({
    id: 0,
    name: "",
    pricepoint: "",
    audienceSize: "",
    image: "",
    description: "",
    venue: "",
  });

  useEffect(() => {
    setEvent({
      id: props.id,
      name: props.name,
      pricepoint: props.pricepoint,
      audience: props.audience,
      image: props.image,
      description: props.description,
      venue: props.venue,
    });
  }, [props]);

  return (
    <div className="card">
      <div
        className="top-container"
        style={{ backgroundImage: `url(${event.image})` }}
      ></div>
      <div className="bottom-container">
        <h3>{event.name}</h3>
        <p>{"Price: " + event.pricepoint}</p>
        <p>{"Venue: " + event.venue}</p>
        {/* <Link to={"/venue/" + event.venue}>
          <a>Read More →</a>
        </Link> */}
      </div>
    </div>
  );
};

export default Card;
