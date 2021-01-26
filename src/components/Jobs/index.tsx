import React from 'react'

import { IoMdMegaphone } from 'react-icons/io'

import * as Styled from './styles'

const Jobs: React.FC = () => {
  return (
    <Styled.Container>
      <div>
        <IoMdMegaphone size={35} />
      </div>

      <h2>UI</h2>
      <p>
        Criação de belíssimas interfaces voltadas para atrair o público alvo e
        deixar seu projeto top.
      </p>
    </Styled.Container>
  )
}

export default Jobs
