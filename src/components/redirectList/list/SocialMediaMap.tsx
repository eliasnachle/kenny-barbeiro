import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'

export const socialMediaMap = {
  titlePT: 'Redes Sociais',
  titleEN: 'Social Media',
  listItems: [
    {
      namePT: 'Profissional',
      nameEN: 'Professional',
      icon: <AiOutlineInstagram />,
      url: 'https://www.instagram.com/kennybarbeiro/?igshid=YmMyMTA2M2Y%3D',
    },
    {
      namePT: 'Academico',
      nameEN: 'Academy',
      icon: <AiOutlineInstagram />,
      url: 'https://www.instagram.com/kennybarbeiropro/?igshid=YmMyMTA2M2Y%3D',
    },
    {
      namePT: 'Tik Tok',
      nameEN: 'Tik Tok',
      icon: <FaTiktok />,
      url: 'https://www.tiktok.com/@kennybarbeiro?_t=8WrBnczijzS&_r=1',
    },
    {
      namePT: 'Youtube',
      nameEN: 'Youtube',
      icon: <AiFillYoutube />,
      url: 'https://www.youtube.com/channel/UCK2PGWnMU4aaPOvT5E9GUvw',
    },
  ],
}
