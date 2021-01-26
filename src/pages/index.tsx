import React from 'react'
import * as Styled from '../styles/pages'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Profile from '../components/Profile'
import Techs from '../components/Techs'
import Qualifications from '../components/Qualifications'
import Jobs from '../components/Jobs'

const Home: React.FC = () => {
  return (
    <Styled.Container>
      <Header />
      <Styled.Content>
        <Banner />

        <Profile />

        <Techs />

        <Qualifications />

        <Styled.JobBox>
          <Jobs />
          <Jobs />
          <Jobs />
        </Styled.JobBox>
      </Styled.Content>
    </Styled.Container>
  )
}

export default Home
