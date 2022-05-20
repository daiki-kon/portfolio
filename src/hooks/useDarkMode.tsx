import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type useDarkModeResponse = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const useDarkMode = (): useDarkModeResponse => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setIsDarkMode(theme === 'night' ? true : false);
    theme === 'night' && document.documentElement.classList.add('dark');
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === 'night' ? 'corporate' : 'night');
    document.documentElement.classList.contains('dark') === true
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark');
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
