import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

type DarkModeButtonProps = {
  isDarkMode: boolean;
  onClickButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const DarkModeButton = (props: DarkModeButtonProps) => {
  const { isDarkMode, onClickButton } = props;
  return (
    <button
      className="btn btn-circle btn-outline btn-sm"
      onClick={onClickButton}
    >
      {isDarkMode === true ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
};

export default DarkModeButton;
