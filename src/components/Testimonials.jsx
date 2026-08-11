import { Star, Quote } from 'lucide-react';
import { clinic } from '../data/clinic';
import { testimonials } from '../data/testimonials';
import useReveal from '../hooks/useReveal';
import './Testimonials.css';

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section className="testimonials">
      <div className="container" ref={ref}>
        <div className="section-head center reveal">
          <span className="eyebrow">Trusted by Patients</span>
          <h2>What Our Patients Say</h2>
          <div className="testi-rating">
            <div className="stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p>
              <strong>{clinic.rating} / 5</strong> based on {clinic.reviews}{' '}
              Google Reviews
            </p>
          </div>
        </div>

        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div
              className="testi-card reveal"
              key={t.quote}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <Quote size={26} className="testi-quote-icon" />
              <p>&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
