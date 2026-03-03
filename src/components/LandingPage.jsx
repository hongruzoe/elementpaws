import { trackEvent } from '../utils/analytics';
import './LandingPage.css';

export default function LandingPage({ onStart }) {
  const handleStart = () => {
    trackEvent('quiz_start');
    onStart();
  };

  return (
    <div className="landing">
      {/* Stars decoration */}
      <div className="stars" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="star" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
          }} />
        ))}
      </div>

      <div className="landing__inner container">
        {/* Logo / brand */}
        <div className="landing__brand fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="landing__logo">✦ Five Element Bonds ✦</span>
        </div>

        {/* Hero elements row */}
        <div className="landing__elements fade-up" style={{ animationDelay: '0.2s' }} aria-hidden="true">
          <span className="el-icon wood">🌱</span>
          <span className="el-icon fire">☀️</span>
          <span className="el-icon earth">🏔️</span>
          <span className="el-icon metal">🍂</span>
          <span className="el-icon water">❄️</span>
        </div>

        {/* Main headline */}
        <h1 className="landing__title fade-up" style={{ animationDelay: '0.3s' }}>
          Discover the Ancient Energy Bond Between You and Your Pet
        </h1>

        <div className="divider" style={{ marginTop: 28, marginBottom: 28 }} />

        <p className="landing__subtitle fade-up" style={{ animationDelay: '0.4s' }}>
          Based on the ancient Five Element wisdom — a 3,000-year-old system that maps the energies
          of nature to every living being — find out what makes your bond unique, and which crystals
          strengthen it.
        </p>

        <p className="landing__body fade-up" style={{ animationDelay: '0.5s' }}>
          Your pet didn't come to you by accident. The Five Element system reveals that every
          pet-owner bond carries a unique energy dynamic — one that can be nurtured with the right
          crystals. Take this 2-minute reading to uncover yours.
        </p>

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
