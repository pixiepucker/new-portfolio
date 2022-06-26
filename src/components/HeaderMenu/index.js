import React from 'react';
import { Close } from '@material-ui/icons';

function MenuItems({ showMenu, active }) {
  return (
    <ul
      className={
        active
          ? 'flex-col flex items-center fixed inset-0 gap-4 p-8 justify-center uppercase bg-sapphire/80 backdrop-blur-sm md:hidden'
          : 'hidden'
      }
    >
      <Close onClick={showMenu} className="cursor-pointer" />
      <li>
        <a href="https://pixiepucker.github.io/new-portoflio/#about">About</a>
      </li>
      <li>
        <a href="https://pixiepucker.github.io/new-portoflio/#project">
          Projects
        </a>
      </li>
      <li>
        <a href="https://pixiepucker.github.io/new-portoflio/#resume">Resume</a>
      </li>
      <li>
        <a href="https://pixiepucker.github.io/new-portoflio/#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default MenuItems;
