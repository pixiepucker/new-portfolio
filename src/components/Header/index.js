import { MenuOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import MenuItems from '../HeaderMenu';

function Header() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="absolute w-full text-white flex justify-between p-3 items-center bg-indigo/20">
      <div className="sm:text-3xl md:text-4xl font-extrabold text-center">
        <h1 className="my-auto">
          <a href="/">
            PP<span className="text-sapphire">D</span>
          </a>
        </h1>
      </div>

      <nav>
        <div className="md:hidden top-6 scale-100 cursor-pointer">
          <MenuOutlined onClick={showMenu} />
        </div>

        <ul className="hidden md:flex p-6 text-xl gap-8 uppercase">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#resume">Resume</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
}

export default Header;
