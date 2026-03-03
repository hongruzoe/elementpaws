import { useState } from 'react';
import {
  monthToElement,
  ownerPersonalityOptions,
  petBehaviorQuestions,
  determineOwnerElement,
  determinePetElement,
} from '../data/elements';
import { trackEvent } from '../utils/analytics';
import './QuizPage.css';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function OptionCard({ value, label, selected, onChange }) {
  return (
    <button
      type="button"
      className={`option-card ${selected ? 'selected' : ''}`}
      onClick={() => onChange(value)}
    >
      <span className="option-dot" />
      <span>{label}</span>
    </button>
  );
}

export default function QuizPage({ onComplete }) {
  const [step, setStep] = useState(1); // 1 = owner, 2 = pet
  const [ownerMonth, setOwnerMonth] = useState('');
  const [ownerPersonality, setOwnerPersonality] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [petMonth, setPetMonth] = useState('');
  const [petAnswers, setPetAnswers] = useState(Array(5).fill(''));

  const totalSteps = 2;
  const progress = (step / totalSteps) * 100;

  // ── Step 1 validation ──
  const step1Valid = ownerMonth && ownerPersonality;

  // ── Step 2 validation ──
  const step2Valid = petName.trim() && petType && petMonth && petAnswers.every(a => a);

  const handleStep1Next = () => {
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = () => {
    const ownerMonthEl = monthToElement[parseInt(ownerMonth)];
    const ownerEl = determineOwnerElement(ownerMonthEl, ownerPersonality);
    const petMonthEl = monthToElement[parseInt(petMonth)];
    const petEl = determinePetElement(petMonthEl, petAnswers);

    trackEvent('quiz_complete', { owner_element: ownerEl, pet_element: petEl });

    onComplete({
      ownerElement: ownerEl,
      petElement: petEl,
      petName: petName.trim(),
      petType,
    });
  };

  return (
    <div className="quiz-page">
      <div className="container">
        {/* Progress */}
        <div className="quiz-header fade-up">
          <button className="btn-ghost quiz-back" onClick={() => step === 1 ? null : setStep(1)}>
            {step === 2 ? '← Back' : ''}
          </button>
          <span className="quiz-step-label">Step {step} of {totalSteps}</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {step === 1 && (
          <div className="quiz-section fade-up">
            <div className="section-label">About You</div>
            <h2>Let's Find Your Energy</h2>
            <p className="quiz-intro">Your elemental energy is shaped by the season you were born into.</p>

            <div className="card" style={{ marginTop: 28 }}>
              <div className="form-group">
                <label htmlFor="ownerMonth">Your Birth Month</label>
                <select
                  id="ownerMonth"
                  value={ownerMonth}
                  onChange={e => setOwnerMonth(e.target.value)}
                >
                  <option value="" disabled>Select your birth month</option>
                  {MONTHS.map((m, i) => (
                    <option key={m} value={i + 1}>{m}</option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label>Which best describes you?</label>
                <div className="option-grid">
                  {ownerPersonalityOptions.map(opt => (
                    <OptionCard
                      key={opt.value}
                      value={opt.value}
                      label={opt.label}
                      selected={ownerPersonality === opt.value}
                      onChange={setOwnerPersonality}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="quiz-nav">
              <button
                className="btn-primary w-full"
                onClick={handleStep1Next}
                disabled={!step1Valid}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="quiz-section fade-up">
            <div className="section-label">About Your Pet</div>
            <h2>Tell Us About Your Companion</h2>
            <p className="quiz-intro">Your pet's energy is written in their behavior.</p>

            <div className="card" style={{ marginTop: 28 }}>
              <div className="form-group">
                <label htmlFor="petName">Your Pet's Name</label>
                <input
                  id="petName"
                  type="text"
                  placeholder="e.g. Luna"
                  value={petName}
                  onChange={e => setPetName(e.target.value)}
                  maxLength={40}
                />
              </div>

              <div className="form-group">
                <label htmlFor="petType">Pet Type</label>
                <select
                  id="petType"
                  value={petType}
                  onChange={e => setPetType(e.target.value)}
                >
                  <option value="" disabled>Select pet type</option>
                  <option value="cat">Cat 🐱</option>
                  <option value="dog">Dog 🐶</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="petMonth">Birth or Adoption Month</label>
                <select
                  id="petMonth"
                  value={petMonth}
                  onChange={e => setPetMonth(e.target.value)}
                >
                  <option value="" disabled>Select month</option>
                  {MONTHS.map((m, i) => (
                    <option key={m} value={i + 1}>{m}</option>
                  ))}
                </select>
                <p className="quiz-hint">Don't know the exact birthday? Use the month you brought them home.</p>
              </div>
            </div>

            {/* Behavior questions */}
            {petBehaviorQuestions.map((q, qi) => (
              <div className="card quiz-q-card fade-up" key={qi} style={{ animationDelay: `${qi * 0.05}s` }}>
                <p className="quiz-q-label">Question {qi + 1} of 5</p>
                <p className="quiz-q-text">{q.question}</p>
                <div className="option-grid" style={{ marginTop: 16 }}>
                  {q.options.map(opt => (
                    <OptionCard
                      key={opt.value}
                      value={opt.value}
                      label={opt.label}
                      selected={petAnswers[qi] === opt.value}
                      onChange={val => {
                        const next = [...petAnswers];
                        next[qi] = val;
                        setPetAnswers(next);
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}

            <div className="quiz-nav">
              <button
                className="btn-primary w-full"
                onClick={handleSubmit}
                disabled={!step2Valid}
              >
                Reveal My Reading ✨
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
