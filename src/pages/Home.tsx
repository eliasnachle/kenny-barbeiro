import * as Style from './Home.style'
import Navbar from '../components/navbar/Navbar'
import logoBarber from '../assets/kenny-barbeiro.png'
import RedirectList from '../components/redirectList/RedirectList'

export default function Home() {
  return (
    <>
      <Style.Container>
        <Style.ContainerInfo>
          <Navbar />
          <Style.CardBarber>
            <img src={logoBarber} alt='Kenny Barbeiro' />
            <RedirectList />
          </Style.CardBarber>
          <Style.Footer>
            <span>Kenny Barbeiro © 2023</span>
          </Style.Footer>
        </Style.ContainerInfo>
        <Style.BarberBackground></Style.BarberBackground>
      </Style.Container>
    </>
  )
}
