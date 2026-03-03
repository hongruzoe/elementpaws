// All report copy organized by section

export const ownerProfiles = {
  wood: {
    title: 'Wood Soul 🌱',
    text: "Bold, driven, and always growing — you move through life like a tree reaching for sunlight. You thrive when you have a goal to chase, and your determination inspires everyone around you. Wood souls are natural leaders with a quiet strength that bends but never breaks.",
  },
  fire: {
    title: 'Fire Soul ☀️',
    text: "Warm, magnetic, and full of life — you light up every room you walk into. You love deeply, laugh loudly, and your passion is contagious. Fire souls are the heart of their community, radiating energy that draws people in like moths to a flame.",
  },
  earth: {
    title: 'Earth Soul 🏔️',
    text: "Grounded, nurturing, and endlessly dependable — you are the rock that everyone leans on. Your warmth makes people feel safe, and your patience is a gift few possess. Earth souls are the caretakers of the world, holding space for others with quiet grace.",
  },
  metal: {
    title: 'Metal Soul 🍂',
    text: "Refined, clear-minded, and quietly confident — you see the world with precision and purpose. You value quality over quantity, in everything from your friendships to your morning coffee. Metal souls carry an elegant strength, organized on the outside and deeply principled within.",
  },
  water: {
    title: 'Water Soul ❄️',
    text: "Deep, intuitive, and quietly powerful — like a still lake that reflects everything. You feel things before you understand them, and your calm presence is a safe harbor for everyone around you. Water souls are the dreamers and deep thinkers, with a hidden strength that runs beneath the surface.",
  },
};

export const petProfiles = {
  wood: {
    title: 'Wood Spirit 🌱',
    getText: (name) => `Adventurous, determined, and always on the move — ${name} charges into life headfirst. Wood spirits are the explorers of the animal world. They need movement, challenge, and the freedom to follow their nose wherever it leads.`,
  },
  fire: {
    title: 'Fire Spirit ☀️',
    getText: (name) => `Bright, magnetic, and impossible to ignore — ${name} lives life at full volume. Fire spirits are the heart of every room, radiating warmth and drawing everyone in. When ${name} is happy, the whole house feels it.`,
  },
  earth: {
    title: 'Earth Spirit 🏔️',
    getText: (name) => `Gentle, loyal, and endlessly sweet — ${name} is the calm in every storm. Earth spirits are the easygoing souls who love food, naps, and being near their favorite human. Their steady presence is a gift that never gets old.`,
  },
  metal: {
    title: 'Metal Spirit 🍂',
    getText: (name) => `Independent, dignified, and quietly observant — ${name} has a regal quality that commands respect. Metal spirits follow their own rules, prefer routine, and show love in subtle, consistent ways. They don't need the spotlight, but they always know what's going on.`,
  },
  water: {
    title: 'Water Spirit ❄️',
    getText: (name) => `Sensitive, watchful, and deeply connected — ${name} notices everything. Water spirits are the quiet observers, feeling the energy of a room before anyone else. They may be shy at first, but their bond with their human runs deeper than most.`,
  },
};

export const bondCopy = {
  soul_mirror: {
    getText: (name) => `You and ${name} are cut from the same cosmic cloth. You share the same elemental energy, which means you understand each other on a level that words can't capture. When you're calm, ${name} is calm. When you're restless, ${name} feels it too. This is a bond of deep resonance — you mirror each other's emotions, amplify each other's strengths, and yes, sometimes double each other's quirks. The key to balance? Introducing a complementary energy that gives you both room to breathe.`,
  },
  natural_nurturer: {
    getText: (name) => `You are ${name}'s sun. Your energy naturally feeds and supports theirs, like rain nourishing a garden. You may notice that ${name} visibly relaxes in your presence, or becomes more playful and confident around you. That's not a coincidence — your elemental energy is literally fuel for theirs. This is one of the most harmonious bonds in the Five Element system. Your gift is the ability to nurture without trying. Your challenge is remembering to replenish your own energy too.`,
  },
  hidden_healer: {
    getText: (name) => `Here's a beautiful secret: ${name} didn't come into your life by accident. In Five Element wisdom, ${name}'s energy naturally nourishes yours. You may have noticed that you feel calmer, happier, or more grounded since ${name} came into your life. That's not just love — that's elemental harmony at work. ${name} is your hidden healer, quietly rebalancing your energy every single day.`,
  },
  growth_partner: {
    getText: (name) => `You and ${name} have one of the most dynamic bonds in the Five Element system. Your energy challenges theirs — not to harm, but to strengthen. Think of it like a coach and a star athlete. You push ${name} to grow, and in return, ${name} teaches you patience. This bond isn't always effortless, but it's deeply transformative. The key is finding the bridge element that harmonizes your energies.`,
  },
  spirit_guardian: {
    getText: (name) => `${name} is your spiritual bodyguard. In Five Element wisdom, ${name}'s energy has the power to challenge yours — pushing you out of comfort zones you didn't even know you had. You may notice that ${name} is the one who gets you off the couch, who demands your attention when you're spiraling, who forces you to be present. That's not stubbornness — that's guardianship. ${name} is here to make you stronger.`,
  },
};

export const crystalDescriptions = {
  'Green Aventurine': {
    description: "Green Aventurine carries the fresh, forward-moving energy of Wood — growth, optimism, and gentle courage. It supports a sense of openness to new possibilities.",
    getBondSupport: (name) => `It encourages you to express your nurturing energy more visibly — strengthening the energetic thread between you and ${name}.`,
  },
  'Moss Agate': {
    description: "Moss Agate is nature captured in stone — swirling greens that echo forests and new life. It promotes a grounding energy that supports calm, steady presence.",
    getBondSupport: (name) => `On ${name}'s collar, it acts as a gentle anchor — promoting a sense of connection to home and to you, even during adventures.`,
  },
  'Carnelian': {
    description: "Carnelian radiates warm, vibrant energy that supports confidence and creative expression. Its sunset tones carry the spark of Fire element — bold and life-affirming.",
    getBondSupport: (name) => `It nurtures the warm, active energy that keeps your bond with ${name} dynamic and playful.`,
  },
  'Garnet': {
    description: "Garnet holds a rich, deep fire within — the kind that burns steady, not wild. It supports emotional warmth and loyal connection.",
    getBondSupport: (name) => `For ${name}, it promotes a sense of secure attachment — the energetic equivalent of knowing they are deeply loved.`,
  },
  'Citrine': {
    description: "Citrine carries the bright, stabilizing energy of Earth — warmth without heaviness, confidence without arrogance. It supports a positive, grounded outlook.",
    getBondSupport: (name) => `It encourages mutual trust and ease in your bond with ${name} — the kind of effortless harmony that makes every day together feel lighter.`,
  },
  "Tiger's Eye": {
    description: "Tiger's Eye shimmers with bands of gold and brown, carrying the protective energy of Earth. It promotes courage, stability, and clear-headed confidence.",
    getBondSupport: (name) => `For ${name}, it supports a sense of calm confidence — helping channel their energy into focused, grounded behavior.`,
  },
  'Clear Quartz': {
    description: "Clear Quartz is the most versatile crystal, amplifying whatever energy it touches. It carries the clean, organized energy of Metal — purifying and clarifying.",
    getBondSupport: (name) => `It amplifies the natural harmony in your bond with ${name}, supporting clear communication and mutual understanding.`,
  },
  'Moonstone': {
    description: "Moonstone glows with a soft, ethereal light that supports intuition and emotional balance. It carries Metal's refined energy in its most gentle form.",
    getBondSupport: (name) => `For ${name}, it promotes emotional attunement — supporting their natural ability to sense and respond to your feelings.`,
  },
  'Aquamarine': {
    description: "Aquamarine carries the serene, flowing energy of Water — deep calm, clarity, and gentle strength. Its ocean blue tones soothe and center.",
    getBondSupport: (name) => `It supports the deep, intuitive connection between you and ${name} — the kind of bond that doesn't need words.`,
  },
  'Lapis Lazuli': {
    description: "Lapis Lazuli holds the vast, knowing energy of Water — deep blue flecked with gold, like a night sky full of stars. It supports wisdom, truth, and inner peace.",
    getBondSupport: (name) => `For ${name}, it promotes a sense of calm watchfulness — supporting their natural sensitivity while keeping them centered.`,
  },
};

export const faqItems = [
  {
    q: "What is the Five Element system?",
    a: "The Five Element system is a 3,000-year-old wisdom tradition that maps the fundamental energies of nature — Wood, Fire, Earth, Metal, and Water — to all living beings. It's used to understand personality, relationships, and energetic balance. Our pet bond reading applies these ancient principles to reveal the unique dynamic between you and your pet.",
  },
  {
    q: "How do you determine my element and my pet's element?",
    a: "Your element is determined by your birth season and personality type. Your pet's element is determined by a combination of their birth or adoption season and their behavioral traits — because every pet expresses their energy uniquely.",
  },
  {
    q: "What if I don't know my pet's exact birthday?",
    a: "No problem! You can use the month you adopted or brought your pet home — that's the moment your energy bond began. The behavioral questions help us fine-tune your pet's element regardless of birth date.",
  },
  {
    q: "Do I need to believe in crystals for this to work?",
    a: "Our reading is designed to be a meaningful, reflective experience whether you're a crystal enthusiast or simply curious. Many people find that the relationship insights alone deepen their appreciation of their pet bond. The crystal recommendations are there for those who want to take the experience further.",
  },
  {
    q: "Is this based on real philosophy?",
    a: "Yes. The Five Element system has been a foundational framework in Eastern philosophy for over 3,000 years, used in traditional wellness practices, feng shui, and understanding of natural cycles. We've adapted it specifically for the pet-owner bond — a unique application that honors the original wisdom while making it accessible and fun.",
  },
];
