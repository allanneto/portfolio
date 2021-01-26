import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 40px;
  margin: 15px 0;

  div {
    display: flex;
    width: 100%;

    div {
      display: flex;

      justify-content: flex-start;
      flex-direction: column;

      span {
        font-size: 1.2rem;
        font-weight: bold;

        display: flex;
        align-items: center;

        margin: 15px 0;

        svg {
          margin-right: 20px;
        }
      }
    }
  }
`

export const QualificationItem = styled.div`
  position: relative;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 20px;

    height: 70px;

    margin: 0 0 10px 10px;

    h1 {
      margin-bottom: 3px;
    }

    strong {
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
      }

      font-size: 0.8rem;
      color: var(--secondary-color);
      margin-top: 5px;
    }
  }
  ::before {
    content: '';
    position: absolute;
    top: 8px;
    width: 10px;
    height: 10px;
    margin-left: 10px;
    background-color: var(--secondary-color);
    border-radius: 5px;
    box-shadow: 0px 0px 0px 4px var(--color-background),
      0px 0px 0px 5px var(--secondary-color);
  }
`
