import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import useDarkMode from '../../hooks/useDarkMode';

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      className="btn btn-circle btn-outline btn-sm"
      onClick={() => toggleDarkMode()}
    >
      {isDarkMode === true ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
};

export default DarkModeButton;
