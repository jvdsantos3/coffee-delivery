import styled from 'styled-components'

export const HomeInfoContainer = styled.section`
  padding: 5.75rem 0;

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

export const TopicsContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
`

interface TopicsProps {
  variant: 'orange' | 'dark' | 'yellow' | 'purple'
}

const variants = {
  orange: 'yellow-dark',
  dark: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

export const Topics = styled.div<TopicsProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme, variant }) => theme.colors[variants[variant]]};
    border: 0;
    border-radius: 9999px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
