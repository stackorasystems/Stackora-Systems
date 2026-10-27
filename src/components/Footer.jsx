import { Mail, MessageCircle, Phone } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'About us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'UI/UX Design',
  'Android Development',
  'iOS Development',
  'Backend & API Development',
  'Cloud & DevOps Integrations',
  'Application Maintenance',
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand brand-light" href="#home" aria-label="Stackora Systems home">
            <span className="brand-mark" aria-hidden="true">
              S
            </span>
            <span className="brand-name">
              Stackora <span>Systems</span>
            </span>
          </a>
          <p>
            A six-member product team building design, mobile apps, backend
            services and the cloud integrations that keep them running.
          </p>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            {serviceLinks.map((service) => (
              <li key={service}>
                <a href="#services">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li>
              <a href="mailto:stackorasystems@gmail.com">
                <Mail size={16} aria-hidden="true" />
                stackorasystems@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+917732993378">
                <Phone size={16} aria-hidden="true" />
                +91 77329 93378
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/917732993378"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Stackora Systems. All rights reserved.</p>
        <p>Mobile, backend and cloud software development.</p>
      </div>
    </footer>
  )
}
