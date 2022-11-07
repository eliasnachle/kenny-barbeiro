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
`;
