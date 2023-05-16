import { Key, useContext } from "react";
import * as Style from "./ListComponent.style";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { LanguageContext } from "../../../context/LanguageContext";
import { Languagens } from "../../../languagens/LanguagemEnum";
import { Link } from "react-router-dom";

type RedirectlistMapProps = {
  titlePT: string;
  titleEN: string;
  listItems: {
    name?: string;
    namePT: string;
    nameEN: string;
    icon: ReactJSXElement;
    url: string;
    isActive?: boolean;
  }[];
};

interface IListMap {
  name?: string;
  namePT: string;
  nameEN: string;
  icon: ReactJSXElement;
  url: string;
  isActive?: boolean;
}

const ListComponent = ({
  redirectListMap,
}: {
  redirectListMap: RedirectlistMapProps;
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <Style.ListComponent>
      <span>
        {language == Languagens.PT
          ? redirectListMap.titlePT
          : redirectListMap.titleEN}
      </span>
      {redirectListMap.listItems.map((element: IListMap, item: Key) => {
        if (element.isActive == false) {
          return (
            <Style.Redirect key={item}>
              {element.icon}
              {language == Languagens.PT ? element.namePT : element.nameEN}
            </Style.Redirect>
          );
        } else {
          return (
            <a key={item} href={element.url} target="_blank">
              <Style.Redirect>
                {element.icon}
                {language == Languagens.PT ? element.namePT : element.nameEN}
              </Style.Redirect>
            </a>
          );
        }
      })}
    </Style.ListComponent>
  );
};

export const ListComponentInternal = ({
  redirectListMap,
}: {
  redirectListMap: RedirectlistMapProps;
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <Style.ListComponent>
      <span>
        {language == Languagens.PT
          ? redirectListMap.titlePT
          : redirectListMap.titleEN}
      </span>
      {redirectListMap.listItems.map((element: IListMap, item: Key) => (
        <Link key={item} to={element.url}>
          <Style.Redirect>
            {element.icon}
            {language == Languagens.PT ? element.namePT : element.nameEN}
          </Style.Redirect>
        </Link>
      ))}
    </Style.ListComponent>
  );
};

export default ListComponent;
