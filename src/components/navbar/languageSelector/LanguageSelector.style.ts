import styled from '@emotion/styled';

export const Container = styled('div')`
  width: 80px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 20px;
    height: 20px;
    border-radius: 100%;
  }
  svg {
    color: #fff;
  }
`;

export const Dropdown = styled('div')`
  display: none;
  div {
    position: absolute;
    margin-top: 10px;
    width: 92px;
    height: 32px;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: start;
    padding: 0.5rem;
    border-radius: 5px;
    background: #494949;
    img {
      object-fit: cover;
      width: 20px;
      height: 20px;
      border-radius: 100%;
    }
  }
`;
