import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import { navLinks, clinic } from '../data/clinic';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-brand" aria-label={`${clinic.name} — Home`}>
          <img src={logo} alt={`${clinic.name} logo`} className="navbar-logo" />
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href={`tel:${clinic.phoneTel}`} className="navbar-phone">
            <Phone size={16} strokeWidth={2} />
            {clinic.phoneDisplay}
          </a>
          <a href="#appointment" className="btn btn-primary btn-sm">
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`navbar-mobile ${open ? 'is-open' : ''}`}>
        <nav className="navbar-mobile-links" aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar-mobile-actions">
          <a
            href={`tel:${clinic.phoneTel}`}
            className="btn btn-outline"
            onClick={() => setOpen(false)}
          >
            <Phone size={16} /> Call Clinic
          </a>
          <a
            href="#appointment"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
