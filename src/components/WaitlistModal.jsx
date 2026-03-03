import { useState } from 'react';
import { trackEvent } from '../utils/analytics';

const FORM_URL = 'https://docs.google.com/forms/d/1jZZjvK5tIOi4NWpFN7t7Bvt4v4wgeBUEVMtkGBVMNIg/formResponse';

async function submitWaitlist(name, email) {
  const body = new URLSearchParams({
    'entry.1987254885': name,
    'entry.2091162598': email,
  });
  // Google Forms doesn't support CORS — use no-cors, response is opaque but data is received
  await fetch(FORM_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });
}

export default function WaitlistModal({ petName, relationship, crystalSet, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [emailError, setEmailError] = useState('');

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    try {
      await submitWaitlist(name, email, petName, relationship, crystalSet);
      trackEvent('waitlist_submit', { relationship_type: relationship, crystal_set: crystalSet });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        {status === 'success' ? (
          <div className="text-center" style={{ padding: '16px 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>💎</div>
            <h3>You're on the list!</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: 12, lineHeight: 1.7 }}>
              We'll notify you as soon as your crystal set is ready. 💎
            </p>
            <button className="btn-primary" style={{ marginTop: 24, width: '100%' }} onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div>
                <div className="section-label">Reserve Your Set</div>
                <h3 style={{ marginTop: 4 }}>Join the Waitlist</h3>
              </div>
              <button className="btn-ghost" onClick={onClose} style={{ padding: '4px 8px', fontSize: '1.2rem' }}>×</button>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 20, lineHeight: 1.65 }}>
              Get <strong style={{ color: 'var(--gold)' }}>20% off</strong> when your personalized{' '}
              <em>{relationship} Crystal Set</em> launches.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="wl-name">Your Name</label>
                <input
                  id="wl-name"
                  type="text"
                  placeholder="First name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  maxLength={60}
                />
              </div>
              <div className="form-group">
                <label htmlFor="wl-email">Email Address</label>
                <input
                  id="wl-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                {emailError && (
                  <p style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: 4 }}>{emailError}</p>
                )}
              </div>

              {status === 'error' && (
                <p style={{ color: '#ff6b6b', fontSize: '0.85rem', marginBottom: 12 }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                className="btn-primary w-full"
                disabled={status === 'loading' || !name || !email}
              >
                {status === 'loading' ? 'Joining…' : 'Join Waitlist — Get 20% Off ✨'}
              </button>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textAlign: 'center', marginTop: 10 }}>
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
