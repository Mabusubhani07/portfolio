# D Mabusubhani — Personal Portfolio & Systems Showcase

An award-level, editorial portfolio engineered with Next.js App Router, Tailwind CSS, GSAP (ScrollTrigger), and Lenis smooth scrolling. Designed with the quiet restraint of a high-end design studio or architectural monograph.

---

## ✦ Design System & Architecture

- **Canvas & Tone**: Tactile warm off-white (`#F4F1EA`) light mode; architectural matte charcoal (`#121314`) dark mode.
- **Typography**: Display headings in **Instrument Serif**; body and interfaces in **DM Sans**; technical tags in monospace.
- **Accents**: Muted Forest Green (`#1E3A2F` / `#44725E`) and earthy terracotta tones. Hairline grid dividers (`1px`).
- **Tactile Grain**: Ultra-subtle SVG fractal noise overlay for a paper-like editorial finish.
- **Custom Studio Cursor**: Physics-smoothed trailing pointer expanding into contextual labels (*"View"*, *"Open"*, *"CV"*), disabled on touch devices.
- **Motion Orchestration**: Lenis inertia scroll synchronized directly with GSAP ScrollTrigger ticker; masked line reveals; dynamic vertical line drawing in Education.

---

## ✦ Structure & Key Sections

1. **Preloader**: Numerical counter (`000` to `100`) with custom ease and curtain-lift into the index.
2. **Hero**: High-contrast display typography, tall framed portrait with slow clip-path reveal and parallax, opportunity badge, and scroll cue.
3. **About**: First-person story strictly based on verified facts, paired with portrait and authentic metric counters (2029 graduation, 3 hackathons, 1 flagship platform).
4. **Selected Work (DIEMP)**: Flagship editorial feature with system manifest, linked to the comprehensive case study at `/project/diemp`.
5. **Hackathons**: Interactive numbered list (`01`, `02`, `03`) with hover shift revealing challenge briefs and focus areas (Adobe University 2026, Smart India Hackathon, PowerNext AI).
6. **Skills & Tooling**: Slow infinite typographic marquee + four grouped disciplines (AI/ML, Programming, Web/Backend, Cloud/Systems) without synthetic percentage bars.
7. **Writing & Problem Solving**: Medium publications list and dedicated LeetCode problem-solving spotlight.
8. **Community**: Quiet, dignified recognition of volunteer service with VSO MAHE, Yuv Kriti NGO, and technical publishing.
9. **Education**: Minimal vertical timeline with continuous line drawing on scroll.
10. **Contact**: *"Let's build something worth trusting"* headline, magnetic email card, copy-to-clipboard, social channels, and validated direct inquiry form.
11. **Footer**: Real-time ticking Bengaluru IST clock, back-to-top button, and colophon.
12. **Case Study (`/project/diemp`)**: 5-part forensic case study covering Problem, Approach, 8 Key Features, Architecture & Stack, and clearly marked authentic placeholders.

---

## ✦ Local Development

Ensure Node.js 18+ is installed.

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

To run a production build:
```bash
npm run build
npm run start
```

---

## ✦ How to Edit Content

- **Personal Details & Social Links**: Edit `src/components/Hero.tsx`, `src/components/About.tsx`, `src/components/Contact.tsx`, and `src/components/Navbar.tsx`.
- **Profile Photo**: Replace `public/assets/profile.jpg`.
- **Resume**: Replace `public/assets/resume.pdf` or update `scripts/generate-resume.js` and run `node scripts/generate-resume.js`.
- **DIEMP Case Study**: Update copy, architecture details, or fill marked placeholders in `src/app/project/diemp/page.tsx`.
- **Hackathons**: Edit the `hackathons` array in `src/components/Hackathons.tsx`.
- **Articles & Writing**: Update the `articles` array in `src/components/Writing.tsx`.

---

## ✦ Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete award-level editorial portfolio"
   git branch -M main
   git remote add origin https://github.com/Mabusubhani07/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **Deploy**. Vercel will build and serve your site globally with edge optimization.
