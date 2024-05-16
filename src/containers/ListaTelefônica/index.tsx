import BotaoAdicionarContato from '../../components/BotaoAdicionar'
import { Contatos } from '../../components/Contatos'
import { Main, Titulo } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaTelefonica = () => {
  const { itens } = useSelector((state: RootReducer) => state.listas)
  const { termo } = useSelector((state: RootReducer) => state.busca)

  const buscaContato = () => {
    return (
      itens.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      ) &&
      itens.filter((item) => item.telefone.search(termo.toLowerCase()) >= 0) &&
      itens.filter(
        (item) => item.email.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    )
  }

  return (
    <Main>
      <Titulo>Lista de contatos</Titulo>
      <ul>
        {buscaContato().map((c) => (
          <li key={c.nome}>
            <Contatos
              email={c.email}
              nome={c.nome}
              telefone={c.telefone}
              id={c.id}
            />
          </li>
        ))}
      </ul>
      <BotaoAdicionarContato />
    </Main>
  )
}

export default ListaTelefonica
