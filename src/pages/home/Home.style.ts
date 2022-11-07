import styled from '@emotion/styled';
import backgroundImg from '../../assets/background.png';

export const Container = styled('div')`
  background: #111;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 1560px) {
    grid-template-columns: 60% 40%;
  }
  @media screen and (max-width: 1280px) {
    display: flex;
    justify-content: center;
  }
`;

export const BarberBackground = styled('div')`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
  h2 {
    width: 55%;
    text-align: right;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 700;
    color: white;
  }
  @media screen and (max-width: 1560px) {
    h2 {
      font-size: 2em;
    }
  }
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const ContainerInfo = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export const CardBarber = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  align-items: center;
  padding: 0 3em;
  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
    h3 {
      text-transform: uppercase;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 1.25em;
      color: #fff;
    }
    span {
      font-size: 14px;
      color: rgba(250, 250, 250, 0.45);
    }
  }
  @media screen and (max-width: 920px) {
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      max-width: 450px;
    }
    div {
      width: 100%;
      max-width: 650px;
    }
  }
`;

export const CardBarberImg = styled('div')`
  text-align: center;
`;

export const Footer = styled('div')`
  padding: 2em 50px;
  span {
    text-transform: capitalize;
    font-size: 18px;
    color: #fff;
  }
  @media screen and (max-width: 920px) {
    display: flex;
    justify-content: end;
    padding: 1em;
    span {
      font-size: 14px;
    }
  }
`;
