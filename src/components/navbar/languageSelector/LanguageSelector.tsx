import brFlag from '../../../assets/flags/br.jpg';
import usFlag from '../../../assets/flags/eua.jpg';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import * as Style from './LanguageSelector.style';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import { Languagens } from '../../../languagens/LanguagemEnum';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const languaeLabel = {
    ptFullName: 'PT-BR',
    enFullName: 'EN-US',
    pt: 'PT',
    en: 'EN',
  };

  const handleLanguage = async (selectedLanguage: Languagens) => {
    setLanguage(selectedLanguage);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Style.Container onClick={toggleDropdown}>
        <img src={language == Languagens.PT ? brFlag : usFlag} />
        <span>
          {language == Languagens.PT ? languaeLabel.pt : languaeLabel.en}
        </span>
        <MdOutlineKeyboardArrowDown />
      </Style.Container>

      <Style.Dropdown
        css={css`
          display: ${isOpen ? 'block' : 'none'};
        `}
      >
        <div
          onClick={() => {
            toggleDropdown();
            handleLanguage(
              language == Languagens.PT ? Languagens.EN : Languagens.PT
            );
          }}
        >
          <img src={language == Languagens.PT ? usFlag : brFlag} />
          <span>
            {language == Languagens.PT
              ? languaeLabel.enFullName
              : languaeLabel.ptFullName}
          </span>
        </div>
      </Style.Dropdown>
    </>
  );
}
