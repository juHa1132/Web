import React from 'react';
import { useContext } from 'react';
import { PageContext } from '../store/context';

const SideMenu = () => {
    const pageCtx = useContext(PageContext);

  return (
    <div className='side-menu'>
      <ul className='side-menu__list'>
        <li className='side-menu__list-item'>Psycholog Sportu</li>
        <li className='side-menu__list-item'>O mnie</li>
        <li className='side-menu__list-item'>Oferta</li>
        <li className='side-menu__list-item'>Nie tylko dla sportowców</li>
        <li className='side-menu__list-item'>Linki</li>
        <li className='side-menu__list-item'>Kontakt</li>
      </ul>
      <div className='side-menu__row-icon'>
        <img src='/phone-call.png' alt="phone-number" />
        <p>+48 505 505 505</p>
      </div>
      <div className='side-menu__row-icon'>
        <img src='/email.png' alt="email-adress" />
        <p>adamiec.aleksandra@interia.pl</p>
      </div>

      
      <button className='side-menu__button' onClick={pageCtx.closeSideMenu}>X</button>
    </div>
  )
}

export default SideMenu;
