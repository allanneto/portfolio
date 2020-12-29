import styled from 'styled-components'

interface ButtonProps {
  propColor: string
}

export const Container = styled.button<ButtonProps>`
  border: 0;
  background-color: transparent;
  color: var(--third-color);
  border: 1px solid var(--third-color);
  font-weight: bold;

  height: 30px;
  width: 130px;
  border-radius: 15px;
  cursor: pointer;

  :hover {
    background-color: ${props =>
      props.propColor ? props.propColor : 'var(--third-color)'};

    color: #0a0919;
    transition: 0.3s;
  }
`
