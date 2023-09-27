import bannerImg from '../../../../assets/banner.png'

import { Package, ShoppingCart } from 'phosphor-react'
import {
  HomeInfo,
  HomeInfoContainer,
  HomeInfoTexts,
  Topics,
  TopicsContainer,
} from './styles'

export function Banner() {
  return (
    <HomeInfoContainer>
      <HomeInfo>
        <HomeInfoTexts>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </HomeInfoTexts>

        <TopicsContainer>
          <Topics variant="orange">
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            Compra simples e segura
          </Topics>

          <Topics variant="dark">
            <span>
              <Package size={16} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </Topics>

          <Topics variant="yellow">
            <span>
              <Package size={16} weight="fill" />
            </span>
            Entrega rápida e rastreada
          </Topics>

          <Topics variant="purple">
            <span>
              <Package size={16} weight="fill" />
            </span>
            O café chega fresquinho até você
          </Topics>
        </TopicsContainer>
      </HomeInfo>

      <img src={bannerImg} alt="" />
    </HomeInfoContainer>
  )
}
