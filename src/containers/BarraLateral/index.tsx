import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/busca'
import minhaImagem from '../../images/voltar.png'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarBusca: boolean
}

const BarraLateral = ({ mostrarBusca }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.busca)

  return (
    <S.Container>
      {mostrarBusca ? (
        <>
          <S.DivBuscar>
            <S.Input
              type="text"
              placeholder="Buscar um contato"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
          </S.DivBuscar>
        </>
      ) : (
        <S.BotaoVoltar onClick={() => navigate('/')} type="button">
          <img src={minhaImagem} />
        </S.BotaoVoltar>
      )}
    </S.Container>
  )
}

export default BarraLateral
