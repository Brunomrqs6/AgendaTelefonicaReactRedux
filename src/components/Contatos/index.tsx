import { useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/lista'
import ListaClass from '../../models/Lista'
import imagemEditar from '../../images/botao-editar.png'
import imagemRemover from '../../images/excluir.png'
import InputMask from 'react-input-mask'

type Props = ListaClass

export const Contatos = ({
  email: emailOriginal,
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [telefone, setTelefone] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
    setNome(nomeOriginal)
  }

  return (
    <S.ContatoCard>
      <S.InformaCard>
        <div>
          <S.Nome
            disabled={!estaEditando}
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
          ></S.Nome>
          <S.Email
            disabled={!estaEditando}
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          ></S.Email>
        </div>
        <div>
          <InputMask
            id="input_telefone"
            mask="(99) 99999-9999"
            disabled={!estaEditando}
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
          ></InputMask>
        </div>
      </S.InformaCard>
      <S.Rodape>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    telefone,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.BotaoEditar
              title="Editar Contato"
              onClick={() => setEstaEditando(true)}
            >
              <img src={imagemEditar} />
            </S.BotaoEditar>
            <S.BotaoRemover
              title="Excluir Contato"
              onClick={() => dispatch(remover(id))}
            >
              <img src={imagemRemover} />
            </S.BotaoRemover>
          </>
        )}
      </S.Rodape>
    </S.ContatoCard>
  )
}
