import { useCallback, useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import {
  getRelationship,
  getCrystalElement,
  crystals,
  elementInfo,
  relationshipInfo,
  getBondVariant,
} from '../data/elements';
import {
  ownerProfiles,
  petProfiles,
  bondCopy,
  crystalDescriptions,
  faqItems,
} from '../data/copy';
import { trackEvent } from '../utils/analytics';
import WaitlistModal from './WaitlistModal';
import './ReportPage.css';

// ── Site URL — replace with real domain after deploying ──
const SITE_URL = 'https://elementpaws.vercel.app';

// ── Element color helper ──
function elColor(el) {
  const map = { wood: '#4CAF50', fire: '#FF6040', earth: '#FFB347', metal: '#c0c8d0', water: '#42a5f5' };
  return map[el] || '#d4a843';
}

// ── IntersectionObserver hook ──
function useInView(callback) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) callback(); },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [callback]);
  return ref;
}

function SectionObserver({ name, children }) {
  const ref = useInView(useCallback(() => {
    trackEvent('report_section_view', { section: name });
  }, [name]));
  return <div ref={ref}>{children}</div>;
}

// ── Loading screen ──
function LoadingScreen({ onDone }) {
  const [step, setStep] = useState(0);
  const steps = ['Reading the elements…', 'Calculating your bond…', 'Selecting your crystals…', 'Preparing your report…'];
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      if (i < steps.length) setStep(i);
      else { clearInterval(timer); setTimeout(onDone, 600); }
    }, 700);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="loading-screen">
      <div className="loading-orb" />
      <div className="loading-elements">
        {['🌱','☀️','🏔️','🍂','❄️'].map((e, i) => (
          <span key={i} className="loading-el" style={{ animationDelay: `${i * 0.2}s` }}>{e}</span>
        ))}
      </div>
      <p className="loading-text">{steps[step]}</p>
    </div>
  );
}

// ── Module 1: Owner Profile ──
function OwnerProfile({ ownerElement }) {
  const info = elementInfo[ownerElement];
  const profile = ownerProfiles[ownerElement];
  return (
    <SectionObserver name="owner_profile">
      <div className="profile-card" style={{ '--el-color': elColor(ownerElement) }}>
        <div className="section-label">Your Energy</div>
        <div className="profile-header">
          <span className="profile-emoji">{info.emoji}</span>
          <div>
            <h2>{profile.title}</h2>
            <span className="profile-tag">{info.label} · {info.season}</span>
          </div>
        </div>
        <div className="profile-divider" />
        <p className="report-body">{profile.text}</p>
      </div>
    </SectionObserver>
  );
}

// ── Module 2: Pet Profile ──
function PetProfile({ petElement, petName }) {
  const info = elementInfo[petElement];
  const profile = petProfiles[petElement];
  return (
    <SectionObserver name="pet_profile">
      <div className="profile-card" style={{ '--el-color': elColor(petElement) }}>
        <div className="section-label">{petName}'s Energy</div>
        <div className="profile-header">
          <span className="profile-emoji">{info.emoji}</span>
          <div>
            <h2>{profile.title}</h2>
            <span className="profile-tag">{info.label} · {info.season}</span>
          </div>
        </div>
        <div className="profile-divider" />
        <p className="report-body">{profile.getText(petName)}</p>
      </div>
    </SectionObserver>
  );
}

// ── Module 3: Energy Bond (Hero module) ──
function EnergyBond({ relationship, ownerElement, petElement, petName }) {
  const rel = relationshipInfo[relationship];
  const variant = getBondVariant(relationship, ownerElement, petElement);
  const copy = bondCopy[relationship][variant];

  return (
    <SectionObserver name="energy_bond">
      <div className="bond-module">
        {/* Glow background */}
        <div className="bond-bg" aria-hidden="true">
          <div className="bond-orb bond-orb--owner" style={{ background: elColor(ownerElement) }} />
          <div className="bond-orb bond-orb--pet"   style={{ background: elColor(petElement) }} />
        </div>

        <div className="section-label text-center" style={{ position: 'relative', zIndex: 1 }}>Your Energy Bond</div>

        {/* Main visual */}
        <div className="bond-visual">
          <div className="bond-el-wrap" style={{ '--el-color': elColor(ownerElement) }}>
            <div className="bond-el-icon">{elementInfo[ownerElement].emoji}</div>
            <span className="bond-el-name">YOU</span>
            <span className="bond-el-sub">{elementInfo[ownerElement].label}</span>
          </div>

          {/* Energy line + center */}
          <div className="bond-center-wrap">
            <div className="bond-energy-line">
              <div className="bond-energy-dot" style={{ '--c': elColor(ownerElement) }} />
              <div className="bond-energy-line__track">
                <div className="bond-energy-line__flow" />
              </div>
              <div className="bond-energy-dot" style={{ '--c': elColor(petElement) }} />
            </div>
            <div className="bond-center-icon">{rel.emoji}</div>
          </div>

          <div className="bond-el-wrap" style={{ '--el-color': elColor(petElement) }}>
            <div className="bond-el-icon">{elementInfo[petElement].emoji}</div>
            <span className="bond-el-name">{petName.toUpperCase()}</span>
            <span className="bond-el-sub">{elementInfo[petElement].label}</span>
          </div>
        </div>

        {/* Relationship type */}
        <div className="bond-type-display">
          <h2 className="bond-type-name">{rel.name}</h2>
          <p className="bond-type-tagline">{copy.tagline}</p>
        </div>

        <div className="bond-divider" />

        <p className="bond-body">{copy.getText(petName)}</p>
      </div>
    </SectionObserver>
  );
}

// ── Module 4: Crystal Match ──
function CrystalMatch({ crystalElement, petName }) {
  const ownerCrystal = crystals[crystalElement].owner;
  const petCrystal   = crystals[crystalElement].pet;
  const ownerDesc    = crystalDescriptions[ownerCrystal.name];
  const petDesc      = crystalDescriptions[petCrystal.name];
  const elInfo       = elementInfo[crystalElement];
  const color        = elColor(crystalElement);

  return (
    <SectionObserver name="crystal_match">
      <div className="report-module crystal-module">
        <div className="section-label">Your Crystal Match</div>
        <h2>Your Matched Crystal Set</h2>
        <p className="crystal-el-tag" style={{ color }}>
          {elInfo.emoji} {elInfo.label} Energy Bridge
        </p>
        <div className="divider" />

        <div className="crystal-pair">
          {/* Owner crystal */}
          <div className="crystal-card" style={{ '--el-color': color }}>
            <div className="crystal-card-header">
              <span className="crystal-emoji">{ownerCrystal.emoji}</span>
              <div>
                <h3>{ownerCrystal.name}</h3>
                <p className="crystal-subtitle">{ownerCrystal.subtitle}</p>
              </div>
            </div>
            <span className="crystal-for-badge">For You</span>
            <p className="crystal-desc">{ownerDesc.description}</p>
            <div className="crystal-bond-support">
              <span className="crystal-bond-label">How it supports your bond</span>
              <p>{ownerDesc.getBondSupport(petName)}</p>
            </div>
          </div>

          {/* Pet crystal */}
          <div className="crystal-card" style={{ '--el-color': color }}>
            <div className="crystal-card-header">
              <span className="crystal-emoji">{petCrystal.emoji}</span>
              <div>
                <h3>{petCrystal.name}</h3>
                <p className="crystal-subtitle">{petCrystal.subtitle}</p>
              </div>
            </div>
            <span className="crystal-for-badge">For {petName}</span>
            <p className="crystal-desc">{petDesc.description}</p>
            <div className="crystal-bond-support">
              <span className="crystal-bond-label">How it supports your bond</span>
              <p>{petDesc.getBondSupport(petName)}</p>
            </div>
          </div>
        </div>

        {/* Why set */}
        <div className="why-set-box">
          <p className="why-set-title">✦ Why a Matched Set?</p>
          <p>A single crystal supports one energy. But when you and your pet each carry a crystal chosen specifically for your unique elemental bond, you create something more powerful — an energy bridge. Think of it like two tuning forks tuned to the same note: when one vibrates, the other naturally responds. Your crystals are tuned to the frequency of your bond.</p>
        </div>
      </div>
    </SectionObserver>
  );
}

// ── Share card content (used in both preview and capture) ──
function ShareCardContent({ relationship, ownerElement, petElement, petName }) {
  const rel = relationshipInfo[relationship];
  const variant = getBondVariant(relationship, ownerElement, petElement);
  const copy = bondCopy[relationship][variant];

  const bodyText = copy.getText(petName);
  const shortText = bodyText.split('. ').slice(0, 2).join('. ') + '.';

  return (
    <>
      {/* Background */}
      <div className="scc-bg" />

      {/* Stars */}
      <div className="scc-stars">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="scc-star" style={{
            left: `${(i * 41 + 13) % 100}%`,
            top: `${(i * 59 + 17) % 100}%`,
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
            opacity: 0.3 + (i % 5) * 0.12,
          }} />
        ))}
      </div>

      {/* Flex content wrapper — fills full height, distributes sections */}
      <div className="scc-content">
        {/* Top section */}
        <div className="scc-top">
          <div className="scc-brand">✦ Five Element Bonds ✦</div>

          <div className="scc-elements">
            <div className="scc-el" style={{ '--c': elColor(ownerElement) }}>
              <span className="scc-el-icon">{elementInfo[ownerElement].emoji}</span>
              <span className="scc-el-label">YOU</span>
            </div>
            <div className="scc-center">
              <span className="scc-rel-emoji">{rel.emoji}</span>
            </div>
            <div className="scc-el" style={{ '--c': elColor(petElement) }}>
              <span className="scc-el-icon">{elementInfo[petElement].emoji}</span>
              <span className="scc-el-label">{petName}</span>
            </div>
          </div>

          <div className="scc-who">Me & {petName}</div>
        </div>

        {/* Middle section */}
        <div className="scc-middle">
          <div className="scc-rel-name">{rel.emoji} {rel.name}</div>
          <div className="scc-rel-tagline">{copy.tagline}</div>
          <div className="scc-quote">"{shortText}"</div>
        </div>

        {/* Bottom section */}
        <div className="scc-bottom">
          <p className="scc-bottom-title">Discover the Unique Energy Bond Between You and Your Pet</p>
          <p className="scc-bottom-url">{SITE_URL}</p>
        </div>
      </div>
    </>
  );
}

// ── Module 5: Share & CTA ──
function ShareCTA({ relationship, ownerElement, petElement, petName, crystalElement, onWaitlist }) {
  const rel = relationshipInfo[relationship];
  const ownerCrystal = crystals[crystalElement].owner;
  const petCrystal   = crystals[crystalElement].pet;
  const elInfo       = elementInfo[crystalElement];
  const color        = elColor(crystalElement);
  const cardRef      = useRef(null);
  const [generating, setGenerating] = useState(false);

  const handleDownload = async () => {
    trackEvent('share_click', { platform: 'download_card' });
    setGenerating(true);
    try {
      const el = cardRef.current;
      // Temporarily remove transform so html2canvas captures at full 540×675
      const savedTransform = el.style.transform;
      el.style.transform = 'none';
      el.style.transformOrigin = 'top left';

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#0d1b2a',
        logging: false,
        width: 540,
        height: 675,
      });

      el.style.transform = savedTransform;

      const link = document.createElement('a');
      link.download = `five-element-bond-${petName.toLowerCase()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Share card generation failed:', err);
      alert('Could not generate image. Try copying the link instead!');
    } finally {
      setGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(SITE_URL);
    trackEvent('share_click', { platform: 'copy_link' });
    alert('Link copied! ✨');
  };

  const handleWaitlistClick = () => {
    trackEvent('waitlist_cta_click');
    onWaitlist();
  };

  return (
    <SectionObserver name="share_cta">
      <div className="report-module share-module">
        <div className="section-label">Share Your Bond</div>
        <h2>Tell the World ✨</h2>

        {/* Card preview — scaled down version for display */}
        <div className="share-preview-wrap">
          <div ref={cardRef} className="share-canvas-card" aria-hidden="true">
            <ShareCardContent
              relationship={relationship}
              ownerElement={ownerElement}
              petElement={petElement}
              petName={petName}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="share-actions">
          <button className="btn-primary share-download-btn" onClick={handleDownload} disabled={generating}>
            {generating ? 'Generating…' : 'Download & Share ✨'}
          </button>
          <button className="btn-ghost" onClick={handleCopy}>🔗 Copy Link</button>
        </div>

        {/* Waitlist CTA */}
        <div className="waitlist-box">
          <p className="waitlist-eyebrow">✨ Bring Your Bond to Life</p>
          <h3>Your {rel.name} Crystal Set is being crafted.</h3>
          <p className="waitlist-crystals">
            <span style={{ color }}>{ownerCrystal.emoji} {ownerCrystal.name}</span>
            {' '}pendant +{' '}
            <span style={{ color }}>{petCrystal.emoji} {petCrystal.name}</span>
            {' '}collar charm
          </p>
          <p className="waitlist-sub">
            Personalized for You & {petName}'s{' '}
            <span style={{ color }}>{elInfo.label}</span> energy bridge.
          </p>
          <button className="btn-primary waitlist-btn" onClick={handleWaitlistClick}>
            Join the Waitlist — Get 20% Off at Launch
          </button>
        </div>
      </div>
    </SectionObserver>
  );
}

// ── FAQ ──
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <SectionObserver name="faq">
      <div className="faq-section container">
        <div className="section-label text-center">Questions</div>
        <h2 className="text-center" style={{ marginBottom: 32 }}>Frequently Asked</h2>
        {faqItems.map((item, i) => (
          <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}
               onClick={() => setOpen(open === i ? null : i)}>
            <div className="faq-q">
              <span>{item.q}</span>
              <span className="faq-arrow">{open === i ? '▲' : '▼'}</span>
            </div>
            {open === i && <p className="faq-a">{item.a}</p>}
          </div>
        ))}
      </div>
    </SectionObserver>
  );
}

// ── Main Report ──
export default function ReportPage({ ownerElement, petElement, petName, onRestart }) {
  const [loading, setLoading] = useState(true);
  const [showWaitlist, setShowWaitlist] = useState(false);

  const relationship    = getRelationship(ownerElement, petElement);
  const crystalElement  = getCrystalElement(relationship, ownerElement, petElement);

  if (loading) return <LoadingScreen onDone={() => setLoading(false)} />;

  return (
    <div className="report-page">
      <div className="container">
        {/* Header */}
        <div className="report-header fade-up">
          <div className="section-label text-center">Your Reading</div>
          <h1 className="text-center">
            {elementInfo[ownerElement].emoji} You &amp; {petName} {elementInfo[petElement].emoji}
          </h1>
          <p className="report-subtitle text-center">
            {relationshipInfo[relationship].emoji}{' '}
            <strong style={{ color: 'var(--gold)' }}>{relationshipInfo[relationship].name}</strong>
            {' '}— {relationshipInfo[relationship].tagline}
          </p>
        </div>

        {/* Modules 1 & 2 — side by side on desktop */}
        <div className="profiles-row fade-up">
          <OwnerProfile ownerElement={ownerElement} />
          <PetProfile petElement={petElement} petName={petName} />
        </div>

        {/* Module 3 — full width, hero */}
        <EnergyBond
          relationship={relationship}
          ownerElement={ownerElement}
          petElement={petElement}
          petName={petName}
        />

        {/* Module 4 */}
        <CrystalMatch crystalElement={crystalElement} petName={petName} />

        {/* Module 5 */}
        <ShareCTA
          relationship={relationship}
          ownerElement={ownerElement}
          petElement={petElement}
          petName={petName}
          crystalElement={crystalElement}
          onWaitlist={() => setShowWaitlist(true)}
        />
      </div>

      <FAQ />

      <div className="report-footer container text-center">
        <button className="btn-ghost" onClick={onRestart}>↩ Start Over</button>
        <p className="text-muted" style={{ fontSize: '0.75rem', marginTop: 8 }}>✦ Five Element Bonds ✦</p>
      </div>

      {showWaitlist && (
        <WaitlistModal
          petName={petName}
          relationship={relationshipInfo[relationship].name}
          crystalSet={`${crystals[crystalElement].owner.name} + ${crystals[crystalElement].pet.name}`}
          onClose={() => setShowWaitlist(false)}
        />
      )}
    </div>
  );
}
