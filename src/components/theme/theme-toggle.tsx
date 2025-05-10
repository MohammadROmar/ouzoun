'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [didMount, setDidMount] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setDidMount(true), []);

  if (!didMount) return null;

  function handleThemeChange() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button onClick={handleThemeChange} className="cursor-pointer">
      {resolvedTheme === 'dark' ? 'light' : 'dark'}
    </button>
  );
}
