import { FC, Key, ReactNode, useContext } from 'react'
import * as Style from './ListComponent.style'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { LanguageContext } from '../../../context/LanguageContext'
import { Languagens } from '../../../languagens/LanguagemEnum'

type RedirectlistMapProps = {
  titlePT: string
  titleEN: string
  listItems: {
    namePT: string
    nameEN: string
    icon: ReactJSXElement
    url: string
  }[]
}

interface IListMap {
  namePT: string
  nameEN: string
  icon: ReactJSXElement
  url: string
}

const ListComponent = ({ redirectListMap }: { redirectListMap: RedirectlistMapProps }) => {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <span>{language == Languagens.PT ? redirectListMap.titlePT : redirectListMap.titleEN}</span>
      {redirectListMap.listItems.map((element: IListMap, item: Key) => (
        <Style.Redirect key={item} href={element.url} target='_blank'>
          {element.icon}
          {language == Languagens.PT ? element.namePT : element.nameEN}
        </Style.Redirect>
      ))}
    </div>
  )
}

export default ListComponent
