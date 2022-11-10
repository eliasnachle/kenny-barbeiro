import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { Languagens } from '../../languagens/LanguagemEnum';
import * as Style from './Navbar.style';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Navbar() {
  const { setLanguage } = useContext(LanguageContext);
  const [isMobile, setMobile] = useState(false);
  const toggleMobileMenu = () => {
    setMobile(!isMobile);
  };

  const handleLanguage = async (selectedLanguage: Languagens) => {
    setLanguage(selectedLanguage);
  };

  return (
    <>
      <Style.Navbar>
        <Style.BurgerMenu>
          <IoMdMenu onClick={toggleMobileMenu} />
        </Style.BurgerMenu>
        <Style.LogoNavbar>
          <Link to="/">
            <span>Kenny Barbeiro</span>
          </Link>
        </Style.LogoNavbar>
        <ul>
          <li>
            <Style.NavbarLink onClick={() => handleLanguage(Languagens.PT)}>
              BR
            </Style.NavbarLink>
            <Style.NavbarLink onClick={() => handleLanguage(Languagens.EN)}>
              EN
            </Style.NavbarLink>
          </li>
        </ul>
      </Style.Navbar>
      <Style.MobileMenu
        css={css`
          left: ${isMobile ? '0%' : '-150%'};
        `}
      >
        <div>
          <IoMdClose onClick={toggleMobileMenu} />
        </div>
        <ul>
          <li>
            <Style.NavbarLink
              onClick={() => {
                handleLanguage(Languagens.PT);
                toggleMobileMenu();
              }}
            >
              BR
            </Style.NavbarLink>
            <Style.NavbarLink
              onClick={() => {
                handleLanguage(Languagens.EN);
                toggleMobileMenu();
              }}
            >
              EN
            </Style.NavbarLink>
          </li>
        </ul>
      </Style.MobileMenu>
    </>
  );
}
