import { MapPin, Phone, Star, Navigation } from 'lucide-react';
import { clinic } from '../data/clinic';
import useReveal from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  const ref = useReveal();
  const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${clinic.mapsQuery}`;
  const mapsEmbed = `https://maps.google.com/maps?q=${clinic.mapsQuery}&output=embed`;

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner" ref={ref}>
        <div className="contact-details reveal">
          <span className="eyebrow">Get in Touch</span>
          <h2>Visit Our Clinic</h2>

          <div className="contact-card">
            <h3>{clinic.name}</h3>

            <div className="contact-row">
              <MapPin size={19} strokeWidth={2} />
              <p>
                {clinic.address.line1}
                <br />
                {clinic.address.line2}
                <br />
                {clinic.address.line3}
              </p>
            </div>

            <div className="contact-row">
              <Phone size={19} strokeWidth={2} />
              <a href={`tel:${clinic.phoneTel}`}>{clinic.phoneDisplay}</a>
            </div>

            <div className="contact-row">
              <Star size={19} strokeWidth={2} fill="currentColor" />
              <p>
                {clinic.rating} ★ &middot; {clinic.reviews} Reviews
              </p>
            </div>

            <div className="contact-actions">
              <a
                href={mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <Navigation size={15} /> Get Directions
              </a>
              <a href={`tel:${clinic.phoneTel}`} className="btn btn-outline btn-sm">
                <Phone size={15} /> Call Clinic
              </a>
              <a href="#appointment" className="btn btn-outline btn-sm">
                Book Appointment
              </a>
            </div>
          </div>
        </div>

        <div className="contact-map reveal">
          <iframe
            title={`Map showing location of ${clinic.name}`}
            src={mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
