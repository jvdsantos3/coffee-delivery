import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  background: ${({ theme }) => theme.colors['base-button']};
  border: 0;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  span {
    width: 1.25rem;
    text-align: center;
    font-size: 1rem;
    line-height: 130%;
  }

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.purple};

    &:hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }
`
