# Car Scroll Animation

A Next.js hero section with scroll-triggered animations using GSAP and ScrollTrigger.

## Overview

This project features an interactive hero section where a car animates across the screen while statistics cards fade in sequentially as the user scrolls. The animation is synchronized with scroll progress using GSAP's timeline and ScrollTrigger plugin.

## What's Inside

### Main Component (`page.tsx`)

- **Car Animation**: A car image slides across the screen from left to right over the full scroll timeline
- **Card Animations**: Four statistics cards fade in and animate upward in a staggered sequence:
  - Top-left (Yellow): 10% into timeline
  - Bottom-left (Blue): 30% into timeline
  - Top-right (Gray): 55% into timeline
  - Bottom-right (Orange): 75% into timeline

### Key Technologies

- **Next.js**: React framework for building the application
- **GSAP**: Animation library with ScrollTrigger plugin for scroll-based animations
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Icons**: Icon library for the percentage symbol in cards

## How It Works

The animation is driven by a GSAP timeline that spans `500vh` (500% of viewport height). The timeline is pinned to the scroll trigger, meaning the section stays fixed while internal animations play based on scroll position.

**Note on Card Positioning**: The card positioning logic (using Tailwind's calculated offsets) was refined with AI assistance to ensure proper alignment across different screen sizes (mobile, tablet, desktop).

## Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the animation in action. Scroll to trigger the car and card animations.

## File Structure

```
├── app/
│   ├── page.tsx          # Main hero section component
│   ├── layout.tsx        # App layout
│   └── globals.css       # Global styles
├── public/
│   └── car.png          # Car image asset
└── package.json         # Dependencies
```

## Dependencies

- `gsap`: Animation engine
- `@gsap/react`: React hook for GSAP
- `next`: Next.js framework
- `react-icons`: Icon components
- `tailwindcss`: CSS utility framework
