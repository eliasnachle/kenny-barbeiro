import styled from '@emotion/styled'

export const Redirect = styled('a')`
  text-decoration: none;
  transition: all ease-in 150ms;
  display: grid;
  grid-template-columns: 10% 85%;
  place-items: center;
  padding: 0 1em;
  cursor: pointer;
  height: 55px;
  background: #262626;
  color: #fff;
  font-size: 16px;
  text-transform: capitalize;
  border-radius: 5px;
  border: none;
  outline: none;
  svg {
    font-size: 40px;
    color: #fed168;
    background: #4e4635;
    padding: 8px;
    border-radius: 100%;
  }
  &:hover {
    opacity: 0.85;
    transform: scale(1.025);
  }
`
