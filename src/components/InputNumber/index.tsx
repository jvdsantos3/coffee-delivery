import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { InputNumberContainer } from './styles'

interface InputNumberProps {
  amount?: number
}

export function InputNumber({ amount = 1 }: InputNumberProps) {
  const [count, setCount] = useState(amount)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <InputNumberContainer>
      <Minus size={14} weight="bold" onClick={decrement} />
      <span>{count}</span>
      <Plus size={14} weight="bold" onClick={increment} />
    </InputNumberContainer>
  )
}
