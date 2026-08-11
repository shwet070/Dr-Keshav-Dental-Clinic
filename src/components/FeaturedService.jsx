import { Anchor } from 'lucide-react';
import treatment from '../assets/treatment.jpg';
import useReveal from '../hooks/useReveal';
import './FeaturedService.css';

export default function FeaturedService() {
  const ref = useReveal();

  return (
    <section className="featured">
      <div className="container featured-inner" ref={ref}>
        <div className="featured-copy reveal">
          <span className="eyebrow">
            <Anchor size={15} strokeWidth={2} /> Featured Treatment
          </span>
          <h2>Dental Implants</h2>
          <p>
            Dental implants are a modern option for replacing missing teeth,
            designed to look and function like natural teeth. As with any
            dental procedure, suitability depends on your individual oral
            health, which our team will assess and discuss with you during a
            consultation.
          </p>
          <a href="#appointment" className="btn btn-primary">
            Book a Consultation
          </a>
        </div>

        <div className="featured-image reveal">
          <img
            src={treatment}
            alt="Dental treatment being performed at Dr Keshav Dental and Implant Clinic"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
