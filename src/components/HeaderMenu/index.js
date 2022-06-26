import React, { useState } from 'react';
import { Close } from '@material-ui/icons';

function MenuItems({ showMenu, active }) {
  const [activeNav, setActiveNav] = useState('#');

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
        <a
          href="#about"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#project"
          onClick={() => setActiveNav('#project')}
          className={activeNav === '#project' ? 'active' : ''}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#resume"
          onClick={() => setActiveNav('#resume')}
          className={activeNav === '#resume' ? 'active' : ''}
        >
          Resume
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default MenuItems;
