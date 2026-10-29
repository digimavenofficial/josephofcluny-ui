"use client";

import { useEffect, useRef, useState } from "react";

const doctors = [
  { name: "Dr. Priya Menon", role: "Consultant Ophthalmologist", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85" },
  { name: "Dr. Ramesh Kumar", role: "Senior Cardiologist", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=85" },
  { name: "Dr. Sneha Thomas", role: "Consultant Gynaecologist", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=85" },
  { name: "Dr. Arjun Nair", role: "Orthopaedic Surgeon", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=85" },
];

const services = ["Emergency care", "Cardiology", "Neurology", "Orthopaedics", "Ophthalmology", "Women & child care"];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function HospitalLoader() {
  return (
    <div className="site-loader">
      <div className="loader-cross">✦</div>
      <div className="sisters" aria-hidden="true">
        <div className="sister sister-back"><i /><b /><span /></div>
        <div className="sister sister-main"><i /><b /><span /></div>
        <div className="sister sister-front"><i /><b /><span /></div>
      </div>
      <p className="loader-kicker">JOSEPH OF CLUNY</p>
      <p className="loader-message">Preparing compassionate care<span>...</span></p>
      <div className="loader-line"><span /></div>
    </div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 1800);
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => reveal.observe(element));
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
    };
    const handlePointerMove = (event: PointerEvent) => {
      if (!heroRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      heroRef.current.style.setProperty("--pointer-x", `${x}`);
      heroRef.current.style.setProperty("--pointer-y", `${y}`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointermove", handlePointerMove);
    handleScroll();
    return () => {
      window.clearTimeout(loadingTimer);
      reveal.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isLoading]);

  if (isLoading) {
    return <HospitalLoader />;
  }

  return (
    <main>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Joseph of Cluny home">
          <span className="brand-mark">✦</span>
          <span><strong>Joseph of Cluny</strong><small>Mission Hospital</small></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Our services</a>
          <a href="#doctors" onClick={() => setMenuOpen(false)}>Doctors</a>
          <a href="#facilities" onClick={() => setMenuOpen(false)}>Facilities</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="language" href="#contact">EN <span>⌄</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "×" : "☰"}</button>
      </header>

      <section className="hero" id="top" ref={heroRef}>
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
        <div className="hero-copy reveal">
          <p className="eyebrow">WELCOME TO JOSEPH OF CLUNY</p>
          <h1>Where medical excellence meets <em>care and compassion.</em></h1>
          <p className="hero-text">A trusted healthcare partner for every chapter of your life. Discover thoughtful care delivered by people who truly listen.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Book an appointment <Arrow /></a>
            <a className="button button-ghost" href="#services">Explore services <Arrow /></a>
          </div>
        </div>
        <div className="hero-image reveal">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85" alt="Bright modern hospital corridor" />
          <div className="hero-image-shine" />
          <div className="hero-badge"><span>✦</span><strong>Compassionate<br />care, always.</strong></div>
        </div>
        <div className="scroll-note">SCROLL TO DISCOVER <span>↓</span></div>
      </section>

      <section className="stats reveal" aria-label="Hospital statistics">
        <div className="stat-item"><strong>2,00,000<span>+</span></strong><small>Patients cared for</small></div>
        <div className="stat-item"><strong>10,000<span>+</span></strong><small>Successful surgeries</small></div>
        <div className="stat-item"><strong>6</strong><small>Speciality centres</small></div>
        <div className="stat-item"><strong>25<span>+</span></strong><small>Years of service</small></div>
      </section>

      <section className="section intro" id="about">
        <div className="section-label reveal">01 / OUR STORY</div>
        <div className="intro-content">
          <h2 className="reveal">Healthcare with a <span>human touch.</span></h2>
          <div className="intro-body reveal">
            <p>At Joseph of Cluny Mission Hospital, we believe healing begins with being seen, heard and cared for. Our dedicated team combines clinical expertise with a warm, personal approach.</p>
            <a className="text-link" href="#contact">Learn more about us <Arrow /></a>
          </div>
        </div>
        <div className="intro-image reveal"><img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1100&q=85" alt="Doctors discussing care in a hospital" /></div>
      </section>

      <section className="services-section" id="services">
        <div className="section services-inner">
          <div className="section-label reveal">02 / SPECIALITIES</div>
          <div className="services-heading reveal"><h2>Care that covers <span>every need.</span></h2><p>From routine checkups to advanced procedures, our experts are here for you.</p></div>
          <div className="service-grid">
            {services.map((service, index) => <a className="service-card reveal" href="#contact" key={service}><span>0{index + 1}</span><strong>{service}</strong><Arrow /></a>)}
          </div>
        </div>
      </section>

      <section className="section doctors-section" id="doctors">
        <div className="section-label reveal">03 / OUR PEOPLE</div>
        <div className="doctors-heading reveal"><h2>Meet the people<br /><span>behind the care.</span></h2><a className="text-link" href="#contact">View all specialists <Arrow /></a></div>
        <div className="doctor-grid">{doctors.map((doctor) => <article className="doctor-card reveal" key={doctor.name}><div className="doctor-photo"><img src={doctor.image} alt={doctor.name} /></div><div className="doctor-info"><strong>{doctor.name}</strong><span>{doctor.role}</span><a href="#contact" aria-label={`Book with ${doctor.name}`}>↗</a></div></article>)}</div>
      </section>

      <section className="section facilities" id="facilities">
        <div className="facility-image reveal"><img src="https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1300&q=85" alt="Modern hospital patient room" /></div>
        <div className="facility-copy reveal"><div className="section-label">04 / OUR FACILITIES</div><h2>Designed around <span>your comfort.</span></h2><p>From calming spaces to thoughtful technology, every detail is designed to make your care journey easier.</p><a className="button button-dark" href="#contact">Explore our facilities <Arrow /></a></div>
      </section>

      <section className="cta-section reveal" id="contact">
        <div><p className="eyebrow">YOUR HEALTH, OUR PRIORITY</p><h2>Let&apos;s take the next<br /><em>step together.</em></h2></div>
        <a className="button button-primary" href="tel:+914842345678">Talk to our care team <Arrow /></a>
      </section>

      <footer>
        <div className="footer-top"><a className="brand brand-light" href="#top"><span className="brand-mark">✦</span><span><strong>Joseph of Cluny</strong><small>Mission Hospital</small></span></a><p>Compassionate healthcare,<br />close to home.</p></div>
        <div className="footer-links"><div><strong>Explore</strong><a href="#about">About us</a><a href="#services">Services</a><a href="#doctors">Our doctors</a></div><div><strong>Visit us</strong><span>123 Cluny Avenue<br />Kochi, Kerala 682001</span><span>+91 484 234 5678<br />hello@jcmhospital.org</span></div><div><strong>Follow along</strong><a href="#top">Instagram ↗</a><a href="#top">Facebook ↗</a></div></div>
        <div className="footer-bottom"><span>© 2025 Joseph of Cluny Mission Hospital</span><span>Made with care for every family.</span></div>
      </footer>
    </main>
  );
}
