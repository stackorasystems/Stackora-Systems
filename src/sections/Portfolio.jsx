import { useState } from 'react'
import { ExternalLink, Info } from 'lucide-react'
import ProjectVisual from '../components/ProjectVisual'
import SectionHeading from '../components/SectionHeading'
import { projectFilters, projects } from '../data/projects'

const kindLabels = {
  professional: 'Professional project',
  independent: 'Independent project',
  'open-source': 'Open source',
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="section section-alt" id="portfolio">
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Work our team has shipped"
          description="Design, mobile products, backend platforms and open-source tools built by the Stackora Systems team."
        />

        <div className="filter-row" role="group" aria-label="Filter projects">
          {projectFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`filter-button${activeFilter === filter.value ? ' active' : ''}`}
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <ProjectVisual
                variant={project.visual}
                tone={project.tone}
                image={project.image}
                imageAlt={project.imageAlt}
              />

              <div className="project-content">
                <div className="project-badges">
                  <span className={`badge badge-${project.kind}`}>
                    {kindLabels[project.kind]}
                  </span>
                  <span className="project-type">{project.type}</span>
                </div>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <h4>What we delivered</h4>
                <ul className="contribution-list">
                  {project.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>

                <ul className="tag-list" aria-label="Technologies used">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                {project.link && (
                  <a
                    className="text-link"
                    href={project.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link.label}
                    <ExternalLink size={15} aria-hidden="true" />
                    <span className="sr-only"> for {project.name} (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="disclaimer">
          <Info size={18} aria-hidden="true" />
          <p>
            Every project listed here was completed by a team member while
            working for their respective employer, or as independent or
            open-source work. Product names, trademarks and screenshots belong
            to their respective owners; this portfolio is a record of
            experience and does not imply endorsement, affiliation or a client
            relationship. IXFI and Zee5 use screenshots from their official
            Google Play listings; all other visuals are conceptual
            illustrations.
          </p>
        </div>
      </div>
    </section>
  )
}
