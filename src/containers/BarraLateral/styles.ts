import styled from 'styled-components'

export const Container = styled.aside`
  padding: 8px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button:hover {
    box-shadow: 4px 4px 4px black;
  }
`

export const DivBuscar = styled.div`
  input:focus {
    outline: 0;
    box-shadow: 4px 4px 4px black;
  }
`

export const Input = styled.input`
  padding: 6px;
  border-radius: 8px;
  width: 206px;
  text-align: center;
  margin-bottom: 8px;
  box-shadow: 2px 2px 2px black;
  font-weight: bold;
  margin-top: 16px;
  border: none;
`

export const FiltrosDiv = styled.div`
  display: flex;
  justify-content: center;
  display: grid;
  max-width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`

export const BotaoVoltar = styled.button`
  position: absolute;
  bottom: 0;
  padding: 8px;
  width: 60px;
  margin-bottom: 20px;
  margin-left: 15px;
  background-color: #6e6e6e;
  border: none;
  box-shadow: 2px 2px 2px black;
  border-radius: 8px;
  cursor: pointer;

  img {
    width: 32px;
  }
`
