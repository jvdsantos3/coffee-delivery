import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  padding: 0 1.25rem 1.25rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border: 0;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const CoffeeCardTags = styled.div`
  margin: 0.75rem 0 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    background: ${({ theme }) => theme.colors['yellow-light']};
    border: 0;
    border-radius: 100px;

    color: ${({ theme }) => theme.colors['yellow-dark']};
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
  }
`

export const CoffeeCardTexts = styled.div`
  text-align: center;
  margin-bottom: 2.0625rem;

  h3 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const CoffeeCardPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4375rem;

  span {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 0.875rem;
    line-height: 130%;

    strong {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 130%;
    }
  }
`

export const CoffeeCardButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    width: 2.375rem;
    height: 2.375rem;
    background: ${({ theme }) => theme.colors['purple-dark']};
    border: 0;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background: ${({ theme }) => theme.colors.purple};
    }
  }
`
