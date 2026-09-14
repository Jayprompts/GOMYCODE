import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * UserList component:
 * - Fetches user list from JSONPlaceholder API using axios inside useEffect
 * - Stores fetched data in listOfUSer state using useState
 * - Maps through listOfUSer to render rich user profile cards
 * - Provides search filtering, loading skeleton, and error recovery
 */
const UserList = () => {
  // Required state: listOfUSer
  const [listOfUSer, setListOfUSer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch users from JSONPlaceholder API
  const fetchUsers = () => {
    setLoading(true);
    setError(null);

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUSer(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching users from JSONPlaceholder:', err);
        setError(err.message || 'Failed to load user directory');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Helper to generate initials from full name
  const getInitials = (name) => {
    if (!name) return 'U';
    const parts = name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s+/i, '').split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  // Curated avatar gradient palette
  const avatarGradients = [
    'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
    'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
    'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
  ];

  // Filter users based on search input
  const filteredUsers = listOfUSer.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(term) ||
      user.username.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.address?.city?.toLowerCase().includes(term) ||
      user.company?.name?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="userlist-section">
      {/* Search & Action Bar */}
      <div className="directory-controls">
        <div className="search-box">
          <svg
            className="search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search by name, @username, email, company, or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search users"
          />
          {searchTerm && (
            <button
              type="button"
              className="btn-clear"
              onClick={() => setSearchTerm('')}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className="action-buttons">
          <button
            type="button"
            className="btn-refresh"
            onClick={fetchUsers}
            disabled={loading}
            title="Reload users from API"
          >
            <svg
              className={loading ? 'spinning' : ''}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="23 4 23 10 17 10"></polyline>
              <polyline points="1 20 1 14 7 14"></polyline>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
            </svg>
            <span>{loading ? 'Fetching...' : 'Refresh API'}</span>
          </button>
        </div>
      </div>

      {/* Directory Metrics Bar */}
      {!loading && !error && (
        <div className="directory-status-bar">
          <span>
            Displaying <strong>{filteredUsers.length}</strong> of{' '}
            <strong>{listOfUSer.length}</strong> users
          </span>
          <span className="api-badge">
            <span className="api-dot"></span>
            jsonplaceholder.typicode.com/users
          </span>
        </div>
      )}

      {/* Loading Skeleton State */}
      {loading && (
        <div className="users-grid" aria-busy="true" aria-live="polite">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="user-card skeleton-card">
              <div className="skeleton-avatar"></div>
              <div className="skeleton-line skeleton-title"></div>
              <div className="skeleton-line skeleton-subtitle"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
            </div>
          ))}
        </div>
      )}

      {/* Error Alert State */}
      {error && !loading && (
        <div className="error-card" role="alert">
          <div className="error-icon">⚠️</div>
          <div className="error-content">
            <h3 className="error-title">Failed to load user directory</h3>
            <p className="error-desc">{error}</p>
            <button
              type="button"
              className="btn-retry"
              onClick={fetchUsers}
            >
              Retry Request
            </button>
          </div>
        </div>
      )}

      {/* Loaded Users Grid */}
      {!loading && !error && (
        <>
          {filteredUsers.length > 0 ? (
            <div className="users-grid">
              {/* Map through listOfUSer to display each user */}
              {filteredUsers.map((user, index) => {
                const gradient =
                  avatarGradients[index % avatarGradients.length];
                const initials = getInitials(user.name);

                return (
                  <article key={user.id} className="user-card">
                    {/* User Card Header */}
                    <div className="user-card-header">
                      <div
                        className="user-avatar"
                        style={{ background: gradient }}
                        aria-hidden="true"
                      >
                        {initials}
                      </div>

                      <div className="user-identity">
                        <h2 className="user-name">{user.name}</h2>
                        <div className="user-handle-row">
                          <span className="user-username">
                            @{user.username}
                          </span>
                          <span className="user-id-badge">ID #{user.id}</span>
                        </div>
                      </div>
                    </div>

                    {/* Company Info Box */}
                    {user.company && (
                      <div className="company-badge-box">
                        <div className="company-header">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                          </svg>
                          <span className="company-name">
                            {user.company.name}
                          </span>
                        </div>
                        {user.company.catchPhrase && (
                          <p className="company-phrase">
                            &ldquo;{user.company.catchPhrase}&rdquo;
                          </p>
                        )}
                      </div>
                    )}

                    {/* User Details / Contact Links */}
                    <div className="user-contact-list">
                      {/* Email */}
                      <a
                        href={`mailto:${user.email}`}
                        className="contact-item"
                        title={`Send email to ${user.email}`}
                      >
                        <span className="contact-icon email-icon">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </span>
                        <span className="contact-text">{user.email}</span>
                      </a>

                      {/* Phone */}
                      <a
                        href={`tel:${user.phone}`}
                        className="contact-item"
                        title={`Call ${user.phone}`}
                      >
                        <span className="contact-icon phone-icon">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </span>
                        <span className="contact-text">{user.phone}</span>
                      </a>

                      {/* Website */}
                      <a
                        href={`https://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                        title={`Visit website https://${user.website}`}
                      >
                        <span className="contact-icon web-icon">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                        </span>
                        <span className="contact-text">{user.website}</span>
                        <svg
                          className="external-icon"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>

                      {/* Address Location */}
                      {user.address && (
                        <div className="contact-item address-item">
                          <span className="contact-icon loc-icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                          </span>
                          <span className="contact-text">
                            {user.address.suite}, {user.address.street},{' '}
                            <strong>{user.address.city}</strong>{' '}
                            <span className="zipcode">
                              ({user.address.zipcode})
                            </span>
                          </span>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty-search-state">
              <div className="empty-icon">🔍</div>
              <h3 className="empty-title">No users matched &ldquo;{searchTerm}&rdquo;</h3>
              <p className="empty-desc">
                Try searching for another name, username, city, or company name.
              </p>
              <button
                type="button"
                className="btn-clear-search"
                onClick={() => setSearchTerm('')}
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserList;
