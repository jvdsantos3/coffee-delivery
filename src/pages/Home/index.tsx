import { CoffeeCard } from '../../components/CoffeeCard'
import { coffees } from '../../util/coffees'
import { Banner } from './Components/Banner'
import {
  CoffeesContainer,
  HomeContainer,
  HomeContent,
  CoffeesSection,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <Banner />

        <CoffeesSection>
          <h2>Nossos cafés</h2>

          <CoffeesContainer>
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                img={coffee.img}
                tags={coffee.tags}
                name={coffee.name}
                description={coffee.description}
                price={coffee.price}
              />
            ))}
          </CoffeesContainer>
        </CoffeesSection>
      </HomeContent>
    </HomeContainer>
  )
}
