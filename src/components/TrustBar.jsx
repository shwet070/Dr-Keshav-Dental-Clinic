import { Star, Users, Stethoscope, Sparkles } from 'lucide-react';
import { clinic } from '../data/clinic';
import useReveal from '../hooks/useReveal';
import './TrustBar.css';

const items = [
  {
    icon: Star,
    value: `${clinic.rating}/5`,
    label: 'Google Rating',
  },
  {
    icon: Users,
    value: `${clinic.reviews}+`,
    label: 'Patient Reviews',
  },
  {
    icon: Stethoscope,
    value: 'Professional',
    label: 'Dental Care',
  },
  {
    icon: Sparkles,
    value: 'Comfortable',
    label: 'Clinic Environment',
  },
];

export default function TrustBar() {
  const ref = useReveal();

  return (
    <section className="trust-bar">
      <div className="container trust-bar-inner reveal" ref={ref}>
        {items.map((item) => (
          <div className="trust-item" key={item.label}>
            <div className="trust-icon">
              <item.icon size={20} strokeWidth={1.8} />
            </div>
            <div>
              <div className="trust-value">{item.value}</div>
              <div className="trust-label">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
