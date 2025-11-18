# UX Portfolio Design Guidelines - ARB

## Design Approach
**Aesthetic Direction**: Modern minimalist foundation with fantasy-inspired elegance. Think "tech professional meets elven royalty" - clean interfaces with magical undertones through jewel tones, subtle gradients, and ethereal touches. Reference high-end portfolio sites like Brittany Chiang or Adham Dannaway for structure, but inject fantasy energy through color, typography, and micro-interactions.

## Core Design Elements

### Typography System
- **Headers**: Serif font (Playfair Display or Cormorant Garamond) for elegant, regal feel - use for name "ARB", page titles, and section headers
- **Body**: Clean sans-serif (Inter or DM Sans) for readability and modern professionalism
- **Hierarchy**: 
  - Hero name/ARB: text-6xl to text-8xl, serif, bold
  - Tagline: text-xl to text-2xl, serif, light weight
  - Section headers: text-4xl, serif
  - Body text: text-base to text-lg, sans-serif
  - Captions: text-sm, sans-serif

### Layout System
**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 to py-32 on desktop, py-12 to py-16 on mobile
- Component spacing: gap-8 to gap-12 for grids
- Content max-width: max-w-7xl for full sections, max-w-4xl for text-heavy content

### Visual Treatment
- **Shadows**: Soft, layered shadows (shadow-lg, shadow-xl) for depth and elegance
- **Corners**: Rounded elements throughout - rounded-xl for cards, rounded-2xl for larger containers
- **Gradients**: Subtle jewel-tone gradients as accents (not overwhelming) - use in hero backgrounds, card overlays, button states
- **Glass Effects**: Frosted glass/backdrop blur for overlays and navigation (backdrop-blur-lg)

## Component Library

### Navigation
Fixed header with glass morphism effect, elegant serif logo "ARB", minimal menu items. Smooth scroll behavior with subtle parallax on scroll.

### Hero Section (Homepage)
Full-viewport or 80vh hero with ethereal background treatment (gradient mesh or subtle particle effect). Large "ARB" typography centered, tagline beneath. Smooth scroll indicator. Background should feel magical but not distracting - think aurora-like gradient with jewel tones.

### Case Study Cards
Grid layout (2 columns desktop, 1 mobile) with project thumbnails, hover states revealing project title and brief description. Rounded corners, soft shadows that lift on hover. Each card should feel like opening a portal to that project.

### Photo Galleries (Modeling/About)
Masonry or staggered grid layout for visual interest. Lightbox functionality for full-screen viewing. Mix portrait and landscape orientations. Subtle fade-in animations on scroll.

### Project Detail Pages
Clean single-column layout with strategic full-width image sections. Sections: Overview, Problem, Research, Insights, IA/Wireframes, Final Designs, Learnings, Impact. Each section clearly delineated with generous spacing.

### Contact Form
Clean, minimal form with elegant input styling. Soft focus states with jewel-tone accents. Floating labels or inline labels with sophisticated styling.

## Color Strategy (Jewel Tones)
While specific colors will be defined later, the palette structure:
- **Primary Jewel Tones**: Emerald (primary actions/links), Sapphire (secondary elements), Amethyst (accents)
- **Neutral Base**: Clean whites/off-whites with sophisticated grays
- **Application**: Use jewel tones sparingly for maximum impact - buttons, links, section accents, gradient overlays

## Animations & Motion
Subtle and elegant - never distracting:
- Smooth page transitions and scroll-triggered fade-ins
- Gentle hover lifts on cards (transform: translateY(-4px))
- Parallax scrolling on hero section (subtle)
- Smooth reveal animations for content sections
- Cursor interactions (optional custom cursor with magical trail)

## Images

### Hero Section
Large, ethereal background image or gradient mesh. Could be abstract/fantasy-inspired visual (think misty forests, auroras, celestial elements) or professional headshot with magical overlay treatment.

### Case Study Thumbnails
High-quality project mockups or hero images for each of the 4 case studies.

### About Me Page
Professional UX headshot, plus candid photos from soccer career, international travels. Modeling gallery with 6-12 curated high-fashion images.

### Additional Talents Page
Modeling portfolio with 10-15 images, including fantasy-themed photoshoot concepts. Mix of editorial, fashion, and creative direction work.

## Page-Specific Layouts

### Homepage
Hero (80vh) → Value Proposition (3-4 key strengths in subtle grid) → Featured Work Preview (2-3 case study cards) → Brief About Teaser → CTA to Case Studies/Contact

### Case Studies Page
Page header with filter/category options → Grid of 4 project cards → Each links to individual project detail page with full case study structure

### About Me
Hero with photo → UX Journey narrative → Soccer/Travel story → Skills/Expertise → Modeling gallery (masonry grid)

### Additional Talents
Creative showcase mixing modeling images, motion design samples, content creation highlights in dynamic, editorial-style layout

### Contact
Simple centered layout with form + alternative contact methods (email, LinkedIn)

## Responsive Behavior
Mobile-first with graceful scaling. Single column on mobile, strategic 2-3 columns on tablet/desktop for grids. Touch-friendly hit areas (min 44px). Simplified navigation on mobile (hamburger menu with elegant slide-in).