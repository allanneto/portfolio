import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;

  span {
    font-size: 1rem;
    color: var(--secondary-color);
    margin-bottom: 5px;
  }

  h1 {
    font-size: 1.6rem;
    color: #fff;
    font-weight: bold;
  }
`
