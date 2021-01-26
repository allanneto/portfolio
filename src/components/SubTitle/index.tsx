import React from 'react'

import { Container } from './styles'

interface Props {
  smallTitle: string
  title: string
}

const SubTitle: React.FC<Props> = ({ smallTitle, title }) => {
  return (
    <Container>
      <span>{smallTitle}</span>
      <h1>{title}</h1>
    </Container>
  )
}

export default SubTitle
