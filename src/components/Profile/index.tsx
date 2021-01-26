import React from 'react'
import SubTitle from '../SubTitle'

import * as Styled from './styles'

const Profile: React.FC = () => {
  return (
    <Styled.Container>
      <SubTitle smallTitle="Quem é voce?" title="Conhecendo o NAllan" />{' '}
      <ul>
        <li>
          <span>Item: </span> <span>o negocio do item</span>
        </li>
        <li>
          <span>Item: </span> <span>o negocio do item</span>
        </li>
        <li>
          <span>Item: </span> <span>o negocio do item</span>
        </li>
      </ul>
    </Styled.Container>
  )
}

export default Profile
