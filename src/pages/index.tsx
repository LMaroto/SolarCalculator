import type { NextPage } from 'next'
import { Dashboard } from './Dashboard/Dashboard'
import { GlobalStyle } from '../styles/global'

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
    </>
  )
}

export default Home
