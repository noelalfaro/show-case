import "./App.css";
import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { Link } from "react-router-dom";
import GrantPark from "./pages/GrantPark";
import MillenniumPark from "./pages/MillenniumPark";
import UnitedCenter from "./pages/UnitedCenter";
import SymphonyCenter from "./pages/SymphonyCenter";
import PageNotFound from "./pages/PageNotFound";
import Events from "./pages/Events";
import MainMenu from "./pages/MainMenu";

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:3001/events");
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <Events data={events} />,
    },
    {
      path: "/grant-park",
      element: <GrantPark />,
    },
    {
      path: "/millenium-park",
      element: <MillenniumPark />,
    },
    {
      path: "/united-center",
      element: <UnitedCenter />,
    },
    {
      path: "/symphony-center",
      element: <SymphonyCenter />,
    },
    {
      path: "/*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <div className="header-left">
            <h1>Showcase</h1>
          </div>
          <div className="header-right">
            <div className="venue-options">
              <Link to="/grant-park">Grant Park</Link>
              <Link to="/millenium-park">Millennium Park</Link>
              <Link to="/united-center">United Center</Link>
              <Link to="/symphony-center">Symphony Center</Link>
            </div>
          </div>
        </div>
      </header>
      {/* {events.map((event) => (
        <div key={event.id}>{event.name}</div>
      ))} */}
      {element}
    </div>
  );
};

export default App;
