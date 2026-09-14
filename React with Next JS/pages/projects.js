import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';

export default function Projects({ projects }) {
  return (
    <div>
      <Head>
        <title>Featured Projects — Jay.Dev Portfolio</title>
      </Head>

      <header className="page-header">
        <div className="badge-tag">Portfolio Showcase</div>
        <h1 className="page-title">Featured Web Projects</h1>
        <p className="page-subtitle">
          Explore a collection of production-ready web applications demonstrating
          Next.js, React, Redux, TypeScript, and modern API integrations.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

/**
 * Server-Side Pre-Rendering (SSG via getStaticProps)
 * Pre-renders project portfolio data at build time.
 */
export async function getStaticProps() {
  const projectsData = [
    {
      id: '1',
      title: 'AI Studio Prompt Engine',
      description:
        'Full-stack AI prompt ideation and generation workbench leveraging generative models, real-time streaming, and responsive canvas.',
      image: '/images/project-ai.svg',
      tags: ['Next.js', 'React 19', 'TypeScript', 'Tailwind', 'AI API'],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      id: '2',
      title: 'ShopFlow Modern E-Commerce',
      description:
        'Performant headless e-commerce store with dynamic catalog filtering, cart state management, and Stripe checkout simulation.',
      image: '/images/project-ecommerce.svg',
      tags: ['Next.js', 'React', 'REST API', 'CSS Modules'],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      id: '3',
      title: 'TaskPulse Redux ToDo App',
      description:
        'Centralized state-driven task management application with filter pills (All, Done, Not Done), inline editing, and live stats.',
      image: '/images/project-taskpulse.svg',
      tags: ['React', 'Redux', 'Action Creators', 'Pure Reducers'],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      id: '4',
      title: 'CryptoWatch Analytics Dashboard',
      description:
        'Real-time cryptocurrency price tracker and market analytics dashboard with dynamic interactive charts and live API feeds.',
      image: '/images/project-crypto.svg',
      tags: ['Next.js', 'Axios', 'Chart.js', 'WebSockets'],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
  ];

  return {
    props: {
      projects: projectsData,
    },
  };
}
