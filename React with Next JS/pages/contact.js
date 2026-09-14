import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div>
      <Head>
        <title>Contact — Jay.Dev Portfolio</title>
      </Head>

      <header className="page-header">
        <div className="badge-tag">Let&apos;s Connect</div>
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">
          Have a project idea, question, or looking to collaborate? Drop me a message
          and I will get back to you within 24 hours.
        </p>
      </header>

      <div className="contact-grid">
        {/* Contact Form */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="success-banner" role="status">
              <h3>🎉 Message Received!</h3>
              <p>
                Thank you for reaching out, <strong>{formData.name}</strong>. I will get
                in touch with you at <strong>{formData.email}</strong> shortly.
              </p>
              <button
                type="button"
                className="btn-secondary"
                style={{ marginTop: '1rem' }}
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="e.g. Sarah Jenkins"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="e.g. sarah@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Project Consultation / Full-Time Role"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Tell me about your project scope, timeline, and requirements..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message ✈
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Details */}
        <div className="contact-info-card">
          <h2 className="card-title">Direct Information</h2>

          <div className="info-item">
            <div className="info-icon-box">✉</div>
            <div>
              <div className="info-label">Direct Email</div>
              <a href="mailto:contact@jaydev.com" className="info-value">
                contact@jaydev.com
              </a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box">📞</div>
            <div>
              <div className="info-label">Phone &amp; WhatsApp</div>
              <a href="tel:+1234567890" className="info-value">
                +1 (555) 234-5678
              </a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box">📍</div>
            <div>
              <div className="info-label">Location</div>
              <div className="info-value">San Francisco, CA • Remote Worldwide</div>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box">⚡</div>
            <div>
              <div className="info-label">Response Time</div>
              <div className="info-value">&lt; 24 Hours on Weekdays</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
