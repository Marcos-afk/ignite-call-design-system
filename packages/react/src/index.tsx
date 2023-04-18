import { styled } from './styles'

const Container = styled('div', {
  flex: 1,
  background: '$gray900',
  color: '$gray200',
})

export const App = () => {
  return (
    <Container>
      <h1>Hello, world!</h1>
    </Container>
  )
}
