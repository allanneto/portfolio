import React from 'react'

import {
  SiAndroid,
  SiApple,
  SiReact,
  SiNodeDotJs,
  SiJest,
  SiNextDotJs,
  SiTypescript,
  SiStyledComponents,
  SiMysql,
  SiPostgresql
} from 'react-icons/si'
import SubTitle from '../SubTitle'

import * as Styled from './styles'

const Techs: React.FC = () => {
  return (
    <Styled.Container>
      <SubTitle
        smallTitle="Por que voce me contrataria?"
        title="Minhas Skills"
      />

      <ul>
        <li>
          <span>React Native</span>

          <div>
            <SiAndroid size={25} />
            <SiApple size={25} />
          </div>
        </li>
        <li>
          <span>React</span>
          <SiReact size={25} />
        </li>
        <li>
          <span>NodeJS</span>

          <SiNodeDotJs size={25} />
        </li>
        <li>
          <span>Jest</span>

          <SiJest size={25} />
        </li>
        <li>
          <span>NextJS</span>

          <SiNextDotJs size={25} />
        </li>
        <li>
          <span>Typescript</span>

          <SiTypescript size={25} />
        </li>
        <li>
          <span>Styled Components</span>

          <SiStyledComponents size={25} />
        </li>
        <li>
          <span>SQL</span>

          <div>
            <SiMysql size={25} />
            <SiPostgresql size={25} />
          </div>
        </li>
      </ul>
    </Styled.Container>
  )
}

export default Techs
