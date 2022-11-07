import styled from '@emotion/styled';

export const Navbar = styled('div')`
  background: #111;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 50px;
  ul {
    li {
      list-style: none;
    }
  }
  @media screen and (max-width: 920px) {
    padding: 1em 25px;
    ul {
      display: none;
    }
  }
`;

export const NavbarLink = styled('a')`
  cursor: pointer;
  padding: 0 0.5rem;
  font-size: 16px;
  text-decoration: none;
  color: white;
  &:hover {
    opacity: 0.85;
  }
`;

export const LogoNavbar = styled('div')`
  a {
    text-decoration: none;
    span {
      color: #fff;
      font-weight: 200;
    }
  }
`;

export const BurgerMenu = styled('div')`
  display: none;
  svg {
    font-size: 2em;
    color: #fff;
    cursor: pointer;
  }
  @media screen and (max-width: 920px) {
    display: block;
  }
`;

export const MobileMenu = styled('div')`
  transition: all ease-in-out 600ms;
  left: -100%;
  z-index: 999;
  position: absolute;
  background: #000;
  height: 100vh;
  width: 100%;
  div {
    padding: 1em 25px;
    svg {
      color: #fff;
      font-size: 2em;
      cursor: pointer;
    }
  }
  ul {
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3em;
      a {
        font-size: 25px;
        border-bottom: 1.5px solid #424245;
        width: 80%;
        text-align: left;
        padding: 10px 0;
      }
    }
  }
`;
