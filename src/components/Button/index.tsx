import React from 'react'

import { Container } from './styles'

interface Props {
  color?: string
}

const Button: React.FC<Props> = ({ color, children }) => {
  return <Container propColor={color}>{children}</Container>
}

export default Button
