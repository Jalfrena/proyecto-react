import { Link, useLocation, NavLink } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Menu, X } from '../icons';
import logo from '/logo-bancoguia.png';
import styles from './Navbar.module.css';

const navItems = [
  { path: '/', label: 'Inicio' },
  { path: '/rankings', label: 'Rankings' },
  { path: '/bancos', label: 'Bancos' },
  { path: '/guias', label: 'Guías' },
  { path: '/calculadora', label: 'Calculadora' },
  { path: '/encuesta', label: 'Encuesta' },
  { path: '/asistente', label: 'Asistente' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Navegación principal">
      <div className={styles.logoWrapper}>
        <Link to="/" className={styles.logo} aria-label="BancoGuía - Inicio">
          <img 
            src={logo} 
            alt="Logo oficial de BancoGuía" 
            className={styles.logoImg}
          />
          <span className={styles.logoText}>BancoGuía</span>
        </Link>
      </div>

      <button
        className={styles.mobileToggle}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-expanded={mobileOpen}
        aria-controls="nav-menu"
        aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={cn(styles.navLinksWrapper, mobileOpen && styles.open)} id="nav-menu">
        <ul className={styles.navLinks} role="menubar">
          {navItems.map((item) => (
            <li key={item.path} role="none">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(styles.navLink, isActive && styles.active)
                }
                role="menuitem"
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.mobileActions}>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>

      <div className={styles.desktopActions}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};

const cn = (...classes) => classes.filter(Boolean).join(' ');

export default Navbar;