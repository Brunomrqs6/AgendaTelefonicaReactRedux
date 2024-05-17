import styled from 'styled-components'

export const ContatoCard = styled.div`
  border: 2px solid black;
  border-radius: 6px;
  width: 100%;
  box-shadow: 2px 2px 2px black;
  margin-bottom: 16px;
  background-color: #dfdfdf;

  #input_telefone {
    font-size: 16px;
    resize: none;
    border: none;
    height: 20px;
    width: 120px;
    background-color: #dfdfdf;
  }
`
export const InformaCard = styled.div`
  display: flex;
  padding: 9px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d3d3d3;
`

export const BotaoEditar = styled.button`
  background: rgba(0, 0, 0, 0);
  border: none;
  border-radius: 4px;
  padding: 2px 8px;
  font-weight: bold;
  cursor: pointer;

  img {
    width: 18px;
  }

  img: hover {
    transform: scale(1.2, 1.2);
  }
`

export const BotaoSalvar = styled.button`
  background-color: green;
  border-radius: 4px;
  padding: 2px 8px;
  border: 1px solid black;
  font-weight: bold;
  cursor: pointer;
  border: none;
`

export const BotaoRemover = styled.button`
  background: rgba(0, 0, 0, 0);
  border-radius: 4px;
  padding: 2px 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;

  img {
    width: 18px;
  }

  img: hover {
    transform: scale(1.2, 1.2);
  }
`

export const Rodape = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
`
export const Nome = styled.textarea`
  font-size: 24px;
  resize: none;
  border: none;
  height: 30px;
  font-weight: bold;
  background-color: #dfdfdf;
`

export const Email = styled.textarea`
  font-size: 16px;
  resize: none;
  display: block;
  width: 300px;
  border: none;
  height: 20px;
  background-color: #dfdfdf;
`

export const BotaoCancelar = styled.button`
  background-color: white;
  border-radius: 4px;
  padding: 2px 8px;
  border: 1px solid black;
  font-weight: bold;
  cursor: pointer;
  border: none;
`
