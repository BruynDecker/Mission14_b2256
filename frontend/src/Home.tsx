import React from 'react';
import { Container} from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <h1>Welcome to The Joel Hilton Film Collection!</h1>
      <p>This is a collection of my favorite movies, TV shows, and more.</p>
      <img src="/Joel_headshot.jpg" alt="Joel Hilton" className="img-fluid" />
    </Container>

  );
}

export default Home;

