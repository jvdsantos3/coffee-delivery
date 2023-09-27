import styled from 'styled-components'

export const HomeContainer = styled.main``

export const HomeContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`

export const CoffeesContainer = styled.section`
  padding: 2rem 0 9.8125rem;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h2 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }
`
