import { useEffect, useRef, useState } from 'react';
import {
  getRelationship,
  getCrystalElement,
  crystals,
  elementInfo,
  relationshipInfo,
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

// ── Intersection Observer hook ──
function useInView(callback) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) callback(); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [callback]);
  return ref;
}

function SectionObserver({ name, children }) {
  const ref = useInView(() => {
    trackEvent('report_section_view', { section: name });
  });
  return <div ref={ref}>{children}</div>;
}

// ── Element color helper ──
function elColor(el) {
  const map = { wood: '#4CAF50', fire: '#FF5722', earth: '#FF9800', metal: '#b0bec5', water: '#42a5f5' };
  return map[el] || '#d4a843';
}

// ── Loading screen ──
function LoadingScreen({ onDone }) {
  const [step, setStep] = useState(0);
  const steps = [
    'Reading the elements…',
    'Calculating your bond…',
    'Selecting your crystals…',
    'Preparing your report…',
  ];

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
      <div className="report-module">
        <div className="section-label">Your Energy Profile</div>
        <div className="module-element-header" style={{ '--el-color': elColor(ownerElement) }}>
          <span className="module-el-emoji">{info.emoji}</span>
          <div>
            <h2>{profile.title}</h2>
            <span className="module-el-tag">{info.label} Element · {info.season}</span>
          </div>
        </div>
        <div className="divider" />
        <p className="module-body">{profile.text}</p>
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
      <div className="report-module">
        <div className="section-label">{petName}'s Energy Profile</div>
        <div className="module-element-header" style={{ '--el-color': elColor(petElement) }}>
          <span className="module-el-emoji">{info.emoji}</span>
          <div>
            <h2>{profile.title}</h2>
            <span className="module-el-tag">{info.label} Element · {info.season}</span>
          </div>
        </div>
        <div className="divider" />
        <p className="module-body">{profile.getText(petName)}</p>
      </div>
    </SectionObserver>
  );
}

// ── Module 3: Energy Bond ──
function EnergyBond({ relationship, ownerElement, petElement, petName }) {
  const rel = relationshipInfo[relationship];
  const copy = bondCopy[relationship];
  return (
    <SectionObserver name="energy_bond">
      <div className="report-module bond-module">
        <div className="section-label">Your Energy Bond</div>

        {/* Bond visual */}
        <div className="bond-visual">
          <div className="bond-el" style={{ '--el-color': elColor(ownerElement) }}>
            <span>{elementInfo[ownerElement].emoji}</span>
            <small>You</small>
          </div>
          <div className="bond-center">
            <span className="bond-emoji">{rel.emoji}</span>
            <span className="bond-type-name">{rel.name}</span>
          </div>
          <div className="bond-el" style={{ '--el-color': elColor(petElement) }}>
            <span>{elementInfo[petElement].emoji}</span>
            <small>{petName}</small>
          </div>
        </div>

        <div className="bond-tagline">{rel.tagline}</div>

        <div className="divider" />
        <p className="module-body">{copy.getText(petName)}</p>
      </div>
    </SectionObserver>
  );
}

// ── Module 4: Crystal Match ──
function CrystalMatch({ crystalElement, petName, relationship }) {
  const ownerCrystal = crystals[crystalElement].owner;
  const petCrystal = crystals[crystalElement].pet;
  const ownerDesc = crystalDescriptions[ownerCrystal.name];
  const petDesc = crystalDescriptions[petCrystal.name];
  const elInfo = elementInfo[crystalElement];

  return (
    <SectionObserver name="crystal_match">
      <div className="report-module crystal-module">
        <div className="section-label">Your Crystal Match</div>
        <h2>Your Matched Crystal Set</h2>
        <p className="crystal-el-tag" style={{ color: elColor(crystalElement) }}>
          {elInfo.emoji} {elInfo.label} Energy Bridge
        </p>

        <div className="divider" />

        {/* Owner crystal */}
        <div className="crystal-card" style={{ '--el-color': elColor(crystalElement) }}>
          <div className="crystal-card-header">
            <span className="crystal-emoji">{ownerCrystal.emoji}</span>
            <div>
              <h3>{ownerCrystal.name}</h3>
              <p className="crystal-subtitle">{ownerCrystal.subtitle}</p>
            </div>
            <span className="crystal-for-badge">For You</span>
          </div>
          <p className="crystal-desc">{ownerDesc.description}</p>
          <div className="crystal-bond-support">
            <span className="crystal-bond-label">How it supports your bond</span>
            <p>{ownerDesc.getBondSupport(petName)}</p>
          </div>
        </div>

        {/* Pet crystal */}
        <div className="crystal-card" style={{ '--el-color': elColor(crystalElement), marginTop: 16 }}>
          <div className="crystal-card-header">
            <span className="crystal-emoji">{petCrystal.emoji}</span>
            <div>
              <h3>{petCrystal.name}</h3>
              <p className="crystal-subtitle">{petCrystal.subtitle}</p>
            </div>
            <span className="crystal-for-badge">For {petName}</span>
          </div>
          <p className="crystal-desc">{petDesc.description}</p>
          <div className="crystal-bond-support">
            <span className="crystal-bond-label">How it supports your bond</span>
            <p>{petDesc.getBondSupport(petName)}</p>
          </div>
        </div>

        {/* Why a matched set */}
        <div className="why-set-box">
          <p className="why-set-title">✦ Why a Matched Set?</p>
          <p>
            A single crystal supports one energy. But when you and your pet each carry a crystal
            chosen specifically for your unique elemental bond, you create something more powerful —
            an energy bridge. Think of it like two tuning forks tuned to the same note: when one
            vibrates, the other naturally responds. Your crystals are tuned to the frequency of
            your bond. This is something you can't get from buying two random crystals — this
            pairing was chosen for your specific connection.
          </p>
        </div>
      </div>
    </SectionObserver>
  );
}

// ── Module 5: Share & CTA ──
function ShareCTA({ relationship, ownerElement, petElement, petName, crystalElement, onWaitlist }) {
  const rel = relationshipInfo[relationship];
  const ownerCrystal = crystals[crystalElement].owner;
  const petCrystal = crystals[crystalElement].pet;
  const elInfo = elementInfo[crystalElement];

  const shareText = `I just discovered me and ${petName} are ${rel.name} ${rel.emoji} — what's your pet bond?`;
  const siteUrl = window.location.href.split('?')[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText} ${siteUrl}`);
    trackEvent('share_click', { platform: 'copy_link' });
    alert('Link copied! ✨');
  };

  const handleNative = (platform) => {
    trackEvent('share_click', { platform });
    if (navigator.share) {
      navigator.share({ title: 'Five Element Bond Reading', text: shareText, url: siteUrl });
    } else {
      handleCopy();
    }
  };

  const handleWaitlistClick = () => {
    trackEvent('waitlist_cta_click');
    onWaitlist();
  };

  return (
    <SectionObserver name="share_cta">
      <div className="report-module share-module">
        {/* Share card visual */}
        <div className="share-card">
          <div className="share-card-brand">✦ Five Element Bonds ✦</div>
          <div className="share-card-bond">
            <span style={{ color: elColor(ownerElement), fontSize: '2rem' }}>{elementInfo[ownerElement].emoji}</span>
            <div className="share-card-center">
              <span className="share-bond-emoji">{rel.emoji}</span>
              <span className="share-bond-name">{rel.name}</span>
            </div>
            <span style={{ color: elColor(petElement), fontSize: '2rem' }}>{elementInfo[petElement].emoji}</span>
          </div>
          <p className="share-card-tagline">Me & {petName} are {rel.name}</p>
          <p className="share-card-url">{siteUrl}</p>
        </div>

        {/* Share buttons */}
        <div className="share-buttons">
          <button className="btn-secondary share-btn" onClick={() => handleNative('instagram')}>
            📸 Share to Instagram
          </button>
          <button className="btn-secondary share-btn" onClick={() => handleNative('tiktok')}>
            🎵 Share to TikTok
          </button>
          <button className="btn-ghost share-btn" onClick={handleCopy}>
            🔗 Copy Link
          </button>
        </div>

        {/* Waitlist CTA */}
        <div className="waitlist-box">
          <p className="waitlist-eyebrow">✨ Bring Your Bond to Life</p>
          <h3>Your {rel.name} Crystal Set is being crafted.</h3>
          <p className="waitlist-crystals">
            <span style={{ color: elColor(crystalElement) }}>{ownerCrystal.emoji} {ownerCrystal.name}</span>
            {' '}pendant +{' '}
            <span style={{ color: elColor(crystalElement) }}>{petCrystal.emoji} {petCrystal.name}</span>
            {' '}collar charm
          </p>
          <p className="waitlist-sub">
            Personalized for You & {petName}'s{' '}
            <span style={{ color: elColor(crystalElement) }}>{elInfo.label}</span>
            {' '}energy bridge.
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
          <div
            key={i}
            className={`faq-item ${open === i ? 'open' : ''}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
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

// ── Main Report Page ──
export default function ReportPage({ ownerElement, petElement, petName, onRestart }) {
  const [loading, setLoading] = useState(true);
  const [showWaitlist, setShowWaitlist] = useState(false);

  const relationship = getRelationship(ownerElement, petElement);
  const crystalElement = getCrystalElement(relationship, ownerElement, petElement);

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

        {/* 5 modules */}
        <OwnerProfile ownerElement={ownerElement} />
        <PetProfile petElement={petElement} petName={petName} />
        <EnergyBond
          relationship={relationship}
          ownerElement={ownerElement}
          petElement={petElement}
          petName={petName}
        />
        <CrystalMatch
          crystalElement={crystalElement}
          petName={petName}
          relationship={relationship}
        />
        <ShareCTA
          relationship={relationship}
          ownerElement={ownerElement}
          petElement={petElement}
          petName={petName}
          crystalElement={crystalElement}
          onWaitlist={() => setShowWaitlist(true)}
        />
      </div>

      {/* FAQ */}
      <FAQ />

      {/* Restart */}
      <div className="report-footer container text-center">
        <button className="btn-ghost" onClick={onRestart}>↩ Start Over</button>
        <p className="text-muted" style={{ fontSize: '0.75rem', marginTop: 8 }}>
          ✦ Five Element Bonds ✦
        </p>
      </div>

      {/* Waitlist Modal */}
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
