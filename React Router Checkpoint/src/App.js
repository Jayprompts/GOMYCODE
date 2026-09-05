import React, { useState, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Container, Button, Badge } from 'react-bootstrap';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetail from './components/MovieDetail';

/**
 * Initial Movies Dataset with title, description, posterURL, trailerURL (embed), and rating
 */
const initialMovies = [
  {
    id: 1,
    title: "Inception",
    description: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is offered a chance at redemption: one last job could give him his life back if he can accomplish the impossible—inception.",
    posterURL: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
    trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    rating: 5
  },
  {
    id: 2,
    title: "Interstellar",
    description: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand, a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper and a team of researchers through the wormhole and across the galaxy to discover which of three planets could be mankind's new home.",
    posterURL: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E",
    rating: 5
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism as Gotham descends into anarchy.",
    posterURL: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
    trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY",
    rating: 5
  },
  {
    id: 4,
    title: "Dune: Part Two",
    description: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    posterURL: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&auto=format&fit=crop&q=80",
    trailerURL: "https://www.youtube.com/embed/Way9Dexny3w",
    rating: 4
  }
];

function App() {
  // Central movies collection state
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const navigate = useNavigate();

  // Memoized filtering by title and rating
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase().trim());
      const matchesRating = movie.rating >= ratingFilter;
      return matchesTitle && matchesRating;
    });
  }, [movies, titleFilter, ratingFilter]);

  // Add a new movie
  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [newMovie, ...prevMovies]);
  };

  // Reset filters
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
        padding: '2.5rem 1rem 5rem 1rem',
        fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
      }}
    >
      <Routes>
        {/* Home Route: Movie catalog, search/rating filters, and movie modal */}
        <Route
          path="/"
          element={
            <Container>
              {/* Header Banner */}
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="fs-3">🍿</span>
                    <h1 className="fw-bolder fs-3 text-white mb-0">CineStream — Movie Router</h1>
                  </div>
                  <p className="text-secondary small mb-0">
                    Click any movie card to watch its official trailer and read the full plot synopsis.
                  </p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <Badge bg="danger" className="px-3 py-2 rounded-pill fw-bold">
                    {movies.length} Movies Available
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

              {/* Filter Component */}
              <Filter
                titleFilter={titleFilter}
                onTitleChange={setTitleFilter}
                ratingFilter={ratingFilter}
                onRatingChange={setRatingFilter}
                onReset={handleResetFilters}
              />

              {/* Movies Grid Header */}
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <h2 className="fs-5 fw-bold text-light mb-0">
                  {titleFilter || ratingFilter > 0 ? `Filtered Results (${filteredMovies.length})` : 'All Movies'}
                </h2>
                <small className="text-muted">Showing {filteredMovies.length} of {movies.length}</small>
              </div>

              {/* MovieList Component */}
              <MovieList movies={filteredMovies} />

              {/* AddMovie Modal */}
              <AddMovie
                show={showAddModal}
                handleClose={() => setShowAddModal(false)}
                onAddMovie={handleAddMovie}
              />
            </Container>
          }
        />

        {/* Movie Details Route: Description, embedded video trailer, and back navigation */}
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />

        {/* Catch-all 404 Route */}
        <Route
          path="*"
          element={
            <Container className="py-5 text-center">
              <h2 className="text-white fw-bold mb-3">404 - Page Not Found</h2>
              <Button variant="danger" className="rounded-pill px-4" onClick={() => navigate('/')}>
                ← Go Back to Home
              </Button>
            </Container>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
