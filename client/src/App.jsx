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
      element: <MainMenu />,
    },
    {
      path: "/1",
      element: <MillenniumPark />,
    },
    {
      path: "/2",
      element: <GrantPark />,
    },

    {
      path: "/3",
      element: <UnitedCenter />,
    },
    {
      path: "/4",
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
            <Link to="/">
              <h1>Showcase</h1>
            </Link>
          </div>
          <div className="header-right">
            <div className="venue-options">
              <Link to="/1">
                <button>Millennium Park</button>
              </Link>
              <Link to="/2">
                <button>Grant Park</button>
              </Link>
              <Link to="/3">
                <button>United Center</button>
              </Link>
              <Link to="/4">
                <button>Symphony Center</button>
              </Link>
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
