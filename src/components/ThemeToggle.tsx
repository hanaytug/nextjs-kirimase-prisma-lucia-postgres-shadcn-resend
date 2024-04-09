'use client';

import * as React from 'react';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const faviconUpdate = async () => {
      const favicon = document.querySelector("link[rel='icon']");

      favicon?.setAttribute('href', `/favicon-${theme}.ico`);
    };

    faviconUpdate();
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <Button variant='ghost' size='icon' onClick={toggleTheme}>
      <Sun className='h-[1.5rem] w-[1.3rem] dark:hidden' />
      <Moon className='hidden h-5 w-5 dark:block' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
