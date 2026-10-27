import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const models = [
  {
    title: 'Fixed-Price Projects',
    description:
      'A defined scope, milestones and a delivery plan agreed before development starts.',
  },
  {
    title: 'Hourly Development',
    description:
      'Flexible support billed for time spent, suited to evolving requirements and smaller changes.',
  },
  {
    title: 'Dedicated Developers',
    description:
      'Add one of our developers to your team for a focused period, working inside your process.',
  },
  {
    title: 'Long-Term Partnerships',
    description:
      'Ongoing product work across releases, new features and continuous improvement.',
  },
  {
    title: 'Application Maintenance',
    description:
      'Bug fixes, dependency updates, performance work and monitoring for live applications.',
  },
]

export default function Engagement() {
  return (
    <section className="section" id="engagement">
      <div className="container">
        <SectionHeading
          eyebrow="Engagement models"
          title="Work with us the way that fits"
          description="Choose a delivery model based on how defined your scope is and how closely you want to work with the team."
        />

        <div className="engagement-grid">
          {models.map((model) => (
            <article className="card engagement-card" key={model.title}>
              <h3>{model.title}</h3>
              <p>{model.description}</p>
            </article>
          ))}
        </div>

        <div className="engagement-cta">
          <a className="btn btn-primary" href="#contact">
            Request a Proposal
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <p>No prices are listed on this site — every project is scoped before a quote is prepared.</p>
        </div>
      </div>
    </section>
  )
}
