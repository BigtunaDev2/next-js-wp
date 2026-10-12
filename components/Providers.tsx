"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      themes={["light", "dark", "contrast"]}
      defaultTheme="system"
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
