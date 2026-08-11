import { useState } from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { clinic } from '../data/clinic';
import useReveal from '../hooks/useReveal';
import './Appointment.css';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  treatment: '',
  message: '',
};

export default function Appointment() {
  const ref = useReveal();
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `Appointment request — ${clinic.name}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.date ? `Preferred date: ${form.date}` : null,
      form.time ? `Preferred time: ${form.time}` : null,
      form.treatment ? `Treatment/Concern: ${form.treatment}` : null,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);
    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    const url = `https://wa.me/${clinic.whatsapp.replace('+', '')}?text=${buildWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="appointment" className="appointment">
      <div className="container appointment-inner" ref={ref}>
        <div className="appointment-copy reveal">
          <span className="eyebrow">Book an Appointment</span>
          <h2>Ready to Take Care of Your Smile?</h2>
          <p>
            Book your dental appointment at Dr Keshav Dental and Implant
            Clinic. Fill in the form and we'll get back to you on WhatsApp,
            or reach us directly by phone.
          </p>

          <div className="appointment-cta-row">
            <a href={`tel:${clinic.phoneTel}`} className="btn btn-outline on-dark">
              <Phone size={17} /> Call {clinic.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${clinic.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline on-dark"
            >
              <MessageCircle size={17} /> WhatsApp Us
            </a>
          </div>
        </div>

        <form className="appointment-form reveal" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </label>
            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
              />
            </label>
          </div>

          <label>
            Email (optional)
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>

          <div className="form-row">
            <label>
              Preferred Date
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </label>
            <label>
              Preferred Time
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
              />
            </label>
          </div>

          <label>
            Treatment / Concern
            <input
              type="text"
              name="treatment"
              value={form.treatment}
              onChange={handleChange}
              placeholder="e.g. Teeth cleaning, tooth pain"
            />
          </label>

          <label>
            Message (optional)
            <textarea
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              placeholder="Anything else we should know?"
            />
          </label>

          <button type="submit" className="btn btn-primary form-submit">
            <Send size={16} /> Request Appointment
          </button>

          {sent && (
            <p className="form-note">
              We've opened WhatsApp with your details — send the message and
              our team will confirm your appointment.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
