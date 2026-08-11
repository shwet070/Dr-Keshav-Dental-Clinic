import {
  HeartHandshake,
  Sparkles,
  LayoutGrid,
  Users,
  MapPin,
  CalendarCheck,
} from 'lucide-react';
import useReveal from '../hooks/useReveal';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: HeartHandshake,
    title: 'Patient-Focused Care',
    description: 'Treatment plans explained clearly, with your comfort in mind at every step.',
  },
  {
    icon: Sparkles,
    title: 'Clean, Comfortable Environment',
    description: 'A hygienic, modern clinic designed to put you at ease.',
  },
  {
    icon: LayoutGrid,
    title: 'Comprehensive Services',
    description: 'From routine cleaning to implants, most dental needs handled in one place.',
  },
  {
    icon: Users,
    title: 'Family-Friendly Care',
    description: 'Gentle treatment for children, adults and senior patients alike.',
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    description: 'Easy to reach in Raj Nagar Extension, Ghaziabad.',
  },
  {
    icon: CalendarCheck,
    title: 'Easy Appointment Booking',
    description: 'Book online, by phone or WhatsApp — whichever suits you.',
  },
];

export default function WhyChooseUs() {
  const ref = useReveal();

  return (
    <section className="why">
      <div className="container" ref={ref}>
        <div className="section-head center reveal">
          <span className="eyebrow">Why Choose Us</span>
          <h2>Why Patients Choose Dr Keshav Dental &amp; Implant Clinic</h2>
        </div>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div
              className="why-card reveal"
              key={r.title}
              style={{ transitionDelay: `${(i % 3) * 0.06}s` }}
            >
              <div className="why-icon">
                <r.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{r.title}</h3>
              <p>{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
