import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

interface Movie {
  movieId: number;
  category: string | null;
  title: string | null;
  year: number | null;
  director: string | null;
  rating: string | null;
  edited: boolean | null;
  lentTo: string | null;
  notes: string | null;
}

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://localhost:4000/Values');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    fetchMovies();
  }, []);

  // Sort the resulting array alphabetically by title
  movies.sort((a, b) => (a.title || '').localeCompare(b.title || ''));

  return (
    <Container>
      <div className="my-4">
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m) => {
              return (
                <tr key={m.movieId}>
                  <td>{m.title}</td>
                  <td>{m.year}</td>
                  <td>{m.director}</td>
                  <td>{m.rating}</td>
                  <td>{m.category}</td>
                  <td>{m.edited ? 'Yes' : 'No'}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default MovieList;
