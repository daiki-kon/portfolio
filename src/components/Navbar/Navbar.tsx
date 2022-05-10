import React from 'react';
import Image from 'next/image';
import DarkModeButton from '../DarkModeButton';
import AnchorLink from '../AnchorLink';
import Link from 'next/link';

const NavbarItems = () => (
  <>
    <li>
      <AnchorLink to={'/#aboutMe'} anchor="aboutMe">
        <h1>AboutMe</h1>
      </AnchorLink>
    </li>
    <li>
      <AnchorLink to={'/#skills'} anchor="skills">
        <h1>Skills</h1>
      </AnchorLink>
    </li>
    <li>
      <AnchorLink to={'/#qualifications'} anchor="qualifications">
        <h1>Qualifications</h1>
      </AnchorLink>
    </li>
    {/* <li>
      <Link href={'works'}>
        <a>Works</a>
      </Link>
    </li> */}
  </>
);

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50">
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
              <NavbarItems />
              <DarkModeButton />
            </ul>
          </div>
        </div>

        <div className="navbar-start md:navbar-center">
          <Link href={'/'}>
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
          </Link>
        </div>

        <div className="invisible md:visible navbar-end">
          <ul className="menu menu-horizontal p-0">
            <NavbarItems />
          </ul>
          {/* ダークモード切り替えボタン */}
          <DarkModeButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
