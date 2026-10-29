import { Check } from 'lucide-react'

const points = [
  'Native Android and iOS applications',
  'Shared cross-platform codebases',
  'Backend services and REST APIs',
  'Cloud, database and real-time integrations',
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">About us</span>
          <h2>Five specialists, working as one product team.</h2>
          <p>
            Stackora Systems combines the experience of five members across
            design, Android, iOS, Flutter and backend engineering. We work on
            the parts of a product that usually need separate teams: the UX,
            the mobile apps, the APIs and data behind them, and the cloud
            services that keep them running.
          </p>
          <p>
            Because the team covers the full stack, projects stay direct — the
            people who plan the work are the people who build, review and
            support it. Our experience comes from fintech, logistics, education,
            media, e-commerce and enterprise operations.
          </p>
        </div>

        <div className="about-panel">
          <h3>What that means for your project</h3>
          <ul>
            {points.map((point) => (
              <li key={point}>
                <Check size={17} aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <a className="btn btn-secondary" href="#team">
            Meet the team
          </a>
        </div>
      </div>
    </section>
  )
}
