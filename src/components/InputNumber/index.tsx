import { Minus, Plus } from 'phosphor-react'
import { InputNumberContainer } from './styles'

interface InputNumberProps {
  amount: number
  coffeeCountActions: (amount: number) => void
}

export function InputNumber({ amount, coffeeCountActions }: InputNumberProps) {
  function increment() {
    coffeeCountActions(amount + 1)
  }

  function decrement() {
    if (amount > 0) {
      coffeeCountActions(amount - 1)
    }
  }

  return (
    <InputNumberContainer>
      <Minus size={14} weight="bold" onClick={decrement} />
      <span>{amount}</span>
      <Plus size={14} weight="bold" onClick={increment} />
    </InputNumberContainer>
  )
}
