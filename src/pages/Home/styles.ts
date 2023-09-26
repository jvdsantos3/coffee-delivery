import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding: 5.75rem 0;
`

export const HomeContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4.125rem;
`

export const HomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const HomeInfoTexts = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors['base-title']};
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
`
