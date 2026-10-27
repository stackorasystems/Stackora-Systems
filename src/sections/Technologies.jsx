import {
  Cloud,
  Database,
  Monitor,
  Palette,
  Server,
  Smartphone,
  Sparkles,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { technologyGroups } from '../data/technologies'

const groupIcons = {
  Mobile: Smartphone,
  Frontend: Monitor,
  Backend: Server,
  Database,
  'Cloud & Integrations': Cloud,
  Design: Palette,
  'AI & Tools': Sparkles,
}

export default function Technologies() {
  return (
    <section className="section section-alt" id="technologies">
      <div className="container">
        <SectionHeading
          eyebrow="Technologies"
          title="Tools we work with every day"
          description="The languages, frameworks and platforms our team has used in production, grouped by layer."
        />

        <div className="technology-grid">
          {technologyGroups.map((group) => {
            const Icon = groupIcons[group.title] || Server

            return (
              <article className="card technology-card" key={group.title}>
                <div className="technology-head">
                  <span className="icon-badge small">
                    <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <ul className="tag-list">
                  {group.items.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
