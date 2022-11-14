import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { Languagens } from '../../languagens/LanguagemEnum';
import * as Style from './Navbar.style';
import LanguageSelector from './languageSelector/LanguageSelector';

export default function Navbar() {
  const { setLanguage } = useContext(LanguageContext);

  const handleLanguage = async (selectedLanguage: Languagens) => {
    setLanguage(selectedLanguage);
  };

  return (
    <>
      <Style.Navbar>
        <Style.LogoNavbar>
          <Link to="/">
            <span>Kenny Barbeiro</span>
          </Link>
        </Style.LogoNavbar>
        <ul>
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </Style.Navbar>
    </>
  );
}
