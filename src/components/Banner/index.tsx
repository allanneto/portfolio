import React from 'react'
import SideBar from '../SideBar'
import PortfolioImg from '../../assets/images/portfolio2.svg'
import { FaTasks, FaTrophy, FaHeadphones } from 'react-icons/fa'

import * as Styled from './styles'
import Button from '../Button'

const Banner: React.FC = () => {
  return (
    <Styled.Container>
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
            <span>Cursos completos: 1</span>
          </Styled.HighlightItem>
          <Styled.HighlightItem>
            <FaHeadphones />
            <span>Atendimento: Seg - Sex</span>
          </Styled.HighlightItem>
        </div>
      </Styled.HighlightBox>
    </Styled.Container>
  )
}

export default Banner
