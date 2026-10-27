import { useState } from 'react'
import { CheckCircle2, Mail, MessageCircle, Phone, Send } from 'lucide-react'

const projectTypes = [
  'UI/UX design',
  'Android app',
  'iOS app',
  'Cross-platform app',
  'Web, backend or API',
  'Maintenance and support',
  'Something else',
]

const emptyForm = {
  name: '',
  email: '',
  projectType: '',
  message: '',
}

function validateForm(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your business email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.projectType) {
    errors.projectType = 'Please choose a project type.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us a little about the project.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please add a little more detail (at least 10 characters).'
  }

  return errors
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [showMailtoNotice, setShowMailtoNotice] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setShowMailtoNotice(false)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validateForm(form)
    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      setShowMailtoNotice(false)
      document.getElementById(firstError)?.focus()
      return
    }

    const subject = `Project enquiry — ${form.projectType}`
    const body = [
      `Name: ${form.name.trim()}`,
      `Business email: ${form.email.trim()}`,
      `Project type: ${form.projectType}`,
      '',
      'Project details:',
      form.message.trim(),
    ].join('\n')

    // There is no backend on this site. Hand the enquiry to the visitor's
    // email client so the message is only sent when they choose to send it.
    window.location.href = `mailto:stackorasystems@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setShowMailtoNotice(true)
  }

  return (
    <section className="section section-alt" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Contact</span>
          <h2>Tell us what you want to build.</h2>
          <p>
            Share your project type, goals and any constraints you already know
            about. We will start with a conversation about scope before
            suggesting an approach.
          </p>

          <ul className="contact-list">
            <li>
              <a href="mailto:stackorasystems@gmail.com">
                <span className="contact-icon">
                  <Mail size={19} aria-hidden="true" />
                </span>
                <span>
                  <small>Email</small>
                  <strong>stackorasystems@gmail.com</strong>
                </span>
              </a>
            </li>
            <li>
              <a href="tel:+917732993378">
                <span className="contact-icon">
                  <Phone size={19} aria-hidden="true" />
                </span>
                <span>
                  <small>Phone</small>
                  <strong>+91 77329 93378</strong>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/917732993378"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">
                  <MessageCircle size={19} aria-hidden="true" />
                </span>
                <span>
                  <small>WhatsApp</small>
                  <strong>Chat with Stackora Systems</strong>
                </span>
              </a>
            </li>
          </ul>

          <p className="contact-privacy">
            These are the official company contact details. Individual
            developer emails and phone numbers are kept private.
          </p>
        </div>

        <form className="card contact-form" onSubmit={handleSubmit} noValidate>
          <h3>Project enquiry</h3>
          <p className="form-intro">
            Fields marked with <span aria-hidden="true">*</span>
            <span className="sr-only">an asterisk</span> are required.
          </p>

          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="form-error" id="name-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">Business email *</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                placeholder="you@company.com"
              />
              {errors.email && (
                <p className="form-error" id="email-error">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="projectType">Project type *</label>
            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              aria-invalid={Boolean(errors.projectType)}
              aria-describedby={
                errors.projectType ? 'projectType-error' : undefined
              }
            >
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <p className="form-error" id="projectType-error">
                {errors.projectType}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="What are you building, and what would you like help with?"
            />
            {errors.message && (
              <p className="form-error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>

          <button className="btn btn-primary form-submit" type="submit">
            Send Enquiry
            <Send size={16} aria-hidden="true" />
          </button>

          {showMailtoNotice && (
            <div className="form-status" role="status">
              <CheckCircle2 size={20} aria-hidden="true" />
              <p>
                <strong>Your email app should open with this message.</strong>{' '}
                This website has no backend, so nothing is sent automatically.
                Review the email and press send to reach{' '}
                <a href="mailto:stackorasystems@gmail.com">
                  stackorasystems@gmail.com
                </a>
                .
              </p>
            </div>
          )}

          <p className="form-help">
            This form prepares an email in your own email app. No data is sent
            to a server, and submissions are not stored by this website.
          </p>
        </form>
      </div>
    </section>
  )
}
