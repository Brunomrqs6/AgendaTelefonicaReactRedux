import { Filtros } from '../../components/Filtros'
import { FiltroCard } from '../../components/Filtros/styles'
import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Container>
      <div>
        <S.Input type="text" placeholder="Buscar um contato" />
        <S.FiltrosDiv>
          <Filtros />
          <Filtros />
          <Filtros />
          <Filtros />
          <Filtros />
          <Filtros />
        </S.FiltrosDiv>
      </div>
    </S.Container>
  )
}

export default BarraLateral
