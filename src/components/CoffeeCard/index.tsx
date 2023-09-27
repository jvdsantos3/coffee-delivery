import { ShoppingCart } from 'phosphor-react'
import { InputNumber } from '../InputNumber'
import {
  CoffeeCardButtons,
  CoffeeCardContainer,
  CoffeeCardPrice,
  CoffeeCardTags,
  CoffeeCardTexts,
} from './styles'

interface CoffeeCardProps {
  img: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function CoffeeCard({
  img,
  tags,
  name,
  description,
  price,
}: CoffeeCardProps) {
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
          <InputNumber />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CoffeeCardButtons>
      </CoffeeCardPrice>
    </CoffeeCardContainer>
  )
}
