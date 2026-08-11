import { CheckCircle } from 'lucide-react';
import doctorCabin from '../assets/doctor-cabin.jpg';
import useReveal from '../hooks/useReveal';
import './About.css';

const points = [
  'Comfortable, hygienic clinic environment',
  'Clear communication about your treatment',
  'Family-friendly care for all ages',
  'Convenient Raj Nagar Extension location',
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="about">
      <div className="container about-inner" ref={ref}>
        <div className="about-image reveal">
          <img
            src={doctorCabin}
            alt="Doctor's consultation cabin at Dr Keshav Dental and Implant Clinic"
            loading="lazy"
          />
        </div>

        <div className="about-copy reveal">
          <span className="eyebrow">About the Clinic</span>
          <h2>Modern Dental Care With a Patient-First Approach</h2>
          <p>
            At Dr Keshav Dental and Implant Clinic, every visit is built
            around a clean, comfortable environment and clear communication.
            From routine check-ups to more involved treatment, our team takes
            the time to explain your options so you always know what to
            expect.
          </p>
          <p>
            Located in Raj Nagar Extension, Ghaziabad, the clinic is easy to
            reach and equipped for modern dental treatment across all age
            groups — from young children to senior patients.
          </p>

          <ul className="about-points">
            {points.map((point) => (
              <li key={point}>
                <CheckCircle size={19} strokeWidth={2} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
