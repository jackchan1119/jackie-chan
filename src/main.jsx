import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Mail,
  ExternalLink,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Network,
  MonitorCog,
  GraduationCap,
  Download,
  Award,
} from 'lucide-react';
import './styles.css';
import './certifications.css';

const experience = [
  {
    role: 'IT Support Engineer',
    company: 'Validity',
    location: 'Boston, MA',
    date: 'December 2025 – Present',
    bullets: [
      'Serve as liaison to Security and Compliance teams, collecting, validating, and delivering 20 audit evidence items for ISO 27001 controls to satisfy two SOC 2 and ISO 27001 audits.',
      'Analyze and triage 15 suspect phishing emails per week using Mimecast, Exchange message tracing, and Authentication logs.',
      'Investigate 20+ security incidents and critical CVEs, identifying 360+ devices for prioritization and reporting findings to leadership.',
      'Manage macOS security and compliance policies across 250 devices using Jamf Pro and AEM, using Defender and automated software deployment.',
      'Design and deploy Microsoft Intune environment with 53 devices enrolled at 100% compliance.',
      'Implement SAML 2.0 SSO through Microsoft Entra ID, reducing help desk tickets and strengthening group-based app assignment.'
    ]
  },
  {
    role: 'Lead Technical Support Specialist',
    company: 'HMTL',
    location: 'Boston, MA',
    date: 'October 2022 – November 2025',
    bullets: [
      'Led U.S. desktop support operations for 4,000+ employees and contractors, including executive leadership.',
      'Managed annual deployment of 300–500 laptops for employees and contractors, with 30-day deployment turnaround.',
      'Enforced endpoint security controls and supported compliance efforts, contributing to HMTL achieving ISO 27001:2022 certification.',
      'Supported security toolings including CrowdStrike EDR, GlobalProtect VPN, and Biomerge secure remote support.',
      'Managed Okta SSO applications and administered Windows endpoints via Intune, Autopilot, and Apple enrollment.'
    ]
  },
  {
    role: 'Support & Systems Specialist',
    company: 'Boston Red Sox',
    location: 'Boston, MA',
    date: 'July 2017 – April 2022',
    bullets: [
      'Supported 2,000+ front office users and scouts through ServiceNow.',
      'Administered all onboarding of new employees using Active Directory, Microsoft Exchange, Mimecast, and Cisco AnyConnect.',
      'Registered and secured over 100 devices through MDM to support Apple Business Manager.'
    ]
  }
];

// Add certificate records here after uploading each file to public/certificates/.
const certifications = [
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: 'November 2026',
    file: 'certificates/security-plus.pdf',
  },
  {
    title: 'CompTIA Network+',
    issuer: 'CompTIA',
    date: 'June 2026',
    file: 'certificates/network-plus.pdf',
  },
];

const skills = [
  { icon: ShieldCheck, title: 'Security', items: 'CrowdStrike Falcon, Mimecast, Microsoft 365 Defender, Microsoft Entra ID, ISO 27001, SOC 2' },
  { icon: Network, title: 'Infrastructure', items: 'Active Directory, Azure, Intune, Exchange, VPN, Cisco, Networking' },
  { icon: MonitorCog, title: 'Endpoint & IT', items: 'Microsoft 365, macOS, Windows, Linux, Jamf Pro, ServiceNow, SAML 2.0' },
  { icon: GraduationCap, title: 'Education', items: 'University of Massachusetts Amherst — B.S. Computer Science' }
];

function App() {
  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top">JC<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="top">
        <header className="hero">
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-content">
            <div className="status"><span /> Open to opportunities</div>
            <h1>Jackie <span>Chan</span></h1>
            <p className="subtitle">IT Support Engineer <b>→</b> Information Security</p>
            <p className="intro">Building practical security experience through endpoint management, incident triage, compliance, identity, and audit operations.</p>
            <div className="hero-actions">
              <a className="button primary" href="#experience">View experience</a>
              <a className="button" href="#contact"><Mail size={17} /> Get in touch</a>
              <a
                className="button"
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                <Download size={17} /> View résumé
              </a>
            </div>
          </div>

          <img
            className="headshot"
            src={`${import.meta.env.BASE_URL}headshot.jpg`}
            alt="Jackie Chan"
          />

          <a className="scroll" href="#about" aria-label="Scroll to about section"><ChevronDown /></a>
        </header>

        <section id="about" className="section">
          <p className="eyebrow">01 / ABOUT</p>
          <div className="about-grid">
            <h2>Turning hands-on IT experience into a security-focused career.</h2>
            <p>I’m an IT Support Engineer with 8+ years of enterprise IT experience transitioning into information security and GRC. I have evidence for ISO 27001 controls, triage phishing emails and investigate security incidents, and help maintain compliant endpoints across macOS and Windows environments.</p>
          </div>
          <div className="fact-row">
            <div><strong>8+</strong><span>Years in IT</span></div>
            <div><strong>4K+</strong><span>Users supported</span></div>
            <div><strong>360+</strong><span>Devices investigated</span></div>
          </div>
        </section>

        <section id="experience" className="section">
          <p className="eyebrow">02 / EXPERIENCE</p>
          <h2 className="section-title">Professional journey</h2>
          <div className="timeline">
            {experience.map((job) => (
              <article className="job" key={job.role + job.company}>
                <div className="job-meta">
                  <span className="date">{job.date}</span>
                  <span className="location"><MapPin size={14} /> {job.location}</span>
                </div>
                <div className="job-content">
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                  <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section certifications">
          <p className="eyebrow">03 / CERTIFICATIONS</p>
          <h2 className="section-title">Certifications & credentials</h2>
          {certifications.length ? (
            <div className="certification-grid">
              {certifications.map((cert) => (
                <article className="certification-card" key={cert.title}>
                  <Award size={24} aria-hidden="true" />
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}{cert.date ? ` · ${cert.date}` : ''}</p>
                  <a
                    className="button"
                    href={`${import.meta.env.BASE_URL}${cert.file}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} /> View certificate
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <p className="certification-empty">Certificates will be added here soon.</p>
          )}
        </section>

        <section id="skills" className="section">
          <p className="eyebrow">04 / EXPERTISE</p>
          <h2 className="section-title">Skills & knowledge</h2>
          <div className="skill-grid">
            {skills.map(({ icon: Icon, title, items }) => (
              <article className="skill-card" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{items}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Let’s connect.</h2>
          <p>I’m interested in opportunities in Information Security, GRC, and Security Operations.</p>
          <div className="contact-links">
            <a className="button primary" href="mailto:jackchan1119@gmail.com"><Mail size={17} /> jackchan1119@gmail.com</a>
            <a className="button" href="https://www.linkedin.com/in/jackiechan11" target="_blank" rel="noreferrer"><ExternalLink size={17} /> LinkedIn</a>
          </div>
        </section>
      </main>

      <footer><p>© {new Date().getFullYear()} Jackie Chan</p><a href="#top">Back to top ↑</a></footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
