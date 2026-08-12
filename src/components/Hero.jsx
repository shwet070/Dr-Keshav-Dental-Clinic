import { Phone, Star, ShieldCheck } from 'lucide-react';
import treatmentRoom from '../assets/treatment-room-2.jpg';
import { clinic } from '../data/clinic';
import ToothMark from './ToothMark';
import useReveal from '../hooks/useReveal';
import './Hero.css';

export default function Hero() {
  const ref = useReveal();

  return (
    <section id="home" className="hero">
    <div className="container hero-inner" ref={ref}>

    {/* Doctor name — add ONLY this */}
    <div className="doctor-name reveal">
      <strong>Dr. Keshav </strong>
      <span>Dental & Implant Surgeon</span>
    </div>

    {/* Everything below this stays exactly as it was */}

  <div className="hero-copy reveal">
          <span className="eyebrow">
            <ToothMark className="eyebrow-tooth" />
            Trusted Dental Care in Raj Nagar Extension
          </span>
          <h1 className="hero-title">
            Confident Smiles
            <br />
            Start Here.
          </h1>
          <p className="hero-sub">
            Professional dental and implant care in a comfortable, modern
            clinic in Raj Nagar Extension, Ghaziabad.
          </p>

          <div className="hero-rating">
            <div className="stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span>
              <strong>{clinic.rating}/5</strong> from {clinic.reviews} Google
              Reviews
            </span>
          </div>

          <div className="hero-ctas">
            <a href="#appointment" className="btn btn-primary">
              Book an Appointment
            </a>
            <a href={`tel:${clinic.phoneTel}`} className="btn btn-outline">
              <Phone size={17} /> Call Clinic
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="hero-image-frame">
            <img
              src={treatmentRoom}
              alt="Dental treatment room with modern chairs at Dr Keshav Dental and Implant Clinic"
              loading="eager"
            />
          </div>

          <div className="hero-float-card">
            <div className="hero-float-icon">
              <ShieldCheck size={20} strokeWidth={2} />
            </div>
            <div className="hero-float-text">
              <div className="hero-float-rating">
                <Star size={13} fill="currentColor" strokeWidth={0} />
                <span>
                  <strong>{clinic.rating}/5</strong> Google Rating
                </span>
              </div>
              <p>{clinic.reviews} verified patient reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
