import React, { useState } from 'react';
import './styles.css';
import logo_main from '@images/logoOld.png';
import { HamburgerSpin } from 'react-animated-burgers';

import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };

  return (
    <div className="wrapper">
      <nav className="navbar">
        <img src={logo_main} alt="logo" width="160px"
          style={{ marginBottom: '.62rem' }}
        />
        <HamburgerSpin
          isActive={active}
          toggleButton={toggle}
          barColor='white'
          buttonWidth={30}
          buttonStyle={{ padding: 0, position: 'relative', zIndex: '20000' }}
        />
        <ul className={active ? 'nav-menu active' : 'nav-menu'}>
          <Link
            to="section1"
            spy
            smooth
            offset={50}
            duration={500}
          >
            Услуги
          </Link>
          <Link
            to="section2"
            spy
            smooth
            offset={50}
            duration={500}
          >
            Мастера
          </Link>
          <Link
            to="section3"
            spy
            smooth
            offset={50}
            duration={500}
          >
            Контакты
          </Link>
          <Link
            class="nav-links-i"
          >
            <button
              className="btn-normal"
              onClick={() => {
                window.location.href = 'https://w583606.yclients.com';
              }}
            >
              Записаться
            </button>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
