import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Six specialists. One product team.</span>
          <h1>We Build Digital Solutions for Your Business.</h1>
          <p className="hero-text">
            Stackora Systems helps businesses build mobile applications, web
            platforms, and reliable software solutions through experienced
            developers and modern technologies.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#portfolio">
              Explore Our Work
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Us
            </a>
          </div>

          <ul className="hero-tags" aria-label="Areas we work in">
            <li>Android</li>
            <li>iOS</li>
            <li>Backend</li>
            <li>Cloud</li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" aria-hidden="true" />

          <div className="mock-browser" aria-hidden="true">
            <div className="mock-browser-bar">
              <span className="mock-dot red" />
              <span className="mock-dot amber" />
              <span className="mock-dot green" />
              <span className="mock-url">stackora.systems</span>
            </div>
            <div className="mock-browser-body">
              <div className="mock-sidebar">
                <span className="mock-logo-dot" />
                <span className="mock-side-line active" />
                <span className="mock-side-line" />
                <span className="mock-side-line" />
                <span className="mock-side-line short" />
              </div>
              <div className="mock-content">
                <div className="mock-topline">
                  <span className="mock-line w-50" />
                  <span className="mock-avatar" />
                </div>
                <div className="mock-metrics">
                  <div className="mock-metric">
                    <span className="mock-icon" />
                    <span className="mock-line w-80" />
                    <span className="mock-line w-50 faint" />
                  </div>
                  <div className="mock-metric">
                    <span className="mock-icon" />
                    <span className="mock-line w-70" />
                    <span className="mock-line w-40 faint" />
                  </div>
                  <div className="mock-metric">
                    <span className="mock-icon" />
                    <span className="mock-line w-60" />
                    <span className="mock-line w-50 faint" />
                  </div>
                </div>
                <div className="mock-chart">
                  {[38, 58, 46, 76, 54, 90, 66, 82].map((height, index) => (
                    <span key={index} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mock-phone" aria-hidden="true">
            <span className="mock-phone-notch" />
            <div className="mock-phone-body">
              <span className="mock-phone-label" />
              <span className="mock-phone-amount" />
              <div className="mock-phone-chart">
                {[40, 62, 48, 80, 58, 70].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="mock-phone-row">
                <span />
                <span />
              </div>
              <div className="mock-phone-row">
                <span />
                <span />
              </div>
            </div>
          </div>

          <span className="float-chip chip-kotlin" aria-hidden="true">
            Kotlin
          </span>
          <span className="float-chip chip-swift" aria-hidden="true">
            Swift
          </span>
          <span className="float-chip chip-node" aria-hidden="true">
            Node.js
          </span>
          <span className="float-chip chip-flutter" aria-hidden="true">
            Flutter
          </span>
        </div>
      </div>
    </section>
  )
}
