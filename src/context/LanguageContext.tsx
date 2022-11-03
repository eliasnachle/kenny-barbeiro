import { createContext, ReactNode, useEffect, useState } from 'react'
import { Languagens } from '../languagens/LanguagemEnum'

type LanguageContextProps = {
  children: ReactNode
}

type LanguageContextType = {
  language: Languagens
  setLanguage: (newState: Languagens) => void
}

const initialValue = { language: Languagens.PT, setLanguage: () => {} }

export const LanguageContext = createContext<LanguageContextType>(initialValue)

export const LanguageProvider = ({ children }: LanguageContextProps) => {
  const [language, setLanguage] = useState(initialValue.language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
