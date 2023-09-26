import { HeaderButtons, HeaderContainer, HeaderLogo, Location } from './styles'

import logo from '../../assets/Logo.svg'
import { MapPin } from 'phosphor-react'
import { CartButton } from '../CartButton'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <img src={logo} alt="Logo do Coffee Delivery" />
      </HeaderLogo>

      <HeaderButtons>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Fortaleza, CE</span>
        </Location>

        <CartButton />
      </HeaderButtons>
    </HeaderContainer>
  )
}
