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
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbybpjo9uuAEakg2IE1vU1HJ4vTRGAOhoO7Ys77Jz_LaK6h7Lk6bajds1huPsmSrQzIF/exec";

export default function Appointment() {
  const ref = useReveal();
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  // Show success message immediately
  setSent(true);
  setForm(initialForm);

  // Send lead to Google Sheets in the background
  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams({
      name: form.name,
      phone: form.phone,
      email: form.email,
      date: form.date,
      time: form.time,
      treatment: form.treatment,
      message: form.message,
    }),
  }).catch((error) => {
    console.error("Google Sheets error:", error);
  });
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
        {sent ? (
  <div className="appointment-success">
    <h2>Thank You!</h2>
    <p>Your appointment request has been submitted successfully.</p>
    <p>Our clinic will contact you shortly to confirm your appointment.</p>
  </div>
) : (

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
)}
      </div>
    </section>
  );
}
