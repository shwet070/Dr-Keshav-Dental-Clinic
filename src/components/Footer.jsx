import { Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';
import { clinic, navLinks } from '../data/clinic';
import { services } from '../data/services';
import './Footer.css';

const footerServices = services.slice(0, 6).map((s) => s.title);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col footer-brand">
          <img src={logo} alt={`${clinic.name} logo`} className="footer-logo" />
          <p>
            Professional dental and implant care in a comfortable, modern
            clinic in Raj Nagar Extension, Ghaziabad.
          </p>
          <a href="#appointment" className="btn btn-primary btn-sm">
            Book Appointment
          </a>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {footerServices.map((s) => (
              <li key={s}>
                <a href="#services">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} />
              <span>
                {clinic.address.line1} {clinic.address.line2}{' '}
                {clinic.address.line3}
              </span>
            </li>
            <li>
              <Phone size={16} />
              <a href={`tel:${clinic.phoneTel}`}>{clinic.phoneDisplay}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; 2026 {clinic.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
