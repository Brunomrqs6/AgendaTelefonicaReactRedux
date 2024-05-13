import BarraLateral from './containers/BarraLateral'
import ListaTelefonica from './containers/ListaTelefônica'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaTelefonica />
      </Container>
    </>
  )
}

export default App
