import SectionHeading from '../components/SectionHeading'

const steps = [
  {
    title: 'Understand Requirements',
    description:
      'We start with your goals, users, constraints and the scope of the product, and agree on what success looks like.',
  },
  {
    title: 'Plan the Solution',
    description:
      'We choose the stack, outline the architecture, define milestones and map out the APIs and data your product needs.',
  },
  {
    title: 'Develop and Test',
    description:
      'Work is delivered in reviewable increments, with code reviews, testing and regular progress updates.',
  },
  {
    title: 'Deploy and Support',
    description:
      'We handle release and monitoring, then stay available for fixes, maintenance and the next round of improvements.',
  },
]

export default function HowWeWork() {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title="A clear path from idea to release"
          description="A simple process that keeps scope, quality and communication predictable."
        />

        <ol className="process-grid">
          {steps.map((step, index) => (
            <li className="process-step" key={step.title}>
              <span className="step-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
