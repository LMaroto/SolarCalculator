import { FC } from 'react'
import { Container, PageTitle } from './styles'
import { FiChevronLeft } from 'react-icons/fi'

export interface NavigationProps {
  title: string
  showBackButton: boolean
}

const Navigation: FC<NavigationProps> = ({ title, showBackButton }) => {
  return (
    <Container>
      {showBackButton ? (
        <div>
          <FiChevronLeft size={20} />
          <PageTitle href="#">{title}</PageTitle>
        </div>
      ) : (
        <PageTitle href="#">{title}</PageTitle>
      )}
      <h1>SolarCalculator</h1>
    </Container>
  )
}

export default Navigation
