// CSS-drawn previews for projects without a verified image. Projects that
// provide an `image` use a locally stored official store screenshot and are
// labelled accordingly.

function PhoneMockup() {
  return (
    <div className="pv-phone" aria-hidden="true">
      <span className="pv-phone-notch" />
      <div className="pv-phone-screen">
        <span className="pv-pill" />
        <span className="pv-line w-70" />
        <span className="pv-line w-45" />
        <span className="pv-block" />
        <div className="pv-row">
          <span />
          <span />
        </div>
        <span className="pv-line w-60" />
      </div>
    </div>
  )
}

function BrowserMockup() {
  return (
    <div className="pv-browser" aria-hidden="true">
      <div className="pv-browser-bar">
        <span className="pv-dot" />
        <span className="pv-dot" />
        <span className="pv-dot" />
        <span className="pv-url" />
      </div>
      <div className="pv-browser-body">
        <div className="pv-sidebar">
          <span className="pv-side-logo" />
          <span className="pv-side-line active" />
          <span className="pv-side-line" />
          <span className="pv-side-line short" />
        </div>
        <div className="pv-main">
          <span className="pv-line w-50" />
          <div className="pv-metrics">
            <span />
            <span />
            <span />
          </div>
          <div className="pv-chart">
            {[45, 68, 52, 84, 60, 95, 74].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CodeMockup() {
  return (
    <div className="pv-code" aria-hidden="true">
      <div className="pv-code-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="pv-code-lines">
        <span className="pv-code-line w-80" />
        <span className="pv-code-line w-55 indent" />
        <span className="pv-code-line w-70 indent" />
        <span className="pv-code-line w-40 indent" />
        <span className="pv-code-line w-60" />
        <span className="pv-code-line w-45 indent" />
      </div>
    </div>
  )
}

export default function ProjectVisual({
  variant = 'dashboard',
  tone = 'blue',
  image,
  imageAlt,
}) {
  if (image) {
    // Public-folder assets need the configured base path so the site also
    // works from a GitHub Pages repository subpath.
    const imageSrc = `${import.meta.env.BASE_URL}${image}`

    return (
      <div className={`project-visual has-image tone-${tone}`}>
        <div
          className="screenshot-backdrop"
          style={{ backgroundImage: `url(${imageSrc})` }}
          aria-hidden="true"
        />
        <div className="screenshot-frame">
          <img
            src={imageSrc}
            alt={imageAlt}
            width="333"
            height="592"
            loading="lazy"
          />
        </div>
        <span className="visual-note">Google Play screenshot</span>
      </div>
    )
  }

  return (
    <div className={`project-visual tone-${tone}`}>
      {variant === 'phone' && <PhoneMockup />}
      {variant === 'code' && <CodeMockup />}
      {variant === 'dashboard' && <BrowserMockup />}
      <span className="visual-note">Conceptual visual</span>
    </div>
  )
}
