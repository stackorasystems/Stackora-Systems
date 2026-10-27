import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Let Escape close the mobile menu.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="site-header">
      <div className="container navbar">
        <a className="brand" href="#home" aria-label="Stackora Systems home">
          <span className="brand-mark" aria-hidden="true">
            S
          </span>
          <span className="brand-name">
            Stackora <span>Systems</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary btn-sm nav-cta" href="#contact">
            Discuss Your Project
            <ArrowRight size={16} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary"
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            Discuss Your Project
          </a>
        </nav>
      )}
    </header>
  )
}
