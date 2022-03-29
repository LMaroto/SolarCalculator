import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem 4.7rem;

  height: 3.75rem;
  width: 100%;
  background-color: var(--background);
  color: white;

  h1 {
    font-size: 1.25rem;
  }
`
export const PageTitle = styled.a`
  font-size: 1.25rem;
  color: var(--white);
  font-weight: bold;
`
