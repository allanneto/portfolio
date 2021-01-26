import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;

  flex-direction: column;
  background-color: #0a0919;
  justify-content: space-between;

  padding: 40px 40px;

  svg {
    height: 130px;
    width: 200px;
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  p {
    span {
      color: var(--secondary-color);
      font-size: 1rem;
    }

    h1 {
      font-size: 1.6rem;
    }
  }
`

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  button {
    :first-child {
      margin-right: 20px;
    }
  }
`

export const HighlightBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80px;
  width: 80%;

  top: calc(100% - 40px);
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  background-color: #0d0b21;

  border-radius: 40px;

  svg {
    width: 20px;
    height: 20px;
  }

  div {
    position: relative;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`

export const HighlightItem = styled.div`
  span {
    font-size: 0.7rem;
    overflow: block;
    text-align: left;
    width: 50%;
  }

  :nth-child(2) {
    ::before,
    ::after {
      position: absolute;
      content: '';
      height: 40px;

      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;

      border-left: 1px solid #fff;
    }

    ::before {
      left: 0;
    }

    ::after {
      right: 0;
    }
  }
`
