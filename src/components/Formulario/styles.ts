import styled from 'styled-components'

export const PaginaContato = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`

export const Input = styled.input`
  display: block;
  padding: 6px;
  border-radius: 8px;
  width: 206px;
  text-align: center;
  margin-bottom: 8px;
  box-shadow: 2px 2px 2px black;
  font-weight: bold;
  border: none;
`

export const Form = styled.form`
  input:focus {
    outline: 0;
    box-shadow: 4px 4px 4px black;
  }

  button:hover {
    box-shadow: 3px 3px 3px black;
  }
`

export const Titulo = styled.h1`
  margin-bottom: 16px;
  text-align: center;
`

export const Botao = styled.button`
  display: block;
  padding: 2px;
  border-radius: 8px;
  width: 160px;
  text-align: center;
  box-shadow: 2px 2px 2px black;
  font-weight: bold;
  margin: 0 auto;
  margin-top: 16px;
  background-color: green;
  cursor: pointer;
  border: none;
`
