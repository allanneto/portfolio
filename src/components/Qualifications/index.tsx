import React from 'react'
import SubTitle from '../SubTitle'

import * as Styled from './styles'
import { FaCalendar } from 'react-icons/fa'

import { IoSchoolOutline, IoBagSharp } from 'react-icons/io5'

const Qualifications: React.FC = () => {
  return (
    <Styled.Container>
      <SubTitle
        smallTitle="Minhas qualificações"
        title="A jornada até aqui..."
      />
      <div>
        <div>
          <span>
            <IoSchoolOutline size={25} /> Educação
          </span>
          <ul>
            <Styled.QualificationItem>
              <li>
                <h2>Rocketseat - GoStack 8</h2>
                <h3>Desenvolvedor</h3>
                <strong>
                  <FaCalendar size={15} /> 2019 - 2020
                </strong>
              </li>
            </Styled.QualificationItem>
          </ul>
        </div>
        <div>
          <span>
            <IoBagSharp size={25} /> Experiência
          </span>
          <ul>
            <Styled.QualificationItem>
              <li>
                <h2>Asin Soluções</h2>
                <h3>Fullstack Developér</h3>
                <strong>
                  <FaCalendar size={15} /> 2020 -
                </strong>
              </li>
            </Styled.QualificationItem>
            <Styled.QualificationItem>
              <li>
                <h2>Combinado App</h2>
                <h3>React Native Developer</h3>
                <strong>
                  <FaCalendar size={15} /> 2020 -
                </strong>
              </li>
            </Styled.QualificationItem>
          </ul>
        </div>
      </div>
    </Styled.Container>
  )
}

export default Qualifications
