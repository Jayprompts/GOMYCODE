import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge-tag">
            <span className="badge-dot"></span>
            Available for New Projects
          </div>

          <h1 className="hero-title">
            Crafting Exceptional <br />
            <span className="gradient-text">Web Experiences</span> with Next.js
          </h1>

          <p className="hero-description">
            Hi, I&apos;m Jay — a Full-Stack Software Engineer specializing in modern React,
            Next.js, TypeScript, and high-performance cloud architectures. Welcome to my
            portfolio checkpoint!
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="btn-primary">
              View My Projects ↗
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-wrapper">
            <img
              src="/images/profile.svg"
              alt="Jay - Software Engineer"
              className="avatar-img"
            />
          </div>
        </div>
      </section>

      {/* Featured Statistics & Tech Stack Cards */}
      <section className="stats-grid" aria-label="Portfolio Metrics">
        <div className="stat-card">
          <div className="stat-number">25+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">99.8%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">3+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">100%</div>
          <div className="stat-label">Next.js &amp; React Native</div>
        </div>
      </section>
    </div>
  );
}
