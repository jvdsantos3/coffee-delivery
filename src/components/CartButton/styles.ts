import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CartButtonContainer = styled(NavLink)`
  width: 2.375rem;
  height: 2.375rem;
  background: ${({ theme }) => theme.colors['yellow-light']};
  border: 0;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors['yellow-dark']};
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const CartItemsCount = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  background: ${({ theme }) => theme.colors['yellow-dark']};
  border: 0;
  border-radius: 9999px;
  position: absolute;
  top: -0.4375rem;
  right: -0.4375rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: 0.75rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`
