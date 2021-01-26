import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  border: 1px solid #fff;

  height: 150px;
  width: 250px;
  margin: 50px 40px;
  padding: 30px;

  border-radius: 0 40px 0 0;

  p {
    margin-top: 10px;
    font-size: 0.8rem;
  }

  div {
    position: absolute;
    background-color: var(--secondary-color);
    padding: 10px;
    border-radius: 6px;

    top: -25%;
  }

  :hover {
    background-color: var(--secondary-color);
    border: 0px;

    transition: 0.5s;

    div {
      background-color: #fff;
      transition: 0.5s;

      svg {
        color: var(--secondary-color);
        transition: 0.5s;
      }
    }
  }
`
