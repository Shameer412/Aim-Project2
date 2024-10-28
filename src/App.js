import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css"; // All styles including animation

// Pages
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Service from "./pages/Service";

// Main App component
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as necessary

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
      {loading ? (
        <div className="balls">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <Router>
          <AnimatedRoutes />
        </Router>
      )}
    </div>
  );
};

// Separate component to handle animated routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
