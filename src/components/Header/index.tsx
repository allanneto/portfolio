import React, { useState } from 'react'

import * as Styled from './styles'

const Header: React.FC = () => {
  const [active, setActive] = useState('inicio')
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
    console.log('A Ste so reclama dos estagi')
  }

  return (
    <Styled.Container>
      <Styled.Logo>AN.</Styled.Logo>
      <Styled.NavBar showMenu={openMenu}>
        {!openMenu ? (
          <Styled.Menu size={25} onClick={handleOpenMenu} />
        ) : (
          <Styled.Close size={20} onClick={handleOpenMenu} />
        )}

        <ul>
          <Styled.LItem
            active={active}
            aria-label="inicio"
            onClick={() => setActive('inicio')}
          >
            Inicio
          </Styled.LItem>
          <Styled.LItem
            active={active}
            aria-label="sobre"
            onClick={() => setActive('sobre')}
          >
            Sobre
          </Styled.LItem>
          <Styled.LItem
            active={active}
            aria-label="projetos"
            onClick={() => setActive('projetos')}
          >
            Projetos
          </Styled.LItem>
          <Styled.LItem
            active={active}
            aria-label="contato"
            onClick={() => setActive('contato')}
          >
            Contato
          </Styled.LItem>
        </ul>
      </Styled.NavBar>
    </Styled.Container>
  )
}

export default Header
