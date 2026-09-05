import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

/**
 * AddMovie Component
 * Modal form allowing the user to add a new movie with title, description, posterURL, and rating.
 */
function AddMovie({ show, handleClose, onAddMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !posterURL.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    const newMovie = {
      id: 'movie-' + Date.now(),
      title: title.trim(),
      description: description.trim(),
      posterURL: posterURL.trim(),
      rating: Number(rating)
    };

    onAddMovie(newMovie);

    // Reset Form & Close
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(5);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered contentClassName="bg-dark text-light border border-secondary rounded-4">
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title className="fw-bold fs-5 text-white">🎬 Add New Movie</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body className="d-flex flex-column gap-3">
          <Form.Group>
            <Form.Label className="small fw-semibold text-secondary">Movie Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Oppenheimer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="bg-secondary text-white border-0"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="small fw-semibold text-secondary">Poster URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://..."
              value={posterURL}
              onChange={(e) => setPosterURL(e.target.value)}
              required
              className="bg-secondary text-white border-0"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="small fw-semibold text-secondary">Rating (1 to 5 Stars)</Form.Label>
            <Form.Select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="bg-secondary text-white border-0"
            >
              <option value="5">★★★★★ (5 Stars - Masterpiece)</option>
              <option value="4">★★★★☆ (4 Stars - Great)</option>
              <option value="3">★★★☆☆ (3 Stars - Good)</option>
              <option value="2">★★☆☆☆ (2 Stars - Fair)</option>
              <option value="1">★☆☆☆☆ (1 Star - Poor)</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label className="small fw-semibold text-secondary">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Brief summary of the plot..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="bg-secondary text-white border-0"
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer className="border-secondary">
          <Button variant="outline-light" onClick={handleClose} className="rounded-pill px-3">
            Cancel
          </Button>
          <Button variant="danger" type="submit" className="rounded-pill px-4 fw-bold">
            Add Movie
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddMovie;
