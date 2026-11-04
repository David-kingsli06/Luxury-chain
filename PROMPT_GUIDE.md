# Master Prompt: Recreating the Aurelia Atelier Luxury Hero Experience

If you did not have a reference video or screenshot to provide, here is the exact, comprehensive prompt you could give to an AI agent to achieve this identical high-end design, interactive feel, responsive layout, and cinematic animation on the very first try.

---

## 📋 The Copy-Paste Master Prompt

```markdown
Create a single-screen, non-scrollable, ultra-luxury high-jewelry hero landing page in Next.js (App Router, Tailwind CSS, TypeScript, lucide-react) for a fictional Swiss haute joaillerie maison named "Aurelia Atelier: Haute Joaillerie · Genève".

### 1. Visual Aesthetics & Design System
- **Color Palette:**
  - Deep atmospheric emerald green background (#03110a to #072315 radial gradient) with subtle ambient light glow behind the centerpiece.
  - Warm champagne gold accents (#d4af37, #f6e05e, #aa820a).
  - Glassmorphic luxury dark cards: rgba(5, 26, 17, 0.72) with border `rgba(212, 175, 55, 0.2)` and subtle inner backdrop blur (16px).
- **Typography:**
  - Serif luxury headings: Cormorant Garamond / Playfair Display style (refined italic serif for brand name).
  - Editorial sans/monospaced subtext: small uppercase with ultra-wide tracking (`tracking-[0.25em]` to `tracking-[0.35em]`).
- **Watermark:**
  - Giant, subtle, semi-transparent serif watermark reading "AURELIA" centered behind the main image (opacity 5-8%).

### 2. Layout Structure (Strict 1-Screen Fixed Viewport)
- The entire page MUST fit inside a fixed `100vh` / `100vw` with `overflow: hidden` (no window scrollbars on any device).
- **Header Navigation (3-Column Layout):**
  - **Left corner:** Editorial navigation links: `COLLECTION`, `ATELIER`, `HERITAGE`, `BESPOKE` with hover gold underline transitions. On mobile, collapse into a sleek hamburger button with an animated luxury side drawer.
  - **Exact Center:** Brand identity logo: "Aurelia Atelier" (large refined serif italic) + "HAUTE JOAILLERIE · GENÈVE" (micro uppercase tracked subtitle).
  - **Right corner:** Quick actions: Search icon button and Luxury Bag/Cart pill showing count badge (e.g., `1`).
- **Centerpiece:**
  - A prominent hand holding an opulent 18k gold link chain adorned with glowing step-cut Colombian emeralds.
  - Centered vertically and horizontally, responsive scaling (`w-[270px] h-[370px]` on mobile, scaling up to `w-[520px] h-[660px]` / `max-h-[72vh]` on desktop so it never overflows).
  - Specular glint / sparkle shimmer effects positioned over the emerald stones.
- **Floating Luxury UI Cards:**
  1. **Top-Right Floating Pill ("The Imperial Link"):**
     - Pill with a thumbnail of the chain, text "The Imperial Link - GRADE AAA EMERALD", and an interactive `+` expand button that opens a luxury specs drawer/modal (carats, gold purity, provenance).
  2. **Bottom-Left Narrative Card ("Certified Sovereign Creation"):**
     - Shield badge icon with "CERTIFIED SOVEREIGN CREATION".
     - Headline: "Eternal Radiance, Sculpted by Hand".
     - Description: "Crafted in 18-karat solid heirloom gold and crowned with step-cut untreated Colombian emeralds. Engineered for sovereign presence."
     - Buttons: Solid champagne gold CTA "ACQUIRE PIECE" and ghost text link "Atelier Notes".
  3. **Bottom-Right Social Proof Pill ("Private Collector Circle"):**
     - Stacked circular monogram badges (e.g., EA, VK, SC with gold borders).
     - Text: "Private Collector Circle ↗ / 3,800+ HEIRLOOMS COMMISSIONED". (Hidden on small mobile, visible on `md+`).
- **Bottom Status Footer:**
  - Left: Clean minimalist brand mark badge & copyright statement.
  - Right: "Handcrafted in Switzerland" + "COLLECTION MMXXVI".

### 3. Motion & Cinematic Entrance Choreography
- On page load, execute an orchestrated 1.5s - 2.5s cinematic entrance animation sequence:
  1. Hand and chain scale smoothly up from `scale(0.88)` to `scale(1)` with a soft fade-in (`cubic-bezier(0.16, 1, 0.3, 1)`).
  2. Header elements glide down from `-20px` opacity 0.
  3. Left narrative card slides gracefully from left (`-30px` to `0`).
  4. Right floating pills slide smoothly from right (`+30px` to `0`).
  5. Continuous ambient idle motion: gentle floating oscillation (`translateY(-6px)` to `translateY(6px)`), slow breathing pulse on the emerald ambient back-glow, and periodic sparkling glints on the gemstones.

### 4. Interactive Delight
- **3D Interactive Tilt:** Mouse tracking over the viewport applies a subtle dynamic 3D tilt (`perspective(1000px) rotateX(...) rotateY(...)`) and parallax shift to the hand and cards.
- **Spec Details Modal:** Clicking the `+` button smoothly toggles an editorial specifications popover.
- **Cart Counter:** Clicking "Acquire Piece" increments the cart counter with an animated pulse.

### 5. Technical Requirements
- Next.js App Router (TypeScript, Tailwind CSS v4, Lucide React).
- Fully self-contained without broken external image URLs (use local high-resolution assets or custom styled SVG avatars/badges).
- Fully responsive across mobile (<640px), tablet (640px–1024px), and desktop/laptop (>1024px) with zero scrollbar leakage.
```

---

## 💡 Why This Prompt Works (Key Prompting Principles)

1. **Explicit Visual Constraints:** Instead of saying *"make a luxury jewelry website"*, specifying the **exact color codes** (`#03110a`, `#d4af37`), **typography style** (high-contrast serif with tracked sans subtext), and **glassmorphism parameters** eliminates aesthetic ambiguity.
2. **Strict Spatial Layout Coordinates:** Specifying the 3-column split (`left links`, `exact center brand logo`, `right utility icons`) prevents the AI from defaulting to standard generic navbar layouts.
3. **Motion & Choreography Timing:** Specifying the staggered entrance order (hand first $\rightarrow$ header $\rightarrow$ left card $\rightarrow$ right card) along with ambient idle animations creates the feeling of a video reel or bespoke agency portfolio.
4. **Hard Responsiveness Guardrails:** Stating *"fixed 100vh / 100vw, overflow: hidden, zero window scrollbars on any device"* ensures the agent constrains image `max-height` properly across mobile and laptop viewports.
