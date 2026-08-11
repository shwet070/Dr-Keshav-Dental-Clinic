import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { clinic } from '../data/clinic';
import './MobileCTA.css';

export default function MobileCTA() {
  return (
    <div className="mobile-cta" role="navigation" aria-label="Quick actions">
      <a href={`tel:${clinic.phoneTel}`} className="mobile-cta-item">
        <Phone size={19} />
        <span>Call</span>
      </a>
      <a
        href={`https://wa.me/${clinic.whatsapp.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-cta-item"
      >
        <MessageCircle size={19} />
        <span>WhatsApp</span>
      </a>
      <a href="#appointment" className="mobile-cta-item mobile-cta-primary">
        <CalendarCheck size={19} />
        <span>Book</span>
      </a>
    </div>
  );
}
