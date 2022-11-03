import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { Languagens } from '../../languagens/LanguagemEnum';
import * as Style from './Navbar.style';

export default function Navbar() {
  const { setLanguage } = useContext(LanguageContext);

  const handleLanguage = async (selectedLanguage: Languagens) => {
    setLanguage(selectedLanguage);
  };

  return (
    <>
      <Style.Navbar>
        <Style.LogoNavbar>
          <a href="/">
            <span>Kenny Barbeiro</span>
          </a>
        </Style.LogoNavbar>
        <ul>
          <li>
            <Style.NavbarLink
              href="https://api.whatsapp.com/send?phone=555511933352555"
              target="_blank"
            >
              +55 11 93335-2555
            </Style.NavbarLink>
            <Style.NavbarLink onClick={() => handleLanguage(Languagens.PT)}>
              BR
            </Style.NavbarLink>
            <Style.NavbarLink onClick={() => handleLanguage(Languagens.EN)}>
              EN
            </Style.NavbarLink>
          </li>
        </ul>
      </Style.Navbar>
    </>
  );
}
