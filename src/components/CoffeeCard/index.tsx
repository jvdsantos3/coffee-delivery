import { ShoppingCart } from 'phosphor-react'
import { InputNumber } from '../InputNumber'
import {
  CoffeeCardButtons,
  CoffeeCardContainer,
  CoffeeCardPrice,
  CoffeeCardTags,
  CoffeeCardTexts,
} from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface CoffeeCardProps {
  id: number
  img: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function CoffeeCard({
  id,
  img,
  tags,
  name,
  description,
  price,
}: CoffeeCardProps) {
  const [coffeeCount, setCoffeeCount] = useState(1)

  const { add } = useContext(CartContext)

  function coffeeCountActions(amount: number) {
    setCoffeeCount(amount)
  }

  function addOnCart() {
    add({
      id,
      img,
      name,
      price,
      amount: coffeeCount,
    })
  }

  const formatedPrice = (price / 100).toFixed(2).replace('.', ',')

  return (
    <CoffeeCardContainer>
      <img src={img} alt="" />

      <CoffeeCardTags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeCardTags>

      <CoffeeCardTexts>
        <h3>{name}</h3>
        <p>{description}</p>
      </CoffeeCardTexts>

      <CoffeeCardPrice>
        <span>
          R$ <strong>{formatedPrice}</strong>
        </span>

        <CoffeeCardButtons>
          <InputNumber
            amount={coffeeCount}
            coffeeCountActions={coffeeCountActions}
          />
          <button onClick={addOnCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CoffeeCardButtons>
      </CoffeeCardPrice>
    </CoffeeCardContainer>
  )
}
