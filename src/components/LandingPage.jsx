import { trackEvent } from '../utils/analytics';
import './LandingPage.css';

export default function LandingPage({ onStart }) {
  const handleStart = () => {
    trackEvent('quiz_start');
    onStart();
  };

  return (
    <div className="landing">
      {/* Stars */}
      <div className="stars" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="star" style={{
            left: `${(i * 37 + 11) % 100}%`,
            top: `${(i * 53 + 7) % 100}%`,
            animationDelay: `${(i * 0.3) % 4}s`,
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
          }} />
        ))}
      </div>

      <div className="landing__inner">
        {/* Brand */}
        <div className="landing__brand fade-up">
          <span className="landing__logo">✦ Five Element Bonds ✦</span>
        </div>

        {/* Element icons */}
        <div className="landing__elements fade-up" style={{ animationDelay: '0.1s' }} aria-hidden="true">
          <span className="el-icon wood">🌱</span>
          <span className="el-icon fire">☀️</span>
          <span className="el-icon earth">🏔️</span>
          <span className="el-icon metal">🍂</span>
          <span className="el-icon water">❄️</span>
        </div>

        {/* Headline */}
        <h1 className="landing__title fade-up" style={{ animationDelay: '0.2s' }}>
          Discover the Unique Energy Bond Between You and Your Pet
        </h1>

        <p className="landing__subtitle fade-up" style={{ animationDelay: '0.3s' }}>
          Based on ancient Five Element wisdom — a 3,000-year-old system that maps the energies
          of nature to every living being — find out what makes your bond unique, and which crystals
          strengthen it.
        </p>

        {/* ── Desktop two-column: Hero Image + How It Works ── */}
        <div className="hero-hiw-row fade-up" style={{ animationDelay: '0.35s' }}>
          {/* Left: Hero Image */}
          <div className="hero-hiw-col-image">
            <div className="hero-image-wrap">
              <img
                src="/images/hero.png"
                alt="A person holding their pet, surrounded by crystal and elemental energy"
                className="hero-image"
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="hero-placeholder" style={{ display: 'none' }}>
                <span>🐾</span>
                <p>Your Bond, Illuminated</p>
              </div>
            </div>
          </div>

          {/* Right: How It Works */}
          <div className="hero-hiw-col-steps">
            <div className="how-it-works">
              <div className="hiw-label">How It Works</div>
              <div className="hiw-steps">
                <div className="hiw-step">
                  <span className="hiw-icon">🐾</span>
                  <div className="hiw-step-text">
                    <h4>Tell us about you & your pet</h4>
                    <p>2-minute quiz</p>
                  </div>
                </div>
                <div className="hiw-connector" aria-hidden="true">↓</div>
                <div className="hiw-step">
                  <span className="hiw-icon">✨</span>
                  <div className="hiw-step-text">
                    <h4>Discover your energy bond</h4>
                    <p>Five Element analysis</p>
                  </div>
                </div>
                <div className="hiw-connector" aria-hidden="true">↓</div>
                <div className="hiw-step">
                  <span className="hiw-icon">💎</span>
                  <div className="hiw-step-text">
                    <h4>Get your crystal match</h4>
                    <p>Personalized crystal recommendation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Social Proof ── */}
        <div className="social-proof fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="sp-stat">
            <span className="sp-number">2,000+</span>
            <span className="sp-text">pet bonds discovered</span>
          </div>
          <div className="sp-divider" aria-hidden="true" />
          <div className="sp-stat">
            <span className="sp-number">30+</span>
            <span className="sp-text">countries represented</span>
          </div>
        </div>

        {/* Body copy */}
        <p className="landing__body fade-up" style={{ animationDelay: '0.55s' }}>
          Your pet didn't come to you by accident. The Five Element system reveals that every
          pet-owner bond carries a unique energy dynamic — one that can be nurtured with the right
          crystals. Take this 2-minute reading to uncover yours.
        </p>

        {/* CTA */}
        <div className="landing__cta fade-up" style={{ animationDelay: '0.6s' }}>
          <button className="btn-primary landing__btn" onClick={handleStart}>
            Start Your Reading ✨
          </button>
          <p className="landing__note">Free · 2 minutes · No sign-up required</p>
        </div>

        {/* Trust badges */}
        <div className="landing__badges fade-up" style={{ animationDelay: '0.7s' }}>
          <span>🌿 Ancient Eastern Wisdom</span>
          <span>💎 Personalized Crystal Match</span>
          <span>🐾 For Cats & Dogs</span>
        </div>
      </div>
    </div>
  );
}
