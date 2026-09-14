export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} <strong>Jay.Dev</strong>. Built with{' '}
          <strong>Next.js</strong> &amp; <strong>React</strong>.
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Twitter
          </a>
          <a
            href="mailto:contact@jaydev.com"
            className="social-link"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
