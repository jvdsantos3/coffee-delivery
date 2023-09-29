import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2.5rem 0;

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

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

interface AddressFormInputProps {
  size: 'full' | 'xl' | 'l' | 'm' | 's'
}

const inputSizes = {
  full: '100%',
  xl: '21.75rem',
  l: '17.25rem',
  m: '12.5rem',
  s: '3.75rem',
} as const

export const AddressFormInput = styled.input<AddressFormInputProps>`
  max-width: ${({ size }) => inputSizes[size]};
  width: 100%;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;

  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.875rem;
  line-height: 130%;

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const AddressOptionalFormInput = styled.div`
  max-width: 21.75rem;
  width: 100%;
  padding-right: 0.75rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:has(input:focus) {
    outline: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
  }

  input {
    all: unset;
    width: 100%;
    height: 100%;
    padding: 0.75rem 0 0.75rem 0.75rem;
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 0.875rem;
    line-height: 130%;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
      font-size: 0.875rem;
      line-height: 130%;
    }
  }

  span {
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: 0.75rem;
    font-style: italic;
    line-height: 130%;
  }
`

export const InputsLine = styled.div`
  display: flex;
  gap: 0.75rem;
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

export const OrderContainer = styled.aside`
  max-width: 28rem;
  flex: 1;
`

export const OrderContent = styled.div`
  max-width: 28rem;
  width: 100%;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border: 0;
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > button {
    all: unset;
    height: 2.875rem;
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: 6px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 160%;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }
`

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const OrderSummaryText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 130%;
`

export const OrderSummaryRegularText = styled(OrderSummaryText)`
  p {
    font-size: 0.875rem;
  }
`

export const OrderSummaryBoldText = styled(OrderSummaryText)`
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-size: 1.25rem;
  font-weight: 700;
`
