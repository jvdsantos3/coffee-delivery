import { Trash } from 'phosphor-react'
import { InputNumber } from '../InputNumber'
import {
  OrderCoffeeCardActions,
  OrderCoffeeCardContainer,
  OrderCoffeeCardContent,
  OrderCoffeeCardSummary,
} from './styles'
import { priceFormatter } from '../../util/formatter'

interface OrderCoffeeCardProps {
  img: string
  name: string
  amount: number
  price: number
}

export function OrderCoffeeCard({
  img,
  name,
  amount,
  price,
}: OrderCoffeeCardProps) {
  return (
    <OrderCoffeeCardContainer>
      <OrderCoffeeCardContent>
        <img src={img} alt="" />

        <OrderCoffeeCardSummary>
          <p>{name}</p>

          <OrderCoffeeCardActions>
            <InputNumber amount={amount} />

            <button>
              <Trash size={16} />
              Remover
            </button>
          </OrderCoffeeCardActions>
        </OrderCoffeeCardSummary>
      </OrderCoffeeCardContent>

      <span>{priceFormatter.format(price / 100)}</span>
    </OrderCoffeeCardContainer>
  )
}
