import React, { useState } from 'react'
import * as Styled from '../styles/pages'
import PortfolioImg from '../assets/images/portfolio2.svg'

import { FaTasks, FaTrophy, FaHeadphones } from 'react-icons/fa'

import Button from '../components/Button'
import SideBar from '../components/SideBar'

const Home: React.FC = () => {
  const [active, setActive] = useState('inicio')
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
    console.log('A Ste so reclama dos estagi')
  }

  return (
    <Styled.Container>
      <Styled.Header>
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
      </Styled.Header>

      <Styled.Content>
        <SideBar />
        <Styled.Profile>
          <p>
            <span>Opa, sou o</span>
            <h1>Allan Neto</h1>
            <h2>Desenvolvedor Fullstack</h2>
          </p>
          <PortfolioImg />
        </Styled.Profile>
        <Styled.ButtonsBox>
          <Button>Baixar Curriculo</Button>
          <Button>Entre em contato</Button>
        </Styled.ButtonsBox>

        <Styled.HighlightBox>
          <div>
            <Styled.HighlightItem>
              <FaTasks />
              <span>2 anos de Experiência</span>
            </Styled.HighlightItem>
            <Styled.HighlightItem>
              <FaTrophy />
              <span>Projetos lançados: ?</span>
            </Styled.HighlightItem>
            <Styled.HighlightItem>
              <FaHeadphones />
              <span>Atendimento: Seg - Sex</span>
            </Styled.HighlightItem>
          </div>
        </Styled.HighlightBox>
      </Styled.Content>
    </Styled.Container>
  )
}

export default Home
