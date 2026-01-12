# Portfolio Website Project Notes

**Last Updated:** January 2026
**Project Location:** `/Users/administrator/Python/New United States of America`

---

## Project Overview

This is a personal portfolio website built with **React** and **MDX** for content management. The site showcases engineering projects, computer science work, and electronic art (Blender renders).

### Tech Stack
- **React** (Create React App with CRACO)
- **MDX** (@mdx-js/mdx) for rich content pages
- **gray-matter** for YAML frontmatter parsing
- **react-router-dom** for routing

---

## Current Bug (Needs Fixing)

When clicking into any project page (e.g., `/project/blender-donut`), there's an MDX compilation error:

```
Unexpected character `!` (U+0021) before name, expected a character that can start a name, such as a letter, `$`, or `_`
```

**Console shows:**
- `raw MDX length => 818` (suspiciously short - likely receiving HTML instead of MDX)
- The fetch is probably returning `index.html` (the React app) instead of the actual `.mdx` file

**Likely cause:** The dev server might not be serving static files from subdirectories correctly, or there's a caching issue.

**To debug:**
1. Check if the MDX files are accessible directly: `http://localhost:3000/content/portfolio/electronic-art/projects/blender-donut/index.mdx`
2. If that returns HTML, the issue is with the dev server static file serving
3. May need to adjust webpack/CRACO config or move files

---

## What's Been Completed

### Engineering Section (Fully Populated)
| Project | Slug | Location |
|---------|------|----------|
| Railgun | `railgun` | `/public/content/portfolio/engineering/projects/railgun/` |
| F1 in Schools | `f1-in-schools` | `/public/content/portfolio/engineering/projects/f1-in-schools/` |
| Display Spinner | `display-spinner` | `/public/content/portfolio/engineering/projects/display-spinner/` |
| Solar Heater | `solar-heater` | `/public/content/portfolio/engineering/projects/solar-heater/` |
| Maze | `maze` | `/public/content/portfolio/engineering/projects/maze/` |
| Pinhole Camera | `pinhole-camera` | `/public/content/portfolio/engineering/projects/pinhole-camera/` |

**Removed:** TinkerCAD Drones (no evidence available)

### Computer Science Section (Newly Enabled)
| Project | Slug | Location |
|---------|------|----------|
| GPT-Valkyrie | `gpt-valkyrie` | `/public/content/portfolio/computer-science/projects/gpt-valkyrie/` |
| Edutech Asia (Recon Drone) | `edutech` | `/public/content/portfolio/computer-science/projects/edutech/` |
| Game Engine (C++) | `game-engine` | `/public/content/portfolio/computer-science/projects/game-engine/` |

### Electronic Art Section (Newly Enabled - Individual Projects)
| Project | Slug | Location |
|---------|------|----------|
| McLaren Speedtail | `mclaren-speedtail` | `/public/content/portfolio/electronic-art/projects/mclaren-speedtail/` |
| Mercedes G Class | `mercedes-g-class` | `/public/content/portfolio/electronic-art/projects/mercedes-g-class/` |
| Ferrari LaFerrari | `ferrari-laferrari` | `/public/content/portfolio/electronic-art/projects/ferrari-laferrari/` |
| McLaren P1 | `mclaren-p1` | `/public/content/portfolio/electronic-art/projects/mclaren-p1/` |
| Dodge Challenger | `dodge-challenger` | `/public/content/portfolio/electronic-art/projects/dodge-challenger/` |
| Blender Donut | `blender-donut` | `/public/content/portfolio/electronic-art/projects/blender-donut/` |

**TODO:** Add Mystical Cube project (user said they re-added it to `/Users/administrator/Documentations/Electronic Arts/Blender - Mystical Cube/`)

---

## What's Left To Do

### Immediate (Bug Fix)
- [ ] Fix MDX loading error for project pages
- [ ] Add Mystical Cube to electronic-art projects

### Content Still Available
- [ ] Academic section (currently disabled)
- [ ] Renaissance Python projects (in documentation folder)
- [ ] More Caltech HTML entries not yet used

### Polish
- [ ] Hero images for project cards (currently using placeholder paths like `/assets/projects/xxx/hero.png`)
- [ ] Fix any mislinked images (user mentioned they'd handle this)

---

## Key File Locations

### Configuration Files
```
/craco.config.js          - CRACO config (fixes ResizeObserver error)
/package.json             - Uses CRACO instead of react-scripts
/src/index.js             - React entry point
```

### Main Components
```
/src/components/portfolio/ProjectDetail.jsx   - Renders individual project pages (MDX)
/src/components/portfolio/Carousel.jsx        - Image/video carousel component
```

### Content Structure
```
/public/content/portfolio/
├── engineering/
│   ├── index.md              - Section config (lists year subsections)
│   ├── year-2024.md          - Projects: Railgun, F1, Solar Heater
│   ├── year-2023.md          - Projects: Display Spinner
│   ├── year-2022.md          - Projects: Maze, Pinhole Camera
│   ├── ongoing.md            - Currently empty (CNC machine removed)
│   └── projects/
│       ├── railgun/index.mdx
│       ├── f1-in-schools/index.mdx
│       ├── display-spinner/index.mdx
│       ├── solar-heater/index.mdx
│       ├── maze/index.mdx
│       └── pinhole-camera/index.mdx
│
├── computer-science/
│   ├── index.md              - Section config (AI/ML, C++)
│   ├── aiml.md               - AI/ML subsection with GPT-Valkyrie, Edutech
│   ├── cpp.md                - C++ subsection with Game Engine
│   └── projects/
│       ├── gpt-valkyrie/index.mdx
│       ├── edutech/index.mdx
│       └── game-engine/index.mdx
│
├── electronic-art/
│   ├── index.md              - Section config (Blender subsection)
│   ├── blender.md            - Lists all car render projects
│   └── projects/
│       ├── mclaren-speedtail/index.mdx
│       ├── mercedes-g-class/index.mdx
│       ├── ferrari-laferrari/index.mdx
│       ├── mclaren-p1/index.mdx
│       ├── dodge-challenger/index.mdx
│       └── blender-donut/index.mdx
│
└── academic/                 - Currently disabled
```

### Source Documentation (Content pulled from here)
```
/Users/administrator/Documentations/
├── Caltech HTML/                    - Saved web pages with portfolio text (use textarea extraction)
├── Engineering/                     - PDFs, images for engineering projects
├── Computer Science/
│   ├── AI RELATED/GPT Pictures/     - GPT-Valkyrie images
│   ├── Edutech Asia/                - Competition photos/videos
│   └── C:C++ Sparky Game Engine/    - Game engine demo video
├── Electronic Arts/
│   ├── Blender - McLaren P1/
│   ├── Blender - LaFerrari/
│   ├── Blender - G Class/
│   ├── Blender - Mystical Cube/     - User said they re-added content here
│   └── Adobe Photoshop & Blender - Speedtail/
├── Renaissance Blender Projects/    - Early Blender work (Donut, Dodge Challenger)
└── MIT/Caltech Additional/          - More documentation
```

---

## Key Techniques & Patterns

### 1. Extracting Text from Caltech HTML Files
The Caltech HTML files are saved web pages. Content is in `<textarea>` tags:

```python
import re
with open('Portfolio XX.html', 'r') as f:
    content = f.read()
textareas = re.findall(r'<textarea[^>]*>(.*?)</textarea>', content, re.DOTALL)
for t in textareas:
    if len(t.strip()) > 20:
        print(t)
```

### 2. MDX Content Structure
Each project has an `index.mdx` file with this pattern:

```mdx
# Title

Introduction paragraph...

---

# Section Name

<MyCarousel
  slides={[
    {
      src: "/content/portfolio/SECTION/projects/SLUG/images/image.png",
      caption: "Caption text"
    },
    {
      type: "video",
      src: "/content/portfolio/SECTION/projects/SLUG/images/video.mov",
      videoType: "video/mp4",
      caption: "Video caption"
    }
  ]}
  width={900}
  height={600}
/>

Content text...

<br></br>
<br></br>

---

# Another Section
...
```

### 3. Available MDX Components
Defined in `ProjectDetail.jsx`:

```jsx
// Image/Video Carousel
<MyCarousel slides={[...]} width={900} height={600} />

// PDF Embed
<PDFViewer url="/path/to/file.pdf" />

// Google Slides Embed
<GoogleSlides url="https://docs.google.com/presentation/d/ID/edit..." height={569} />

// Styled Document Link
<DocumentLink
  href="https://example.com"
  title="Document Title"
  description="Description text"
  icon="📄"
/>
```

### 4. YAML Frontmatter for Subsections
Each year/category `.md` file uses this structure:

```yaml
---
portfolio_type: "subsection"
section: "engineering"
subsection: "year-2024"
display_order: 3
show_projects: true
show_certifications: false
show_courses: true
show_books: false

projects:
  - title: "Project Name"
    description: "Short description"
    technologies: ["Tech1", "Tech2"]
    image: "/assets/projects/slug/hero.jpg"
    link: "/section/projects/slug"
    slug: "slug"                        # IMPORTANT: This makes it clickable!
    featured: true
---
```

### 5. ProjectDetail.jsx Multi-Section Search
The component searches multiple sections for projects:

```javascript
const sections = ['engineering', 'computer-science', 'electronic-art', 'academic'];
for (const section of sections) {
  const fileUrl = new URL(`/content/portfolio/${section}/projects/${slug}/index.mdx`, window.location.origin);
  // Try fetch...
}
```

### 6. ResizeObserver Error Fix
Created `/craco.config.js`:

```javascript
module.exports = {
  devServer: {
    client: {
      overlay: {
        runtimeErrors: (error) => {
          if (error.message === 'ResizeObserver loop completed with undelivered notifications.' ||
              error.message === 'ResizeObserver loop limit exceeded') {
            return false;
          }
          return true;
        },
      },
    },
  },
};
```

And updated `package.json` scripts to use `craco` instead of `react-scripts`.

---

## Quick Commands

```bash
# Start dev server
cd "/Users/administrator/Python/New United States of America"
npm start

# List all MDX files
find public/content/portfolio -name "*.mdx"

# Extract Caltech HTML content for portfolio entry XX
python3 -c "
import re
with open('/Users/administrator/Documentations/Caltech HTML/Portfolio XX.html', 'r') as f:
    content = f.read()
for t in re.findall(r'<textarea[^>]*>(.*?)</textarea>', content, re.DOTALL):
    if len(t.strip()) > 20: print(t)
"

# Copy images to a new project
mkdir -p public/content/portfolio/SECTION/projects/SLUG/images
cp "/Users/administrator/Documentations/SOURCE/image.png" public/content/portfolio/SECTION/projects/SLUG/images/
```

---

## Front Page Notes

Updated in `/src/content_option.js`:
- Removed "CNC machine" from ongoing projects
- Added note that portfolio is updated through January 2025
- User mentioned they'll update with hackathons from Jan 2025 - Jan 2026 soon

---

## Session History Summary

1. Started with populating engineering projects from Caltech HTML
2. Added PDF embed, Google Slides embed, DocumentLink components
3. Fixed ResizeObserver error with CRACO config
4. Enabled Computer Science section (GPT-Valkyrie, Edutech, Game Engine)
5. Enabled Electronic Art section (6 Blender car projects, separated individually)
6. Removed TinkerCAD from engineering (no evidence)
7. Fixed ProjectDetail.jsx to search multiple sections
8. **Current issue:** MDX files not loading properly (getting HTML instead)

---

## Contact/Notes

- Images may be mislinked (user will fix manually)
- User mentioned they re-added Mystical Cube content - needs to be added as a project
- User wants individual pages for each Blender project (done), ordered: Speedtail > G Class > Ferrari > P1 > Challenger > Donut > Cube
