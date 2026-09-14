export default function ProjectCard({ project }) {
  const { title, description, image, tags, demoUrl, githubUrl } = project;

  return (
    <article className="project-card">
      <div className="project-img-wrapper">
        <img
          src={image}
          alt={`${title} Preview`}
          className="project-img"
          loading="lazy"
        />
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-project-link"
          >
            Live Demo ↗
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-project-link"
          >
            Source Code
          </a>
        </div>
      </div>
    </article>
  );
}
