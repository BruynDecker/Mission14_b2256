import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import Router, Route, Link, and Routes from react-router-dom
import Home from './Home'; // Import Home component
import Podcasts from './Podcasts'; // Import Podcasts component
import MovieList from './MovieCollection'; // Import MovieList component
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap'; // Import Container, Nav, Navbar, and NavItem from react-bootstrap

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            {/* Navbar Brand */}
            <Navbar.Brand as={Link} to="/">
              Joel's Movies
            </Navbar.Brand>
            {/* Navbar Toggle */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* Navbar Collapse */}
            <Navbar.Collapse id="basic-navbar-nav">
              {/* Navbar Nav */}
              <Nav className="me-auto">
                {/* Home Nav Item */}
                <NavItem>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                </NavItem>
                {/* Podcasts Nav Item */}
                <NavItem>
                  <Nav.Link as={Link} to="/podcasts">
                    My Podcasts
                  </Nav.Link>
                </NavItem>
                {/* Movie Collection Nav Item */}
                <NavItem>
                  <Nav.Link as={Link} to="/movie-collection">
                    Movie Collection
                  </Nav.Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content */}
        <main>
          <Container>
            {/* Routes */}
            <Routes>
              {/* Home Route */}
              <Route path="/" element={<Home />} />
              {/* Podcasts Route */}
              <Route path="/podcasts" element={<Podcasts />} />
              {/* Movie Collection Route */}
              <Route path="/movie-collection" element={<MovieList />} />
            </Routes>
          </Container>
        </main>

        {/* Footer */}
        <footer className="text-center mt-5">
          <hr />
          <small>
            &copy; 2023 - Mission07_b2256
          </small>
        </footer>
      </div>
    </Router>
  );
}

export default App;
