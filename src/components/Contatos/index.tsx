import { Botao, ContatoCard, NomeNumero } from './styles'

export const Contatos = () => {
  return (
    <ContatoCard>
      <NomeNumero>
        <h2>Bruno</h2>
        <p>61 97400-8472</p>
      </NomeNumero>
      <div>
        <Botao>
          <img
            src="src\images\edit_24dp_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
          />
        </Botao>
        <button>Remover contato</button>
      </div>
    </ContatoCard>
  )
}
