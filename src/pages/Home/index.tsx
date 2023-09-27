import { Banner } from './Components/Banner'
import { CoffeesContainer, HomeContainer, HomeContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <Banner />

        <CoffeesContainer>
          <h2>Nossos cafés</h2>

          <div>
            <div></div>
          </div>
        </CoffeesContainer>
      </HomeContent>
    </HomeContainer>
  )
}
