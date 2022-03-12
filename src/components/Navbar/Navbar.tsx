import Image from 'next/image';
import useDarkMode from '../../hooks/useDarkMode';
import DarkModeButton from '../DarkModeButton';

const TempItems = () => (
  <ul className="menu menu-horizontal p-0">
    <li>
      <a>Item 1</a>
    </li>

    <li>
      <a>Item 3</a>
    </li>
  </ul>
);

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="md:hidden navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <DarkModeButton />
            </ul>
          </div>
        </div>

        <div className="navbar-start md:navbar-center">
          <a className="btn btn-ghost normal-case text-xl">
            <div className="mr-2">Hiroki Kondo</div>
            <Image
              className="rounded-full"
              src="/iconImage.jpeg"
              alt="Picture of the author"
              width={40}
              height={40}
            />
          </a>
        </div>
        <div className="invisible md:visible navbar-end">
          <TempItems />
          {/* ダークモード切り替えボタン */}
          <DarkModeButton />
        </div>
      </div>
    </>
  );
};

export default Header;
