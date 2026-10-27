import {
  Apple,
  Cloud,
  Database,
  Layers,
  Palette,
  Radio,
  Server,
  Smartphone,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/services'

const icons = {
  Palette,
  Smartphone,
  Apple,
  Layers,
  Server,
  Radio,
  Database,
  Cloud,
  Sparkles,
  Wrench,
  Users,
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="What we can build with you"
          description="Every service below is backed by hands-on delivery experience across our team."
        />

        <div className="services-grid">
          {services.map((service) => {
            const Icon = icons[service.icon] || Smartphone

            return (
              <article className="card service-card" key={service.title}>
                <span className="icon-badge">
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
