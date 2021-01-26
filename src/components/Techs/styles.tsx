import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 40px;

  margin: 15px 0;

  align-items: center;

  h1 {
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;

    width: 100%;
    height: 250px;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      border: 1px solid #fff;
      height: 40px;
      width: calc(50% - 10px / 2);
      border-radius: 20px;
      padding: 0 20px;

      span {
        font-size: 0.8rem;
        font-weight: bold;
      }

      div {
        display: flex;
        align-items: center;
      }

      :nth-of-type(2n) {
        margin-left: 10px;
      }

      :hover {
        border: 1px solid var(--secondary-color);
        transition: 0.2s;
        color: var(--secondary-color);
      }
    }
  }
`
