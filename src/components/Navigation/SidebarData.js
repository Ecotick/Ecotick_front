import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';
import * as ImIcons from 'react-icons/im';

export const SidebarData = [
  {
    title: 'Connexion',
    path: '/login',
    icon: <FiIcons.FiPower />,
    cName: 'nav-text'
  },
  {
    title: 'Recherche',
    path: '/search',
    icon: <FiIcons.FiSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Mes Favoris',
    path: '/favoris',
    icon: <MdIcons.MdFavorite />,
    cName: 'nav-text'
  },
  {
    title: 'QR Code',
    path: '/qrcode',
    icon: <ImIcons.ImQrcode />,
    cName: 'nav-text'
  },
  {
    title: 'Coupons',
    path: '/mescoupons',
    icon: <FiIcons.FiGift />,
    cName: 'nav-text'
  },
  {
    title: 'Tickets',
    path: '/mestickets',
    icon: <ImIcons.ImTicket />,
    cName: 'nav-text'
  },

];