import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

interface LItemProps {
  active?: string
}

interface NavProps {
  showMenu?: boolean
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  position: relative;

  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
`

export const Logo = styled.h1`
  color: var(--secondary-color);
  font-size: 1.6rem;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;

  margin: 0 0 15px;
  border: 1px solid var(--secondary-color);
`

export const NavBar = styled.nav<NavProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  align-items: flex-end;

  ul {
    display: none;
    width: 100%;

    justify-content: space-between;
    ${props =>
      props.showMenu
        ? css`
            display: flex;
          `
        : ''}
  }
`
export const Menu = styled(IoMdMenu)`
  color: var(--secondary-color);
  cursor: pointer;
`
export const Close = styled(IoMdClose)`
  color: var(--secondary-color);
  cursor: pointer;
`

export const LItem = styled.li<LItemProps>`
  font-size: 1rem;
  letter-spacing: 1;
  font-weight: bold;

  color: var(--primary-color);
  :hover {
    cursor: pointer;
  }

  ${props =>
    props.active === props['aria-label']
      ? css`
          color: var(--secondary-color);
          transition: 0.5s;
        `
      : ''}
`

export const Title = styled.h1`
  font-size: 1.5rem;
  color: var(--title-color);
  margin-bottom: 15px;
`

export const Content = styled.div`
  display: flex;
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
