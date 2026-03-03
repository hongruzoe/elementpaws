// Month → Element mapping
export const monthToElement = {
  1: 'water', 2: 'earth', 3: 'wood', 4: 'wood',
  5: 'earth', 6: 'fire', 7: 'fire', 8: 'earth',
  9: 'metal', 10: 'metal', 11: 'earth', 12: 'water',
};

// Owner personality question options
export const ownerPersonalityOptions = [
  { value: 'wood', label: "I'm always on the move, chasing the next goal" },
  { value: 'fire', label: "I light up every room and love being around people" },
  { value: 'earth', label: "I'm the one everyone comes to for support and comfort" },
  { value: 'metal', label: "I like things organized, clean and under control" },
  { value: 'water', label: "I'm a deep thinker, I need quiet time to recharge" },
];

// Pet behavior questions
export const petBehaviorQuestions = [
  {
    question: "In a new environment, your pet usually...",
    options: [
      { value: 'wood', label: "Rushes in to explore everything immediately" },
      { value: 'fire', label: "Gets excited, wants to meet everyone" },
      { value: 'earth', label: "Slowly sniffs around, then settles in comfortably" },
      { value: 'metal', label: "Observes calmly from a distance, approaches carefully" },
      { value: 'water', label: "Hides first, then cautiously peeks out" },
    ],
  },
  {
    question: "When meeting new people, your pet...",
    options: [
      { value: 'wood', label: "Goes straight up to them, tail wagging" },
      { value: 'fire', label: "Jumps all over them with kisses" },
      { value: 'earth', label: "Leans against them for pets" },
      { value: 'metal', label: "Sniffs politely but keeps their space" },
      { value: 'water', label: "Stays close to you and watches" },
    ],
  },
  {
    question: "Your pet's energy level is best described as...",
    options: [
      { value: 'wood', label: "Athletic and always ready for action" },
      { value: 'fire', label: "High energy with bursts of crazy zoomies" },
      { value: 'earth', label: "Steady and laid-back, happy to lounge" },
      { value: 'metal', label: "Consistent and predictable, follows routines" },
      { value: 'water', label: "Quiet with occasional intense focus" },
    ],
  },
  {
    question: "When you're feeling sad, your pet...",
    options: [
      { value: 'wood', label: "Brings you a toy to play" },
      { value: 'fire', label: "Gets extra clingy and won't leave your side" },
      { value: 'earth', label: "Sits quietly next to you, just being there" },
      { value: 'metal', label: "Watches you from across the room, keeping guard" },
      { value: 'water', label: "Comes close and stares at you with deep eyes" },
    ],
  },
  {
    question: "Your pet's biggest quirk is...",
    options: [
      { value: 'wood', label: "They're stubborn and always want to lead" },
      { value: 'fire', label: "They're dramatic and love being the center of attention" },
      { value: 'earth', label: "They're a food lover, always thinking about treats" },
      { value: 'metal', label: "They're picky about their space and routine" },
      { value: 'water', label: "They're sensitive to sounds and changes" },
    ],
  },
];

// Element display info
export const elementInfo = {
  wood: { label: 'Wood', emoji: '🌱', color: '#4CAF50', season: 'Spring' },
  fire: { label: 'Fire', emoji: '☀️', color: '#FF5722', season: 'Summer' },
  earth: { label: 'Earth', emoji: '🏔️', color: '#FF9800', season: 'Transition' },
  metal: { label: 'Metal', emoji: '🍂', color: '#9E9E9E', season: 'Autumn' },
  water: { label: 'Water', emoji: '❄️', color: '#2196F3', season: 'Winter' },
};

// Generation cycle: wood → fire → earth → metal → water → wood
// Control cycle: wood → earth, earth → water, water → fire, fire → metal, metal → wood

const generates = { wood: 'fire', fire: 'earth', earth: 'metal', metal: 'water', water: 'wood' };
const controls = { wood: 'earth', earth: 'water', water: 'fire', fire: 'metal', metal: 'wood' };

export function getRelationship(ownerEl, petEl) {
  if (ownerEl === petEl) return 'soul_mirror';
  if (generates[ownerEl] === petEl) return 'natural_nurturer';
  if (generates[petEl] === ownerEl) return 'hidden_healer';
  if (controls[ownerEl] === petEl) return 'growth_partner';
  if (controls[petEl] === ownerEl) return 'spirit_guardian';
  return 'soul_mirror'; // fallback
}

export const relationshipInfo = {
  soul_mirror: { name: 'Soul Mirror', emoji: '🪞', tagline: 'Same Cosmic Energy' },
  natural_nurturer: { name: 'Natural Nurturer', emoji: '🌻', tagline: 'You Fuel Their World' },
  hidden_healer: { name: 'Hidden Healer', emoji: '🎁', tagline: 'They Restore Your Soul' },
  growth_partner: { name: 'Growth Partner', emoji: '⚡', tagline: 'Dynamic & Transformative' },
  spirit_guardian: { name: 'Spirit Guardian', emoji: '🛡️', tagline: 'They Make You Stronger' },
};

// Crystal pool
export const crystals = {
  wood: {
    owner: { name: 'Green Aventurine', subtitle: 'The Stone of New Beginnings', emoji: '💚' },
    pet: { name: 'Moss Agate', subtitle: 'The Stone of Steady Growth', emoji: '🌿' },
  },
  fire: {
    owner: { name: 'Carnelian', subtitle: 'The Stone of Joyful Courage', emoji: '🔥' },
    pet: { name: 'Garnet', subtitle: 'The Stone of Deep Devotion', emoji: '❤️' },
  },
  earth: {
    owner: { name: 'Citrine', subtitle: 'The Stone of Sunny Confidence', emoji: '☀️' },
    pet: { name: "Tiger's Eye", subtitle: 'The Stone of Grounded Strength', emoji: '🐯' },
  },
  metal: {
    owner: { name: 'Clear Quartz', subtitle: 'The Stone of Pure Clarity', emoji: '🔮' },
    pet: { name: 'Moonstone', subtitle: 'The Stone of Gentle Intuition', emoji: '🌙' },
  },
  water: {
    owner: { name: 'Aquamarine', subtitle: 'The Stone of Calm Depths', emoji: '💧' },
    pet: { name: 'Lapis Lazuli', subtitle: 'The Stone of Inner Wisdom', emoji: '💙' },
  },
};

// Child element (what an element generates)
const childElement = generates; // same map

// Bridge element for control relationships
function getBridgeElement(from, to) {
  // Bridge: from generates Bridge, Bridge generates to
  for (const [k, v] of Object.entries(generates)) {
    if (k !== from && k !== to && generates[from] === k && generates[k] === to) {
      return k;
    }
    // Actually let's do it simply: bridge = what `from` generates IF that also generates `to`
  }
  // fallback: find X such that generates[from] === X and generates[X] === to
  const mid = generates[from];
  if (generates[mid] === to) return mid;
  return mid;
}

export function getCrystalElement(relationship, ownerEl, petEl) {
  switch (relationship) {
    case 'soul_mirror':
      return childElement[ownerEl]; // child of the shared element
    case 'natural_nurturer':
      return ownerEl; // owner replenishes their own energy
    case 'hidden_healer':
      return petEl; // pet's element
    case 'growth_partner': {
      // owner controls pet → bridge = owner generates X, X generates pet
      const bridge = generates[ownerEl];
      return generates[bridge] === petEl ? bridge : generates[ownerEl];
    }
    case 'spirit_guardian': {
      // pet controls owner → bridge = pet generates X, X generates owner
      const bridge = generates[petEl];
      return generates[bridge] === ownerEl ? bridge : generates[petEl];
    }
    default:
      return ownerEl;
  }
}

// Determine pet element from behavior answers + month
export function determinePetElement(monthEl, behaviorAnswers) {
  const counts = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
  behaviorAnswers.forEach(a => { if (a) counts[a]++; });
  const maxCount = Math.max(...Object.values(counts));
  const topElements = Object.entries(counts)
    .filter(([, v]) => v === maxCount)
    .map(([k]) => k);

  if (topElements.length === 1) return topElements[0];
  // tie: prefer the one matching month
  if (topElements.includes(monthEl)) return monthEl;
  return topElements[0];
}

// Determine owner element from month + personality
export function determineOwnerElement(monthEl, personalityEl) {
  if (personalityEl !== monthEl) return personalityEl;
  return monthEl;
}

// Bond copy variant selector — returns 'A' or 'B'
// Based on CLAUDE.md variant rules for each relationship type
export function getBondVariant(relationship, ownerEl, petEl) {
  const combo = `${ownerEl}+${petEl}`;
  const variantA = {
    soul_mirror:      ['wood+wood', 'fire+fire'],
    natural_nurturer: ['water+wood', 'earth+metal'],
    hidden_healer:    ['water+metal', 'wood+water'],
    growth_partner:   ['wood+earth', 'water+fire'],
    spirit_guardian:  ['earth+wood', 'fire+water'],
  };
  const setA = variantA[relationship] || [];
  return setA.includes(combo) ? 'A' : 'B';
}
