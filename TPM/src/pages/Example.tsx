"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export default function Example() {
  return (
    <div className="h-[1280px] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full h-full">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
