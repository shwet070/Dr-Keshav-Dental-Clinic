import Icon from './Icon';
import { services } from '../data/services';
import useReveal from '../hooks/useReveal';
import './Services.css';

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="services">
      <div className="container" ref={ref}>
        <div className="section-head center reveal">
          <span className="eyebrow">Our Services</span>
          <h2>Complete Dental Care Under One Roof</h2>
          <p>
            From routine check-ups to advanced procedures, our clinic offers
            a full range of dental treatments for the whole family.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              className="service-card reveal"
              key={service.title}
              style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
            >
              <div className="service-icon">
                <Icon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
