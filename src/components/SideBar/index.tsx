import React from 'react'

import { FaTwitter, FaTwitch, FaLinkedin } from 'react-icons/fa'

import { Container } from './styles'

const SideBar: React.FC = () => {
  return (
    <Container>
      <FaTwitter color="#FFF"></FaTwitter>
      <FaTwitch color="#FFF"></FaTwitch>
      <FaLinkedin color="#FFF"></FaLinkedin>
    </Container>
  )
}

export default SideBar
