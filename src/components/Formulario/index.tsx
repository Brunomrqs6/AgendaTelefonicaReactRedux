import { FormEvent, useState } from 'react'
import { Botao, Form, Input, PaginaContato, Titulo } from './styles'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/lista'
import InputMask from 'react-input-mask'

const CadastroContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        telefone,
        email
      })
    )
    navigate('/')
  }

  return (
    <>
      <PaginaContato>
        <Titulo>Novo contato</Titulo>
        <Form onSubmit={cadastrarContato}>
          <Input
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            type="text"
            placeholder="Nome"
          />
          <Input
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            type="text"
            placeholder="Email"
          />
          <InputMask
            id="input_telefone"
            mask="(99) 99999-9999"
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
            type="text"
            placeholder="Telefone"
          />
          <Botao type="submit">Adicionar Contato</Botao>
        </Form>
      </PaginaContato>
    </>
  )
}

export default CadastroContato
