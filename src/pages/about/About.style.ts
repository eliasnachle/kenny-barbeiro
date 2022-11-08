import styled from '@emotion/styled';
import backgroundImg from '../../assets/kenny.jpg';

export const KennyBackground = styled('div')`
  background-image: url(${backgroundImg});
  background-position: center;
  background-size: cover;
  height: 50vh;
  width: 100%;
`;

export const Title = styled('h1')`
  text-align: center;
  font-size: 10em;
  font-weight: 400;
  letter-spacing: 1.5px;
  color: #fff;
  @media screen and (max-width: 1920px) {
    font-size: 8em;
  }
  @media screen and (max-width: 1200px) {
    font-size: 5em;
  }
  @media screen and (max-width: 720px) {
    font-size: 3.5em;
  }
`;

export const ContainerImg = styled('div')`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 50vh;
  overflow: hidden;
  width: 100%;
  z-index: 99;
  img {
    height: 50vh;
    object-fit: cover;
  }
`;

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 3em;
  p {
    max-width: 1520px;
    font-size: 18px;
    color: #fff;
    letter-spacing: 0.5px;
    line-height: 1.75em;
  }
`;
