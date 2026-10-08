"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const themes = [
  {
    name: "light",
    label: "Light theme",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
  },
  {
    name: "dark",
    label: "Dark theme",
    icon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
  },
  {
    name: "contrast",
    label: "High contrast theme",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" />
      </>
    ),
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The saved theme is only known in the browser, so wait until mounted
  // before marking a button as active. This avoids a hydration mismatch.
  useEffect(() => setMounted(true), []);

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className="line flex items-center rounded-full p-0.5"
    >
      {themes.map(({ name, label, icon }) => (
        <button
          key={name}
          type="button"
          aria-label={label}
          aria-pressed={mounted && theme === name}
          onClick={() => setTheme(name)}
          className="grid h-8 w-8 place-items-center rounded-full text-ink aria-pressed:bg-accent aria-pressed:text-on-accent"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {icon}
          </svg>
        </button>
      ))}
    </div>
  );
}