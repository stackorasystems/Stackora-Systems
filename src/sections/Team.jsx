import { Check } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { team } from '../data/team'

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <SectionHeading
          eyebrow="Our team"
          title="The people behind the work"
          description="Six specialists with hands-on experience across UI/UX design, Android, iOS, Flutter, backend and cloud delivery. Contact details stay private — all enquiries go to the official Stackora Systems inbox."
        />

        <div className="team-grid">
          {team.map((member) => (
            <article className="card team-card" key={member.id}>
              <div className="team-head">
                <span className="avatar" aria-hidden="true">
                  {member.initials}
                </span>
                <div>
                  <h3>{member.name}</h3>
                  <p className="team-title">{member.title}</p>
                </div>
              </div>

              <p className="team-focus">{member.focus}</p>
              <p className="team-intro">{member.intro}</p>

              <p className="experience">
                <span>Experience</span>
                <strong>{member.experience}</strong>
              </p>

              <h4>Core skills</h4>
              <ul className="tag-list">
                {member.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>

              <ul className="team-highlights">
                {member.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Check size={15} aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
