import { AiOutlineCalendar } from 'react-icons/ai'
import { MdOutlineCastForEducation } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'

export const portfolioMap = {
  titlePT: 'Onde me encontrar?',
  titleEN: 'Where to find me?',
  listItems: [
    {
      namePT: 'Agendamento',
      nameEN: 'Schedule',
      icon: <AiOutlineCalendar />,
      url: 'https://avec.app/vizuhairclub/?fbclid=PAAaa1Rlt8F54eDrhwSxIvjua27ELyJQ0MY7-6aJlzarsgQjbFPbo5V9IBtjw',
    },
    {
      namePT: 'Curso Online',
      nameEN: 'Online Course',
      icon: <MdOutlineCastForEducation />,
      url: 'https://hotmart.com/pt-br/marketplace/produtos/afro-estima-com-kennybarbeiro-curso/N65309325F',
    },
    {
      namePT: 'Curso Presencial',
      nameEN: 'Presential Course',
      icon: <FaGraduationCap />,
      url: 'https://hotmart.com/pt-br/marketplace/produtos/afro-estima-com-kennybarbeiro-curso/N65309325F',
    },
  ],
}
