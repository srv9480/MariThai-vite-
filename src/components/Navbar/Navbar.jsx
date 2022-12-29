import React, { useState } from 'react';
import './styles.css';
import logo_main from '@images/logoOld.png';
import { HamburgerSpin } from 'react-animated-burgers';

import phone from "@icons/icon-phone.svg";
import time from "@icons/icon-time.svg";

import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <nav className="navbar">
          <img src={logo_main} alt="logo" width="160px"
            style={{ marginBottom: '.62rem', paddingLeft: '0.35rem' }}
          />
          <div className="button-hidden__mob">
          <HamburgerSpin
            isActive={active}
            toggleButton={toggle}
            barColor='white'
            buttonWidth={30}
            buttonStyle={{ padding: 0, position: 'relative', zIndex: '20000', width: '30px' }}
          />
          </div>
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
            <div className="nav-time">
              <div className="nav-time__icon">
                <img src={time} width="21px" />
              </div>
              <div className="nav-time__ph">Пн-Вс 11-00 - 23-00</div>
            </div>
            <div className="nav-phone">
              <div className="nav-phone__icon">
                <img src={phone} width="18px" />
              </div>
              <div className="nav-phone__ph"> +7(916)104-37-36</div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
