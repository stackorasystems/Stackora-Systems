import { useState } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'

// FormSubmit forwards every enquiry to the official company inbox. The /ajax/
// endpoint takes a JSON body and answers with JSON, so the form can report the
// result without reloading the page.
// https://formsubmit.co/ajax-documentation
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/stackorasystems@gmail.com'

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
  // idle | sending | success | error
  const [status, setStatus] = useState('idle')
  const [sendError, setSendError] = useState('')
  const [honeypot, setHoneypot] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setStatus('idle')
    setSendError('')
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validateForm(form)
    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      setStatus('idle')
      setSendError('')
      document.getElementById(firstError)?.focus()
      return
    }

    setStatus('sending')
    setSendError('')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Project enquiry — ${form.projectType}`,
          _honey: honeypot,
          Name: form.name.trim(),
          Email: form.email.trim(),
          'Project type': form.projectType,
          Message: form.message.trim(),
        }),
      })

      const result = await response.json().catch(() => null)

      // FormSubmit answers with success as a string, so compare loosely and
      // still treat a non-2xx status as a failure.
      const rejected =
        !response.ok ||
        (result &&
          ['false', '0'].includes(String(result.success).toLowerCase()))

      if (rejected) {
        throw new Error(
          result?.message || `The form service replied ${response.status}.`,
        )
      }

      setStatus('success')
      setForm(emptyForm)
      setErrors({})
      setHoneypot('')
    } catch (error) {
      setStatus('error')
      setSendError(error?.message || 'The request did not go through.')
    }
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

          {/* Spam honeypot — invisible to people, tempting for bots. */}
          <input
            className="honeypot"
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />

          <button
            className="btn btn-primary form-submit"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              'Sending…'
            ) : (
              <>
                Send Enquiry
                <Send size={16} aria-hidden="true" />
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="form-status" role="status">
              <CheckCircle2 size={20} aria-hidden="true" />
              <p>
                <strong>Your enquiry has been sent.</strong> It went straight
                to{' '}
                <a href="mailto:stackorasystems@gmail.com">
                  stackorasystems@gmail.com
                </a>
                . We will reply to the address you gave us.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="form-status form-status-error" role="alert">
              <AlertCircle size={20} aria-hidden="true" />
              <p>
                <strong>We could not send that.</strong> {sendError} You can
                still reach us directly at{' '}
                <a href="mailto:stackorasystems@gmail.com">
                  stackorasystems@gmail.com
                </a>
                .
              </p>
            </div>
          )}

          <p className="form-help">
            Enquiries are delivered to stackorasystems@gmail.com through a form
            service. Nothing is stored on this website.
          </p>
        </form>
      </div>
    </section>
  )
}
