import styled from 'styled-components'

export const Container = styled.aside`
  padding: 8px;
  background-color: #bfbfbf;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Input = styled.input`
  padding: 6px;
  border-radius: 8px;
  width: 206px;
  text-align: center;
  margin-bottom: 8px;
  box-shadow: 2px 2px 2px black;
`

export const FiltrosDiv = styled.div`
  display: flex;
  justify-content: center;
  display: grid;
  max-width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`
