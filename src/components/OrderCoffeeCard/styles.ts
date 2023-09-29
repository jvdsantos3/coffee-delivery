import styled from 'styled-components'

export const OrderCoffeeCardContainer = styled.div`
  padding: 0.5rem 0.25rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const OrderCoffeeCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const OrderCoffeeCardSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    line-height: 130%;
  }
`

export const OrderCoffeeCardActions = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    all: unset;
    padding: 0.40625rem 0.5rem;
    background: ${({ theme }) => theme.colors['base-button']};
    border-radius: 6px;

    font-size: 0.75rem;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    &:hover {
      background: ${({ theme }) => theme.colors['base-hover']};
      color: ${({ theme }) => theme.colors['base-subtitle']};

      svg {
        color: ${({ theme }) => theme.colors['purple-dark']};
      }
    }
  }
`
