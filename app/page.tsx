"use client";

import { useState } from "react";

const services = [
  {
    icon: "🪔",
    title: "Puja & Vidhi",
    gujarati: "પૂજા અને વિધિ",
    hindi: "पूजा एवं विधि",
    description:
      "Traditional puja and ceremonies performed with श्रद्धा, विधि and proper rituals.",
  },
  {
    icon: "🏠",
    title: "Griha Pravesh",
    gujarati: "ગૃહ પ્રવેશ",
    hindi: "गृह प्रवेश",
    description:
      "Sacred ceremonies and blessings for your new home and new beginning.",
  },
  {
    icon: "💍",
    title: "Vivah Sanskar",
    gujarati: "વિવાહ સંસ્કાર",
    hindi: "विवाह संस्कार",
    description:
      "Traditional wedding rituals that preserve the beauty of our संस्कार.",
  },
  {
    icon: "🔥",
    title: "Havan & Yagna",
    gujarati: "હવન અને યજ્ઞ",
    hindi: "हवन एवं यज्ञ",
    description:
      "Havan and Yagna ceremonies conducted with traditional rituals and devotion.",
  },
  {
    icon: "🌺",
    title: "Special Vidhis",
    gujarati: "વિશેષ વિધિઓ",
    hindi: "विशेष विधियां",
    description:
      "Personalized religious ceremonies according to your family's requirements.",
  },
  {
    icon: "🙏",
    title: "Sanskar Ceremonies",
    gujarati: "સંસ્કાર વિધિઓ",
    hindi: "संस्कार समारोह",
    description:
      "Traditional संस्कार ceremonies for important moments of life.",
  },
];

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1604608672516-f1b9e7e9d5a3?auto=format&fit=crop&w=1200&q=80",
    title: "Traditional Ceremony",
    category: "Vidhi",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?auto=format&fit=crop&w=1200&q=80",
    title: "Sacred Celebration",
    category: "Ceremony",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80",
    title: "Traditional Ritual",
    category: "Puja",
  },
];

export default function Home() {
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  const content = {
    EN: {
      services: "Our Services",
      serviceSub: "Traditional ceremonies, performed with devotion.",
      about: "Our Tradition",
      aboutText:
        "At Parth, we believe that every important moment deserves to be celebrated with tradition, devotion and dignity. Our Vidhis are performed with respect for timeless customs and the unique needs of every family.",
      work: "Our Work",
      workSub: "A glimpse into our ceremonies and celebrations.",
      contact: "Begin Your Sacred Journey",
      contactSub:
        "Have a ceremony in mind? Connect with us and let us help you plan it.",
      button: "Contact Us",
      explore: "Explore Services",
    },
    GU: {
      services: "અમારી સેવાઓ",
      serviceSub: "શ્રદ્ધા અને પરંપરા સાથે કરવામાં આવતી ધાર્મિક વિધિઓ.",
      about: "અમારી પરંપરા",
      aboutText:
        "પાર્થ ખાતે અમે માનીએ છીએ કે જીવનની દરેક મહત્વપૂર્ણ ક્ષણ પરંપરા, શ્રદ્ધા અને ગૌરવ સાથે ઉજવવી જોઈએ.",
      work: "અમારું કાર્ય",
      workSub: "અમારી ધાર્મિક વિધિઓ અને ઉજવણીઓની એક ઝલક.",
      contact: "તમારી પવિત્ર યાત્રા શરૂ કરો",
      contactSub:
        "કોઈ વિધિ કરાવવાની છે? અમારો સંપર્ક કરો અને આયોજનમાં અમારી સાથે જોડાઓ.",
      button: "સંપર્ક કરો",
      explore: "સેવાઓ જુઓ",
    },
    HI: {
      services: "हमारी सेवाएं",
      serviceSub: "श्रद्धा और परंपरा के साथ संपन्न होने वाली धार्मिक विधियां।",
      about: "हमारी परंपरा",
      aboutText:
        "पार्थ में हमारा विश्वास है कि जीवन के हर महत्वपूर्ण अवसर को परंपरा, श्रद्धा और सम्मान के साथ मनाया जाना चाहिए।",
      work: "हमारा कार्य",
      workSub: "हमारे धार्मिक अनुष्ठानों और समारोहों की एक झलक।",
      contact: "अपनी पवित्र यात्रा शुरू करें",
      contactSub:
        "कोई विशेष विधि करवानी है? हमसे संपर्क करें और योजना बनाने में हमारी सहायता लें।",
      button: "संपर्क करें",
      explore: "सेवाएं देखें",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-symbol">ॐ</span>
            <span>
              <strong>PARTH</strong>
              <small>VIDHI & SANSKAR</small>
            </span>
          </a>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#work" onClick={() => setMenuOpen(false)}>
              Our Work
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>

          <div className="nav-right">
            <div className="languages">
              <button
                className={language === "EN" ? "selected" : ""}
                onClick={() => setLanguage("EN")}
              >
                EN
              </button>
              <button
                className={language === "GU" ? "selected" : ""}
                onClick={() => setLanguage("GU")}
              >
                ગુ
              </button>
              <button
                className={language === "HI" ? "selected" : ""}
                onClick={() => setLanguage("HI")}
              >
                हिं
              </button>
            </div>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-symbol">ॐ</div>

          <p className="eyebrow">પરંપરા • श्रद्धा • संस्कार</p>

          <h1>
            Tradition That
            <br />
            <span>Lives Forever.</span>
          </h1>

          <p className="hero-description">
            Authentic Vidhis & Ceremonies performed with devotion,
            <br />
            tradition and timeless values.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="primary-button">
              {t.explore}
              <span>→</span>
            </a>

            <a href="#contact" className="secondary-button">
              {t.button}
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <span></span>
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="intro-symbol">✦</div>

        <p>
          <span>PARTH</span> — preserving the beauty of tradition,
          <br />
          one sacred ceremony at a time.
        </p>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">WHAT WE OFFER</p>
          <h2>{t.services}</h2>
          <div className="heading-line"></div>
          <p>{t.serviceSub}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={service.title}>
              <div className="service-number">0{index + 1}</div>
              <div className="service-icon">{service.icon}</div>

              <h3>
                {language === "GU"
                  ? service.gujarati
                  : language === "HI"
                    ? service.hindi
                    : service.title}
              </h3>

              <p>{service.description}</p>

              <a href="#contact">
                Know More <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1604608672516-f1b9e7e9d5a3?auto=format&fit=crop&w=1400&q=85"
            alt="Traditional ceremony"
          />
          <div className="image-label">
            <span>ॐ</span>
            <p>TRADITION<br />& DEVOTION</p>
          </div>
        </div>

        <div className="about-content">
          <p className="eyebrow">ESTABLISHED WITH FAITH</p>
          <h2>{t.about}</h2>
          <div className="heading-line"></div>

          <p className="large-text">{t.aboutText}</p>

          <div className="about-points">
            <div>
              <strong>01</strong>
              <span>Traditional<br />Knowledge</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Personalized<br />Ceremonies</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Respect &<br />Devotion</span>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">A GLIMPSE</p>
          <h2>{t.work}</h2>
          <div className="heading-line"></div>
          <p>{t.workSub}</p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <div className="gallery-card" key={item.title}>
              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <div className="gallery-arrow">↗</div>
              </div>
            </div>
          ))}
        </div>

        <div className="center-button">
          <a href="#contact" className="outline-button">
            View More Works →
          </a>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote-section">
        <div className="quote-symbol">“</div>

        <blockquote>
          <span>
            संस्कारो हि मनुष्यस्य
          </span>
          <br />
          <span>
            भूषणं परमं स्मृतम्।
          </span>
        </blockquote>

        <p>
          Sanskar is considered the greatest ornament of a human being.
        </p>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>{t.contact}</h2>
          <p>{t.contactSub}</p>

          <div className="contact-buttons">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="whatsapp-button"
            >
              <span>◉</span>
              WhatsApp Us
            </a>

            <a href="tel:+919999999999" className="call-button">
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>ॐ</span>
              <strong>PARTH</strong>
            </div>

            <p>
              Tradition • Faith • Sanskar
              <br />
              Sacred ceremonies with timeless values.
            </p>
          </div>

          <div className="footer-column">
            <h4>EXPLORE</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#work">Our Work</a>
          </div>

          <div className="footer-column">
            <h4>CONNECT</h4>
            <a href="#contact">Contact Us</a>
            <a href="https://wa.me/919999999999">WhatsApp</a>
            <a href="tel:+919999999999">Call Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 PARTH. All Rights Reserved.</span>
          <span>Made with श्रद्धा • Tradition • Love</span>
        </div>
      </footer>
    </main>
  );
}