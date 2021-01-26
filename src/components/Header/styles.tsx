import styled, { css } from 'styled-components'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

interface LItemProps {
  active?: string
}

interface NavProps {
  showMenu?: boolean
}
export const Container = styled.header`
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
