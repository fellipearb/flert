"use client";

import HeroSection from "./components/HeroSection";
import WaitingList from "./components/WaitingList";
import Features from "./components/Features";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <WaitingList />
      <Features />
    </div>
  );
}
