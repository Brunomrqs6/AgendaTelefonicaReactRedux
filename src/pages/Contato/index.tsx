import CadastroContato from '../../components/Formulario'
import BarraLateral from '../../containers/BarraLateral'

const NewContato = () => {
  return (
    <>
      <BarraLateral mostrarBusca={false} />
      <CadastroContato />
    </>
  )
}

export default NewContato
