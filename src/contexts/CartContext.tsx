import { ReactNode, createContext, useState } from 'react'

interface Coffee {
  id: number
  img: string
  name: string
  price: number
  amount: number
}

interface CartContextType {
  cartItems: Coffee[]
  add: (data: Coffee) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Coffee[]>([])

  function add(data: Coffee) {
    const ItemAlreadyInCart = cartItems.findIndex((item) => item.id === data.id)

    if (ItemAlreadyInCart >= 0) {
      cartItems[ItemAlreadyInCart].amount += data.amount
    } else {
      setCartItems((state) => [...state, data])
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        add,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
