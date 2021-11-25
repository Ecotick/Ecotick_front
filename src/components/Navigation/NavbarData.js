import React from 'react';
// import * as FiIcons from 'react-icons/fi';
// import * as MdIcons from 'react-icons/md';
// import * as ImIcons from 'react-icons/im';
// import * as FaIcons from 'react-icons/fa';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

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
    icon: <MailOutlineIcon fontSize="large" />,
    cName: 'nav-text',
    // func: 0
  },
  {
    title: 'Mon Fil d actualité',
    path: '/monfil',
    icon: <ArticleOutlinedIcon />,
    cName: 'nav-text',
    // func: 0
  },
  {
    title: 'Carte',
    path: '/carte',
    icon: <FmdGoodOutlinedIcon fontSize="large" />,
    cName: 'nav-text',
    // func: 0
  },
  {
    title: 'Parametres',
    path: '/parametres',
    icon: <SettingsOutlinedIcon fontSize="large" />,
    cName: 'nav-text',
    // func: 0
  },

];
