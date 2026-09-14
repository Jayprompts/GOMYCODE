import Head from 'next/head';

export default function About() {
  const technicalSkills = [
    'Next.js 15',
    'React 19',
    'TypeScript',
    'Redux Toolkit',
    'Node.js',
    'Express',
    'Tailwind CSS',
    'REST APIs',
    'GraphQL',
    'PostgreSQL',
    'MongoDB',
    'Git & GitHub',
    'Vercel Deployment',
    'Jest & RTL',
  ];

  return (
    <div>
      <Head>
        <title>About Me — Jay.Dev Portfolio</title>
      </Head>

      <header className="page-header">
        <div className="badge-tag">Background &amp; Skills</div>
        <h1 className="page-title">About My Journey</h1>
        <p className="page-subtitle">
          Passionate about building intuitive, performant, and beautifully architected
          applications with modern web technologies.
        </p>
      </header>

      <div className="about-grid">
        {/* Bio Card */}
        <div className="about-card">
          <h2 className="card-title">🚀 Who I Am</h2>
          <p>
            I am a full-stack developer with a passion for transforming complex ideas into
            fast, user-friendly digital products. My journey spans building enterprise dashboards,
            collaborative real-time platforms, and interactive user experiences.
          </p>
          <p>
            I strongly believe in clean code, robust component architectures, comprehensive
            TypeScript typing, and continuous learning. When I&apos;m not coding, you can find me
            exploring new open-source libraries or mentoring aspiring developers.
          </p>
        </div>

        {/* Technical Skills Card */}
        <div className="about-card">
          <h2 className="card-title">⚡ Core Technologies</h2>
          <p>
            A curated snapshot of the languages, frameworks, and developer tools I leverage
            daily:
          </p>
          <div className="skills-tags">
            {technicalSkills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="about-card">
          <h2 className="card-title">💼 Experience Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-role">Lead Frontend Engineer</div>
              <div className="timeline-period">2024 — Present • CloudTech Studio</div>
              <p>
                Architected high-scale Next.js web applications, integrated server-side rendering,
                and boosted Core Web Vitals performance by 45%.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-role">Full-Stack React Developer</div>
              <div className="timeline-period">2022 — 2024 • Innovate Labs</div>
              <p>
                Developed interactive React dashboards, Redux state pipelines, and RESTful
                APIs for enterprise analytics clients.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Philosophy */}
        <div className="about-card">
          <h2 className="card-title">🎓 Education &amp; Philosophy</h2>
          <p>
            <strong>GoMyCode Full-Stack JavaScript Bootcamp</strong>
            <br />
            Deep immersion into modern JavaScript, React, Redux, Node.js, and Next.js architectures.
          </p>
          <p>
            <strong>Guiding Principle:</strong>
            <br />
            <em>
              &ldquo;Design for the user, engineer for performance, and build with maintainability
              in mind.&rdquo;
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
