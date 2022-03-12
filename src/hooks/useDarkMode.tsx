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
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === 'night' ? 'corporate' : 'night');
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
