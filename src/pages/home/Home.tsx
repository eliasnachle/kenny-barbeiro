import * as Style from './Home.style';
import Navbar from '../../components/navbar/Navbar';
import logoBarber from '../../assets/kenny-barbeiro.png';
import RedirectList from '../../components/redirectList/RedirectList';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Home() {
  const backgroundAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: 'easeIn', duration: 1.5 },
    },
    exit: { opacity: 1 },
  };

  const cardBarberAnimation = {
    hidden: { opacity: 0, y: 15 },
    show: {
      y: 0,
      opacity: 1,
      transition: { ease: 'easeInOut', duration: 1.5, delay: 0.45 },
    },
    exit: { opacity: 1 },
  };

  return (
    <>
      <Style.Container>
        <Style.ContainerInfo>
          <Navbar />
          <motion.div
            variants={cardBarberAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <Style.CardBarber>
              <motion.div>
                <Style.CardBarberImg>
                  <Link to="/about-kenny">
                    <LazyLoadImage
                      src={logoBarber}
                      alt="Kenny Barbeiro"
                      loading="lazy"
                    />
                  </Link>
                </Style.CardBarberImg>
              </motion.div>
              <RedirectList />
            </Style.CardBarber>
          </motion.div>
          <Style.Footer>
            <span>Kenny Barbeiro © 2023</span>
          </Style.Footer>
        </Style.ContainerInfo>
        <motion.div
          variants={backgroundAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Style.BarberBackground></Style.BarberBackground>
        </motion.div>
      </Style.Container>
    </>
  );
}
