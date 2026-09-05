import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

/**
 * UserProfile Component
 * Displays user profile, status toggle, and like count.
 * Demonstrates clean prop receiving and functional state updates.
 */
function UserProfile({ user, onToggleStatus, onLike }) {
  if (!user) return null;

  return (
    <Card className="border-0 shadow-sm rounded-4 mb-4 bg-white overflow-hidden">
      <div
        style={{
          height: '100px',
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)'
        }}
      />
      <Card.Body className="p-4 pt-0 position-relative">
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-2 mb-3" style={{ marginTop: '-45px' }}>
          <div className="d-flex align-items-end gap-3">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="rounded-circle shadow border border-3 border-white"
              style={{ width: '85px', height: '85px', objectFit: 'cover' }}
            />
            <div>
              <h2 className="fs-4 fw-bolder text-dark mb-0">{user.name}</h2>
              <span className="text-muted small">{user.role}</span>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Badge
              bg={user.status === 'Active' ? 'success' : 'warning'}
              text={user.status === 'Active' ? 'white' : 'dark'}
              className="px-3 py-2 rounded-pill fw-semibold"
            >
              ● {user.status}
            </Badge>
          </div>
        </div>

        <p className="text-secondary small mb-3">
          {user.bio}
        </p>

        <div className="d-flex justify-content-between align-items-center pt-2 border-top">
          <Button
            variant="outline-primary"
            size="sm"
            className="rounded-pill px-3"
            onClick={onToggleStatus}
          >
            Switch to {user.status === 'Active' ? 'Busy' : 'Active'}
          </Button>

          <Button
            variant="light"
            size="sm"
            className="rounded-pill px-3 border"
            onClick={onLike}
            title="Like Profile"
          >
            ❤️ <strong className="ms-1">{user.likesCount} Likes</strong>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default UserProfile;
