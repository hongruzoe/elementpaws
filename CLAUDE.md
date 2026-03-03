# CLAUDE.md — 五行宠物能量配对网站项目说明

## 项目概述

这是一个面向美国市场的宠物×主人能量配对网站。用户输入自己和宠物的信息，系统基于中国五行智慧分析双方的能量关系，生成个性化报告，并推荐专属的水晶配对组合。

**核心目标：** 先做出报告页面挂在TikTok bio上测试用户兴趣，同时用fake door测试产品购买意愿。

**目标用户：** 25-45岁美国女性，养猫/狗，对holistic wellness/astrology/crystals有兴趣。

**技术要求：** 单页面网站（React或HTML+CSS+JS），移动端优先，风格偏灵性/神秘/温暖。需要可部署到Netlify或Vercel。

---

## 一、用户流程

### 着陆页 → 测试 → 报告 → 分享/CTA

```
着陆页（说明+开始按钮）
    ↓
Step 1: 主人信息（出生月份 + 1道性格题）
    ↓
Step 2: 宠物信息（名字 + 宠物类型 + 出生月份或领养月份 + 5-6道行为题）
    ↓
生成报告页面（5个模块）
    ↓
分享按钮 + 产品Waitlist CTA
```

---

## 二、着陆页

### 核心文案

标题："Discover the Ancient Energy Bond Between You and Your Pet"

副标题："Based on the ancient Five Element wisdom — a 3,000-year-old system that maps the energies of nature to every living being — find out what makes your bond unique, and which crystals strengthen it."

说明段落："Your pet didn't come to you by accident. The Five Element system reveals that every pet-owner bond carries a unique energy dynamic — one that can be nurtured with the right crystals. Take this 2-minute reading to uncover yours."

按钮："Start Your Reading ✨"

### 主视觉图

- 在标题下方或按钮附近放一张主视觉图
- 图片内容：人抱着宠物 + 水晶元素点缀，温暖神秘风格
- 尺寸：约 1264×848px，横版
- 格式：PNG 或 WebP，文件大小控制在 500KB 以内
- 图片文件由用户提供，放在项目 `public/images/` 目录下，文件名 `hero.png`
- 如果图片文件不存在，先用占位图代替，保留布局位置

### How It Works 流程展示

在主视觉图和CTA按钮之间，加一个三步流程说明：

- Step 1: 🐾 "Tell us about you & your pet" — 2-minute quiz
- Step 2: ✨ "Discover your energy bond" — Five Element analysis
- Step 3: 💎 "Get your crystal match" — Personalized crystal recommendation

设计要求：三栏横向排列（手机端改为竖向），每步一个图标+标题+一句话说明，简洁清晰。

### Social Proof 社会证明

在 How It Works 下方，CTA按钮上方：

显示统计数字（初始数字可以小一些，后续更新）：
- "2,000+ pet bonds discovered"
- "Loved by pet parents in 30+ countries"

设计要求：一行横排展示，字体稍大，金色或琥珀色，带微妙的发光效果。
按钮下方小字："Free · 2 minutes · No sign-up required"

后续有真实用户评价后可替换为用户testimonial卡片。

### 品牌语言红线

- ✅ 用 "ancient Five Element wisdom" "elemental energy" "3,000-year-old system"
- ✅ 用 "Eastern wisdom" "ancient philosophy" "natural energy system"
- ❌ 不要用 "Chinese Medicine" "BaZi" "八字" 任何中文字符
- ❌ 不要过度解释五行理论，用户要的是结果不是上课
- ❌ 不要用 "scientifically proven" 之类的伪科学声明

---

## 三、测试输入设计

### Step 1: 主人信息

**出生月份（下拉选择）：**

月份→五行映射规则（按季节）：
- 3月、4月 = 木 Wood 🌱
- 5月 = 土 Earth 🏔️ （季节转换月）
- 6月、7月 = 火 Fire ☀️
- 8月 = 土 Earth 🏔️ （季节转换月）
- 9月、10月 = 金 Metal 🍂
- 11月 = 土 Earth 🏔️ （季节转换月）
- 12月、1月 = 水 Water ❄️
- 2月 = 土 Earth 🏔️ （季节转换月）

**1道性格确认题：**

"Which best describes you?"
- A. I'm always on the move, chasing the next goal → 木 Wood
- B. I light up every room and love being around people → 火 Fire
- C. I'm the one everyone comes to for support and comfort → 土 Earth
- D. I like things organized, clean and under control → 金 Metal
- E. I'm a deep thinker, I need quiet time to recharge → 水 Water

**判定规则：**
- 如果性格题结果与月份结果一致 → 确认该元素
- 如果性格题选了不同元素（特别是土）→ 以性格题结果为准
- 这样土元素就自然出现在主人端了

### Step 2: 宠物信息

**基础信息：**
- 宠物名字（文本输入）
- 宠物类型（狗/猫，下拉选择）
- 出生月份或领养月份（下拉选择，同上月份→五行映射）

**5-6道行为题（每道对应一个五行倾向）：**

题目1："In a new environment, your pet usually..."
- A. Rushes in to explore everything immediately → 木 Wood
- B. Gets excited, wants to meet everyone → 火 Fire
- C. Slowly sniffs around, then settles in comfortably → 土 Earth
- D. Observes calmly from a distance, approaches carefully → 金 Metal
- E. Hides first, then cautiously peeks out → 水 Water

题目2："When meeting new people, your pet..."
- A. Goes straight up to them, tail wagging → 木 Wood
- B. Jumps all over them with kisses → 火 Fire
- C. Leans against them for pets → 土 Earth
- D. Sniffs politely but keeps their space → 金 Metal
- E. Stays close to you and watches → 水 Water

题目3："Your pet's energy level is best described as..."
- A. Athletic and always ready for action → 木 Wood
- B. High energy with bursts of crazy zoomies → 火 Fire
- C. Steady and laid-back, happy to lounge → 土 Earth
- D. Consistent and predictable, follows routines → 金 Metal
- E. Quiet with occasional intense focus → 水 Water

题目4："When you're feeling sad, your pet..."
- A. Brings you a toy to play → 木 Wood
- B. Gets extra clingy and won't leave your side → 火 Fire
- C. Sits quietly next to you, just being there → 土 Earth
- D. Watches you from across the room, keeping guard → 金 Metal
- E. Comes close and stares at you with deep eyes → 水 Water

题目5："Your pet's biggest quirk is..."
- A. They're stubborn and always want to lead → 木 Wood
- B. They're dramatic and love being the center of attention → 火 Fire
- C. They're a food lover, always thinking about treats → 土 Earth
- D. They're picky about their space and routine → 金 Metal
- E. They're sensitive to sounds and changes → 水 Water

**宠物五行判定规则：**
- 统计5道题中出现最多的元素
- 如果最高频元素与月份一致 → 确认
- 如果不一致 → 以行为题结果为准（因为宠物行为更能反映真实体质）
- 如果出现并列 → 优先取与月份一致的那个

---

## 四、五行关系判定逻辑

### 相生关系（Generation Cycle）
木→火→土→金→水→木
（木生火，火生土，土生金，金生水，水生木）

### 相克关系（Control Cycle）
木→土，土→水，水→火，火→金，金→木
（木克土，土克水，水克火，火克金，金克木）

### 5种关系类型

| 关系类型 | 英文名 | emoji | 判定条件 |
|---------|--------|-------|---------|
| 同频共振 | Soul Mirror | 🪞 | 主人元素 = 宠物元素 |
| 天生滋养者 | Natural Nurturer | 🌻 | 主人元素 生 宠物元素 |
| 隐藏治愈者 | Hidden Healer | 🎁 | 宠物元素 生 主人元素 |
| 成长伙伴 | Growth Partner | ⚡ | 主人元素 克 宠物元素 |
| 灵魂守护者 | Spirit Guardian | 🛡️ | 宠物元素 克 主人元素 |

### 25种组合完整对照表

**同频共振 Soul Mirror（5种）：**
- 木+木，火+火，土+土，金+金，水+水

**天生滋养者 Natural Nurturer（5种）：**
- 木主人+火宠物（木生火）
- 火主人+土宠物（火生土）
- 土主人+金宠物（土生金）
- 金主人+水宠物（金生水）
- 水主人+木宠物（水生木）

**隐藏治愈者 Hidden Healer（5种）：**
- 火主人+木宠物（木生火）
- 土主人+火宠物（火生土）
- 金主人+土宠物（土生金）
- 水主人+金宠物（金生水）
- 木主人+水宠物（水生木）

**成长伙伴 Growth Partner（5种）：**
- 木主人+土宠物（木克土）
- 土主人+水宠物（土克水）
- 水主人+火宠物（水克火）
- 火主人+金宠物（火克金）
- 金主人+木宠物（金克木）

**灵魂守护者 Spirit Guardian（5种）：**
- 土主人+木宠物（木克土）
- 水主人+土宠物（土克水）
- 火主人+水宠物（水克火）
- 金主人+火宠物（火克金）
- 木主人+金宠物（金克木）

---

## 五、水晶推荐逻辑（逻辑A）

### 水晶推荐元素选择规则

| 关系类型 | 推荐哪个元素的水晶 | 逻辑 |
|---------|:-:|------|
| 同频共振 | 子元素 | 用子元素泄掉多余能量。子元素 = 该元素所生的元素 |
| 天生滋养者 | 主人自己的元素 | 主人补充自己消耗的能量，宠物接收主人元素的滋养 |
| 隐藏治愈者 | 宠物的元素 | 主人接收宠物元素的治愈，宠物补充自己输出的能量 |
| 成长伙伴 | 通关元素 | 化解相克。通关元素 = 主人所生、同时又生宠物的元素 |
| 灵魂守护者 | 通关元素 | 化解相克。通关元素 = 宠物所生、同时又生主人的元素 |

### 子元素对照表
- 木的子元素 = 火（木生火）
- 火的子元素 = 土（火生土）
- 土的子元素 = 金（土生金）
- 金的子元素 = 水（金生水）
- 水的子元素 = 木（水生木）

### 通关元素对照表

**成长伙伴（主人克宠物）：**
- 木克土 → 通关元素 = 火（木生火，火生土）
- 土克水 → 通关元素 = 金（土生金，金生水）
- 水克火 → 通关元素 = 木（水生木，木生火）
- 火克金 → 通关元素 = 土（火生土，土生金）
- 金克木 → 通关元素 = 水（金生水，水生木）

**灵魂守护者（宠物克主人）：**
- 木宠克土主 → 通关元素 = 火（木生火，火生土）
- 土宠克水主 → 通关元素 = 金（土生金，金生水）
- 水宠克火主 → 通关元素 = 木（水生木，木生火）
- 火宠克金主 → 通关元素 = 土（火生土，土生金）
- 金宠克木主 → 通关元素 = 水（金生水，水生木）

### 10颗核心水晶池

| 元素 | 水晶1（给主人） | 水晶2（给宠物） |
|------|:-:|:-:|
| 木 Wood 🌱 | Green Aventurine 绿东陵 | Moss Agate 苔藓玛瑙 |
| 火 Fire ☀️ | Carnelian 红玉髓 | Garnet 石榴石 |
| 土 Earth 🏔️ | Citrine 黄水晶 | Tiger's Eye 虎眼石 |
| 金 Metal 🍂 | Clear Quartz 白水晶 | Moonstone 月光石 |
| 水 Water ❄️ | Aquamarine 海蓝宝 | Lapis Lazuli 青金石 |

### 分配规则（逻辑A，固定）

确定了推荐元素后：
- **主人永远拿该元素的水晶1**
- **宠物永远拿该元素的水晶2**

### 完整推荐示例

示例1：主人=水，宠物=火 → 水克火 → 成长伙伴 → 通关元素=木 → 主人拿Green Aventurine，宠物拿Moss Agate

示例2：主人=木，宠物=木 → 同频共振 → 子元素=火 → 主人拿Carnelian，宠物拿Garnet

示例3：主人=火，宠物=土 → 火生土 → 天生滋养者 → 主人元素=火 → 主人拿Carnelian，宠物拿Garnet

示例4：主人=金，宠物=土 → 土生金 → 隐藏治愈者 → 宠物元素=土 → 主人拿Citrine，宠物拿Tiger's Eye

---

## 六、报告页面（5个模块）

### 报告整体布局优化要求

**排版规则：**
- 模块一（主人能量档案）和模块二（宠物能量档案）在桌面端左右两栏并排展示，手机端改为上下排列
- 模块三（能量纽带）全宽展示，这是核心模块，需要视觉上最突出
- 模块四（水晶推荐）两颗水晶在桌面端左右并排展示，手机端改为上下排列
- 模块之间加渐变过渡或分隔动效，不要纯粹一路滑下去

**文字样式要求：**
- 报告所有正文文字颜色调亮，使用浅金色（如 #E8D5B7）或米白色（如 #F0E6D3），确保在深蓝背景上清晰可读
- 正文字号适当放大（至少16px，建议18px），提升阅读舒适度
- 标题和正文之间保持足够的对比度

**模块三（能量纽带）特殊视觉处理：**
- 主人元素图标和宠物元素图标放大2-3倍（至少80px×80px）
- 图标加发光/光晕效果
- 两个图标之间用动态能量连线串起来，中间放关系类型图标
- "Natural Nurturer" 等关系类型名称字体放大，作为视觉中心
- "YOU FUEL THEIR WORLD" 等副标题也放大突出
- 整个模块三加一个特殊背景（渐变光圈或星空粒子效果），与上下模块明显区分
- 让用户一滑到这里就感觉"这是最重要的部分"

### 报告整体布局优化要求

**排版规则：**
- 模块一（主人能量档案）和模块二（宠物能量档案）在桌面端左右两栏并排显示，手机端变为上下排列
- 模块三（能量纽带）全宽展示，这是核心模块，需要视觉上最突出
- 模块四（水晶推荐）两颗水晶在桌面端左右并排展示，手机端上下排列
- 模块之间加渐变过渡或微妙的分隔动效，不要纯粹堆叠

**文字可读性要求：**
- 所有正文文字颜色必须足够亮，用浅金色（#E8D5A3）或米白色（#F0E6D3），不要用深灰色
- 正文字号至少 16px（手机端）/ 18px（桌面端），行高 1.7 以上
- 确保在深蓝背景上有足够对比度，WCAG AA标准以上

### 模块三视觉突出要求

模块三（Your Energy Bond）是整个报告最重要的部分，需要特殊视觉处理：
- 元素图标放大到至少 80px × 80px，加发光/光晕效果
- YOU 和 [Pet Name] 的元素图标之间用动态能量连线或光效串联，中间是关系类型图标
- 关系类型名称（如 "Natural Nurturer"）和副标题（如 "YOU FUEL THEIR WORLD"）字体明显大于其他模块
- 整个模块加一个特殊背景（渐变光圈、星空粒子效果或微妙动画），让它与上下模块明显区分
- 用户滑到这个模块时应该立刻感觉到"这是最重要的部分"

---

### 模块一：Your Energy Profile — 你的能量档案

5种元素各一段描述（3-4句话），风格温暖肯定，让用户产生认同感。

**Wood Soul 🌱**
"Bold, driven, and always growing — you move through life like a tree reaching for sunlight. You thrive when you have a goal to chase, and your determination inspires everyone around you. Wood souls are natural leaders with a quiet strength that bends but never breaks."

**Fire Soul ☀️**
"Warm, magnetic, and full of life — you light up every room you walk into. You love deeply, laugh loudly, and your passion is contagious. Fire souls are the heart of their community, radiating energy that draws people in like moths to a flame."

**Earth Soul 🏔️**
"Grounded, nurturing, and endlessly dependable — you are the rock that everyone leans on. Your warmth makes people feel safe, and your patience is a gift few possess. Earth souls are the caretakers of the world, holding space for others with quiet grace."

**Metal Soul 🍂**
"Refined, clear-minded, and quietly confident — you see the world with precision and purpose. You value quality over quantity, in everything from your friendships to your morning coffee. Metal souls carry an elegant strength, organized on the outside and deeply principled within."

**Water Soul ❄️**
"Deep, intuitive, and quietly powerful — like a still lake that reflects everything. You feel things before you understand them, and your calm presence is a safe harbor for everyone around you. Water souls are the dreamers and deep thinkers, with a hidden strength that runs beneath the surface."

### 模块二：Your Pet's Energy Profile — 宠物的能量档案

5种元素各一段描述（3-4句话），措辞更活泼可爱。报告中用宠物的实际名字替换[Pet Name]。

**Wood Spirit 🌱**
"Adventurous, determined, and always on the move — [Pet Name] charges into life headfirst. Wood spirits are the explorers of the animal world. They need movement, challenge, and the freedom to follow their nose wherever it leads."

**Fire Spirit ☀️**
"Bright, magnetic, and impossible to ignore — [Pet Name] lives life at full volume. Fire spirits are the heart of every room, radiating warmth and drawing everyone in. When [Pet Name] is happy, the whole house feels it."

**Earth Spirit 🏔️**
"Gentle, loyal, and endlessly sweet — [Pet Name] is the calm in every storm. Earth spirits are the easygoing souls who love food, naps, and being near their favorite human. Their steady presence is a gift that never gets old."

**Metal Spirit 🍂**
"Independent, dignified, and quietly observant — [Pet Name] has a regal quality that commands respect. Metal spirits follow their own rules, prefer routine, and show love in subtle, consistent ways. They don't need the spotlight, but they always know what's going on."

**Water Spirit ❄️**
"Sensitive, watchful, and deeply connected — [Pet Name] notices everything. Water spirits are the quiet observers, feeling the energy of a room before anyone else. They may be shy at first, but their bond with their human runs deeper than most."

### 模块三：Your Energy Bond — 你们的能量纽带（核心模块）

每种关系类型一套文案。包含：关系名称、总结、日常表现描述、通关/推荐元素的引出。

每种关系类型2套文案，共10套。根据具体元素组合选择对应的套别。

---

**Soul Mirror 🪞 — 同频共振**

**套A — 动态同频（木+木，火+火）：**
适用组合：木主人+木宠物，火主人+火宠物

"You and [Pet Name] are a double dose of the same unstoppable energy. You both live life in the fast lane — always moving, always chasing, always burning bright. When you're excited, [Pet Name] is bouncing off the walls. When you're fired up, [Pet Name] matches your intensity beat for beat. It's thrilling, but it can also be exhausting — two engines running at full speed with no one pumping the brakes. The secret to your bond? A grounding energy that gives you both a place to land."

**套B — 静态同频（土+土，金+金，水+水）：**
适用组合：土主人+土宠物，金主人+金宠物，水主人+水宠物

"You and [Pet Name] share a quiet, deep resonance — the kind of bond that doesn't need words. You sit together in comfortable silence. You move through the day in a shared rhythm that feels effortless. Others might not see the depth of your connection, but you feel it in every moment of stillness you share. The beauty of your bond is its peace. The challenge? Sometimes you both sink so deep into your comfort zone that the world outside fades away. A spark of complementary energy can bring fresh life to your beautiful stillness."

---

**Natural Nurturer 🌻 — 天生滋养者**

**套A — 温柔滋养型（水生木，土生金）：**
适用组合：水主人+木宠物，土主人+金宠物

"You nurture [Pet Name] the way rain nurtures a seed — quietly, steadily, without ever needing to be loud about it. Your presence alone gives [Pet Name] permission to grow, to explore, to become more fully themselves. You may not realize it, but [Pet Name] is braver because of you. More confident because of you. Your calm, steady energy is the foundation that lets [Pet Name] reach for the sky. Just remember: the rain needs its own source too. Don't forget to fill your own cup."

**套B — 激发能量型（木生火，火生土，金生水）：**
适用组合：木主人+火宠物，火主人+土宠物，金主人+水宠物

"You are [Pet Name]'s spark plug. Your energy doesn't just support theirs — it ignites it. Around you, [Pet Name] comes alive in ways that surprise even you. More playful. More expressive. More joyful. That's because your elemental energy is the fuel that lights [Pet Name]'s fire. This is one of the most vibrant bonds in the Five Element system — a relationship that generates warmth, laughter, and life. Your gift is your ability to activate the best in [Pet Name]. Your challenge is knowing when to let them rest."

---

**Hidden Healer 🎁 — 隐藏治愈者**

**套A — 安静治愈型（金生水→水主人，水生木→木主人）：**
适用组合：水主人+金宠物，木主人+水宠物

"Here's a beautiful secret: [Pet Name] has been healing you this whole time, and you might not even know it. Since [Pet Name] came into your life, something shifted — maybe you sleep a little deeper, think a little clearer, breathe a little easier. [Pet Name]'s quiet, steady energy works like a gentle current beneath the surface, dissolving stress you didn't know you were carrying. [Pet Name] doesn't need to be dramatic to heal you. Their presence alone is the medicine. This is one of the most quietly powerful bonds in the Five Element system."

**套B — 温暖治愈型（木生火→火主人，火生土→土主人，土生金→金主人）：**
适用组合：火主人+木宠物，土主人+火宠物，金主人+土宠物

"[Pet Name] walked into your life and filled a space you didn't know was empty. That warmth you feel when [Pet Name] curls up next to you? That unexpected laugh when they do something ridiculous? That's not random — that's elemental healing at work. [Pet Name]'s energy naturally nourishes yours, bringing warmth to your cool edges and softness to your sharp corners. You give [Pet Name] a home. In return, [Pet Name] gives you something money can't buy — a daily dose of emotional sunshine."

---

**Growth Partner ⚡ — 成长伙伴**

**套A — 引导方向型（木克土，水克火）：**
适用组合：木主人+土宠物，水主人+火宠物

"You and [Pet Name] have a beautifully challenging dynamic. Your energy naturally guides and shapes theirs — like a river carving a path through soft earth. You set the direction, and [Pet Name] learns to flow with it. You might notice that [Pet Name] responds to your moods more than anyone else's, that your calm can settle them and your tension can unsettle them. That's because your energy carries real weight in this bond. With the right balance, you become the compass that helps [Pet Name] find their center. And in learning to guide gently, you discover a patience you never knew you had."

**套B — 磨砺成长型（火克金，金克木，土克水）：**
适用组合：火主人+金宠物，金主人+木宠物，土主人+水宠物

"Your bond with [Pet Name] is like iron sharpening iron — it's not always smooth, but it makes you both stronger. Your energy pushes [Pet Name] out of their comfort zone, and honestly? [Pet Name] probably pushes back sometimes. Maybe they're stubborn when you want them to listen. Maybe they test your limits in ways no one else does. That's not defiance — that's growth in action. The Five Element system says the most transformative bonds are the ones that challenge us. You're not just [Pet Name]'s owner — you're their catalyst for evolution. And they are yours."

---

**Spirit Guardian 🛡️ — 灵魂守护者**

**套A — 唤醒守护型（木克土→土主人，水克火→火主人）：**
适用组合：土主人+木宠物，火主人+水宠物

"[Pet Name] is the one who won't let you stay stuck. When you're overthinking, [Pet Name] nudges you to move. When you're too comfortable, [Pet Name] brings a burst of unexpected energy that shakes things up. It might look like mischief, but in Five Element wisdom, it's guardianship. [Pet Name]'s energy naturally challenges yours — not to break you down, but to wake you up. You may have noticed that life has felt more unpredictable since [Pet Name] arrived. More alive. That's not a coincidence. [Pet Name] is here to keep you growing, even when you'd rather stay still."

**套B — 磨练守护型（火克金→金主人，金克木→木主人，土克水→水主人）：**
适用组合：金主人+火宠物，木主人+金宠物，水主人+土宠物

"[Pet Name] is your spiritual bodyguard — the kind that doesn't just protect you, but forges you. [Pet Name]'s energy is like a whetstone against your blade: it sharpens you through friction. Maybe [Pet Name] demands attention when you're trying to focus. Maybe they force routine changes that disrupt your carefully organized life. That's not chaos — that's your guardian at work. In Five Element wisdom, the bonds that challenge us most are the ones that shape us most deeply. [Pet Name] didn't come into your life to make things easy. They came to make you unbreakable."

### 模块四：Your Crystal Match — 你们的专属水晶

每颗水晶需要以下信息：
- 水晶英文名
- 别称（The Stone of xxx）
- 1-2句描述
- "How it supports your bond" — 1-2句话说明对关系的好处

**10颗水晶描述：**

**Green Aventurine — The Stone of New Beginnings 💚**
"Green Aventurine carries the fresh, forward-moving energy of Wood — growth, optimism, and gentle courage. It supports a sense of openness to new possibilities."
Bond support: "It encourages you to express your nurturing energy more visibly — strengthening the energetic thread between you and [Pet Name]."

**Moss Agate — The Stone of Steady Growth 🌿**
"Moss Agate is nature captured in stone — swirling greens that echo forests and new life. It promotes a grounding energy that supports calm, steady presence."
Bond support: "On [Pet Name]'s collar, it acts as a gentle anchor — promoting a sense of connection to home and to you, even during adventures."

**Carnelian — The Stone of Joyful Courage 🔥**
"Carnelian radiates warm, vibrant energy that supports confidence and creative expression. Its sunset tones carry the spark of Fire element — bold and life-affirming."
Bond support: "It nurtures the warm, active energy that keeps your bond dynamic and playful."

**Garnet — The Stone of Deep Devotion ❤️**
"Garnet holds a rich, deep fire within — the kind that burns steady, not wild. It supports emotional warmth and loyal connection."
Bond support: "For [Pet Name], it promotes a sense of secure attachment — the energetic equivalent of knowing they are deeply loved."

**Citrine — The Stone of Sunny Confidence ☀️**
"Citrine carries the bright, stabilizing energy of Earth — warmth without heaviness, confidence without arrogance. It supports a positive, grounded outlook."
Bond support: "It encourages mutual trust and ease in your bond — the kind of effortless harmony that makes every day together feel lighter."

**Tiger's Eye — The Stone of Grounded Strength 🐯**
"Tiger's Eye shimmers with bands of gold and brown, carrying the protective energy of Earth. It promotes courage, stability, and clear-headed confidence."
Bond support: "For [Pet Name], it supports a sense of calm confidence — helping channel their energy into focused, grounded behavior."

**Clear Quartz — The Stone of Pure Clarity 🔮**
"Clear Quartz is the most versatile crystal, amplifying whatever energy it touches. It carries the clean, organized energy of Metal — purifying and clarifying."
Bond support: "It amplifies the natural harmony in your bond, supporting clear communication and mutual understanding."

**Moonstone — The Stone of Gentle Intuition 🌙**
"Moonstone glows with a soft, ethereal light that supports intuition and emotional balance. It carries Metal's refined energy in its most gentle form."
Bond support: "For [Pet Name], it promotes emotional attunement — supporting their natural ability to sense and respond to your feelings."

**Aquamarine — The Stone of Calm Depths 💧**
"Aquamarine carries the serene, flowing energy of Water — deep calm, clarity, and gentle strength. Its ocean blue tones soothe and center."
Bond support: "It supports the deep, intuitive connection between you and [Pet Name] — the kind of bond that doesn't need words."

**Lapis Lazuli — The Stone of Inner Wisdom 💙**
"Lapis Lazuli holds the vast, knowing energy of Water — deep blue flecked with gold, like a night sky full of stars. It supports wisdom, truth, and inner peace."
Bond support: "For [Pet Name], it promotes a sense of calm watchfulness — supporting their natural sensitivity while keeping them centered."

### "Why a Matched Set" 通用文案

"Why a matched set? A single crystal supports one energy. But when you and your pet each carry a crystal chosen specifically for your unique elemental bond, you create something more powerful — an energy bridge. Think of it like two tuning forks tuned to the same note: when one vibrates, the other naturally responds. Your crystals are tuned to the frequency of your bond. This is something you can't get from buying two random crystals — this pairing was chosen for your specific connection."

### 用词安全红线（FTC合规，必须遵守）

- ✅ supports / promotes / encourages / nurtures / creates a sense of
- ❌ 绝不使用 heals / cures / treats / prevents / protects from illness / medical terminology
- 所有水晶描述必须是能量/情感/关系层面，绝不涉及生理/医疗

---

## 七、模块五：Share & CTA

### 分享功能

**不用 Share to Instagram / TikTok 跳转按钮。改为生成分享卡片图片，用户保存后自己发到社交平台。**

**按钮文案：** "Download & Share ✨"

**点击后用 html2canvas 或 canvas API 生成一张分享卡片图片并触发下载：**

**卡片尺寸：** 1080×1350px（Instagram竖版比例，TikTok和朋友圈通用）

**卡片内容布局：**

上半部分（视觉区）：
- 主人元素图标（大）+ 宠物元素图标（大）
- 中间用能量连线或光效连接
- 显示 "Me & [Pet Name]"

中间部分（核心信息）：
- 关系类型名称 + emoji，如 "🌻 Natural Nurturer"
- 副标题，如 "You Fuel Their World"
- 2-3句关系总结，从模块三文案中提取精华

底部（引流）：
- "Discover the Ancient Energy Bond Between You and Your Pet"
- 网站链接

**不放的内容：** 不放水晶信息、不放详细能量档案、不放FAQ和CTA

**卡片视觉风格：** 与网站一致（深蓝星空背景 + 金色文字），要好看到用户愿意直接发社交平台

另外保留一个 "Copy Link 🔗" 文字按钮，用于复制网站地址。

### Fake Door 产品测试

文案："✨ Bring Your Bond to Life"

"Your [Relationship Type] Crystal Set is being crafted."
"[Crystal 1 Name] pendant + [Crystal 2 Name] collar charm"
"Personalized for [Owner Name] & [Pet Name]'s [Bridge Element] energy bridge."

按钮："Join the Waitlist — Get 20% Off at Launch"

点击后弹出邮箱收集表单（姓名+邮箱），提交后显示：
"You're on the list! We'll notify you as soon as your crystal set is ready. 💎"

### 数据追踪

需要追踪以下事件（用Google Analytics或简单的事件计数）：
- Quiz开始率
- Quiz完成率
- 报告各模块的滚动深度
- 分享按钮点击率
- 产品CTA点击率
- 邮箱提交率
- 流量来源（UTM参数，特别是TikTok bio）

---

## 八、FAQ（报告页面底部或单独section）

**Q: What is the Five Element system?**
A: "The Five Element system is a 3,000-year-old wisdom tradition that maps the fundamental energies of nature — Wood, Fire, Earth, Metal, and Water — to all living beings. It's used to understand personality, relationships, and energetic balance. Our pet bond reading applies these ancient principles to reveal the unique dynamic between you and your pet."

**Q: How do you determine my element and my pet's element?**
A: "Your element is determined by your birth season and personality type. Your pet's element is determined by a combination of their birth or adoption season and their behavioral traits — because every pet expresses their energy uniquely."

**Q: What if I don't know my pet's exact birthday?**
A: "No problem! You can use the month you adopted or brought your pet home — that's the moment your energy bond began. The behavioral questions help us fine-tune your pet's element regardless of birth date."

**Q: Do I need to believe in crystals for this to work?**
A: "Our reading is designed to be a meaningful, reflective experience whether you're a crystal enthusiast or simply curious. Many people find that the relationship insights alone deepen their appreciation of their pet bond. The crystal recommendations are there for those who want to take the experience further."

**Q: Is this based on real philosophy?**
A: "Yes. The Five Element system (Wu Xing) has been a foundational framework in Eastern philosophy for over 3,000 years, used in traditional wellness practices, feng shui, and understanding of natural cycles. We've adapted it specifically for the pet-owner bond — a unique application that honors the original wisdom while making it accessible and fun."

---

## 九、设计风格指南

### 整体氛围
- 神秘但温暖（mystical + warm），不要暗黑哥特风
- 像一个懂东方哲学的闺蜜在跟你聊天
- 移动端优先，因为主要流量来自TikTok

### 配色参考
- 主色调：深靛蓝/午夜蓝（代表深邃和智慧）
- 辅色调：金色/琥珀色（代表温暖和灵性）
- 五行各有自己的颜色：木=绿，火=红橙，土=金黄，金=白/银，水=蓝
- 背景可用渐变或星空纹理
- 避免纯白背景（太普通）

### 字体
- 标题用有灵性感的衬线字体或手写体
- 正文用易读的无衬线字体
- 不要用Inter, Roboto, Arial这些太普通的字体

### 动效
- 报告生成时可以有元素动画（如水波、火焰、树叶等）
- 五行元素符号可以有微妙的发光/脉动效果
- 但不要过度，保持优雅

---

## 十、竞品参考

### Sama Dog (samadog.com)
- 用阿育吠陀Dosha体系给狗做体质测试（13题问卷）
- 推荐对应水晶项圈吊坠（$29），全套Wellness Kit更高
- 做对了：Quiz→Product完整闭环，品牌调性高端
- 没做的（我们的机会）：只测宠物不测主人，没有配对概念，没有Matching Set

### Moonpaws (moonpaws.com)
- 宠物占星App，有主人-宠物兼容性分析
- 做对了：系统化的持续互动，社区和内容生态
- 没做的：没有实体产品，用的是西方占星

### Horoscope.com Pet Compatibility
- 主人星座 × 宠物星座兼容性小工具
- 做对了：交互极简，两个下拉就出结果
- 没做的：纯内容，没有产品导出

### 我们的差异化
- 唯一同时做"主人×宠物五行配对 + 水晶Matching Set推荐"的产品
- 东方五行智慧 vs 西方占星/阿育吠陀
- 配对水晶 vs 单独推荐
- 内容驱动（TikTok/分享）+ 产品变现

---

## 十一、技术部署与数据收集

### 技术栈
- 前端：React（Vite脚手架）或 纯HTML+CSS+JS（根据复杂度选择）
- 部署：Vercel（通过GitHub自动部署）
- 邮箱收集：Google Forms → Google Sheets

### 部署流程
1. Claude Code 生成完整项目代码
2. 用 `git init` + `git push` 推送到 GitHub 仓库
3. 登录 Vercel.com（用GitHub账号），Import Project → 选仓库 → Deploy
4. 上线后获得 `xxx.vercel.app` 域名，挂到TikTok bio
5. 后续改代码只需 push 到 GitHub，Vercel 自动重新部署

### 邮箱收集（待接入）

**当前阶段：先做前端UI，后端对接后续补充。**

**前端需要先做好的部分：**
- Waitlist 弹窗UI（Name + Email 输入框 + 提交按钮）
- 提交后的成功提示界面
- 表单验证（邮箱格式检查）

**提交逻辑先用占位函数：**
```javascript
async function submitWaitlist(name, email, petName, relationshipType, crystalSet) {
  // TODO: 接入 Formspree 或其他服务
  // 届时只需替换这里的实现
  console.log('Waitlist submission:', { name, email, petName, relationshipType, crystalSet });
  
  // 先直接显示成功提示
  showSuccessMessage();
}
```

**后续接入时需要收集的字段：**
- Name（主人名字）
- Email
- Pet Name（宠物名字）
- Relationship Type（关系类型）— 自动填入
- Crystal Set（推荐的水晶组合）— 自动填入

### Google Analytics 事件追踪（待接入）

**当前阶段：先做前端，GA后续补充。**

**前端需要先做好的部分：**
在关键节点预埋事件触发函数，后续接入GA时只需替换实现。

```javascript
function trackEvent(eventName, params = {}) {
  // TODO: 接入 GA4 后替换
  // gtag('event', eventName, params);
  console.log('Track:', eventName, params);
}
```

**需要预埋的事件点：**
- `trackEvent('quiz_start')` — 用户点击"Start Your Reading"
- `trackEvent('quiz_complete', { owner_element, pet_element })` — 完成测试
- `trackEvent('report_section_view', { section })` — 报告各模块进入视口时
- `trackEvent('share_click', { platform })` — 分享按钮点击
- `trackEvent('waitlist_cta_click')` — Waitlist CTA点击
- `trackEvent('waitlist_submit', { relationship_type, crystal_set })` — 邮箱提交

**后续接入只需：**
1. 注册 Google Analytics，创建GA4属性，拿到追踪ID（G-XXXXXXXXXX）
2. 在 `<head>` 中加入GA脚本
3. 把 `trackEvent` 函数里的 `console.log` 换成 `gtag()` 调用

---

## 十二、供应链备忘（未来产品化参考）

10颗核心水晶全部可从义乌/东海水晶城采购：
- 大部分单颗成本 2-15元人民币
- 最贵的海蓝宝也在15-40元
- Matching Set（2颗水晶+配件+包装）总成本约 20-55元（$3-8）
- Etsy建议售价 $35-55
- 毛利率约 80-90%
