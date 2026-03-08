# Portfolio Website Project Notes

**Last Updated:** March 8, 2026 (Session 4 — ongoing)
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

## Session 4 Context (March 7, 2026)

### Previous Session Bug
The previous session (end of Session 3) crashed with `API Error: 400 "Could not process image"`. Root cause: **5 corrupted JPEG files** in `computer-science/projects/edutech/images/` — these are 6-8MB files missing JPEG EOI markers:
- `award-ceremony.jpg` (6.7MB)
- `competition-1.jpg` (7.6MB)
- `competition-2.jpg` (7.7MB)
- `pit-display-1.jpg` (7.8MB)
- `pit-display-2.jpg` (7.8MB)

The `team-1.jpg` and `team-2.jpg` (144KB, 188KB) are valid. **Action needed:** Re-export or re-save the 5 corrupted files, or replace them.

### Image Validation Script
Created `scripts/validate_images.py` — validates JPEG (SOI/EOI markers), PNG (signature + IHDR), video (size check), WebP (RIFF header). Run before any image processing.
```bash
python3 scripts/validate_images.py [directory]
```

### What We're Doing Now (Session 4 Goals)
1. **Search computer for code repos** relevant to CV projects
2. **Read repos** and write about them for portfolio pages
3. **Copy images** from source directories into project folders
4. **Create/update project sub-pages** on the website
5. **Track missing resources** that need to be gathered
6. **Discover new projects** not yet on CV (hackathons, side projects)

### CV Reference
Full LaTeX CV was provided in Session 4 — contains all projects, experience, skills. See the conversation for full text.

---

## Computer Scan Results — Repos & Images Found

### CODE REPOSITORIES

#### 1. Project-Automaton (Isaac Sim / SO-101)
- **Repo:** `/Users/administrator/Black Projects/Project-Automaton/`
- **Git:** Yes
- **Contents:** SO-101 lerobot code, Intrinsic-AI, Liberty-Notes, Lychee-AI, References
- **README:** Detailed roadmap (Phase 1-3), tech stack, SO-100/SO-101 arm
- **Images found:** 12 Intrinsic AI Notes screenshots in `References/Intrinsic AI Notes/`
- **Physical arm photos:** Found in Red Coast Base (see below)
- **Portfolio page exists:** Yes (`isaac-sim/index.mdx`) — needs images and more content from README

#### 2. Utama-Core (RoboCup First Order Robotics)
- **Repo:** `/Users/administrator/imperial-college-london/Projects/2025/First-Order-Robotics/Utama-Core/`
- **Git:** Yes (pixi-managed Python project)
- **Contents:** MPC control, replays (PID/MPC damping variants), pipeline diagrams, grSim simulator
- **README:** Setup guide, pixi tasks, system architecture
- **Images found:**
  - `assets/images/pipeline.drawio.png` — system architecture diagram
  - `assets/images/pipeline_new.drawio.png` — updated pipeline
  - `assets/images/field_guide.jpg` — RoboCup field
  - `assets/images/grsim_setup.png` — simulator setup
  - `assets/images/robot_ids.svg` — robot ID diagram
- **Also:** grSim simulator at `/Users/administrator/imperial-college-london/Projects/2025/First-Order-Robotics/grSim/`
- **Portfolio page exists:** Yes (`robocup/index.mdx`) — needs images and pipeline diagrams

#### 3. Nosco-Workhours-WebApp
- **Repo:** `/Users/administrator/HTML, CSS, JS/Nosco-Workhours-WebApp/Nosco-app/`
- **Contents:** ReactJS + Firebase workforce management app
- **Portfolio page exists:** Yes (`nosco-workhours/index.mdx`) — has 2 demo videos, needs screenshots

#### 4. New-Dejima / Project Altiera (OpenClaw)
- **Repo:** `/Users/administrator/Black Projects/Project Altiera/New-Dejima/`
- **Git:** Yes
- **Contents:** OpenClaw-based autonomous app generation, design docs, miscellaneous
- **No project images found** — need architecture diagrams, screenshots, HackEurope photos
- **Portfolio page exists:** Yes (`new-dejima/index.mdx`) — needs images

#### 5. FPV Drone [5 Inch]
- **Repo:** `/Users/administrator/Black Projects/FPV Drone [5 Inch]/`
- **Contents:** Blender files (`5-Inch modification.blend`), DJI O4 camera mount designs, STLs, print designs
- **Subdirs:** `5-Inch FPV Drone/`, `DJI O4 Camera VTX Mount/`, `Blender Modified Prints/`, `To Prints/`, `Sienar Industries [logo]/`
- **No photo images found in root** — photos are in Red Coast Base (see below)
- **Portfolio page exists:** Yes (`fpv-drone/index.mdx`) — needs images

#### 6. xAI Grokathon
- **Repo:** `/Users/administrator/imperial-college-london/Projects/2026/2026-01 January/xAI Grokathon/`
- **Git:** Yes
- **Description:** Hackathon project at xAI London (January 2025/2026)
- **Contents:** `grok_code.py`, `ci_scan.py`, `cli.py`, `PROJECT_STATUS.md`
- **NOT on CV** — could be added as a hackathon project
- **Portfolio page exists:** No

#### 7. SkyHammer-Gemini-Hack
- **Repo:** `/Users/administrator/imperial-college-london/Projects/2026/2026-02 February/SkyHammer-Gemini-Hack/`
- **Git:** Yes
- **Description:** AI-powered cybersecurity agent for the Gemini 3 Hackathon 2026. Attack/Defend/Learn modes using Gemini.
- **Contents:** Full codebase, `PROJECT_STATUS.md`, `CLAUDE_CONTEXT.md`
- **NOT on CV** — could be added as a hackathon/AI project
- **Portfolio page exists:** No

#### 8. Project-Liberty
- **Repo:** `/Users/administrator/Black Projects/Project-Liberty/`
- **Git:** Yes
- **Description:** Typing out famous repos (llama.cpp) to learn code deeply. Personal skill-building project.
- **NOT on CV** — interesting but niche
- **Portfolio page exists:** No

#### 9. Interceptor Drone
- **Location:** `/Users/administrator/Black Projects/Interceptor Drone/`
- **Status:** Empty directory (project is in-progress, early stage)
- **Portfolio page exists:** Yes (`interceptor-drone/index.mdx`)

#### 10. SuperTorch 3D Modelling
- **Location:** `/Users/administrator/Black Projects/SuperTorch 3D Modelling/`
- **Contents:** Blender nozzle design, 6 source reference images, STL exports
- **NOT on CV** — minor 3D modelling project

### IMAGES & MEDIA FOUND (Source Directories)

#### IBM Z Datathon RLAIF — 7 files, ALL VALID
**Source:** `/Users/administrator/imperial-college-london/Projects/2025/Red Coast Base/IBM Z Datathon RLAIF/`
- `IMG_6462.JPG`, `IMG_6463.JPG`, `IMG_6473.JPG`, `IMG_6476.JPG`, `IMG_6477.JPG`
- `WhatsApp Video 2025-10-12 at 10.15.26 AM.mp4`
- `IMG_8108.MOV`
- **Status:** Ready to copy to `ibm-datathon/images/`

#### FPV Drone Maiden Flight — 17 files, ALL VALID
**Source:** `/Users/administrator/imperial-college-london/Projects/2025/Red Coast Base/FPV Drone - Maiden Flight/`
- ~14 JPGs + 1 PNG + 1 screenshot + `DJI_0015.mp4` (actual FPV flight footage!)
- **Status:** Ready to copy to `fpv-drone/images/`

#### FPV Sims — 1 file
**Source:** `/Users/administrator/imperial-college-london/Projects/2025/Red Coast Base/FPV Sims/`
- `30 Oct 2025 - Drone Update.mp4`
- **Status:** Could add to FPV drone page or drone society page

#### First Order Robotics Announcement — 7 files, ALL VALID
**Source:** `/Users/administrator/imperial-college-london/Projects/2025/Red Coast Base/First Order Robotics [Announcement]/`
- 7 JPGs including team photos and robot images
- **Status:** Ready to copy to `robocup/images/`

#### SO-101 & Isaac Sim — 27 files, ALL VALID
**Source:** `/Users/administrator/imperial-college-london/Projects/2025/Red Coast Base/9 January 2026/SO-101 & Isaac Sim/`
- ~15 JPGs of assembled SO-101 arm + 3 MOVs (videos of arm moving!)
- **Status:** Ready to copy to `isaac-sim/images/`

#### Iterate RL Hackathon — 6 files
**Source:** `/Users/administrator/imperial-college-london/Projects/2025/Red Coast Base/9 January 2026/Iterate RL Hackathon/`
- 4 JPGs + 2 MP4s
- **Status:** Could add to a hackathon page or Isaac Sim page

#### Perplexity Hackathon — 4 files, ALL VALID
**Source:** `/Users/administrator/imperial-college-london/Projects/2025/Red Coast Base/Perplexity Hackathon/`
- 4 JPGs
- **Status:** Not on CV yet — could add as hackathon project

#### Rockstar Datathon + IC Talks — 5 JPGs
**Source:** `/Users/administrator/imperial-college-london/Projects/2025/Red Coast Base/Rockstar Datathon + IC Talks/`
- 5 JPGs from datathon and IC talks events
- **Status:** Not on CV — could add

#### IGCSE Top In the World — 7 files
**Source:** `/Users/administrator/imperial-college-london/Projects/2025/Red Coast Base/IGCSE Top In the World/`
- 7 JPGs of awards
- **Status:** Could add to Academic section

#### Google Funding — 1 file
**Source:** `/Users/administrator/imperial-college-london/Projects/2025/Red Coast Base/Google Funding/`
- Screenshot of Google funding for Drone Society
- **Status:** Could add to interceptor-drone or drone society page

#### Singapore Events — 16+ JPGs
**Source:** `/Users/administrator/imperial-college-london/Projects/2025/Red Coast Base/Singapore Events - [Buisness + MLSG]/`
- Business meetings and ML Singapore meetup photos
- **Status:** Not critical for portfolio but good for "about" or extracurriculars

#### Utama-Core Pipeline Diagrams — 5 files
**Source:** `/Users/administrator/imperial-college-london/Projects/2025/First-Order-Robotics/Utama-Core/assets/images/`
- `pipeline.drawio.png`, `pipeline_new.drawio.png`, `field_guide.jpg`, `grsim_setup.png`, `robot_ids.svg`
- **Status:** Ready to copy to `robocup/images/`

---

## Still To Do

### HIGH PRIORITY — Copy Images & Enhance Existing Pages

- [ ] **IBM Datathon** — Copy 5 JPGs + 1 MP4 from Red Coast Base → `ibm-datathon/images/`, update MDX with carousel
- [ ] **FPV Drone** — Copy ~15 JPGs + `DJI_0015.mp4` from Red Coast Base → `fpv-drone/images/`, update MDX
- [ ] **RoboCup** — Copy 7 announcement JPGs + 5 pipeline diagrams → `robocup/images/`, update MDX
- [ ] **Isaac Sim** — Copy ~15 JPGs + 3 MOVs of SO-101 arm → `isaac-sim/images/`, update MDX with README content
- [ ] **Fix corrupted edutech images** — Re-save the 5 truncated JPEGs or replace them

### MEDIUM PRIORITY — New Project Pages

- [ ] **xAI Grokathon** — Read codebase, create portfolio page (hackathon project)
- [ ] **SkyHammer-Gemini-Hack** — Read codebase, create portfolio page (cybersecurity AI agent)
- [ ] **Perplexity Hackathon** — Create page with photos

### LOW PRIORITY — Additional Content

- [ ] **IGCSE Awards** — Add to Academic section
- [ ] **Google Funding screenshot** — Add to drone society/interceptor drone page
- [ ] Fix mismatched images identified by vision scan (see Image Mismatches below)
- [ ] Compress large images (some >5MB PNGs in electronic-art and display-spinner)
- [ ] Hero images for project cards (still using placeholder paths for new projects)
- [ ] Consider uploading large railgun videos to YouTube like game engine
- [ ] New Dejima — Still needs: architecture diagram, app screenshots, HackEurope photos, Paid.ai dashboard

### STILL NEED FROM USER (Can't Find on Computer)

- [ ] **New Dejima / HackEurope Paris** — Team photo, app screenshots, architecture diagram, YouTube Shorts screenshot
- [ ] **Interceptor Drone** — CAD designs, gimbal design, prototype photos (project seems very early stage)
- [ ] **Nosco WorkHours** — App screenshots (has demo videos already)
- [ ] **Hero images** for all new project cards

---

## Image Mismatches Found (Vision Scan — Session 3)
These images appear to be in wrong locations or don't match their context:
- `maze/images/maze-render.png` → Shows a camera model (should be in pinhole-camera?)
- `solar-heater/images/solar-heater-2.jpg` → Shows a car parked on road, not a solar heater
- `f1-in-schools/images/Car Design/img2.jpg` → Shows school hall video on laptop
- `f1-in-schools/images/Renders/cyberstation.jpg` → Shows students at table, not a render
- `f1-in-schools/images/Renders/darkstar.jpg` → Shows model car on newspaper
- `f1-in-schools/images/Track Building/img2.jpg` → Shows a pull-up banner
- `f1-in-schools/images/CFD Analysis/img1.jpg` → Shows race cars at competition
- `f1-in-schools/images/CFD Analysis/img2.jpg` → Shows award certificates

---

## What's Been Completed (All Sessions)

### Engineering Section (8 projects)
| Project | Slug | Status |
|---------|------|--------|
| Railgun | `railgun` | Complete with extensive MDX + images + PDF + videos |
| F1 in Schools | `f1-in-schools` | Complete (some images in wrong subfolders) |
| Display Spinner | `display-spinner` | Complete with Google Slides embed |
| Solar Heater | `solar-heater` | Complete (1 mismatched image) |
| Maze | `maze` | Complete (1 mismatched image - shows camera) |
| Pinhole Camera | `pinhole-camera` | Complete |
| Custom FPV Drone | `fpv-drone` | **COMPLETE** — 17 images + flight video, 3 carousels |
| Interceptor Drone | `interceptor-drone` | Page created, needs images |
| Tissue Culture | `tissue-culture` | Page created with 14 images + 1 video |

### Computer Science Section (18 projects)
| Project | Slug | Status |
|---------|------|--------|
| GPT-Valkyrie | `gpt-valkyrie` | Complete with ablation diagrams, GPU screenshots |
| Edutech Asia | `edutech` | Complete but **5 corrupted images** — only team-1/team-2 are valid |
| Game Engine | `game-engine` | Complete — video now YouTube embed |
| IBM Datathon RLAIF | `ibm-datathon` | **COMPLETE** — 5 slides + 1 video carousel |
| New Dejima | `new-dejima` | **ENHANCED** — 201 lines, full HackEurope details, still needs images |
| RoboCup | `robocup` | **COMPLETE** — 5 team photos + 5 pipeline diagrams, detailed MPC/strategy writeup |
| Isaac Sim | `isaac-sim` | **COMPLETE** — 21 images + 2 MOVs + 3 Intrinsic AI screenshots, full roadmap |
| Nosco WorkHours | `nosco-workhours` | Complete with 2 demo videos |
| xAI Grokathon | `xai-grokathon` | **NEW** — hackathon page created |
| SkyHammer | `skyhammer` | **NEW** — Gemini hackathon cybersecurity AI |
| EDTH Warsaw | `edth-warsaw` | **NEW** — defense drones hackathon |
| Perplexity Hack | `perplexity-hack` | **NEW** — 4 photos + page |
| Rockstar Datathon | `rockstar-datathon` | **NEW** — 6 photos + page |
| Reply AIM (CareCompass) | `reply-aim` | **NEW** — medical AI platform |
| RL-Iterate | `rl-iterate` | **NEW** — 4 photos + 2 videos + RLAIF cybersecurity |
| Drone-go-brrrrr | `drone-go-brrrrr` | **NEW** — Liquid NNs for drone control |
| Project Liberty | `project-liberty` | **NEW** — code typing practice (llama.cpp) |

### Academic Section (1 new project)
| Project | Slug | Status |
|---------|------|--------|
| IGCSE Awards | `igcse-awards` | **NEW** — 7 award photos + results table |

### Electronic Art Section (6 projects)
| Project | Slug | Status |
|---------|------|--------|
| McLaren Speedtail | `mclaren-speedtail` | Complete |
| Mercedes G Class | `mercedes-g-class` | Complete |
| Ferrari LaFerrari | `ferrari-laferrari` | Complete |
| McLaren P1 | `mclaren-p1` | Complete |
| Dodge Challenger | `dodge-challenger` | Complete |
| Blender Donut | `blender-donut` | Complete |

### Subsection Structure
| Section | Subsections |
|---------|-------------|
| Computing (`computer-science/`) | AI/ML (`aiml.md`), Robotics & Simulation (`robotics.md`), Full-Stack & Apps (`fullstack.md`), C/C++ (`cpp.md`) |
| Engineering (`engineering/`) | Current/Ongoing (`ongoing.md`), 2025 (`year-2025.md`), 2024 (`year-2024.md`), 2023 (`year-2023.md`), 2022 (`year-2022.md`) |
| Electronic Art (`electronic-art/`) | Blender (`blender.md`) |
| Academic (`academic/`) | IB (`ib.md`), Self-Study (`self-study.md`) |
| Miscellaneous (`miscellaneous/`) | Hackathons & Competitions (`hackathons.md`) |

### Portfolio Nav Tabs (RESTRUCTURED Session 4)
1. Resume (PDF embed + download)
2. Computing (was "Computer Science" — content folder still `computer-science/`)
3. Engineering
4. MIT Portfolio (was "Video Summary" — YouTube embed, notes "projects till December 2024")
5. Academic (was "Academic & Miscellaneous")
6. Electronic Art
7. Miscellaneous (NEW — hackathons and smaller/unfinished projects)

**Key mapping:** Tab id `computing` → content folder `computer-science/`. Tab id `mit-portfolio` → special component `VideoSummary` (fetches from `video-summary/index.md`).

---

## Key File Locations

### Configuration Files
```
/craco.config.js          - CRACO config (fixes ResizeObserver error)
/package.json             - Uses CRACO instead of react-scripts
/public/.htaccess         - SPA routing + Tractable redirect
/src/index.js             - React entry point
/.env                     - PUBLIC_URL=. and GENERATE_SOURCEMAP=false
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
├── video-summary/index.md              ← MIT Portfolio content (heading, video URL)
├── engineering/
│   ├── index.md, year-2025.md, year-2024.md, year-2023.md, year-2022.md, ongoing.md, skills.md
│   └── projects/{railgun,f1-in-schools,display-spinner,solar-heater,maze,pinhole-camera,fpv-drone,interceptor-drone,tissue-culture}/
├── computer-science/                    ← "Computing" tab maps here
│   ├── index.md, aiml.md, robotics.md, fullstack.md, cpp.md, hackathons.md (legacy), skills.md
│   └── projects/{gpt-valkyrie,edutech,game-engine,ibm-datathon,new-dejima,robocup,isaac-sim,nosco-workhours,xai-grokathon,skyhammer,edth-warsaw,perplexity-hack,rockstar-datathon,reply-aim,rl-iterate,drone-go-brrrrr,project-liberty}/
├── electronic-art/
│   ├── index.md, blender.md, skills.md
│   └── projects/{mclaren-speedtail,mercedes-g-class,ferrari-laferrari,mclaren-p1,dodge-challenger,blender-donut}/
├── academic/
│   ├── index.md, ib.md, self-study.md, skills.md
│   └── projects/{igcse-awards}/
└── miscellaneous/                       ← NEW — hackathons moved here
    ├── index.md, hackathons.md
    └── projects/                        ← MDX files still in computer-science/projects/ (slug lookup searches all sections)
```

### Source Directories on Computer
```
/Users/administrator/imperial-college-london/Projects/
├── 2025/
│   ├── First-Order-Robotics/        — Utama-Core (RoboCup) + grSim
│   │   ├── Utama-Core/              — Main codebase, MPC, replays, pipeline diagrams
│   │   └── grSim/                   — RoboCup simulator
│   ├── IC Drone Soc/                — Event forms only
│   └── Red Coast Base/              — ALL THE PHOTOS/VIDEOS (LinkedIn posts, events)
│       ├── IBM Z Datathon RLAIF/    — 5 JPGs + 1 MP4 + 1 MOV ✓
│       ├── FPV Drone - Maiden Flight/ — ~15 JPGs + 1 MP4 ✓
│       ├── FPV Sims/                — 1 MP4 ✓
│       ├── First Order Robotics [Announcement]/ — 7 JPGs ✓
│       ├── Perplexity Hackathon/    — 4 JPGs ✓
│       ├── IGCSE Top In the World/  — 7 JPGs ✓
│       ├── Rockstar Datathon + IC Talks/ — 5 JPGs
│       ├── Singapore Events/        — 16+ JPGs
│       ├── Google Funding/          — 1 screenshot
│       ├── Imperial College & IB 42 777/ — TBD
│       ├── CV/                      — TBD
│       └── 9 January 2026/
│           ├── SO-101 & Isaac Sim/  — ~15 JPGs + 3 MOVs ✓✓✓
│           └── Iterate RL Hackathon/ — 4 JPGs + 2 MP4s
├── 2026/
│   ├── 2026-01 January/
│   │   ├── Project Automaton/       — TBD
│   │   └── xAI Grokathon/          — Hackathon codebase (not on CV)
│   └── 2026-02 February/
│       ├── Project Altiera/         — New Dejima copy?
│       ├── SkyHammer-Gemini-Hack/   — Cybersecurity AI (Gemini Hackathon, not on CV)
│       └── xAI-Grokathon-Copy/     — Copy of Grokathon

/Users/administrator/Black Projects/
├── Project-Automaton/               — Isaac Sim robotics, SO-101, lerobot
├── Project-Liberty/                 — Code typing practice (llama.cpp)
├── Project Altiera/                 — New Dejima + OpenClaw
├── FPV Drone [5 Inch]/             — Blender files, STLs, DJI mount designs
├── Interceptor Drone/              — Empty (project very early)
├── SuperTorch 3D Modelling/        — Blender nozzle + 6 source images
├── 3D Print Funs/                  — Future/Printed/Queue
├── 07_Magneco Metrel/              — TBD
├── DJI - Lands/                    — TBD
├── Tech Meetups/                   — Google events, papers, SSH key
└── Archive/                        — TBD

/Users/administrator/HTML, CSS, JS/
└── Nosco-Workhours-WebApp/         — Source code for Nosco app

/Users/administrator/Documentations/
├── Computer Science/Nosco WorkHours App/ — Documentation
├── Academic & Miscellaneous/Biotechnology - Tissue Culture/ — Already copied
└── ... (other docs from Session 1-2)
```

### Scripts
```
/scripts/validate_images.py          - Image corruption checker (JPEG/PNG/video/WebP)
/tmp/vision_helper.py               - OpenRouter Gemini flash-lite image identification
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

### Image Validation
```bash
python3 scripts/validate_images.py [directory]
# Validates JPEG (SOI/EOI), PNG (signature+IHDR), video (size), WebP (RIFF)
# Run BEFORE processing images to avoid API crashes
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
3. **Session 3 (Mar 7, 2026):** Fixed MDX bug, added Resume tab, Tractable redirect, filled About/Academic/Contact with real data from resume, vision-scanned all images (found mismatches), swapped game engine video to YouTube, set up for adding new projects, created new project pages (ibm-datathon, new-dejima, robocup, isaac-sim, nosco-workhours, fpv-drone, interceptor-drone, tissue-culture), added subsections (robotics.md, fullstack.md), created RESOURCES-NEEDED.md. **Crashed at end due to corrupted edutech images.**
4. **Session 4 (Mar 7-8, 2026):** Fresh start after crash. Scanned entire computer for repos and images. Found: xAI Grokathon, SkyHammer-Gemini-Hack, Project-Liberty as new repos not on CV. Found photos for IBM Datathon (7), FPV Drone (17), RoboCup (12), Isaac Sim/SO-101 (27), Perplexity Hackathon (4), IGCSE awards (7). Created image validation script. Identified 5 corrupted edutech JPEGs as crash root cause. Queried GitHub (`gh repo list Ice-Citron`) — found 50 repos total. Launched 6 parallel agents to: copy images for IBM/FPV/RoboCup/Isaac Sim, create new hackathon pages (xAI Grokathon, SkyHammer, EDTH-Warsaw, Perplexity, Rockstar, Reply-AIM), read Black Projects repos deeply, create Hackathons subsection.
   - **Context crash & resume (Session 4b):** Fixed electronic art hero image paths in `blender.md`. Then RESTRUCTURED LAYOUT per user request:
     - Nav: [Resume] [Computing] [Engineering] [MIT Portfolio] [Academic] [Electronic Art] [Miscellaneous]
     - `video-summary` → `mit-portfolio` (note: "projects till December 2024")
     - `computer-science` label → `Computing` (content folder unchanged)
     - `academic` label dropped "& Miscellaneous"
     - NEW `miscellaneous` section — moved hackathons from computer-science to here
     - Default tab changed from `video-summary` to `resume`
     - `ProjectDetail.jsx` sections array updated to include `miscellaneous`
     - Files modified: `PortfolioNav.jsx`, `ProjectGrid.jsx`, `ProjectDetail.jsx`, `portfolio/index.js`, `video-summary/index.md`, `computer-science/index.md`
     - Files created: `miscellaneous/index.md`, `miscellaneous/hackathons.md`

---

## GitHub Repo Inventory (Ice-Citron — 50 repos)

### Already on Portfolio
| Repo | Portfolio Page | Status |
|------|---------------|--------|
| New-United-States-of-America | This portfolio | Active |
| Project-Automaton | `isaac-sim` | Updating |
| New-Dejima | `new-dejima` | Updating |
| IBM-Z-Datathon | `ibm-datathon` | Updating |
| Edutech-Recon-Drone | `edutech` | Complete (5 corrupted images) |
| GPT-Valkyrie / nanoGPT-Valkyrie | `gpt-valkyrie` | Complete |
| Nosco-Workhours-WebApp | `nosco-workhours` | Complete with videos |
| grSim | Part of `robocup` | Updating |
| Anduril-F1 / Anduril-F1-Blend / Anduril-F1-Main / Anduril-Meshing / anduril | `f1-in-schools` | Complete |
| FEA-Physics_IA | Part of `railgun` | Complete |

### Being Added This Session
| Repo | New Page | Description |
|------|----------|-------------|
| xAI-Grokathon | `xai-grokathon` | xAI hackathon London (Jan 2026) |
| Gemini-Hackathon (SkyHammer) | `skyhammer` | AI cybersecurity agent — Attack/Defend/Learn |
| EDTH-Warsaw | `edth-warsaw` | Defense drones hackathon Warsaw — "Angel" multi-device defense system |
| Perplexity-Hackathon-2025 | `perplexity-hack` | "Really?" AI news platform with bias analysis, quizzes |
| Rockstar-GTAV-Datathon | `rockstar-datathon` | GTA V player data analysis, PCA, spending patterns |
| Reply-AIM-Hackathon | `reply-aim` | "CareCompass" — Medical AI cost comparison platform |
| Project-Liberty | `project-liberty` | Code typing practice (llama.cpp) for deep code learning |
| Drone-go-brrrrr | `drone-go-brrrrr` | Liquid Neural Networks vs MLP for drone RL control |

### Could Add Later (Lower Priority)
| Repo | Description | Notes |
|------|-------------|-------|
| RL-Iterate-London-Hackathon | RL cybersecurity agent | Private repo, has photos in Red Coast Base |
| Cyber-AutoAgent | Fork of autonomous pentest agent | Fork, not original |
| cai-vllm | Fork of CAI framework | Fork, not original |
| helmholtz | Fork of EM wave visualizer | Fork, not original (Junction 2025 winners) |
| nanochat | ChatGPT clone | Fork/minor |
| Kotlin-Course | Learning Kotlin | Course follow-along |
| Google-IO-June-2025 | Google I/O test code | Minor |
| warm-up-vscode | VSCode typing extension | Fork |
| DT-Coursework | IGCSE DT Arduino code | Minor, could add to engineering |
| Sparky | First C++ game engine (Cherno course) | Predecessor to CAS-Project--Hazel |
| Summer-Hackclub-Projects | Hackclub projects | Archive |
| GPT-dev__Andrej-course | Karpathy course notes | Learning material |
| GPTesla | Pre-EE transformer research | Predecessor to GPT-Valkyrie |
| NLP-Transformer | O'Reilly NLP book work | Learning material |
| Nvidia__CUDA-Course / Nvidia-GTC-* | NVIDIA courses | Learning material |
| AAH-IA | IB Art HL IA | Could add to Academic |
| firestore-read | Claude MCP for Firestore | Tool, minor |
| Extended-Essay-Appendix | EE data appendix | Supporting material |
| 2022-Programming-Archive-of-the-Past | Old Python code archive | Archive |
| C-Beginner-Courses-Archive-of-the-Past- | C++ tutorials archive | Archive |
| Personal-Portfolio | Old portfolio website | Superseded |
| TDL-app-React-Firebase | Firebase tutorial | Learning material |
| Getting-started-with-Firebase | Firebase init | Learning material |
| Ice-Citron | GitHub profile README | Profile config |
