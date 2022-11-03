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
