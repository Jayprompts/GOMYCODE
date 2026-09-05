import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player';
import players from './players';

/**
 * PlayersList component maps through players data and renders Player cards
 */
function PlayersList() {
  return (
    <Container className="py-4">
      <Row className="g-4 justify-content-center">
        {players.map((player) => (
          <Col key={player.id || player.name} xs={12} sm={6} md={6} lg={3} className="d-flex justify-content-center">
            {/* Passing all player attributes as props using the spread operator */}
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlayersList;
