import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';
import * as ImIcons from 'react-icons/im';
import * as FaIcons from 'react-icons/fa';

export const NavbarData = [
  // {
  //   title: 'MonEspace',
  //   path: '/',
  //   icon: <FaIcons.FaUser />,
  //   cName: 'nav-text',
  //   func: 1
  // },
  {
    title: 'Message',
    path: '/messagerie',
    icon: <MdIcons.MdMessage />,
    cName: 'nav-text',
    // func: 0
  },
  {
    title: 'Mon Fil d actualité',
    path: '/monfil',
    icon: <ImIcons.ImNewspaper />,
    cName: 'nav-text',
    // func: 0
  },
  {
    title: 'Carte',
    path: '/carte',
    icon: <FaIcons.FaMapMarkerAlt />,
    cName: 'nav-text',
    // func: 0
  },
  {
    title: 'Parametres',
    path: '/parametres',
    icon: <FiIcons.FiSettings />,
    cName: 'nav-text',
    // func: 0
  },

];
