import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Strona główna',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'O mnie',
    path: '/omnie',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Oferta',
    path: '/oferta',
    icon: <FaIcons.FaList />,
    cName: 'nav-text'
  },
  {
    title: 'Nie tylko dla sportowców',
    path: '/nietylkosport',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Kontakt',
    path: '/kontakt',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  
];