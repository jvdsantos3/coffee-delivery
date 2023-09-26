import { HomeContainer, HomeContent, HomeInfo, HomeInfoTexts } from './styles'

import bannerImg from '../../assets/banner.png'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeInfo>
          <HomeInfoTexts>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HomeInfoTexts>

          <div></div>
        </HomeInfo>

        <img src={bannerImg} alt="" />
      </HomeContent>
    </HomeContainer>
  )
}
