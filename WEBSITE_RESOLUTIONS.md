# Kyureeus Website: Cross-OS Screen Resolution & Responsive Architecture Guide

This document details the multi-resolution responsive architecture, cross-OS display scaling engineering, viewport management (`100dvh`), and multi-tier container width system implemented across the **Kyureeus Website**.

---

## 1. Executive Summary & Design System

The Kyureeus website is built with an **Adaptive Viewport & Resolution Architecture**. It guarantees consistent visual rendering across:
- **Operating Systems**: macOS (Retina), Windows 10/11 (with 125%/150% DPI scaling), Linux, iPadOS, Android.
- **Screen Sizes**: From compact mobile phones (375px) to 4K UHD (3840px) and Ultrawide monitors.
- **Vertical Viewports**: Dynamically accommodates browser address bars, Windows taskbars, and floating scrollbars without content clipping.

---

## 2. Multi-Resolution & Breakpoint Matrix

| Tier | Device / Category | Physical Resolution | Effective CSS Viewport | OS / Display Context | Container Behavior |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile** | iPhone, Galaxy, Pixel | `1080 × 2400` to `1290 × 2796` | **`375px – 430px`** | iOS / Android | Full width, single column, stacked cards |
| **Tablet** | iPad, Android Tablets | `2048 × 1536` to `2388 × 1668` | **`768px – 1024px`** | iPadOS / Android | 2-column grid, responsive touch targets |
| **Compact Laptop** | 13" Laptops, 1366x768 | `1366 × 768` / `1440 × 900` | **`1280px – 1366px`** | Windows / macOS | Fluid padding, compact vertical rhythm |
| **Scaled Windows Laptops** | 1080p Laptops (125%-150% Scale) | `1920 × 1080` (Scaled) | **`1280 × 720` to `1536 × 864`** | Windows 10/11 (DPI scaled) | Height clamp triggered (`@media (max-height: 850px)`) |
| **MacBook Retina** | MacBook Pro 14"/16", Air | `2560 × 1600` to `3024 × 1964` | **`1440 × 900` to `1728 × 1117`** | macOS (2x Retina scaling) | High-DPI crisp rendering, full viewport center |
| **Full HD Desktop** | Standard Desktop Monitors | `1920 × 1080` (100% Scale) | **`1920 × 1080`** | Windows, Mac, Linux | Container expands to `min(88vw, 1780px)` |
| **2K / QHD Display** | 27"–32" Studio Monitors | `2560 × 1440` | **`2560 × 1440`** | Windows, macOS | Container expands to `min(85vw, 2360px)` |
| **4K UHD & Ultrawide** | 4K Displays, 21:9 Ultrawide | `3840 × 2160` / `3440 × 1440` | **`2560px – 3840px+`** | Windows, macOS | Container expands to `min(82vw, 3300px)` |

---

## 3. Cross-OS & Display Scaling Engineering

### A. Windows DPI Scaling (125% & 150%) Adaptation
On Windows laptops (e.g. Dell, HP, Lenovo), Windows sets display scaling to **125% or 150%**, reducing vertical viewport height from 1080px to **650px – 750px** (accounting for the Windows Taskbar and browser address bar).

To ensure every section fits in 1 screen on Windows without scrolling inside a section:
```css
/* Automatically compresses vertical padding and media heights on short laptop displays */
@media (max-height: 850px) {
  section[class*="min-h-"] {
    padding-top: clamp(1.25rem, 2.5vh, 2.5rem) !important;
    padding-bottom: clamp(1.25rem, 2.5vh, 2.5rem) !important;
  }
  section img:not([class*="h-"]),
  section svg {
    max-height: 38vh !important;
  }
}

@media (max-height: 720px) {
  section[class*="min-h-"] {
    padding-top: clamp(0.75rem, 1.5vh, 1.5rem) !important;
    padding-bottom: clamp(0.75rem, 1.5vh, 1.5rem) !important;
  }
  section img:not([class*="h-"]) {
    max-height: 30vh !important;
  }
}
```

### B. Dynamic Viewport Height (`100dvh`)
Standard `100vh` causes unwanted vertical jumps when mobile address bars collapse or when Windows taskbars auto-hide. We use progressive dynamic viewport units:
```css
@supports (min-height: 100dvh) {
  .min-h-\[calc\(100vh-80px\)\] {
    min-height: calc(100dvh - 80px) !important;
  }
}
```

### C. Cross-Platform Custom Scrollbar (`scrollbar-gutter: stable`)
Windows browsers (Edge/Chrome) add an intrusive 15px scrollbar by default, which causes page content to shift. We applied a modern thin 8px custom scrollbar that matches macOS floating scrollbars:
```css
html {
  scrollbar-gutter: stable;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #F5F2EB;
}
::-webkit-scrollbar-thumb {
  background: #D5CEC2;
  border-radius: 9999px;
  border: 2px solid #F5F2EB;
}
::-webkit-scrollbar-thumb:hover {
  background: #CF5A30;
}
```

---

## 4. Continuous Fluid Container & Scaling System

Rather than relying on discrete breakpoint jumps (which caused Windows 125%/150% scaled displays at ~1280px–1536px to feel "zoomed in"), the layout uses **continuous mathematical `clamp()` scaling** from `1024px` up to `3840px+`:

```css
/* Continuous Fluid Max-Width Containers (Scales continuously from 1024px to 3840px+) */
.max-w-7xl {
  max-width: clamp(1024px, 88vw, 3300px) !important;
}

.max-w-6xl {
  max-width: clamp(960px, 84vw, 2800px) !important;
}

.max-w-5xl {
  max-width: clamp(860px, 78vw, 2400px) !important;
}

.max-w-4xl {
  max-width: clamp(760px, 72vw, 2000px) !important;
}

/* Continuous Fluid Horizontal Section Padding across all screen widths */
section {
  padding-left: clamp(1.25rem, 4vw, 6rem) !important;
  padding-right: clamp(1.25rem, 4vw, 6rem) !important;
}

/* Continuous Fluid Hero & Body Typography scaling across all viewports */
section:first-of-type p:not(.tracking-widest):not(.text-xs):not(.uppercase),
section:first-of-type div.space-y-5 p,
section:first-of-type div.font-sans.text-\[15px\] {
  font-size: clamp(15px, 1.15vw, 22px) !important;
}

section:first-of-type p:not(.tracking-widest):not(.text-xs):not(.uppercase):first-of-type,
section:first-of-type div.space-y-5 p:first-of-type,
section:first-of-type p.text-\[20px\] {
  font-size: clamp(16.5px, 1.35vw, 26px) !important;
}
```

---

## 5. Page-by-Page Viewport & Section Architecture

Every section across all 9 pages is configured with `min-h-[calc(100vh-80px)]` and centered with `flex flex-col justify-center` or `flex items-center justify-center`:

### 1. Home (`src/app/page.tsx`)
- **Section 01: Hero** — 2-Column: Headline + CTA left, Animated Interactive Flywheel right.
- **Section 02: Why Kyureeus** — 3-Column: Traditional vs Kyureeus vs The Model.
- **Section 03: Why It Matters** — 3-Column: Old Education vs Intelligent Systems vs Outcome Gap.
- **Section 04: Capability Architecture** — 4-Column: Systems, Matrices, Architectures & Operations.
- **Section 05: Bootcamp Portfolio** — 4-Card Portfolio Layer (Foundational, Builder, Operator, Executive).
- **Section 06: How We Teach** — 2-Column: 7-Step Learning Loop + Evidence Over Certification.
- **Section 07: Partnership & Studio** — Dark Final CTA with Enterprise partnership channels.

### 2. Why Kyureeus (`src/app/whykyureeus/page.tsx`)
- **Section 01: Hero** — `#F5F2EB` Cream Hero with Headline + Flywheel SVG diagram.
- **Section 02: Three Models (01, 02, 03)** — `bg-white` 3 equal-height columns with divider lines.
- **Section 03: Architectures & Evidence (04, 05, 06)** — `#F4EFE6` Warm Cream with 6 real outputs icon grid.
- **Section 04: Compounding & OS (07, 08)** — `bg-white` with checkmark benefits and executive quote card.
- **Section 05: Build The Future (09 CTA)** — `#1C1C1C` Dark CTA with 5 stacked feature cards.

### 3. Bootcamps & Pathways (`src/app/bootcamps/page.tsx`)
- **Section 01: Hero** — Headline + CTA left, Enterprise Workstation photo right (constrained with `max-h-[50vh]`).
- **Section 02: Four Column Methodology (01–04)** — 4 equal-height columns with clear divider rules.
- **Section 03: Capability Portfolio (05)** — 4 Compact cards (Foundational, Builder, Operator, Executive).
- **Section 04: The Builder Cycle (06, 07)** — 2-Column: Enterprise Design checks + 6-step Builder cycle.
- **Section 05: Dark CTA (08)** — Headline, subtitle, button, and tagline.

### 4. How We Teach (`src/app/how-we-teach/page.tsx`)
- **Section 01: Hero** — Two-column: Headline + Classroom simulation diagram.
- **Section 02: Job-First Approach (01, 02)** — 2 equal-height columns on clean white.
- **Section 03: 7-Step Learning Loop (03)** — Interactive 7-step loop visualization on `#F4EFE6`.
- **Section 04: Evidence & Disciplines (04, 05)** — 2-Column layout on clean white.
- **Section 05: Feedback & Compounding (06, 07)** — 2-Column layout on `#F4EFE6`.
- **Section 06: Capability Studio (08)** — Headline with 5 rounded coral badges + container card.
- **Section 07: Dark CTA** — Final outcome CTA banner.

### 5. Why It Matters (`src/app/why-it-matters/page.tsx`)
- **Section 01: Hero** — Headline left, Target diagram right.
- **Section 02: The Problem (02)** — 4-Column layout with red crossout comparison.
- **Section 03: The Shift (03)** — 4-Column layout with network topology graphic.
- **Section 04: The Real Job (04)** — 4-Column layout with bullseye target graphic.
- **Section 05: Capability Economy (05)** — 4-Column layout with exponential growth chart.
- **Section 06: Value Chain (06)** — 4-Column layout with intersecting lenses graphic.
- **Section 07: Dark CTA** — Watermarked "K" backdrop banner with CTA.

### 6. Capability Architecture (`src/app/capability-architecture/page.tsx`)
- **Section 01: Hero** — Split 2-column: Warm cream left, `#0E0E10` dark right with 3D oval diagrams.
- **Section 02: Four Systems (02–05)** — 4 vertical columns with divider lines.
- **Section 03: Interactive Matrix (06)** — 2-Column layout with 6 capability matrix cards.
- **Section 04: Enterprise Adaptability (07–09)** — 3 equal-height columns on clean white.
- **Section 05: Dark CTA** — Final architecture summary CTA.

### 7. The Flywheel (`src/app/the-flywheel/page.tsx`)
- **Section 01: Hero** — Headline left, 6-node circular flywheel visualization right.
- **Section 02: Six Flywheel Steps** — 6 compact interactive phase boxes.
- **Section 03: Three Compounding Cards** — 3 rounded cards with icon badges.
- **Section 04: The Bottom Line CTA** — Final dark CTA with feature cards.

### 8. About Us (`src/app/about-us/page.tsx`)
- **Section 01: Hero** — Headline left, Executive boardroom image right.
- **Section 02: Who We Are** — 5-Column grid layout on clean white.
- **Section 03: Our Story** — 3-Column narrative on `#F4EFE6`.
- **Section 04: By The Numbers** — 5 Impact statistics counter grid on white.
- **Section 05: Founding Principles** — 6 Principles grid on `#F5F2EB`.
- **Section 06: Dark Banner CTA** — Final story CTA banner.

### 9. Contact (`src/app/contact/page.tsx`)
- **Section 01: Contact Form & Channels** — Breadcrumb, contact information cards, and enterprise inquiry form.
- **Section 02: Dark CTA Banner** — Final enterprise engagement CTA banner.

---

## 6. Typography & Responsive Font Hierarchy

- **Headlines & Numbers**: `Bebas Neue` (`--font-bebas-neue`), self-hosted via `next/font/google`, uppercase with tracking `0.05em` to `0.1em`.
- **Body & Captions**: `Inter` (`--font-sf-pro-display`), self-hosted via `next/font/google` across weights 300–900 with `display: swap` for cross-OS identical font metrics.
- **Accent & Badges**: Deep Terracotta `#CF5A30` with `font-black tracking-widest uppercase`.
- **Hero Typography Override**: First paragraph rendered at `18px – 20px` across all screen resolutions for optimal readability.

---

## 7. Development & Network Hosting Reference

### Starting the Server:
The development script is configured with `-H 0.0.0.0` in `package.json`:
```bash
npm run dev
```

### Access URLs:
- **Local Mac**: `http://localhost:3000`
- **Other Devices on Wi-Fi (Windows PC, iPhone, iPad)**: `http://192.168.2.23:3000`

### Production Build Validation:
```bash
npm run build
```
*Compiles all 10 application routes with 0 errors in ~1.1 seconds via Next.js Turbopack.*
