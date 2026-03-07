# Portfolio Website Project Notes

**Last Updated:** March 7, 2026
**Project Location:** `/Users/administrator/Python/New United States of America`
**Live URL:** https://sienarindustries.com

---

## Project Overview

Personal portfolio website for **Shi Hao Ng** — MEng Computing (AI & ML) student at Imperial College London. Built with **React** and **MDX** for content management.

### Tech Stack
- **React** (Create React App with CRACO)
- **MDX** (@mdx-js/mdx) for rich content pages
- **gray-matter** for YAML frontmatter parsing
- **react-router-dom** for routing
- **Hostinger** for hosting (Apache with .htaccess SPA routing)

### Owner Info
- Email: shi-hao.ng25@imperial.ac.uk
- GitHub: github.com/Ice-Citron
- LinkedIn: linkedin.com/in/shi-hao-ng-83b55b224/

---

## Session 3 Progress (March 7, 2026)

### Completed This Session

1. **Resume tab** — Added "Resume" to portfolio nav, embeds `/assets/Shi-Hao-Ng__Resume.pdf` with download button
2. **Tractable redirect** — `sienarindustries.com/tractable/se3-labs` → Ashby job application (server-side .htaccess 302 redirect, tracked in Hostinger analytics)
3. **MDX loading bug FIXED** — `ProjectDetail.jsx` now detects HTML fallback responses (SPA catch-all returning index.html for missing files) and skips them. Root cause: `resp.ok` was true (200) for SPA fallback HTML.
4. **About page filled** — Real bio, Imperial College, IB 42pts (777 HL), 10A* IGCSE, work timeline (Drone Society, RoboCup, Nosco Asia, F1 in Schools, CompEng Society), real skills, real services
5. **Academic section enabled** — IB results + certifications, self-study courses, books. Removed fake placeholder cpp.md and python.md files.
6. **Contact updated** — Email: shi-hao.ng25@imperial.ac.uk. Description: frontier AI, defense, robotics.
7. **Social links** — GitHub + LinkedIn only (removed Facebook/Twitter)
8. **Front page text** — Updated "not fully ready yet" message
9. **Game engine video** — Replaced 298MB local .mov with YouTube embed (https://youtu.be/hbHgIjmsBgs), build size reduced from 721MB → 417MB
10. **Vision API setup** — OpenRouter with Gemini flash-lite for image identification. Script at `/tmp/vision_helper.py`. Used to scan all existing project images.

### Image Mismatches Found (Vision Scan)
These images appear to be in wrong locations or don't match their context:
- `maze/images/maze-render.png` → Shows a camera model (should be in pinhole-camera?)
- `solar-heater/images/solar-heater-2.jpg` → Shows a car parked on road, not a solar heater
- `f1-in-schools/images/Car Design/img2.jpg` → Shows school hall video on laptop
- `f1-in-schools/images/Renders/cyberstation.jpg` → Shows students at table, not a render
- `f1-in-schools/images/Renders/darkstar.jpg` → Shows model car on newspaper
- `f1-in-schools/images/Track Building/img2.jpg` → Shows a pull-up banner
- `f1-in-schools/images/CFD Analysis/img1.jpg` → Shows race cars at competition
- `f1-in-schools/images/CFD Analysis/img2.jpg` → Shows award certificates

### Still To Do (Next Session)

#### New Projects to Add (from resume)
- [ ] **Tissue Culture** (2023) — Images at `/Users/administrator/Documentations/Academic & Miscellaneous/Biotechnology - Tissue Culture/` (15 JPGs + 2 MOVs)
- [ ] **Custom FPV Racing Drone** (2025) — Need images from user
- [ ] **RLAIF Legal LLM / IBM Datathon Z** (2025) — Need images/screenshots
- [ ] **Nosco WorkHours App** (2024) — Full-stack dev, check `/Users/administrator/Documentations/Computer Science/Nosco WorkHours App/`
- [ ] **New Dejima** (2026, in-progress) — Autonomous AI agent revenue system
- [ ] **RoboCup / First Order Robotics** (2025, in-progress) — MPC, Isaac Sim, RL
- [ ] **Isaac Sim Robotics** (2026, in-progress) — SO-101 arm, sim-to-real
- [ ] **Interceptor Drone** (2026, in-progress) — 400km/h drone with CV

#### Other TODO
- [ ] Fix mismatched images identified by vision scan (see above)
- [ ] Add Mystical Cube to electronic-art (directory exists but was empty last check)
- [ ] Create RESOURCES-NEEDED.md for missing assets
- [ ] Compress large images (some >5MB PNGs in electronic-art and display-spinner)
- [ ] Hero images for project cards (still using placeholder paths)
- [ ] Consider uploading large railgun videos to YouTube like game engine

---

## What's Been Completed (All Sessions)

### Engineering Section (6 projects)
| Project | Slug | Status |
|---------|------|--------|
| Railgun | `railgun` | Complete with extensive MDX + images + PDF + videos |
| F1 in Schools | `f1-in-schools` | Complete (some images may be in wrong subfolders) |
| Display Spinner | `display-spinner` | Complete with Google Slides embed |
| Solar Heater | `solar-heater` | Complete (1 mismatched image) |
| Maze | `maze` | Complete (1 mismatched image - shows camera) |
| Pinhole Camera | `pinhole-camera` | Complete |

### Computer Science Section (3 projects)
| Project | Slug | Status |
|---------|------|--------|
| GPT-Valkyrie | `gpt-valkyrie` | Complete with ablation diagrams, GPU screenshots |
| Edutech Asia | `edutech` | Complete with competition photos |
| Game Engine | `game-engine` | Complete — video now YouTube embed |

### Electronic Art Section (6 projects)
| Project | Slug | Status |
|---------|------|--------|
| McLaren Speedtail | `mclaren-speedtail` | Complete |
| Mercedes G Class | `mercedes-g-class` | Complete |
| Ferrari LaFerrari | `ferrari-laferrari` | Complete |
| McLaren P1 | `mclaren-p1` | Complete |
| Dodge Challenger | `dodge-challenger` | Complete |
| Blender Donut | `blender-donut` | Complete |

### Academic Section (enabled this session)
- IB Diploma & Coursework subsection (ib.md)
- Self-Study & Online Courses subsection (self-study.md)
- Skills showcase (skills.md)

### Portfolio Nav Tabs
1. Video Summary (YouTube embed of maker portfolio)
2. Resume (PDF embed + download)
3. Engineering
4. Computer Science
5. Electronic Art
6. Academic & Miscellaneous

---

## Key File Locations

### Configuration Files
```
/craco.config.js          - CRACO config (fixes ResizeObserver error)
/package.json             - Uses CRACO instead of react-scripts
/public/.htaccess         - SPA routing + Tractable redirect
/src/index.js             - React entry point
```

### Main Components
```
/src/app/App.js                                - Routes (/, /portfolio, /project/:slug)
/src/content_option.js                         - All About page data, skills, services, contact
/src/components/portfolio/ProjectDetail.jsx    - Renders individual project pages (MDX)
/src/components/portfolio/ProjectGrid.jsx      - Grid view + Resume/VideoSummary special cases
/src/components/portfolio/PortfolioNav.jsx     - Tab navigation
/src/components/portfolio/Carousel.jsx         - Image/video carousel component
/src/components/portfolio/VideoSummary.jsx     - Video summary tab
/src/components/portfolio/SkillsShowcase.jsx   - Skills grid component
```

### Content Structure
```
/public/content/portfolio/
├── video-summary/index.md
├── engineering/
│   ├── index.md, year-2024.md, year-2023.md, year-2022.md, ongoing.md, skills.md
│   └── projects/{railgun,f1-in-schools,display-spinner,solar-heater,maze,pinhole-camera}/
├── computer-science/
│   ├── index.md, aiml.md, cpp.md, skills.md
│   └── projects/{gpt-valkyrie,edutech,game-engine}/
├── electronic-art/
│   ├── index.md, blender.md, skills.md
│   └── projects/{mclaren-speedtail,mercedes-g-class,ferrari-laferrari,mclaren-p1,dodge-challenger,blender-donut}/
└── academic/
    ├── index.md, ib.md, self-study.md, skills.md
    └── projects/ (empty)
```

### Source Documentation
```
/Users/administrator/Documentations/
├── Caltech HTML/                              - 94 saved web pages (content in <textarea> tags)
├── Engineering/                               - PDFs, images for engineering projects
├── Computer Science/                          - CS project files
│   ├── Nosco WorkHours App/                   - Full-stack dev project
│   └── Computational Engineering Society/     - Society content
├── Electronic Arts/                           - Blender project source files
├── Academic & Miscellaneous/
│   ├── Biotechnology - Tissue Culture/        - 15 JPGs + 2 MOVs
│   ├── Mist Irrigation/
│   └── Nosco Biotechnology - Foliar Fertiliser + Expos/
├── Renaissance Blender Projects/              - Early Blender work
└── MIT/Caltech Additional/                    - More docs, images, videos
```

---

## Key Techniques & Patterns

### Available MDX Components (in ProjectDetail.jsx)
```jsx
<MyCarousel slides={[{src, caption}, {type:"video", src, videoType, caption}]} width={900} height={600} />
<PDFViewer url="/path/to/file.pdf" />
<GoogleSlides url="https://docs.google.com/.../edit..." height={569} />
<DocumentLink href="url" title="Title" description="Desc" icon="icon" />
```

### YouTube Embed Pattern (used for game engine)
```jsx
<div style={{position: "relative", width: "100%", paddingBottom: "56.25%", marginBottom: "1rem"}}>
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "8px"}} allowFullScreen title="Title" />
</div>
```

### Vision API for Image Identification
```bash
python3 /tmp/vision_helper.py "/path/to/image.jpg" "What does this show?"
# Uses OpenRouter API with google/gemini-2.0-flash-lite-001
# API key in environment, NOT committed to git
```

### Quick Commands
```bash
cd "/Users/administrator/Python/New United States of America"
npm start          # Dev server
npx craco build    # Production build → /build/
```

---

## Session History

1. **Session 1 (Jan 2026):** Populated engineering projects from Caltech HTML, added PDF/Slides/DocumentLink components, fixed ResizeObserver, enabled CS and Electronic Art sections
2. **Session 2 (Jan 2026):** Continued populating projects, fixed ProjectDetail multi-section search, hit MDX loading bug
3. **Session 3 (Mar 7, 2026):** Fixed MDX bug, added Resume tab, Tractable redirect, filled About/Academic/Contact with real data from resume, vision-scanned all images, swapped game engine video to YouTube, set up for adding new projects from resume
