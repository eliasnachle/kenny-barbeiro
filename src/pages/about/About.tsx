import Navbar from '../../components/navbar/Navbar';
import * as Style from './About.style';
import backgroundImg from '../../assets/kenny.jpg';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import aboutMe from './AboutMe';

export default function About() {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  const { scrollYProgress } = useScroll();
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, window.innerWidth > 600 ? 1.15 : 2.5]
  );
  const divAnimation = {
    hidden: { opacity: 0, y: 15 },
    show: {
      y: 0,
      opacity: 1,
      transition: { ease: 'easeInOut', duration: 1.5, delay: 0.25 },
    },
    exit: { opacity: 1 },
  };
  const titleAnimation = {
    hidden: { y: 200 },
    show: {
      y: 0,
      opacity: 1,
      transition: { ease: 'easeInOut', duration: 1.5, delay: 0.25 },
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <motion.div
        variants={divAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div variants={titleAnimation} initial="hidden" animate="show">
          <Style.Title>Kenny Barbeiro</Style.Title>
        </motion.div>
        <div
          className={`${pulsing ? 'pulse' : ''} loadable`}
          style={{ background: '#363636' }}
        >
          <motion.img
            initial={{ scale: 1.0, opacity: 0 }}
            animate={{ opacity: imageLoading ? 0 : 1 }}
            transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
            onLoad={imageLoaded}
            width="100%"
            src={backgroundImg}
            alt="Kenny Barbeiro"
            style={{ scale: scale }}
          />
        </div>
        <Style.Container>
          <h1>Sobre Mim</h1>
          <p>{aboutMe}</p>
        </Style.Container>
      </motion.div>
    </>
  );
}
