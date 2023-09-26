import { ShoppingCart } from 'phosphor-react'
import { CartButtonContainer, CartItemsCount } from './styles'
import { useState } from 'react'

export function CartButton() {
  const [itemsCount] = useState(3)

  return (
    <CartButtonContainer to="/checkout">
      <ShoppingCart size={22} weight="fill" />

      {itemsCount > 0 && <CartItemsCount>{itemsCount}</CartItemsCount>}
    </CartButtonContainer>
  )
}
