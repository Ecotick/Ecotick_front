import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';
import * as ImIcons from 'react-icons/im';
import * as FaIcons from 'react-icons/fa';

let showSidebar;

export const NavbarData = [
  {
    title: 'MonEspace',
    path: '/',
    icon: <FaIcons.FaUser />,
    func: 1,
    cName: 'nav-text'
  },
  {
    title: 'Message',
    path: '/messagerie',
    icon: <MdIcons.MdMessage />,
    cName: 'nav-text'
  },
  {
    title: 'Mon Fil d actualité',
    path: '/monfil',
    icon: <ImIcons.ImNewspaper />,
    cName: 'nav-text'
  },
  {
    title: 'Carte',
    path: '/carte',
    icon: <FaIcons.FaMapMarkerAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Parametres',
    path: '/parametres',
    icon: <FiIcons.FiSettings />,
    cName: 'nav-text'
  },

];
