import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled(NavLink)`
  display: flex;
`

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.div`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors['purple-light']};
  border: 0;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  span {
    color: ${({ theme }) => theme.colors['purple-dark']};
    font-size: 0.875rem;
  }
`
