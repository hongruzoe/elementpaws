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

// ── Module 3 Bond Copy — 10 sets (A/B per relationship) ──

export const bondCopy = {
  soul_mirror: {
    A: {
      // Wood+Wood, Fire+Fire
      tagline: 'Double the Energy, Double the Magic',
      getText: (name) => `You and ${name} are a double dose of the same unstoppable energy. You both live life in the fast lane — always moving, always chasing, always burning bright. When you're excited, ${name} is bouncing off the walls. When you're fired up, ${name} matches your intensity beat for beat. It's thrilling, but it can also be exhausting — two engines running at full speed with no one pumping the brakes. The secret to your bond? A grounding energy that gives you both a place to land.`,
    },
    B: {
      // Earth+Earth, Metal+Metal, Water+Water
      tagline: 'A Quiet, Unspoken Understanding',
      getText: (name) => `You and ${name} share a quiet, deep resonance — the kind of bond that doesn't need words. You sit together in comfortable silence. You move through the day in a shared rhythm that feels effortless. Others might not see the depth of your connection, but you feel it in every moment of stillness you share. The beauty of your bond is its peace. The challenge? Sometimes you both sink so deep into your comfort zone that the world outside fades away. A spark of complementary energy can bring fresh life to your beautiful stillness.`,
    },
  },
  natural_nurturer: {
    A: {
      // Water+Wood, Earth+Metal
      tagline: 'You Give Them Room to Bloom',
      getText: (name) => `You nurture ${name} the way rain nurtures a seed — quietly, steadily, without ever needing to be loud about it. Your presence alone gives ${name} permission to grow, to explore, to become more fully themselves. You may not realize it, but ${name} is braver because of you. More confident because of you. Your calm, steady energy is the foundation that lets ${name} reach for the sky. Just remember: the rain needs its own source too. Don't forget to fill your own cup.`,
    },
    B: {
      // Wood+Fire, Fire+Earth, Metal+Water
      tagline: 'You Are Their Spark',
      getText: (name) => `You are ${name}'s spark plug. Your energy doesn't just support theirs — it ignites it. Around you, ${name} comes alive in ways that surprise even you. More playful. More expressive. More joyful. That's because your elemental energy is the fuel that lights ${name}'s fire. This is one of the most vibrant bonds in the Five Element system — a relationship that generates warmth, laughter, and life. Your gift is your ability to activate the best in ${name}. Your challenge is knowing when to let them rest.`,
    },
  },
  hidden_healer: {
    A: {
      // Water+Metal, Wood+Water
      tagline: 'They Heal You in Silence',
      getText: (name) => `Here's a beautiful secret: ${name} has been healing you this whole time, and you might not even know it. Since ${name} came into your life, something shifted — maybe you sleep a little deeper, think a little clearer, breathe a little easier. ${name}'s quiet, steady energy works like a gentle current beneath the surface, dissolving stress you didn't know you were carrying. ${name} doesn't need to be dramatic to heal you. Their presence alone is the medicine. This is one of the most quietly powerful bonds in the Five Element system.`,
    },
    B: {
      // Fire+Wood, Earth+Fire, Metal+Earth
      tagline: 'They Fill a Space You Didn\'t Know Was Empty',
      getText: (name) => `${name} walked into your life and filled a space you didn't know was empty. That warmth you feel when ${name} curls up next to you? That unexpected laugh when they do something ridiculous? That's not random — that's elemental healing at work. ${name}'s energy naturally nourishes yours, bringing warmth to your cool edges and softness to your sharp corners. You give ${name} a home. In return, ${name} gives you something money can't buy — a daily dose of emotional sunshine.`,
    },
  },
  growth_partner: {
    A: {
      // Wood+Earth, Water+Fire
      tagline: 'You Set the Course, They Learn to Flow',
      getText: (name) => `You and ${name} have a beautifully challenging dynamic. Your energy naturally guides and shapes theirs — like a river carving a path through soft earth. You set the direction, and ${name} learns to flow with it. You might notice that ${name} responds to your moods more than anyone else's, that your calm can settle them and your tension can unsettle them. That's because your energy carries real weight in this bond. With the right balance, you become the compass that helps ${name} find their center. And in learning to guide gently, you discover a patience you never knew you had.`,
    },
    B: {
      // Fire+Metal, Metal+Wood, Earth+Water
      tagline: 'Iron Sharpens Iron',
      getText: (name) => `Your bond with ${name} is like iron sharpening iron — it's not always smooth, but it makes you both stronger. Your energy pushes ${name} out of their comfort zone, and honestly? ${name} probably pushes back sometimes. Maybe they're stubborn when you want them to listen. Maybe they test your limits in ways no one else does. That's not defiance — that's growth in action. The Five Element system says the most transformative bonds are the ones that challenge us. You're not just ${name}'s owner — you're their catalyst for evolution. And they are yours.`,
    },
  },
  spirit_guardian: {
    A: {
      // Earth+Wood, Fire+Water
      tagline: 'They Won\'t Let You Stay Stuck',
      getText: (name) => `${name} is the one who won't let you stay stuck. When you're overthinking, ${name} nudges you to move. When you're too comfortable, ${name} brings a burst of unexpected energy that shakes things up. It might look like mischief, but in Five Element wisdom, it's guardianship. ${name}'s energy naturally challenges yours — not to break you down, but to wake you up. You may have noticed that life has felt more unpredictable since ${name} arrived. More alive. That's not a coincidence. ${name} is here to keep you growing, even when you'd rather stay still.`,
    },
    B: {
      // Metal+Fire, Wood+Metal, Water+Earth
      tagline: 'They Forge You Through Friction',
      getText: (name) => `${name} is your spiritual bodyguard — the kind that doesn't just protect you, but forges you. ${name}'s energy is like a whetstone against your blade: it sharpens you through friction. Maybe ${name} demands attention when you're trying to focus. Maybe they force routine changes that disrupt your carefully organized life. That's not chaos — that's your guardian at work. In Five Element wisdom, the bonds that challenge us most are the ones that shape us most deeply. ${name} didn't come into your life to make things easy. They came to make you unbreakable.`,
    },
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
