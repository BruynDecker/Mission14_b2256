// Import required React hooks and Bootstrap components
import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

// Define the Movie interface for type-checking
interface Movie {
  movieId: number;
  category: string | null;
  title: string | null;
  year: number | null;
  director: string | null;
  rating: string | null;
  edited: string | null;
  lentTo: string | null;
  notes: string | null;
}

// Define the MovieList functional component
function MovieList() {
  // Declare state variable for movies and initialize with an empty array
  const [movies, setMovies] = useState<Movie[]>([]);

  // Fetch movie data when the component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetch movie data from the server
        const response = await fetch('https://localhost:4000/Values');
        // Parse response data as JSON
        const data = await response.json();
        // Set movies state with the fetched data
        setMovies(data);
      } catch (error) {
        // Log error if there's an issue fetching data
        console.error('Error fetching movie data:', error);
      }
    };
    // Invoke the fetchMovies function
    fetchMovies();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Render the component
  return (
    <Container>
      <div className="my-4">
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {/* Render table header row */}
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {/* Iterate over movies, filter by "edited" property, sort by title, and render table rows */}
            {movies.filter(movie => movie.edited === 'Yes')
            .sort((a, b) => (a.title || '').localeCompare(b.title || ''))
            .map((m) => {
              return (
                <tr key={m.movieId}>
                  <td>{m.title}</td>
                  <td>{m.year}</td>
                  <td>{m.director}</td>
                  <td>{m.rating}</td>
                  <td>{m.category}</td>
                  <td>{m.edited}</td>
                  <td>{m.lentTo}</td>
                  <td>{m.notes}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

// Export the MovieList component as default
export default MovieList;
