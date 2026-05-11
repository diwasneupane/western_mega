"use client";
import { User, Image as ImageIcon, Building2 } from "lucide-react";

export default function ImagePlaceholder({ type = "landscape", label, className = "" }) {
  const aspectMap = {
    profile:   "aspect-square",
    landscape: "aspect-[16/9]",
    banner:    "aspect-[21/9]",
    square:    "aspect-square",
    card:      "aspect-[4/3]",
    logo:      "aspect-[3/2]",
  };
  const aspect = aspectMap[type] ?? "aspect-[16/9]";

  const Icon = type === "profile" ? User : type === "logo" ? Building2 : ImageIcon;

  return (
    <div
      className={`${aspect} ${className} relative flex flex-col items-center justify-center overflow-hidden`}
      style={{ background: "linear-gradient(135deg, #e8edf7 0%, #f3f5fb 100%)" }}
    >
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#0C1F3F" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <Icon className="w-10 h-10 text-navy/20 relative z-10" style={{ color: "#0C1F3F", opacity: 0.18 }} />
      {label && (
        <p className="relative z-10 mt-2 text-xs font-medium" style={{ color: "#0C1F3F", opacity: 0.35 }}>
          {label}
        </p>
      )}
    </div>
  );
}
