# Flert Landing Page - Project Guidelines

This is a Next.js landing page for Flert, an app that connects people in the same location who are interested in each other.

## Project Structure

- **app/components/** - React components for the landing page
  - `HeroSection.tsx` - Main hero section with email subscription
  - `WaitingList.tsx` - Waiting list statistics display
  - `Features.tsx` - Feature cards explaining how Flert works
- **app/page.tsx** - Main landing page
- **app/layout.tsx** - Root layout
- **public/** - Static assets

## Tech Stack

- Next.js 16 with App Router
- TypeScript
- Tailwind CSS
- React Hooks

## Running the Project

### Development
```bash
npm run dev
```
The app will run on http://localhost:3000 (or 3001 if port is in use)

### Production Build
```bash
npm run build
npm run start
```

## Component Details

### HeroSection
- Email input for waiting list
- Submit form with validation
- Success feedback message
- Pink theme with yellow accent

### WaitingList
- Displays number of people (currently 247)
- Simple, clean statistics section

### Features
- 4 feature cards explaining app functionality
- Icons and descriptions
- Responsive grid layout
- Purple background theme

## Future Enhancements

- Backend integration for email persistence
- Animations and transitions
- Social media links
- SEO optimizations
- Dark mode support
- Footer section

## Code Style

- TypeScript for type safety
- React functional components with hooks
- Tailwind CSS for styling
- Component composition and reusability
