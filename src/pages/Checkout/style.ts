import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2.5rem 0 15rem;

  display: flex;
  align-items: flex-start;
  gap: 2rem;
`

export const ClientInfos = styled.article`
  max-width: 40rem;
  flex: 1;
`

const Box = styled.section`
  padding: 2.5rem;
  margin: 0.9375rem 0 0.75rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border: 0;
  border-radius: 6px;
`

export const BoxTitle = styled.h2`
  margin-bottom: 0.9375rem;
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%;
`

interface BoxHeaderProps {
  variant: 'yellow' | 'purple'
}

const variants = {
  yellow: 'yellow-dark',
  purple: 'purple',
} as const

export const BoxHeader = styled.div<BoxHeaderProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${({ theme, variant }) => theme.colors[variants[variant]]};
  }

  div {
    color: ${({ theme }) => theme.colors['base-subtitle']};

    p {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors['base-text']};
      margin-top: 0.125rem;
    }
  }
`

export const Address = styled(Box)``

export const AddressFormInput = styled.input`
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;

  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const PaymentMethod = styled(Box)``

export const PaymentOptions = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`

export const PaymentOptionsItem = styled(RadioGroup.Item)`
  padding: 1rem;
  background: ${({ theme }) => theme.colors['base-button']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  text-transform: uppercase;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &[data-state='unchecked']:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  &[data-state='checked'] {
    background: ${({ theme }) => theme.colors['purple-light']};
    color: ${({ theme }) => theme.colors['base-text']};
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`

export const Order = styled.aside``
