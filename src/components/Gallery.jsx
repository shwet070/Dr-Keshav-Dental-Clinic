import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import treatmentRoom from '../assets/treatment-room.jpg';
import reception from '../assets/reception.jpg';
import happyPatient from '../assets/happy-patient.jpg';
import doctorCabin from '../assets/doctor-cabin.jpg';
import treatment from '../assets/treatment.jpg';
import useReveal from '../hooks/useReveal';
import './Gallery.css';

const images = [
  {
    src: treatmentRoom,
    alt: 'Dental treatment room with chairs and equipment',
    className: 'g-item g-large',
  },
  {
    src: reception,
    alt: 'Clinic reception area',
    className: 'g-item',
  },
  {
    src: doctorCabin,
    alt: "Doctor's consultation cabin",
    className: 'g-item',
  },
  {
    src: happyPatient,
    alt: 'Young patients at the clinic',
    className: 'g-item',
  },
  {
    src: treatment,
    alt: 'Dental treatment in progress',
    className: 'g-item',
  },
];

export default function Gallery() {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState(null);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setOpenIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (openIndex === null) return undefined;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [openIndex]);

  return (
    <section id="gallery" className="gallery">
      <div className="container" ref={ref}>
        <div className="section-head center reveal">
          <span className="eyebrow">Our Clinic</span>
          <h2>Take a Look Inside Our Clinic</h2>
          <p>Real photographs from our clinic in Raj Nagar Extension.</p>
        </div>

        <div className="gallery-grid reveal">
          {images.map((img, i) => (
            <button
              type="button"
              key={img.src}
              className={img.className}
              onClick={() => setOpenIndex(i)}
              aria-label={`View larger image: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="g-overlay">
                <Expand size={18} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Clinic photo viewer"
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Close gallery"
          >
            <X size={26} />
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={prev}
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>
          <img
            src={images[openIndex].src}
            alt={images[openIndex].alt}
            className="lightbox-image"
          />
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={next}
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>
          <div className="lightbox-backdrop" onClick={close} />
        </div>
      )}
    </section>
  );
}
