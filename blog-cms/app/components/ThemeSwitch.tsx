"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./Icons";

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "var(--foreground)", 
      }}
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitch;
