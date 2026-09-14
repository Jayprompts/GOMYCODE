import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="nav-brand">
          <div className="nav-logo-circle">JS</div>
          <span className="nav-brand-text">Jay.Dev</span>
        </Link>

        <div className="nav-links">
          {navItems.map((item) => {
            const isActive = router.pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link href="/contact" className="nav-cta">
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
