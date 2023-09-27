import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { InputNumberContainer } from './styles'

export function InputNumber() {
  const [count, setCount] = useState(1)

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
