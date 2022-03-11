import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="btn btn-circle btn-outline btn-sm"
      onClick={() => setTheme(theme === 'night' ? 'corporate' : 'night')}
    >
      {theme === 'night' ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
};

export default DarkModeButton;
