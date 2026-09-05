import React, { useState, useMemo } from 'react';
import { Container, Button, Badge } from 'react-bootstrap';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

/**
 * Initial Movies Dataset with title, description, posterURL, and rating
 */
const initialMovies = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    posterURL: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    id: 2,
    title: "Interstellar",
    description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft along with a team of researchers to find a new planet for humans.",
    posterURL: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterURL: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    id: 4,
    title: "Dune: Part Two",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family, facing a choice between love and the fate of the universe.",
    posterURL: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&auto=format&fit=crop&q=80",
    rating: 4
  }
];

function App() {
  // React Hooks: useState for movies collection and filter criteria
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);

  // React Hooks: useMemo for memoized filtering by title and rating
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase().trim());
      const matchesRating = movie.rating >= ratingFilter;
      return matchesTitle && matchesRating;
    });
  }, [movies, titleFilter, ratingFilter]);

  // Handler to add a new movie to state
  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [newMovie, ...prevMovies]);
  };

  // Handler to reset all filters
  const handleResetFilters = () => {
    setTitleFilter('');
    setRatingFilter(0);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0b0f19',
        color: '#f8fafc',
        padding: '3rem 1rem 5rem 1rem',
        fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
      }}
    >
      <Container>
        {/* Navigation / Header Banner */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <span className="fs-3">🍿</span>
              <h1 className="fw-bolder fs-3 text-white mb-0">CineStream — Movie Explorer</h1>
            </div>
            <p className="text-secondary small mb-0">
              Browse, filter, and add your favorite movies using React Hooks (<code>useState</code> &amp; <code>useMemo</code>).
            </p>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Badge bg="danger" className="px-3 py-2 rounded-pill fw-bold">
              {movies.length} Movies Total
            </Badge>
            <Button
              variant="danger"
              className="rounded-pill px-3 py-2 fw-bold shadow-sm d-flex align-items-center gap-2"
              onClick={() => setShowAddModal(true)}
            >
              <span>+ Add Movie</span>
            </Button>
          </div>
        </div>

        {/* Filter Component (title & rating) */}
        <Filter
          titleFilter={titleFilter}
          onTitleChange={setTitleFilter}
          ratingFilter={ratingFilter}
          onRatingChange={setRatingFilter}
          onReset={handleResetFilters}
        />

        {/* Movies List Section */}
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <h2 className="fs-5 fw-bold text-light mb-0">
            {titleFilter || ratingFilter > 0 ? `Filtered Results (${filteredMovies.length})` : 'All Movies'}
          </h2>
          <small className="text-muted">Showing {filteredMovies.length} of {movies.length}</small>
        </div>

        {/* MovieList Component */}
        <MovieList movies={filteredMovies} />

        {/* AddMovie Modal Component */}
        <AddMovie
          show={showAddModal}
          handleClose={() => setShowAddModal(false)}
          onAddMovie={handleAddMovie}
        />
      </Container>
    </div>
  );
}

export default App;
